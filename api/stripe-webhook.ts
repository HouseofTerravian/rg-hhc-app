import type { VercelRequest, VercelResponse } from '@vercel/node'
import Stripe from 'stripe'
import { createClient } from '@supabase/supabase-js'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: '2025-04-30.basil' })
const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET!

const supabase = createClient(
  process.env.VITE_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
)

export const config = { api: { bodyParser: false } }

async function buffer(req: VercelRequest): Promise<Buffer> {
  const chunks: Buffer[] = []
  for await (const chunk of req) {
    chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk)
  }
  return Buffer.concat(chunks)
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })

  const sig = req.headers['stripe-signature'] as string
  const body = await buffer(req)

  let event: Stripe.Event
  try {
    event = stripe.webhooks.constructEvent(body, sig, endpointSecret)
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : 'Unknown error'
    console.error('Webhook signature verification failed:', msg)
    return res.status(400).json({ error: `Webhook Error: ${msg}` })
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session
    const userId = session.client_reference_id

    if (!userId) {
      console.warn('No client_reference_id on session:', session.id)
      return res.status(200).json({ received: true })
    }

    const today = new Date().toISOString().split('T')[0]
    const amount = session.amount_total ?? 0

    // Daily mission unlock ($1 = 100 cents)
    if (amount === 100) {
      const missionKey = session.metadata?.mission_key
      await supabase
        .from('user_progress')
        .upsert(
          { user_id: userId, last_unlocked_date: today },
          { onConflict: 'user_id' },
        )
      if (missionKey) {
        await supabase
          .from('paid_missions')
          .upsert(
            { user_id: userId, mission_key: missionKey, paid_at: new Date().toISOString() },
            { onConflict: 'user_id,mission_key' },
          )
      }
      console.log(`Mission ${missionKey ?? 'unknown'} unlocked for user ${userId} on ${today}`)
    }

    // 365-Day Pledge ($299 = 29900 cents)
    if (amount === 29900) {
      await supabase
        .from('user_progress')
        .upsert(
          { user_id: userId, pledge_type: 'annual' },
          { onConflict: 'user_id' },
        )
      console.log(`365-Day Pledge activated for user ${userId}`)
    }
  }

  return res.status(200).json({ received: true })
}

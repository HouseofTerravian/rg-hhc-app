import type { VercelRequest, VercelResponse } from '@vercel/node'
import twilio from 'twilio'

const client = twilio(
  process.env.TWILIO_ACCOUNT_SID!,
  process.env.TWILIO_AUTH_TOKEN!,
)
const FROM = process.env.TWILIO_PHONE_NUMBER!

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })

  const { to, body } = req.body ?? {}
  if (!to || !body) return res.status(400).json({ error: 'Missing "to" or "body"' })

  try {
    const message = await client.messages.create({ to, from: FROM, body })
    return res.status(200).json({ sid: message.sid })
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : 'Unknown error'
    console.error('Twilio send failed:', msg)
    return res.status(500).json({ error: msg })
  }
}

import type { VercelRequest, VercelResponse } from '@vercel/node'
import twilio from 'twilio'

const client = twilio(
  process.env.TWILIO_ACCOUNT_SID!,
  process.env.TWILIO_AUTH_TOKEN!,
)
const FROM = process.env.TWILIO_PHONE_NUMBER!

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })

  const { partnerPhone, partnerName, userName } = req.body ?? {}

  if (!partnerPhone) return res.status(400).json({ error: 'Missing partnerPhone' })

  const name = partnerName || 'Hey'
  const from = userName || 'Your partner'

  const body = [
    `${name}, ${from} just signed up for Relationship Goals — a daily love mission program for couples.`,
    '',
    `They added you as their partner. Every day, you'll both unlock a short exercise designed to strengthen your relationship. Complete it together to earn rewards and vacation credits.`,
    '',
    `Open the app to get started:`,
    '🔗 app.rg.hhc.travel',
    '',
    `— Relationship Goals by HHC Travel`,
  ].join('\n')

  try {
    const message = await client.messages.create({ to: partnerPhone, from: FROM, body })
    return res.status(200).json({ sid: message.sid })
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : 'Unknown error'
    console.error('Partner invite failed:', msg)
    return res.status(500).json({ error: msg })
  }
}

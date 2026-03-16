import type { VercelRequest, VercelResponse } from '@vercel/node'
import twilio from 'twilio'

const client = twilio(
  process.env.TWILIO_ACCOUNT_SID!,
  process.env.TWILIO_AUTH_TOKEN!,
)
const FROM = process.env.TWILIO_PHONE_NUMBER!

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })

  const { partnerPhone, partnerName, userName, missionTitle, missionEmoji, day, program } = req.body ?? {}

  if (!partnerPhone) return res.status(400).json({ error: 'Missing partnerPhone' })

  const name = partnerName || 'your partner'
  const greeting = userName ? `${userName} just completed` : 'Your partner just completed'

  const body = [
    `${missionEmoji || '💞'} ${greeting} Day ${day || '?'} — "${missionTitle || 'today\'s love mission'}"`,
    '',
    `Now it's your turn, ${name}. Open the app and complete today's mission together.`,
    '',
    '🔗 app.rg.hhc.travel',
    '',
    `— Relationship Goals by HHC Travel`,
  ].join('\n')

  try {
    const message = await client.messages.create({ to: partnerPhone, from: FROM, body })
    return res.status(200).json({ sid: message.sid })
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : 'Unknown error'
    console.error('Partner notify failed:', msg)
    return res.status(500).json({ error: msg })
  }
}

import type { VercelRequest, VercelResponse } from '@vercel/node'
import { createClient } from '@supabase/supabase-js'
import twilio from 'twilio'

const supabase = createClient(
  process.env.VITE_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
)
const sms = twilio(
  process.env.TWILIO_ACCOUNT_SID!,
  process.env.TWILIO_AUTH_TOKEN!,
)
const FROM = process.env.TWILIO_PHONE_NUMBER!

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Verify this is called by Vercel Cron (not public)
  if (req.headers.authorization !== `Bearer ${process.env.CRON_SECRET}`) {
    return res.status(401).json({ error: 'Unauthorized' })
  }

  // Get all active users with phone numbers
  const { data: profiles, error: profileErr } = await supabase
    .from('user_profiles')
    .select('user_id, full_name, phone, partner_name, partner_phone')

  if (profileErr || !profiles) {
    console.error('Failed to fetch profiles:', profileErr?.message)
    return res.status(500).json({ error: 'Failed to fetch profiles' })
  }

  let sent = 0
  let failed = 0

  for (const profile of profiles) {
    if (!profile.phone) continue

    // Get user's current progress
    const { data: progress } = await supabase
      .from('user_progress')
      .select('current_day, program, streak')
      .eq('user_id', profile.user_id)
      .single()

    if (!progress?.program) continue

    const day = (progress.current_day ?? 0) + 1
    const programLabel = PROGRAM_LABELS[progress.program] || progress.program
    const streak = progress.streak ?? 0

    const body = [
      `🌅 Good morning, ${profile.full_name || 'love'}!`,
      '',
      `Day ${day} of ${programLabel} is ready.`,
      streak > 1 ? `🔥 You're on a ${streak}-day streak — don't break the chain.` : '',
      '',
      `Open the app to unlock today's mission:`,
      '🔗 app.rg.hhc.travel/today',
      '',
      `— Relationship Goals by HHC Travel`,
    ].filter(Boolean).join('\n')

    try {
      await sms.messages.create({ to: profile.phone, from: FROM, body })
      sent++
    } catch (err) {
      console.error(`SMS failed for ${profile.user_id}:`, err)
      failed++
    }

    // Also notify partner if they have a phone number
    if (profile.partner_phone) {
      const partnerBody = [
        `🌅 Good morning, ${profile.partner_name || 'love'}!`,
        '',
        `${profile.full_name || 'Your partner'} has a new mission ready — Day ${day} of ${programLabel}.`,
        streak > 1 ? `🔥 You're both on a ${streak}-day streak!` : '',
        '',
        `Open the app together:`,
        '🔗 app.rg.hhc.travel/today',
        '',
        `— Relationship Goals by HHC Travel`,
      ].filter(Boolean).join('\n')

      try {
        await sms.messages.create({ to: profile.partner_phone, from: FROM, body: partnerBody })
        sent++
      } catch (err) {
        console.error(`Partner SMS failed for ${profile.user_id}:`, err)
        failed++
      }
    }
  }

  return res.status(200).json({ sent, failed, total: profiles.length })
}

const PROGRAM_LABELS: Record<string, string> = {
  'reconnect': 'Reconnection Reset',
  'communication-reset': 'Communication Reset',
  'conflict-repair': 'Conflict Repair',
  'emotional-safety': 'Emotional Safety Building',
  'pre-marriage': 'Pre-Marriage Alignment',
  'trust-rebuilding': 'Trust Rebuilding',
  'infidelity-recovery': 'Infidelity Recovery',
  'marriage-strengthening': 'Marriage Strengthening',
}

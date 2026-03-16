import { isMock } from './db'

async function post(endpoint: string, body: object) {
  if (isMock) {
    console.log(`[SMS mock] ${endpoint}`, body)
    return
  }
  try {
    await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })
  } catch (err) {
    console.error(`SMS call failed (${endpoint}):`, err)
  }
}

export async function notifyPartner(opts: {
  partnerPhone: string
  partnerName?: string
  userName?: string
  missionTitle: string
  missionEmoji: string
  day: number
  program: string
}) {
  await post('/api/notify-partner', opts)
}

export async function invitePartner(opts: {
  partnerPhone: string
  partnerName?: string
  userName?: string
}) {
  await post('/api/invite-partner', opts)
}

import { supabase } from './supabaseClient'

export const isMock = import.meta.env.VITE_SUPABASE_URL?.includes('placeholder')

// localStorage key helpers
const progressKey = (uid: string) => `rg_progress_${uid}`
const historyKey  = (uid: string) => `rg_history_${uid}`
const couponsKey  = (uid: string) => `rg_coupons_${uid}`
const profileKey  = (uid: string) => `rg_profile_${uid}`

function seedCoupons(userId: string) {
  if (localStorage.getItem(couponsKey(userId))) return
  const seeds = [
    {
      id: 'c1',
      brand: 'Olive Garden',
      title: 'Date Night Special',
      value: '$10 off any entrée',
      code: 'RG-OG10',
      expires_at: '2026-12-31',
      used: false,
      earned_at: new Date().toISOString(),
    },
    {
      id: 'c2',
      brand: 'AMC Theatres',
      title: 'Movie Night for Two',
      value: '2 tickets for the price of 1',
      code: 'RG-AMC2FOR1',
      expires_at: '2026-09-30',
      used: false,
      earned_at: new Date().toISOString(),
    },
    {
      id: 'c3',
      brand: 'Airbnb',
      title: 'Weekend Getaway',
      value: '$25 off stays over $100',
      code: 'RG-ABB25',
      expires_at: '2026-06-30',
      used: false,
      earned_at: new Date().toISOString(),
    },
  ]
  localStorage.setItem(couponsKey(userId), JSON.stringify(seeds))
}

export const db = {
  async getProgress(userId: string) {
    if (isMock) {
      const raw = localStorage.getItem(progressKey(userId))
      return raw
        ? JSON.parse(raw)
        : { current_day: 0, streak: 0, total_completed: 0, vacation_credits: 0, last_unlocked_date: null, last_completed_date: null }
    }
    const { data } = await supabase
      .from('user_progress')
      .select('*')
      .eq('user_id', userId)
      .single()
    return data
  },

  async upsertProgress(userId: string, data: object) {
    if (isMock) {
      const current = await db.getProgress(userId)
      localStorage.setItem(progressKey(userId), JSON.stringify({ ...current, ...data }))
      return
    }
    await supabase
      .from('user_progress')
      .upsert({ user_id: userId, ...data }, { onConflict: 'user_id' })
  },

  async getHistory(userId: string) {
    if (isMock) {
      const raw = localStorage.getItem(historyKey(userId))
      const list = raw ? JSON.parse(raw) : []
      return list.sort((a: { completed_at: string }, b: { completed_at: string }) =>
        new Date(b.completed_at).getTime() - new Date(a.completed_at).getTime()
      )
    }
    const { data } = await supabase
      .from('mission_history')
      .select('*')
      .eq('user_id', userId)
      .order('completed_at', { ascending: false })
    return data ?? []
  },

  async insertHistory(data: object) {
    if (isMock) {
      const userId = (data as { user_id: string }).user_id
      const raw = localStorage.getItem(historyKey(userId))
      const list = raw ? JSON.parse(raw) : []
      list.push({ id: `h${Date.now()}`, ...data })
      localStorage.setItem(historyKey(userId), JSON.stringify(list))
      return
    }
    await supabase.from('mission_history').insert(data)
  },

  async getCoupons(userId: string) {
    if (isMock) {
      seedCoupons(userId)
      const raw = localStorage.getItem(couponsKey(userId))
      return raw ? JSON.parse(raw) : []
    }
    const { data } = await supabase
      .from('user_coupons')
      .select('*')
      .eq('user_id', userId)
      .order('earned_at', { ascending: false })
    return data ?? []
  },

  async markCouponUsed(id: string, userId: string) {
    if (isMock) {
      const raw = localStorage.getItem(couponsKey(userId))
      if (!raw) return
      const updated = JSON.parse(raw).map((c: { id: string }) =>
        c.id === id ? { ...c, used: true } : c
      )
      localStorage.setItem(couponsKey(userId), JSON.stringify(updated))
      return
    }
    await supabase.from('user_coupons').update({ used: true }).eq('id', id)
  },

  async upsertProfile(userId: string, data: object) {
    if (isMock) {
      localStorage.setItem(profileKey(userId), JSON.stringify({ user_id: userId, ...data }))
      return
    }
    await supabase
      .from('user_profiles')
      .upsert({ user_id: userId, ...data }, { onConflict: 'user_id' })
  },
}

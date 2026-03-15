import { useState, useEffect } from 'react'
import { useAuth } from '../lib/AuthContext'
import { supabase } from '../lib/supabaseClient'
import { MISSIONS } from '../data/missions'
import type { Mission } from '../data/missions'
import DisclaimerStrip from '../components/DisclaimerStrip'

// Simulated: get today's mission based on user's progress day
function getTodaysMission(dayIndex: number): Mission {
  return MISSIONS[dayIndex % MISSIONS.length]
}

export default function TodayPage() {
  const { user } = useAuth()
  const [unlocked, setUnlocked]     = useState(false)
  const [completed, setCompleted]   = useState(false)
  const [dayIndex, setDayIndex]     = useState(0)
  const [streak, setStreak]         = useState(0)
  const [totalDone, setTotalDone]   = useState(0)
  const [credits, setCredits]       = useState(0)
  const [loading, setLoading]       = useState(true)
  const [activePrompt, setActivePrompt] = useState<number | null>(null)

  const mission = getTodaysMission(dayIndex)

  useEffect(() => {
    if (!user) return
    loadProgress()
  }, [user])

  const loadProgress = async () => {
    const { data } = await supabase
      .from('user_progress')
      .select('*')
      .eq('user_id', user!.id)
      .single()

    if (data) {
      setDayIndex(data.current_day ?? 0)
      setStreak(data.streak ?? 0)
      setTotalDone(data.total_completed ?? 0)
      setCredits(data.vacation_credits ?? 0)

      // Check if today already unlocked
      const today = new Date().toISOString().split('T')[0]
      setUnlocked(data.last_unlocked_date === today)
      setCompleted(data.last_completed_date === today)
    }
    setLoading(false)
  }

  const handleUnlock = () => {
    // In production: trigger Stripe $0.99 checkout
    // On success callback: mark unlocked in DB
    // For now: simulate unlock
    setUnlocked(true)
  }

  const handleComplete = async () => {
    const today = new Date().toISOString().split('T')[0]
    const newCredits = credits + 1

    await supabase.from('user_progress').upsert({
      user_id: user!.id,
      current_day: dayIndex + 1,
      streak: streak + 1,
      total_completed: totalDone + 1,
      vacation_credits: newCredits,
      last_unlocked_date: today,
      last_completed_date: today,
    }, { onConflict: 'user_id' })

    // Log to history
    await supabase.from('mission_history').insert({
      user_id: user!.id,
      mission_id: mission.id,
      mission_title: mission.title,
      mission_emoji: mission.emoji,
      completed_at: new Date().toISOString(),
      credits_earned: 1,
    })

    setCompleted(true)
    setStreak(s => s + 1)
    setTotalDone(t => t + 1)
    setCredits(newCredits)
    setDayIndex(d => d + 1)
  }

  if (loading) return (
    <div style={{ padding: '60px 20px', textAlign: 'center', color: 'var(--text-dim)' }}>
      Loading your mission…
    </div>
  )

  const firstName = user?.user_metadata?.full_name?.split(' ')[0] ?? 'there'

  return (
    <div style={{ paddingBottom: 100 }}>
      {/* Header greeting */}
      <div style={{ background: 'var(--white)', borderBottom: '1px solid var(--border)', padding: '20px 20px 16px' }}>
        <div className="container">
          <p style={{ fontSize: '0.8rem', color: 'var(--text-dim)', marginBottom: 2 }}>
            {new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
          </p>
          <h2 style={{ fontSize: '1.15rem', color: 'var(--teal-dark)' }}>
            Good {getTimeOfDay()}, {firstName} 👋
          </h2>
        </div>
      </div>

      <div className="container page-pad">

        {/* Stats strip */}
        <div className="stats-strip">
          <div className="stat-card">
            <div className="sc-num">{streak}</div>
            <div className="sc-label">Day Streak 🔥</div>
          </div>
          <div className="stat-card">
            <div className="sc-num">{totalDone}</div>
            <div className="sc-label">Completed</div>
          </div>
          <div className="stat-card">
            <div className="sc-num">{credits}</div>
            <div className="sc-label">✈️ Credits</div>
          </div>
        </div>

        {/* Mission card */}
        {!unlocked ? (
          <div className="mission-locked">
            <div className="lock-icon">🔐</div>
            <h3>Today's Love Mission is ready</h3>
            <p>
              Unlock today's mission for both of you. Complete it together to earn your
              local reward coupon and a vacation credit toward HHC Travel.
            </p>
            <div className="mission-unlock-price">$0.99</div>
            <div className="mission-unlock-note">One unlock covers both partners · No auto-renewal</div>
            <button className="btn btn-primary btn-lg" onClick={handleUnlock}>
              Unlock Today's Mission
            </button>
          </div>
        ) : completed ? (
          <div className="card" style={{ textAlign: 'center', padding: '36px 24px', marginBottom: 24 }}>
            <div style={{ fontSize: '2.5rem', marginBottom: 12 }}>✅</div>
            <h3 style={{ color: 'var(--teal-dark)', marginBottom: 8 }}>Mission complete!</h3>
            <p style={{ color: 'var(--text-mid)', fontSize: '0.875rem', marginBottom: 20 }}>
              You showed up today. Your coupon and vacation credit have been added to your account.
            </p>
            <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
              <span className="tag tag-teal">+1 Vacation Credit ✈️</span>
              <span className="tag tag-coral">Coupon Unlocked 🎁</span>
            </div>
            <p style={{ marginTop: 20, fontSize: '0.8rem', color: 'var(--text-dim)' }}>
              Come back tomorrow for Day {dayIndex + 1}.
            </p>
          </div>
        ) : (
          <>
            {/* Unlocked mission */}
            <div className="mission-hero">
              <div className="mission-day-label">
                Day {dayIndex + 1} · {mission.program === 'reconnect' ? '7 Days to Reconnect' : mission.program}
              </div>
              <div style={{ fontSize: '1.8rem', marginBottom: 8 }}>{mission.emoji}</div>
              <div className="mission-title">{mission.title}</div>
              <div className="mission-preview">"{mission.tagline}"</div>
            </div>

            {/* Mission body */}
            <div className="card" style={{ marginBottom: 16 }}>
              <p style={{ fontSize: '0.72rem', color: 'var(--text-dim)', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 10 }}>
                Today's Mission
              </p>
              <p style={{ fontSize: '0.95rem', color: 'var(--text)', lineHeight: 1.75, marginBottom: 12 }}>
                {mission.body}
              </p>
              <span className="tag tag-sand">⏱ {mission.duration}</span>
            </div>

            {/* Prompts */}
            <div className="card" style={{ marginBottom: 16 }}>
              <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--teal)', marginBottom: 14 }}>
                Conversation Prompts
              </p>
              {mission.prompts.map((prompt, i) => (
                <div
                  key={i}
                  onClick={() => setActivePrompt(activePrompt === i ? null : i)}
                  style={{
                    display: 'flex',
                    gap: 12,
                    padding: '12px 14px',
                    background: activePrompt === i ? 'var(--teal-light)' : 'var(--bg)',
                    border: `1px solid ${activePrompt === i ? 'var(--teal)' : 'var(--border)'}`,
                    borderRadius: 10,
                    marginBottom: 8,
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                  }}
                >
                  <span style={{ fontSize: '1rem', flexShrink: 0 }}>💬</span>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text)', lineHeight: 1.55 }}>
                    "{prompt}"
                  </p>
                </div>
              ))}
            </div>

            {/* Reflection */}
            <div className="card" style={{ marginBottom: 24 }}>
              <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--teal)', marginBottom: 10 }}>
                Reflection
              </p>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-mid)', fontStyle: 'italic', marginBottom: 14 }}>
                {mission.reflection}
              </p>
              <textarea
                placeholder="Write your thoughts here (private, saved to your account)…"
                style={{
                  width: '100%',
                  minHeight: 100,
                  padding: '10px 12px',
                  border: '1.5px solid var(--border)',
                  borderRadius: 10,
                  fontSize: '0.875rem',
                  color: 'var(--text)',
                  resize: 'vertical',
                  outline: 'none',
                }}
                onFocus={e => e.target.style.borderColor = 'var(--teal)'}
                onBlur={e => e.target.style.borderColor = 'var(--border)'}
              />
            </div>

            {/* Complete CTA */}
            <button
              className="btn btn-primary btn-full btn-lg"
              onClick={handleComplete}
            >
              We Completed This Mission ✓
            </button>
            <p style={{ textAlign: 'center', fontSize: '0.78rem', color: 'var(--text-dim)', marginTop: 10 }}>
              Marks both partners complete · Unlocks coupon + vacation credit
            </p>
          </>
        )}
      </div>

      <DisclaimerStrip />
    </div>
  )
}

function getTimeOfDay() {
  const h = new Date().getHours()
  if (h < 12) return 'morning'
  if (h < 17) return 'afternoon'
  return 'evening'
}

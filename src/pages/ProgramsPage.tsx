import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../lib/AuthContext'
import { db } from '../lib/db'
import DisclaimerStrip from '../components/DisclaimerStrip'

const PROGRAMS = [
  {
    slug: 'reconnect',
    emoji: '🌱',
    title: 'Reconnection Reset',
    days: 30,
    description: "For couples who feel like roommates — present but disconnected. Reintroduce warmth, curiosity, and playfulness through intentional daily rituals.",
  },
  {
    slug: 'communication-reset',
    emoji: '💬',
    title: 'Communication Reset',
    days: 30,
    description: "For couples stuck in loops of miscommunication, defensiveness, or silence. Learn to speak clearly, listen deeply, and resolve conflict without destruction.",
  },
  {
    slug: 'conflict-repair',
    emoji: '⚡',
    title: 'Conflict Repair',
    days: 21,
    description: "A 21-day intensive for couples caught in recurring conflict cycles. Learn to recognize escalation patterns, repair after fights, and disagree with love.",
  },
  {
    slug: 'emotional-safety',
    emoji: '🧠',
    title: 'Emotional Safety Building',
    days: 45,
    description: "When one or both partners feel unsafe to be vulnerable, conflict becomes chronic. Create the conditions for emotional safety so both can fully show up.",
  },
  {
    slug: 'pre-marriage',
    emoji: '💞',
    title: 'Pre-Marriage Alignment',
    days: 60,
    description: "Prepare for the covenant of marriage with intentional conversations about values, conflict styles, finances, family dynamics, and shared vision.",
  },
  {
    slug: 'trust-rebuilding',
    emoji: '🤝',
    title: 'Trust Rebuilding',
    days: 90,
    description: "When trust has eroded from lies, broken promises, or emotional distance — a step-by-step path back through honesty, consistency, and emotional safety.",
  },
  {
    slug: 'infidelity-recovery',
    emoji: '💔',
    title: 'Infidelity Recovery',
    days: 180,
    description: "A carefully structured path through betrayal, grief, and rebuilding. Guides both partners through accountability, forgiveness, and renewed commitment.",
  },
  {
    slug: 'marriage-strengthening',
    emoji: '💍',
    title: 'Marriage Strengthening',
    days: 365,
    description: "A year-long daily commitment to deepening everything: intimacy, trust, shared meaning, and lasting connection. Build something extraordinary — one day at a time.",
  },
  {
    slug: 'faith-based',
    emoji: '🕊️',
    title: 'Faith-Based',
    days: 30,
    description: "For couples of all faith orientations — Christian, Muslim, Jewish, Buddhist, Hindu, Indigenous, spiritual-but-not-religious, and interfaith. Explore how your beliefs shape your love, build shared spiritual practices, and honor what is sacred in each other's traditions.",
  },
]

export default function ProgramsPage() {
  const { user } = useAuth()
  const navigate = useNavigate()
  const [currentProgram, setCurrentProgram] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!user) return
    db.getProgress(user.id).then(data => {
      setCurrentProgram(data?.program ?? null)
      setLoading(false)
    })
  }, [user])

  const selectProgram = async (slug: string) => {
    if (!user) return
    await db.upsertProgress(user.id, { program: slug, current_day: 0 })
    navigate('/today')
  }

  const switchProgram = async (slug: string) => {
    if (!user) return
    const confirmed = window.confirm(
      "Switching programs will reset your daily progress to Day 1 of the new program. Your history and credits are kept. Continue?"
    )
    if (!confirmed) return
    await db.upsertProgress(user.id, { program: slug, current_day: 0 })
    navigate('/today')
  }

  if (loading) return (
    <div style={{ padding: '60px 20px', textAlign: 'center', color: 'var(--text-dim)' }}>
      Loading programs…
    </div>
  )

  return (
    <div style={{ paddingBottom: 100 }}>
      <div style={{ background: 'var(--white)', borderBottom: '1px solid var(--border)', padding: '20px 20px 16px' }}>
        <div className="container">
          <h2 style={{ fontSize: '1.15rem', color: 'var(--teal-dark)', marginBottom: 4 }}>
            Choose Your Program
          </h2>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-mid)', margin: 0 }}>
            {currentProgram
              ? "Switch to a new program or continue your current journey."
              : "Start where you are. Every program is built for a specific challenge."}
          </p>
        </div>
      </div>

      <div className="container page-pad">
        <div style={{ display: 'grid', gap: 14 }}>
          {PROGRAMS.map(p => {
            const isCurrent = currentProgram === p.slug
            return (
              <div
                key={p.slug}
                className="card"
                style={{
                  padding: '18px 16px',
                  border: isCurrent ? '2px solid var(--teal)' : '1px solid var(--border)',
                  position: 'relative',
                }}
              >
                {isCurrent && (
                  <span style={{
                    position: 'absolute',
                    top: 10,
                    right: 12,
                    background: 'var(--teal)',
                    color: '#fff',
                    fontSize: '0.68rem',
                    fontWeight: 700,
                    padding: '2px 8px',
                    borderRadius: 20,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                  }}>
                    Current
                  </span>
                )}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12, marginBottom: 10 }}>
                  <span style={{ fontSize: '1.6rem', lineHeight: 1 }}>{p.emoji}</span>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ fontSize: '0.95rem', color: 'var(--teal-dark)', margin: '0 0 2px' }}>
                      {p.title}
                    </h3>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>
                      📅 {p.days} Days · {p.days} Exercises
                    </span>
                  </div>
                </div>
                <p style={{ fontSize: '0.83rem', color: 'var(--text-mid)', lineHeight: 1.55, margin: '0 0 14px' }}>
                  {p.description}
                </p>
                {isCurrent ? (
                  <button
                    className="btn btn-outline btn-sm"
                    onClick={() => navigate('/today')}
                  >
                    Continue Program →
                  </button>
                ) : (
                  <button
                    className="btn btn-primary btn-sm"
                    onClick={() => currentProgram ? switchProgram(p.slug) : selectProgram(p.slug)}
                  >
                    {currentProgram ? 'Switch to This Program' : 'Start This Program'}
                  </button>
                )}
              </div>
            )
          })}
        </div>
      </div>

      <DisclaimerStrip />
    </div>
  )
}

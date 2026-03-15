import { useState, useEffect } from 'react'
import { useAuth } from '../lib/AuthContext'
import { db } from '../lib/db'
import DisclaimerStrip from '../components/DisclaimerStrip'

export default function CreditsPage() {
  const { user } = useAuth()
  const [credits, setCredits]   = useState(0)
  const [loading, setLoading]   = useState(true)

  useEffect(() => {
    if (!user) return
    db.getProgress(user.id).then(data => {
      setCredits(data?.vacation_credits ?? 0)
      setLoading(false)
    })
  }, [user])

  const milestones = [
    { credits: 7,   label: '7-Day Pledge',          reward: '$5 HHC Travel voucher',   icon: '🌱' },
    { credits: 30,  label: '30-Day Commitment',      reward: '$25 HHC Travel voucher',  icon: '🌿' },
    { credits: 90,  label: '90-Day Trust Builder',   reward: '$75 HHC Travel voucher',  icon: '🌳' },
    { credits: 180, label: '180-Day Healer',         reward: '$175 HHC Travel voucher', icon: '✨' },
    { credits: 365, label: '365-Day Legend',         reward: '$400 HHC Travel voucher', icon: '👑' },
  ]

  const nextMilestone = milestones.find(m => m.credits > credits)
  const progress = nextMilestone
    ? Math.round((credits / nextMilestone.credits) * 100)
    : 100

  return (
    <div style={{ paddingBottom: 100 }}>
      <div style={{ background: 'var(--white)', borderBottom: '1px solid var(--border)', padding: '20px 20px 16px' }}>
        <div className="container">
          <h2 style={{ fontSize: '1.2rem', color: 'var(--teal-dark)' }}>Vacation Credits</h2>
          <p style={{ fontSize: '0.83rem', color: 'var(--text-dim)', marginTop: 4 }}>
            Earned by completing daily love missions · Redeemable on HHC Travel
          </p>
        </div>
      </div>

      <div className="container page-pad">
        {/* Credits hero */}
        <div className="credits-hero">
          <p style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', opacity: 0.6 }}>
            Your Balance
          </p>
          <div className="credits-amount">{loading ? '…' : credits}</div>
          <div className="credits-label">vacation credits</div>
          <a
            href="https://hhc.travel"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Redeem on HHC Travel ✈️
          </a>
        </div>

        {/* Progress to next milestone */}
        {nextMilestone && (
          <div className="card" style={{ marginBottom: 24 }}>
            <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--teal)', marginBottom: 12 }}>
              Next Milestone
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
              <span style={{ fontSize: '1.5rem' }}>{nextMilestone.icon}</span>
              <div>
                <p style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--teal-dark)' }}>{nextMilestone.label}</p>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-mid)' }}>{nextMilestone.reward}</p>
              </div>
              <span style={{ marginLeft: 'auto', fontFamily: 'Poppins', fontWeight: 700, fontSize: '0.85rem', color: 'var(--teal-dark)' }}>
                {credits}/{nextMilestone.credits}
              </span>
            </div>
            {/* Progress bar */}
            <div style={{ height: 8, background: 'var(--border)', borderRadius: 100, overflow: 'hidden' }}>
              <div style={{
                height: '100%',
                width: `${progress}%`,
                background: 'linear-gradient(90deg, var(--teal), var(--coral))',
                borderRadius: 100,
                transition: 'width 0.5s ease',
              }} />
            </div>
            <p style={{ fontSize: '0.75rem', color: 'var(--text-dim)', marginTop: 8 }}>
              {nextMilestone.credits - credits} more missions to unlock your reward
            </p>
          </div>
        )}

        {/* All milestones */}
        <div className="card">
          <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--teal)', marginBottom: 14 }}>
            All Milestones
          </p>
          {milestones.map(m => {
            const achieved = credits >= m.credits
            return (
              <div key={m.credits} style={{
                display: 'flex',
                alignItems: 'center',
                gap: 14,
                padding: '12px 0',
                borderBottom: '1px solid var(--border)',
                opacity: achieved ? 1 : 0.5,
              }}>
                <span style={{ fontSize: '1.3rem' }}>{m.icon}</span>
                <div style={{ flex: 1 }}>
                  <p style={{ fontWeight: 600, fontSize: '0.875rem', color: 'var(--teal-dark)' }}>{m.label}</p>
                  <p style={{ fontSize: '0.78rem', color: 'var(--text-mid)' }}>{m.credits} credits · {m.reward}</p>
                </div>
                {achieved && <span className="tag tag-teal">Achieved ✓</span>}
              </div>
            )
          })}
        </div>

        <p style={{ fontSize: '0.78rem', color: 'var(--text-dim)', textAlign: 'center', marginTop: 20, lineHeight: 1.6 }}>
          Credits have no cash value. Redeemable toward qualifying bookings through{' '}
          <a href="https://hhc.travel" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--teal)' }}>
            HHC Travel
          </a>.
          365-Day Pledge holders earn 3× credits per mission.
        </p>
      </div>

      <DisclaimerStrip />
    </div>
  )
}

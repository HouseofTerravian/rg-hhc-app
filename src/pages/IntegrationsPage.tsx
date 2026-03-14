import { useNavigate } from 'react-router-dom'
import DisclaimerStrip from '../components/DisclaimerStrip'

interface EcosystemApp {
  id: string
  name: string
  tagline: string
  description: string
  icon: string
  color: string
  url: string
  cta: string
  badge?: string
}

const ECOSYSTEM: EcosystemApp[] = [
  {
    id: 'crystallize-lovers',
    name: 'Crystallize Lovers',
    tagline: 'The membership community behind Relationship Goals',
    description:
      'Go deeper. Crystallize Lovers is the full membership experience — community, courses, events, and relationship coaching programs. Relationship Goals is your daily practice. Crystallize Lovers is the movement.',
    icon: '💎',
    color: '#0E7C7B',
    url: 'https://crystallizelovers.com',
    cta: 'Explore Crystallize Lovers',
    badge: 'Parent Brand',
  },
  {
    id: 'support-groups',
    name: 'Support Groups Online',
    tagline: 'Find or host a support group for anything',
    description:
      'Moderated virtual support groups for every life challenge — grief, addiction recovery, relationship issues, mental health, and more. Find a group, join a session, or host your own.',
    icon: '🤝',
    color: '#6B3FA0',
    url: 'https://supportgroups.online',
    cta: 'Find a Support Group',
  },
  {
    id: 'win-the-hour',
    name: 'Win The Hour!™',
    tagline: 'The daily hour-by-hour time ownership app',
    description:
      'Win The Hour! helps individuals track, rate, and own every hour of the day. Daily check-ins, Beast Mode, and identity-building streaks. If you\'re doing the relationship work, do the personal work too.',
    icon: '⏱',
    color: '#FF5E1A',
    url: 'https://winthehour.app',
    cta: 'Download Win The Hour!',
    badge: 'iOS + Android',
  },
  {
    id: 'own-the-hour',
    name: 'Own The Hour',
    tagline: 'Master your time. Own your life.',
    description:
      'Own The Hour is the professional and team-facing companion to Win The Hour! — built for focus, accountability, and high-performance daily execution.',
    icon: '🏆',
    color: '#1B3A6B',
    url: 'https://ownthehour.app',
    cta: 'Explore Own The Hour',
  },
]

export default function IntegrationsPage() {
  const navigate = useNavigate()

  return (
    <div style={{ paddingBottom: 100 }}>
      {/* Header */}
      <div style={{ background: 'var(--white)', borderBottom: '1px solid var(--border)', padding: '20px 20px 16px' }}>
        <div className="container">
          <button
            onClick={() => navigate('/account')}
            style={{ background: 'none', border: 'none', color: 'var(--teal)', fontSize: '0.85rem', fontWeight: 600, marginBottom: 10, padding: 0, cursor: 'pointer' }}
          >
            ← Account
          </button>
          <h2 style={{ fontSize: '1.2rem', color: 'var(--teal-dark)' }}>Ecosystem</h2>
          <p style={{ fontSize: '0.83rem', color: 'var(--text-dim)', marginTop: 4 }}>
            Apps and communities in the same family as Relationship Goals.
          </p>
        </div>
      </div>

      <div className="container page-pad">

        {/* Noo World identity note */}
        <div style={{
          background: 'linear-gradient(135deg, #1A0A2E, #2D1A4A)',
          borderRadius: 'var(--radius-lg)',
          padding: '20px 22px',
          marginBottom: 24,
          display: 'flex',
          alignItems: 'center',
          gap: 14,
        }}>
          <span style={{ fontSize: '1.6rem' }}>🌐</span>
          <div style={{ flex: 1 }}>
            <p style={{ color: 'white', fontFamily: 'Poppins', fontWeight: 700, fontSize: '0.9rem', marginBottom: 3 }}>
              One login. All platforms.
            </p>
            <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.8rem', lineHeight: 1.5 }}>
              Your Noo World ID works across Relationship Goals, Support Groups, Win The Hour!, and more.
            </p>
          </div>
          <a
            href="https://id.thenooworld.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: 'rgba(255,255,255,0.1)',
              border: '1px solid rgba(255,255,255,0.2)',
              color: 'white',
              padding: '8px 14px',
              borderRadius: 8,
              fontSize: '0.75rem',
              fontWeight: 700,
              whiteSpace: 'nowrap',
            }}
          >
            Manage ID ↗
          </a>
        </div>

        {/* App cards */}
        {ECOSYSTEM.map(app => (
          <div key={app.id} className="card" style={{ marginBottom: 16, padding: 0, overflow: 'hidden' }}>
            {/* Color accent bar */}
            <div style={{ height: 4, background: app.color }} />
            <div style={{ padding: '20px 20px 16px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14, marginBottom: 12 }}>
                <div style={{
                  width: 52, height: 52,
                  background: app.color + '15',
                  border: `1px solid ${app.color}30`,
                  borderRadius: 14,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.5rem',
                  flexShrink: 0,
                }}>
                  {app.icon}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 2 }}>
                    <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--teal-dark)' }}>
                      {app.name}
                    </h3>
                    {app.badge && (
                      <span style={{
                        background: app.color + '20',
                        color: app.color,
                        fontSize: '0.65rem',
                        fontWeight: 700,
                        letterSpacing: '0.08em',
                        padding: '2px 8px',
                        borderRadius: 100,
                        textTransform: 'uppercase',
                      }}>
                        {app.badge}
                      </span>
                    )}
                  </div>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-dim)', fontStyle: 'italic' }}>
                    {app.tagline}
                  </p>
                </div>
              </div>

              <p style={{ fontSize: '0.875rem', color: 'var(--text-mid)', lineHeight: 1.7, marginBottom: 16 }}>
                {app.description}
              </p>

              <a
                href={app.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                  background: app.color,
                  color: 'white',
                  padding: '10px 18px',
                  borderRadius: 10,
                  fontSize: '0.83rem',
                  fontFamily: 'Poppins',
                  fontWeight: 600,
                }}
              >
                {app.cta} ↗
              </a>
            </div>
          </div>
        ))}

        <p style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textAlign: 'center', marginTop: 8, lineHeight: 1.6 }}>
          All platforms are part of the Terravian ecosystem.<br />
          © 2026 Chude Muonelo · Crystallize Lovers, a DBA of SlateRiver LLC
        </p>
      </div>

      <DisclaimerStrip />
    </div>
  )
}

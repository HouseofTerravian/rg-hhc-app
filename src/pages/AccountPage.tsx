import { useAuth } from '../lib/AuthContext'
import { useNavigate } from 'react-router-dom'
import DisclaimerStrip from '../components/DisclaimerStrip'

export default function AccountPage() {
  const { user, signOut } = useAuth()
  const navigate = useNavigate()

  const handleSignOut = async () => {
    await signOut()
    navigate('/login')
  }

  const name  = user?.user_metadata?.full_name ?? 'Partner'
  const email = user?.email ?? ''
  const initials = name.split(' ').map((n: string) => n[0]).join('').toUpperCase().slice(0, 2)

  return (
    <div style={{ paddingBottom: 100 }}>
      <div style={{ background: 'var(--white)', borderBottom: '1px solid var(--border)', padding: '20px 20px 16px' }}>
        <div className="container">
          <h2 style={{ fontSize: '1.2rem', color: 'var(--teal-dark)' }}>Account</h2>
        </div>
      </div>

      <div className="container page-pad">

        {/* Profile card */}
        <div className="card" style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 20 }}>
          <div style={{
            width: 56, height: 56,
            background: 'linear-gradient(135deg, var(--teal), var(--coral))',
            borderRadius: '50%',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: 'white', fontFamily: 'Poppins', fontWeight: 800, fontSize: '1.1rem',
            flexShrink: 0,
          }}>
            {initials}
          </div>
          <div>
            <p style={{ fontWeight: 700, color: 'var(--teal-dark)' }}>{name}</p>
            <p style={{ fontSize: '0.83rem', color: 'var(--text-dim)' }}>{email}</p>
          </div>
        </div>

        {/* Links */}
        <div className="card" style={{ marginBottom: 20, padding: 0 }}>
          {[
            { icon: '📅', label: 'My Mission History',  path: '/history'      },
            { icon: '🎁', label: 'My Coupons',          path: '/coupons'      },
            { icon: '✈️', label: 'Vacation Credits',    path: '/credits'      },
            { icon: '🔗', label: 'Ecosystem',            path: '/integrations' },
          ].map(item => (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              style={{
                width: '100%', display: 'flex', alignItems: 'center', gap: 14,
                padding: '16px 20px', background: 'none', border: 'none',
                borderBottom: '1px solid var(--border)', cursor: 'pointer',
                textAlign: 'left',
              }}
            >
              <span style={{ fontSize: '1.2rem' }}>{item.icon}</span>
              <span style={{ fontWeight: 500, color: 'var(--text)' }}>{item.label}</span>
              <span style={{ marginLeft: 'auto', color: 'var(--text-dim)' }}>→</span>
            </button>
          ))}
          <a
            href="https://rg.hhc.travel"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex', alignItems: 'center', gap: 14,
              padding: '16px 20px', borderBottom: '1px solid var(--border)',
              color: 'var(--text)',
            }}
          >
            <span style={{ fontSize: '1.2rem' }}>🌐</span>
            <span style={{ fontWeight: 500 }}>Browse Programs</span>
            <span style={{ marginLeft: 'auto', color: 'var(--text-dim)' }}>↗</span>
          </a>
          <a
            href="https://rg.hhc.travel/contact.html"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex', alignItems: 'center', gap: 14,
              padding: '16px 20px',
              color: 'var(--text)',
            }}
          >
            <span style={{ fontSize: '1.2rem' }}>✉️</span>
            <span style={{ fontWeight: 500 }}>Support</span>
            <span style={{ marginLeft: 'auto', color: 'var(--text-dim)' }}>↗</span>
          </a>
        </div>

        {/* Legal links */}
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginBottom: 24 }}>
          {[
            ['Terms', 'terms.html'],
            ['Privacy', 'privacy.html'],
            ['Disclaimer', 'disclaimer.html'],
          ].map(([label, page]) => (
            <a
              key={page}
              href={`https://rg.hhc.travel/${page}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: '0.8rem', color: 'var(--teal)' }}
            >
              {label}
            </a>
          ))}
        </div>

        <button
          className="btn btn-outline btn-full"
          onClick={handleSignOut}
          style={{ color: 'var(--coral-dark)', borderColor: 'var(--coral-dark)' }}
        >
          Sign Out
        </button>

        <p style={{ textAlign: 'center', fontSize: '0.72rem', color: 'var(--text-dim)', marginTop: 16, lineHeight: 1.5 }}>
          © 2026 Chude Muonelo · Crystallize Lovers, a DBA of SlateRiver LLC
        </p>
      </div>

      <DisclaimerStrip />
    </div>
  )
}

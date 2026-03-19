import { useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from '../lib/AuthContext'

const NAV_ITEMS = [
  { path: '/today',    icon: '📅', label: 'Today'    },
  { path: '/programs', icon: '📋', label: 'Programs' },
  { path: '/history',  icon: '📖', label: 'History'  },
  { path: '/coupons',  icon: '🎁', label: 'Coupons'  },
  { path: '/credits',  icon: '✈️',  label: 'Credits'  },
  { path: '/account',  icon: '👤', label: 'Account'  },
]

export default function AppNav() {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const { user } = useAuth()

  if (!user) return null

  return (
    <>
      {/* Top bar */}
      <nav className="top-nav">
        <div className="nav-logo">
          <div className="nav-logo-mark">RG</div>
          <span style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.2 }}>
            <span>Relationship Goals</span>
            <span style={{ fontSize: '0.6rem', color: 'var(--text-dim)', fontWeight: 400, letterSpacing: '0.02em' }}>by HHC Travel&#8482;</span>
          </span>
        </div>
        <div className="nav-right">
          <a
            href="https://rg.hhc.travel"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost btn-sm"
            style={{ fontSize: '0.78rem' }}
          >
            ↗ rg.hhc.travel
          </a>
        </div>
      </nav>

      {/* Bottom navigation */}
      <nav className="bottom-nav">
        <div className="bottom-nav-inner">
          {NAV_ITEMS.map(item => (
            <button
              key={item.path}
              className={`bnav-item${pathname === item.path ? ' active' : ''}`}
              onClick={() => navigate(item.path)}
            >
              <span className="bnav-icon">{item.icon}</span>
              {item.label}
            </button>
          ))}
        </div>
      </nav>
    </>
  )
}

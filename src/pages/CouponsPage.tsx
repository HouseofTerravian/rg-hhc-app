import { useState, useEffect } from 'react'
import { useAuth } from '../lib/AuthContext'
import { supabase } from '../lib/supabaseClient'
import DisclaimerStrip from '../components/DisclaimerStrip'

interface Coupon {
  id: string
  brand: string
  title: string
  value: string
  code: string
  expires_at: string
  used: boolean
  earned_at: string
}

export default function CouponsPage() {
  const { user } = useAuth()
  const [coupons, setCoupons]   = useState<Coupon[]>([])
  const [loading, setLoading]   = useState(true)
  const [filter, setFilter]     = useState<'all' | 'available' | 'used'>('available')

  useEffect(() => {
    if (!user) return
    supabase
      .from('user_coupons')
      .select('*')
      .eq('user_id', user.id)
      .order('earned_at', { ascending: false })
      .then(({ data }) => {
        setCoupons(data ?? [])
        setLoading(false)
      })
  }, [user])

  const handleMarkUsed = async (id: string) => {
    await supabase.from('user_coupons').update({ used: true }).eq('id', id)
    setCoupons(c => c.map(cp => cp.id === id ? { ...cp, used: true } : cp))
  }

  const filtered = coupons.filter(c => {
    if (filter === 'available') return !c.used
    if (filter === 'used') return c.used
    return true
  })

  const available = coupons.filter(c => !c.used).length

  return (
    <div style={{ paddingBottom: 100 }}>
      <div style={{ background: 'var(--white)', borderBottom: '1px solid var(--border)', padding: '20px 20px 16px' }}>
        <div className="container">
          <h2 style={{ fontSize: '1.2rem', color: 'var(--teal-dark)' }}>Your Coupons</h2>
          <p style={{ fontSize: '0.83rem', color: 'var(--text-dim)', marginTop: 4 }}>
            {available} available · Earned by completing daily missions
          </p>
        </div>
      </div>

      <div className="container page-pad">
        {/* Filter tabs */}
        <div style={{ display: 'flex', gap: 8, marginBottom: 24 }}>
          {(['available', 'all', 'used'] as const).map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`btn btn-sm ${filter === f ? 'btn-teal' : 'btn-outline'}`}
              style={{ textTransform: 'capitalize' }}
            >
              {f}
            </button>
          ))}
        </div>

        {loading ? (
          <p style={{ color: 'var(--text-dim)', textAlign: 'center' }}>Loading…</p>
        ) : filtered.length === 0 ? (
          <div className="card" style={{ textAlign: 'center', padding: '48px 24px' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: 12 }}>🎁</div>
            <h3 style={{ color: 'var(--teal-dark)', marginBottom: 8 }}>
              {filter === 'used' ? 'No used coupons yet' : 'No coupons yet'}
            </h3>
            <p style={{ color: 'var(--text-mid)', fontSize: '0.875rem', lineHeight: 1.65 }}>
              Complete a daily love mission to unlock your first local business coupon.
              Partner brands are added as we grow — you'll always get something worth more than $0.99.
            </p>
          </div>
        ) : (
          filtered.map(coupon => (
            <div key={coupon.id} className={`coupon-card${coupon.used ? ' coupon-used' : ''}`}>
              <div className="coupon-brand">{coupon.brand}</div>
              <div className="coupon-title">{coupon.title}</div>
              <div className="coupon-value">{coupon.value}</div>
              <div className="coupon-footer">
                <span className="coupon-expires">
                  {coupon.used ? 'Used' : `Expires ${new Date(coupon.expires_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}`}
                </span>
                <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                  <span className="coupon-code">{coupon.code}</span>
                  {!coupon.used && (
                    <button
                      className="btn btn-sm btn-outline"
                      onClick={() => handleMarkUsed(coupon.id)}
                    >
                      Mark Used
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      <DisclaimerStrip />
    </div>
  )
}

import { useState, useEffect } from 'react'
import { useAuth } from '../lib/AuthContext'
import { supabase } from '../lib/supabaseClient'
import DisclaimerStrip from '../components/DisclaimerStrip'

interface HistoryEntry {
  id: string
  mission_title: string
  mission_emoji: string
  completed_at: string
  credits_earned: number
}

export default function HistoryPage() {
  const { user } = useAuth()
  const [history, setHistory] = useState<HistoryEntry[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!user) return
    supabase
      .from('mission_history')
      .select('*')
      .eq('user_id', user.id)
      .order('completed_at', { ascending: false })
      .then(({ data }) => {
        setHistory(data ?? [])
        setLoading(false)
      })
  }, [user])

  const formatDate = (iso: string) =>
    new Date(iso).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })

  return (
    <div style={{ paddingBottom: 100 }}>
      <div style={{ background: 'var(--white)', borderBottom: '1px solid var(--border)', padding: '20px 20px 16px' }}>
        <div className="container">
          <h2 style={{ fontSize: '1.2rem', color: 'var(--teal-dark)' }}>Mission History</h2>
          <p style={{ fontSize: '0.83rem', color: 'var(--text-dim)', marginTop: 4 }}>
            Every mission you've completed together.
          </p>
        </div>
      </div>

      <div className="container page-pad">
        {loading ? (
          <p style={{ color: 'var(--text-dim)', textAlign: 'center', paddingTop: 40 }}>Loading…</p>
        ) : history.length === 0 ? (
          <div className="card" style={{ textAlign: 'center', padding: '48px 24px' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: 12 }}>📖</div>
            <h3 style={{ color: 'var(--teal-dark)', marginBottom: 8 }}>No missions yet</h3>
            <p style={{ color: 'var(--text-mid)', fontSize: '0.875rem' }}>
              Complete your first love mission today and your history will appear here.
            </p>
          </div>
        ) : (
          <div className="card">
            {history.map((entry, i) => (
              <div key={entry.id ?? i} className="history-item">
                <div className="history-dot">{entry.mission_emoji}</div>
                <div className="history-info">
                  <h4>{entry.mission_title}</h4>
                  <p>Completed together</p>
                </div>
                <div className="history-meta">
                  <div className="history-date">{formatDate(entry.completed_at)}</div>
                  <div className="history-reward">+{entry.credits_earned} credit ✈️</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <DisclaimerStrip />
    </div>
  )
}

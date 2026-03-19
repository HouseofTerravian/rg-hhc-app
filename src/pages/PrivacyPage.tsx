import { Link } from 'react-router-dom'

export default function PrivacyPage() {
  return (
    <div className="auth-page" style={{ alignItems: 'flex-start', padding: '40px 16px' }}>
      <div style={{
        maxWidth: 720,
        margin: '0 auto',
        background: 'white',
        borderRadius: 16,
        padding: '40px 32px',
        boxShadow: '0 2px 16px rgba(0,0,0,0.06)',
      }}>
        <Link to="/login" style={{ fontSize: '0.85rem', color: 'var(--teal)', display: 'inline-block', marginBottom: 20 }}>
          &larr; Back to Login
        </Link>

        <h1 style={{ fontSize: '1.75rem', marginBottom: 4 }}>Privacy Policy</h1>
        <p style={{ fontSize: '0.85rem', color: 'var(--text-dim)', marginBottom: 28 }}>Effective: March 18, 2026</p>

        <div style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.8 }}>

          <h2 style={{ fontSize: '1.15rem', marginTop: 28, marginBottom: 8 }}>1. Introduction</h2>
          <p>
            This Privacy Policy describes how the Relationship Goals App ("App"), operated under Happy Holiday
            Couples, a DBA of SlateRiver LLC, collects, uses, and protects your personal information. Operations
            are managed by MCM Enterprises, also a DBA of SlateRiver LLC.
          </p>

          <h2 style={{ fontSize: '1.15rem', marginTop: 28, marginBottom: 8 }}>2. Information We Collect</h2>
          <ul style={{ paddingLeft: 24, listStyle: 'disc', marginBottom: 12 }}>
            <li><strong>Account Information:</strong> Name, email address, phone number, password</li>
            <li><strong>Partner Information:</strong> Partner's name, email, and phone (if provided)</li>
            <li><strong>Usage Data:</strong> Mission completions, program progress, streak data, vacation credits earned</li>
            <li><strong>Device Information:</strong> Browser type, operating system, device identifiers</li>
            <li><strong>Payment Information:</strong> Processed securely through Stripe; we do not store card details</li>
            <li><strong>Cookies &amp; Local Storage:</strong> Session data, preferences, and authentication tokens</li>
          </ul>

          <h2 style={{ fontSize: '1.15rem', marginTop: 28, marginBottom: 8 }}>3. How We Use Your Information</h2>
          <ul style={{ paddingLeft: 24, listStyle: 'disc', marginBottom: 12 }}>
            <li>Deliver daily relationship missions via the App and SMS</li>
            <li>Track your progress, streaks, and earned rewards</li>
            <li>Process payments and manage vacation credits</li>
            <li>Improve and personalize the App experience</li>
            <li>Communicate service updates and new offerings</li>
            <li>Provide BEANS&trade; and BEANS Financial&trade; educational content</li>
          </ul>

          <h2 style={{ fontSize: '1.15rem', marginTop: 28, marginBottom: 8 }}>4. Data Sharing</h2>
          <p>
            We may share your information with affiliated companies within the <strong>House of Terravian</strong> and{' '}
            <strong>Noo World Platforms</strong> ecosystem, including but not limited to entities operating under
            SlateRiver LLC, to the extent permitted by applicable law. This sharing is for operational purposes,
            service improvement, and to provide you with relevant offerings across our family of brands.
          </p>
          <p>We also share data with:</p>
          <ul style={{ paddingLeft: 24, listStyle: 'disc', marginBottom: 12 }}>
            <li><strong>Payment Processors:</strong> Stripe, for secure payment handling</li>
            <li><strong>SMS Providers:</strong> For mission delivery to you and your partner</li>
            <li><strong>Authentication:</strong> Noo World ID, if you choose SSO sign-in</li>
            <li><strong>Travel Providers:</strong> When redeeming vacation credits through HHC Travel&trade;</li>
          </ul>

          <h2 style={{ fontSize: '1.15rem', marginTop: 28, marginBottom: 8 }}>5. BEANS&trade; &amp; BEANS Financial&trade;</h2>
          <p>
            Financial education data and interactions with BEANS&trade; content are handled under this Privacy Policy.
            BEANS&trade; provides educational content only — no financial advice is given, and no financial
            data is sold to third parties.
          </p>

          <h2 style={{ fontSize: '1.15rem', marginTop: 28, marginBottom: 8 }}>6. Data Security</h2>
          <p>
            We implement industry-standard security measures to protect your data, including encrypted connections
            (HTTPS/TLS), secure authentication, and access controls. However, no method of electronic transmission
            or storage is 100% secure.
          </p>

          <h2 style={{ fontSize: '1.15rem', marginTop: 28, marginBottom: 8 }}>7. Data Retention</h2>
          <p>
            We retain your personal data for as long as your account is active or as needed to provide services.
            Booking and payment records are retained for a minimum of 7 years for compliance purposes.
          </p>

          <h2 style={{ fontSize: '1.15rem', marginTop: 28, marginBottom: 8 }}>8. Your Rights</h2>
          <ul style={{ paddingLeft: 24, listStyle: 'disc', marginBottom: 12 }}>
            <li><strong>Access:</strong> Request a copy of your personal data</li>
            <li><strong>Correction:</strong> Update inaccurate information</li>
            <li><strong>Deletion:</strong> Request deletion of your account and data</li>
            <li><strong>Opt-Out:</strong> Unsubscribe from non-essential communications</li>
            <li><strong>Portability:</strong> Request your data in a portable format</li>
          </ul>

          <h2 style={{ fontSize: '1.15rem', marginTop: 28, marginBottom: 8 }}>9. Children's Privacy</h2>
          <p>
            This App is intended for users 18 years of age and older. We do not knowingly collect personal
            information from anyone under the age of 18.
          </p>

          <h2 style={{ fontSize: '1.15rem', marginTop: 28, marginBottom: 8 }}>10. California &amp; State-Specific Rights</h2>
          <p>
            If you are a California resident, you have additional rights under the CCPA/CPRA, including the
            right to know what data is collected, request deletion, and opt out of the sale of personal
            information. We do not sell your personal information.
          </p>

          <h2 style={{ fontSize: '1.15rem', marginTop: 28, marginBottom: 8 }}>11. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Changes will be posted within the App, and
            continued use constitutes acceptance of the updated policy.
          </p>

          <h2 style={{ fontSize: '1.15rem', marginTop: 28, marginBottom: 8 }}>12. Contact</h2>
          <p>
            For privacy-related inquiries, contact us through{' '}
            <a href="https://rg.hhc.travel" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--teal)' }}>
              rg.hhc.travel
            </a>.
          </p>

          <div style={{
            marginTop: 32,
            paddingTop: 20,
            borderTop: '1px solid var(--border)',
            fontSize: '0.8rem',
            color: 'var(--text-dim)',
            textAlign: 'center',
          }}>
            &copy; 2026 Chude Muonelo, MS, LPC. All rights reserved.<br />
            Operations by MCM Enterprises, a DBA of SlateRiver LLC.
          </div>
        </div>
      </div>
    </div>
  )
}

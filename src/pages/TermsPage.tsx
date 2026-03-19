import { Link } from 'react-router-dom'

export default function TermsPage() {
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

        <h1 style={{ fontSize: '1.75rem', marginBottom: 4 }}>Terms &amp; Conditions</h1>
        <p style={{ fontSize: '0.85rem', color: 'var(--text-dim)', marginBottom: 28 }}>Effective: March 18, 2026</p>

        <div style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.8 }}>

          <h2 style={{ fontSize: '1.15rem', marginTop: 28, marginBottom: 8 }}>1. Acceptance of Terms</h2>
          <p>
            By accessing or using the Relationship Goals application ("App"), you agree to be bound by these
            Terms &amp; Conditions. If you do not agree, do not use this App.
          </p>

          <h2 style={{ fontSize: '1.15rem', marginTop: 28, marginBottom: 8 }}>2. About Our Brands &amp; Entity Structure</h2>
          <p>
            The Relationship Goals App is operated under <strong>Happy Holiday Couples</strong>, a brand of
            the <strong>HHC Travel&trade;</strong> family. The following brands are all <strong>unregistered
            doing-business-as (DBA) names</strong> of <strong>SlateRiver LLC</strong>, a New Mexico limited
            liability company:
          </p>
          <ul style={{ paddingLeft: 24, listStyle: 'disc', marginTop: 8, marginBottom: 12 }}>
            <li>MCM Enterprises</li>
            <li>Crystallized Lovers (also known as Crystallize Lovers)</li>
            <li>Happy Holiday Couples</li>
            <li>HHC Travel&trade;</li>
            <li>Relationship Goals</li>
            <li>BEANS&trade; &amp; BEANS Financial&trade;</li>
          </ul>
          <p>
            All intellectual property, trade names, trademarks (registered and unregistered), content, and
            proprietary materials associated with these brands are <strong>exclusively licensed from
            Chude Muonelo, MS, LPC</strong> (Licensed Professional Counselor). No use, reproduction, or
            distribution is permitted without express written consent from the IP owner.
          </p>
          <p>
            Day-to-day operations are managed by <strong>MCM Enterprises</strong>, a DBA of SlateRiver LLC.
          </p>

          <h2 style={{ fontSize: '1.15rem', marginTop: 28, marginBottom: 8 }}>3. Disclosure of Credentials</h2>
          <p>
            Chude Muonelo's professional credentials (MS, LPC) are disclosed solely for the purpose of
            transparency regarding the qualifications of the IP owner and content creator. This disclosure
            does <strong>not</strong> establish, imply, or create any professional, therapeutic, counseling,
            clinical, fiduciary, or legal relationship between Chude Muonelo and any user of this App.
          </p>

          <h2 style={{ fontSize: '1.15rem', marginTop: 28, marginBottom: 8, color: 'var(--coral)' }}>
            4. NO THERAPEUTIC, COUNSELING, OR LEGAL RELATIONSHIP
          </h2>
          <p style={{ fontWeight: 600 }}>
            NOTHING on this App, in its content, services, features, daily missions, financial education
            materials (including BEANS&trade; and BEANS Financial&trade;), or any affiliated platform creates,
            implies, or establishes a legal, counseling, therapeutic, fiduciary, or professional relationship
            of any kind.
          </p>
          <p>
            This App is designed for relationship enrichment and entertainment purposes. It is not therapy.
            It is not counseling. It is not professional advice. Users who require professional assistance
            should seek independently licensed professionals for legal, financial, therapeutic, or medical needs.
          </p>

          <h2 style={{ fontSize: '1.15rem', marginTop: 28, marginBottom: 8 }}>5. Services Description</h2>
          <p>
            The App provides curated daily relationship missions, travel-oriented rewards (vacation credits),
            couple coupons, program-based relationship enrichment content, and integration with HHC Travel&trade;
            destination and cruise offerings. All features are designed to encourage positive couple engagement
            and are not substitutes for professional relationship counseling.
          </p>

          <h2 style={{ fontSize: '1.15rem', marginTop: 28, marginBottom: 8 }}>6. User Accounts &amp; Eligibility</h2>
          <p>
            You must be at least 18 years old to use this App. You are responsible for maintaining the
            confidentiality of your account credentials and for all activity that occurs under your account.
          </p>

          <h2 style={{ fontSize: '1.15rem', marginTop: 28, marginBottom: 8 }}>7. Payment &amp; Refund Policy</h2>
          <p>
            Purchases made through the App (including the 365-Day Pledge and any future offerings) generate
            credits. <strong>Credits are never refunded</strong> to the original payment method. Credits may
            be applied toward future bookings, upgrades, or add-ons within the HHC Travel&trade; ecosystem.
            See our <Link to="/privacy" style={{ color: 'var(--teal)' }}>Privacy Policy</Link> for data handling details.
          </p>

          <h2 style={{ fontSize: '1.15rem', marginTop: 28, marginBottom: 8 }}>8. BEANS&trade; &amp; BEANS Financial&trade;</h2>
          <p>
            Any financial education content delivered through BEANS&trade; or BEANS Financial&trade; is for
            informational and educational purposes only. It does not constitute financial advice, investment
            advice, tax advice, or any form of fiduciary guidance. Users should consult with licensed financial
            advisors for personalized financial decisions.
          </p>

          <h2 style={{ fontSize: '1.15rem', marginTop: 28, marginBottom: 8 }}>9. Intellectual Property</h2>
          <p>
            All content, designs, missions, program structures, branding, and proprietary materials are owned
            by or licensed to SlateRiver LLC from IP owner Chude Muonelo. Unauthorized reproduction,
            distribution, or derivative works are strictly prohibited.
          </p>

          <h2 style={{ fontSize: '1.15rem', marginTop: 28, marginBottom: 8 }}>10. Data Sharing</h2>
          <p>
            Your data may be shared across affiliated companies within the House of Terravian and Noo World
            Platforms ecosystem, including entities operating under SlateRiver LLC, to the extent permitted
            by applicable law. This sharing supports operational purposes, service improvement, and relevant
            offerings across our family of brands.
          </p>

          <h2 style={{ fontSize: '1.15rem', marginTop: 28, marginBottom: 8 }}>11. Third-Party Services</h2>
          <p>
            The App may integrate with third-party services including travel providers, payment processors
            (Stripe), authentication providers (Noo World ID), and SMS delivery services. These third parties
            operate under their own terms and privacy policies.
          </p>

          <h2 style={{ fontSize: '1.15rem', marginTop: 28, marginBottom: 8 }}>12. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, SlateRiver LLC, its DBAs, officers, agents, and licensors
            shall not be liable for any indirect, incidental, special, consequential, or punitive damages
            arising from your use of or inability to use the App.
          </p>

          <h2 style={{ fontSize: '1.15rem', marginTop: 28, marginBottom: 8 }}>13. Governing Law &amp; Disputes</h2>
          <p>
            These Terms are governed by the laws of the State of New Mexico. Any disputes shall be resolved
            through binding arbitration in the State of New Mexico.
          </p>

          <h2 style={{ fontSize: '1.15rem', marginTop: 28, marginBottom: 8 }}>14. Modifications</h2>
          <p>
            We reserve the right to update these Terms at any time. Continued use of the App after changes
            constitutes acceptance of the revised Terms.
          </p>

          <h2 style={{ fontSize: '1.15rem', marginTop: 28, marginBottom: 8 }}>15. Severability</h2>
          <p>
            If any provision of these Terms is found to be unenforceable, the remaining provisions shall
            continue in full force and effect.
          </p>

          <h2 style={{ fontSize: '1.15rem', marginTop: 28, marginBottom: 8 }}>16. Contact</h2>
          <p>
            For questions regarding these Terms, contact us through{' '}
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

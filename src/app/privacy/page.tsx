import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Hennepin Logic',
  description: 'Privacy policy for Hennepin Logic automated lead response services.',
  robots: {
    index: true,
    follow: true,
  },
}

export default function Privacy() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto prose prose-slate prose-lg">
          <h1 className="text-4xl font-heading font-bold text-slate-900 mb-6">Privacy Policy</h1>
          <p className="text-sm text-slate-500 mb-8">Last Updated: January 18, 2026</p>

          <h2>Introduction</h2>
          <p>
            Hennepin Logic (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) provides automated lead response infrastructure 
            for service businesses. This Privacy Policy explains how we collect, use, disclose, and safeguard 
            information when you use our services.
          </p>

          <h2>Information We Collect</h2>
          
          <h3>Business Information</h3>
          <p>When you sign up for our services, we collect:</p>
          <ul>
            <li>Business name and contact information</li>
            <li>Phone number(s) for integration</li>
            <li>Email addresses for notifications and support</li>
            <li>Billing information for payment processing</li>
          </ul>

          <h3>Lead Data</h3>
          <p>Through our automated response system, we process:</p>
          <ul>
            <li>Caller phone numbers and names</li>
            <li>SMS conversation content</li>
            <li>Service requests and qualification information</li>
            <li>Address/location data when provided by callers</li>
            <li>Urgency classifications and escalation triggers</li>
          </ul>

          <h3>Technical Data</h3>
          <p>We automatically collect:</p>
          <ul>
            <li>Call metadata (time, duration, status)</li>
            <li>System logs for troubleshooting and improvement</li>
            <li>Dashboard usage analytics</li>
          </ul>

          <h2>How We Use Your Information</h2>
          <p>We use collected information to:</p>
          <ul>
            <li>Provide automated lead response services</li>
            <li>Send SMS messages to your leads on your behalf</li>
            <li>Detect and escalate emergency situations</li>
            <li>Log lead information in your dashboard</li>
            <li>Process billing and payments</li>
            <li>Provide technical support</li>
            <li>Improve system performance and features</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2>Data Ownership</h2>
          <p>
            <strong>You own your lead data.</strong> All lead information captured through our system belongs to you. 
            We act as a data processor on your behalf. You can export your data at any time via CSV download or API access.
          </p>

          <h2>Data Sharing and Disclosure</h2>
          <p>We do not sell your data. We may share information with:</p>
          <ul>
            <li>
              <strong>Service Providers:</strong> Third-party vendors who assist with phone infrastructure, 
              SMS delivery, payment processing, and hosting services. These providers are contractually 
              obligated to protect your data.
            </li>
            <li>
              <strong>Your CRM/Systems:</strong> If you configure webhook integration, we share lead data 
              with your designated systems as directed by you.
            </li>
            <li>
              <strong>Legal Requirements:</strong> When required by law, court order, or governmental request.
            </li>
          </ul>

          <h2>Data Security</h2>
          <p>We implement security measures including:</p>
          <ul>
            <li>Encryption in transit (TLS/SSL) and at rest</li>
            <li>Access controls and authentication</li>
            <li>Regular security audits</li>
            <li>Secure data centers with redundancy</li>
            <li>Employee training on data protection</li>
          </ul>
          <p>
            However, no system is completely secure. We cannot guarantee absolute security but work 
            continuously to protect your information.
          </p>

          <h2>Data Retention</h2>
          <p>
            Lead data is retained according to your configuration settings. By default, we retain data for 
            12 months for active accounts. You can adjust retention periods or request deletion at any time. 
            After account cancellation, data is retained for 90 days for recovery purposes, then permanently deleted.
          </p>

          <h2>Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access your data and lead information</li>
            <li>Export your data in CSV format</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Opt-out of marketing communications</li>
            <li>Cancel services at any time</li>
          </ul>

          <h2>Compliance</h2>
          <p>
            Our services are designed to help you comply with applicable regulations including TCPA 
            (Telephone Consumer Protection Act) for SMS communications. You are responsible for ensuring 
            your use of our services complies with all applicable laws and regulations.
          </p>

          <h2>Third-Party Services</h2>
          <p>
            Our website may contain links to third-party services (e.g., Calendly for scheduling). 
            These services have their own privacy policies. We are not responsible for their practices.
          </p>

          <h2>Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy periodically. We will notify you of significant changes 
            via email or dashboard notification. Continued use of services after changes constitutes 
            acceptance of the updated policy.
          </p>

          <h2>Children&apos;s Privacy</h2>
          <p>
            Our services are not directed to individuals under 18 years of age. We do not knowingly 
            collect information from children.
          </p>

          <h2>Contact Us</h2>
          <p>Questions about this Privacy Policy? Contact us:</p>
          <ul>
            <li>Email: privacy@hennepinlogic.com</li>
            <li>Mail: Hennepin Logic, Minneapolis, MN</li>
          </ul>

          <hr className="my-8" />

          <p className="text-sm text-slate-600">
            This privacy policy is effective as of the date listed above and applies to all users of 
            Hennepin Logic services.
          </p>
        </div>
      </div>
    </section>
  )
}

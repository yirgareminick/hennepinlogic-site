import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service | Hennepin Logic',
  description: 'Terms of service for Hennepin Logic automated lead response services.',
  robots: {
    index: true,
    follow: true,
  },
}

export default function Terms() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto prose prose-slate prose-lg">
          <h1 className="text-4xl font-heading font-bold text-slate-900 mb-6">Terms of Service</h1>
          <p className="text-sm text-slate-500 mb-8">Last Updated: January 18, 2026</p>

          <h2>1. Agreement to Terms</h2>
          <p>
            By accessing or using Hennepin Logic services, you agree to be bound by these Terms of Service 
            (&quot;Terms&quot;). If you disagree with any part of these terms, you may not use our services.
          </p>

          <h2>2. Description of Services</h2>
          <p>
            Hennepin Logic provides automated lead response infrastructure for service businesses in the 
            Twin Cities metropolitan area. Services include:
          </p>
          <ul>
            <li>Call monitoring via phone integration</li>
            <li>Automated SMS response to missed calls and web forms</li>
            <li>Lead information capture and qualification</li>
            <li>Emergency escalation based on keyword detection</li>
            <li>Dashboard access for lead management</li>
            <li>Data export and CRM integration capabilities</li>
          </ul>

          <h2>3. Service Tiers</h2>
          <p>We offer three service tiers:</p>
          <ul>
            <li><strong>Tier 1 (Missed Call Coverage):</strong> Basic SMS response to missed calls</li>
            <li><strong>Tier 2 (Hybrid Reception):</strong> Advanced qualification with configurable human escalation</li>
            <li><strong>Tier 3 (Full AI Coverage):</strong> Complete autonomous handling with emergency escalation only</li>
          </ul>
          <p>
            Tier selection determines features, capabilities, and pricing. You may upgrade or downgrade tiers 
            with 7 days notice.
          </p>

          <h2>4. Account Registration</h2>
          <p>To use our services, you must:</p>
          <ul>
            <li>Be a business entity or authorized representative</li>
            <li>Provide accurate business information</li>
            <li>Maintain accurate account details</li>
            <li>Protect account credentials</li>
            <li>Operate a service business in the Twin Cities metro area</li>
          </ul>
          <p>
            You are responsible for all activity under your account. Notify us immediately of any 
            unauthorized access.
          </p>

          <h2>5. Service Requirements</h2>
          
          <h3>Phone System Compatibility</h3>
          <p>
            Our services require integration with your phone system via call forwarding or SIP trunk. 
            You are responsible for:
          </p>
          <ul>
            <li>Providing necessary access for integration</li>
            <li>Any carrier fees for call forwarding</li>
            <li>Maintaining compatible phone infrastructure</li>
          </ul>

          <h3>Configuration</h3>
          <p>
            You must provide configuration information including timeout thresholds, urgency keywords, 
            qualification questions, and escalation rules. We will implement your configuration but you 
            are responsible for the appropriateness of your settings.
          </p>

          <h2>6. Acceptable Use</h2>
          <p>You agree not to:</p>
          <ul>
            <li>Use services for illegal purposes</li>
            <li>Violate TCPA or other telecommunications regulations</li>
            <li>Send spam or unsolicited messages through our system</li>
            <li>Attempt to access systems beyond your authorized scope</li>
            <li>Interfere with service operation or other users</li>
            <li>Reverse engineer or copy our technology</li>
          </ul>

          <h2>7. Compliance Responsibilities</h2>
          <p>
            <strong>You are responsible for compliance</strong> with applicable laws including TCPA, state 
            consumer protection laws, and industry regulations. Our services provide tools for automation, 
            but you are responsible for:
          </p>
          <ul>
            <li>Obtaining proper consent for SMS communications</li>
            <li>Honoring opt-out requests</li>
            <li>Maintaining required disclosures</li>
            <li>Following industry-specific regulations for your business type</li>
          </ul>

          <h2>8. Service Guarantees and Limitations</h2>
          
          <h3>Response Time</h3>
          <p>
            We target 60-second response time for automated SMS after missed call detection. This is a 
            target, not a guarantee. Actual response time may vary based on phone system integration, 
            network conditions, and carrier processing times.
          </p>

          <h3>Uptime</h3>
          <p>
            We strive for 99.5% uptime but do not guarantee uninterrupted service. Scheduled maintenance 
            will be announced in advance when possible.
          </p>

          <h3>Emergency Escalation</h3>
          <p>
            Keyword-based emergency detection is based on your configured triggers. We cannot guarantee 
            detection of all urgent situations. You remain responsible for emergency response protocols.
          </p>

          <h2>9. Data Ownership and Usage</h2>
          <p>
            <strong>You own your lead data.</strong> We act as a data processor on your behalf. We may use 
            aggregated, anonymized data for service improvement and analytics. See our Privacy Policy for 
            detailed information handling practices.
          </p>

          <h2>10. Fees and Payment</h2>
          <ul>
            <li>Pricing based on selected tier and lead volume</li>
            <li>Monthly billing unless annual contract selected</li>
            <li>Charges processed automatically via provided payment method</li>
            <li>Late payments may result in service suspension</li>
            <li>Fees subject to change with 30 days notice</li>
          </ul>

          <h2>11. Trial Period</h2>
          <p>
            New customers typically receive a 30-day trial period. Trial terms will be specified during 
            signup. Either party may terminate during the trial without penalty.
          </p>

          <h2>12. Service Modifications</h2>
          <p>
            We may modify, suspend, or discontinue services at any time. We will provide reasonable notice 
            of significant changes. Continued use after changes constitutes acceptance.
          </p>

          <h2>13. Termination</h2>
          
          <h3>By You</h3>
          <p>
            Cancel anytime with 30 days notice. You will be charged for the notice period. Upon cancellation, 
            you may export your data. Data is retained for 90 days post-cancellation, then permanently deleted.
          </p>

          <h3>By Us</h3>
          <p>We may terminate or suspend services immediately if you:</p>
          <ul>
            <li>Violate these Terms</li>
            <li>Fail to pay fees</li>
            <li>Engage in fraudulent or illegal activity</li>
            <li>Abuse system resources</li>
          </ul>

          <h2>14. Limitation of Liability</h2>
          <p>
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, HENNEPIN LOGIC SHALL NOT BE LIABLE FOR ANY INDIRECT, 
            INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, 
            WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE 
            LOSSES RESULTING FROM:
          </p>
          <ul>
            <li>Use or inability to use services</li>
            <li>Missed leads or delayed responses</li>
            <li>Errors in emergency escalation</li>
            <li>Unauthorized access to your data</li>
            <li>System downtime or interruptions</li>
          </ul>
          <p>
            OUR TOTAL LIABILITY SHALL NOT EXCEED THE AMOUNT YOU PAID IN THE 12 MONTHS PRECEDING THE CLAIM.
          </p>

          <h2>15. Disclaimer of Warranties</h2>
          <p>
            SERVICES ARE PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, 
            EXPRESS OR IMPLIED, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, 
            OR NON-INFRINGEMENT.
          </p>

          <h2>16. Indemnification</h2>
          <p>
            You agree to indemnify and hold harmless Hennepin Logic from claims arising from your use of 
            services, violation of these Terms, or violation of any rights of third parties.
          </p>

          <h2>17. Geographic Limitation</h2>
          <p>
            Services are designed for businesses operating in the Twin Cities metropolitan area. We reserve 
            the right to limit service to this geographic region.
          </p>

          <h2>18. Changes to Terms</h2>
          <p>
            We may revise these Terms at any time. Material changes will be notified via email or dashboard 
            notification. Continued use after changes constitutes acceptance.
          </p>

          <h2>19. Governing Law</h2>
          <p>
            These Terms are governed by the laws of the State of Minnesota, without regard to conflict of 
            law principles. Disputes shall be resolved in courts located in Hennepin County, Minnesota.
          </p>

          <h2>20. Contact Information</h2>
          <p>Questions about these Terms? Contact us:</p>
          <ul>
            <li>Email: legal@hennepinlogic.com</li>
            <li>Mail: Hennepin Logic, Minneapolis, MN</li>
          </ul>

          <hr className="my-8" />

          <p className="text-sm text-slate-600">
            By using Hennepin Logic services, you acknowledge that you have read, understood, and agree 
            to be bound by these Terms of Service.
          </p>
        </div>
      </div>
    </section>
  )
}

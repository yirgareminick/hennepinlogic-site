import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of service for Nexly. Read our terms and conditions for using our services.',
};

export default function TermsPage() {
  return (
    <div className="pt-32 pb-16 lg:pt-40 lg:pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-foreground mb-8">Terms of Service</h1>
        <p className="text-secondary mb-8">Last updated: January 2026</p>

        <div className="prose prose-lg max-w-none text-secondary">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">1. Agreement to Terms</h2>
            <p>
              By accessing or using the services provided by Nexly (&ldquo;Company,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">2. Description of Services</h2>
            <p className="mb-4">
              Nexly provides automated lead response and follow up services for home service businesses, including but not limited to:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Automated text responses to missed calls</li>
              <li>Web form and social media lead response</li>
              <li>Lead qualification and information capture</li>
              <li>Emergency escalation services</li>
              <li>Follow up sequences for unresponsive leads</li>
              <li>Performance reporting and analytics</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">3. Pilot Program Terms</h2>
            <p className="mb-4">
              Our pilot program operates under the following terms:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>The pilot fee is $950 for a 30 day period</li>
              <li>The pilot fee is non refundable once services have begun</li>
              <li>If you continue with monthly service after the pilot, $500 of the pilot fee will be credited toward your first month</li>
              <li>There is no obligation to continue after the pilot period</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">4. Monthly Service Terms</h2>
            <p className="mb-4">
              For ongoing monthly service:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Monthly fees range from $1,500 to $2,500 depending on volume and complexity</li>
              <li>Service is billed monthly in advance</li>
              <li>Either party may terminate with 30 days written notice</li>
              <li>No refunds are provided for partial months</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">5. Client Responsibilities</h2>
            <p className="mb-4">You agree to:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Provide accurate business information and access credentials</li>
              <li>Maintain valid phone service and web properties</li>
              <li>Respond to escalated emergencies in a timely manner</li>
              <li>Ensure your use of our services complies with all applicable laws</li>
              <li>Not use our services to send unsolicited or spam messages</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">6. Compliance</h2>
            <p className="mb-4">
              Our services are designed to comply with applicable telecommunications regulations, including the Telephone Consumer Protection Act (TCPA). However, you are ultimately responsible for:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Obtaining appropriate consent from your customers</li>
              <li>Maintaining records of consent</li>
              <li>Honoring opt out requests</li>
              <li>Complying with all applicable federal, state, and local laws</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">7. Limitation of Liability</h2>
            <p className="mb-4">
              To the maximum extent permitted by law:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Our services are provided &ldquo;as is&rdquo; without warranties of any kind</li>
              <li>We are not liable for any indirect, incidental, special, or consequential damages</li>
              <li>Our total liability shall not exceed the fees paid by you in the preceding 12 months</li>
              <li>We are not responsible for lost leads due to technical issues beyond our reasonable control</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">8. Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless Nexly, its officers, directors, employees, and agents from any claims, damages, losses, or expenses arising from your use of our services or violation of these terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">9. Intellectual Property</h2>
            <p>
              All content, trademarks, and intellectual property related to our services remain the property of Nexly. You may not copy, modify, or distribute our materials without prior written consent.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">10. Termination</h2>
            <p>
              We reserve the right to suspend or terminate your access to our services at any time for violation of these terms or for any other reason at our sole discretion. Upon termination, your right to use our services will immediately cease.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">11. Governing Law</h2>
            <p>
              These terms shall be governed by and construed in accordance with the laws of the State of Minnesota, without regard to its conflict of law provisions. Any disputes arising from these terms shall be resolved in the courts of Hennepin County, Minnesota.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">12. Changes to Terms</h2>
            <p>
              We may modify these terms at any time. We will notify you of material changes by posting the updated terms on our website. Your continued use of our services after such changes constitutes acceptance of the new terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">13. Contact Information</h2>
            <p>
              For questions about these terms, please contact us at:
            </p>
            <div className="mt-4 p-4 bg-muted rounded-lg">
              <p><strong>Nexly</strong></p>
              <p>Twin Cities metro</p>
              <p>
                Email:{' '}
                <a href="mailto:sales@hennepinlogic.xyz" className="text-primary hover:underline">
                  sales@hennepinlogic.xyz
                </a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

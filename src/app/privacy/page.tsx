import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy for Nexly. Learn how we collect, use, and protect your information.',
};

export default function PrivacyPage() {
  return (
    <div className="pt-32 pb-16 lg:pt-40 lg:pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-foreground mb-8">Privacy Policy</h1>
        <p className="text-secondary mb-8">Last updated: January 2026</p>

        <div className="prose prose-lg max-w-none text-secondary">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">1. Information We Collect</h2>
            <p className="mb-4">We collect information you provide directly to us, including:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Name, email address, phone number, and company name when you contact us or sign up for our services</li>
              <li>Business information necessary to provide our lead response services</li>
              <li>Communication preferences and correspondence with us</li>
              <li>Payment information when you purchase our services</li>
            </ul>
            <p>We also automatically collect certain information when you visit our website, including your IP address, browser type, and pages visited.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">2. How We Use Your Information</h2>
            <p className="mb-4">We use the information we collect to:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Provide, maintain, and improve our services</li>
              <li>Process transactions and send related information</li>
              <li>Send you technical notices, updates, and support messages</li>
              <li>Respond to your comments, questions, and requests</li>
              <li>Monitor and analyze trends, usage, and activities</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">3. SMS Communications & TCPA Compliance</h2>
            <p className="mb-4">
              Our services involve automated SMS communications to leads on behalf of our clients. We are committed to compliance with the Telephone Consumer Protection Act (TCPA) and related regulations:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>All automated text messages include clear opt out instructions</li>
              <li>Recipients can reply STOP at any time to discontinue messages</li>
              <li>We maintain records of consent and opt out requests</li>
              <li>We limit the frequency of follow up messages (typically 2 to 3 messages maximum)</li>
              <li>We do not send messages during prohibited hours</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">4. Information Sharing</h2>
            <p className="mb-4">We do not sell your personal information to third parties. We may share your information:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>With service providers who assist in our operations</li>
              <li>To comply with legal obligations</li>
              <li>To protect our rights, privacy, safety, or property</li>
              <li>In connection with a merger, acquisition, or sale of assets</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">5. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">6. Data Retention</h2>
            <p>
              We retain your personal information for as long as necessary to fulfill the purposes for which it was collected, including to satisfy legal, accounting, or reporting requirements. When we no longer need your information, we will securely delete or anonymize it.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">7. Your Rights</h2>
            <p className="mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt out of marketing communications</li>
            </ul>
            <p>
              To exercise these rights, please contact us at{' '}
              <a href="mailto:sales@hennepinlogic.xyz" className="text-primary hover:underline">
                sales@hennepinlogic.xyz
              </a>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">8. Cookies & Analytics</h2>
            <p>
              We use cookies and similar technologies to collect information about your browsing activities. You can control cookies through your browser settings. We may use analytics services like Google Analytics to help us understand how visitors use our website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">9. Changes to This Policy</h2>
            <p>
              We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the &ldquo;Last updated&rdquo; date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">10. Contact Us</h2>
            <p>
              If you have any questions about this privacy policy, please contact us at:
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

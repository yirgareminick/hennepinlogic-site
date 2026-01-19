import type { Metadata } from 'next'
import CTAButton from '@/components/CTAButton'
import { FiMapPin, FiClock, FiMail, FiCalendar } from 'react-icons/fi'

export const metadata: Metadata = {
  title: 'Contact | Hennepin Logic - Schedule Demo or Get in Touch',
  description: 'Contact Hennepin Logic to schedule a demo, discuss your lead response needs, or learn about automated reception for Twin Cities service businesses.',
  openGraph: {
    title: 'Contact | Hennepin Logic',
    description: 'Schedule a demo or get in touch to discuss automated lead response for your service business.',
  },
}

export default function Contact() {
  return (
    <>
      {/* Hero */}
      <section className="section-padding bg-slate-900 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Let&apos;s Talk About Your Setup
            </h1>
            <p className="text-xl text-slate-300">
              Schedule a demo to see the system in action, or reach out with questions about 
              integration with your phone system and business processes.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Left Column - Info */}
            <div>
              <h2 className="text-3xl font-heading font-bold text-slate-900 mb-6">
                Schedule a Demo
              </h2>
              <p className="text-lg text-slate-700 mb-6">
                30-minute call to walk through the system, discuss your specific phone setup, 
                and answer technical questions about integration and configuration.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <FiCalendar className="text-primary-600 text-2xl" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-slate-900 mb-2">
                      What We&apos;ll Cover
                    </h3>
                    <ul className="space-y-1 text-slate-600">
                      <li>• System demonstration with real examples</li>
                      <li>• Phone system integration discussion</li>
                      <li>• Tier selection and configuration options</li>
                      <li>• Pricing and implementation timeline</li>
                      <li>• Your specific questions answered</li>
                    </ul>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <FiClock className="text-primary-600 text-2xl" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-slate-900 mb-2">
                      Business Hours
                    </h3>
                    <ul className="space-y-1 text-slate-600">
                      <li>Monday - Friday: 8:00 AM - 5:00 PM CT</li>
                      <li>Demos available within business hours</li>
                      <li>Emergency support line for active clients</li>
                    </ul>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <FiMapPin className="text-primary-600 text-2xl" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-slate-900 mb-2">
                      Service Area
                    </h3>
                    <p className="text-slate-600">
                      Twin Cities Metro: Minneapolis, St. Paul, and surrounding communities 
                      throughout the seven-county metropolitan area.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-primary-50 border-2 border-primary-200 rounded-lg p-6">
                <h3 className="font-heading font-bold text-slate-900 mb-3">
                  Before the Demo
                </h3>
                <p className="text-slate-600 mb-4">
                  It helps if you have this information ready:
                </p>
                <ul className="space-y-2 text-slate-600">
                  <li>• Current phone system provider (Verizon, AT&T, VoIP, etc.)</li>
                  <li>• Typical lead volume (calls and web forms per day/week)</li>
                  <li>• Current process for handling missed calls</li>
                  <li>• Whether you need after-hours coverage or 24/7</li>
                </ul>
              </div>
            </div>

            {/* Right Column - Calendly Embed */}
            <div>
              <div className="bg-white rounded-lg shadow-lg p-6 lg:sticky lg:top-24">
                <h3 className="text-2xl font-heading font-bold text-slate-900 mb-6 text-center">
                  Choose a Time
                </h3>
                
                {/* Calendly Inline Widget */}
                <div className="calendly-inline-widget min-h-[600px]" 
                     data-url="https://calendly.com/hennepinlogic-sales?hide_gdpr_banner=1&primary_color=0284c7"
                >
                </div>
                
                {/* Calendly Script */}
                <script 
                  type="text/javascript" 
                  src="https://assets.calendly.com/assets/external/widget.js" 
                  async
                />

                <p className="text-sm text-slate-500 text-center mt-4">
                  All times shown in Central Time (CT)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alternative Contact Methods */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-slate-900 mb-8 text-center">
              Other Ways to Reach Us
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <FiMail className="text-primary-600 text-2xl" />
                  <h3 className="text-xl font-heading font-bold text-slate-900">
                    Email
                  </h3>
                </div>
                <p className="text-slate-600 mb-4">
                  Send us a message with your questions or setup details. 
                  We&apos;ll respond within one business day.
                </p>
                <a 
                  href="mailto:info@hennepinlogic.com"
                  className="text-primary-600 font-semibold hover:text-primary-700"
                >
                  info@hennepinlogic.com
                </a>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <FiCalendar className="text-primary-600 text-2xl" />
                  <h3 className="text-xl font-heading font-bold text-slate-900">
                    Direct Scheduling Link
                  </h3>
                </div>
                <p className="text-slate-600 mb-4">
                  Prefer to schedule outside of this page? 
                  Use our direct Calendly link.
                </p>
                <a
                  href="https://calendly.com/hennepinlogic-sales"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 font-semibold hover:text-primary-700"
                >
                  calendly.com/hennepinlogic-sales
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ for Contact */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-slate-900 mb-8 text-center">
              Questions About Getting Started
            </h2>

            <div className="space-y-6">
              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="text-lg font-heading font-bold text-slate-900 mb-2">
                  What happens after I schedule a demo?
                </h3>
                <p className="text-slate-600">
                  You&apos;ll receive a calendar invitation with a video call link. During the 30-minute demo, 
                  we&apos;ll show you the system in action, discuss your phone setup, and answer questions. 
                  No pressure, no hard sell. If it&apos;s a good fit, we&apos;ll discuss next steps.
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="text-lg font-heading font-bold text-slate-900 mb-2">
                  How long does setup take?
                </h3>
                <p className="text-slate-600">
                  Technical setup typically takes 1-2 business days after configuration discussion. 
                  Call forwarding can be activated same-day. SIP trunk integration takes slightly longer. 
                  We handle the technical work—you just need to provide access and answer configuration questions.
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="text-lg font-heading font-bold text-slate-900 mb-2">
                  Is there a trial period?
                </h3>
                <p className="text-slate-600">
                  Yes. We typically recommend starting with a 30-day trial period to verify compatibility 
                  with your phone system and ensure the configuration matches your needs. Tier selection 
                  can be adjusted during or after the trial.
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="text-lg font-heading font-bold text-slate-900 mb-2">
                  Do I need to commit to a contract?
                </h3>
                <p className="text-slate-600">
                  After the trial period, we offer month-to-month service or discounted annual contracts. 
                  No long-term commitment required. Cancel anytime with 30 days notice.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

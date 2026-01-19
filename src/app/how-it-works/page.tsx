import type { Metadata } from 'next'
import CTAButton from '@/components/CTAButton'
import { FiPhone, FiMessageSquare, FiDatabase, FiAlertCircle, FiSettings, FiZap, FiShield, FiCheckCircle } from 'react-icons/fi'

export const metadata: Metadata = {
  title: 'How It Works | Hennepin Logic - Automated Lead Response System',
  description: 'Technical details on how Hennepin Logic automated lead response system monitors calls, responds within 60 seconds, captures lead information, and escalates emergencies for Twin Cities businesses.',
  openGraph: {
    title: 'How It Works | Hennepin Logic',
    description: 'Technical details on our automated lead response infrastructure for service businesses.',
  },
}

export default function HowItWorks() {
  return (
    <>
      {/* Hero */}
      <section className="section-padding bg-slate-900 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              How the System Works
            </h1>
            <p className="text-xl text-slate-300">
              Technical breakdown of the automated lead response infrastructure. 
              No marketing fluff—just the specifics of how calls get monitored, 
              responses get sent, and emergencies get escalated.
            </p>
          </div>
        </div>
      </section>

      {/* System Flow */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-slate-900 mb-12 text-center">
              System Flow: Call to Response
            </h2>

            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                  1
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <FiPhone className="text-primary-600 text-2xl" />
                    <h3 className="text-2xl font-heading font-bold text-slate-900">
                      Call Monitoring
                    </h3>
                  </div>
                  <p className="text-slate-700 mb-4">
                    System monitors your phone line through call forwarding or SIP trunk integration. 
                    Works with existing phone systems—Verizon, AT&T, local carriers, VoIP providers.
                  </p>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-start gap-2">
                      <FiCheckCircle className="text-green-600 flex-shrink-0 mt-1" />
                      <span>Your phone number stays the same—no customer-facing changes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FiCheckCircle className="text-green-600 flex-shrink-0 mt-1" />
                      <span>System only engages when calls exceed your timeout threshold</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FiCheckCircle className="text-green-600 flex-shrink-0 mt-1" />
                      <span>Configure: after-hours only, overflow during busy periods, or 24/7</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                  2
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <FiZap className="text-primary-600 text-2xl" />
                    <h3 className="text-2xl font-heading font-bold text-slate-900">
                      Automated Response
                    </h3>
                  </div>
                  <p className="text-slate-700 mb-4">
                    When a call goes unanswered past the threshold, automated SMS sent within 60 seconds. 
                    Initial message acknowledges their call and begins information gathering.
                  </p>
                  <div className="bg-slate-50 border-2 border-slate-200 rounded-lg p-4 font-mono text-sm">
                    <p className="text-slate-700 mb-2">
                      <strong>Example initial SMS:</strong>
                    </p>
                    <p className="text-slate-600">
                      &quot;Hi, this is [Business Name]. We missed your call but we&apos;re here to help. 
                      What service do you need assistance with?&quot;
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                  3
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <FiMessageSquare className="text-primary-600 text-2xl" />
                    <h3 className="text-2xl font-heading font-bold text-slate-900">
                      Information Capture
                    </h3>
                  </div>
                  <p className="text-slate-700 mb-4">
                    Automated conversation gathers essential lead information through structured questions. 
                    Qualification level depends on your tier selection.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-slate-50 rounded-lg p-4">
                      <p className="font-semibold text-slate-900 mb-2">Tier 1: Basic</p>
                      <ul className="text-sm text-slate-600 space-y-1">
                        <li>• Name</li>
                        <li>• Service type</li>
                        <li>• Callback preference</li>
                      </ul>
                    </div>
                    <div className="bg-primary-50 rounded-lg p-4 border-2 border-primary-600">
                      <p className="font-semibold text-slate-900 mb-2">Tier 2: Advanced</p>
                      <ul className="text-sm text-slate-600 space-y-1">
                        <li>• All basic info</li>
                        <li>• Address/location</li>
                        <li>• Urgency level</li>
                        <li>• Custom questions</li>
                      </ul>
                    </div>
                    <div className="bg-slate-50 rounded-lg p-4">
                      <p className="font-semibold text-slate-900 mb-2">Tier 3: Complete</p>
                      <ul className="text-sm text-slate-600 space-y-1">
                        <li>• All advanced info</li>
                        <li>• Appointment scheduling</li>
                        <li>• Budget range</li>
                        <li>• Timeline expectations</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                  4
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <FiAlertCircle className="text-primary-600 text-2xl" />
                    <h3 className="text-2xl font-heading font-bold text-slate-900">
                      Emergency Escalation
                    </h3>
                  </div>
                  <p className="text-slate-700 mb-4">
                    Keyword detection identifies urgent situations requiring immediate attention. 
                    System triggers real-time alerts to your on-call staff.
                  </p>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-start gap-2">
                      <FiCheckCircle className="text-green-600 flex-shrink-0 mt-1" />
                      <span>Customizable urgency keywords for your business type</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FiCheckCircle className="text-green-600 flex-shrink-0 mt-1" />
                      <span>Immediate SMS notification to designated on-call number</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FiCheckCircle className="text-green-600 flex-shrink-0 mt-1" />
                      <span>Optional voice call for critical emergencies</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FiCheckCircle className="text-green-600 flex-shrink-0 mt-1" />
                      <span>Full conversation context included in alert</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                  5
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <FiDatabase className="text-primary-600 text-2xl" />
                    <h3 className="text-2xl font-heading font-bold text-slate-900">
                      Data Logging
                    </h3>
                  </div>
                  <p className="text-slate-700 mb-4">
                    Every interaction logged in your dashboard. Complete conversation history, 
                    lead qualification details, timestamp, and urgency classification.
                  </p>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-start gap-2">
                      <FiCheckCircle className="text-green-600 flex-shrink-0 mt-1" />
                      <span>CSV export for external analysis</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FiCheckCircle className="text-green-600 flex-shrink-0 mt-1" />
                      <span>CRM integration available (webhook support)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FiCheckCircle className="text-green-600 flex-shrink-0 mt-1" />
                      <span>Searchable lead history</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FiCheckCircle className="text-green-600 flex-shrink-0 mt-1" />
                      <span>Response time analytics</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Integration */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-slate-900 mb-12 text-center">
              Technical Integration Details
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <FiPhone className="text-primary-600 text-2xl" />
                  <h3 className="text-xl font-heading font-bold text-slate-900">
                    Phone System Compatibility
                  </h3>
                </div>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 font-bold">•</span>
                    <span><strong>Traditional carriers:</strong> Verizon, AT&T, CenturyLink</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 font-bold">•</span>
                    <span><strong>VoIP systems:</strong> RingCentral, Nextiva, 8x8</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 font-bold">•</span>
                    <span><strong>Integration methods:</strong> Call forwarding (simple) or SIP trunk (advanced)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 font-bold">•</span>
                    <span><strong>Setup time:</strong> Call forwarding in minutes, SIP trunk 1-2 days</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <FiSettings className="text-primary-600 text-2xl" />
                  <h3 className="text-xl font-heading font-bold text-slate-900">
                    Configuration Options
                  </h3>
                </div>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 font-bold">•</span>
                    <span><strong>Timeout threshold:</strong> Set when system engages (e.g., after 4 rings)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 font-bold">•</span>
                    <span><strong>Operating hours:</strong> 24/7, business hours, or after-hours only</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 font-bold">•</span>
                    <span><strong>Custom questions:</strong> Qualification questions specific to your service</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 font-bold">•</span>
                    <span><strong>Escalation rules:</strong> Define urgency keywords and alert protocols</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <FiDatabase className="text-primary-600 text-2xl" />
                  <h3 className="text-xl font-heading font-bold text-slate-900">
                    Data Management
                  </h3>
                </div>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 font-bold">•</span>
                    <span><strong>Dashboard access:</strong> Web-based, mobile-responsive</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 font-bold">•</span>
                    <span><strong>Export options:</strong> CSV download anytime</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 font-bold">•</span>
                    <span><strong>CRM integration:</strong> Webhook support for popular platforms</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 font-bold">•</span>
                    <span><strong>Data retention:</strong> Configurable, you own your data</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <FiShield className="text-primary-600 text-2xl" />
                  <h3 className="text-xl font-heading font-bold text-slate-900">
                    Security & Reliability
                  </h3>
                </div>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 font-bold">•</span>
                    <span><strong>Uptime:</strong> System monitored 24/7, redundant infrastructure</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 font-bold">•</span>
                    <span><strong>Data encryption:</strong> In transit and at rest</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 font-bold">•</span>
                    <span><strong>Backup systems:</strong> Automatic failover if issues detected</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 font-bold">•</span>
                    <span><strong>Support:</strong> Twin Cities business hours, emergency line available</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real-World Example */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-slate-900 mb-8 text-center">
              Real-World Example
            </h2>
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-8 border-2 border-slate-200">
              <h3 className="text-xl font-heading font-bold text-slate-900 mb-6">
                Scenario: HVAC Company on Saturday Evening
              </h3>
              
              <div className="space-y-4 text-slate-700">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    1
                  </div>
                  <p>
                    <strong>7:45 PM Saturday:</strong> Customer&apos;s furnace stops working. Temperature dropping. 
                    They call your business number.
                  </p>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    2
                  </div>
                  <p>
                    <strong>7:46 PM:</strong> No answer after 4 rings. System detects unanswered call, 
                    sends SMS within 60 seconds.
                  </p>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    3
                  </div>
                  <p>
                    <strong>7:47 PM:</strong> Customer receives: &quot;Hi, this is [Business]. We missed your call. 
                    What HVAC issue are you experiencing?&quot;
                  </p>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    4
                  </div>
                  <p>
                    <strong>7:48 PM:</strong> Customer responds: &quot;Furnace stopped working, house getting cold, 
                    two young kids here.&quot;
                  </p>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    !
                  </div>
                  <p>
                    <strong>7:48 PM:</strong> Keywords &quot;stopped working&quot; + &quot;cold&quot; + &quot;kids&quot; trigger emergency alert. 
                    On-call technician gets immediate SMS with full context.
                  </p>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    5
                  </div>
                  <p>
                    <strong>7:50 PM:</strong> Technician calls customer directly. Job captured, emergency handled. 
                    Everything logged in dashboard.
                  </p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-green-50 border-2 border-green-200 rounded-lg">
                <p className="text-green-800">
                  <strong>Result:</strong> Lead captured and qualified within 4 minutes. Emergency properly escalated. 
                  Customer impressed by rapid response. Job secured.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What It's Not */}
      <section className="section-padding bg-slate-900 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-heading font-bold mb-8 text-center">
              What This Is NOT
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-800 rounded-lg p-6">
                <h3 className="text-xl font-heading font-bold mb-3 text-red-400">Not a CRM</h3>
                <p className="text-slate-300">
                  We capture leads and log data. We don&apos;t manage your entire customer lifecycle. 
                  Export to your CRM or use our webhook integration.
                </p>
              </div>

              <div className="bg-slate-800 rounded-lg p-6">
                <h3 className="text-xl font-heading font-bold mb-3 text-red-400">Not a Marketing Agency</h3>
                <p className="text-slate-300">
                  We don&apos;t generate leads. We respond to the leads you already get from your marketing efforts.
                </p>
              </div>

              <div className="bg-slate-800 rounded-lg p-6">
                <h3 className="text-xl font-heading font-bold mb-3 text-red-400">Not an Answering Service</h3>
                <p className="text-slate-300">
                  No humans answering your calls. This is automated infrastructure, not a call center.
                </p>
              </div>

              <div className="bg-slate-800 rounded-lg p-6">
                <h3 className="text-xl font-heading font-bold mb-3 text-red-400">Not Lead Generation</h3>
                <p className="text-slate-300">
                  We don&apos;t find customers for you. We make sure the customers who find you don&apos;t get ignored.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-6">
              See It In Action
            </h2>
            <p className="text-xl text-slate-600 mb-8">
              Schedule a 30-minute demo. We&apos;ll walk through the system, discuss your specific setup, 
              and answer technical questions about integration with your phone system.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton>Schedule Demo</CTAButton>
              <CTAButton href="/contact" external={false} variant="secondary">
                Contact Us
              </CTAButton>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

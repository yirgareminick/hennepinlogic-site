import type { Metadata } from 'next'
import CTAButton from '@/components/CTAButton'
import { FiMapPin, FiClock, FiUsers, FiTrendingUp } from 'react-icons/fi'

export const metadata: Metadata = {
  title: 'About | Hennepin Logic - Minneapolis-Based Lead Response Automation',
  description: 'Learn about Hennepin Logic, a Minneapolis-based company providing automated lead response infrastructure for Twin Cities service businesses. Local focus, technical expertise.',
  openGraph: {
    title: 'About | Hennepin Logic',
    description: 'Minneapolis-based automated lead response infrastructure for Twin Cities service businesses.',
  },
}

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="section-padding bg-slate-900 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Built for Twin Cities Service Businesses
            </h1>
            <p className="text-xl text-slate-300">
              We&apos;re based in Minneapolis. We understand how local service businesses operate, 
              how Minnesota weather impacts demand, and what it takes to compete in the Twin Cities market.
            </p>
          </div>
        </div>
      </section>

      {/* The Problem We Solve */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-slate-900 mb-6 text-center">
              Why We Built This
            </h2>
            <div className="prose prose-lg max-w-none text-slate-700">
              <p className="text-xl mb-6">
                Service businesses face a simple but critical problem: leads come in at all hours, 
                and the first business to respond usually wins the job. This isn&apos;t a marketing problem. 
                It&apos;s an operations problem.
              </p>
              
              <p className="mb-6">
                We watched Twin Cities HVAC companies, plumbers, electricians, and other service businesses 
                lose work because they couldn&apos;t answer calls during busy periods. They were out doing the work—
                fixing furnaces, unclogging drains, wiring installations. Meanwhile, potential customers 
                were calling, getting no answer, and moving to the next business on their list.
              </p>

              <p className="mb-6">
                The solutions we saw didn&apos;t fit the problem. CRMs tried to manage the entire customer lifecycle. 
                Marketing agencies promised more leads (when businesses already had more leads than they could handle). 
                Answering services added cost and complexity with human operators who couldn&apos;t integrate with 
                existing systems.
              </p>

              <p className="mb-6">
                What was missing was simple: automated infrastructure that sits between lead sources and teams. 
                Something that monitors inbound channels, responds within 60 seconds, captures information, 
                and escalates emergencies. Not a full CRM. Not a marketing agency. Not a call center. 
                Just reliable lead response automation.
              </p>

              <p>
                That&apos;s what Hennepin Logic does. Nothing more, nothing less.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Local Focus */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-slate-900 mb-12 text-center">
              Why Local Focus Matters
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <FiMapPin className="text-primary-600 text-2xl" />
                  <h3 className="text-xl font-heading font-bold text-slate-900">
                    Minneapolis Market Knowledge
                  </h3>
                </div>
                <p className="text-slate-600">
                  We understand the Twin Cities service business landscape. From Edina to Eden Prairie, 
                  Maple Grove to Burnsville, we know how local businesses operate and what they need.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <FiClock className="text-primary-600 text-2xl" />
                  <h3 className="text-xl font-heading font-bold text-slate-900">
                    Seasonal Demand Patterns
                  </h3>
                </div>
                <p className="text-slate-600">
                  Minnesota weather creates predictable demand swings. Furnace calls spike in January. 
                  AC calls surge in July. Roofing season is compressed. We get it.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <FiUsers className="text-primary-600 text-2xl" />
                  <h3 className="text-xl font-heading font-bold text-slate-900">
                    Local Support Hours
                  </h3>
                </div>
                <p className="text-slate-600">
                  Support aligned around Twin Cities business hours. Central time zone. 
                  We&apos;re here when you need us, not working off a script from across the country.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <FiTrendingUp className="text-primary-600 text-2xl" />
                  <h3 className="text-xl font-heading font-bold text-slate-900">
                    Growth Without Complexity
                  </h3>
                </div>
                <p className="text-slate-600">
                  We help local businesses scale operations without adding layers of complexity. 
                  More leads handled, same small team structure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-slate-900 mb-8 text-center">
              Twin Cities Metro Coverage
            </h2>
            <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
              We focus exclusively on the Minneapolis/St. Paul metropolitan area. 
              This isn&apos;t limiting—it&apos;s intentional. Deep local knowledge beats shallow national presence.
            </p>

            <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl p-8 border-2 border-primary-200">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                {[
                  'Minneapolis',
                  'St. Paul',
                  'Bloomington',
                  'Edina',
                  'Eden Prairie',
                  'Plymouth',
                  'Maple Grove',
                  'Brooklyn Park',
                  'Burnsville',
                  'Eagan',
                  'Minnetonka',
                  'Lakeville',
                  'Woodbury',
                  'Blaine',
                  'Coon Rapids',
                ].map((city) => (
                  <div key={city} className="bg-white rounded-lg p-3 text-center font-semibold text-slate-700">
                    {city}
                  </div>
                ))}
              </div>
              <p className="text-center text-slate-600">
                Plus surrounding communities throughout the seven-county metro area.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="section-padding bg-slate-900 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-heading font-bold mb-8 text-center">
              Our Approach
            </h2>

            <div className="space-y-6">
              <div className="bg-slate-800 rounded-lg p-6">
                <h3 className="text-xl font-heading font-bold mb-3">No Hype</h3>
                <p className="text-slate-300">
                  We don&apos;t promise to &quot;revolutionize&quot; your business or &quot;10x your revenue.&quot; 
                  We provide infrastructure that responds to missed calls and web leads within 60 seconds. 
                  That&apos;s the value. Everything else is marketing fluff.
                </p>
              </div>

              <div className="bg-slate-800 rounded-lg p-6">
                <h3 className="text-xl font-heading font-bold mb-3">Technical Credibility</h3>
                <p className="text-slate-300">
                  We&apos;re transparent about how the system works. Phone integration methods, 
                  response time capabilities, data handling, emergency escalation protocols. 
                  If you want technical details, we provide them.
                </p>
              </div>

              <div className="bg-slate-800 rounded-lg p-6">
                <h3 className="text-xl font-heading font-bold mb-3">Practical Solutions</h3>
                <p className="text-slate-300">
                  Three tiers because businesses have different needs and comfort levels with automation. 
                  Start small with Tier 1, scale to Tier 3 when ready. Configure it to match your operations, 
                  not force your operations to match the system.
                </p>
              </div>

              <div className="bg-slate-800 rounded-lg p-6">
                <h3 className="text-xl font-heading font-bold mb-3">Local Commitment</h3>
                <p className="text-slate-300">
                  We focus on the Twin Cities because depth beats breadth. Understanding local service business 
                  dynamics, seasonal patterns, and market conditions helps us build better solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Work With */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-slate-900 mb-8 text-center">
              Service Businesses We Work With
            </h2>
            <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
              Any service business that gets leads via phone calls or web forms and needs rapid response capability.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-slate-50 rounded-lg p-6">
                <h3 className="font-heading font-bold text-slate-900 mb-3">Home Services</h3>
                <ul className="space-y-2 text-slate-600">
                  <li>• HVAC</li>
                  <li>• Plumbing</li>
                  <li>• Electrical</li>
                  <li>• Roofing</li>
                  <li>• Garage Door</li>
                </ul>
              </div>

              <div className="bg-slate-50 rounded-lg p-6">
                <h3 className="font-heading font-bold text-slate-900 mb-3">Property Services</h3>
                <ul className="space-y-2 text-slate-600">
                  <li>• Landscaping</li>
                  <li>• Snow Removal</li>
                  <li>• Junk Removal</li>
                  <li>• Cleaning Services</li>
                  <li>• Property Management</li>
                </ul>
              </div>

              <div className="bg-slate-50 rounded-lg p-6">
                <h3 className="font-heading font-bold text-slate-900 mb-3">Specialty Services</h3>
                <ul className="space-y-2 text-slate-600">
                  <li>• Pest Control</li>
                  <li>• Locksmith</li>
                  <li>• Appliance Repair</li>
                  <li>• Restoration</li>
                  <li>• Contractors</li>
                </ul>
              </div>
            </div>

            <p className="text-center text-slate-600 mt-8">
              If your business depends on rapid response to inbound leads, this infrastructure works for you.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-6">
              Ready to Learn More?
            </h2>
            <p className="text-xl text-slate-600 mb-8">
              Schedule a demo to see how the system works with your specific business setup. 
              We&apos;ll discuss phone integration, configuration options, and answer your technical questions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton>Schedule Demo</CTAButton>
              <CTAButton href="/how-it-works" external={false} variant="secondary">
                How It Works
              </CTAButton>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

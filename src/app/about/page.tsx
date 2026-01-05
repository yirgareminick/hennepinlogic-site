import { Metadata } from "next";
import Link from "next/link";
import { CTA } from "@/components";

export const metadata: Metadata = {
  title: "About",
  description:
    "Hennepin Logic is a Minneapolis based automation company focused on lead response systems for local service businesses.",
  openGraph: {
    title: "About | Hennepin Logic",
    description:
      "Minneapolis based automation company focused on lead response systems.",
  },
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-14 overflow-hidden">
        <div className="absolute inset-0 bg-grid-fade opacity-30" />
        <div className="absolute inset-0 bg-radial-top" />
        
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            About Hennepin Logic
          </h1>
          <p className="text-lg text-foreground-muted">
            We build automated lead response infrastructure for Minneapolis service 
            companies. That&apos;s the entire focus.
          </p>
        </div>
      </section>

      {/* The approach */}
      <section className="py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-foreground mb-4">The approach</h2>
            <div className="space-y-4 text-foreground-muted">
              <p>
                Plumbing and restoration companies have a specific problem: leads come in 
                at all hours, and the first business to respond usually wins the job. This 
                isn&apos;t a marketing problem. It&apos;s an operations problem.
              </p>
              <p>
                We built a system that handles the operational side of lead response. It 
                monitors your inbound channels, responds within 60 seconds, captures the 
                information you need, and escalates emergencies to the right person.
              </p>
              <p>
                We&apos;re not a CRM, not a marketing agency, not an answering service. We&apos;re 
                automated infrastructure that sits between your lead sources and your team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Minneapolis */}
      <section className="py-14 bg-muted/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">Why Minneapolis focus</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4 text-foreground-muted">
              <p>
                We&apos;re based in Minneapolis. Working with local companies means we know the market, 
                understand local demand swings, and align support around Twin Cities business hours.
              </p>
              <p>
                It also means we understand the seasonal patterns, frozen pipes in January, 
                spring flooding, the water heater replacement surge in fall. These patterns 
                affect how the system should be configured.
              </p>
            </div>
            <div className="card-tech rounded-xl p-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-foreground">Service area</h3>
                <span className="text-xs text-foreground-muted terminal-text">Twin Cities</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  "Minneapolis",
                  "St. Paul",
                  "Bloomington",
                  "Edina",
                  "Eden Prairie",
                  "Plymouth",
                  "Maple Grove",
                  "Brooklyn Park",
                  "Burnsville",
                  "Eagan",
                ].map((city, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 rounded-full bg-muted border border-border text-sm text-foreground-muted"
                  >
                    {city}
                  </span>
                ))}
                <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary">
                  + Twin Cities metro
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why plumbing and restoration */}
      <section className="py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">Why plumbing and restoration</h2>
          <div className="space-y-4 text-foreground-muted mb-6">
            <p>
              These industries have specific characteristics that make speed to lead 
              especially critical:
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                title: "Emergency driven",
                description: "A burst pipe or flooded basement isn't a comparison shopping situation. Customers call down their list until someone answers.",
              },
              {
                title: "High job value",
                description: "Average emergency plumbing call: $400 to $800. Average restoration job: $2,500 to $8,000. Missed calls have real revenue impact.",
              },
              {
                title: "24/7 nature",
                description: "Emergencies happen at 2 AM. You can't be awake all the time, but an automated system can.",
              },
              {
                title: "Field based work",
                description: "Your team is on job sites, not at desks. Missed calls pile up while everyone's working.",
              },
            ].map((item, index) => (
              <div key={index} className="card-tech rounded-lg p-5">
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-foreground-muted">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values / how we work */}
      <section className="py-14 bg-muted/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">How we work</h2>
          <div className="space-y-4">
            {[
              {
                title: "Direct communication",
                description: "No account managers or support tickets. You talk to the people who built and maintain the system.",
              },
              {
                title: "Transparent pricing",
                description: "Pilot program is $950. Monthly service is $1,500 to $2,500 depending on complexity. No hidden fees or usage based surprises.",
              },
              {
                title: "We do the setup",
                description: "You provide access credentials. We configure everything. Technical implementation isn't your problem.",
              },
              {
                title: "Measurable results",
                description: "Weekly reports with actual data. Response times, lead volume, escalation events. You can evaluate objectively.",
              },
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-foreground-muted">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact info */}
      <section className="py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card-tech rounded-xl p-6 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">Get in touch</h2>
            <p className="text-foreground-muted mb-6">
              Questions about whether the system would work for your operation? 
              Reach out directly.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:sales@hennepinlogic.xyz"
                className="text-primary hover:underline"
              >
                sales@hennepinlogic.xyz
              </a>
              <span className="hidden sm:inline text-foreground-muted">•</span>
              <a
                href="tel:+16125551234"
                className="text-primary hover:underline"
              >
                (612) 695-1337
              </a>
              <span className="hidden sm:inline text-foreground-muted">•</span>
              <Link
                href="https://calendly.com/hennepinlogic-sales"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Schedule a call
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTA
        title="Ready to see how it works?"
        description="10 minute call to discuss your operation and whether the system makes sense."
        variant="minimal"
      />
    </>
  );
}

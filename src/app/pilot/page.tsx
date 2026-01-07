import { Metadata } from "next";
import Link from "next/link";
import { FAQ, CTA } from "@/components";

export const metadata: Metadata = {
  title: "30 Day Pilot Program",
  description:
    "Try the speed to lead system for 30 days. $950 one time fee covers full setup, monitoring, and reporting. No long term commitment required.",
  openGraph: {
    title: "30 Day Pilot Program | Nexly",
    description:
      "Try the speed to lead system for 30 days. $950 all in, no commitment.",
  },
};

const inclusions = [
  "Full system setup and configuration",
  "All integrations (phone, web, GBP, Facebook)",
  "30 days of 24/7 operation",
  "Emergency escalation rules",
  "Follow up sequence configuration",
  "Weekly performance reports",
  "Direct support (Slack/email)",
  "End of pilot review call",
];

const pilotFAQs = [
  {
    question: "What happens if the pilot doesn't work for us?",
    answer:
      "You walk away. There's no contract or commitment beyond the 30 days. We'll do a review call to discuss what happened and whether there's anything that could be adjusted, but you're under no obligation to continue.",
  },
  {
    question: "How quickly can we start?",
    answer:
      "After the initial call, setup takes 24 to 48 hours depending on your integrations. Most pilots go live within a week of the first conversation.",
  },
  {
    question: "Do we need to change our phone system?",
    answer:
      "No. We integrate via call forwarding, which works with your existing system. Your phone number stays the same, and your normal call handling continues unchanged.",
  },
  {
    question: "What's included in the weekly reports?",
    answer:
      "Lead volume by source, response times, escalation events, follow up completion rates, and any notable patterns. We'll highlight what's working and any adjustments we recommend.",
  },
  {
    question: "What determines the post pilot monthly price?",
    answer:
      "Lead volume and integration complexity. A single location operation with phone only integration is on the lower end. Multiple locations, high volume, or complex routing is higher. We'll quote specific pricing during the review call.",
  },
  {
    question: "Is the $500 credit automatic?",
    answer:
      "Yes, if you convert to monthly service within 14 days of the pilot ending. It's applied to your first month's invoice.",
  },
];

export default function PilotPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-grid-fade opacity-30" />
        <div className="absolute inset-0 bg-radial-top" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted border border-border text-sm text-foreground-muted mb-6">
            <span className="status-online" />
            <span className="terminal-text">Minneapolis pilot program</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            30 Day Pilot Program
          </h1>
          <p className="text-xl text-foreground-muted max-w-2xl mx-auto mb-8">
            Full system setup and 30 days of operation. See the results before 
            committing to ongoing service.
          </p>
          <Link
            href="https://calendly.com/hennepinlogic-sales"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2"
          >
            Schedule Demo
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Pilot card */}
            <div className="card-tech rounded-2xl p-8 glow-primary">
              <div className="mb-6">
                <p className="text-sm text-primary terminal-text mb-2">30 day pilot</p>
                <div className="text-5xl font-bold text-foreground mb-2">$950</div>
                <p className="text-foreground-muted">One time fee</p>
              </div>

              <div className="divider-tech my-6" />

              <ul className="space-y-3 mb-8">
                {inclusions.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm">
                    <svg className="w-4 h-4 text-success mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-foreground-muted">{item}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="https://calendly.com/hennepinlogic-sales"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full text-center inline-flex items-center justify-center gap-2"
              >
                Start Pilot
              </Link>
            </div>

            {/* Post-pilot info */}
            <div className="space-y-6">
              <div className="card-tech rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-4">Post Pilot Pricing</h3>
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="text-2xl font-bold text-foreground">$1,500 to $2,500</span>
                  <span className="text-foreground-muted">/month</span>
                </div>
                <p className="text-sm text-foreground-muted mb-4">
                  Monthly rate depends on lead volume, number of integrations, and 
                  routing complexity. We'll provide a specific quote during the 
                  end of pilot review.
                </p>
                <div className="p-3 rounded-lg bg-success/10 border border-success/20">
                  <div className="flex items-center gap-2 text-success text-sm">
                    <span><strong>$500 credit</strong> toward month 1 if you convert within 14 days</span>
                  </div>
                </div>
              </div>

              <div className="card-tech rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-4">Timeline</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded bg-muted flex items-center justify-center flex-shrink-0">
                      <span className="text-xs text-primary font-bold">1</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">Discovery call</p>
                      <p className="text-xs text-foreground-muted">15 minutes to review fit</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded bg-muted flex items-center justify-center flex-shrink-0">
                      <span className="text-xs text-primary font-bold">2</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">Setup & testing</p>
                      <p className="text-xs text-foreground-muted">24 to 48 hours</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded bg-muted flex items-center justify-center flex-shrink-0">
                      <span className="text-xs text-primary font-bold">3</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">Pilot operation</p>
                      <p className="text-xs text-foreground-muted">30 days of live use</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded bg-muted flex items-center justify-center flex-shrink-0">
                      <span className="text-xs text-primary font-bold">4</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">Review call</p>
                      <p className="text-xs text-foreground-muted">Results and recommendations</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What we measure */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">What We Measure</h2>
            <p className="text-foreground-muted">
              Weekly reports include these metrics so you can evaluate the system&apos;s 
              performance objectively.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { metric: "Response time", description: "Average seconds from lead event to first contact" },
              { metric: "Lead volume", description: "Total leads captured across all channels" },
              { metric: "Escalation events", description: "Emergency triggers and on call notifications" },
              { metric: "Follow up completion", description: "Percentage of sequences completed" },
            ].map((item, index) => (
              <div key={index} className="card-tech rounded-xl p-6 text-center">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-foreground mb-2">{item.metric}</h3>
                <p className="text-sm text-foreground-muted">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expectations */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card-tech rounded-xl p-8">
            <h3 className="text-xl font-bold text-foreground mb-6">What to Expect</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-1">First week</h4>
                  <p className="text-sm text-foreground-muted">
                    System goes live. We monitor closely and make any necessary adjustments 
                    to response templates, escalation rules, or timing.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-1">Weeks 2 to 4</h4>
                  <p className="text-sm text-foreground-muted">
                    Regular operation. Weekly reports delivered. You see real data on 
                    response times and lead capture. We're available for questions.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-1">End of pilot</h4>
                  <p className="text-sm text-foreground-muted">
                    Review call to discuss results. We share the full data, our 
                    observations, and recommendations. You decide whether to continue.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQ
        title="Pilot FAQ"
        subtitle="Common questions about the pilot program"
        items={pilotFAQs}
      />

      <CTA
        title="Ready to start the pilot?"
        description="Schedule a 10 minute call to discuss your setup and determine if it's a fit."
        buttonText="Schedule Demo"
      />
    </>
  );
}

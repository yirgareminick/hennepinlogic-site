import { Metadata } from "next";
import { Hero, ProblemSection, FAQ, PilotOffer, CTA } from "@/components";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Lead Response for Minneapolis Plumbers",
  description:
    "Automated lead response system built for emergency plumbing companies. Sub-60-second response on missed calls and web leads. Minneapolis-focused.",
  openGraph: {
    title: "Lead Response for Minneapolis Plumbers | Hennepin Logic",
    description:
      "Automated lead response system built for emergency plumbing companies.",
  },
};

const plumbingProblems = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
      </svg>
    ),
    title: "2 AM burst pipe calls",
    description:
      "Emergency calls don't follow business hours. A customer with water flooding their basement isn't leaving a voicemail and waiting until morning.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "On-job distractions",
    description:
      "You're under a sink or in a crawl space. Phone's in the truck. By the time you see the missed call notification, they've moved on.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
    title: "Inconsistent follow-up",
    description:
      "Lead comes in, you call back once, no answer. It falls through the cracks. No one tracks whether you tried again the next day.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
    title: "No urgency filtering",
    description:
      "Without triage, a dripping faucet and a gas leak get the same response. Or worse—everything goes to voicemail and nothing gets escalated.",
  },
];

const plumbingFAQs = [
  {
    question: "Does this work with my current phone system?",
    answer:
      "Yes. We integrate via call forwarding or SIP trunk depending on your setup. Works with most providers—Verizon, AT&T, local carriers, VoIP systems. Your number stays the same.",
  },
  {
    question: "What if I have a receptionist?",
    answer:
      "The system is configurable. You can set it to only handle after-hours and overflow, or run 24/7 as a backup. It only engages when calls go unanswered past your timeout threshold.",
  },
  {
    question: "How does it know if something is an emergency?",
    answer:
      "Keyword detection. You define what triggers escalation—'flooding,' 'burst,' 'gas smell,' 'no hot water.' When detected, it immediately notifies your on-call number via SMS and can trigger a voice call.",
  },
  {
    question: "What happens to the lead information?",
    answer:
      "Everything is logged in your dashboard—caller info, service type, address, urgency level, callback preference. You can export to CSV or we can push to your CRM if you have one.",
  },
];

const features = [
  {
    title: "Missed call text-back",
    description: "Automatic SMS within 60 seconds of any missed call",
  },
  {
    title: "Web form response",
    description: "Instant reply to contact form submissions",
  },
  {
    title: "Emergency escalation",
    description: "Real-time alerts to on-call tech for urgent issues",
  },
  {
    title: "Lead info capture",
    description: "Service type, address, urgency, callback time",
  },
  {
    title: "Follow-up sequence",
    description: "Automated check-ins at 2h, 24h, 48h if no response",
  },
  {
    title: "Weekly reporting",
    description: "Response times, lead volume, conversion tracking",
  },
];

export default function PlumbingPage() {
  return (
    <>
      <Hero
        badge="For Plumbing Companies"
        eyebrow="Minneapolis Emergency Plumbers"
        title="Automated Lead Response for Plumbing Operations"
        description="A system that catches every missed call, responds instantly, captures job details, and escalates true emergencies to your on-call tech. Built for the operational reality of running a plumbing company."
        primaryCta={{
          text: "Schedule Demo",
          href: "https://calendly.com/hennepinlogic-sales",
        }}
      />

      <ProblemSection
        title="Why Plumbing Leads Slip Away"
        subtitle="The specific challenges of lead capture in emergency plumbing"
        problems={plumbingProblems}
      />

      {/* How it works for plumbers */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-grid-fade opacity-20" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <p className="text-primary font-medium mb-4 terminal-text">// plumbing.workflow</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              How It Works for Plumbers
            </h2>
            <p className="text-lg text-foreground-muted">
              The system is configured specifically for plumbing workflows—emergency keywords, 
              service type classification, and escalation rules that match how you operate.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="card-tech rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-foreground">{feature.title}</h3>
                </div>
                <p className="text-sm text-foreground-muted">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/how-it-works"
              className="btn-secondary inline-flex items-center gap-2"
            >
              Full system documentation
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Example workflow */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-muted/30" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card-tech rounded-xl p-8">
            <p className="text-primary font-medium mb-4 terminal-text">// example.flow</p>
            <h3 className="text-xl font-bold text-foreground mb-6">
              Example: After-hours burst pipe call
            </h3>
            
            <div className="space-y-4 terminal-text text-sm">
              <div className="flex gap-4 items-start">
                <span className="text-foreground-muted w-16 flex-shrink-0">11:47 PM</span>
                <div className="flex-1 p-3 rounded-lg bg-background border border-border">
                  <span className="text-primary">event:</span> Missed call from (612) 555-8421
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <span className="text-foreground-muted w-16 flex-shrink-0">11:47 PM</span>
                <div className="flex-1 p-3 rounded-lg bg-background border border-border">
                  <span className="text-primary">action:</span> SMS sent: &quot;Hi, this is [Your Company]. We got your call. What&apos;s going on?&quot;
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <span className="text-foreground-muted w-16 flex-shrink-0">11:48 PM</span>
                <div className="flex-1 p-3 rounded-lg bg-background border border-border">
                  <span className="text-primary">response:</span> &quot;Pipe burst in my basement. Water everywhere.&quot;
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <span className="text-foreground-muted w-16 flex-shrink-0">11:48 PM</span>
                <div className="flex-1 p-3 rounded-lg bg-background border border-success/30">
                  <span className="text-success">escalation:</span> Emergency detected. Notifying on-call: Mike (612) 555-2847
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <span className="text-foreground-muted w-16 flex-shrink-0">11:49 PM</span>
                <div className="flex-1 p-3 rounded-lg bg-background border border-border">
                  <span className="text-primary">capture:</span> Address collected: 4521 Park Ave, Minneapolis
                </div>
              </div>
            </div>
            
            <p className="text-sm text-foreground-muted mt-6">
              Total time from missed call to on-call notification: 2 minutes. 
              All information logged and accessible in dashboard.
            </p>
          </div>
        </div>
      </section>

      <PilotOffer variant="compact" />

      <FAQ
        title="Questions from Plumbers"
        subtitle="Technical and operational details for plumbing company owners"
        items={plumbingFAQs}
      />

      <CTA
        title="See how it works for plumbing"
        description="10-minute call to walk through the system with plumbing-specific examples and discuss your current setup."
      />
    </>
  );
}

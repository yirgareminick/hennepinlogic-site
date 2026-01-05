import { Metadata } from "next";
import { Hero, ProblemSection, FAQ, PilotOffer, CTA } from "@/components";
import type { Message } from "@/components";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Lead Response for Minneapolis Water Damage Restoration",
  description:
    "Automated lead response system for water damage restoration companies. Under 60 second response time on emergency calls and insurance referrals. Minneapolis focused.",
  openGraph: {
    title: "Lead Response for Minneapolis Restoration | Hennepin Logic",
    description:
      "Automated lead response system for water damage restoration companies.",
  },
};

// Restoration-specific phone conversation
const restorationConversation: Message[] = [
  {
    type: "event",
    label: "MISSED CALL",
    text: "(651) 555-2847",
    delay: 0,
  },
  {
    type: "typing",
    delay: 1200,
  },
  {
    type: "outgoing",
    text: "Hi, this is Metro Restoration Services. We received your call, are you dealing with water damage or another emergency?",
    delay: 2800,
  },
  {
    type: "typing-incoming",
    delay: 5000,
  },
  {
    type: "incoming",
    text: "Yes! Our basement is flooding. A pipe burst and there's water everywhere",
    delay: 7500,
  },
  {
    type: "typing",
    delay: 9500,
  },
  {
    type: "outgoing",
    text: "I understand, that's stressful. Let me get a crew to you ASAP. What's the property address?",
    delay: 11500,
  },
  {
    type: "typing-incoming",
    delay: 14000,
  },
  {
    type: "incoming",
    text: "892 Summit Ave, St. Paul 55105",
    delay: 17000,
  },
  {
    type: "typing",
    delay: 19000,
  },
  {
    type: "outgoing",
    text: "Got it. Is this a residential home? And do you know if you have homeowner's insurance?",
    delay: 21000,
  },
  {
    type: "typing-incoming",
    delay: 23500,
  },
  {
    type: "incoming",
    text: "Yes, residential. We have State Farm",
    delay: 26000,
  },
  {
    type: "typing",
    delay: 28000,
  },
  {
    type: "outgoing",
    text: "Perfect. I'm dispatching our emergency team now. They'll call within 10 minutes with an ETA. We'll also help with the insurance claim paperwork.",
    delay: 30500,
  },
  {
    type: "typing-incoming",
    delay: 33500,
  },
  {
    type: "incoming",
    text: "Thank you so much!",
    delay: 35000,
  },
  {
    type: "success",
    text: "Emergency dispatched → Crew en route",
    delay: 37000,
  },
];

const restorationProblems = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "High stakes emergencies",
    description:
      "Water damage gets worse by the hour. A customer with a flooded basement isn't comparison shopping. They're calling down their list until someone answers.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: "Insurance referral timing",
    description:
      "When insurance sends a referral, response time determines whether you get the job. First to respond, first to schedule inspection.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Crew coordination",
    description:
      "Your team is spread across job sites. Missed calls pile up while everyone assumes someone else is handling dispatch.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
    title: "Missing documentation",
    description:
      "Initial customer contact details get lost between the call and the first site visit. Important for insurance paperwork.",
  },
];

const restorationFAQs = [
  {
    question: "Can the system handle insurance referral calls?",
    answer:
      "Yes. You can configure specific response flows for insurance company numbers or referral sources. These can be prioritized and routed differently than general inquiries.",
  },
  {
    question: "How does it integrate with our job management software?",
    answer:
      "We can push captured lead data to most job management systems via API or webhook. Common integrations include PSA, Next Gear, Restoration Manager, and generic CRM platforms.",
  },
  {
    question: "What information does it capture for water damage calls?",
    answer:
      "The conversational flow captures: type of damage (water, fire, mold), affected area size, cause if known, property address, insurance status, and preferred inspection time. All configurable.",
  },
  {
    question: "How does escalation work for after hours emergencies?",
    answer:
      "Keywords like 'flooding,' 'sewage,' 'fire damage' trigger immediate escalation. The system sends SMS to your designated on call person and can trigger a voice call if there's no response within your timeout window.",
  },
];

const features = [
  {
    title: "Emergency response",
    description: "Under 60 seconds text back on all missed calls",
  },
  {
    title: "Damage classification",
    description: "Automated capture of damage type and scope",
  },
  {
    title: "Insurance routing",
    description: "Specific flows for insurance referral calls",
  },
  {
    title: "Address verification",
    description: "Property location captured before dispatch",
  },
  {
    title: "On call escalation",
    description: "Real time alerts for true emergencies",
  },
  {
    title: "Documentation log",
    description: "Full transcript for insurance paperwork",
  },
];

export default function RestorationPage() {
  return (
    <>
      <Hero
        badge="For Restoration Companies"
        eyebrow="Minneapolis Water Damage & Restoration"
        title="Automated Lead Response for Restoration Operations"
        description="A system that catches every emergency call, classifies the damage type, captures property details, and escalates to your on call crew. Built for the 24/7 nature of restoration work."
        primaryCta={{
          text: "Schedule Demo",
          href: "https://calendly.com/hennepinlogic-sales",
        }}
        phoneConversation={restorationConversation}
        phoneBusinessName="Metro Restoration Services"
      />

      <ProblemSection
        title="Why Restoration Leads Require Speed"
        subtitle="The specific challenges of lead capture in water damage restoration"
        problems={restorationProblems}
      />

      {/* How it works for restoration */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-grid-fade opacity-20" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <p className="text-primary font-medium mb-4 terminal-text">// restoration.workflow</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              How It Works for Restoration
            </h2>
            <p className="text-lg text-foreground-muted">
              The system is configured for restoration workflows, damage classification, 
              insurance routing, and escalation rules that match emergency response operations.
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
              Example: Insurance referral for water damage
            </h3>
            
            <div className="space-y-4 terminal-text text-sm">
              <div className="flex gap-4 items-start">
                <span className="text-foreground-muted w-16 flex-shrink-0">3:22 PM</span>
                <div className="flex-1 p-3 rounded-lg bg-background border border-border">
                  <span className="text-primary">event:</span> Missed call from State Farm Claims (800-xxx-xxxx)
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <span className="text-foreground-muted w-16 flex-shrink-0">3:22 PM</span>
                <div className="flex-1 p-3 rounded-lg bg-background border border-border">
                  <span className="text-primary">match:</span> Insurance referral detected. Priority routing enabled.
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <span className="text-foreground-muted w-16 flex-shrink-0">3:22 PM</span>
                <div className="flex-1 p-3 rounded-lg bg-background border border-border">
                  <span className="text-primary">action:</span> SMS sent: &quot;This is [Your Company] responding to your referral. What&apos;s the property address?&quot;
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <span className="text-foreground-muted w-16 flex-shrink-0">3:24 PM</span>
                <div className="flex-1 p-3 rounded-lg bg-background border border-border">
                  <span className="text-primary">capture:</span> Address: 892 Summit Ave, St. Paul | Damage: Basement flooding | Claim: #SF-892847
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <span className="text-foreground-muted w-16 flex-shrink-0">3:25 PM</span>
                <div className="flex-1 p-3 rounded-lg bg-background border border-success/30">
                  <span className="text-success">notification:</span> Lead qualified. Alert sent to dispatch: Sarah (612) 555-9182
                </div>
              </div>
            </div>
            
            <p className="text-sm text-foreground-muted mt-6">
              Total time from missed call to dispatch notification: 3 minutes. 
              Insurance claim number captured for documentation.
            </p>
          </div>
        </div>
      </section>

      {/* Job value context */}
      <section className="relative py-24 overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card-tech rounded-xl p-8 glow-primary">
            <p className="text-primary font-medium mb-4 terminal-text">// context.economics</p>
            <h3 className="text-xl font-bold text-foreground mb-4">
              The economics of restoration leads
            </h3>
            <p className="text-foreground-muted mb-6">
              Average water damage restoration job in Minneapolis: $2,500 to $8,000. 
              Larger commercial jobs or extensive mold remediation can run $15,000+. 
              A single missed emergency call during a spring flooding event can represent 
              significant lost revenue, especially when insurance is involved and the 
              customer needs immediate response.
            </p>
            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-primary stat-number">$2.5K to $8K</div>
                <div className="text-sm text-foreground-muted">Average job value</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary stat-number">24/7</div>
                <div className="text-sm text-foreground-muted">Emergency nature</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary stat-number">~60s</div>
                <div className="text-sm text-foreground-muted">Decision window</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PilotOffer variant="compact" />

      <FAQ
        title="Questions from Restoration Companies"
        subtitle="Technical and operational details for restoration company owners"
        items={restorationFAQs}
      />

      <CTA
        title="See how it works for restoration"
        description="10 minute call to walk through the system with restoration specific examples and discuss your current operations."
      />
    </>
  );
}

import { Metadata } from "next";
import Link from "next/link";
import { FAQ, CTA } from "@/components";

export const metadata: Metadata = {
  title: "How the System Works",
  description:
    "Technical documentation for the 60-second lead response system. Integrations, automation flow, data capture, and escalation logic explained.",
  openGraph: {
    title: "How the System Works | Hennepin Logic",
    description:
      "Technical documentation for the 60-second lead response system.",
  },
};

const integrations = [
  {
    name: "Phone System",
    description: "Call forwarding or SIP trunk integration",
    status: "Required",
    details: "Works with Verizon, AT&T, local carriers, and VoIP systems. We configure forwarding rules so missed calls trigger the system while your existing phone setup stays unchanged.",
  },
  {
    name: "Web Forms",
    description: "Webhook or direct form integration",
    status: "Optional",
    details: "Your contact forms send data to our endpoint via webhook. Works with most form builders and website platforms. Setup requires adding a webhook URL to your form configuration.",
  },
  {
    name: "Google Business Profile",
    description: "GBP messaging API integration",
    status: "Optional",
    details: "We connect to Google's Business Messaging API to capture messages from your GBP listing. Requires verification through Google Business Profile.",
  },
  {
    name: "Facebook Lead Forms",
    description: "Facebook lead ads sync",
    status: "Optional",
    details: "Lead form submissions from Facebook ads are captured via the Facebook Marketing API. Requires Facebook Business account access.",
  },
];

const dataPoints = [
  { field: "Caller/Lead Name", source: "SMS conversation", required: "Optional" },
  { field: "Phone Number", source: "Caller ID / Form", required: "Automatic" },
  { field: "Service Type", source: "Conversational capture", required: "Required" },
  { field: "Property Address", source: "Conversational capture", required: "Required" },
  { field: "Urgency Level", source: "Keyword detection", required: "Automatic" },
  { field: "Callback Preference", source: "Conversational capture", required: "Optional" },
  { field: "Timestamp", source: "System", required: "Automatic" },
  { field: "Source Channel", source: "System", required: "Automatic" },
];

const escalationRules = [
  {
    trigger: "Emergency keywords",
    examples: "flooding, burst, gas smell, sewage, fire, no heat",
    action: "Immediate SMS + voice call to on-call",
  },
  {
    trigger: "High urgency response",
    examples: "Customer indicates ASAP, today, emergency",
    action: "Priority flag, immediate notification",
  },
  {
    trigger: "Insurance referral",
    examples: "Call from known insurance numbers",
    action: "Priority routing, specific response flow",
  },
  {
    trigger: "Business hours",
    examples: "Outside configured operating hours",
    action: "After-hours protocol, escalation if urgent",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-grid-fade opacity-30" />
        <div className="absolute inset-0 bg-radial-top" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-primary font-medium mb-4 terminal-text">// docs.system</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            System Documentation
          </h1>
          <p className="text-xl text-foreground-muted">
            Technical overview of the lead response system. How integrations work, 
            what data is captured, and how escalation logic operates.
          </p>
        </div>
      </section>

      {/* Architecture Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">Architecture Overview</h2>
            <p className="text-foreground-muted max-w-3xl">
              The system sits between your inbound channels and your team. It monitors for 
              lead events, responds automatically, captures information, and routes to the 
              appropriate person based on configurable rules.
            </p>
          </div>

          {/* Visual flow */}
          <div className="card-tech rounded-xl p-8 overflow-x-auto">
            <div className="flex items-center justify-between min-w-[800px] gap-4">
              {/* Inbound */}
              <div className="text-center">
                <div className="w-24 h-24 rounded-xl bg-muted border border-border flex items-center justify-center mb-3 mx-auto">
                  <svg className="w-10 h-10 text-foreground-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </div>
                <div className="text-sm font-medium text-foreground">Inbound</div>
                <div className="text-xs text-foreground-muted">Phone, Web, GBP, FB</div>
              </div>

              <div className="flex-1 h-px bg-border relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-2 bg-card text-xs text-foreground-muted">
                  webhook/API
                </div>
              </div>

              {/* System */}
              <div className="text-center">
                <div className="w-24 h-24 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center mb-3 mx-auto glow-primary">
                  <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
                <div className="text-sm font-medium text-foreground">Hennepin Logic</div>
                <div className="text-xs text-foreground-muted">Process & Route</div>
              </div>

              <div className="flex-1 h-px bg-border relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-2 bg-card text-xs text-foreground-muted">
                  SMS/Voice
                </div>
              </div>

              {/* Lead */}
              <div className="text-center">
                <div className="w-24 h-24 rounded-xl bg-muted border border-border flex items-center justify-center mb-3 mx-auto">
                  <svg className="w-10 h-10 text-foreground-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div className="text-sm font-medium text-foreground">Lead</div>
                <div className="text-xs text-foreground-muted">Response + Capture</div>
              </div>

              <div className="flex-1 h-px bg-border relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-2 bg-card text-xs text-foreground-muted">
                  notify
                </div>
              </div>

              {/* Team */}
              <div className="text-center">
                <div className="w-24 h-24 rounded-xl bg-success/10 border border-success/30 flex items-center justify-center mb-3 mx-auto">
                  <svg className="w-10 h-10 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="text-sm font-medium text-foreground">Your Team</div>
                <div className="text-xs text-foreground-muted">Qualified lead</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">Integrations</h2>
            <p className="text-foreground-muted max-w-3xl">
              The system connects to your existing channels. No changes to your phone 
              number or website required—we integrate alongside your current setup.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {integrations.map((integration, index) => (
              <div key={index} className="card-tech rounded-xl p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-semibold text-foreground">{integration.name}</h3>
                    <p className="text-sm text-foreground-muted">{integration.description}</p>
                  </div>
                  <span className={`px-2 py-1 rounded text-xs ${
                    integration.status === "Required" 
                      ? "bg-primary/10 text-primary" 
                      : "bg-muted text-foreground-muted"
                  }`}>
                    {integration.status}
                  </span>
                </div>
                <p className="text-sm text-foreground-muted">{integration.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Capture */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">Data Capture</h2>
            <p className="text-foreground-muted max-w-3xl">
              The conversational flow gathers the information you need to respond 
              effectively. All data is logged and accessible in your dashboard.
            </p>
          </div>

          <div className="card-tech rounded-xl overflow-hidden">
            <table className="w-full">
              <thead className="bg-muted/50">
                <tr>
                  <th className="text-left px-6 py-4 text-sm font-medium text-foreground">Field</th>
                  <th className="text-left px-6 py-4 text-sm font-medium text-foreground">Source</th>
                  <th className="text-left px-6 py-4 text-sm font-medium text-foreground">Collection</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {dataPoints.map((point, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 text-sm text-foreground">{point.field}</td>
                    <td className="px-6 py-4 text-sm text-foreground-muted">{point.source}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 rounded text-xs ${
                        point.required === "Automatic"
                          ? "bg-success/10 text-success"
                          : point.required === "Required"
                          ? "bg-primary/10 text-primary"
                          : "bg-muted text-foreground-muted"
                      }`}>
                        {point.required}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Escalation Logic */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">Escalation Logic</h2>
            <p className="text-foreground-muted max-w-3xl">
              Configurable rules determine how leads are routed. You define what 
              constitutes an emergency and who gets notified.
            </p>
          </div>

          <div className="space-y-4">
            {escalationRules.map((rule, index) => (
              <div key={index} className="card-tech rounded-xl p-6">
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <div className="text-xs text-foreground-muted mb-1 terminal-text">trigger</div>
                    <div className="font-medium text-foreground">{rule.trigger}</div>
                  </div>
                  <div>
                    <div className="text-xs text-foreground-muted mb-1 terminal-text">examples</div>
                    <div className="text-sm text-foreground-muted">{rule.examples}</div>
                  </div>
                  <div>
                    <div className="text-xs text-foreground-muted mb-1 terminal-text">action</div>
                    <div className="text-sm text-primary">{rule.action}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Setup Process */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">Setup Process</h2>
            <p className="text-foreground-muted">
              We handle the technical setup. Here&apos;s what the process looks like.
            </p>
          </div>

          <div className="space-y-6">
            {[
              { step: "1", title: "Discovery call", duration: "10 min", description: "We discuss your current setup, lead sources, and requirements. Determine if the system is a fit." },
              { step: "2", title: "Access & configuration", duration: "1-2 hours", description: "You provide access credentials (phone forwarding, form webhooks, API keys). We configure the system." },
              { step: "3", title: "Testing", duration: "1-2 hours", description: "We run test scenarios—missed calls, form submissions, escalation triggers. Verify everything works." },
              { step: "4", title: "Go live", duration: "Ongoing", description: "System goes active. We monitor the first few days closely and make adjustments as needed." },
            ].map((item, index) => (
              <div key={index} className="flex gap-6 items-start">
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold">{item.step}</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="font-semibold text-foreground">{item.title}</h3>
                    <span className="text-xs text-foreground-muted terminal-text">{item.duration}</span>
                  </div>
                  <p className="text-sm text-foreground-muted">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/pilot"
              className="btn-secondary inline-flex items-center gap-2"
            >
              View pilot program details
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <FAQ
        title="Technical FAQ"
        subtitle="Common questions about system integration and operation"
      />

      <CTA
        title="Questions about how it works?"
        description="Schedule a call to discuss your specific setup and technical requirements."
      />
    </>
  );
}

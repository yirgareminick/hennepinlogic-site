"use client";

const steps = [
  {
    number: "01",
    title: "Inbound Signal",
    description: "System monitors your phone line, web forms, Google Business Profile, and Facebook. When a lead event fires, we capture it instantly.",
    code: `event: "missed_call"
source: "phone"
timestamp: ${new Date().toISOString().split('T')[0]}
status: "processing"`,
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Automated Response",
    description: "Within 60 seconds, the lead receives a personalized SMS from your business number. Message templates are configured during setup.",
    code: `send_sms({
  to: lead.phone,
  from: business.number,
  template: "initial_response",
  personalization: true
})`,
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Data Capture",
    description: "Conversational flow gathers the information you need: service type, property address, urgency level, preferred callback window.",
    code: `captured_data: {
  service: "water_heater",
  address: "verified",
  urgency: "high",
  callback: "asap"
}`,
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Escalation Logic",
    description: "If urgency flags trigger (flooding, gas smell, no heat), the system immediately notifies your on-call technician via SMS and call.",
    code: `if (lead.urgency === "emergency") {
  notify_oncall(tech.phone);
  escalation_status: "sent"
}`,
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
  },
  {
    number: "05",
    title: "Follow-Up Sequence",
    description: "If the lead doesn't respond, automated follow-ups trigger at 2h, 24h, and 48h intervals. Configurable based on your preferences.",
    code: `sequence: [
  { delay: "2h", type: "sms" },
  { delay: "24h", type: "sms" },
  { delay: "48h", type: "sms" }
]`,
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
  {
    number: "06",
    title: "Reporting Dashboard",
    description: "Weekly reports show response times, lead volume, conversion status, and recovered opportunities. Data exports available.",
    code: `report: {
  period: "weekly",
  leads_captured: 47,
  avg_response: "34s",
  recovered: 12
}`,
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
];

export function SystemSteps() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid-fade opacity-20" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-primary font-medium mb-4 terminal-text">// system.architecture</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            How the System Works
          </h2>
          <p className="text-lg text-foreground-muted">
            The pipeline from inbound signal to captured lead. Each step is automated, 
            logged, and configurable to your business rules.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="card-tech rounded-xl p-6 relative group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Step number */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-primary terminal-text text-sm">{step.number}</span>
                <div className="flex-1 h-px bg-border" />
                <div className="w-10 h-10 rounded-lg bg-muted border border-border flex items-center justify-center text-primary group-hover:border-primary transition-colors">
                  {step.icon}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {step.title}
              </h3>
              <p className="text-foreground-muted text-sm mb-4 leading-relaxed">
                {step.description}
              </p>

              {/* Code preview */}
              <div className="bg-background rounded-lg border border-border p-3 overflow-hidden">
                <pre className="terminal-text text-xs text-foreground-muted overflow-x-auto">
                  <code>{step.code}</code>
                </pre>
              </div>

              {/* Connector line (not on last in row) */}
              {(index + 1) % 3 !== 0 && index !== steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-border" />
              )}
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="mt-16 p-6 rounded-xl bg-muted/30 border border-border">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                End-to-end automation
              </h3>
              <p className="text-foreground-muted">
                No manual intervention required. The system runs 24/7 and handles the entire 
                lead capture workflow while you focus on jobs.
              </p>
            </div>
            <div className="flex items-center gap-6 text-sm">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary stat-number">&lt;60s</div>
                <div className="text-foreground-muted">Response</div>
              </div>
              <div className="w-px h-10 bg-border" />
              <div className="text-center">
                <div className="text-2xl font-bold text-primary stat-number">24/7</div>
                <div className="text-foreground-muted">Active</div>
              </div>
              <div className="w-px h-10 bg-border" />
              <div className="text-center">
                <div className="text-2xl font-bold text-primary stat-number">100%</div>
                <div className="text-foreground-muted">Captured</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

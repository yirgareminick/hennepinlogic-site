const features = [
  {
    category: "Inbound Channels",
    items: [
      "Phone missed-call detection",
      "Web form webhook integration",
      "Google Business Profile messaging",
      "Facebook lead form sync",
    ],
  },
  {
    category: "Response Automation",
    items: [
      "Sub-60-second SMS response",
      "Customizable message templates",
      "Business hours awareness",
      "Multi-language support available",
    ],
  },
  {
    category: "Data Capture",
    items: [
      "Service type classification",
      "Address collection & validation",
      "Urgency level detection",
      "Callback time preference",
    ],
  },
  {
    category: "Escalation & Routing",
    items: [
      "Emergency keyword detection",
      "On-call tech notification",
      "SMS + voice escalation",
      "Configurable rules engine",
    ],
  },
  {
    category: "Follow-Up",
    items: [
      "Automated drip sequences",
      "Configurable intervals",
      "Response-based branching",
      "Opt-out handling (TCPA)",
    ],
  },
  {
    category: "Reporting",
    items: [
      "Weekly performance digest",
      "Response time analytics",
      "Lead source breakdown",
      "CSV export available",
    ],
  },
];

export function Checklist() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <p className="text-primary text-sm font-medium mb-3">// system.capabilities</p>
          <h2 className="text-3xl font-bold text-foreground mb-4">
            What the System Includes
          </h2>
          <p className="text-foreground-muted">
            Full feature set across inbound handling, automation, and reporting.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {features.map((group, groupIndex) => (
            <div
              key={groupIndex}
              className="p-5 rounded-xl bg-card border border-border"
            >
              <h3 className="font-medium text-foreground mb-4 text-sm">
                {group.category}
              </h3>
              <ul className="space-y-2.5">
                {group.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="flex items-start gap-2.5 text-sm"
                  >
                    <svg className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-foreground-muted">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Technical note */}
        <div className="mt-10 p-5 rounded-xl bg-card border border-border">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <div>
              <h4 className="font-medium text-foreground mb-1 text-sm">
                Integration approach
              </h4>
              <p className="text-foreground-muted text-sm mb-3">
                We connect to your existing phone system and lead sources via API or webhook. 
                No changes to your current workflows required.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Twilio", "Webhooks", "API", "Zapier"].map((tech) => (
                  <span key={tech} className="px-2 py-1 bg-muted text-xs text-foreground-muted rounded border border-border">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

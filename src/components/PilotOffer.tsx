import Link from "next/link";

interface PilotOfferProps {
  variant?: "default" | "compact";
}

export function PilotOffer({ variant = "default" }: PilotOfferProps) {
  const inclusions = [
    "Full system configuration",
    "All integrations (phone, web, GBP, Facebook)",
    "30 days of 24/7 operation",
    "Weekly performance reports",
    "Direct support (Slack/email)",
    "End-of-pilot review call",
  ];

  if (variant === "compact") {
    return (
      <section className="relative py-16 overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card-tech rounded-2xl p-8 text-center">
            <p className="text-primary terminal-text text-sm mb-3">30-day pilot program</p>
            <div className="text-4xl font-bold text-foreground mb-2">
              $950
              <span className="text-lg font-normal text-foreground-muted ml-2">one-time</span>
            </div>
            <p className="text-foreground-muted mb-6 max-w-md mx-auto">
              Full setup, 30 days of operation, weekly reports. No commitment beyond the pilot.
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
        </div>
      </section>
    );
  }

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-muted/30" />
      <div className="absolute inset-0 bg-radial-center opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Info */}
          <div>
            <p className="text-primary font-medium mb-4 terminal-text">// pilot.program</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              30-Day Pilot Program
            </h2>
            <p className="text-lg text-foreground-muted mb-8">
              We run the system for 30 days. You see the data. 
              If it&apos;s working, we discuss ongoing service. If not, you walk away.
            </p>

            {/* Inclusions */}
            <div className="space-y-3 mb-8">
              {inclusions.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-success flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-foreground-muted">{item}</span>
                </div>
              ))}
            </div>

            {/* Post-pilot info */}
            <div className="p-4 rounded-lg bg-background border border-border">
              <h4 className="text-sm font-medium text-foreground mb-2">After the pilot</h4>
              <p className="text-sm text-foreground-muted">
                Monthly service runs $1,500–$2,500/mo depending on lead volume and integration complexity.
                Pilot clients who convert receive a $500 credit toward month one.
              </p>
            </div>
          </div>

          {/* Right: Pricing card */}
          <div className="card-tech rounded-2xl p-8 lg:p-10 glow-primary">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm mb-4">
                <span className="status-online" />
                Minneapolis Pilot
              </div>
              <div className="text-5xl font-bold text-foreground mb-2">$950</div>
              <p className="text-foreground-muted">One-time setup + 30 days</p>
            </div>

            {/* Divider */}
            <div className="divider-tech my-8" />

            {/* Details */}
            <div className="space-y-4 mb-8">
              <div className="flex justify-between text-sm">
                <span className="text-foreground-muted">Setup turnaround</span>
                <span className="text-foreground">48 hours</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-foreground-muted">Operation period</span>
                <span className="text-foreground">30 days</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-foreground-muted">Monitoring</span>
                <span className="text-foreground">24/7</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-foreground-muted">Long-term commitment</span>
                <span className="text-foreground">None</span>
              </div>
            </div>

            {/* CTA */}
            <Link
              href="https://calendly.com/hennepinlogic-sales"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full text-center inline-flex items-center justify-center gap-2"
            >
              Schedule Demo
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>

            <p className="text-center text-sm text-foreground-muted mt-4">
              10-minute call to review fit and answer questions
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

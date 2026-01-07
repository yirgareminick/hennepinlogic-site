const stats = [
  {
    value: "78%",
    label: "First responder advantage",
    detail: "Customers hire the first business to respond",
    source: "InsideSales.com",
  },
  {
    value: "21x",
    label: "Lead qualification rate",
    detail: "5 min vs 30 min response time comparison",
    source: "MIT/InsideSales research",
  },
  {
    value: "85%→20%",
    label: "Conversion decay",
    detail: "Contact rate drops after 30 minute delay",
    source: "Lead response studies",
  },
  {
    value: "~$800",
    label: "Lost opportunity cost",
    detail: "Average value of missed emergency call",
    source: "Industry average",
  },
];

export function Stats() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <p className="text-primary text-sm font-medium mb-3">// research.data</p>
          <h2 className="text-3xl font-bold text-foreground mb-4">
            The Economics of Response Time
          </h2>
          <p className="text-foreground-muted">
            Speed to lead isn&apos;t marketing speak. It&apos;s supported by data from industry research.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="p-5 rounded-xl bg-card border border-border"
            >
              <div className="text-2xl font-bold text-primary mb-3">
                {stat.value}
              </div>
              <h3 className="text-foreground font-medium mb-1 text-sm">
                {stat.label}
              </h3>
              <p className="text-sm text-foreground-muted mb-3">
                {stat.detail}
              </p>
              <div className="pt-3 border-t border-border">
                <span className="text-xs text-foreground-muted">
                  src: {stat.source}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Context note */}
        <div className="mt-10 p-5 rounded-xl bg-card border border-border">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h4 className="text-foreground font-medium mb-1 text-sm">
                Context for urgent response teams
              </h4>
              <p className="text-foreground-muted text-sm">
                When an issue feels urgent, customers are not comparison shopping. 
                They are calling the next number on the list until someone answers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

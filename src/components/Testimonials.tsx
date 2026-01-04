export function Testimonials() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-primary font-medium mb-4 terminal-text">// feedback.pending</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Results in Progress
          </h2>
          <p className="text-lg text-foreground-muted max-w-2xl mx-auto">
            We&apos;re currently running our first pilot programs with Twin Cities plumbing and 
            restoration companies. Case studies and testimonials will be added here as pilots complete.
          </p>
        </div>

        {/* Placeholder cards */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card-tech rounded-xl p-6 border-dashed">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-muted border border-border" />
              <div>
                <div className="h-4 w-24 bg-muted rounded" />
                <div className="h-3 w-32 bg-muted/50 rounded mt-1" />
              </div>
            </div>
            <div className="space-y-2">
              <div className="h-3 w-full bg-muted/50 rounded" />
              <div className="h-3 w-5/6 bg-muted/50 rounded" />
              <div className="h-3 w-4/6 bg-muted/50 rounded" />
            </div>
            <p className="text-sm text-foreground-muted mt-4 italic">
              Plumbing company pilot in progress
            </p>
          </div>

          <div className="card-tech rounded-xl p-6 border-dashed">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-muted border border-border" />
              <div>
                <div className="h-4 w-24 bg-muted rounded" />
                <div className="h-3 w-32 bg-muted/50 rounded mt-1" />
              </div>
            </div>
            <div className="space-y-2">
              <div className="h-3 w-full bg-muted/50 rounded" />
              <div className="h-3 w-5/6 bg-muted/50 rounded" />
              <div className="h-3 w-4/6 bg-muted/50 rounded" />
            </div>
            <p className="text-sm text-foreground-muted mt-4 italic">
              Restoration company pilot in progress
            </p>
          </div>
        </div>

        {/* Note */}
        <div className="mt-12 p-6 rounded-xl bg-muted/30 border border-border text-center">
          <p className="text-foreground-muted">
            Interested in being a pilot client? We&apos;re taking a limited number of Twin Cities 
            companies for our initial cohort.{" "}
            <a
              href="https://calendly.com/hennepinlogic-sales"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Learn more about the pilot program
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}

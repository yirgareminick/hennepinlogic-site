const serviceAreas = [
  "St. Paul",
  "Bloomington",
  "Edina",
  "Eden Prairie",
  "Plymouth",
  "Maple Grove",
  "Brooklyn Park",
  "Burnsville",
  "Eagan",
];

export function LocalTrust() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid-fade opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Local context */}
          <div>
            <p className="text-primary font-medium mb-4 terminal-text">// location.context</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Twin Cities Based Operation
            </h2>
            <p className="text-lg text-foreground-muted mb-8">
              We&apos;re based in the Twin Cities metro and work exclusively with area service companies. 
              This focus matters because we understand seasonal patterns and local market rhythms.
            </p>

            {/* Local knowledge points */}
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-lg bg-muted/30 border border-border">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-1">Seasonal patterns</h4>
                  <p className="text-sm text-foreground-muted">
                    Frozen pipe surge in January, spring flooding, water heater replacements in fall. 
                    We configure response priorities based on seasonal demand.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-lg bg-muted/30 border border-border">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-1">Local availability</h4>
                  <p className="text-sm text-foreground-muted">
                    Available for in person setup assistance and review meetings. 
                    Not a remote only vendor from another timezone.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-lg bg-muted/30 border border-border">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-1">Focused clientele</h4>
                  <p className="text-sm text-foreground-muted">
                    We only work with plumbing and restoration companies. 
                    No generic &quot;works for any business&quot; approach.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Service areas */}
          <div className="card-tech rounded-xl p-8">
            <h3 className="font-semibold text-foreground mb-6">Service Area</h3>
            
            {/* Map placeholder */}
            <div className="aspect-video rounded-lg bg-muted/50 border border-border mb-6 relative overflow-hidden">
              <div className="absolute inset-0 bg-grid opacity-30" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-3">
                    <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <p className="text-foreground font-medium">Twin Cities Metro</p>
                  <p className="text-sm text-foreground-muted">Serving the wider metro</p>
                </div>
              </div>
            </div>

            {/* Cities list */}
            <div className="flex flex-wrap gap-2">
              {serviceAreas.map((city, index) => (
                <span
                  key={index}
                  className="px-3 py-1 rounded-full bg-muted border border-border text-sm text-foreground-muted"
                >
                  {city}
                </span>
              ))}
              <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary">
                + Metro area
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface Problem {
  icon: React.ReactNode;
  title: string;
  description: string;
  lostValue?: string;
}

interface ProblemSectionProps {
  title?: string;
  subtitle?: string;
  problems?: Problem[];
}

const defaultProblems: Problem[] = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "After hours coverage gap",
    description:
      "Calls come in at 2 AM. You're asleep. By morning, they've called someone else.",
    lostValue: "~$1,200/mo",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Web leads sitting in inbox",
    description:
      "Someone fills out your contact form at 6 PM. You see it the next morning.",
    lostValue: "~$800/mo",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
    title: "No emergency triage",
    description:
      "Without automated triage, a dripping faucet and a burst pipe get the same response.",
    lostValue: "Burnout risk",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
    title: "Manual data capture",
    description:
      "Juggling pen and paper while on another job. Information gets lost.",
    lostValue: "Accuracy issues",
  },
];

export function ProblemSection({
  title = "The Operational Problem",
  subtitle = "Common lead capture gaps in service companies",
  problems = defaultProblems,
}: ProblemSectionProps) {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 max-w-full">
          <p className="text-primary text-sm font-medium mb-3">// problem.analysis</p>
          <h2 className="text-3xl font-bold text-foreground mb-4 max-w-4xl">
            {title}
          </h2>
          <p className="text-foreground-muted max-w-3xl">{subtitle}</p>
        </div>

        {/* Problems Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="p-5 rounded-xl bg-card border border-border"
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="w-9 h-9 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400">
                  {problem.icon}
                </div>
                {problem.lostValue && (
                  <span className="text-xs text-red-400 bg-red-500/10 px-2 py-1 rounded">
                    {problem.lostValue}
                  </span>
                )}
              </div>
              <h3 className="font-medium text-foreground mb-2 text-sm">
                {problem.title}
              </h3>
              <p className="text-foreground-muted text-sm leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

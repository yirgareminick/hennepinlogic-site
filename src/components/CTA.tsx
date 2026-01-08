import Link from "next/link";

interface CTAProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
  variant?: "default" | "minimal";
}

export function CTA({
  title = "Ready to see the system?",
  description = "Schedule a 15 minute call. We'll walk through how it works and answer any questions about your specific setup.",
  buttonText = "Schedule Demo",
  buttonHref = "https://calendly.com/hennepinlogic-sales",
  variant = "default",
}: CTAProps) {
  if (variant === "minimal") {
    return (
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">{title}</h2>
          <p className="text-foreground-muted mb-6">{description}</p>
          <Link
            href={buttonHref}
            target={buttonHref.startsWith('http') ? '_blank' : undefined}
            rel={buttonHref.startsWith('http') ? 'noopener noreferrer' : undefined}
            className="btn-primary inline-flex items-center gap-2"
          >
            {buttonText}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-muted/50" />
      <div className="absolute inset-0 bg-radial-center opacity-50" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="card-tech rounded-2xl p-8 lg:p-12 text-center glow-primary">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            {title}
          </h2>
          <p className="text-lg text-foreground-muted mb-8 max-w-2xl mx-auto">
            {description}
          </p>
          <Link
            href={buttonHref}
            target={buttonHref.startsWith('http') ? '_blank' : undefined}
            rel={buttonHref.startsWith('http') ? 'noopener noreferrer' : undefined}
            className="btn-primary inline-flex items-center gap-2"
          >
            <span className="status-online" />
            {buttonText}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <p className="text-sm text-foreground-muted mt-4">
            No sales pitch. Just a demo of the system.
          </p>
        </div>
      </div>
    </section>
  );
}

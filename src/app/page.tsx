import {
  Hero,
  ProblemSection,
  Stats,
  SystemSteps,
  Checklist,
  PilotOffer,
  FAQ,
  Testimonials,
  LocalTrust,
  CTA,
} from "@/components";

export default function Home() {
  return (
    <>
      <Hero
        badge="Twin Cities Metro"
        eyebrow="Lead Response Automation"
        title="Never Miss Another Lead"
        description="Automated text-back in under 60 seconds. Every missed call, every web form—responded to instantly, 24/7."
        primaryCta={{
          text: "Schedule Demo",
          href: "https://calendly.com/hennepinlogic-sales",
        }}
        secondaryCta={{
          text: "See How It Works",
          href: "/how-it-works",
        }}
      />

      <SystemSteps />

      <ProblemSection />

      <Stats />

      <Checklist />

      <PilotOffer />

      <LocalTrust />

      <Testimonials />

      <FAQ />

      <CTA
        title="See the system in action"
        description="10-minute call to walk through how the system works, what integrations are required, and whether it makes sense for your operation."
        buttonText="Schedule Demo"
        buttonHref="https://calendly.com/hennepinlogic-sales"
      />
    </>
  );
}

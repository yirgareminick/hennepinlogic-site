import { Metadata } from "next";
import { ContactForm, CalendlyEmbed } from "@/components";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Nexly. Schedule a demo or send us a message about your lead response needs.",
  openGraph: {
    title: "Contact | Nexly",
    description:
      "Get in touch with Nexly. Schedule a demo or send us a message.",
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-grid-fade opacity-30" />
        <div className="absolute inset-0 bg-radial-top" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-primary font-medium mb-4 terminal-text">// contact</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-foreground-muted">
            Schedule a demo or send us a message. We respond within 24 hours.
          </p>
        </div>
      </section>

      {/* Contact options */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Send a message</h2>
              <div className="card-tech rounded-xl p-6">
                <ContactForm />
              </div>
            </div>

            {/* Calendly */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Schedule a call</h2>
              <CalendlyEmbed />
            </div>
          </div>
        </div>
      </section>

      {/* Direct contact */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
            Direct contact
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="card-tech rounded-xl p-6 text-center">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Email</h3>
              <a
                href="mailto:sales@hennepinlogic.xyz"
                className="text-primary hover:underline text-sm"
              >
                sales@hennepinlogic.xyz
              </a>
            </div>

            <div className="card-tech rounded-xl p-6 text-center">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Phone</h3>
              <a
                href="tel:+16125551234"
                className="text-primary hover:underline text-sm"
              >
                (612) 695-1337
              </a>
            </div>

            <div className="card-tech rounded-xl p-6 text-center">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Location</h3>
              <p className="text-sm text-foreground-muted">
                Twin Cities metro
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

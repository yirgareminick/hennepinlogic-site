"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  title?: string;
  subtitle?: string;
  items?: FAQItem[];
}

const defaultFAQs: FAQItem[] = [
  {
    question: "How does the system connect to my phone line?",
    answer:
      "We integrate with your existing phone system via call forwarding or SIP trunk, depending on your setup. For most providers (Verizon, AT&T, local carriers), this takes about 15 minutes to configure. Your existing phone number stays the same.",
  },
  {
    question: "What happens to leads during business hours?",
    answer:
      "The system is configurable. You can set it to only handle after hours and missed calls, or run 24/7 as a backup to your receptionist. Most clients use it as a safety net. It only fires if no one answers within your specified timeout.",
  },
  {
    question: "Is this compliant with texting regulations?",
    answer:
      "Yes. All messages include opt out instructions per TCPA requirements. We only text leads who have initiated contact with your business (inbound leads). We don't do cold outreach or buy lead lists.",
  },
  {
    question: "What information does the system collect?",
    answer:
      "The conversational flow asks for: type of service needed, property address, urgency level, and preferred callback time. All responses are logged and available in your dashboard. You can customize what questions are asked.",
  },
  {
    question: "How does emergency escalation work?",
    answer:
      "You define what counts as an emergency (keywords like 'flooding,' 'burst pipe,' 'gas smell'). When detected, the system immediately sends an SMS to your designated on call number and can trigger a voice call if no response.",
  },
  {
    question: "What integrations are supported?",
    answer:
      "Phone systems (call forwarding, SIP), web forms (via webhook or direct integration), Google Business Profile messaging API, and Facebook lead ads. If you use a CRM, we can often push data there as well.",
  },
];

export function FAQ({ title, subtitle, items = defaultFAQs }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <p className="text-primary font-medium mb-4 terminal-text">// docs.faq</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            {title || "Common Questions"}
          </h2>
          {subtitle && (
            <p className="text-lg text-foreground-muted">{subtitle}</p>
          )}
        </div>

        {/* FAQ Items */}
        <div className="space-y-3">
          {items.map((faq, index) => (
            <div
              key={index}
              className="card-tech rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left"
              >
                <span className="font-medium text-foreground pr-4">
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 text-primary flex-shrink-0 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <div className="pt-2 border-t border-border">
                    <p className="text-foreground-muted pt-4 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact note */}
        <div className="mt-12 text-center">
          <p className="text-foreground-muted">
            Have a specific question?{" "}
            <a
              href="mailto:sales@hennepinlogic.xyz"
              className="text-primary hover:underline"
            >
              Email us
            </a>{" "}
            or{" "}
            <a
              href="https://calendly.com/hennepinlogic-sales"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              schedule a call
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}

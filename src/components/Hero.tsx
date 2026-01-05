"use client";

import Link from "next/link";
import { PhoneMockup, Message } from "./PhoneMockup";

interface HeroProps {
  badge?: string;
  eyebrow?: string;
  title: string;
  description: string;
  primaryCta?: {
    text: string;
    href: string;
  };
  secondaryCta?: {
    text: string;
    href: string;
  };
  showPhone?: boolean;
  phoneConversation?: Message[];
  phoneBusinessName?: string;
}

export function Hero({
  badge,
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  showPhone = true,
  phoneConversation,
  phoneBusinessName,
}: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-radial-top" />
        
        {/* Grid pattern - very subtle */}
        <div className="absolute inset-0 bg-grid-fade opacity-40" />
        
        {/* Gradient orb behind phone */}
        {showPhone && (
          <div className="absolute top-1/2 right-[15%] -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]" />
        )}
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className={`grid gap-16 items-center ${showPhone ? 'lg:grid-cols-2' : ''}`}>
          {/* Text Content */}
          <div className="max-w-xl">
            {/* Badge */}
            {badge && (
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border border-border text-sm text-foreground-muted mb-8 animate-fade-in-up">
                <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {badge}
              </div>
            )}

            {/* Eyebrow */}
            {eyebrow && (
              <p className="text-primary font-medium text-sm tracking-wide uppercase mb-4 animate-fade-in-up">
                {eyebrow}
              </p>
            )}

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-foreground leading-[1.1] mb-6 animate-fade-in-up animate-delay-100">
              {title}
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl text-foreground-muted leading-relaxed mb-10 animate-fade-in-up animate-delay-200">
              {description}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animate-delay-300">
              {primaryCta && (
                <Link
                  href={primaryCta.href}
                  target={primaryCta.href.startsWith('http') ? '_blank' : undefined}
                  rel={primaryCta.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="btn-primary inline-flex items-center justify-center gap-2 text-base"
                >
                  {primaryCta.text}
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              )}
              {secondaryCta && (
                <Link
                  href={secondaryCta.href}
                  className="btn-secondary inline-flex items-center justify-center gap-2 text-base"
                >
                  {secondaryCta.text}
                </Link>
              )}
            </div>

            {/* Trust indicators */}
            <div className="mt-12 pt-8 border-t border-border/50">
              <div className="flex flex-wrap items-center gap-x-8 gap-y-4 text-sm text-foreground-muted">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  <span>Under 60s response</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-500" />
                  <span>24/7 automated</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-purple-500" />
                  <span>TCPA compliant</span>
                </div>
              </div>
            </div>
          </div>

          {/* Phone Mockup */}
          {showPhone && (
            <div className="hidden lg:flex justify-center items-center">
              <div className="relative">
                {/* Glow effect behind phone */}
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-transparent to-transparent rounded-[3rem] blur-2xl" />
                <PhoneMockup 
                  conversation={phoneConversation} 
                  businessName={phoneBusinessName} 
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

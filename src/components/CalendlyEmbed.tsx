"use client";

import { useEffect } from "react";

interface CalendlyEmbedProps {
  url?: string;
}

export function CalendlyEmbed({
  url = "https://calendly.com/hennepinlogic-sales",
}: CalendlyEmbedProps) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className="calendly-inline-widget w-full rounded-xl overflow-hidden"
      data-url={`${url}?hide_gdpr_banner=1&background_color=0a0f1a&text_color=f1f5f9&primary_color=06b6d4`}
      style={{ minWidth: "320px", height: "700px" }}
    />
  );
}

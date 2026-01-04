import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navigation, Footer } from "@/components";
import Script from "next/script";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://hennepinlogic.xyz'),
  title: {
    default: "Hennepin Logic | Automated Lead Response for Minneapolis Service Companies",
    template: "%s | Hennepin Logic"
  },
  description: "Automated lead response infrastructure for Minneapolis plumbing and restoration companies. Sub-60-second response times on missed calls and web leads.",
  keywords: [
    "lead response automation",
    "Minneapolis plumber",
    "water damage restoration",
    "missed call text back",
    "speed to lead",
    "service business automation",
    "Twin Cities"
  ],
  authors: [{ name: "Hennepin Logic" }],
  creator: "Hennepin Logic",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hennepinlogic.xyz",
    siteName: "Hennepin Logic",
    title: "Hennepin Logic | Automated Lead Response",
    description: "Automated lead response infrastructure for Minneapolis service companies. Sub-60-second response times.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Hennepin Logic - Automated Lead Response",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hennepin Logic | Automated Lead Response",
    description: "Automated lead response infrastructure for Minneapolis service companies.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

// JSON-LD Schema
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Hennepin Logic",
  "description": "Automated lead response infrastructure for Minneapolis plumbing and restoration companies",
  "url": "https://hennepinlogic.xyz",
  "telephone": "(612) 695-1337",
  "email": "sales@hennepinlogic.xyz",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Minneapolis",
    "addressRegion": "MN",
    "addressCountry": "US"
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Minneapolis"
    },
    {
      "@type": "City", 
      "name": "St. Paul"
    },
    {
      "@type": "State",
      "name": "Minnesota"
    }
  ],
  "priceRange": "$950-$2500"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      <link rel="icon" href="/favicon.png" type="image/png" />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased bg-background text-foreground font-sans`}
      >
        <Navigation />
        <main>{children}</main>
        <Footer />
        
        {/* Analytics - Plausible */}
        {process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN && (
          <Script
            defer
            data-domain={process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN}
            src="https://plausible.io/js/script.js"
          />
        )}
        
        {/* Analytics - Google Analytics 4 */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}

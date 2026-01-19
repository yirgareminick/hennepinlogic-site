import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Hennepin Logic | Automated Lead Response for Twin Cities Service Businesses',
  description: 'Automated lead response system delivering rapid response times on missed calls and web leads for Minneapolis/St. Paul service businesses. 60-second response guarantee.',
  keywords: 'Minneapolis lead response, Twin Cities automated reception, service business lead capture, missed call response system, Minnesota service automation',
  authors: [{ name: 'Hennepin Logic' }],
  openGraph: {
    title: 'Hennepin Logic | Automated Lead Response for Twin Cities Service Businesses',
    description: 'Automated lead response system delivering rapid response times on missed calls and web leads for Minneapolis/St. Paul service businesses.',
    url: 'https://hennepinlogic.com',
    siteName: 'Hennepin Logic',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hennepin Logic | Automated Lead Response',
    description: 'Automated lead response system for Twin Cities service businesses.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'Hennepin Logic',
              description: 'Automated lead response infrastructure for service businesses in the Twin Cities metropolitan area',
              url: 'https://hennepinlogic.com',
              email: 'info@hennepinlogic.com',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Minneapolis',
                addressRegion: 'MN',
                addressCountry: 'US',
              },
              areaServed: [
                { '@type': 'City', name: 'Minneapolis' },
                { '@type': 'City', name: 'St. Paul' },
                { '@type': 'City', name: 'Bloomington' },
                { '@type': 'City', name: 'Edina' },
                { '@type': 'City', name: 'Eden Prairie' },
                { '@type': 'City', name: 'Plymouth' },
                { '@type': 'City', name: 'Maple Grove' },
                { '@type': 'City', name: 'Brooklyn Park' },
                { '@type': 'City', name: 'Burnsville' },
                { '@type': 'City', name: 'Eagan' },
              ],
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

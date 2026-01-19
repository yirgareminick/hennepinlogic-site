# Hennepin Logic Website

A modern, high-converting website for Hennepin Logic - an automated lead response infrastructure provider for Twin Cities service businesses.

## Overview

This is a Next.js 14 application built with TypeScript and Tailwind CSS, featuring:

- **Modern Tech Stack**: Next.js 14, React 18, TypeScript, Tailwind CSS
- **SEO Optimized**: Meta tags, OpenGraph, sitemap, robots.txt, schema markup
- **Mobile-First Design**: Fully responsive across all devices
- **Performance**: Optimized for fast load times and smooth user experience
- **Accessibility**: WCAG compliant with semantic HTML and ARIA labels

## Project Structure

```
hennepinlogic-refresh/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with metadata
│   │   ├── page.tsx             # Homepage
│   │   ├── globals.css          # Global styles
│   │   ├── about/               # About page
│   │   ├── contact/             # Contact page with Calendly
│   │   ├── how-it-works/        # How It Works page
│   │   ├── privacy/             # Privacy Policy
│   │   ├── terms/               # Terms of Service
│   │   ├── sitemap.ts           # Dynamic sitemap
│   │   └── robots.ts            # Robots.txt
│   └── components/
│       ├── Header.tsx           # Navigation header
│       ├── Footer.tsx           # Site footer
│       ├── CTAButton.tsx        # Call-to-action button
│       └── ServiceTiers.tsx     # Service tier comparison
├── public/
│   └── schema.json              # JSON-LD schema markup
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.js
```

## Key Features

### Pages

1. **Homepage** (`/`)
   - Hero section with clear value proposition
   - Problem/solution presentation
   - Service tier comparison
   - FAQ section
   - Benefits overview
   - Local focus highlighting
   - Multiple CTAs

2. **How It Works** (`/how-it-works`)
   - Step-by-step system explanation
   - Technical integration details
   - Real-world example scenario
   - Configuration options
   - "What it's not" clarification

3. **About** (`/about`)
   - Company story and philosophy
   - Local market focus
   - Service area coverage
   - Target business types
   - Approach and values

4. **Contact** (`/contact`)
   - Embedded Calendly scheduling
   - Demo information
   - Business hours and service area
   - FAQ about getting started

5. **Privacy Policy** (`/privacy`)
   - Comprehensive data handling information
   - GDPR/compliance details

6. **Terms of Service** (`/terms`)
   - Service agreements and limitations
   - Usage terms and responsibilities

### Components

- **Header**: Responsive navigation with mobile menu
- **Footer**: Links, service area, company info
- **ServiceTiers**: Three-tier comparison table with features
- **CTAButton**: Reusable CTA component with Calendly integration

### SEO Features

- Meta tags optimized for search engines
- OpenGraph tags for social sharing
- Dynamic sitemap generation
- Robots.txt for crawler guidance
- Schema.org LocalBusiness markup
- Semantic HTML structure
- Fast page load times

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Configuration

### Update Contact Information

Update the Calendly URL in the following files:
- `src/components/Header.tsx`
- `src/components/CTAButton.tsx`
- `src/app/contact/page.tsx`

### Update Domain

Update the domain in:
- `src/app/layout.tsx` (metadata)
- `src/app/sitemap.ts`
- `public/schema.json`

### Customize Colors

Colors can be customized in `tailwind.config.ts`:
- Primary colors: Blue scale for main branding
- Accent colors: Purple scale for highlights
- Slate: For text and backgrounds

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Deploy with zero configuration

### Other Platforms

Build the production bundle:
```bash
npm run build
```

Then deploy the `.next` folder and `public` directory.

## Key Technologies

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: React Icons (Feather)
- **Fonts**: Inter (body), Space Grotesk (headings)
- **Scheduling**: Calendly integration

## Design Principles

### Brand Voice
- Confident but not arrogant
- Practical and straightforward
- Technical but accessible
- No hype or marketing fluff

### Visual Style
- Modern but professional
- Clean, technical aesthetic
- Mobile-first responsive design
- Accessible (WCAG compliant)

### Content Strategy
- Direct, clear communication
- Technical details when relevant
- Real-world problem focus
- Concrete examples over abstract benefits
- Numbers and specifics (e.g., "60 seconds" not "fast")

## Browser Support

- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Android)

## Performance Optimization

- Server-side rendering with Next.js
- Optimized images with next/image
- Code splitting and lazy loading
- Minimal JavaScript bundle size
- Fast Time to Interactive (TTI)

## Accessibility

- Semantic HTML elements
- ARIA labels where appropriate
- Keyboard navigation support
- Screen reader friendly
- Color contrast compliance
- Focus indicators

## License

Proprietary - Hennepin Logic

## Contact

For questions about this codebase:
- Email: info@hennepinlogic.com
- Website: https://hennepinlogic.com

---

Built with ❤️ in Minneapolis for Twin Cities service businesses.

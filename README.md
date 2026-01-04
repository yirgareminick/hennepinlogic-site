# Hennepin Logic Website

A modern, high-converting website for Hennepin Logic - an AI automation agency selling a "60-Second Speed-to-Lead System" to Minneapolis area plumbing companies and water damage restoration/mitigation companies.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Visit [http://localhost:3000](http://localhost:3000) to see the site.

## 📁 Project Structure

```
hennepinlogic-site/
├── docs/                    # Research and copy documentation
│   ├── research.md          # Market research brief
│   └── copy.md              # Website copy and strategy
├── public/                  # Static assets
├── src/
│   ├── app/                 # Next.js App Router pages
│   │   ├── about/           # About page
│   │   ├── api/contact/     # Contact form API
│   │   ├── contact/         # Contact page
│   │   ├── how-it-works/    # How it works page
│   │   ├── pilot/           # Pilot program page
│   │   ├── plumbing/        # Plumbing niche landing page
│   │   ├── privacy/         # Privacy policy
│   │   ├── restoration/     # Restoration niche landing page
│   │   ├── terms/           # Terms of service
│   │   ├── globals.css      # Global styles
│   │   ├── layout.tsx       # Root layout with SEO
│   │   ├── page.tsx         # Homepage
│   │   ├── robots.ts        # Robots.txt generation
│   │   └── sitemap.ts       # Sitemap generation
│   └── components/          # Reusable UI components
├── .env.example             # Environment variable template
├── CNAME                    # Custom domain for GitHub Pages
└── package.json
```

## 🔧 Environment Variables

Copy `.env.example` to `.env.local` and configure:

| Variable | Required | Description |
|----------|----------|-------------|
| `CONTACT_EMAIL` | Yes | Email for form submissions |
| `NEXT_PUBLIC_GA_ID` | No | Google Analytics 4 ID |
| `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` | No | Plausible Analytics domain |
| `SLACK_WEBHOOK_URL` | No | Slack webhook for notifications |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | No | Google Search Console |

## 📄 Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage with hero, system overview, pilot offer |
| `/plumbing` | Niche landing page for plumbing companies |
| `/restoration` | Niche landing page for restoration companies |
| `/how-it-works` | Step-by-step system explanation |
| `/pilot` | Pilot program details and pricing |
| `/about` | Company story and local credibility |
| `/contact` | Contact form and Calendly embed |
| `/privacy` | Privacy policy |
| `/terms` | Terms of service |

## 🎨 Design System

- **Font**: Outfit (sans-serif)
- **Colors**: 
  - Primary: `#1e40af` (blue)
  - Accent: `#3b82f6` (bright blue)
  - Foreground: `#0f172a` (dark navy)
  - Background: `#ffffff` (white)
  - Muted: `#f8fafc` (light gray)
- **Tone**: Confident, practical, local, no hype

## 🔍 SEO Features

- ✅ Unique title tags and meta descriptions per page
- ✅ OpenGraph tags for social sharing
- ✅ JSON-LD LocalBusiness schema
- ✅ Dynamic sitemap generation
- ✅ Robots.txt configuration
- ✅ Semantic HTML structure
- ✅ Internal linking
- ✅ Mobile-first responsive design

## 📊 Analytics Integration

The site supports two analytics platforms (configure via env vars):

1. **Google Analytics 4**: Set `NEXT_PUBLIC_GA_ID`
2. **Plausible Analytics**: Set `NEXT_PUBLIC_PLAUSIBLE_DOMAIN`

## 📝 Customization

### Updating Copy
Most copy is defined in page components. For major changes, reference `/docs/copy.md`.

### Adding Testimonials
Testimonials use placeholder data. Update the `testimonials` array in page components when you have real testimonials.

### Changing Calendly Link
Currently hardcoded to `https://calendly.com/hennepinlogic-sales`. To change:
1. Update in `Navigation.tsx`
2. Update in `CalendlyEmbed.tsx`
3. Update in each page's CTA

### Adding Case Studies
The site has placeholder sections for case studies. When ready:
1. Create `/src/app/case-studies/` directory
2. Add individual case study pages
3. Update `Testimonials` component to link to them

## 🚢 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Other Platforms
The site is a standard Next.js app and can be deployed to:
- Netlify
- AWS Amplify
- Railway
- Self-hosted

### GitHub Pages
The `CNAME` file is configured for `hennepinlogic.xyz`. For GitHub Pages deployment, you'll need to use static export:

```js
// next.config.ts
const nextConfig = {
  output: 'export',
};
```

## 📈 Performance Targets

- Lighthouse Performance: 90+
- Lighthouse Accessibility: 95+
- Lighthouse SEO: 100
- First Contentful Paint: <1.5s
- Largest Contentful Paint: <2.5s

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Google Fonts (Outfit, JetBrains Mono)
- **Deployment**: Vercel-ready

## 📞 Contact

- **Email**: sales@hennepinlogic.xyz
- **Website**: https://hennepinlogic.xyz
- **Location**: Minneapolis, MN

---

© 2026 Hennepin Logic. All rights reserved.

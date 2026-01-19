# Quick Start Guide

Get the Hennepin Logic website running in 5 minutes.

## 1. Install Dependencies

```bash
npm install
```

This installs Next.js, React, TypeScript, Tailwind CSS, and all required packages.

## 2. Run Development Server

```bash
npm run dev
```

Open http://localhost:3000 to see the website locally.

## 3. Review the Site

Navigate through all pages:
- Homepage: http://localhost:3000
- How It Works: http://localhost:3000/how-it-works
- About: http://localhost:3000/about
- Contact: http://localhost:3000/contact
- Privacy: http://localhost:3000/privacy
- Terms: http://localhost:3000/terms

## 4. Update Configuration

### Required Changes Before Deployment:

**1. Domain (if different from hennepinlogic.com):**
- `src/app/layout.tsx` - Line 21
- `src/app/sitemap.ts` - Line 5

**2. Calendly URL (if different):**
- `src/components/Header.tsx` - Line 33
- `src/components/CTAButton.tsx` - Line 11
- `src/app/contact/page.tsx` - Line 109

**3. Contact Email (if different from info@hennepinlogic.com):**
- Search for "info@hennepinlogic.com" and replace

## 5. Add Images

Add these files to the `/public` folder:
- `logo.png` - Company logo
- `og-image.png` - Social sharing image (1200x630px recommended)
- `favicon.ico` - Browser favicon

## 6. Build for Production

```bash
npm run build
```

This creates an optimized production build in `.next` folder.

## 7. Deploy

### Option A: Vercel (Easiest)
1. Push code to GitHub
2. Go to vercel.com
3. Import your repository
4. Click Deploy

### Option B: Manual Deployment
```bash
npm run build
npm start
```

Then upload the `.next` folder and `public` directory to your hosting.

## Troubleshooting

**Port already in use?**
```bash
npx kill-port 3000
npm run dev
```

**Dependencies not installing?**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Build errors?**
Check that all required files are present. Re-run:
```bash
npm run build
```

## Need Help?

- Check `README.md` for detailed documentation
- Review `IMPLEMENTATION_SUMMARY.md` for complete feature list
- See `LLM_WEBSITE_PROMPT.md` for original design brief

## Testing Checklist

Before going live:
- [ ] All pages load without errors
- [ ] Calendly integration works on Contact page
- [ ] Mobile responsive on phone/tablet
- [ ] Links in header and footer work
- [ ] CTAs link to correct Calendly URL
- [ ] No console errors in browser
- [ ] Forms are accessible (keyboard navigation)

---

That's it! You're ready to launch. 🚀

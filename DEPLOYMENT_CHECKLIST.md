# Pre-Deployment Checklist

Use this checklist before deploying the Hennepin Logic website to production.

## ✅ Configuration Updates

- [ ] **Domain Updated** in:
  - [ ] `src/app/layout.tsx` (metadata.openGraph.url)
  - [ ] `src/app/sitemap.ts` (baseUrl constant)
  - [ ] `public/schema.json` (url field)

- [ ] **Calendly URL Verified** in:
  - [ ] `src/components/Header.tsx`
  - [ ] `src/components/CTAButton.tsx`
  - [ ] `src/app/contact/page.tsx`

- [ ] **Contact Information Updated**:
  - [ ] Email addresses (currently: info@hennepinlogic.com)
  - [ ] Physical address if needed
  - [ ] Phone number if available

## ✅ Assets

- [ ] **Logo** added to `/public/logo.png`
- [ ] **OG Image** added to `/public/og-image.png` (1200x630px)
- [ ] **Favicon** added to `/public/favicon.ico`
- [ ] Update logo reference in `public/schema.json` if filename different

## ✅ Content Review

- [ ] All page content reviewed for accuracy
- [ ] Service tier descriptions match your offering
- [ ] Pricing information (if shown) is current
- [ ] FAQ answers are accurate
- [ ] Privacy Policy reflects actual practices
- [ ] Terms of Service reviewed by legal (if required)

## ✅ Technical Testing

- [ ] Site builds without errors (`npm run build`)
- [ ] All pages load in development mode
- [ ] Navigation works (header and footer links)
- [ ] Mobile responsive on multiple screen sizes
- [ ] Calendly widget loads on Contact page
- [ ] All CTAs link to correct destinations
- [ ] No console errors in browser developer tools
- [ ] Forms are keyboard accessible
- [ ] Images load properly (once added)

## ✅ SEO Setup

- [ ] Meta descriptions are compelling
- [ ] Page titles are descriptive
- [ ] OG image displays correctly in social previews
- [ ] Sitemap generates properly at `/sitemap.xml`
- [ ] Robots.txt accessible at `/robots.txt`
- [ ] Schema markup valid (test at schema.org validator)

## ✅ Performance

- [ ] Test Core Web Vitals with Lighthouse
- [ ] Check mobile performance score
- [ ] Verify fast page load times
- [ ] Test on slow 3G connection if possible

## ✅ Browser Testing

Test on:
- [ ] Chrome (desktop & mobile)
- [ ] Safari (desktop & mobile)
- [ ] Firefox
- [ ] Edge

## ✅ Deployment Platform Setup

### If using Vercel:
- [ ] GitHub repository created
- [ ] Code pushed to main branch
- [ ] Vercel project imported
- [ ] Custom domain configured
- [ ] Environment variables set (if any)
- [ ] Preview deployments enabled

### If using other hosting:
- [ ] Build command configured: `npm run build`
- [ ] Start command configured: `npm start`
- [ ] Node version specified: 18+
- [ ] Output directory: `.next`

## ✅ Post-Deployment

- [ ] Test live site URL
- [ ] Verify SSL certificate active (HTTPS)
- [ ] Test Calendly scheduling end-to-end
- [ ] Check all pages on live site
- [ ] Test contact form/scheduling
- [ ] Verify analytics tracking (if installed)
- [ ] Submit sitemap to Google Search Console
- [ ] Set up Google My Business listing
- [ ] Test social sharing (Twitter, LinkedIn, Facebook)

## ✅ Optional Enhancements

- [ ] Add Google Analytics
- [ ] Set up Google Tag Manager
- [ ] Configure Google Search Console
- [ ] Set up Hotjar or similar for user recordings
- [ ] Add chat widget (if desired)
- [ ] Set up email notifications for contact form
- [ ] Configure error monitoring (e.g., Sentry)
- [ ] Set up uptime monitoring

## ✅ Marketing Setup

- [ ] Update existing marketing materials with new URL
- [ ] Add website URL to email signatures
- [ ] Update Google My Business with new site
- [ ] Update social media profiles with website link
- [ ] Update business cards/print materials

## ✅ Documentation

- [ ] Team trained on how to access dashboard (once available)
- [ ] Process documented for updating content
- [ ] Emergency contact information shared with team
- [ ] Backup/export procedures understood

---

## Quick Reference

**Development:**
```bash
npm run dev
```

**Build:**
```bash
npm run build
```

**Production:**
```bash
npm start
```

**Lint:**
```bash
npm run lint
```

---

## Need Help?

- Technical issues: Review README.md
- Feature questions: See IMPLEMENTATION_SUMMARY.md
- Quick setup: Check QUICKSTART.md
- Design details: Reference LLM_WEBSITE_PROMPT.md

---

**Ready to deploy?** Check off all items above, then push to production! 🚀

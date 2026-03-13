# 🚀 AI Velocity Template

A premium, high-performance Next.js website template with GSAP animations, dark-mode design system, and full blog/insights infrastructure. Built for speed and visual excellence.

## Quick Start

```bash
# 1. Create a new repo from this template (click "Use this template" on GitHub)
# 2. Clone your new repo
git clone https://github.com/YOUR_USERNAME/YOUR_NEW_REPO.git
cd YOUR_NEW_REPO

# 3. Install dependencies
npm install

# 4. Set up environment variables
cp .env.example .env.local
# Edit .env.local with your real values

# 5. Start development
npm run dev
```

## Customisation Checklist

### 1. Brand Identity
- [ ] **Brand name** — Search & replace `Your Brand` across all files
- [ ] **Logo** — Add your logo to `public/` and update the Navbar brand text in `src/components/sections/Navbar.jsx`
- [ ] **Favicon** — Replace `src/app/favicon.ico`

### 2. Colors
Edit `tailwind.config.js` — all brand colors are in one place:
```js
colors: {
  'electric-mint': '#c0e9cb',  // Your primary accent
  'charcoal': '#1A1A1A',       // Dark background
  'dew-mint': '#dff4e7',       // Soft accent
  'cloud-dancer': '#ffffff',   // Light background
  'steel': '#6B6B6B',          // Muted text
}
```

### 3. Fonts
- Sans font: Inter (via `next/font` in `layout.jsx`)
- Serif font: AgenticTimes (custom, loaded in `globals.css`)
- To change: update `src/app/layout.jsx` font imports and `tailwind.config.js` fontFamily

### 4. Content
- [ ] **Homepage** — `src/app/(home)/page.jsx`
- [ ] **Service pages** — `src/app/agentic-*/page.jsx` (rename routes as needed)
- [ ] **Blog articles** — `src/lib/insightsData.js` (data-driven content)
- [ ] **Privacy page** — `src/app/privacy/page.jsx`
- [ ] **Footer** — `src/components/sections/Footer.jsx`
- [ ] **CTA Banner** — `src/components/sections/CTABanner.jsx`

### 5. SEO & Metadata
- [ ] Update `src/app/(home)/layout.jsx` — JSON-LD schema, Open Graph, meta
- [ ] Update each service page `layout.jsx` — page-specific SEO
- [ ] Update `public/robots.txt` — sitemap URL and LLM crawler rules
- [ ] Update `src/app/sitemap.js` — site URL and page list

### 6. Images
- [ ] Add images to `public/images/` (see `public/images/README.md` for structure)
- [ ] Update image references in page files and `insightsData.js`

### 7. Contact Form
- [ ] Set up email credentials in `.env.local`
- [ ] Get Cloudflare Turnstile keys and add to `.env.local`

### 8. Domain
- [ ] Search & replace `https://example.com` with your actual domain URL

## Architecture

```
src/
├── app/                    # Next.js App Router pages
│   ├── (home)/             # Homepage route group
│   ├── agentic-commerce/   # Example service page
│   ├── agentic-marketing/  # Example service page
│   ├── agentic-payments/   # Example service page
│   ├── agentic-aeo/        # Example service page
│   ├── agentic-strategy/   # Example service page
│   ├── news-insights/      # Blog listing + [slug] pages
│   └── privacy/            # Privacy policy
├── components/
│   ├── sections/           # Page-level sections (Hero, Navbar, Footer, etc.)
│   └── ui/                 # Reusable UI components (modals, buttons, effects)
├── context/                # React contexts (nav visibility)
└── lib/                    # Data & utilities (blog data, category registry)
```

## Key Features Preserved

- ⚡ **GSAP Animations** — Page transitions, scroll-triggered reveals, magnetic buttons
- 🎨 **Design System** — Typography scale, spacing, border radius, interaction patterns
- 📝 **Blog Infrastructure** — Data-driven articles with categories, pagination, related posts
- 🔍 **SEO/AEO** — JSON-LD schemas, Open Graph, sitemaps, robots.txt with LLM crawler rules
- 📱 **Responsive** — Mobile-first with full-screen mobile menu + particle wave effect
- 🛡️ **Contact Form** — Turnstile-protected with server-side email delivery
- 🌊 **Particle Wave** — WebGL background effect in hero and mobile menu

## Design Guidelines

See the `.agents/` directory for comprehensive design rules:
- `.agents/guidelines.md` — Layout, container widths, padding
- `.agents/typography-guide.md` — Type scale, colors, card patterns, spacing
- `.agents/workflows/new-blog-article.md` — Blog creation workflow (image sourcing, content standards, SEO checklist)
- `.cursorrules` — Corner radius, hover effects, hierarchy rules

> ⚠️ **CRITICAL:** The `.agents/` directory contains essential project guidelines. It is protected by a `!.agents/` rule in `.gitignore`. Do not delete these files — they are required for consistent content creation and design quality.

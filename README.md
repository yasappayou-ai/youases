# YouAses

<p align="center">
  <img src="src/assets/youases-logo.png" alt="YouAses Logo" width="120">
</p>

<p align="center">
  <strong>Building the future of digital innovation.</strong>
</p>

<p align="center">
  YouAses is a modern technology company creating intelligent digital solutions, AI, and software for the next generation.
</p>

---

## Features

- **Premium Futuristic Design** — Dark navy palette with glowing blue accents and glassmorphism effects
- **Fully Responsive** — Optimized for all devices (mobile, tablet, desktop)
- **SEO Ready** — Sitemap, robots.txt, Open Graph, JSON-LD structured data
- **Waitlist System** — Supabase database integration for email subscriptions
- **Smooth Animations** — CSS animations with fade-up, pulse-glow, and floating effects
- **Social Integration** — Links to Facebook, Instagram, and email contact

## Tech Stack

- **Framework**: TanStack Start (React + Vite)
- **Styling**: Tailwind CSS v4
- **Backend**: Lovable Cloud (Supabase)
- **Fonts**: Space Grotesk (headings) + Inter (body)
- **Icons**: Lucide React

## Sections

1. **Hero** — Brand logo, headline, and call-to-action
2. **About** — Company overview with core pillars
3. **Vision** — Future vision with orbital animation
4. **Technology** — Innovation pillars with hover effects
5. **Waitlist** — Email subscription form
6. **Contact** — Social media links and contact info
7. **Footer** — Branding and copyright

## Getting Started

```bash
# Install dependencies
bun install

# Start development server
bun run dev

# Build for production
bun run build
```

## Database

The project uses Supabase with a `waitlist_subscribers` table:

| Column    | Type      | Description          |
|-----------|-----------|----------------------|
| id        | uuid      | Primary key          |
| email     | text      | Subscriber email     |
| source    | text      | Source identifier    |
| created_at| timestamp | Subscription date    |

## SEO

- `robots.txt` — Allows all crawlers
- `sitemap.xml` — Dynamic sitemap generation
- Meta tags — Open Graph, Twitter Cards
- JSON-LD — Organization schema

## Social Links

- Facebook: [YouAses Official](https://www.facebook.com/profile.php?id=61590554395056)
- Instagram: [@youases.official](https://www.instagram.com/youases.official)
- Email: [youases.official@gmail.com](mailto:youases.official@gmail.com)

---

<p align="center">
  © 2026 YouAses. All rights reserved.
</p>

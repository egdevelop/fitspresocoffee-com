# Riven Blog

A modern, SEO-optimized static blog website built with Astro.js and Tailwind CSS, designed for perfect Web Core Vitals scores and CMS-ready architecture.

## Project Overview

This is a professional blog platform featuring:
- Static site generation with Astro.js
- Markdown-based content management
- SEO optimization with meta tags, Open Graph, and JSON-LD structured data
- Perfect Web Core Vitals optimization
- Responsive design with Tailwind CSS
- Search functionality using Fuse.js
- Category filtering and RSS feed support

## Project Structure

```
├── public/                 # Static assets (favicon, og-image)
├── src/
│   ├── components/        # Reusable Astro components
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── BlogCard.astro
│   │   ├── FeaturedPost.astro
│   │   ├── SearchBar.astro
│   │   ├── CategoryFilter.astro
│   │   ├── AuthorCard.astro
│   │   ├── ShareButtons.astro
│   │   └── RelatedPosts.astro
│   ├── content/
│   │   └── blog/          # Markdown blog posts
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   └── BlogPostLayout.astro
│   ├── pages/
│   │   ├── index.astro    # Homepage
│   │   ├── blog/          # Blog listing and post pages
│   │   ├── about.astro
│   │   ├── contact.astro
│   │   ├── terms.astro    # Terms of Service
│   │   ├── privacy.astro  # Privacy Policy
│   │   ├── disclaimer.astro # Disclaimer
│   │   └── rss.xml.js     # RSS feed
│   └── styles/
│       └── global.css     # Global styles with Tailwind
├── content.config.ts      # Content collection schema
└── astro.config.mjs       # Astro configuration
```

## Blog Post Schema

Blog posts use frontmatter with the following fields:
- `title`: Post title
- `description`: Short description for SEO
- `pubDate`: Publication date
- `author`: Object with `name` and optional `avatar`
- `category`: Any string (e.g., "Promo", "Travel", "Technology", etc.) - colors are auto-generated
- `tags`: Array of tag strings
- `featuredImage`: URL to the featured image
- `featured`: Boolean for homepage featuring
- `draft`: Boolean for draft status

## Commands

- `npm run dev` - Start development server on port 5000
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Tech Stack

- **Framework**: Astro.js 5.x
- **Styling**: Tailwind CSS 4.x
- **Search**: Fuse.js
- **Image Optimization**: Sharp
- **SEO**: @astrojs/sitemap, @astrojs/rss

## Adding New Blog Posts

Create a new `.md` file in `src/content/blog/` with frontmatter:

```markdown
---
title: "Your Post Title"
description: "A brief description"
pubDate: 2024-01-01
author:
  name: "Author Name"
  avatar: "https://example.com/avatar.jpg"
category: technology
tags: ["tag1", "tag2"]
featuredImage: "https://example.com/image.jpg"
featured: false
draft: false
---

Your content here...
```

## CMS Integration

This project is structured for easy CMS integration. To connect a headless CMS:
1. Replace the file-based content loader in `content.config.ts`
2. Configure your CMS SDK/API
3. Update data fetching in page components

Supported CMS options: Contentful, Sanity, Strapi, Prismic

## GitHub Repository

Repository: https://github.com/egdevelop/riven-blog

## Google AdSense Integration

The site includes placeholder ad slots ready for Google AdSense:
- Located in `src/components/AdPlacement.astro`
- 4 layout types: horizontal, vertical, square, in-article
- Placements on homepage, blog listing, and blog post pages
- Replace placeholder content with actual AdSense code when ready

## Centralized Configuration & Theming

The site uses a centralized configuration system in `src/config/siteSettings.ts` that controls ALL styling and settings.

### Theme System

All colors, typography, and design tokens are configured in one place. The `ThemeStyles.astro` component generates CSS variables from the config, making the entire site themeable.

#### Changing Colors

Edit the `designTokens.colors` section in `src/config/siteSettings.ts`:

```typescript
colors: {
  primary: '#E11D48',      // Main brand color (buttons, links, logo)
  primaryHover: '#BE123C', // Hover state for primary
  primaryLight: '#FFF1F2', // Light variant for backgrounds
  secondary: '#1F2937',    // Dark color (footer background)
  accent: '#F43F5E',       // Accent color for gradients
  background: '#F9FAFB',   // Page background
  surface: '#FFFFFF',      // Card/section backgrounds
  text: {
    primary: '#111827',    // Main text color
    secondary: '#4B5563',  // Secondary text
    muted: '#9CA3AF',      // Muted text
    inverse: '#FFFFFF',    // Text on dark backgrounds
  },
  border: '#E5E7EB',       // Border colors
  // ... success, warning, error colors
}
```

After saving `siteSettings.ts`, the entire site will update with the new colors automatically.

### Configuration Sections
- **designTokens**: Colors, typography, spacing, border radius, shadows
- **siteSettings**: Site name, logo (image or text), SEO defaults, social links, contact info, feature flags
- **contentDefaults**: Navigation (header/footer), homepage content, blog settings, categories

### Logo Configuration

The logo system supports both image and text modes. Edit `siteSettings.logo`:

```typescript
logo: {
  type: 'image',           // 'image' or 'text'
  text: 'Riven',           // Site name text (shown if showText is true)
  image: '/logo.png',      // Path to logo image (used when type is 'image')
  favicon: '/logo.png',    // Path to favicon (can be same as logo or different)
  showText: true,          // Show text next to logo image
  width: 32,               // Logo width in pixels
  height: 32,              // Logo height in pixels
}
```

**To change the logo:**
1. Replace `/public/logo.png` with your own logo image
2. Update `logo.image` and `logo.favicon` paths if using different filenames
3. Adjust `width` and `height` as needed
4. Set `showText: false` to hide the text and show only the image

### SEO Configuration

All SEO settings are in `siteSettings.seo`:

```typescript
seo: {
  defaultTitle: 'Riven Blog',              // Default page title
  titleTemplate: '%s | Riven',             // Title template (%s = page title)
  defaultDescription: 'Your site description...',
  defaultImage: '/og-image.svg',           // Default OG image
  keywords: ['blog', 'technology'],        // Default keywords
  language: 'en',                          // HTML lang attribute
  locale: 'en_US',                         // OG locale
  themeColor: '#E11D48',                   // Browser theme color
  robots: 'index, follow',                 // Robots meta
  twitterHandle: '@yourhandle',            // Twitter @handle
  twitterCardType: 'summary_large_image',  // Twitter card type
  facebookAppId: '',                       // Facebook App ID (optional)
  googleSiteVerification: '',              // Google Search Console
  bingSiteVerification: '',                // Bing Webmaster
  googleAnalyticsId: '',                   // GA4 Measurement ID
  author: 'Author Name',                   // Default author
  publisher: 'Publisher Name',             // Publisher/organization
  copyrightYear: '2024',                   // Copyright year
}
```

The BaseLayout automatically generates:
- Primary meta tags (title, description, author, robots, keywords)
- Open Graph tags for Facebook/social sharing
- Twitter Card tags
- JSON-LD structured data (WebSite/BlogPosting schema)
- Google Analytics (if ID provided)
- Site verification codes

### Helper Functions
```typescript
import { getSiteSettings, getNavigation, getSocialLinks, getCategories, getDesignTokens } from '../config/siteSettings';
```

### Feature Flags
- `enableSearch`: Toggle search functionality
- `enableCategories`: Toggle category filtering
- `enableNewsletter`: Toggle newsletter section
- `enableComments`: Toggle comments (future)
- `enableRss`: Toggle RSS feed

## Recent Changes

- **November 30, 2024**: Logo & favicon now support images - updated siteSettings.logo config to support both image and text modes. Header and BaseLayout now use image logo from config.
- **November 30, 2024**: Enhanced SEO configuration - added comprehensive SEO settings (keywords, robots, locale, verification codes, Google Analytics, etc). BaseLayout now fully uses config for all meta tags.
- **November 30, 2024**: Category badge colors now auto-generated from category name (no manual config needed)
- **November 29, 2024**: Implemented full theme system - all styling now configurable from siteSettings.ts. Created ThemeStyles component, updated all components to use CSS variables.
- **November 29, 2024**: Created centralized configuration system (siteSettings.ts), updated Header/Footer/homepage to use config
- **November 28, 2024**: Created GitHub repository, added AdSense placeholder component with strategic ad placements
- **November 28, 2024**: Added legal pages (Terms of Service, Privacy Policy, Disclaimer), removed Download Our App button from header, improved image performance with explicit dimensions

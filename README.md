# 🌿 Greenaria BuildTech — Next.js Website

## 🚀 Quick Start

```bash
npm install
npm run dev
# → http://localhost:3000
```

## 📁 Project Structure
greenaria-buildtech/
│
├── package.json
├── next.config.js
├── jsconfig.json
├── tailwind.config.js
├── postcss.config.js
├── .env.local
├── README.md
│
├── public/
│   ├── favicon.ico
│   │
│   ├── images/
│   │   ├── hero/
│   │   │   ├── hero-bg.jpg              ← add your image
│   │   │   ├── hero-banner.jpg          ← add your image
│   │   │   └── hero-overlay.png         ← add your image
│   │   │
│   │   ├── projects/
│   │   │   ├── oasis-grandstand.jpg     ← add your image
│   │   │   ├── eldeco.jpg               ← add your image
│   │   │   ├── eldeco-7-peaks.jpg       ← add your image
│   │   │   ├── godrej-tropical-isle.jpg ← add your image
│   │   │   ├── ats-pristine.jpg         ← add your image
│   │   │   ├── tata-eureka-park.jpg     ← add your image
│   │   │   ├── express-zenith.jpg       ← add your image
│   │   │   └── sample-project.jpg       ← add your image
│   │   │
│   │   ├── properties/
│   │   │   ├── property-1.jpg           ← add your image
│   │   │   ├── property-2.jpg           ← add your image
│   │   │   ├── property-3.jpg           ← add your image
│   │   │   ├── property-4.jpg           ← add your image
│   │   │   ├── property-5.jpg           ← add your image
│   │   │   └── property-placeholder.jpg ← add your image
│   │   │
│   │   ├── developers/
│   │   │   ├── godrej.jpg               ← add your image
│   │   │   ├── tata.jpg                 ← add your image
│   │   │   ├── ats.jpg                  ← add your image
│   │   │   ├── eldeco.jpg               ← add your image
│   │   │   └── sample-developer.jpg     ← add your image
│   │   │
│   │   ├── locations/
│   │   │   ├── noida.jpg                ← add your image
│   │   │   ├── greater-noida.jpg        ← add your image
│   │   │   ├── yamuna-expressway.jpg    ← add your image
│   │   │   ├── delhi.jpg                ← add your image
│   │   │   └── gurgaon.jpg             ← add your image
│   │   │
│   │   ├── blog/
│   │   │   ├── blog-1.jpg               ← add your image
│   │   │   ├── blog-2.jpg               ← add your image
│   │   │   ├── blog-3.jpg               ← add your image
│   │   │   └── blog-placeholder.jpg     ← add your image
│   │   │
│   │   ├── team/
│   │   │   ├── agent-1.jpg              ← add your image
│   │   │   ├── agent-2.jpg              ← add your image
│   │   │   ├── agent-3.jpg              ← add your image
│   │   │   └── team-placeholder.jpg     ← add your image
│   │   │
│   │   └── icons/
│   │       ├── search.svg               ← add your icon
│   │       ├── location.svg             ← add your icon
│   │       ├── phone.svg                ← add your icon
│   │       ├── whatsapp.svg             ← add your icon
│   │       ├── email.svg                ← add your icon
│   │       ├── arrow-right.svg          ← add your icon
│   │       └── menu.svg                 ← add your icon
│   │
│   ├── videos/
│   │   └── property-tours/
│   │       ├── oasis-grandstand-tour.mp4 ← add your video
│   │       ├── eldeco-tour.mp4           ← add your video
│   │       └── sample-tour.mp4           ← add your video
│   │
│   └── logos/
│       ├── company/
│       │   ├── logo.png                  ← add your logo
│       │   ├── logo-white.png            ← add your logo
│       │   └── logo-icon.png             ← add your logo
│       │
│       └── partners/
│           ├── godrej.png                ← add partner logo
│           ├── tata.png                  ← add partner logo
│           ├── ats.png                   ← add partner logo
│           ├── mahagun.png               ← add partner logo
│           └── eldco.png                 ← add partner logo
│
│
├── src/
│   │
│   ├── app/                              ✅ Next.js 14 App Router
│   │   ├── layout.jsx                    ✅ Root layout + metadata + fonts
│   │   ├── page.jsx                      ✅ Homepage (all sections)
│   │   ├── loading.jsx                   ✅ Loading spinner
│   │   ├── error.jsx                     ✅ Error boundary
│   │   │
│   │   ├── about/
│   │   │   └── page.jsx                  ✅ About page + stats + mission/vision
│   │   │
│   │   ├── projects/
│   │   │   ├── page.jsx                  ✅ All projects
│   │   │   ├── latest/page.jsx           ✅ Latest projects
│   │   │   ├── upcoming/page.jsx         ✅ Upcoming projects
│   │   │   └── exclusive/page.jsx        ✅ Exclusive projects
│   │   │
│   │   ├── properties/
│   │   │   ├── page.jsx                  ✅ Properties listing + filters
│   │   │   ├── [slug]/page.jsx           ✅ Property detail page
│   │   │   └── category/[type]/page.jsx  ✅ Category filter page
│   │   │
│   │   ├── compare/
│   │   │   └── page.jsx                  ✅ Property comparison table
│   │   │
│   │   ├── admin/
│   │   │   └── page.jsx                  ✅ Admin add property form
│   │   │
│   │   ├── locations/
│   │   │   └── [city]/page.jsx           ✅ Dynamic city page (Gurgaon/Noida/Dubai etc.)
│   │   │
│   │   ├── lease/
│   │   │   └── page.jsx                  ✅ Lease page
│   │   │
│   │   ├── sell-property/
│   │   │   └── page.jsx                  ✅ Sell property form page
│   │   │
│   │   ├── services/
│   │   │   └── page.jsx                  ✅ Services page (6 services)
│   │   │
│   │   ├── blog/
│   │   │   ├── page.jsx                  ✅ Blog listing
│   │   │   └── [slug]/page.jsx           ✅ Blog article + related posts
│   │   │
│   │   ├── media/
│   │   │   └── page.jsx                  ✅ Media gallery page
│   │   │
│   │   ├── videos/
│   │   │   └── page.jsx                  ✅ Videos page
│   │   │
│   │   ├── contact/
│   │   │   └── page.jsx                  ✅ Contact page + form + map
│   │   │
│   │   └── api/
│   │       ├── properties/route.js        ✅ GET /api/properties
│   │       ├── blog/route.js              ✅ GET /api/blog
│   │       ├── contact/route.js           ✅ POST /api/contact
│   │       └── admin/
│   │           └── add-property/route.js  ✅ POST /api/admin/add-property
│   │
│   │
│   ├── components/
│   │   │
│   │   ├── layout/
│   │   │   ├── Header.jsx                 ✅ Header wrapper
│   │   │   ├── Navbar.jsx                 ✅ Sticky navbar + dropdowns + scroll progress
│   │   │   ├── Footer.jsx                 ✅ 4-column dark footer + popular posts + socials
│   │   │   └── MobileMenu.jsx             ✅ Drawer menu + accordion dropdowns
│   │   │
│   │   ├── home/
│   │   │   ├── Hero.jsx                   ✅ Full-screen slider + particles + 2 CTAs
│   │   │   ├── SearchBar.jsx              ✅ 4-filter search (Location/Type/Budget/BHK)
│   │   │   ├── FeaturedProjects.jsx       ✅ 6 property cards + load more
│   │   │   ├── LatestProjects.jsx         ✅ Latest projects list
│   │   │   ├── PropertyTypes.jsx          ✅ 6 property type icons grid
│   │   │   ├── Locations.jsx              ✅ 5 location cards (aspect-ratio grid)
│   │   │   ├── Partners.jsx               ✅ Infinite marquee carousel
│   │   │   ├── Testimonials.jsx           ✅ Auto-sliding speech-bubble testimonials + skyline
│   │   │   ├── Services.jsx               ✅ 3 service cards with icon hover
│   │   │   ├── SmartTools.jsx             ✅ 4 tool cards (green gradient + white)
│   │   │   ├── About.jsx                  ✅ About section with 3 paragraphs
│   │   │   ├── Stats.jsx                  ✅ CountUp stats on dark navy background
│   │   │   ├── BlogSection.jsx            ✅ 3 blog cards + Read More
│   │   │   ├── Contact.jsx                ✅ Contact meta + form card
│   │   │   └── ContactSection.jsx         ✅ Alias for Contact.jsx
│   │   │
│   │   ├── property/
│   │   │   ├── PropertyCard.jsx           ✅ Card + image zoom + badges + hover
│   │   │   ├── PropertyGrid.jsx           ✅ Grid + skeleton loading + empty state
│   │   │   ├── PropertyGallery.jsx        ✅ Gallery + lightbox + thumbnail strip
│   │   │   ├── PropertyDetails.jsx        ✅ Full detail section
│   │   │   ├── Amenities.jsx              ✅ Amenity chips grid
│   │   │   ├── PropertySidebar.jsx        ✅ Price card + inquiry form + RERA badge
│   │   │   ├── PropertyMap.jsx            ✅ Google Maps embed
│   │   │   └── LightboxGallery.jsx        ✅ Alias for PropertyGallery
│   │   │
│   │   ├── filters/
│   │   │   ├── SearchFilters.jsx          ✅ Combined filter bar component
│   │   │   ├── LocationFilter.jsx         ← extend from SearchFilters
│   │   │   ├── PriceFilter.jsx            ← extend from SearchFilters
│   │   │   └── PropertyTypeFilter.jsx     ← extend from SearchFilters
│   │   │
│   │   ├── forms/
│   │   │   ├── ContactForm.jsx            ✅ Form + loading + success animation
│   │   │   ├── PropertyInquiryForm.jsx    ✅ Property-specific inquiry form
│   │   │   └── SellPropertyForm.jsx       ✅ Full sell property form
│   │   │
│   │   ├── blog/
│   │   │   ├── BlogCard.jsx               ✅ Card + hover + category badge
│   │   │   ├── BlogGrid.jsx               ✅ Responsive grid with animations
│   │   │   └── BlogContent.jsx            ✅ Article content renderer
│   │   │
│   │   ├── media/
│   │   │   ├── VideoCard.jsx              ✅ Video card + inline player
│   │   │   └── Gallery.jsx                ✅ Image gallery + lightbox
│   │   │
│   │   └── ui/
│   │       ├── Button.jsx                 ✅ Reusable button (primary/outline/ghost)
│   │       ├── Badge.jsx                  ✅ Status badge component
│   │       ├── Loader.jsx                 ✅ Spinner (sm/md/lg)
│   │       ├── Modal.jsx                  ✅ Overlay modal
│   │       ├── SectionTitle.jsx           ✅ Section title + gold divider
│   │       ├── WhatsAppButton.jsx         ← alias for FloatingWhatsApp
│   │       └── FloatingWhatsApp.jsx       ✅ WhatsApp ping + phone button
│   │
│   │
│   ├── data/
│   │   ├── properties.json               ✅ 6 sample properties (RERA, images, amenities)
│   │   ├── projects.json                 ✅ 4 projects (latest/upcoming/exclusive)
│   │   ├── developers.json               ✅ 4 developers
│   │   ├── locations.json                ✅ 5 cities (Gurgaon/Noida/Delhi/Dubai)
│   │   ├── blog.json                     ✅ 3 blog posts
│   │   ├── testimonials.json             ✅ 4 testimonials
│   │   └── partners.json                 ✅ 8 builder partners
│   │
│   │
│   ├── styles/
│   │   ├── globals.css                   ✅ Full CSS (animations, badges, forms, navbar, cards)
│   │   ├── utilities.css                 ← included in globals.css
│   │   ├── layout/                       ← included in globals.css
│   │   ├── home/                         ← included in globals.css
│   │   ├── property/                     ← included in globals.css
│   │   ├── filters/                      ← included in globals.css
│   │   ├── forms/                        ← included in globals.css
│   │   ├── blog/                         ← included in globals.css
│   │   └── pages/                        ← included in globals.css
│   │
│   │
│   ├── hooks/
│   │   ├── useProperties.js              ✅ Filter/fetch properties hook
│   │   ├── useFilters.js                 ✅ Filter state management hook
│   │   └── useSearch.js                  ✅ Live search with debounce
│   │
│   ├── context/
│   │   ├── PropertyContext.jsx           ✅ Global property state
│   │   ├── FilterContext.jsx             ✅ Global filter state
│   │   └── CompareContext.jsx            ✅ Compare list (max 3 properties)
│   │
│   ├── lib/
│   │   ├── fetchProperties.js            ✅ Server-side property fetchers
│   │   ├── fetchBlog.js                  ✅ Server-side blog fetchers
│   │   └── helpers.js                    ✅ formatPrice, truncate, slugify, getBadgeStyle
│   │
│   └── utils/
│       ├── formatPrice.js                ✅ ₹ Cr / Lac formatter
│       ├── slugify.js                    ✅ URL slug generator
│       └── seo.js                        ✅ OpenGraph + Twitter metadata generator
│
│
└── scripts/
    └── data-migration.js                 ✅ Property data migration helper

## ✨ Features

| Feature | Details |
|---------|---------|
| **Hero Section** | Auto-sliding with crossfade + scale, arrows, dots, animated particles |
| **Property Search** | 4-filter bar with Location/Type/Budget/BHK, URL params support |
| **Property Cards** | Hover lift + image zoom + status badges |
| **Services** | Icon hover flip + green glow on hover |
| **Smart Tools** | Gradient cards with shimmer animation |
| **Partners** | Infinite marquee with fade edges |
| **Stats Counter** | CountUp animation triggered on scroll |
| **Testimonials** | Auto-sliding pairs with Framer Motion |
| **Blog Cards** | Hover zoom + category badges |
| **Contact Form** | Loading state + success animation |
| **WhatsApp Button** | Animated ping ring |
| **Scroll Progress** | Green-gold gradient top bar |
| **Mobile Menu** | Drawer with accordion dropdowns |
| **Compare Page** | Side-by-side property comparison |
| **All Page Routes** | About, Properties, Blog, Contact, Services, Locations |

## 🎨 Brand Colors

```
--green-primary: #2e7d32   (Greenaria Green)
--gold:          #b8914a   (Premium Gold)
--navy:          #0d2137   (Deep Navy)
```

## 📦 Key Dependencies

- **next** 14.2.3 — App Router
- **framer-motion** — Animations
- **react-countup** — Stats counter
- **react-intersection-observer** — Scroll triggers
- **tailwindcss** — Utility CSS

## 🖼️ Images

Replace placeholder images in `/public/images/` with actual property images.
Logo goes in `/public/logos/company/logo.png`.

## 🔧 Customization

1. **Phone/email** — Search `7400230074` & `greenariabuildtech.com`, replace globally
2. **Properties** — Edit `src/data/properties.json`
3. **Blog posts** — Edit `src/data/blog.json`
4. **Partners** — Edit `src/data/partners.json`
5. **Logo** — Replace inline SVG in `Navbar.jsx` with `<Image>` tag

## 🏗️ Production Build

```bash
npm run build
npm start
```

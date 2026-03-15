greenaria-buildtech/
│
├── package.json
├── next.config.js
├── jsconfig.json
├── .env.local
├── README.md
│
├── public/
│
│   ├── favicon.ico
│
│   ├── images/
│   │
│   │   ├── hero/
│   │   │   ├── hero-bg.jpg
│   │   │   ├── hero-banner.jpg
│   │   │   └── hero-overlay.png
│   │
│   │   ├── projects/
│   │   │   ├── oasis-grandstand.jpg
│   │   │   ├── eldeco.jpg
│   │   │   ├── eldeco-7-peaks.jpg
│   │   │   ├── godrej-tropical-isle.jpg
│   │   │   ├── ats-pristine.jpg
│   │   │   ├── tata-eureka-park.jpg
│   │   │   ├── express-zenith.jpg
│   │   │   └── sample-project.jpg
│   │
│   │   ├── properties/
│   │   │   ├── property-1.jpg
│   │   │   ├── property-2.jpg
│   │   │   ├── property-3.jpg
│   │   │   ├── property-4.jpg
│   │   │   ├── property-5.jpg
│   │   │   └── property-placeholder.jpg
│   │
│   │   ├── developers/
│   │   │   ├── godrej.jpg
│   │   │   ├── tata.jpg
│   │   │   ├── ats.jpg
│   │   │   ├── eldeco.jpg
│   │   │   └── sample-developer.jpg
│   │
│   │   ├── locations/
│   │   │   ├── noida.jpg
│   │   │   ├── greater-noida.jpg
│   │   │   ├── yamuna-expressway.jpg
│   │   │   ├── delhi.jpg
│   │   │   └── gurgaon.jpg
│   │
│   │   ├── blog/
│   │   │   ├── blog-1.jpg
│   │   │   ├── blog-2.jpg
│   │   │   ├── blog-3.jpg
│   │   │   └── blog-placeholder.jpg
│   │
│   │   ├── team/
│   │   │   ├── agent-1.jpg
│   │   │   ├── agent-2.jpg
│   │   │   ├── agent-3.jpg
│   │   │   └── team-placeholder.jpg
│   │
│   │   └── icons/
│   │       ├── search.svg
│   │       ├── location.svg
│   │       ├── phone.svg
│   │       ├── whatsapp.svg
│   │       ├── email.svg
│   │       ├── arrow-right.svg
│   │       └── menu.svg
│
│
│   ├── videos/
│   │   └── property-tours/
│   │       ├── oasis-grandstand-tour.mp4
│   │       ├── eldeco-tour.mp4
│   │       └── sample-tour.mp4
│
│
│   └── logos/
│       ├── company/
│       │   ├── logo.png
│       │   ├── logo-white.png
│       │   └── logo-icon.png
│       │
│       └── partners/
│           ├── godrej.png
│           ├── tata.png
│           ├── ats.png
│           ├── mahagun.png
│           └── eldco.png
│
│
├── src/
│
│   ├── app/
│   │   ├── layout.jsx
│   │   ├── page.jsx
│   │   ├── loading.jsx
│   │   ├── error.jsx
│   │
│   │   ├── about/
│   │   │   └── page.jsx
│   │
│   │   ├── projects/
│   │   │   ├── page.jsx
│   │   │   ├── latest/page.jsx
│   │   │   ├── upcoming/page.jsx
│   │   │   └── exclusive/page.jsx
│   │
│   │   ├── properties/
│   │   │   ├── page.jsx
│   │   │   ├── [slug]/page.jsx
│   │   │   └── category/[type]/page.jsx
│   │
│   │   ├── compare/page.jsx
│   │   ├── admin/page.jsx
│   │
│   │   ├── locations/[city]/page.jsx
│   │
│   │   ├── lease/page.jsx
│   │   ├── sell-property/page.jsx
│   │   ├── services/page.jsx
│   │
│   │   ├── blog/
│   │   │   ├── page.jsx
│   │   │   └── [slug]/page.jsx
│   │
│   │   ├── media/page.jsx
│   │   ├── videos/page.jsx
│   │   ├── contact/page.jsx
│   │
│   │   └── api/
│   │       ├── properties/route.js
│   │       ├── blog/route.js
│   │       ├── contact/route.js
│   │       └── admin/add-property/route.js
│
│
│   ├── components/
│   │
│   │   ├── layout/
│   │   │   ├── Header.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── MobileMenu.jsx
│   │
│   │   ├── home/
│   │   │   ├── Hero.jsx
│   │   │   ├── SearchBar.jsx
│   │   │   ├── FeaturedProjects.jsx
│   │   │   ├── LatestProjects.jsx
│   │   │   ├── PropertyTypes.jsx
│   │   │   ├── Locations.jsx
│   │   │   ├── Partners.jsx
│   │   │   └── Testimonials.jsx
│   │
│   │   ├── property/
│   │   │   ├── PropertyCard.jsx
│   │   │   ├── PropertyGrid.jsx
│   │   │   ├── PropertyGallery.jsx
│   │   │   ├── PropertyDetails.jsx
│   │   │   ├── Amenities.jsx
│   │   │   ├── PropertySidebar.jsx
│   │   │   ├── PropertyMap.jsx
│   │   │   └── LightboxGallery.jsx
│   │
│   │   ├── filters/
│   │   │   ├── SearchFilters.jsx
│   │   │   ├── LocationFilter.jsx
│   │   │   ├── PriceFilter.jsx
│   │   │   └── PropertyTypeFilter.jsx
│   │
│   │   ├── forms/
│   │   │   ├── ContactForm.jsx
│   │   │   ├── PropertyInquiryForm.jsx
│   │   │   └── SellPropertyForm.jsx
│   │
│   │   ├── blog/
│   │   │   ├── BlogCard.jsx
│   │   │   ├── BlogGrid.jsx
│   │   │   └── BlogContent.jsx
│   │
│   │   ├── media/
│   │   │   ├── VideoCard.jsx
│   │   │   └── Gallery.jsx
│   │
│   │   └── ui/
│   │       ├── Button.jsx
│   │       ├── Badge.jsx
│   │       ├── Loader.jsx
│   │       ├── Modal.jsx
│   │       ├── SectionTitle.jsx
│   │       ├── WhatsAppButton.jsx
│   │       └── FloatingWhatsApp.jsx
│
│
│   ├── data/
│   │   ├── properties.json
│   │   ├── projects.json
│   │   ├── developers.json
│   │   ├── locations.json
│   │   ├── blog.json
│   │   ├── testimonials.json
│   │   └── partners.json
│
│
│   ├── styles/
│   │   ├── globals.css
│   │   ├── layout/
│   │   ├── home/
│   │   ├── property/
│   │   ├── filters/
│   │   ├── forms/
│   │   ├── blog/
│   │   ├── pages/
│   │   └── utilities.css
│
│
│   ├── hooks/
│   │   ├── useProperties.js
│   │   ├── useFilters.js
│   │   └── useSearch.js
│
│   ├── context/
│   │   ├── PropertyContext.jsx
│   │   ├── FilterContext.jsx
│   │   └── CompareContext.jsx
│
│   ├── lib/
│   │   ├── fetchProperties.js
│   │   ├── fetchBlog.js
│   │   └── helpers.js
│
│   └── utils/
│       ├── formatPrice.js
│       ├── slugify.js
│       └── seo.js
│
│
└── scripts/
    └── data-migration.js
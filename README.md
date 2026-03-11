<!-- GreenariaBuildtech -->

├── public/
│
│   ├── images/
│   ├── logos/
│   ├── icons/
│   ├── builders/
│   └── property-placeholder.webp
│
│
├── src/
│
│   ├─ styles/
│   │   ├─ main.css
│   │   ├─ property-widgets.css
│   │   ├─ elementor-layout.css
│   │   ├─ animations.css
│   │   └─ responsive.css
│   │   └─ style.css
│   │
│   ├── app/
│   │
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │
│   │   ├── about/
│   │   │   └── page.tsx
│   │
│   │   ├── properties/
│   │   │
│   │   │   ├── page.tsx
│   │   │   ├── loading.tsx
│   │   │
│   │   │   ├── [slug]/
│   │   │   │   └── page.tsx
│   │   │
│   │   │   ├── residential/
│   │   │   │   └── page.tsx
│   │   │
│   │   │   ├── commercial/
│   │   │   │   └── page.tsx
│   │   │
│   │   │   └── plots/
│   │   │       └── page.tsx
│   │
│   │   ├── services/
│   │   │   └── page.tsx
│   │
│   │   ├── blog/
│   │   │
│   │   │   ├── page.tsx
│   │   │   └── [slug]/
│   │   │       └── page.tsx
│   │
│   │   ├── contact/
│   │   │   └── page.tsx
│   │
│   │   ├── dashboard/
│   │   │
│   │   │   ├── page.tsx
│   │   │   ├── properties/
│   │   │   ├── leads/
│   │   │   └── analytics/
│   │
│   │   └── api/
│   │
│   │       ├── properties/
│   │       ├── leads/
│   │       ├── auth/
│   │       └── blogs/
│
│
│   ├── components/
│   │
│   │   ├── ui/
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── modal.tsx
│   │   │   └── input.tsx
│   │
│   │   ├── layout/
│   │   │
│   │   │   ├── Navbar.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── Container.tsx
│   │
│   │   ├── property/
│   │   │
│   │   │   ├── PropertyCard.tsx
│   │   │   ├── PropertyGallery.tsx
│   │   │   ├── PropertyDetails.tsx
│   │   │   ├── PropertyAmenities.tsx
│   │   │   ├── PropertyLocation.tsx
│   │   │   └── PropertyFloorPlan.tsx
│   │
│   │   ├── filters/
│   │   │
│   │   │   ├── PropertyFilters.tsx
│   │   │   ├── BudgetFilter.tsx
│   │   │   ├── LocationFilter.tsx
│   │   │   └── TypeFilter.tsx
│   │
│   │   ├── home/
│   │   │
│   │   │   ├── HeroSection.tsx
│   │   │   ├── FeaturedProperties.tsx
│   │   │   ├── ServicesSection.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   └── BuildersSection.tsx
│   │
│   │   └── forms/
│   │
│   │       ├── ContactForm.tsx
│   │       ├── PropertyEnquiryForm.tsx
│   │       └── VisitBookingForm.tsx
│
│
│   ├── lib/
│   │
│   │   ├── prisma.ts
│   │   ├── cloudinary.ts
│   │   ├── auth.ts
│   │   └── api.ts
│
│
│   ├── services/
│   │
│   │   ├── property.service.ts
│   │   ├── blog.service.ts
│   │   ├── lead.service.ts
│   │   └── user.service.ts
│
│
│   ├── hooks/                          ✅
│   │
│   │   ├── useProperties.ts
│   │   ├── useFilters.ts
│   │   └── useLeads.ts
│
│
│   ├── store/
│   │
│   │   ├── propertyStore.ts
│   │   ├── userStore.ts
│   │   └── filterStore.ts
│
│
│   ├── utils/
│   │
│   │   ├── formatPrice.ts
│   │   ├── slugify.ts
│   │   └── calculateEmi.ts
│
│
│   ├── types/
│   │
│   │   ├── property.ts
│   │   ├── user.ts
│   │   └── blog.ts
│
│
│   └── constants/
│
│       ├── propertyTypes.ts
│       ├── locations.ts
│       └── amenities.ts
│
│
├── prisma/
│
│   ├── schema.prisma
│   └── seed.ts
│
│
├── middleware.ts
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
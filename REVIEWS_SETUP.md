# BrewCraft Reviews Component Setup

## 📦 Installation

Run the following command to install the required dependencies:

```bash
npm install
```

This will install:
- `embla-carousel-react` - Modern carousel library
- `embla-carousel-autoplay` - Autoplay plugin for Embla
- `gsap` with `ScrollTrigger` - Animation library

## ✨ Features

### Reviews Carousel Component
The Reviews component includes:

1. **Embla Carousel Integration**
   - Smooth, performant carousel
   - Auto-play functionality (5-second intervals)
   - Loop through reviews infinitely
   - Center-aligned slides

2. **Responsive Design**
   - Mobile: Full-width cards
   - Tablet: 85% width cards
   - Desktop: 70% width cards
   - Navigation buttons with proper positioning

3. **GSAP Animations**
   - Scroll-triggered animations using ScrollTrigger
   - Title and subtitle fade-in on scroll
   - Smooth entrance animations

4. **Beautiful UI Elements**
   - Star rating system with half-star support
   - Customer avatars with decorative rings
   - Quote icon accent
   - Gradient background with blur decorations
   - Hover effects on cards
   - Navigation buttons with hover states
   - Dot indicators for slide position

5. **Accessibility**
   - ARIA labels on buttons
   - Keyboard navigation support
   - Semantic HTML structure

## 🎨 Customization

### Autoplay Settings
Change the autoplay delay in `Reviews.tsx`:
```typescript
[Autoplay({ delay: 5000, stopOnInteraction: false })]
```

### Carousel Options
Modify carousel behavior:
```typescript
const [emblaRef, emblaApi] = useEmblaCarousel({
  loop: true,        // Infinite loop
  align: "center",   // Slide alignment
  skipSnaps: false,  // Don't skip slides
})
```

## 🚀 Usage

The component automatically imports and displays reviews from `src/lib/constant.ts`.

To add more reviews, update the `reviews` array in the constants file:

```typescript
export const reviews = [
  {
    id: 1,
    name: "Customer Name",
    rating: 5,
    comment: "Your review text here",
    img: "/images/avatar.jpg",
  },
  // Add more reviews...
];
```

## 🎯 Component Structure

```
Reviews Component
├── Section Header (animated)
├── Embla Carousel
│   ├── Review Cards
│   │   ├── Avatar
│   │   ├── Name
│   │   ├── Star Rating
│   │   └── Comment
│   ├── Previous Button
│   └── Next Button
└── Dot Indicators
```

## 💡 Tips

- The carousel auto-plays every 5 seconds
- Users can manually navigate using arrows or dots
- Hover over navigation buttons for smooth color transitions
- Cards have subtle shadow effects that enhance on hover
- Background decorations add depth without distraction

Enjoy your beautiful Reviews carousel! ☕✨

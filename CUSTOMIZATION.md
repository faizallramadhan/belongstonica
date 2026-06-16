# 🎨 Customization Guide

Make this birthday website truly unique by personalizing every aspect.

## 📝 Text Content

### Hero Section
Edit `src/app/page.tsx`:

```typescript
<HeroSection
  greeting="Happy Birthday, Sarah!" // Change name
  recipientName="Sarah"               // Main name display
  message="Today celebrates you and everything you bring to my world."
  ctaText="Open Your Gift"
/>
```

### Memories Section Title
Edit `src/components/MemoriesSection.tsx`:

```typescript
<MemoriesSection
  title="Our Favorite Moments"
  subtitle="Memories that mean everything"
/>
```

### Gift Section
Edit `src/components/GiftSection.tsx`:

```typescript
<GiftSection
  title="Your Surprise"
  giftTitle="A Promise for Next Year"
  giftMessage="This year, I promise to... [your personal message]"
  imageUrl="https://your-image-url.com/image.jpg"
/>
```

### Closing Section
Edit `src/components/ClosingSection.tsx`:

```typescript
<ClosingSection
  message="Custom closing message here"
  signOff="Yours truly,"
  fromName="Your Name ✦"
/>
```

## 🖼️ Photos & Media

### Add Your Memories

Edit `src/components/MemoriesSection.tsx` and replace `sampleMemories`:

```typescript
const sampleMemories: Memory[] = [
  {
    id: '1',
    image: 'https://cdn.example.com/photo1.jpg', // Your photo URL
    caption: 'Summer Adventure 2024',
    story: 'That beautiful day when we explored the mountains together...',
  },
  {
    id: '2',
    image: 'https://cdn.example.com/photo2.jpg',
    caption: 'Celebrating Success',
    story: 'Your smile when you achieved that goal meant everything to me.',
  },
  // Add more memories...
];
```

### Using Local Images

1. Place images in `public/images/`
```bash
public/
└── images/
    ├── memory-1.jpg
    ├── memory-2.jpg
    └── memory-3.jpg
```

2. Reference in component:
```typescript
image: '/images/memory-1.jpg',
```

### Image Best Practices

- **Format**: JPG for photos, PNG for graphics
- **Size**: 1000-1200px wide
- **Quality**: 80-90% compression
- **Aspect ratio**: 16:9 or 4:3
- **File size**: < 500KB per image

### Tools for Image Optimization

- **TinyPNG**: https://tinypng.com
- **ImageOptim**: https://imageoptim.com
- **Squoosh**: https://squoosh.app

## 🎵 Background Music

### Add Your Music

1. Get royalty-free music:
   - [Pixabay Music](https://pixabay.com/music)
   - [Freepik](https://www.freepik.com/music)
   - [Incompetech](https://incompetech.com)
   - [Epidemic Sound](https://www.epidemicsound.com)

2. Place in `public/music/`:
```bash
mkdir -p public/music
cp your-music.mp3 public/music/background-music.mp3
```

3. Supported formats: MP3, WAV, OGG, M4A

### Music Recommendations

- **Ambient/Piano**: Calming, emotional
- **Cello**: Elegant, timeless
- **Soft Jazz**: Sophisticated
- **Strings**: Romantic
- **Nature sounds**: Peaceful

Duration: 2-5 minutes (loops naturally)

## 🎨 Colors & Styling

### Change Color Palette

Edit `tailwind.config.ts`:

```typescript
colors: {
  cream: '#F8F5F0',      // Main background
  beige: '#EDE4D7',      // Secondary background
  'dusty-rose': '#D8B4A0', // Primary accent
  'sage-green': '#A8BBA3',  // Secondary accent
  gold: '#D4AF37',       // Luxury accent
}
```

### Popular Color Combinations

**Modern Minimalist:**
```typescript
cream: '#FFFFFF',
beige: '#F5F5F5',
'dusty-rose': '#8E7A6E',
'sage-green': '#6B7B6B',
gold: '#C4A96B',
```

**Warm & Romantic:**
```typescript
cream: '#FFF8F3',
beige: '#FFE4D6',
'dusty-rose': '#E07856',
'sage-green': '#A5936B',
gold: '#E8C547',
```

**Cool & Elegant:**
```typescript
cream: '#F0F4F8',
beige: '#E2EBF3',
'dusty-rose': '#9B8BA3',
'sage-green': '#7A9BA3',
gold: '#B8A88E',
```

### Applying Custom Colors

All colors are controlled through CSS variables and Tailwind classes. For example:

```html
<!-- Background color -->
<div className="bg-cream">

<!-- Text color -->
<div className="text-dusty-rose">

<!-- Gradient -->
<div className="bg-gradient-to-r from-dusty-rose to-gold">
```

## 🔤 Typography

### Change Fonts

Edit `src/app/layout.tsx`:

```typescript
import { Playfair_Display, Lora } from 'next/font/google';

// For headings - try:
// - Playfair Display (current - elegant)
// - Cormorant Garamond (classic)
// - Bodoni Moda (sophisticated)
// - EB Garamond (editorial)

// For body - try:
// - Lora (current - refined)
// - Merriweather (warm)
// - Crimson Text (readable)
// - Libre Baskerville (timeless)

const playfair = Playfair_Display({ /* config */ });
const lora = Lora({ /* config */ });
```

### Font Pairing Examples

| Heading | Body | Style |
|---------|------|-------|
| Playfair Display | Lora | Romantic |
| Cormorant Garamond | Merriweather | Classic |
| Bodoni Moda | Crimson Text | Editorial |
| EB Garamond | Libre Baskerville | Timeless |

### Letter Spacing

Adjust in `tailwind.config.ts`:

```typescript
letterSpacing: {
  tighter: '-0.05em',
  tight: '-0.025em',
  normal: '0em',
  wide: '0.025em',
  wider: '0.05em',
  widest: '0.1em',
}
```

Increase for more elegant, spacious feel; decrease for compact.

## ✨ Animations

### Adjust Animation Speed

Edit `src/app/globals.css`:

```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 0.6s ease-out; /* Change 0.6s to adjust */
}
```

### Change Animation Duration

In components using Framer Motion:

```typescript
transition={{ duration: 0.8 }} // Slower = 1.0+, Faster = 0.4-0.6
```

### Disable Animations

For users who prefer reduced motion:

```typescript
if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  // Disable animations
}
```

### Animation Philosophy

- **Entrance**: 0.6-0.8s (smooth, not too fast)
- **Hover**: 0.2-0.3s (snappy)
- **Transitions**: 0.4-0.6s (responsive)
- **Floating**: 4-6s (ambient)

## 🎯 Behavior Changes

### Music Player

Edit `src/components/MusicPlayer.tsx`:

```typescript
<MusicPlayer 
  audioUrl="/music/your-music.mp3"
  title="Ambient Music" // Display label
/>
```

### Photo Carousel

Edit `src/components/PhotoCarousel.tsx`:

```typescript
<PhotoCarousel
  photos={memories}
  autoplay={true}           // Enable autoplay
  autoplayInterval={5000}   // 5 seconds between slides
/>
```

### Hero Particles

Adjust floating particles in `src/components/HeroSection.tsx`:

```typescript
const particles = Array.from({ length: 15 }, ...) // Number of particles
delay: i * 0.2 // Spacing between particles
duration: 3 + Math.random() * 2 // Animation duration
```

## 📱 Responsive Breakpoints

Tailor the experience for different devices:

```typescript
// Tailwind breakpoints
sm: 640px   // Mobile landscape
md: 768px   // Tablet
lg: 1024px  // Desktop
xl: 1280px  // Large desktop

// Usage
<div className="text-lg sm:text-xl md:text-2xl">
  Responsive text
</div>
```

## 🔗 Links & Navigation

### Add Links to Sections

Edit `src/components/HeroSection.tsx`:

```typescript
const handleScroll = () => {
  const nextSection = document.getElementById('memories-section');
  nextSection?.scrollIntoView({ behavior: 'smooth' });
};
```

### Add External Links

```typescript
<a 
  href="https://example.com" 
  target="_blank" 
  rel="noopener noreferrer"
>
  Link Text
</a>
```

## ♿ Accessibility

### Improve Accessibility

- Add alt text to images:
```typescript
<img src="..." alt="Descriptive text" />
```

- Use semantic HTML:
```typescript
<section>
<h1>Heading</h1>
<p>Content</p>
</section>
```

- Ensure color contrast (WCAG AA):
- Test with screen readers

## 📊 Analytics (Optional)

Add Google Analytics in `src/app/layout.tsx`:

```typescript
import { Analytics } from "@vercel/analytics/react"

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
```

## 🔒 Privacy

For sharing with recipients:
1. No personal data collection by default
2. Music plays locally
3. Images from URL or local files
4. Consider adding privacy notice

## ✅ Testing Your Changes

```bash
# Development with hot reload
npm run dev

# Build test
npm run build

# Run production build locally
npm start

# Type checking
npm run type-check
```

## 🎁 Final Touches

1. **Favicon**: Add `public/favicon.ico`
2. **Open Graph image**: `public/og-image.jpg`
3. **Metadata**: Update in `layout.tsx`
4. **Domain**: Use custom domain for polish
5. **Share button**: Add social sharing

---

Every customization makes this website more personal and meaningful. Take your time and enjoy the process! 🎉

# 📖 Component Reference Guide

## Quick File Reference

### Configuration Files
| File | Purpose |
|------|---------|
| `package.json` | Dependencies, scripts, project metadata |
| `tsconfig.json` | TypeScript compiler configuration |
| `tailwind.config.ts` | Custom colors, spacing, animations |
| `next.config.ts` | Next.js build configuration |
| `postcss.config.js` | Tailwind CSS processing |
| `.eslintrc.json` | Code quality rules |
| `vercel.json` | Vercel deployment settings |

### Global Setup
| File | Purpose |
|------|---------|
| `src/app/layout.tsx` | Root HTML layout, metadata |
| `src/app/page.tsx` | Main page orchestrator |
| `src/app/globals.css` | Global styles, typography, animations |

### Components - Sections
| Component | File | Purpose |
|-----------|------|---------|
| HeroSection | `src/components/sections/HeroSection.tsx` | Greeting, CTA button, first impression |
| PhotoCarousel | `src/components/sections/PhotoCarousel.tsx` | Photo gallery with Embla carousel |
| MessageSection | `src/components/sections/MessageSection.tsx` | Birthday wishes, personal messages |

### Components - Features
| Component | File | Purpose |
|-----------|------|---------|
| MusicPlayer | `src/components/MusicPlayer.tsx` | Floating music control button |
| ParticleBackground | `src/components/ParticleBackground.tsx` | Canvas-based particle animation |
| FloatingDecorations | `src/components/FloatingDecorations.tsx` | Floating emojis, gradient orbs |

---

## Component Details

### HeroSection.tsx

**What it does:**
- Displays hero greeting message
- Shows recipient's name
- Provides call-to-action button
- Has fade-in animations
- Scroll indicator animation

**Key customization points:**
```typescript
// Line 45: Main heading
<motion.h1>Happy Birthday</motion.h1>

// Line 57: Subtitle
<motion.p>A little gift made specially for you</motion.p>

// Line 69: Recipient's name (CHANGE THIS)
<p>Someone Special</p>

// Line 72: Button text
<span>Open Your Gift</span>
```

**Hooks used:**
- `useState` for hover state
- `useRef` for page ref

---

### PhotoCarousel.tsx

**What it does:**
- Displays photo carousel with swipe/navigation
- Shows photo captions and memories
- Auto-plays with manual controls
- Responsive image loading
- Indicator dots

**Key customization points:**
```typescript
// Lines 10-35: memories array - ADD YOUR PHOTOS HERE
const memories: PhotoMemory[] = [
  {
    id: 1,
    src: 'YOUR_IMAGE_URL',
    caption: 'Your Caption',
    memory: 'Your memory description',
  },
  // ... more photos
];
```

**Hooks used:**
- `useEmblaCarousel` for carousel logic
- `useState` for state management
- `useEffect` for scroll events

**Dependencies:**
- `embla-carousel-react`
- `embla-carousel-autoplay`
- `react-icons/fa` (ChevronLeft, ChevronRight)

---

### MessageSection.tsx

**What it does:**
- Displays birthday wishes
- Shows personal message
- Shows wishes grid (3 items)
- Floating decorative emoji
- Closing message with signature

**Key customization points:**
```typescript
// Lines 37-45: Main birthday message - EDIT THESE PARAGRAPHS
<p>On your special day...</p>
<p>May this year bring...</p>

// Lines 54-61: Wishes grid - CUSTOMIZE THESE
title: 'Health & Happiness',
description: 'Wishing you radiant health...',

// Lines 76-80: Closing quote and signature
<p>"Your life is a gift. Make it count."</p>
<p>With all my love and best wishes,</p>
```

**Hooks used:**
- Framer Motion variants for animations
- No React hooks

---

### MusicPlayer.tsx

**What it does:**
- Floating music control button
- Play/pause functionality
- Volume control
- Mute toggle
- Auto-collapse after inactivity
- Respects browser autoplay policies

**Key customization points:**
```typescript
// Line 19: Music URL - CHANGE TO YOUR MUSIC
const musicUrl = 'https://your-music-url.mp3';

// Line 23: Optional: Override music URL from env
const musicUrl = process.env.NEXT_PUBLIC_MUSIC_URL || '...';
```

**Hooks used:**
- `useState` for play state, muted, expanded
- `useRef` for audio element and timeout
- `useEffect` for audio setup and cleanup

**Dependencies:**
- `react-icons/fa6` (FaPlay, FaPause, etc.)

---

### ParticleBackground.tsx

**What it does:**
- Renders animated particles on canvas
- Draws connecting lines between nearby particles
- Fills entire viewport
- Responsive to window resize
- Performance optimized with requestAnimationFrame

**Key customization points:**
```typescript
// Line 20: Particle count (more = slower)
const particleCount = 30;  // ADJUST FOR PERFORMANCE

// Lines 37-40: Particle speed (lower = slower)
vx: (Math.random() - 0.5) * 0.5,
vy: (Math.random() - 0.5) * 0.5,

// Lines 49-52: Color customization
ctx.fillStyle = `rgba(216, 180, 160, ${particle.opacity})`;  // Rose color
```

**Hooks used:**
- `useRef` for canvas element
- `useEffect` for animation setup

---

### FloatingDecorations.tsx

**What it does:**
- Adds decorative floating emojis
- Creates gradient orbs that animate
- Adds depth and movement to background
- Non-interactive decorative elements

**Key customization points:**
```typescript
// Lines 8-13: Decorations array - CHANGE EMOJIS OR POSITIONS
const decorations = [
  { id: 1, emoji: '✨', top: '10%', left: '5%', delay: 0 },
  // ... more decorations
];

// Lines 46-60: Gradient orbs - ADJUST COLORS
from-rose/10 to-gold/10  // Color gradient
```

**Hooks used:**
- Framer Motion for animations
- No React hooks

---

## Data Structures

### PhotoMemory Interface
```typescript
interface PhotoMemory {
  id: number;           // Unique identifier
  src: string;          // Image URL
  caption: string;      // Short photo caption
  memory: string;       // Personal memory text
}
```

### Particle Interface
```typescript
interface Particle {
  x: number;           // X position
  y: number;           // Y position
  vx: number;          // X velocity
  vy: number;          // Y velocity
  radius: number;      // Size
  opacity: number;     // Transparency
}
```

---

## Styling Approach

### Tailwind Classes Used
- **Spacing**: `p-`, `m-`, `px-`, `py-`, `gap-`
- **Text**: `text-`, `font-`, `leading-`, `tracking-`
- **Display**: `flex`, `grid`, `absolute`, `fixed`
- **Colors**: Custom colors from config
- **Responsive**: `md:` breakpoint prefix
- **Effects**: `rounded-`, `shadow-`, `opacity-`, `blur-`

### Custom CSS (in globals.css)
- `@keyframes` animations
- Custom scrollbar styling
- Glass effect class
- Gradient overlay class

---

## Animation Patterns

### Fade-in on Scroll
```typescript
<motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: '-100px' }}
  variants={containerVariants}
>
```

### Staggered Children
```typescript
const containerVariants = {
  visible: {
    transition: {
      staggerChildren: 0.2,  // Delay between children
    },
  },
};
```

### Floating Animation
```typescript
animate={{
  y: [0, -20, 0],
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: 'easeInOut',
  },
}}
```

---

## Key Features Explained

### Responsive Design
- Uses Tailwind's responsive prefixes
- Mobile-first approach
- `clamp()` for fluid typography
- Media queries in CSS

### Touch Support
- Embla carousel handles swipes
- Button hover and tap states
- Mobile-optimized spacing

### Performance
- Canvas rendering for particles (efficient)
- requestAnimationFrame for smooth animations
- Code-split components with Next.js
- Image optimization built-in

### Accessibility
- `aria-label` attributes
- Semantic HTML elements
- Focus states on buttons
- Color contrast compliance

---

## Common Modifications

### Change Button Color
**File**: `src/components/sections/HeroSection.tsx` (line 83)
```typescript
className="... bg-dark ..."  // Change bg-dark to bg-rose or bg-sage
```

### Add More Photo Memories
**File**: `src/components/sections/PhotoCarousel.tsx`
```typescript
// Just add more objects to memories array with unique id
```

### Change Animation Speed
**File**: Any component using Framer Motion
```typescript
transition={{ duration: 1 }}  // Change 1 to larger/smaller number
```

### Adjust Particle Count
**File**: `src/components/ParticleBackground.tsx` (line 20)
```typescript
const particleCount = 30;  // Increase for more, decrease for fewer
```

---

## Development Workflow

### Making Changes
1. Edit component file
2. Save file (hot reload in dev mode)
3. See changes instantly in browser
4. Test on mobile view (F12 → device toolbar)

### Debugging
1. Open browser DevTools (F12)
2. Check Console for errors
3. Use React DevTools extension
4. Check Network tab for image/music loading

### Performance Testing
1. Run `npm run build`
2. Check build output for warnings
3. Use Lighthouse (F12 → Lighthouse tab)
4. Test on slower connection (DevTools → Network)

---

## File Organization Best Practices

```
components/
├── sections/          ← Page sections
│   ├── HeroSection.tsx
│   ├── PhotoCarousel.tsx
│   └── MessageSection.tsx
├── MusicPlayer.tsx    ← Reusable features
├── ParticleBackground.tsx
└── FloatingDecorations.tsx

app/
├── page.tsx          ← Page router/orchestrator
├── layout.tsx        ← Layout wrapper
└── globals.css       ← Global styles
```

---

## Quick Help

**Component not showing?**
- Check import statement in parent file
- Verify file path is correct
- Check for TypeScript errors

**Styling not applied?**
- Rebuild Tailwind: `npm run build`
- Clear browser cache
- Check spelling of Tailwind class

**Image not loading?**
- Verify image URL is accessible
- Check CORS headers on image server
- Try different image hosting service

**Music not playing?**
- Check browser autoplay permissions
- Verify music URL is valid
- Try audio in browser directly

---

This reference guide covers all components and their customization points. For more details, see the code comments in each file!

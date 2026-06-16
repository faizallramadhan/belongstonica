# 🎂 Elegant Birthday Gift Website

A beautiful, emotional single-page website inspired by modern wedding invitation design. Built with Next.js, TypeScript, and Framer Motion for an immersive, premium birthday gift experience.

## ✨ Features

- **Elegant Design**: Premium wedding-invitation aesthetic with refined typography and sophisticated color palette
- **Smooth Animations**: Cinematic transitions powered by Framer Motion
- **Photo Carousel**: Beautiful image gallery with touch support and autoplay
- **Persistent Music Player**: Background music that continues across all sections
- **Fully Responsive**: Optimized for mobile, tablet, and desktop
- **Interactive Sections**:
  - Hero greeting with floating particles
  - Memory gallery with captions
  - Gift reveal section
  - Elegant closing message
- **High Performance**: Optimized for fast loading and smooth interactions
- **Easy Customization**: Simple component props for personalization

## 🎨 Design System

### Color Palette
- **Cream**: #F8F5F0 (Primary background)
- **Beige**: #EDE4D7 (Secondary background)
- **Dusty Rose**: #D8B4A0 (Accent)
- **Sage Green**: #A8BBA3 (Secondary accent)
- **Gold**: #D4AF37 (Luxury accent)

### Typography
- **Headings**: Playfair Display (elegant serif)
- **Body**: Lora (refined sans-serif)
- **Letter spacing**: Generous and luxurious

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ (recommended 20+)
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd birthday-gift-website
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Add background music** (optional)
```bash
# Create public/music directory if it doesn't exist
mkdir -p public/music

# Place your background music file here
# public/music/background-music.mp3

# You can use royalty-free music from:
# - Pixabay (https://pixabay.com/music)
# - Freepik (https://www.freepik.com/music)
# - Incompetech (https://incompetech.com)
```

4. **Run development server**
```bash
npm run dev
```

Visit `http://localhost:3000` to see your website.

## 🎯 Customization Guide

### Personalize the Content

Edit `src/app/page.tsx` to customize:

```typescript
<HeroSection
  greeting="Happy Birthday"
  recipientName="[Recipient Name]"
  message="[Your personal message]"
  ctaText="Open Your Gift"
/>
```

### Add Your Photos

Edit `src/components/MemoriesSection.tsx` and update the `sampleMemories` array:

```typescript
const sampleMemories: Memory[] = [
  {
    id: '1',
    image: '[Your image URL]',
    caption: '[Photo caption]',
    story: '[Memory description]',
  },
  // Add more memories...
];
```

### Change Music

Replace `background-music.mp3` with your chosen track in `public/music/` directory.

### Customize Colors

Edit `tailwind.config.ts` to modify the color palette:

```typescript
colors: {
  cream: '#F8F5F0',
  beige: '#EDE4D7',
  'dusty-rose': '#D8B4A0',
  'sage-green': '#A8BBA3',
  // ... more colors
}
```

### Update Typography

Change font family imports in `src/app/layout.tsx`:

```typescript
const playfair = Playfair_Display({ /* ... */ });
const lora = Lora({ /* ... */ });
```

## 📁 Project Structure

```
birthday-gift-website/
├── src/
│   ├── app/
│   │   ├── page.tsx              # Main page
│   │   ├── layout.tsx            # Root layout with fonts
│   │   └── globals.css           # Global styles
│   ├── components/
│   │   ├── HeroSection.tsx       # Hero greeting section
│   │   ├── MemoriesSection.tsx   # Memory gallery section
│   │   ├── PhotoCarousel.tsx     # Image carousel component
│   │   ├── GiftSection.tsx       # Gift reveal section
│   │   ├── ClosingSection.tsx    # Closing message section
│   │   └── MusicPlayer.tsx       # Persistent music player
│   └── utils/                    # Utility functions (optional)
├── public/
│   ├── music/
│   │   └── background-music.mp3  # Background music file
│   └── images/                   # Optional image assets
├── package.json                  # Dependencies
├── tsconfig.json                 # TypeScript config
├── tailwind.config.ts            # Tailwind CSS config
├── postcss.config.js             # PostCSS config
├── next.config.js                # Next.js config
└── README.md                     # This file
```

## 🎵 Music Player Usage

The MusicPlayer component:
- **Respects browser autoplay policies** - Music requires user interaction
- **Persists across sections** - Music continues while scrolling
- **Global controls** - Play/pause, mute, and volume adjustment
- **Fixed position** - Always accessible at bottom-right

### Adding Custom Audio

```typescript
<MusicPlayer 
  audioUrl="/path/to/music.mp3"
  title="Custom Music Title"
/>
```

Supported formats: MP3, WAV, OGG, M4A

## 🎬 Animation Details

### Framer Motion Animations
- **Fade-in on scroll**: Sections appear smoothly
- **Floating particles**: Gentle, ambient motion in hero
- **Image reveals**: Photos transition elegantly
- **Staggered text**: Sequential text animations
- **Hover effects**: Interactive element feedback

All animations are performant and respect motion preferences.

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

Mobile experience is optimized as primary design consideration.

## 🔍 SEO & Metadata

Update metadata in `src/app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: 'Happy Birthday | A Special Gift For You',
  description: 'An elegant and personalized birthday gift experience',
  // Add more metadata as needed
};
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel auto-detects Next.js

3. **Deploy**
   - Click "Deploy"
   - Your site is live at `your-project.vercel.app`

### Environment Variables (if needed)

Create `.env.local`:
```
NEXT_PUBLIC_MUSIC_URL=/music/background-music.mp3
```

### Deploy to Other Platforms

**Netlify:**
```bash
npm run build
netlify deploy --prod --dir=.next
```

**Docker:**
```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## ⚡ Performance Tips

1. **Optimize images** - Use compressed versions
2. **Lazy load** - Images load on scroll
3. **Code splitting** - Components load as needed
4. **Caching** - Static assets cached by Vercel
5. **Music** - Consider file size (2-4MB recommended)

## 🔒 Browser Compatibility

- Chrome/Edge: Full support
- Firefox: Full support
- Safari: Full support (iOS 14.5+)
- Mobile browsers: Full support

## 🐛 Troubleshooting

### Music won't play
- Check browser autoplay policy
- Ensure file is in `public/music/` folder
- Try different audio format
- Check console for errors

### Animations not smooth
- Close other browser tabs
- Check GPU acceleration is enabled
- Reduce animation complexity in globals.css

### Images not loading
- Verify image URLs are correct
- Check CORS headers for remote images
- Use local images from `public/` folder

## 📦 Dependencies

- **next**: 15.0.0 - React framework
- **react**: 18.3.1 - UI library
- **framer-motion**: 11.0.0 - Animations
- **tailwindcss**: 3.4.0 - Styling
- **react-icons**: 5.0.0 - Icon library

## 📄 License

This project is open source and available under the MIT License.

## 💝 Tips for Best Experience

1. **Test on mobile first** - Premium experience starts mobile
2. **Choose meaningful photos** - Quality over quantity
3. **Write personal messages** - Authenticity matters most
4. **Select fitting music** - Match the mood and tone
5. **Test in browser** - Preview before sharing

## 🤝 Support

For issues or questions:
1. Check this README
2. Review component props
3. Check browser console for errors
4. Test in incognito mode

## 🎁 Final Thoughts

This website is designed to create a memorable, emotional birthday experience. Every detail—from the colors to the animations—is carefully crafted to feel premium and personal.

Make it yours. Add your memories, your music, your words. That's what makes it truly special. 🎂✨

---

Built with love and attention to detail. Happy Birthday! 🎉

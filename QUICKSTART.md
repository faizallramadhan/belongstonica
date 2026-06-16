# 🚀 Quick Start Guide

Get your elegant birthday website up and running in 5 minutes!

## 1. Install & Run (2 minutes)

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 2. Customize (3 minutes)

### Edit the recipient's name:
**File:** `src/components/sections/HeroSection.tsx` (line 52)
```typescript
Someone Special  // ← Change this line
```

### Add your photos:
**File:** `src/components/sections/PhotoCarousel.tsx` (lines 10-35)
```typescript
src: 'https://your-image-url.jpg',  // Replace with your photo URL
```

### Write personal messages:
**File:** `src/components/sections/MessageSection.tsx` (lines 36-45)
```typescript
// Replace the paragraph with your heartfelt message
```

## 3. Deploy to Vercel (1 minute)

```bash
# Push to GitHub
git add .
git commit -m "Birthday gift website"
git push

# Then:
# 1. Go to vercel.com
# 2. Click "New Project"
# 3. Select your repo
# 4. Click "Deploy"
# 5. Share the URL!
```

## Common Customizations

### Change Colors
**File:** `tailwind.config.ts` (lines 8-15)
```typescript
colors: {
  cream: '#F8F5F0',  // Change any color here
  // ...
}
```

### Add Background Music
**File:** `src/components/MusicPlayer.tsx` (line 19)
```typescript
const musicUrl = 'https://your-music-url.mp3';
```

### Change Section Title
Search the component files for `Cherished Memories` and `Birthday Wish` and replace with your own titles.

## File Structure Explained

```
src/
├── app/
│   ├── layout.tsx        ← App setup
│   ├── page.tsx          ← Main page (orchestrator)
│   └── globals.css       ← Global styles
├── components/
│   ├── sections/         ← Main content sections
│   │   ├── HeroSection.tsx      (greeting)
│   │   ├── PhotoCarousel.tsx    (photo gallery)
│   │   └── MessageSection.tsx   (birthday wishes)
│   ├── MusicPlayer.tsx          (music control)
│   ├── ParticleBackground.tsx   (animated background)
│   └── FloatingDecorations.tsx  (floating emojis)
```

## Essential Commands

```bash
npm run dev      # Start dev server
npm run build    # Build for production
npm start        # Run production build locally
npm run lint     # Check code quality
```

## Image Upload Tips

1. Take high-quality photos
2. Use online image hostings:
   - [Imgur.com](https://imgur.com) - Quick & easy
   - [Cloudinary](https://cloudinary.com) - Professional
   - Your own cloud storage with public links

3. Copy image URL and paste in PhotoCarousel.tsx

## Music Sources

**Free Royalty-Free Music:**
- [Bensound.com](https://www.bensound.com)
- [Incompetech.com](https://incompetech.com)
- [Mixkit.co](https://mixkit.co)
- [Zapsplat.com](https://www.zapsplat.com)

## Troubleshooting

**Website won't load?**
```bash
# Clear and reinstall
rm -rf node_modules package-lock.json
npm install
npm run dev
```

**Build fails?**
```bash
# Clean build
rm -rf .next
npm run build
```

**Images not showing?**
- Verify URL is correct
- Check image is publicly accessible
- Try different image hosting

## Deploy Checklist

Before sharing:
- [ ] Recipient's name is correct
- [ ] Photos display properly
- [ ] No typos in messages
- [ ] Music plays when clicked
- [ ] Looks good on phone
- [ ] Carousel works smoothly

## That's It! 🎉

Your personalized birthday website is ready to impress. Visit [SETUP.md](./SETUP.md) for more detailed customization options.

**Pro Tips:**
- Test on your phone before sharing
- Keep messages heartfelt and personal
- Choose quality photos and music
- Share the URL via WhatsApp, email, or social media

Happy Birthday to your special someone! 🎂✨

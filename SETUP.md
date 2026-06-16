# 🎨 Customization Guide

Follow this step-by-step guide to personalize your elegant birthday gift website.

## Step 1: Personalize the Greeting

### File: `src/components/sections/HeroSection.tsx`

Find this section and update it:

```typescript
<motion.h1
  className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-dark mb-4 md:mb-6 tracking-tight"
  variants={itemVariants}
>
  Happy Birthday  {/* Change if desired */}
</motion.h1>

<motion.p
  className="text-xl md:text-2xl text-dark/70 mb-8 md:mb-12 font-light tracking-wide max-w-2xl"
  variants={itemVariants}
>
  A little gift made specially for you  {/* Customize this message */}
</motion.p>

{/* Recipient name */}
<motion.div className="mb-12 md:mb-16" variants={itemVariants}>
  <p className="text-lg md:text-xl text-sage font-sans uppercase tracking-widest">
    Someone Special  {/* CHANGE THIS TO THE RECIPIENT'S NAME */}
  </p>
</motion.div>
```

**Example personalization:**
- Change "Happy Birthday" to something like "Happy 25th Birthday, Sarah!"
- Change the subtitle to something personal
- Replace "Someone Special" with their actual name in uppercase

## Step 2: Add Your Photos

### File: `src/components/sections/PhotoCarousel.tsx`

Find the `memories` array and replace with your own photos:

```typescript
const memories: PhotoMemory[] = [
  {
    id: 1,
    src: 'https://your-image-url-1.jpg',  {/* Replace with your photo */}
    caption: 'Unforgettable Moments',       {/* Change caption */}
    memory: 'Write a personal memory here', {/* Change memory message */}
  },
  {
    id: 2,
    src: 'https://your-image-url-2.jpg',
    caption: 'Adventures Together',
    memory: 'Share a special moment you remember together.',
  },
  {
    id: 3,
    src: 'https://your-image-url-3.jpg',
    caption: 'Golden Memories',
    memory: 'Describe what makes this person special to you.',
  },
  {
    id: 4,
    src: 'https://your-image-url-4.jpg',
    caption: 'Pure Joy',
    memory: 'Express your feelings and wishes for them.',
  },
];
```

### How to Get Photo URLs:

**Option 1: Use Free Image Hosting**
- Upload to [Imgur.com](https://imgur.com)
- Get the direct link and use it

**Option 2: Use Your Own Photos**
- Upload photos to cloud storage (Google Drive, Dropbox, AWS S3)
- Get shareable links and use those URLs
- Note: Links must be publicly accessible

**Option 3: Use Existing Stock Photos** (for testing)
- [Unsplash.com](https://unsplash.com)
- [Pexels.com](https://pexels.com)
- [Pixabay.com](https://pixabay.com)

### Photo Tips:
- Use high-quality images (2000x1500px or larger)
- Ensure consistent aspect ratio (4:3 recommended)
- Test URLs to ensure they load properly
- Use https:// URLs only

## Step 3: Write Personal Messages

### File: `src/components/sections/MessageSection.tsx`

Replace the generic messages with your own heartfelt wishes:

```typescript
<p className="text-lg md:text-xl text-dark/75 font-light leading-relaxed mb-8">
  {/* Replace this entire paragraph with your personal message */}
  On your special day, I want you to know how much you mean to me. You bring
  joy, warmth, and light into the lives of everyone around you. Your kindness,
  your laughter, and your unique spirit make the world a better place.
</p>

<p className="text-lg md:text-xl text-dark/75 font-light leading-relaxed">
  {/* And this one too - write from your heart */}
  May this year bring you endless moments of happiness, new adventures to
  explore, and all the love and support you deserve. Here's to celebrating
  you and everything beautiful that makes you who you are.
</p>
```

Also update the closing message:
```typescript
<p className="font-serif text-2xl md:text-3xl text-gold italic mb-6">
  "Your life is a gift. Make it count."  {/* Change to a meaningful quote */}
</p>

<p className="text-dark/60 font-sans text-sm md:text-base">
  With all my love and best wishes,
  <br />
  Your Friend & Well-Wisher 🎂  {/* Sign it with your name */}
</p>
```

### Message Writing Tips:
- Be sincere and personal
- Reference shared memories
- Include specific qualities you admire
- Express your genuine wishes
- Keep tone warm and emotional
- Avoid generic phrases

## Step 4: Add Background Music

### File: `src/components/MusicPlayer.tsx`

Find this line and replace with your music URL:

```typescript
const musicUrl = 'https://assets.mixkit.co/active_storage/sfx/2372/2372-preview.mp3';
// Replace with your music URL
```

### How to Get Music URLs:

**Option 1: Free Music**
- [Soundly.io](https://www.soundly.io) - Free instrumental music
- [Bensound.com](https://www.bensound.com) - Creative Commons music
- [Incompetech.com](https://incompetech.com) - Royalty-free background music
- [Mixkit.co](https://mixkit.co) - Free music & sounds

**Option 2: Your Own Music**
- Upload to [SoundCloud](https://soundcloud.com) (get download link)
- Use cloud storage with public sharing
- Ensure file is hosted on reliable server

### Music Selection Tips:
- Choose soft, ambient, instrumental music
- Avoid lyrics that might distract
- Select mood appropriate to the person
- Test audio quality before deploying
- Keep file size reasonable (2-5MB)

## Step 5: Customize Colors (Optional)

### File: `tailwind.config.ts`

You can adjust the color palette if desired:

```typescript
colors: {
  cream: '#F8F5F0',    // Background - Warm cream
  beige: '#EDE4D7',    // Secondary - Light beige
  rose: '#D8B4A0',     // Accents - Dusty rose
  sage: '#A8BBA3',     // Tertiary - Muted sage
  gold: '#D4AF7A',     // Highlights - Elegant gold
  dark: '#2B2520',     // Text - Dark brown
}
```

**Popular alternatives:**
- Romantic: Use more rose and gold
- Modern: Use more sage and beige
- Luxury: Use more gold and dark
- Soft: Use lighter cream and beige

## Step 6: Customize Wishes Grid (Optional)

### File: `src/components/sections/MessageSection.tsx`

Update the three wishes to be more personal:

```typescript
{[
  {
    emoji: '✨',
    title: 'Health & Happiness',           // Change title
    description: 'Wishing you radiant health and boundless joy', // Change description
  },
  {
    emoji: '🌟',
    title: 'Growth & Dreams',
    description: 'May all your dreams come true this year',
  },
  {
    emoji: '💫',
    title: 'Love & Connection',
    description: 'Surrounded by people who cherish you always',
  },
]}
```

## Step 7: Test Everything

### Before Deploying:

1. **Test Locally**
```bash
npm run dev
# Visit http://localhost:3000
```

2. **Check on Mobile**
- Open on phone/tablet
- Test carousel swiping
- Test music player
- Verify images load correctly

3. **Verify Content**
- Spell-check all text
- Ensure photos are visible
- Test music plays
- Check animations work smoothly

4. **Cross-browser Testing**
- Chrome
- Firefox
- Safari
- Edge

## Step 8: Deploy to Vercel

### Quick Deploy:

1. Create GitHub account (if needed)
2. Push your code to GitHub:
```bash
git add .
git commit -m "Personalized birthday website"
git push origin main
```

3. Go to [vercel.com](https://vercel.com)
4. Click "New Project"
5. Select your GitHub repository
6. Click "Deploy"
7. Your site is live! Share the URL

### Get Custom Domain (Optional):

- Add domain in Vercel dashboard
- Configure DNS settings
- Vercel provides free SSL certificate

## Final Checklist

Before sharing, verify:

- [ ] Recipient's name appears correctly
- [ ] All photos load without errors
- [ ] Personal messages are heartfelt and typo-free
- [ ] Music plays when user clicks play
- [ ] Carousel works smoothly on mobile
- [ ] Colors look elegant and match your vision
- [ ] All links and buttons work
- [ ] Website loads quickly
- [ ] Mobile view looks excellent
- [ ] Tested on multiple devices/browsers

## Troubleshooting Tips

**Photos not showing?**
- Verify image URLs are correct
- Check image is publicly accessible
- Try different image hosting service
- Ensure URL uses https:// not http://

**Music not playing?**
- Check browser autoplay permissions
- Verify music URL is correct
- Ensure music file exists at URL
- Try different audio file format

**Text has typos?**
- Check for spelling errors
- Verify grammar
- Check character spacing
- Test on actual device

**Colors don't look right?**
- Clear browser cache
- Rebuild project: `npm run build`
- Check Tailwind CSS is installed
- Try different color values

## Support Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [Vercel Deployment Guide](https://vercel.com/docs)

---

## Need Help?

If you get stuck:
1. Check the README.md for general information
2. Review code comments in component files
3. Check browser console for errors (F12)
4. Verify file paths are correct
5. Ensure all dependencies are installed

Good luck creating an unforgettable birthday experience! 🎉💝

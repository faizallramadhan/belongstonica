# 🚀 Deployment Guide

## Vercel Deployment (Recommended)

Vercel is the optimal platform for Next.js applications and provides seamless deployment.

### Step 1: Prepare Your Project

```bash
# Ensure everything is committed to git
git add .
git commit -m "Birthday website ready for deployment"

# Push to GitHub (required for Vercel)
git push origin main
```

### Step 2: Deploy to Vercel

1. Visit [vercel.com](https://vercel.com)
2. Click **"Add New..." → "Project"**
3. Import your GitHub repository
4. Vercel auto-detects Next.js configuration
5. Click **"Deploy"**

Your site will be live at: `your-project.vercel.app`

### Step 3: Custom Domain (Optional)

1. In Vercel dashboard, go to **Settings → Domains**
2. Add your custom domain
3. Follow DNS configuration instructions
4. Domain will be live in 24-48 hours

## Environment Variables

1. In Vercel dashboard: **Settings → Environment Variables**
2. Add any needed variables (copy from `.env.example`)
3. Changes deploy automatically

## Troubleshooting Vercel Deployment

### Build Fails
- Check `npm run build` works locally
- Verify all files are committed to git
- Check Node.js version compatibility

### Music won't play
- Verify `public/music/background-music.mp3` exists
- Use NEXT_PUBLIC_ prefix for public variables
- Check CORS headers

### Images not loading
- Use absolute URLs or files in `public/` folder
- Verify image URL accessibility
- Check image optimization settings

## Alternative Deployment Platforms

### Netlify

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build the project
npm run build

# Deploy
netlify deploy --prod --dir=.next
```

### Docker (Self-hosted)

1. Create `Dockerfile`:
```dockerfile
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY --from=builder /app/.next ./.next
EXPOSE 3000
CMD ["npm", "start"]
```

2. Build and run:
```bash
docker build -t birthday-website .
docker run -p 3000:3000 birthday-website
```

### AWS S3 + CloudFront

```bash
# Build
npm run build

# Upload to S3
aws s3 sync .next s3://your-bucket-name/

# Create CloudFront distribution pointing to S3
```

### Railway.app

1. Connect GitHub repository
2. Select `birthday-gift-website` project
3. Set Node.js version to 20
4. Deploy automatically

### Fly.io

```bash
# Install Fly CLI
curl -L https://fly.io/install.sh | sh

# Launch
fly launch

# Deploy
fly deploy
```

## Pre-deployment Checklist

- [ ] Personalize all text content
- [ ] Add your memories/photos
- [ ] Add background music to `public/music/`
- [ ] Test locally: `npm run dev`
- [ ] Run build locally: `npm run build`
- [ ] Test production build: `npm start`
- [ ] Check all links work
- [ ] Test on mobile device
- [ ] Verify music plays properly
- [ ] Check all images load correctly
- [ ] Update favicon (optional)
- [ ] Update metadata in `layout.tsx`

## Post-deployment

### Monitor Performance
- Use Vercel Analytics
- Check Core Web Vitals
- Monitor error logs

### Updates
- Push changes to GitHub
- Vercel auto-deploys
- No manual deployment needed

### Analytics
- Enable Vercel Web Analytics
- Track pageviews and interactions
- Monitor user engagement

## SEO Optimization

1. Update metadata in `src/app/layout.tsx`
2. Add Open Graph tags:
```typescript
export const metadata: Metadata = {
  title: 'Happy Birthday | Special Gift',
  description: 'An elegant birthday gift experience',
  openGraph: {
    type: 'website',
    url: 'https://your-domain.com',
    title: 'Happy Birthday',
    description: 'An elegant birthday gift experience',
    images: [
      {
        url: 'https://your-domain.com/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
  },
};
```

3. Add schema.org structured data if needed

## Performance Optimization

### Image Optimization
- Use `next/image` component
- Specify dimensions
- Use WebP format when possible
- Compress before uploading

### Code Splitting
- Lazy load sections
- Use dynamic imports for large components

### Caching
- Set appropriate cache headers
- Use Vercel edge caching
- Cache images for 1 year

### Monitoring
```bash
# Analyze bundle size
npm run build
```

## Cost Considerations

- **Vercel**: Free tier includes generous limits
- **Music files**: Keep under 10MB
- **Images**: Optimize to reduce bandwidth
- **Domain**: Usually $10-15/year

## Security

1. Keep dependencies updated:
```bash
npm audit
npm update
```

2. Use HTTPS (automatic with Vercel)
3. Add security headers in `next.config.js`
4. Don't commit sensitive data

## Maintenance

### Monthly
- Check for security updates
- Monitor error logs
- Review analytics

### Quarterly  
- Update dependencies
- Test functionality
- Backup content

## Support Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion)

---

Your birthday website is now live! 🎉

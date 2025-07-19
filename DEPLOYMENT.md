# GoBacolod - Vercel Deployment

## Quick Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/gobacolod)

## Prerequisites

- Node.js 18+ 
- npm or yarn
- Vercel account

## Environment Variables

Create a `.env.local` file in the root directory:

```bash
NEXT_PUBLIC_APP_NAME="GoBacolod"
NEXT_PUBLIC_APP_URL="https://your-domain.vercel.app"
NEXT_PUBLIC_APP_DESCRIPTION="Navigate Bacolod with AI-powered route suggestions and real-time e-jeepney information"
```

## Local Development

1. Clone the repository
2. Install dependencies: `npm install`
3. Copy environment variables: `cp .env.example .env.local`
4. Run development server: `npm run dev`
5. Open [http://localhost:3000](http://localhost:3000)

## Deployment

### Automatic Deployment (Recommended)

1. Push to GitHub/GitLab
2. Connect repository to Vercel
3. Deploy automatically on every push

### Manual Deployment

```bash
npm install -g vercel
vercel login
vercel --prod
```

## Performance Optimizations

- **Image Optimization**: Next.js Image component with Vercel's optimization
- **Code Splitting**: Automatic route-based code splitting
- **Compression**: Gzip compression enabled
- **Caching**: Optimized caching headers
- **Bundle Analysis**: Use `npm run analyze` to analyze bundle size

## Vercel Configuration

The project includes `vercel.json` with:
- Security headers
- CORS configuration for API routes
- Custom rewrites for map functionality
- Function timeout settings

## Monitoring

- Built-in Vercel Analytics
- Real User Monitoring (RUM)
- Core Web Vitals tracking

## Support

For deployment issues, check:
1. Vercel deployment logs
2. Build output in Vercel dashboard
3. Environment variables configuration

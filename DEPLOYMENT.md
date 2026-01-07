# Deployment Guide

This guide will help you deploy your B2B Customer Service Dashboard to Vercel or other hosting platforms.

## Quick Deploy to Vercel

### Option 1: Deploy via Vercel CLI

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Navigate to your project directory:
```bash
cd b2b-customer-service
```

3. Run the deploy command:
```bash
vercel
```

4. Follow the prompts to complete deployment

### Option 2: Deploy via Vercel Dashboard

1. Push your code to GitHub, GitLab, or Bitbucket

2. Go to [Vercel](https://vercel.com) and sign in

3. Click "Add New Project"

4. Import your repository

5. Vercel will automatically detect Next.js and configure settings

6. Click "Deploy"

## Important: Add Your Excel Data

After deployment, you need to add your Excel data file:

### Method 1: Include in Git Repository

1. Ensure your Excel file is in `public/data/B2B_Customer_Service_Datav2__-_Data_Table.xlsx`

2. Commit and push:
```bash
git add public/data/B2B_Customer_Service_Datav2__-_Data_Table.xlsx
git commit -m "Add customer service data"
git push
```

3. Vercel will automatically redeploy with the data

### Method 2: Generate Sample Data

If you don't have real data yet, generate sample data before deploying:

```bash
npm run generate-data
git add public/data/
git commit -m "Add generated sample data"
git push
```

## Environment Variables

No environment variables are required for basic functionality. If you need to add custom configuration:

1. In Vercel dashboard, go to your project settings
2. Navigate to "Environment Variables"
3. Add your variables

## Build Settings (Automatic)

Vercel automatically detects these settings, but you can verify:

- **Framework Preset**: Next.js
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`

## Domain Configuration

After deployment:

1. Go to your project in Vercel dashboard
2. Navigate to "Settings" > "Domains"
3. Add your custom domain (optional)

## Performance Optimization Checklist

- ✅ Production build uses code splitting
- ✅ Static assets are cached with long TTLs
- ✅ Images are optimized via Next.js Image component
- ✅ Charts are rendered client-side for interactivity
- ✅ Data is loaded once and filtered client-side
- ✅ Pagination reduces DOM size for large datasets

## Troubleshooting

### Build Fails

If the build fails:

1. Check that all dependencies are installed:
```bash
npm install
```

2. Try building locally first:
```bash
npm run build
```

3. Check for TypeScript errors:
```bash
npx tsc --noEmit
```

### Missing Data

If the dashboard shows no data:

1. Verify the Excel file exists at `public/data/B2B_Customer_Service_Datav2__-_Data_Table.xlsx`

2. Check the browser console for errors

3. Ensure the Excel file has the correct column headers

### Slow Performance

For large datasets (10,000+ records):

1. The app already implements pagination (50 records per page)
2. Filtering is optimized with React.useMemo
3. Consider increasing pagination size if needed in [DetailsTable.tsx](components/DetailsTable.tsx#L15)

## Alternative Hosting Platforms

### Netlify

1. Connect your Git repository
2. Build command: `npm run build`
3. Publish directory: `.next`
4. Deploy

### Railway

1. Connect your GitHub repository
2. Railway will auto-detect Next.js
3. Deploy

### AWS Amplify

1. Connect your repository
2. Build settings:
   - Build command: `npm run build`
   - Base directory: (leave empty)
   - Output directory: `.next`
3. Deploy

## Post-Deployment Testing

After deployment, verify:

1. ✅ Dashboard loads and displays metrics
2. ✅ Charts render correctly
3. ✅ Filters work and update metrics in real-time
4. ✅ Details table is sortable and paginated
5. ✅ View toggle switches between Dashboard and Details
6. ✅ Responsive design works on mobile devices

## Monitoring

### Vercel Analytics

Enable Vercel Analytics for insights:

1. Go to your project in Vercel
2. Navigate to "Analytics" tab
3. Enable Web Analytics

### Performance Monitoring

Check Core Web Vitals:
- Largest Contentful Paint (LCP)
- First Input Delay (FID)
- Cumulative Layout Shift (CLS)

## Continuous Deployment

Once connected to Git:

1. Any push to your main branch triggers a deployment
2. Pull requests create preview deployments
3. All deployments are automatic

## Support

If you encounter issues:

1. Check Vercel deployment logs
2. Review the [README.md](README.md) for setup instructions
3. Open an issue on GitHub

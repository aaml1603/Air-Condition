# Vercel Deployment Guide

## Common 404 Error Causes & Solutions

### 1. Root Directory Configuration
- Make sure the **Root Directory** in Vercel project settings is set to the project root
- Check in Vercel dashboard under Settings → General → Root Directory

### 2. Build Settings
Vercel should auto-detect Next.js. Verify:
- **Framework Preset**: Next.js
- **Build Command**: `npm run build` (or leave empty for auto-detection)
- **Output Directory**: `.next` (or leave empty for auto-detection)
- **Install Command**: `npm install` (or leave empty for auto-detection)

### 3. Node.js Version
- Node.js version is set in package.json (18.x or 20.x recommended)

### 4. File Structure
Ensure your project structure matches:
```
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
├── lib/
├── package.json
├── next.config.js
├── tailwind.config.js
└── postcss.config.js
```

### 5. Deployment Steps
1. Push your code to GitHub/GitLab/Bitbucket
2. Connect the repository to Vercel
3. Vercel should auto-detect Next.js
4. Click Deploy

### 6. Check Build Logs
- Go to your Vercel project dashboard
- Check the "Deployments" tab
- Click on the failed deployment
- Review the build logs for any errors

## Quick Fixes to Try:
1. **Redeploy**: Sometimes a simple redeploy fixes the issue
2. **Clear Build Cache**: In Vercel dashboard → Settings → General → Clear Build Cache
3. **Check Domain**: Make sure your custom domain (if any) is properly configured
4. **Check Vercel URL**: Try accessing the default Vercel deployment URL

## If Still Getting 404:
- Check Vercel deployment logs for specific errors
- Verify that `app/page.tsx` exists and exports a default component
- Ensure `app/layout.tsx` exists and is properly configured
- Check that all dependencies are in `package.json`

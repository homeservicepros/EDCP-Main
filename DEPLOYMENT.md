
# Netlify Deployment Guide

## Prerequisites

- Node.js 18+ installed
- Git repository (GitHub, GitLab, or Bitbucket)
- Netlify account (free at [netlify.com](https://netlify.com))

## Step-by-Step Deployment

### Method 1: Netlify CLI (Fastest for Testing)

1. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Test build locally**
   ```bash
   npm run build
   ```
   This creates a `dist` folder with your production files.

4. **Login to Netlify**
   ```bash
   netlify login
   ```
   This opens a browser window for authentication.

5. **Initialize Netlify site**
   ```bash
   netlify init
   ```
   Follow the prompts:
   - Create & configure a new site
   - Choose your team
   - Enter a site name (optional)
   - Build command: `npm run build`
   - Directory to deploy: `dist`

6. **Deploy to production**
   ```bash
   netlify deploy --prod
   ```

### Method 2: Continuous Deployment (Recommended for Production)

1. **Push code to Git repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_REPO_URL
   git push -u origin main
   ```

2. **Connect to Netlify**
   - Go to [app.netlify.com](https://app.netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Choose your Git provider (GitHub/GitLab/Bitbucket)
   - Authorize Netlify to access your repositories
   - Select your repository

3. **Configure build settings**
   ```
   Base directory: (leave empty)
   Build command: npm run build
   Publish directory: dist
   ```

4. **Deploy**
   - Click "Deploy site"
   - Netlify will automatically build and deploy
   - Every push to main branch will trigger a new deployment

### Method 3: Manual Deploy (Drag & Drop)

1. **Build the project**
   ```bash
   npm install
   npm run build
   ```

2. **Deploy the dist folder**
   - Go to [app.netlify.com/drop](https://app.netlify.com/drop)
   - Drag and drop the `dist` folder
   - Your site is live!

## Post-Deployment Configuration

### Custom Domain Setup

1. Go to Site settings → Domain management
2. Click "Add custom domain"
3. Enter your domain name
4. Configure DNS:
   - Add A record: `75.2.60.5`
   - Or CNAME: `your-site.netlify.app`
5. Enable HTTPS (automatic with Let's Encrypt)

### Environment Variables

1. Go to Site settings → Environment variables
2. Add your variables:
   ```
   VITE_PHONE_NUMBER=8003271709
   VITE_EMAIL=admin@emergencydraincleaningpros.com
   ```
3. Redeploy for changes to take effect

### Custom Redirects

The `netlify.toml` file includes SPA redirects. To add more:

```toml
[[redirects]]
  from = "/old-page"
  to = "/new-page"
  status = 301
```

### Build Hooks

Create webhook URLs for external triggers:
1. Go to Site settings → Build & deploy → Build hooks
2. Click "Add build hook"
3. Name it and save
4. Use the URL to trigger builds programmatically

## Performance Optimization

### Enable Asset Optimization

1. Go to Site settings → Build & deploy → Post processing
2. Enable:
   - Bundle CSS
   - Minify CSS
   - Minify JS
   - Compress images
   - Pretty URLs

### Configure Caching Headers

Already configured in `netlify.toml`:
```toml
[[headers]]
  for = "/assets/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"
```

## Troubleshooting

### Build Fails

- Check Node.js version: Should be 18+
- Clear cache: `netlify build --clear-cache`
- Check build logs in Netlify dashboard

### 404 Errors on Page Refresh

- Ensure `netlify.toml` includes SPA redirect:
  ```toml
  [[redirects]]
    from = "/*"
    to = "/index.html"
    status = 200
  ```

### Assets Not Loading

- Verify `base` path in `vite.config.ts`
- Check asset paths are relative
- Clear browser cache

### Environment Variables Not Working

- Variables must start with `VITE_`
- Redeploy after adding variables
- Access with `import.meta.env.VITE_YOUR_VAR`

## Advanced Features

### Deploy Previews

- Every pull request gets a preview URL
- Test changes before merging
- Enable in Site settings → Build & deploy → Deploy contexts

### Split Testing

1. Go to Split Testing in dashboard
2. Create branches for variants
3. Configure traffic split
4. Analyze results

### Forms (Contact Form)

Add Netlify Forms support:
```html
<form name="contact" method="POST" data-netlify="true">
  <input type="hidden" name="form-name" value="contact" />
  <!-- your form fields -->
</form>
```

### Functions (Serverless)

Create `netlify/functions/` directory:
```javascript
// netlify/functions/hello.js
exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Hello World" })
  };
};
```

## Monitoring & Analytics

### Netlify Analytics

1. Go to Site overview → Enable analytics
2. $9/month for detailed insights
3. View:
   - Page views
   - Unique visitors
   - Top pages
   - Not found pages

### Third-party Analytics

Add Google Analytics in `index.html`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
```

## CI/CD Pipeline

The deployment flow:
1. Push code to repository
2. Netlify detects changes
3. Runs `npm install`
4. Runs `npm run build`
5. Deploys `dist` folder
6. Invalidates CDN cache
7. Site is live!

## Cost & Limits (Free Tier)

- 100 GB bandwidth/month
- 300 build minutes/month
- 1 concurrent build
- Unlimited sites
- HTTPS included
- Deploy previews included

## Support Resources

- [Netlify Documentation](https://docs.netlify.com/)
- [Netlify Community](https://answers.netlify.com/)
- [Netlify Status](https://www.netlifystatus.com/)
- [Support](https://www.netlify.com/support/)

## Quick Commands Reference

```bash
# Install CLI
npm install -g netlify-cli

# Login
netlify login

# Initialize site
netlify init

# Deploy draft
netlify deploy

# Deploy production
netlify deploy --prod

# Open site in browser
netlify open

# Open admin dashboard
netlify open:admin

# View site logs
netlify watch

# Link local repo to existing site
netlify link

# Check build status
netlify status
```

---

**Need Help?** Contact your development team or visit [Netlify Support](https://www.netlify.com/support/)

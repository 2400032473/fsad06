# Deployment & Setup Guide

## Local Development Setup

### Prerequisites
- Node.js 16.x or higher
- npm 8.x or higher (or yarn)
- Git for version control
- Modern web browser

### Step 1: Install Node.js

**Windows**
1. Download from [nodejs.org](https://nodejs.org)
2. Run installer and follow prompts
3. Accept all default options
4. Verify installation:
```bash
node --version
npm --version
```

**macOS**
```bash
# Using Homebrew
brew install node
```

**Linux (Ubuntu/Debian)**
```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
```

### Step 2: Clone/Setup Project

```bash
# Navigate to project directory
cd project6

# Install dependencies
npm install --legacy-peer-deps

# Fix vulnerabilities
npm audit fix --force
```

### Step 3: Start Development

```bash
npm run dev
```

Server runs at: `http://localhost:5173`

## Building for Production

### Step 1: Build the Project

```bash
npm run build
```

This creates an optimized `dist/` folder with:
- Minified JavaScript
- Optimized CSS
- Compressed images
- Source maps for debugging

### Step 2: Preview Production Build

```bash
npm run preview
```

### Step 3: Deploy to Production

Choose your deployment platform:

## Deployment Platforms

### 1. Vercel (Recommended)

**Easiest deployment option**

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Configure:
# - Framework: Vite
# - Output directory: dist
# - Install command: npm install --legacy-peer-deps
# - Build command: npm run build
```

**Web Setup:**
1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub account
3. Connect repository
4. Auto-deploys on push to main

### 2. Netlify

**Easy alternative**

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod

# Configure:
# - Build command: npm run build
# - Publish directory: dist
# - Install command: npm install --legacy-peer-deps
```

**Web Setup:**
1. Go to [netlify.com](https://netlify.com)
2. Sign up with GitHub
3. Connect repository
4. Configure build settings

### 3. GitHub Pages

**Free hosting via GitHub**

```bash
# Add to package.json
"homepage": "https://YOUR_USERNAME.github.io/project6"
```

```bash
npm run build
npm install --save-dev gh-pages
```

Add to package.json scripts:
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

Deploy:
```bash
npm run deploy
```

### 4. AWS S3 + CloudFront

**Professional approach**

1. Create S3 bucket
2. Upload `dist/` contents
3. Create CloudFront distribution
4. Configure routing

```bash
# Install AWS CLI
aws configure

# Deploy
aws s3 sync dist/ s3://your-bucket-name/
```

### 5. Docker Deployment

**Containerized deployment**

Create `Dockerfile`:
```dockerfile
FROM node:18-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install --legacy-peer-deps
COPY . .
RUN npm run build

FROM node:18-alpine
WORKDIR /app
RUN npm install -g serve
COPY --from=build /app/dist ./dist
EXPOSE 3000
CMD ["serve", "-s", "dist", "-l", "3000"]
```

Build & deploy:
```bash
docker build -t mutual-funds-app .
docker run -p 3000:80 mutual-funds-app
```

## Environment Configuration

### Environment Variables

Create `.env` file:
```env
# Development
VITE_API_URL=http://localhost:3001
VITE_APP_NAME=Mutual Funds Platform

# Production (set in deployment platform)
VITE_API_URL=https://api.yourdomain.com
```

Access in code:
```javascript
const apiUrl = import.meta.env.VITE_API_URL;
```

## CI/CD Pipeline

### GitHub Actions Example

Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: 18
      
      - name: Install
        run: npm install --legacy-peer-deps
      
      - name: Build
        run: npm run build
      
      - name: Deploy
        run: |
          # Your deployment command
          npm run deploy
```

## Server Configuration

### Nginx Configuration

```nginx
server {
    listen 80;
    server_name yourdomain.com;

    root /var/www/mutual-funds/dist;
    index index.html;

    location / {
        try_files $uri /index.html;
    }

    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 30d;
        add_header Cache-Control "public, immutable";
    }

    # Redirect http to https
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name yourdomain.com;

    ssl_certificate /etc/letsencrypt/live/yourdomain.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/yourdomain.com/privkey.pem;

    root /var/www/mutual-funds/dist;
    index index.html;

    location / {
        try_files $uri /index.html;
    }
}
```

### Apache Configuration

```apache
<VirtualHost *:80>
    ServerName yourdomain.com
    DocumentRoot /var/www/mutual-funds/dist

    <Directory /var/www/mutual-funds/dist>
        Options -MultiViews
        RewriteEngine On
        RewriteCond %{REQUEST_FILENAME} !-f
        RewriteRule ^ index.html [QSA,L]
    </Directory>

    # Cache static assets
    <FilesMatch "\.(jpg|jpeg|png|gif|ico|css|js|svg|woff|woff2|ttf|eot)$">
        Header set Cache-Control "max-age=31536000, public"
    </FilesMatch>
</VirtualHost>
```

## Post-Deployment Checklist

- [ ] Test app in production environment
- [ ] Verify all API endpoints working
- [ ] Check mobile responsiveness
- [ ] Test authentication flows
- [ ] Monitor performance metrics
- [ ] Set up error tracking (Sentry)
- [ ] Configure analytics (Google Analytics)
- [ ] Enable HTTPS/SSL
- [ ] Set up CDN for assets
- [ ] Configure monitoring alerts
- [ ] Test disaster recovery
- [ ] Set up backups

## Performance Optimization

### Image Optimization
```bash
# Install image optimizer
npm install --save-dev imagemin imagemin-mozjpeg imagemin-pngquant
```

### Code Splitting
Already configured in Vite:
```javascript
// Automatic for route components
const AdminDashboard = lazy(() => import('./pages/roles/AdminDashboard'));
```

### Caching Strategy
- Static assets: 30 days
- HTML: No cache (revalidate)
- API responses: 5 minutes

## Monitoring & Analytics

### Google Analytics Setup

Add to `index.html`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

### Sentry Error Tracking

```bash
npm install @sentry/react
```

```javascript
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "YOUR_SENTRY_DSN",
  environment: process.env.NODE_ENV,
});
```

## SSL/HTTPS Setup

### Using Let's Encrypt (Free)

```bash
# Install certbot
sudo apt-get install certbot python3-certbot-nginx

# Generate certificate
sudo certbot certonly --nginx -d yourdomain.com

# Auto-renewal
sudo systemctl enable certbot.timer
```

## Troubleshooting

### Port Already in Use
```bash
# Windows
netstat -ano | findstr :5173
taskkill /PID <PID> /F

# macOS/Linux
lsof -ti:5173 | xargs kill -9
```

### Dependencies Issues
```bash
# Clear cache
rm -rf node_modules package-lock.json

# Reinstall
npm install --legacy-peer-deps
```

### Build Fails
```bash
# Check for errors
npm run build -- --debug

# Try different Node version
nvm use 18
```

### Performance Issues
1. Check bundle size: `npm run build -- --analyze`
2. Enable compression in server
3. Set up CDN for assets
4. Optimize database queries

## Maintenance

### Regular Updates
```bash
# Check outdated packages
npm outdated

# Update safely
npm update

# Major updates (test carefully)
npm install package@latest
```

### Database Backups
- Automated daily backups
- Monthly archive storage
- Test restore procedures

### Log Rotation
- Application logs: Daily
- Server logs: Weekly
- Archive old logs quarterly

## Support & Resources

- **Documentation**: See README_FULL.md
- **Quick Start**: See QUICK_START.md
- **Technical Details**: See TECHNICAL_DOCS.md
- **Official Docs**: 
  - Vite: https://vitejs.dev
  - React: https://react.dev
  - React Router: https://reactrouter.com

---

**Version**: 1.0.0
**Last Updated**: February 24, 2024

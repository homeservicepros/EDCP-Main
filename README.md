
# Emergency Drain Cleaning Pros - Landing Page

A modern, responsive landing page for emergency drain cleaning services built with React and TypeScript.

## 🚀 Quick Deploy to Netlify

### Option 1: Deploy via Netlify CLI (Recommended)

1. **Install Netlify CLI globally**
   ```bash
   npm install -g netlify-cli
   ```

2. **Install project dependencies**
   ```bash
   npm install
   ```

3. **Build the project locally (optional, to test)**
   ```bash
   npm run build
   ```

4. **Login to Netlify**
   ```bash
   netlify login
   ```

5. **Deploy to Netlify**
   ```bash
   netlify deploy --prod
   ```
   - When prompted, choose "Create & configure a new site"
   - Enter a site name (or press enter for random name)
   - The build folder is: `dist`

### Option 2: Deploy via Netlify Dashboard

1. **Prepare your repository**
   - Push your code to GitHub, GitLab, or Bitbucket
   
2. **Go to Netlify Dashboard**
   - Visit [https://app.netlify.com](https://app.netlify.com)
   - Click "Add new site" → "Import an existing project"

3. **Connect your repository**
   - Choose your Git provider
   - Select your repository
   
4. **Configure build settings**
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Click "Deploy site"

### Option 3: Drag & Drop Deploy

1. **Build the project locally**
   ```bash
   npm install
   npm run build
   ```

2. **Deploy to Netlify**
   - Go to [https://app.netlify.com/drop](https://app.netlify.com/drop)
   - Drag and drop the `dist` folder

## 📦 Project Structure

```
├── index.html          # Entry HTML file
├── package.json        # Dependencies and scripts
├── vite.config.ts      # Vite configuration
├── netlify.toml        # Netlify deployment configuration
├── tsconfig.json       # TypeScript configuration
└── src/
    ├── index.tsx       # Application entry point
    ├── App.tsx         # Main app component
    ├── App.css         # Global styles
    ├── utils/
    │   └── persistence.ts
    └── components/     # All React components
```

## 🛠️ Local Development

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start development server**
   ```bash
   npm run dev
   ```
   The site will open at `http://localhost:3000`

3. **Build for production**
   ```bash
   npm run build
   ```

4. **Preview production build**
   ```bash
   npm run preview
   ```

## 🌐 Environment Variables (Optional)

If you need environment variables, create a `.env` file:

```env
VITE_API_URL=your_api_url_here
VITE_PHONE_NUMBER=8003271709
```

Access them in your code with `import.meta.env.VITE_API_URL`

## 🔧 Custom Domain Setup

After deployment on Netlify:

1. Go to Site settings → Domain management
2. Click "Add custom domain"
3. Follow the instructions to configure your DNS

## 📱 Features

- ⚡ **24/7 Emergency Service** - Always available for drain emergencies
- 🎨 **Modern Design** - Stunning gradient design with glassmorphism effects
- 📱 **Fully Responsive** - Perfect on all devices
- 🚀 **Fast Performance** - Optimized build with code splitting
- ♿ **Accessible** - WCAG compliant with semantic HTML
- 🔍 **SEO Optimized** - Meta tags and structured data

## 🎯 Service Areas

- Rocky River, OH
- Bay Village, OH
- Avon, OH
- North Olmsted, OH
- West Park, OH
- Fairview Park, OH
- Miami, FL
- Lakeland, FL
- Marietta, GA
- Rochester, NY

## 📞 Contact

- **Phone**: (800) 327-1709
- **Email**: admin@emergencydraincleaningpros.com

## 📄 License

All rights reserved © 2024 Emergency Drain Cleaning Pros

## 🤝 Support

For deployment issues or questions, contact your development team or open an issue in your repository.

---

**Built with ❤️ using React, TypeScript, and Vite**

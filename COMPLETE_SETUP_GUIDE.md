# 📚 Complete Personal Blog Setup Guide

This is your comprehensive guide to setting up, running, and deploying your personal blog with optional CMS integration.

---

## 🎯 Table of Contents

1. **Running Locally**
2. **Deploying to GitHub**
3. **Publishing to Internet (Vercel)**
4. **Adding a CMS (Optional but Recommended)**
5. **Customizing Your Blog**
6. **Troubleshooting**

---

# 1️⃣ Running Your Blog Locally

Your blog is already set up and ready to run on your computer!

## Prerequisites

- **Node.js** installed (download from [nodejs.org](https://nodejs.org/))
- A terminal/command prompt
- A code editor (VS Code recommended, free)

## Steps

### Step 1: Open Your Project
1. Open VS Code or your terminal
2. Navigate to your blog folder:
   ```bash
   cd path/to/your/blog-folder
   ```

### Step 2: Install Dependencies (Only First Time!)
```bash
npm install
```
This downloads all the packages your blog needs.

### Step 3: Start Development Server
```bash
npm run dev
```

### Step 4: Open in Browser
The terminal will show something like:
```
VITE v7.2.4  ready in 234 ms

➜  Local:   http://localhost:5173/
```

**Click that link or copy-paste it into your browser!** 🎉

### Step 5: Make Changes & See Them Live
- Edit files in `src/`
- Save (Ctrl+S)
- Browser auto-refreshes
- No need to restart!

---

# 2️⃣ Version Control with Git & GitHub

Once your blog is working locally, save it to GitHub so it's backed up and can be deployed.

## Prerequisites

- Git installed (download from [git-scm.com](https://git-scm.com/))
- GitHub account (free at [github.com](https://github.com/))

## Steps

### Step 1: Create GitHub Repository

1. Go to [github.com](https://github.com/)
2. Sign in / Sign up
3. Click **"New"** (green button)
4. Repository name: `my-personal-blog` (or your preference)
5. Description: `My personal blog with articles and thoughts`
6. Choose **Public** (so it's shareable) or Private
7. Click **"Create repository"**

### Step 2: Push Your Code to GitHub

In your terminal (in your blog folder):

```bash
# Initialize git (one time)
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial blog setup with all features"

# Add GitHub as remote
# (Replace YOUR_USERNAME and YOUR_REPO_NAME)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Verify on GitHub

1. Go to your GitHub repository URL
2. You should see all your blog files there! ✅

Now whenever you make changes:
```bash
git add .
git commit -m "Your change description"
git push
```

---

# 3️⃣ Deploy to Vercel (Get a Live URL!)

Vercel is the easiest way to host your React blog. It's free, fast, and automatically rebuilds when you push to GitHub.

## Prerequisites

- GitHub account (from Step 2)
- Vercel account (free)

## Steps

### Step 1: Create Vercel Account

1. Go to [vercel.com](https://vercel.com/)
2. Click **"Sign Up"**
3. Choose **"Continue with GitHub"**
4. Authorize Vercel to access your GitHub

### Step 2: Deploy Your Blog

1. You'll see a page to create a new project
2. Click **"Import Git Repository"**
3. Find your blog repository (`my-personal-blog`)
4. Click **"Import"**
5. Accept default settings (Vercel auto-detects it's a React app)
6. Click **"Deploy"**

**Wait 1-2 minutes...** ✨

### Step 3: Get Your Live URL

After deployment, you'll see a screen with your live URL:
```
🎉 Congratulations! Your blog is live at:
https://my-personal-blog.vercel.app
```

**Share this URL with the world!** 🚀

---

## Auto-Deploy on Every Push

The beautiful part: whenever you push code to GitHub, Vercel automatically rebuilds your website! No manual steps needed.

```
You edit code → git push → Vercel auto-rebuilds → Website updates
```

---

# 4️⃣ Add a CMS for Easy Content Publishing

Right now, to add blog posts, you edit the TypeScript files. **A CMS lets you publish without coding!**

## Choose Your CMS

### Option A: Airtable (⭐ Recommended)
**Setup Time:** 5 minutes  
**Difficulty:** Super easy (it's a spreadsheet)  
**Best For:** Anyone who wants to start publishing TODAY

👉 **Full guide:** Open `AIRTABLE_SETUP_GUIDE.md`

**Quick overview:**
1. Create free Airtable account
2. Add a table with blog post columns
3. Copy API key
4. Add to `.env.local`
5. Update your Blog component
6. **Done!** Publish posts by filling in spreadsheet rows

### Option B: Sanity (Professional)
**Setup Time:** 30 minutes  
**Difficulty:** Medium (requires some technical knowledge)  
**Best For:** Professional blogs, teams

👉 **Full guide:** Open `SANITY_SETUP_GUIDE.md`

**Quick overview:**
1. Create free Sanity account
2. Set up content schema (like database)
3. Copy project ID
4. Add to `.env.local`
5. Update your Blog component
6. **Done!** Publish posts in Sanity's beautiful editor

### Option C: Keep Using Local Files
**Setup Time:** Already done!  
**Difficulty:** Medium (edit code)  
**Best For:** Developers, Git-first workflow

**No setup needed!** Edit `src/data/posts.ts` to add posts.

## My Recommendation

**Start with Airtable** because:
- ✅ 5-minute setup
- ✅ No coding needed
- ✅ Anyone can publish
- ✅ Easy to switch to Sanity later
- ✅ Free forever

---

# 5️⃣ Customizing Your Blog

## Change Your Name & Bio

1. Open `src/data/about.ts`
2. Edit the fields:
   ```typescript
   export const aboutData = {
     name: "Your Name",
     bio: "Your bio here",
     // ... other fields
   }
   ```
3. Save → Website updates automatically! 🎉

## Add Your First Blog Post

### If Using Local Files:

1. Open `src/data/posts.ts`
2. Look for the `posts` array
3. Copy one of the existing posts and modify:
   ```typescript
   {
     id: 7, // next number
     title: "My First Post",
     slug: "my-first-post",
     excerpt: "Short preview...",
     content: "Full article content...",
     category: "Technology",
     author: "Your Name",
     date: "2024-01-20",
     tags: ["tag1", "tag2"],
     coverImage: "https://example.com/image.jpg" // optional
   }
   ```
4. Save → Post appears on your blog!

### If Using Airtable/Sanity:

Just follow their respective setup guides above.

## Customize Colors

1. Open `tailwind.config.js`
2. Look for the `colors` section
3. Change the color codes:
   ```javascript
   extend: {
     colors: {
       amber: {
         900: "#change-this", // your color
         // ...
       }
     }
   }
   ```
4. Save → Your blog's colors change!

## Customize Header/Navigation

1. Open `src/components/Header.tsx`
2. Modify the navigation links
3. Change the logo/branding
4. Save → Changes appear instantly!

---

# 6️⃣ Troubleshooting

## "npm run dev" doesn't work

**Problem:** `Command not found`

**Solution:**
1. Make sure Node.js is installed: `node --version`
2. Make sure you're in the blog folder
3. Try: `npm install` first, then `npm run dev`

## Website doesn't show posts

**Problem:** Blog page is empty

**Solution:**
1. Check `src/data/posts.ts` has posts
2. Hard refresh browser (Ctrl+Shift+R)
3. Check browser console for errors (F12)

## Vercel deployment fails

**Problem:** Red X on Vercel dashboard

**Solution:**
1. Check that `package.json` exists
2. Check that `vite.config.ts` exists
3. Try: `npm run build` locally (should succeed)
4. Push to GitHub again: `git push`

## Environment variables not working

**Problem:** "Cannot read process.env"

**Solution:**
1. Create `.env.local` in project root
2. Restart `npm run dev`
3. Variables must start with `VITE_` (Vite requirement)
4. For Vercel: Settings → Environment Variables

## "Port 5173 already in use"

**Problem:** `EADDRINUSE` error

**Solution:**
```bash
# Find and kill process using port 5173
# On Mac/Linux:
lsof -i :5173
kill -9 <PID>

# On Windows:
netstat -ano | findstr :5173
taskkill /PID <PID> /F

# Then restart
npm run dev
```

---

# 📋 Checklist: Get Your Blog Live

- [ ] Install Node.js
- [ ] Clone/download your blog code
- [ ] Run `npm install`
- [ ] Run `npm run dev`
- [ ] View at http://localhost:5173
- [ ] Customize `src/data/about.ts`
- [ ] Add blog posts to `src/data/posts.ts`
- [ ] Create GitHub repository
- [ ] Push code to GitHub (`git push`)
- [ ] Create Vercel account
- [ ] Deploy blog to Vercel
- [ ] Get live URL (yourname.vercel.app)
- [ ] (Optional) Set up Airtable/Sanity CMS
- [ ] (Optional) Custom domain name

---

# 🎯 Your Blog Journey

```
Day 1:
├── Run locally (npm run dev) ✅
├── Customize about page ✅
└── Add first blog post ✅

Day 2:
├── Push to GitHub ✅
├── Deploy to Vercel ✅
└── Get live URL ✅

Day 3+:
├── (Optional) Set up Airtable ✅
├── Publish new posts ✅
├── Share with friends ✅
└── Keep writing! ✅
```

---

# 📞 Getting Help

### Vercel Issues
- Docs: https://vercel.com/docs
- Support: https://vercel.com/support

### Airtable Issues
- Docs: https://airtable.com/developers/web
- API Browser: https://airtable.com/api

### Sanity Issues
- Docs: https://www.sanity.io/docs
- Community: https://www.sanity.io/community

### General Development
- React: https://react.dev
- Tailwind CSS: https://tailwindcss.com
- Vite: https://vitejs.dev

---

# 🚀 Next Steps

1. **Follow the Checklist above**
2. **Read QUICKSTART.md for faster setup**
3. **Choose a CMS** (Airtable recommended)
4. **Start writing!** ✍️

---

**You've got this!** Your blog is going to be amazing! 🎉

---

Last Updated: January 2024  
Questions? Read the other guides or check the documentation links above!

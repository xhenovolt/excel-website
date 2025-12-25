# Quick Start Guide

## 🚀 Getting Started

### 1. Start Development Server
```bash
npm run dev
```
The website will be available at: **http://localhost:3000**

### 2. Build for Production
```bash
npm run build
npm start
```

### 3. View Live Features

#### Mobile View (Recommended)
- Open DevTools (F12)
- Toggle device toolbar (Ctrl+Shift+M)
- Try bottom navigation bar
- Test slide-in mobile menu
- Try floating action button

#### Desktop View
- See standard top navigation
- Test hover effects on cards
- View desktop layouts
- Test dark mode toggle

---

## 🎯 Key Features to Test

### Navigation
- ✅ Bottom nav on mobile
- ✅ Top nav on desktop
- ✅ Slide-in menu on mobile
- ✅ Smooth scroll to sections

### Floating Action Button (FAB)
- Click the message icon in bottom-right
- Expands to show: WhatsApp, Telegram, TikTok, Instagram
- Click any to open platform

### Dark Mode
- Toggle system dark mode (Settings → Display)
- Website automatically switches themes
- Smooth color transitions

### Responsive Design
- Resize browser window
- Layouts adapt seamlessly
- Images scale properly

### SEO Features
- View page source (Ctrl+U)
- Check meta tags
- Check Open Graph tags
- Check JSON-LD schema

---

## 📝 Editing Content

### Update School Information
Edit: **`src/data/school.json`**

Change any of:
- School name
- Contact numbers
- Email address
- Academic programs
- Facilities
- Why Choose Us points
- Statistics

### Update SEO Metadata
Edit: **`src/data/seo.json`**

Change:
- Page title
- Meta description
- Keywords
- Open Graph image

**Changes auto-reload!** Just save and refresh browser.

---

## 🎨 Customizing Design

### Colors
Edit: **`src/app/globals.css`**

Available color palettes:
- `--color-primary`: Blue (trust, education)
- `--color-emerald`: Green (Islamic values)
- `--color-amber`: Gold (achievement)
- `--color-slate`: Gray (professional)

### Typography
All fonts are configured in **`src/app/layout.js`**

### Spacing & Layout
Tailwind CSS classes in components
- `px-4` = padding horizontal
- `py-8` = padding vertical
- `gap-4` = spacing between items
- `max-w-7xl` = max width

---

## 📦 Project Structure

```
src/
├── app/
│   ├── layout.js          ← Root layout + SEO
│   ├── page.js            ← Homepage
│   ├── globals.css        ← Tailwind config
│   └── api/
│       ├── school/        ← School data API
│       └── seo/           ← SEO config API
├── components/
│   ├── Navigation.js      ← Mobile/desktop nav
│   ├── FloatingActionButton.js  ← Social FAB
│   ├── Footer.js          ← Footer with contact
│   └── OptimizedImage.js  ← Image optimization
└── data/
    ├── school.json        ← All school content
    └── seo.json          ← SEO metadata
```

---

## 🔧 Dependencies Installed

- `framer-motion` - Animations & transitions
- `lucide-react` - Beautiful icons
- `tailwindcss` - Utility CSS framework
- `clsx` - Conditional CSS classes
- `tailwind-merge` - Smart Tailwind merging

---

## 📱 Mobile Testing Checklist

- [ ] Bottom navigation bar appears
- [ ] Menu button is clickable
- [ ] Floating action button appears above bottom nav
- [ ] FAB menu expands on click
- [ ] All text is readable
- [ ] Images scale properly
- [ ] CTA buttons are easy to tap
- [ ] Forms/inputs work on mobile
- [ ] No horizontal scroll needed

---

## 💾 Deployment

### Vercel (Recommended)
```bash
npm i -g vercel
vercel
```

### Other Platforms
Build files are in `.next/` directory:
```bash
npm run build
npm start
```

---

## 🐛 Troubleshooting

**Build Error?**
```bash
rm -rf .next node_modules
npm install
npm run build
```

**Development Server Won't Start?**
```bash
# Kill existing processes
lsof -i :3000
kill -9 <PID>

# Restart
npm run dev
```

**Images Not Loading?**
- Check `/public/images/` folder
- Image must exist with exact filename
- Restart dev server after adding images

---

## 📚 Additional Resources

- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind Docs**: https://tailwindcss.com/docs
- **Framer Motion**: https://www.framer.com/motion
- **Lucide Icons**: https://lucide.dev

---

## 🎓 Learn More

**To add new sections:**
1. Create component in `src/components/`
2. Add data to `src/data/school.json`
3. Import component in `src/app/page.js`
4. Fetch data from API

**To add new pages:**
1. Create folder in `src/app/` (e.g., `about/`)
2. Create `page.js` file inside
3. Add metadata in that `page.js`
4. Add navigation link

---

**Need Help?** Check the code comments in each file!

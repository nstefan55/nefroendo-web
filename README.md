# NefroEndo 2026 - Next.js Application

Modern, responsive website for NefroEndo 2026 medical conference built with Next.js 14, React, and Tailwind CSS.

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Install dependencies:**

```bash
cd src
npm install
```

2. **Run development server:**

```bash
npm run dev
```

3. **Open in browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
src/
├── app/                      # Next.js 14 App Router
│   ├── layout.tsx           # Root layout with Header/Footer
│   ├── page.tsx             # Homepage
│   ├── globals.css          # Global styles & Tailwind
│   ├── program/             # Program page
│   ├── sponzori/            # Sponsors page
│   ├── partneri/            # Partners page
│   └── registracija/        # Registration page (JotForm)
├── components/              # React components
│   ├── Header.tsx           # Navigation header
│   ├── HeroSection.tsx      # Hero with full-width image
│   ├── InfoSection.tsx      # Info cards section
│   ├── QuickLinksSection.tsx # Quick access links
│   ├── CTASection.tsx       # Call-to-action section
│   └── Footer.tsx           # Site footer
├── public/                  # Static assets
│   └── logos/              # Logo images (add your logos here)
├── package.json            # Dependencies
├── tailwind.config.js      # Tailwind configuration
└── tsconfig.json           # TypeScript configuration
```

## 🎨 Features

- ✅ **Next.js 14** with App Router
- ✅ **TypeScript** for type safety
- ✅ **Tailwind CSS** for styling
- ✅ **Responsive Design** (mobile, tablet, desktop)
- ✅ **Lucide React Icons**
- ✅ **SEO Optimized** with metadata
- ✅ **JotForm Integration** ready
- ✅ **Component-based Architecture**
- ✅ **Smooth Scrolling** navigation
- ✅ **Modern UI/UX** with cards and animations

## 🔧 Configuration

### Colors (tailwind.config.js)

```javascript
primary: '#2c5f8d'      // Main blue
accent-blue: '#0d6efd'  // CTA blue
accent-orange: '#ff6b35' // Registration button
```

### JotForm Integration

1. Create your form at [JotForm.com](https://www.jotform.com)
2. Get your Form ID or embed code
3. Update `src/app/registracija/page.tsx`:
   - Replace `YOUR_FORM_ID` with your actual form ID
   - Or use the iframe method (uncomment and update URL)

Example:

```tsx
<iframe
  src="https://form.jotform.com/240123456789"
  // ... other props
/>
```

## 📝 Customization

### Adding Real Images

1. **Hero Background Image:**

   - Add your image to `public/images/`
   - Update `HeroSection.tsx` with Next.js Image component or CSS background

2. **Partner Logos:**
   - Add logos to `public/logos/`
   - Update partner/sponsor pages with actual logo paths

### Update Content

- **Contact Info:** Edit `InfoSection.tsx` and `Footer.tsx`
- **Event Details:** Update `HeroSection.tsx`
- **Program Schedule:** Modify `app/program/page.tsx`
- **Sponsors/Partners:** Update respective page files

## 🚀 Deployment

### Build for Production

```bash
npm run build
npm start
```

### Deploy to Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or connect your GitHub repo to Vercel for automatic deployments.

### Deploy to Netlify

```bash
# Build command
npm run build

# Publish directory
.next
```

## 📱 Responsive Breakpoints

- **Mobile:** < 768px
- **Tablet:** 768px - 1024px
- **Desktop:** 1024px+

## 🎯 Pages & Routes

- `/` - Homepage with all sections
- `/program` - Conference schedule
- `/sponzori` - Sponsors showcase
- `/partneri` - Partners information
- `/registracija` - Registration form (JotForm embed)

## 🔗 Navigation

All navigation uses Next.js `<Link>` for client-side routing:

- Smooth scrolling for anchor links (#info)
- Fast page transitions
- SEO-friendly URLs

## 🛠️ Available Scripts

```bash
npm run dev      # Development server (port 3000)
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 📦 Dependencies

**Main:**

- next: ^14.2.0
- react: ^18.3.1
- react-dom: ^18.3.1
- lucide-react: ^0.344.0 (icons)
- tailwindcss: ^3.4.0

**Dev:**

- typescript: ^5
- @types/react: ^18
- eslint: ^8

## 🎨 Design System

### Typography

- **Headings:** Bold, 32-52px
- **Body:** Regular, 16px
- **Small:** 14px

### Spacing

- **Sections:** py-16 to py-20
- **Cards:** p-6 to p-8
- **Gaps:** 4-8 (1rem-2rem)

### Components

- **Buttons:** `.btn`, `.btn-primary`, `.btn-cta`
- **Cards:** `.card` with hover effects
- **Sections:** `.section`, `.section-title`

## 📄 License

This project is for NefroEndo 2026 conference.

## 🤝 Support

For questions or issues:

- Email: info@nefro.hr
- Phone: 01/ 2367-139

---

**Built with ❤️ for NefroEndo 2026**

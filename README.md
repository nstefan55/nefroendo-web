# NefroEndo 2026

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

```


## 📄 License

This project is for NefroEndo 2026 conference.

## 🤝 Support

For questions or issues:

- Email: info@nefro.hr
- Phone: 01/ 2367-139

---

**Built with ❤️ for NefroEndo 2026**
```

# Akarsh Vante — Portfolio Website

A modern, responsive portfolio website for Akarsh Chandrakant Vante, showcasing AI/ML/Data Engineering projects, skills, and professional experience.

## 🚀 Features

- **Modern Design**: Purple-to-teal gradient theme with Inter and JetBrains Mono fonts
- **Responsive**: Mobile-first design that works on all devices
- **Interactive**: Smooth scrolling, animations, and theme toggle
- **SEO Optimized**: Comprehensive meta tags and semantic HTML
- **Accessible**: ARIA labels, keyboard navigation, and high contrast ratios
- **Performance**: Lazy loading, optimized assets, and fast load times

## 📂 Project Structure

```
src/
├── components/
│   ├── Header.tsx          # Sticky navigation with theme toggle
│   ├── Hero.tsx            # Hero section with 3 style variants
│   ├── About.tsx           # About section with education & achievements
│   ├── Skills.tsx          # Skills categorized with visual bars
│   ├── Projects.tsx        # Featured projects with case studies
│   ├── InteractiveDemos.tsx # Embedded Streamlit demos
│   ├── Certificates.tsx    # Certifications and learning
│   ├── Experience.tsx      # Professional experience timeline
│   ├── Contact.tsx         # Contact form with mailto fallback
│   └── Footer.tsx          # Footer with links and social
├── data/
│   └── content.json        # Single source of truth for all content
├── pages/
│   └── Index.tsx           # Main portfolio page
├── index.css               # Design system and global styles
└── tailwind.config.ts      # Tailwind configuration

```

## 🎨 Design System

### Colors (HSL)
- **Primary**: `263 70% 54%` (Purple)
- **Primary End**: `189 81% 44%` (Teal)
- **Background**: `222 47% 11%` (Dark)
- **Surface**: `217 33% 7%` (Darker)
- **Accent**: `189 100% 50%` (Cyan)

### Typography
- **UI Font**: Inter
- **Code Font**: JetBrains Mono

### Key Classes
- `.gradient-text` - Purple-to-teal gradient text
- `.skill-chip` - Skill badge with hover effects
- `.glow-card` - Card with gradient glow on hover
- `.link-underline` - Animated underline on links

## 📝 Updating Content

All content is stored in `src/data/content.json`. Update this file to modify:

- Personal information and summary
- Education and achievements
- Skills and tools
- Projects and metrics
- Certifications
- Experience
- Contact information

### Content Structure

```json
{
  "site": {
    "title": "Portfolio title",
    "tagline": "Your tagline",
    "theme": { "colors", "fonts" },
    "contact_email": "email@example.com",
    "social": { "github", "linkedin" }
  },
  "personal": {
    "name": "Full Name",
    "role": "Job Title",
    "summary": "Professional summary"
  },
  "education": [...],
  "skills": { "categories": [...] },
  "projects": [...],
  "experience": [...],
  "certificates": [...],
  "links": { "resume_pdf", "demos", "social" }
}
```

### Mapping from Resume to content.json

| Resume Section | content.json Location | Notes |
|----------------|----------------------|-------|
| Name & Contact | `personal.name`, `site.contact_email`, `site.phone` | Direct mapping |
| Professional Summary | `personal.summary`, `site.tagline` | Condensed for tagline |
| Education | `education[]` | Array with degree, institution, dates, GPA/score |
| Skills | `skills.{category}[]` | Categorized into data_science, libraries, languages, etc. |
| Projects | `projects[]` | Full details including problem, approach, metrics, links |
| Experience | `experience[]` | Title, company, dates, highlights |
| Certifications | `certificates[]` | Name and optional link |
| Achievements | `achievements[]` | Array of achievement strings |

## 🛠️ Development

### Prerequisites
- Node.js 18+ and npm

### Setup
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Environment
- Development: `http://localhost:8080`
- Preview runs on port configured in vite.config.ts

## 🚢 Deployment

This project is configured for deployment on Lovable:

1. Click the **Publish** button in Lovable
2. Your site will be deployed automatically
3. Connect a custom domain in Project Settings if desired

Alternatively, deploy to any static hosting service:
- Vercel
- Netlify
- GitHub Pages
- Cloudflare Pages

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px
- Large: > 1400px

## ♿ Accessibility

- Semantic HTML5 elements
- ARIA labels on all interactive elements
- Keyboard navigation support
- High contrast colors (WCAG AA compliant)
- Alt text on all images
- Focus indicators on all interactive elements

## 🎯 SEO Optimizations

- Semantic HTML structure
- Meta tags (title, description, keywords)
- Open Graph tags for social sharing
- Twitter Card tags
- Canonical URL
- Descriptive alt attributes
- Structured data (JSON-LD ready)
- Clean, crawlable URLs
- Sitemap ready

## 🔄 Hero Variants

The Hero component supports 3 variants (change in `Hero.tsx`):

1. **minimal**: Simple centered layout with name and CTA
2. **narrative** (default): Two-column layout with stats card
3. **metrics-first**: Centered with prominent metrics showcase

Change variant by updating the `useState` default value in `Hero.tsx`:
```tsx
const [variant] = useState<HeroVariant>("narrative");
```

## 📊 Performance Optimizations

- Lazy loading for images
- Code splitting with React lazy
- Optimized fonts with preconnect
- Minimal external dependencies
- Tree-shaking enabled
- CSS purging in production
- Smooth scroll behavior with CSS

## 🤝 Contributing

To add new sections or features:

1. Create a new component in `src/components/`
2. Import and add to `src/pages/Index.tsx`
3. Add corresponding data to `content.json` if needed
4. Update navigation in `Header.tsx`
5. Test responsiveness on all breakpoints

## 📄 License

© 2024 Akarsh Vante. All rights reserved.

## 🔗 Links

- **Live Demo**: [Your deployed URL]
- **Resume**: [Google Drive Link](https://drive.google.com/file/d/1kSXdvjYiIU-O19ArBxo6Ybr6znZrXIAj/view)
- **GitHub**: [AkarshVante](https://github.com/AkarshVante)
- **LinkedIn**: [AkarshVante](https://linkedin.com/in/AkarshVante)

## 💡 Feature Suggestions

The `content.json` includes a list of recommended features in `extras.recommended_features` that can be implemented:

1. Live Gradio/Streamlit demo embeds
2. Notebook gallery (Colab links)
3. Performance dashboard for model metrics
4. MLOps / CI badges
5. Dataset descriptions + schema
6. Project PDF export
7. Small blog auto-generated from projects
8. Contact scheduling (Calendly integration)

---

Built with ❤️ using React, TypeScript, Tailwind CSS, and Vite on Lovable.

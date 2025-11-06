# Hero Section Copy Variations

The Hero component supports 3 different style variants. Each variant presents Akarsh's value proposition in a unique way.

## Variant 1: Minimal (Clean & Direct)

**Layout**: Centered, simple, focused on name and role

**Copy**:
- **Headline**: Akarsh Chandrakant Vante
- **Subheading**: Software Developer · AI / ML / Data Engineering
- **CTA**: "Get in Touch" + "Download Resume"

**Best for**: Professional, straightforward presentation. Ideal for recruiters who want quick access to information.

---

## Variant 2: Narrative (Storytelling — DEFAULT)

**Layout**: Two-column with stats card, conversational

**Copy**:
- **Badge**: "👋 Available for opportunities"
- **Headline**: "Hi, I'm Akarsh"
- **Tagline**: "I build reliable ML systems and scalable data platforms that turn experimentation into production."
- **Description**: Full professional summary from resume
- **Stats Card**: 
  - 200+ Problems Solved
  - 3+ Live Projects
  - 4+ Certifications

**Best for**: Engaging visitors with a personal touch while showcasing credibility through metrics. Creates immediate connection.

---

## Variant 3: Metrics-First (Results-Driven)

**Layout**: Centered with prominent impact metrics

**Copy**:
- **Headline**: "Building Production-Ready AI Systems"
- **Description**: Professional summary from resume
- **Impact Metrics** (prominently displayed):
  - 85% Processing Speed Improved
  - 60% Query Time Reduced
  - 70% Reporting Time Cut
- **CTA**: "Get in Touch" + "Download Resume"

**Best for**: Tech-savvy audience and hiring managers who want to see immediate proof of impact. Leads with measurable results.

---

## How to Change Variants

In `src/components/Hero.tsx`, line 7:

```tsx
const [variant] = useState<HeroVariant>("narrative");
```

Change `"narrative"` to:
- `"minimal"` for Variant 1
- `"narrative"` for Variant 2 (default)
- `"metrics-first"` for Variant 3

---

## Customization Tips

### For Different Audiences:

**Startups & Product Companies**: Use `"narrative"` — shows personality and versatility

**Enterprise & Consulting**: Use `"metrics-first"` — emphasizes proven impact

**Agencies & Freelance Clients**: Use `"minimal"` — clean, professional, no-nonsense

### A/B Testing Recommendations:

1. Monitor time on page for each variant
2. Track "Get in Touch" button clicks
3. Monitor resume download rates
4. Consider using different variants for different referral sources

### SEO Considerations:

All variants include the same H1 tag with "Akarsh Vante" and role keywords, ensuring consistent SEO across variants.

---

## Copy Optimization Guidelines

When editing hero copy, ensure:

1. **Clarity First**: Avoid jargon unless your audience expects it
2. **Value Proposition**: Lead with what you deliver, not what you know
3. **Credibility Markers**: Include specific metrics or achievements
4. **Call-to-Action**: Make next steps obvious and friction-free
5. **Personality**: Let your unique voice come through

### Example Refinements:

**Too Generic**: "I build web applications"
**Better**: "I build reliable ML systems that turn experimentation into production"

**Too Technical**: "Experienced in implementing end-to-end MLOps pipelines with CI/CD integration"
**Better**: "I deploy ML systems that scale from prototype to millions of users"

**Too Modest**: "I write code"
**Better**: "I write optimized code that cuts query time by 60%"

---

## Metrics to Highlight (from Projects)

- **85%** processing speed improvement (GeminiVision)
- **60%** query retrieval time reduction (RAGChat)
- **70%** weekly reporting time cut (Sales BI Dashboard)
- **200+** problems solved (LeetCode/GeeksforGeeks)
- **3+** production-ready apps deployed
- **4+** industry certifications earned

Use these metrics across hero variants to maintain consistency and credibility.

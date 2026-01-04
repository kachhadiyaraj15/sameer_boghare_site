# Multilingual Static Website Generator

## Project Overview

This project is a **multilingual static website generator** that creates 3-5 page websites based on Markdown input files. The system allows users to input content in English, but dynamically serves pages in multiple languages based on user selection.

## Core Concept

- **Input Language**: English (for content creation and management)
- **Output Languages**: Gujarati (ગુજરાતી) and Hindi (हिन्दी)
- **Content Format**: Markdown files
- **Architecture**: Static website with language switching capability

## Key Features

### 1. Markdown-Based Content Management
- All page content is written in Markdown format
- Easy to edit and maintain
- Supports standard Markdown syntax (headings, lists, links, images, etc.)

### 2. Multilingual Support
- Content is authored once in English
- Automatic translation/localization to multiple target languages
- Language switcher in the UI for seamless navigation
- URL structure supports language routing (e.g., `/en/about`, `/es/about`, `/fr/about`)

### 3. Static Site Generation
- Fast loading times
- SEO-friendly
- Easy deployment to any static hosting service
- No server-side processing required

## Project Structure

```
project-root/
├── .claude/
│   └── CLAUDE.md                 # This file
├── content/
│   ├── en/                       # English content (source)
│   │   ├── home.md
│   │   ├── about.md
│   │   ├── services.md
│   │   ├── portfolio.md
│   │   └── contact.md
│   └── translations/             # Generated translations
│       ├── gu/                   # Gujarati (ગુજરાતી)
│       └── hi/                   # Hindi (हिन्दी)
├── src/
│   ├── components/               # Reusable UI components
│   ├── layouts/                  # Page layouts
│   ├── utils/                    # Utility functions
│   │   ├── markdown-parser.js
│   │   └── translator.js
│   └── config/
│       └── languages.js          # Supported languages config
├── public/
│   ├── css/
│   ├── js/
│   └── assets/
├── dist/                         # Generated static files
└── index.html                    # Entry point
```

## Technical Specifications

### Pages (3-5 Pages)
1. **Home** - Landing page with overview
2. **About** - Information about the subject/company
3. **Services/Products** - What is offered
4. **Portfolio/Gallery** (Optional) - Showcase work
5. **Contact** (Optional) - Contact information/form

### Technology Stack
- **HTML5** - Semantic markup
- **CSS3** - Modern styling with responsive design
- **Vanilla JavaScript** - Core functionality
- **Markdown Parser** - Convert .md files to HTML
- **Translation API/Library** - For multilingual support
- **Build Tool** (Optional) - For optimization and bundling

### Language Implementation

#### Supported Languages
- **English (en)** - Source/Input language
- **Gujarati (gu)** - Output language (ગુજરાતી)
- **Hindi (hi)** - Output language (हिन्दी)

#### Language Switching Mechanism
1. **Language Selector**: Dropdown or flag icons in header
2. **URL Routing**: `/[lang-code]/[page-name]`
3. **Local Storage**: Remember user's language preference
4. **Browser Detection**: Auto-detect user's preferred language on first visit

## Workflow

### Content Creation Process
1. Write content in English Markdown files in `content/en/`
2. Run translation script to generate localized versions
3. Build static site with all language variants
4. Deploy to hosting service

### Translation Strategy
**Option A: Automated Translation**
- Use translation API (Google Translate, DeepL, etc.)
- Generate translations during build process
- Store in respective language folders

**Option B: Manual Translation**
- Create translation files manually
- Use English as template
- Professional translators can edit Markdown files directly

**Option C: Hybrid Approach**
- Auto-translate for initial draft
- Manual review and refinement
- Version control for translation updates

## Build Process

1. **Parse Markdown**: Convert .md files to HTML
2. **Apply Templates**: Inject content into page layouts
3. **Generate Language Variants**: Create pages for each supported language
4. **Optimize Assets**: Minify CSS/JS, compress images
5. **Output Static Files**: Generate final HTML files in `dist/`

## SEO Considerations

- **Hreflang Tags**: Proper language annotations for search engines
- **Unique URLs**: Each language version has distinct URL
- **Meta Tags**: Translated titles and descriptions
- **Sitemap**: Include all language variants
- **Structured Data**: Language-aware schema markup

## Deployment

### Recommended Hosting Platforms
- **Netlify** - Easy deployment with form handling
- **Vercel** - Fast CDN and automatic deployments
- **GitHub Pages** - Free hosting for static sites
- **Cloudflare Pages** - Global CDN with excellent performance
- **AWS S3 + CloudFront** - Scalable enterprise solution

## Development Guidelines

### Markdown Content Rules
- Use consistent heading hierarchy (H1 for page title, H2 for sections)
- Include alt text for all images
- Use relative links for internal navigation
- Keep content modular and reusable

### Code Standards
- Semantic HTML5 elements
- Mobile-first responsive design
- Accessible (WCAG 2.1 AA compliance)
- Progressive enhancement
- Clean, commented code

### Performance Goals
- First Contentful Paint < 1.5s
- Time to Interactive < 3.5s
- Lighthouse score > 90
- Optimized images (WebP format)
- Lazy loading for images

## Future Enhancements

- [ ] CMS integration for non-technical content editing
- [ ] Real-time translation preview
- [ ] A/B testing for different language variants
- [ ] Analytics integration (track language preferences)
- [ ] PWA capabilities for offline access
- [ ] Dark mode support
- [ ] RTL (Right-to-Left) language support
- [ ] Voice-over/audio versions of content

## Configuration

### Language Configuration Example
```javascript
// src/config/languages.js
export const languages = {
  en: { name: 'English', flag: '🇬🇧', dir: 'ltr', isSource: true },
  gu: { name: 'ગુજરાતી', nativeName: 'Gujarati', flag: '��', dir: 'ltr' },
  hi: { name: 'हिन्दी', nativeName: 'Hindi', flag: '��', dir: 'ltr' }
};

export const defaultLanguage = 'en';
export const outputLanguages = ['gu', 'hi'];
```

## Notes for AI Assistants

When working on this project:
1. **Content is in English**: All source Markdown files are written in English
2. **Output is Multilingual**: The final website serves content in multiple languages
3. **Keep it Simple**: Focus on clean, maintainable code
4. **Responsive Design**: Ensure mobile-friendly layouts
5. **Accessibility**: Follow WCAG guidelines
6. **Performance**: Optimize for fast loading
7. **SEO**: Implement proper meta tags and structured data for all languages

## Getting Started

1. Create Markdown content files in English
2. Set up the basic HTML/CSS structure
3. Implement Markdown parser
4. Add language switching functionality
5. Integrate translation mechanism
6. Test across different languages
7. Deploy to hosting platform

---

**Project Type**: Static Website Generator  
**Primary Language**: JavaScript  
**Content Format**: Markdown  
**Target**: 3-5 page multilingual websites  
**Status**: Planning/Development Phase

# 🎟️ EventTier - Premium Event Management Platform

<div align="center">
  
![EventTier Logo](https://img.shields.io/badge/EventTier-Premium%20Events-6366f1?style=for-the-badge&logo=calendar&logoColor=white)

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178c6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-06b6d4?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Supabase](https://img.shields.io/badge/Supabase-Database-3ecf8e?style=for-the-badge&logo=supabase&logoColor=white)](https://supabase.com/)
[![Clerk](https://img.shields.io/badge/Clerk-Auth-6c47ff?style=for-the-badge&logo=clerk&logoColor=white)](https://clerk.dev/)

**🚀 A sophisticated tier-based event management platform with premium access controls**

_Experience events like never before with intelligent tier-based access, real-time updates, and a stunning modern interface_

[🌟 **Live Demo**](#) • [📚 **Documentation**](#setup-instructions) • [🐛 **Report Bug**](#) • [💡 **Request Feature**](#)

---

</div>

## ✨ **What Makes EventTier Special**

### 🎭 **Intelligent Tier System**

- **🆓 Free Tier** - Access to community events and workshops
- **🥈 Silver Tier** - Premium events + Free tier access
- **🥇 Gold Tier** - Exclusive events + Silver + Free access
- **💎 Platinum Tier** - VIP experiences + All lower tier access

### 🚀 **Cutting-Edge Features**

- 🔐 **Smart Access Control** - Hierarchical tier-based event filtering
- ⚡ **Real-Time Updates** - Instant tier upgrades with immediate access
- 🔍 **Advanced Search** - AI-powered search with intelligent filtering
- 📱 **Mobile-First Design** - Responsive across all devices
- ♿ **Accessibility Excellence** - WCAG 2.1 AA compliant
- 🎨 **Modern UI/UX** - Glass morphism, smooth animations, and micro-interactions

## 🏗️ **Architecture & Tech Stack**

### **Frontend Excellence**

```typescript
Framework     → Next.js 14 (App Router + Server Components)
Language      → TypeScript 5.0 (100% Type Coverage)
Styling       → Tailwind CSS 3.4 + Custom Design System
UI Library    → Custom Components + Headless UI
Fonts         → Geist Sans & Geist Mono (Optimized)
```

### **Backend & Database**

```typescript
Database      → Supabase (PostgreSQL + Real-time)
Authentication → Clerk.dev (Social + Email + 2FA)
API Layer     → Next.js API Routes (RESTful)
Validation    → Zod Schema Validation
Security      → Row Level Security (RLS)
```

### **DevOps & Performance**

```typescript
Deployment    → Vercel (Edge Runtime)
Monitoring    → Vercel Analytics + Speed Insights
Images        → Next.js Image Optimization
Caching       → ISR + Edge Caching
Bundle        → Tree Shaking + Code Splitting
```

## 🎯 **Core Features Deep Dive**

<details>
<summary><strong>🔐 Tier-Based Access Control</strong></summary>

```typescript
// Hierarchical access system
const tierHierarchy = {
  free: ["free"],
  silver: ["free", "silver"],
  gold: ["free", "silver", "gold"],
  platinum: ["free", "silver", "gold", "platinum"],
};
```

- **Secure Server-Side Filtering** - Events filtered at API level
- **Dynamic Permission Updates** - Real-time tier changes
- **Visual Access Indicators** - Clear tier badges and progress bars

</details>

<details>
<summary><strong>� Advanced Search & Filtering</strong></summary>

- **Intelligent Search** - Full-text search across titles and descriptions
- **Multi-Tier Filtering** - Filter by specific tiers or combinations
- **Real-Time Results** - Instant search with debounced queries
- **Search Highlighting** - Visual emphasis on matching terms
- **Filter Persistence** - Maintains search state across navigation

</details>

<details>
<summary><strong>📱 Modern UI/UX Design</strong></summary>

- **Glass Morphism Effects** - Modern translucent design elements
- **Smooth Animations** - 60fps transitions and micro-interactions
- **Dark Mode Support** - System preference detection
- **Loading Skeletons** - Professional loading states
- **Toast Notifications** - Non-intrusive feedback system
- **Progressive Web App** - Installable with offline support

</details>

## 🚀 **Quick Start Guide**

### **Prerequisites**

- Node.js 18.0+
- npm/yarn/pnpm
- Git

### **1. Clone & Install**

```bash
# Clone the repository
git clone https://github.com/yourusername/eventtier.git
cd eventtier

# Install dependencies
npm install
# or
yarn install
# or
pnpm install
```

### **2. Environment Setup**

Create `.env.local` with your credentials:

```env
# 🔐 Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_xxxxx
CLERK_SECRET_KEY=sk_test_xxxxx

# 🗄️ Supabase Database
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

# 📧 Email Configuration (Optional)
RESEND_API_KEY=re_xxxxx
```

### **3. Database Setup**

```bash
# Run database migrations
npm run setup-db

# Or manually via Supabase Dashboard:
# 1. Go to SQL Editor in Supabase
# 2. Copy contents from database/seed.sql
# 3. Execute the SQL
```

### **4. Launch Development Server**

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

🎉 **Visit** [localhost:3000](http://localhost:3000) **to see your app!**

---

## 📊 **Project Structure**

```
eventtier/
├── 📁 app/                    # Next.js App Router
│   ├── 📁 api/               # API Routes
│   │   ├── events/           # Event management endpoints
│   │   └── update-tier/      # Tier management endpoints
│   ├── 📁 events/            # Events page
│   ├── layout.tsx            # Root layout with providers
│   ├── page.tsx             # Landing page
│   └── globals.css          # Global styles + custom utilities
├── 📁 components/            # Reusable UI components
│   ├── EventCard.tsx        # Enhanced event card component
│   ├── EventCardSkeleton.tsx # Loading placeholder
│   ├── SearchAndFilter.tsx  # Advanced search interface
│   ├── TierStats.tsx        # User analytics dashboard
│   └── TierUpgrade.tsx      # Tier management component
├── 📁 lib/                   # Utility functions & configurations
│   ├── supabase.ts          # Database client & types
│   ├── utils.ts             # Tier utilities & helpers
│   ├── server-utils.ts      # Server-side utilities
│   └── event-utils.ts       # Event manipulation functions
├── 📁 database/              # Database schema & migrations
│   └── seed.sql             # Database setup & sample data
└── 📁 scripts/               # Automation scripts
    └── setup-db.ts          # Database initialization
```

## 🎨 **Design System & UI Components**

### **Color Palette**

```css
/* Tier Colors */
Free:     #6B7280 (Gray)     → Community Access
Silver:   #9CA3AF (Light Gray) → Premium Access
Gold:     #F59E0B (Amber)    → Exclusive Access
Platinum: #8B5CF6 (Purple)   → VIP Access

/* Brand Colors */
Primary:   #6366F1 (Indigo)  → Main brand color
Secondary: #EC4899 (Pink)    → Accent color
Success:   #10B981 (Emerald) → Positive actions
Warning:   #F59E0B (Amber)   → Caution states
Error:     #EF4444 (Red)     → Error states
```

### **Typography Scale**

```css
/* Headings */
h1: 3rem (48px)    → Hero titles
h2: 2.25rem (36px) → Section headers
h3: 1.875rem (30px) → Subsection titles
h4: 1.5rem (24px)   → Card titles

/* Body Text */
Large:  1.125rem (18px) → Feature descriptions
Base:   1rem (16px)     → Standard body text
Small:  0.875rem (14px) → Captions & metadata
Tiny:   0.75rem (12px)  → Labels & badges
```

## 🔐 **Security & Authentication**

### **Authentication Flow**

```typescript
1. User Registration → Clerk handles signup/signin
2. User Metadata → Tier stored in Clerk publicMetadata
3. API Authentication → Clerk middleware validates requests
4. Database Security → Row Level Security (RLS) policies
5. Tier Validation → Server-side tier verification
```

### **Security Best Practices**

- ✅ **Server-Side Validation** - All tier checks on server
- ✅ **SQL Injection Protection** - Parameterized queries
- ✅ **XSS Prevention** - Sanitized user inputs
- ✅ **CSRF Protection** - Built-in Next.js protection
- ✅ **Rate Limiting** - API route protection
- ✅ **Secure Headers** - Security headers configured

## 📱 **Mobile & Accessibility**

### **Responsive Breakpoints**

```css
Mobile:    320px - 768px   → Stack layout, touch-friendly
Tablet:    768px - 1024px  → 2-column grid, hybrid interaction
Desktop:   1024px+         → 3-column grid, mouse-optimized
```

### **Accessibility Features**

- ♿ **WCAG 2.1 AA Compliant** - Full accessibility support
- ⌨️ **Keyboard Navigation** - Tab-friendly interface
- 📢 **Screen Reader Support** - ARIA labels & semantic HTML
- 🎨 **High Contrast Mode** - Color accessibility
- 🔍 **Focus Management** - Clear focus indicators
- 📱 **Touch Accessibility** - 44px minimum touch targets

## 🚀 **Performance Optimizations**

### **Core Web Vitals**

```typescript
LCP: < 2.5s    → Largest Contentful Paint
FID: < 100ms   → First Input Delay
CLS: < 0.1     → Cumulative Layout Shift
```

### **Optimization Techniques**

- ⚡ **Image Optimization** - Next.js Image component with WebP
- 📦 **Code Splitting** - Dynamic imports & lazy loading
- 💾 **Caching Strategy** - ISR + Edge caching
- 🗜️ **Bundle Optimization** - Tree shaking & minification
- 🔄 **Loading States** - Skeleton components for better UX
- 📊 **Performance Monitoring** - Vercel Speed Insights

## 🧪 **Testing & Quality Assurance**

### **Code Quality Tools**

```bash
npm run lint          # ESLint + TypeScript checks
npm run type-check    # TypeScript compilation
npm run format        # Prettier code formatting
npm run build         # Production build verification
```

### **Testing Strategy**

- 🔧 **Unit Tests** - Component logic testing
- 🔗 **Integration Tests** - API endpoint testing
- 👤 **User Testing** - Accessibility & usability
- 📱 **Device Testing** - Cross-platform compatibility

## 🚢 **Deployment & Production**

### **Vercel Deployment**

```bash
# Connect to Vercel
npx vercel --prod

# Or deploy via GitHub integration
git push origin main  # Auto-deploy on push
```

### **Environment Variables (Production)**

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_live_xxxxx
CLERK_SECRET_KEY=sk_live_xxxxx
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIs...
```

### **Performance Monitoring**

- � **Vercel Analytics** - User behavior insights
- ⚡ **Speed Insights** - Core Web Vitals monitoring
- 🐛 **Error Tracking** - Runtime error monitoring
- 📈 **Usage Analytics** - Feature adoption tracking

## 🤝 **Contributing**

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### **Development Workflow**

```bash
1. Fork the repository
2. Create feature branch: git checkout -b feature/amazing-feature
3. Commit changes: git commit -m 'Add amazing feature'
4. Push to branch: git push origin feature/amazing-feature
5. Open a Pull Request
```

### **Code Standards**

- ✅ **TypeScript** - Strict type checking
- ✅ **ESLint** - Code quality rules
- ✅ **Prettier** - Consistent formatting
- ✅ **Conventional Commits** - Semantic commit messages

## 📄 **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 **Acknowledgments**

- **Next.js Team** - Amazing React framework
- **Vercel** - Seamless deployment platform
- **Supabase** - Powerful backend-as-a-service
- **Clerk** - Authentication made simple
- **Tailwind CSS** - Utility-first CSS framework

---

<div align="center">

**Built with ❤️ by [Your Name](https://github.com/yourusername)**

[⭐ **Star this repo**](https://github.com/yourusername/eventtier) • [🐦 **Follow on Twitter**](https://twitter.com/yourusername) • [💼 **LinkedIn**](https://linkedin.com/in/yourusername)

</div>
# Event-app

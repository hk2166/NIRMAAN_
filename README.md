# 🎃 NIRMAAN - Code the Future, Shape the Web

<div align="center">

![NIRMAAN Banner](https://img.shields.io/badge/NIRMAAN-Code%20the%20Future-purple?style=for-the-badge&logo=react)

[![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=flat-square&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.2.2-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4.14-646CFF?style=flat-square&logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.1-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

**A modern, interactive web development competition platform featuring cutting-edge UI/UX design**

[🚀 Live Demo](https://nirmaan-event.netlify.app) • [📖 Documentation](#-documentation) • [🎨 Features](#-features) • [⚡ Quick Start](#-quick-start)

</div>

---

## 📋 Table of Contents

- [🌟 Overview](#-overview)
- [✨ Features](#-features)
- [🎨 UI/UX Highlights](#-uiux-highlights)
- [🛠️ Tech Stack](#️-tech-stack)
- [⚡ Quick Start](#-quick-start)
- [🔧 Installation](#-installation)
- [🌐 Environment Setup](#-environment-setup)
- [📁 Project Structure](#-project-structure)
- [🎯 Usage Guide](#-usage-guide)
- [🎨 Customization](#-customization)
- [🚀 Deployment](#-deployment)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)

---

## 🌟 Overview

**NIRMAAN** is a premium, modern web development competition platform built with React, TypeScript, and cutting-edge UI technologies. It features a stunning, interactive design with advanced animations, particle systems, and glassmorphism effects that create an immersive user experience.

### 🎯 Purpose

- **Showcase Events**: Present hackathons and competitions with stunning visual appeal
- **Engage Users**: Interactive animations and micro-interactions keep visitors engaged
- **Collect Registrations**: Seamless registration flow with embedded forms
- **Modern Design**: World-class UI/UX that stands out from traditional event websites
- **Mobile-First**: Fully responsive design optimized for all devices

---

## ✨ Features

### 🎨 **Modern UI/UX**
- **Glassmorphism Design**: Semi-transparent cards with backdrop blur effects
- **Neumorphism Elements**: Subtle depth and shadow-based design patterns
- **Interactive Animations**: Mouse-following effects and micro-interactions
- **Particle System**: Dynamic floating particles with canvas rendering
- **Advanced Gradients**: Multi-color animated text and background gradients

### 🚀 **Performance & Accessibility**
- **60fps Animations**: Hardware-accelerated transforms for smooth performance
- **Mobile Optimized**: Touch-friendly interactions and responsive design
- **Accessibility First**: Screen reader friendly with proper ARIA labels
- **SEO Optimized**: Meta tags and structured data for better search visibility

### 🎪 **Interactive Components**
- **Hero Section**: Dynamic background with mouse-tracking effects
- **Event Details**: Color-coded feature cards with hover animations
- **Winter Gifts**: Themed animations with snowflakes and sparkles
- **Sponsors Section**: Professional sponsor showcase
- **Registration Flow**: Embedded forms with enhanced styling

### 🔧 **Developer Experience**
- **TypeScript**: Full type safety and better developer experience
- **Component Architecture**: Modular, reusable React components
- **Custom Hooks**: Optimized performance with React hooks
- **CSS Variables**: Organized theming system with custom properties

---

## 🎨 UI/UX Highlights

### ✨ **Advanced Animations**
```css
/* Custom keyframe animations */
@keyframes pulse-glow {
  0%, 100% { box-shadow: 0 0 20px rgba(139, 92, 246, 0.3); }
  50% { box-shadow: 0 0 60px rgba(139, 92, 246, 0.5); }
}

@keyframes gradient-shift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
```

### 🎪 **Interactive Elements**
- **Mouse Tracking**: Dynamic gradient follows cursor movement
- **Particle System**: Canvas-based floating particles with physics
- **Glassmorphism Cards**: Backdrop blur with semi-transparent backgrounds
- **Micro-interactions**: Icon rotations, scale effects, and color transitions

### 🌈 **Color System**
```css
:root {
  --neon-purple: #8b5cf6;
  --neon-pink: #ec4899;
  --neon-blue: #3b82f6;
  --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

---

## 🛠️ Tech Stack

### **Frontend**
- **React 18.2.0** - Modern React with hooks and concurrent features
- **TypeScript 5.2.2** - Type-safe development experience
- **Vite 5.4.14** - Lightning-fast build tool and dev server
- **Tailwind CSS 3.4.1** - Utility-first CSS framework

### **UI/UX Libraries**
- **Lucide React** - Beautiful, customizable icons
- **React Intersection Observer** - Scroll-triggered animations
- **React Router DOM** - Client-side routing
- **React Scroll** - Smooth scrolling navigation

### **Animation & Effects**
- **Custom CSS Animations** - Hardware-accelerated keyframes
- **Canvas API** - Particle system rendering
- **CSS Custom Properties** - Dynamic theming system
- **Backdrop Filter** - Glassmorphism effects

---

## ⚡ Quick Start

```bash
# Clone the repository
git clone https://github.com/hk2166/NIRMAAN_.git
cd NIRMAAN

# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:5173 in your browser
```

---

## 🔧 Installation

### **Prerequisites**
- **Node.js** 18+ (LTS recommended)
- **npm** 9+ or **yarn** 1.22+
- **Git** (for cloning)

### **Step-by-Step Setup**

1. **Clone the repository**
```bash
git clone https://github.com/hk2166/NIRMAAN_.git
cd NIRMAAN
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Start development server**
```bash
npm run dev
# or
yarn dev
```

4. **Build for production**
```bash
npm run build
# or
yarn build
```

5. **Preview production build**
```bash
npm run preview
# or
yarn preview
```

---

## 🌐 Environment Setup

### **Environment Variables**

Create a `.env` file in the root directory:

```env
# Google Forms Configuration
VITE_REG_FORM_URL=https://docs.google.com/forms/d/e/YOUR_REGISTRATION_FORM_ID/viewform?embedded=true
VITE_SUBMISSION_FORM_URL=https://docs.google.com/forms/d/e/YOUR_SUBMISSION_FORM_ID/viewform?embedded=true

# Event Configuration
VITE_EVENT_DATE=Nov 26, 2024
VITE_EVENT_TIME=10 AM - 12 PM
VITE_EVENT_VENUE=Virtual Event

# Analytics (Optional)
VITE_GA_TRACKING_ID=G-XXXXXXXXXX
```

### **Using Environment Variables**

```typescript
// Example usage in components
const formUrl = import.meta.env.VITE_REG_FORM_URL ?? 'fallback-url';
const eventDate = import.meta.env.VITE_EVENT_DATE ?? 'TBD';
```

---

## 📁 Project Structure

```
NIRMAAN/
├── 📁 public/                 # Static assets
│   ├── vite.svg              # Favicon
│   └── _redirects            # Netlify redirects
├── 📁 src/                   # Source code
│   ├── 📁 components/        # React components
│   │   ├── Hero.tsx          # Hero section with animations
│   │   ├── EventDetails.tsx  # Event information cards
│   │   ├── WinterGifts.tsx   # Gift showcase section
│   │   ├── Sponsors.tsx      # Sponsor logos
│   │   ├── Navbar.tsx        # Navigation component
│   │   ├── Footer.tsx        # Footer component
│   │   ├── Register.tsx      # Registration form
│   │   ├── ProjectSubmission.tsx # Project submission
│   │   └── ParticleSystem.tsx # Particle animation system
│   ├── 📁 pages/            # Page components
│   │   ├── MainPage.tsx     # Landing page
│   │   └── RegistrationPage.tsx # Registration page
│   ├── App.tsx              # Main app component
│   ├── main.tsx             # App entry point
│   └── index.css            # Global styles & animations
├── 📄 package.json          # Dependencies & scripts
├── 📄 tailwind.config.js    # Tailwind configuration
├── 📄 vite.config.ts        # Vite configuration
├── 📄 tsconfig.json         # TypeScript configuration
└── 📄 README.md             # Project documentation
```

---

## 🎯 Usage Guide

### **Customizing Event Details**

1. **Update Hero Section**
```typescript
// src/components/Hero.tsx
<span className="text-lg md:text-2xl">Your Event Date</span>
<span className="text-lg md:text-2xl">Your Event Time</span>
```

2. **Modify Event Features**
```typescript
// src/components/EventDetails.tsx
const features = [
  {
    icon: <Trophy className="w-8 h-8" />,
    title: "Your Prize Amount",
    description: "Your prize description",
    color: "from-yellow-400 to-orange-500"
  },
  // Add more features...
];
```

3. **Update Winter Gifts**
```typescript
// src/components/WinterGifts.tsx
const gifts = [
  {
    icon: <Gift className="w-12 h-12" />,
    title: "Your Gift Title",
    description: "Your gift description",
    value: "Worth ₹X,XXX"
  }
];
```

### **Integrating Forms**

1. **Create Google Forms**
   - Registration form
   - Project submission form

2. **Get Embed URLs**
   - Form → Send → Embed HTML → Copy src URL

3. **Update Components**
```typescript
// src/pages/RegistrationPage.tsx
const formUrl = "your-google-form-embed-url";
```

---

## 🎨 Customization

### **Color Scheme**

Modify the color system in `src/index.css`:

```css
:root {
  --neon-purple: #your-color;
  --neon-pink: #your-color;
  --neon-blue: #your-color;
}
```

### **Animations**

Add custom animations:

```css
@keyframes your-animation {
  0% { transform: translateY(0); }
  100% { transform: translateY(-20px); }
}

.your-element {
  animation: your-animation 2s infinite;
}
```

### **Components**

Create new components following the existing pattern:

```typescript
import React from 'react';
import { useInView } from 'react-intersection-observer';

export default function YourComponent() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section ref={ref} className="py-24">
      <div className={`transform transition-all duration-1000 ${
        inView ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      }`}>
        {/* Your content */}
      </div>
    </section>
  );
}
```

---

## 🚀 Deployment

### **Netlify (Recommended)**

1. **Build the project**
```bash
npm run build
```

2. **Deploy to Netlify**
   - Drag `dist` folder to Netlify
   - Or connect GitHub repository

3. **Configure redirects**
   - `_redirects` file already included for SPA routing

### **Vercel**

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### **GitHub Pages**

```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json scripts
"deploy": "gh-pages -d dist"

# Deploy
npm run build && npm run deploy
```

---

## 🤝 Contributing

We welcome contributions! Please follow these guidelines:

### **Development Workflow**

1. **Fork the repository**
2. **Create a feature branch**
```bash
git checkout -b feature/your-feature-name
```

3. **Make your changes**
4. **Follow code standards**
   - Use TypeScript
   - Follow existing component patterns
   - Add proper types and interfaces

5. **Test your changes**
```bash
npm run dev
npm run build
```

6. **Commit with conventional commits**
```bash
git commit -m "feat: add new animation system"
git commit -m "fix: resolve mobile navigation issue"
git commit -m "docs: update README with new features"
```

7. **Push and create PR**
```bash
git push origin feature/your-feature-name
```

### **Code Standards**

- **TypeScript**: Use proper types and interfaces
- **Components**: Follow functional component patterns
- **Styling**: Use Tailwind CSS utilities
- **Animations**: Use CSS custom properties for consistency
- **Performance**: Optimize animations for 60fps

### **PR Requirements**

- Clear description of changes
- Screenshots for UI changes
- Updated documentation if needed
- No breaking changes without discussion

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **React Team** - For the amazing React framework
- **Tailwind CSS** - For the utility-first CSS framework
- **Lucide** - For the beautiful icon library
- **Vite** - For the lightning-fast build tool
- **Contributors** - For making this project better

---

## 📞 Support

If you have any questions or need help:

- 📧 **Email**: [your-email@example.com](mailto:your-email@example.com)
- 🐛 **Issues**: [GitHub Issues](https://github.com/hk2166/NIRMAAN_/issues)
- 💬 **Discussions**: [GitHub Discussions](https://github.com/hk2166/NIRMAAN_/discussions)

---

<div align="center">

**Made with ❤️ by the NIRMAAN Team**

⭐ **Star this repo if you found it helpful!** ⭐

</div>
# NIRMAAN - Hackathon Landing & Registration

A single-page React + Vite TypeScript front-end for an event landing page and registration flow. This repository contains a responsive, TailwindCSS-styled UI with two routes (`/` and `/register`) and components for hero, details, registration, sponsorship, gifts, and project submission.

---

## 🚀 Project Description

NIRMAAN is a modular, single-page frontend designed to advertise a hackathon or event and collect registrations. The site’s purpose is to:

- Present event branding and details (hero, date/time, prizes, judging criteria).
- Explain participant benefits and sponsors.
- Provide a registration flow (embedded Google Form) and a project-submission page (also embedded).
- Serve as a lightweight static site that can be deployed to any static host.

This repository intentionally contains no server-side code; it’s meant to be deployed as static assets or integrated with a simple backend later.

---

## 🔧 Features

- **Landing / Hero Section**: Event name, date/time, and a call-to-action to register.
- **Event Details**: Feature grid showcasing prizes, judging criteria, tech stack, timeline, etc.
- **Winter Gifts**: Highlight participant gifts with a call-to-action.
- **Sponsors**: Section displaying sponsor logos.
- **Registration Page**: Embedded Google Form for registration.
- **Project Submission Page**: Embedded Google Form for submitting projects.
- **Responsive Navigation**: Desktop and mobile menus; in-page smooth scrolling for anchors.
- **Accessible Animations**: Intersection-observer reveal; mobile-safe padding using `env(safe-area-inset-*)`.
- **TailwindCSS**: Utility-first CSS framework for styling.
- **Icons**: Utilizes `lucide-react` for icons.
- **No External Backend Required**: Forms are embedded via iframe (replace placeholders with your form URLs).

---

## 📦 Installation

**Requirements:** Node.js (recommended LTS 18+), npm (or Yarn/pnpm), Git (optional).

1. Clone the repository:
```bash
git clone https://github.com/AryanVBW/NIRMAAN.git
cd NIRMAAN
```

2. Install dependencies:
```bash
npm install
```

3. Start the dev server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

5. Preview the production build locally:
```bash
npm run preview
```

---

## 🌐 Environment

The project uses static embeds for Google Forms by default. For safer configuration and easier deployment, use Vite environment variables.

Create an `.env` and set:
```bash
VITE_REG_FORM_URL=https://docs.google.com/forms/d/e/<REGISTRATION_FORM_ID>/viewform?embedded=true
VITE_SUBMISSION_FORM_URL=https://docs.google.com/forms/d/e/<SUBMISSION_FORM_ID>/viewform?embedded=true
```

Example snippet to use in components (replace iframe `src` with the env var):
```bash
// pages/RegistrationPage.tsx
const formUrl = import.meta.env.VITE_REG_FORM_URL ?? 'https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?embedded=true';
<iframe src={formUrl} ... />
```

**Notes:**
- Vite exposes client vars only if prefixed with VITE_.
- Keep private/unwanted form URLs out of the repository by using environment variables.

---

## 🧪 Usage examples

**Run locally (dev)**
```bash
npm run dev
# visit http://localhost:5173
```

**Change the hero date/time**  
Edit `components/Hero.tsx` and find:
```bash
<span className="text-lg md:text-2xl">Nov 26, 2024</span>
<span className="text-lg md:text-2xl">10 AM - 12 PM</span>
```
Replace with the desired date/time or convert these into configurable props/env variables.  

**Update features / prizes**  
Edit `components/EventDetails.tsx` - the features are defined in the features array. Add, remove or update entries:  
```bash
const features = [
  { icon: <Trophy />, title: 'Prizes Worth ₹50,000', description: '...' },
  // ...
];
```

**Replace Google Form embed**  
- Create or copy your Google Form embed URL.
- Replace the placeholder YOUR_FORM_ID in `pages/RegistrationPage.tsx` and `components/ProjectSubmission.tsx`, or set them via `.env` as shown in `Environment / configuration`.

---

## 🤝 Contributing

Follow these guidelines to make contributions consistent and reviewable.  

**Code of conduct**  
Be respectful and professional in issue threads and PR discussions.  

**Workflow**  
1. Fork the repository.
2. Create a feature branch from main:
3. Branch naming: `feature/<short-description>`, `fix/<short-description>`, or `chore/<task>`.
4. Make changes, keeping commits small and focused.
5. Open a Pull Request to main with:
- Summary of changes.
- Screenshot(s) for UI changes.
- Any required migration or environment changes.
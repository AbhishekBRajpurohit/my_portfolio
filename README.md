# Abhishek Rajpurohit — Developer Portfolio

A modern, fast, single-page developer portfolio website built with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

Designed with a sleek dark cybersecurity / AI aesthetic featuring electric amber/gold accents (`#f5c518`), subtle dot-grid backgrounds, smooth scroll animations, and interactive component cards.

---

## Tech Stack

- **Framework:** Next.js 15+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS (v4)
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Deployment:** Vercel

---

## Features

- **Hero Section:** Bold introduction with pulsating status badge, tagline, CTAs, and social links.
- **About Section:** Background education details at Dayananda Sagar College of Engineering.
- **Skills:** Categorized skill pills covering Languages, Frameworks, Machine Learning & Data, Databases, and Tools.
- **Experience:** Interactive timeline card for the Tech Internship at Defspace (BSERC).
- **Projects:** 6 featured project cards with live UI screenshots, technology pills, and GitHub repository links:
  - AI Military Threat Intelligence
  - NyayBot AI (Frontend)
  - NyayBot AI (Backend)
  - Real-Time Network Intrusion Detection System
  - VoiceGuard AI Defense
  - dKeeper ICP
- **Certifications:** Verified credentials from Decode Lab Tech, Infosys Springboard, and NPTEL.
- **Hackathons:** Achievements at HackOasis (PrivacyManager) and Aventus 3.0 (Resume Generator).
- **Contact:** One-click pre-filled `mailto:` contact form and direct contact buttons.
- **SEO & Social Meta:** Optimized title, description, and OpenGraph tags.
- **Mobile First & Responsive:** Works seamlessly across mobile (375px+), tablet, and desktop viewports.

---

## Getting Started Locally

### Prerequisites

- Node.js 18.18+ or 20+
- npm, yarn, or pnpm

### Installation

1. Clone or navigate to the project repository:
   ```bash
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Production Build

To test the production build locally:

```bash
npm run build
npm run start
```

---

## Deploying to Vercel

This portfolio is configured for zero-configuration deployment on [Vercel](https://vercel.com/):

1. Push your repository to GitHub:
   ```bash
   git add .
   git commit -m "feat: complete portfolio build"
   git push origin main
   ```

2. Go to [Vercel](https://vercel.com/) and click **Add New Project**.
3. Import your GitHub repository (`portfolio`).
4. Framework Preset will be automatically detected as **Next.js**.
5. Click **Deploy**.

Your portfolio will be live with automatic CI/CD on every push!

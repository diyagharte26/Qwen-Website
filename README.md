# SysPilot — Autonomous AI Platform for SAP Infrastructure

A cinematic, animation-rich marketing website for SysPilot, an AI-powered platform that autonomously manages SAP infrastructure operations. Built with React, Vite, TypeScript, and Tailwind CSS.

![SysPilot](https://img.shields.io/badge/React-18.2-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue)
![Vite](https://img.shields.io/badge/Vite-6.3-purple)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1-38bdf8)

## 🚀 Features

### Cinematic Design
- **Dark theme** with glassmorphism effects and gradient animations
- **Scroll-triggered animations** powered by Framer Motion
- **Interactive canvas animations** with particle systems and orbiting nodes
- **Animated counters** and progress indicators
- **Responsive design** optimized for all screen sizes

### CTO/CEO-Focused Sections
- **Hero with Quick Stats** - Immediate ROI metrics (47→12 min MTTR, 90s CVE scan)
- **Cost of Inaction** - Business impact metrics ($850K outage cost, 34% time loss)
- **Boardroom Impact** - Animated business metrics with executive testimonials
- **CTO Decision Framework** - Zero risk, immediate ROI, no vendor lock-in
- **Executive Summary** - 30-second bottom-line benefits

### Technical Showcase
- **18 AI Agents** - Interactive showcase with detailed agent information
- **Agent Workbench** - Animated chat interface demonstrating natural language commands
- **Human-in-the-Loop** - HITL approval workflow mockup
- **Live Observability** - Four-dashboard system with real-time metrics
- **Enterprise Governance** - Compliance and audit features

### Interactive Elements
- Animated hero canvas with mouse-reactive particle system
- Scroll-triggered section reveals with stagger animations
- Interactive agent selector with smooth transitions
- Animated chat typewriter effect
- Tab-switching dashboard with animated metrics
- Confetti celebration on demo form submission

## 🛠️ Tech Stack

- **Framework**: React 18.2 + TypeScript 5.7
- **Build Tool**: Vite 6.3
- **Styling**: Tailwind CSS 4.1
- **Animations**: Framer Motion 11.16
- **Icons**: Lucide React 0.294
- **Canvas**: HTML5 Canvas API (custom particle system)
- **Confetti**: canvas-confetti 1.9.3

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/syspilot-website.git
cd syspilot-website

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
syspilot-website/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx              # Sticky navigation with blur effect
│   │   ├── Hero.tsx                # Hero section with canvas animation
│   │   ├── Problem.tsx             # Problem statement section
│   │   ├── CostOfInaction.tsx      # Business impact metrics
│   │   ├── Platform.tsx            # Platform features with stat counters
│   │   ├── BoardroomImpact.tsx     # Executive-focused metrics
│   │   ├── Agents.tsx              # Interactive agent showcase
│   │   ├── Workbench.tsx           # Chat interface mockup
│   │   ├── HITL.tsx                # Human-in-the-loop workflow
│   │   ├── Observability.tsx       # Dashboard system
│   │   ├── Governance.tsx          # Compliance features
│   │   ├── CTODecisionFramework.tsx # CTO-focused decision factors
│   │   ├── ExecutiveSummary.tsx    # Quick executive summary
│   │   ├── DemoForm.tsx            # Demo request form with confetti
│   │   └── Footer.tsx              # Footer with links
│   ├── data/
│   │   └── agents.ts              # Agent data (18 agents)
│   ├── App.tsx                     # Main app component
│   ├── main.tsx                    # Entry point
│   └── index.css                   # Global styles and design tokens
├── index.html                      # HTML template
├── package.json                    # Dependencies
├── vite.config.js                  # Vite configuration
├── tsconfig.json                   # TypeScript configuration
└── README.md                       # This file
```

## 🎨 Design System

### Colors
- **Primary**: `#3D6FFF` (Electric blue)
- **Cyan**: `#00D4FF` (Secondary accent)
- **Green**: `#00E5A0` (Success states)
- **Amber**: `#FFB347` (Warning states)
- **Red**: `#FF4C6A` (Critical states)
- **Background**: `#090B0F` (Deep black)
- **Surface**: `#0F1117` (Card backgrounds)

### Typography
- **Headings**: Space Grotesk (700 weight)
- **Body**: Inter (400 weight)
- **Scale**: 72px → 13px (Display to Caption)

### Animations
- Scroll-triggered reveals with `whileInView`
- Staggered children animations (0.08s delay)
- Spring physics for natural motion
- Canvas particle system with mouse interaction
- Gradient border animations
- Pulse effects for status indicators

## 🎯 Target Audience

- **CTOs / CXOs** evaluating AI infrastructure solutions
- **VPs of Infrastructure** managing SAP landscapes
- **IT Directors** responsible for compliance and governance
- **Engineering Leaders** seeking operational efficiency

## 📊 Key Metrics Highlighted

- **47 → 12 minutes** MTTR reduction
- **90 seconds** for full fleet CVE scan
- **100%** human approval gated actions
- **3×** engineer productivity increase
- **$2.4M** annual ops cost savings
- **73%** MTTR reduction
- **94%** CVE compliance rate
- **6 years** audit retention

## 🚀 Deployment

The project is optimized for deployment on:

- **Vercel** (recommended)
- **Netlify**
- **GitHub Pages**
- Any static hosting service

```bash
# Build for production
npm run build

# The dist/ folder contains the production-ready files
```

## 📝 License

This project is proprietary software owned by OS3 Infotech.

## 🤝 Contributing

This is a marketing website for SysPilot. For contributions or inquiries, please contact the development team.

## 📧 Contact

- **Website**: [syspilot.io](https://syspilot.io)
- **Product**: SysPilot by OS3 Infotech
- **Year**: 2026

---

Built with ❤️ by the SysPilot team

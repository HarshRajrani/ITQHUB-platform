<div align="center">

<img src="client/public/favicon.png" alt="ITQHUB Logo" width="60" />

# ITQHUB

**Production-grade ed-tech platform with AI-powered career mentorship**

[![React 19](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=white)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-6-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vite.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Node.js](https://img.shields.io/badge/Node.js-20-339933?style=flat-square&logo=nodedotjs&logoColor=white)](https://nodejs.org)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?style=flat-square&logo=mongodb&logoColor=white)](https://mongodb.com/atlas)
[![Gemini AI](https://img.shields.io/badge/Gemini-AI_Powered-4285F4?style=flat-square&logo=google&logoColor=white)](https://ai.google.dev)
[![License: MIT](https://img.shields.io/badge/License-MIT-white?style=flat-square)](./LICENSE)

A full-stack MERN monorepo featuring an interactive developer-terminal contact form, Gemini-powered AI chatbot with automatic model fallback, a real-time admin CRM dashboard, and a hand-crafted **Obsidian Minimalist** design system — built and shipped in 36 hours.

[View Demo](#) · [Report Bug](../../issues) · [Request Feature](../../issues)

</div>

---

## The Problem

Traditional ed-tech websites feel generic — cookie-cutter templates, static forms, zero personality. Students bounce. Leads are lost. There's no way to manage enquiries without a third-party CRM, and chatbot integrations cost $50+/month.

**ITQHUB solves this** by being an end-to-end platform: a conversion-optimized frontend, a lead-capture backend with duplicate prevention, an AI career mentor that costs nothing to run (smart fallback when API quota runs out), and a built-in admin CRM — all in a single deployable monorepo.

---

## 📸 Visual Showcase

### ⚡ Home & Experience
| Section | Preview |
|:---:|---|
| **Hero Section** | ![Hero](client/public/screenshots/Screenshot%202026-05-10%20044444_edited.png) |
| **Bento Stats** | ![Stats](client/public/screenshots/Screenshot%202026-05-10%20044522_edited.png) |
| **Course Catalog** | ![Courses](client/public/screenshots/Screenshot%202026-05-10%20044553_edited.png) |
| **Terminal Contact** | ![Terminal](client/public/screenshots/Screenshot%202026-05-10%20044705_edited.png) |

### 📚 Program & Course Deep Dive
| Page / Section | Preview |
|:---:|---|
| **Programs Listing** | ![Programs](client/public/screenshots/Screenshot%202026-05-10%20044739_edited.png) |
| **Course Detail Hero** | ![Course Hero](client/public/screenshots/Screenshot%202026-05-10%20044835_edited.png) |
| **Curriculum Flow** | ![Curriculum](client/public/screenshots/Screenshot%202026-05-10%20044911_edited.png) |
| **Sticky Sidebar** | ![Sidebar](client/public/screenshots/Screenshot%202026-05-10%20044952_edited.png) |
| **Admin Portal** | ![Admin](client/public/screenshots/Screenshot%202026-05-10%20045119_edited.png) |

### 📬 Contact & Support
The **Contact Page** features a unique developer-centric Terminal UI, allowing users to send enquiries through an immersive code-editor interface. It combines aesthetic syntax highlighting with functional lead generation, providing a memorable interactive experience for prospective students.

| Section | Preview |
|:---:|---|
| **Terminal Contact UI** | ![Contact Page](client/public/screenshots/Screenshot%202026-05-10%20045424_edited.png) |
| **About Us Page** | ![About Page](client/public/screenshots/Screenshot%202026-05-10%20045451_edited.png) |

### 🤖 AI Career Mentor
The **AI Assistant** is a sophisticated career mentor powered by Google Gemini. It provides students with instant guidance on course selection, placement statistics, and career paths. Built with a resilient multi-model fallback system, it ensures continuous availability by seamlessly transitioning to curated mock responses if API quotas are reached, offering a reliably smart interaction at all times.

| Section | Preview |
|:---:|---|
| **AI Chatbot Interface** | ![AI Assistant](client/public/screenshots/Screenshot%202026-05-10%20045642_edited.png) |

### 📝 Global Enquiry System
A high-conversion **Enquiry Modal** accessible site-wide, designed to capture leads efficiently with real-time validation and a clean, obsidian-styled interface.

| Section | Preview |
|:---:|---|
| **Enquiry Modal** | ![Enquiry Modal](client/public/screenshots/Screenshot%202026-05-10%20045545_edited.png) |

### 🔐 Secure Admin Entry
The **Navigation Bar** doubles as a discreet gateway to the platform's backend operations. For enhanced security, the entrance to the **Admin Portal** is strategically obfuscated, requiring specific interactions to trigger the hidden login gateway. This design choice ensures that the administrative layer remains invisible to standard users while providing recruiters and stakeholders with a secure, passcode-protected dashboard for lead management.

| Section | Preview |
|:---:|---|
| **Secure Navigation Bar** | ![Admin Login](client/public/screenshots/Screenshot%202026-05-10%20045743_edited.png) |
| **Admin Login Gate** | ![Admin Gate](client/public/screenshots/Screenshot%202026-05-10%20045825_edited.png) |
| **Admin CRM Table** | ![Admin CRM](client/public/screenshots/Screenshot%202026-05-10%20045841_edited.png) |

---

## Tech Stack

| Layer | Technologies |
|:------|:------------|
| **Frontend** | React 19 · Vite 6 · Tailwind CSS 3 · Framer Motion |
| **Backend** | Node.js · Express 4 · Mongoose 8 · express-rate-limit |
| **Database** | MongoDB Atlas (Cloud) |
| **AI** | Google Gemini 2.5 Flash — multi-model fallback chain |
| **Design** | Custom Obsidian Dark theme · Shared design tokens |
| **Tooling** | npm Workspaces · Concurrently · Nodemon · PostCSS · ESM |

---

## Features

### Frontend

| Feature | Details |
|:--------|:--------|
| **Flashlight Hero** | Interactive SVG dot-grid that follows cursor movement with radial glow |
| **Animated Counters** | Scroll-triggered number animations for placement stats (500+ placed, 95% rate) |
| **Bento Grid** | Asymmetric card layout showcasing stats, mentorship, curriculum, and projects |
| **Course Engine** | Dynamic catalog from MongoDB with detail pages, curriculum accordions, and sticky sidebars |
| **Comparison Table** | Animated row-by-row ITQHUB vs. Traditional education comparison |
| **Developer Terminal** | Code-editor contact form with syntax highlighting, blinking cursor, and inline validation |
| **Glassmorphic Navbar** | Scroll-aware header with `backdrop-blur-2xl` and glass border transitions |
| **Blueprint CTA** | Engineering grid overlay with radial cyan gradients and luminous headings |
| **Enquiry Modal** | Global lead-capture modal accessible from any page |
| **Toast System** | Custom notification system with success/error states and auto-dismiss |

### Backend

| Feature | Details |
|:--------|:--------|
| **AI Chatbot** | Gemini-powered career mentor with system prompt, multi-model fallback, and smart mock mode |
| **Lead Pipeline** | `POST /api/leads` with server-side validation, duplicate prevention (compound unique index), and message support |
| **Admin CRM** | Passcode-protected dashboard with metrics cards, lead table, and inline status management |
| **Auto-Seeding** | Courses auto-populate on first startup — zero manual setup |
| **Rate Limiting** | 20 req/15 min per IP on the chat endpoint |
| **Health Check** | `/api/health` returns server status, DB state, and uptime |

### Design & UX

| Feature | Details |
|:--------|:--------|
| **Obsidian Theme** | Deep `#030712` base with a centralized design token system |
| **Glassmorphism** | `backdrop-blur-xl` panels with semi-transparent fills and `border-white/[0.06]` |
| **Atmospheric Depth** | 6-layer radial gradient system (BackgroundDepth) simulating stage lighting |
| **Noise Texture** | SVG fractalNoise overlay at 3% opacity for tactile surface feel |
| **Card Glow** | Hover-state inner glow with ITQHUB Blue border illumination |
| **Metallic Text** | CSS gradient text with silver-to-zinc sheen on headings |
| **Custom Scrollbar** | 3px ultra-thin scrollbar matching the obsidian palette |
| **SEO** | Dynamic `<title>`, meta descriptions, and Open Graph tags per page |

---

## Architecture

```
┌─────────────────────────────────────────────────────┐
│                  ITQHUB Platform                    │
├──────────────┬──────────────┬───────────────────────┤
│              │              │                       │
│  Client      │   Server     │   External            │
│  :5173       │   :5000      │                       │
│              │              │                       │
│  React 19    │  Express 4   │  MongoDB Atlas        │
│  Vite HMR    │  Mongoose 8  │  Gemini AI            │
│  Tailwind    │  Rate Limit  │                       │
│  Framer Mtn  │              │                       │
│              │              │                       │
├──────────────┴──────────────┴───────────────────────┤
│           Shared Design Tokens (npm workspace)      │
└─────────────────────────────────────────────────────┘
```

**Data flow:** Client → Vite proxy (`/api` → `:5000`) → Express → MongoDB / Gemini

---

## Pages

### Home (`/`)

The landing page is composed of 7 modular sections:

**Hero** → **LogoCloud** → **Bento Stats** → **Course Catalog** → **Testimonials** → **FAQ** → **CTA**

Each section uses `whileInView` Framer Motion animations with the shared easing curve `[0.16, 1, 0.3, 1]`.

### Programs (`/programs`) & Course Detail (`/course/:id`)

Dynamic course listing from MongoDB. Each course links to a detail page with a curriculum accordion and an enroll CTA. Includes fallback static data so pages render even when the API is offline.

### About (`/about`)

Brand story, mission, team overview. Includes the ITQHUB logo integration and the blueprint-textured CTA section.

### Contact Terminal (`/contact`)

The standout feature — a macOS-style code editor window where users fill in a syntax-highlighted `const inquiry = {}` object:

- **Purple keywords** (`const`, `await`) · **Cyan variables** (`name`, `email`) · **Orange string values**
- Blinking `#d19a66` cursor on the focused field
- Inline red code comments for validation: `// ! Required: This parameter cannot be null.`
- Animated success log: `> POST /api/leads [SUCCESS]`
- Three glassmorphic operations cards below (Address, Contact, Hours)

### Admin Portal (`/itq-admin-portal`)

Passcode-gated CRM with two views:

- **Dashboard**: Total Leads, Most Popular Course, Conversion Rate
- **Lead Pipeline**: Table with Name, Phone, Course, Message, Date, and a color-coded status dropdown (New → Contacted → Enrolled → Closed) with optimistic updates

---

## AI Career Mentor

Floating chat widget powered by Gemini with a three-tier resilience strategy:

```
User message
    │
    ▼
Rate Limiter (20 req / 15 min)
    │
    ▼
Model Fallback Chain:
  1. gemini-2.5-flash
  2. gemini-2.0-flash
  3. gemini-2.0-flash-lite
    │
    ▼ (all fail or 429?)
Smart Mock Mode
  → keyword-matched curated responses
  → user never sees an error
```

The system prompt pre-loads ITQHUB's knowledge base (courses, fees, placements, packages). When Gemini quota is exhausted, responses come from a keyword-matched dictionary — the transition is seamless.

---

## Database

### Lead Schema

```javascript
{
  name:      String,   // required, min 2 chars
  email:     String,   // required, unique, validated via regex
  phone:     String,   // required, Indian 10-digit pattern
  course:    String,   // default: "General Enquiry"
  source:    String,   // default: "website"
  status:    String,   // enum: new | contacted | converted | closed
  message:   String,   // from terminal contact form
  createdAt: Date,
  updatedAt: Date
}
// Compound unique index: { email: 1, phone: 1 }
```

### Course Schema

```javascript
{
  icon:        String,   // emoji identifier
  title:       String,   // required, unique
  duration:    String,   // e.g., "6 Months"
  level:       String,   // default: "Beginner → Advanced"
  tech:        [String], // e.g., ["React", "Node.js"]
  description: String,   // required
  span:        String,   // Tailwind bento grid class
  color:       String,   // accent color hex
  isActive:    Boolean   // soft-delete toggle
}
```

---

## API Reference

| Method | Endpoint | Auth | Description |
|:-------|:---------|:-----|:------------|
| `GET` | `/api/health` | — | Server status + DB state |
| `GET` | `/api/courses` | — | All active courses |
| `POST` | `/api/courses/seed` | — | Seed course catalog (idempotent) |
| `GET` | `/api/leads` | Admin | All leads, newest first |
| `POST` | `/api/leads` | — | Create lead (`201` / `400` / `409`) |
| `PATCH` | `/api/leads/:id/status` | Admin | Update lead status |
| `POST` | `/api/chat` | Rate-limited | AI career mentor |

**Lead `409` Conflict:** Duplicate email or phone returns `"You've already submitted an enquiry"` — this is by design, not a bug.

---

## Design Token System

All visual values are defined in `shared/design-tokens.js` and consumed by `tailwind.config.js`. Components reference semantic tokens, never raw hex values.

```
Surface:  #030712 → #0A0F1A → #111827
Accent:   #2563EB (ITQHUB Blue) → #60A5FA → #1D4ED8
Text:     #FFFFFF → #94A3B8 → #475569
Status:   #22C55E (success) · #F59E0B (warning) · #EF4444 (error)

Fonts:    Geist Sans (UI) · Geist Mono (code) · Inter (fallback)
Effects:  glassmorphism · noise texture · card-glow · metallic text
```

---

## Quick Start

```bash
# Clone
git clone https://github.com/your-username/ITQHUB.git && cd ITQHUB

# Install all workspaces
npm install

# Configure environment
cp server/.env.example server/.env
# → Add your MongoDB Atlas URI and (optional) Gemini API key

# Start dev servers
npm run dev
```

| Service | URL |
|:--------|:----|
| Client | `http://localhost:5173` |
| Server | `http://localhost:5000` |
| Health | `http://localhost:5000/api/health` |

> Courses auto-seed on first startup. No manual database setup needed.

---

## Environment Variables

Create `server/.env` from the template:

```env
PORT=5000
CLIENT_URL=http://localhost:5173
MONGODB_URI=mongodb+srv://<user>:<pass>@<cluster>.mongodb.net/?retryWrites=true&w=majority
GEMINI_API_KEY=your_key_here  # optional — chatbot uses mock mode without it
```

| Variable | Required | Purpose |
|:---------|:---------|:--------|
| `MONGODB_URI` | **Yes** | Atlas connection string |
| `GEMINI_API_KEY` | No | AI chatbot (falls back to smart mock) |
| `PORT` | No | Server port, default `5000` |
| `CLIENT_URL` | No | CORS origin, default `http://localhost:5173` |

---

## Project Structure

```
ITQHUB/
├── client/                        # React SPA (Vite)
│   ├── src/
│   │   ├── components/
│   │   │   ├── Hero.jsx           # Flashlight grid + animated headline
│   │   │   ├── Bento.jsx          # Stats grid with animated counters
│   │   │   ├── ChatAssistant.jsx  # AI chatbot widget
│   │   │   ├── Courses.jsx        # Dynamic course catalog
│   │   │   ├── Comparison.jsx     # ITQHUB vs Others comparison
│   │   │   ├── CTA.jsx            # Blueprint CTA section
│   │   │   ├── EnquiryModal.jsx   # Global lead capture modal
│   │   │   ├── FAQ.jsx            # Expandable FAQ accordion
│   │   │   ├── Footer.jsx         # Site footer with social links
│   │   │   ├── Navbar.jsx         # Glassmorphic navigation
│   │   │   ├── BackgroundDepth.jsx# 6-layer atmospheric lighting
│   │   │   ├── SEO.jsx            # Dynamic meta tag manager
│   │   │   ├── Toast.jsx          # Notification system
│   │   │   ├── Logo.jsx           # SVG brand mark
│   │   │   ├── LogoCloud.jsx      # Partner logo strip
│   │   │   ├── Testimonials.jsx   # Student reviews
│   │   │   ├── ScrollToTop.jsx    # Route-change scroll reset
│   │   │   └── MagneticButton.jsx # Magnetic hover effect
│   │   ├── layouts/
│   │   │   └── MainLayout.jsx     # Navbar + Footer + Chat + Modal
│   │   ├── pages/
│   │   │   ├── Home.jsx           # Landing page orchestrator
│   │   │   ├── AboutPage.jsx      # Brand story + CTA
│   │   │   ├── ContactPage.jsx    # Developer terminal form
│   │   │   ├── CourseDetail.jsx   # Curriculum accordion + sidebar
│   │   │   ├── CoursesPage.jsx    # Programs listing
│   │   │   └── AdminPage.jsx      # CRM dashboard (protected)
│   │   ├── lib/motion.js          # Shared animation presets
│   │   ├── App.jsx                # Router + loading screen
│   │   ├── main.jsx               # Entry point
│   │   └── index.css              # Global styles + Tailwind
│   ├── tailwind.config.js         # Extends shared design tokens
│   ├── vite.config.js             # Dev proxy + aliases
│   └── index.html                 # OG meta + font loading
│
├── server/                        # Express API
│   ├── models/
│   │   ├── Course.js              # Course schema
│   │   └── Lead.js                # Lead schema + unique index
│   ├── routes/
│   │   ├── courses.js             # CRUD + auto-seed
│   │   ├── leads.js               # Validation + duplicate guard
│   │   └── chat.js                # Gemini + fallback + rate limit
│   ├── server.js                  # Entry + MongoDB connect
│   └── .env.example               # Env template
│
├── shared/
│   └── design-tokens.js           # Colors · Typography · Shadows
│
├── package.json                   # Workspace config + scripts
├── .gitignore                     # Excludes .env files
└── README.md
```

---

## Security

| Measure | Implementation |
|:--------|:--------------|
| **Secrets** | All credentials in `.env`, excluded via `.gitignore` |
| **Validation** | Server-side regex on email + phone for every submission |
| **Duplicates** | Compound unique index `{ email, phone }` at database level |
| **Rate Limiting** | Chat endpoint: 20 req / 15 min per IP |
| **CORS** | Strict origin — only `CLIENT_URL` is allowed |
| **No Hardcoded Keys** | API keys loaded exclusively from `process.env` |

---

## SEO Implementation

Custom `SEO.jsx` component dynamically manages `<title>`, `<meta description>`, and Open Graph tags per route — no external dependencies.

| Page | Title |
|:-----|:------|
| Home | ITQHUB \| Master the Craft \| Elite Software Training |
| About | About Us \| ITQHUB |
| Contact | Terminal \| Contact ITQHUB |
| Admin | Admin Portal \| ITQHUB |

Static `index.html` includes full OG/Twitter Card meta for social sharing + preloaded Geist Sans / Geist Mono fonts.

---

## Challenges & Learnings

| Challenge | Solution |
|:----------|:---------|
| Gemini API quota exhaustion during traffic spikes | Multi-model fallback chain + keyword-matched smart mock mode |
| React 19 dropped support for `react-helmet` | Built a custom `SEO.jsx` component using `useEffect` + DOM manipulation |
| Vite `React.lazy()` chunk loading errors in dev | Switched critical routes to synchronous imports |
| Duplicate lead submissions flooding the database | Compound unique index + pre-check query + `409 Conflict` response |
| Contact form felt generic | Replaced with an interactive developer terminal (syntax highlighting, blinking cursor, inline code-comment errors) |

---

## Future Improvements

- [ ] JWT-based admin authentication (replace passcode gate)
- [ ] Student dashboard with enrollment tracking
- [ ] Payment integration (Razorpay) for course enrollment
- [ ] Email notifications on new lead submissions
- [ ] Image optimization — convert all assets to WebP
- [ ] Lighthouse performance audit + Core Web Vitals tuning
- [ ] CI/CD pipeline with GitHub Actions
- [ ] Docker containerization for deployment

---

## Contributing

1. Fork the repository
2. Create your branch: `git checkout -b feature/your-feature`
3. Commit changes: `git commit -m "feat: add your feature"`
4. Push: `git push origin feature/your-feature`
5. Open a Pull Request

**Code standards:** All colors must use design tokens. Every page needs `<SEO>`. Animations use easing `[0.16, 1, 0.3, 1]`.

---

## License

MIT

---

<div align="center">

**Built with obsidian precision.**

*ITQHUB — Master the Craft.*

</div>

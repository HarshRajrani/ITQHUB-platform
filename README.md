# 🚀 ITQHUB — Website Challenge

> **Goal:** Ship a production-grade, visually stunning tech platform in **36 hours**.

---

## Tech Stack

| Layer        | Technology                                      |
|--------------|--------------------------------------------------|
| **Frontend** | React 19 · Vite · Tailwind CSS 3 · Framer Motion |
| **Backend**  | Node.js · Express 4 · Mongoose 8                |
| **Database** | MongoDB Atlas                                    |
| **Design**   | Obsidian Dark theme · Stitch MCP tokens          |
| **Tooling**  | npm Workspaces · Nodemon · PostCSS · ESM         |

---

## Monorepo Structure

```
ITQHUB/
├── client/          # React (Vite) front-end
│   ├── src/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   ├── index.css
│   │   └── lib/
│   │       └── motion.js       # Framer Motion presets
│   ├── tailwind.config.js      # ← consumes shared tokens
│   ├── vite.config.js
│   └── index.html
│
├── server/          # Express API server
│   ├── server.js
│   └── .env.example
│
├── shared/          # Cross-workspace design tokens
│   └── design-tokens.js
│
├── design_system.md # Stitch MCP ↔ Tailwind bridge
├── package.json     # Root workspace config
├── .gitignore
└── README.md
```

---

## Quick Start

```bash
# 1 — Install all workspaces
npm install

# 2 — Copy & configure env
cp server/.env.example server/.env
# → Paste your MongoDB Atlas URI

# 3 — Run both client & server
npm run dev
```

| Service  | URL                        |
|----------|----------------------------|
| Client   | http://localhost:5173       |
| Server   | http://localhost:5000       |
| Health   | http://localhost:5000/api/health |

---

## Design System

The **Obsidian Dark** theme is defined in [`design_system.md`](./design_system.md) and implemented through shared design tokens in [`shared/design-tokens.js`](./shared/design-tokens.js). Tailwind's config extends directly from these tokens — no hardcoded values allowed.

---

## License

MIT © Karan

# ITQHUB — Design System Bridge

> This file acts as the single source of truth connecting the **Stitch MCP Design System**
> to the front-end implementation in `client/tailwind.config.js`.

---

## Theme: Obsidian Dark

A premium, high-contrast dark interface built for developer tools and tech platforms.

### Color Tokens

| Token              | Hex       | Usage                             |
|--------------------|-----------|-----------------------------------|
| `obsidian`         | `#0B0F19` | Primary background                |
| `obsidian-light`   | `#121829` | Card / elevated surface           |
| `obsidian-lighter` | `#1A2138` | Hover states, secondary surfaces  |
| `slate-border`     | `#2A3250` | Borders, dividers                 |
| `brand-cyan`       | `#00E5FF` | Primary accent / CTAs             |
| `brand-purple`     | `#7C3AED` | Secondary accent / gradients      |
| `brand-pink`       | `#F472B6` | Tertiary accent / highlights      |
| `text-primary`     | `#F1F5F9` | Main body text                    |
| `text-secondary`   | `#94A3B8` | Muted / supporting text           |
| `text-tertiary`    | `#64748B` | Disabled / placeholder text       |
| `success`          | `#34D399` | Success states                    |
| `warning`          | `#FBBF24` | Warning states                    |
| `error`            | `#F87171` | Error states                      |

### Typography

| Property     | Value                          |
|--------------|--------------------------------|
| Font Family  | `"Inter", sans-serif`          |
| Heading Font | `"Outfit", sans-serif`         |
| Base Size    | `16px`                         |
| Scale        | `1.25` (Major Third)           |

### Shape

| Property       | Value   |
|----------------|---------|
| Border Radius  | `12px`  (cards), `8px` (buttons), `9999px` (pills) |
| Shadow         | `0 4px 24px rgba(0, 0, 0, 0.4)` |

### Motion

| Property       | Value                  |
|----------------|------------------------|
| Easing         | `cubic-bezier(0.16, 1, 0.3, 1)` |
| Duration (fast)| `150ms`                |
| Duration (base)| `300ms`                |
| Duration (slow)| `500ms`                |

---

## Integration Notes

- Tailwind config consumes tokens from `shared/design-tokens.js`.
- Framer Motion presets in `client/src/lib/motion.js` use the motion tokens above.
- All components must reference these tokens — **no hardcoded hex values**.

# PRD: PrimeTools Next.js Starter Template

> This document defines the requirements for the base Next.js starter template used by all new chat-generated projects. Every app created through PrimeTools must inherit this foundation to ensure brand consistency, shared functionality, and a professional baseline across all internal tools.

---

## 1. Overview

### 1.1 Purpose

Provide a standardized Next.js starter that every AI-generated app inherits. This ensures:

- Consistent PrimeMover brand identity across all projects
- Dark/light mode with dark as the default
- Shared footer with logo, branding, and legal info
- Built-in debugging infrastructure (console log capture via postMessage)
- Responsive, accessible, production-grade baseline
- Uniform design tokens, typography, and component patterns

### 1.2 Brand Identity

**Company:** PrimeMover
**Product:** PrimeTools (Internal App Builder)
**Brand Colors:**

| Name        | Light Mode (OKLCH)          | Dark Mode (OKLCH)            | Approximate Hex |
| ----------- | --------------------------- | ---------------------------- | ---------------- |
| Black       | `oklch(0.25 0.04 55)`      | `oklch(0.14 0.02 50)`       | #2D2518          |
| Dark Brown  | `oklch(0.30 0.05 55)`      | `oklch(0.22 0.03 52)`       | #3A2D1E          |
| Beige       | `oklch(0.96 0.01 75)`      | `oklch(0.93 0.015 72)`      | #F5F0E8          |
| Gold        | `oklch(0.80 0.15 85)`      | `oklch(0.75 0.14 80)`       | #D4A843          |

**Brand Fonts:**
- Body: **Fira Sans** (weights: 300, 400, 500, 600, 700)
- Monospace: **Fira Code** (weights: 300, 400, 500, 600, 700)

---

## 2. Theme System

### 2.1 Dark Mode (Default)

Dark mode MUST be the default. Implementation:

- Inline `<script>` in `<head>` to detect `prefers-color-scheme` and apply `.dark` class before paint (no flash)
- Default to dark if no system preference is detected
- `suppressHydrationWarning` on `<html>` to prevent React hydration mismatch
- Listen for system preference changes and update in real-time
- Optional: localStorage override for manual toggle

```javascript
(function() {
  var prefersDark = window.matchMedia('(prefers-color-scheme: light)').matches === false;
  if (prefersDark || !window.matchMedia('(prefers-color-scheme: light)').matches) {
    document.documentElement.classList.add('dark');
  }
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
    document.documentElement.classList.toggle('dark', e.matches);
  });
})();
```

### 2.2 CSS Custom Properties

Use OKLCH color space for perceptually uniform colors. All colors defined as CSS variables on `:root` and `.dark`:

**Light Mode (`:root`):**

```css
--background: oklch(0.96 0.01 75);      /* Warm beige */
--foreground: oklch(0.25 0.04 55);      /* Near-black brown */
--card: oklch(0.975 0.008 75);          /* Slightly lighter beige */
--card-foreground: oklch(0.25 0.04 55);
--popover: oklch(0.975 0.008 75);
--popover-foreground: oklch(0.25 0.04 55);
--primary: oklch(0.30 0.05 55);         /* Dark brown */
--primary-foreground: oklch(0.96 0.01 75);
--secondary: oklch(0.90 0.02 70);       /* Light warm neutral */
--secondary-foreground: oklch(0.25 0.04 55);
--muted: oklch(0.93 0.015 72);
--muted-foreground: oklch(0.50 0.03 60);
--accent: oklch(0.80 0.15 85);          /* Gold */
--accent-foreground: oklch(0.25 0.04 55);
--destructive: oklch(0.577 0.245 27.325);
--border: oklch(0.85 0.03 65);
--input: oklch(0.85 0.03 65);
--ring: oklch(0.70 0.10 80);            /* Warm gold ring */
```

**Dark Mode (`.dark`):**

```css
--background: oklch(0.14 0.02 50);      /* Deep dark brown-black */
--foreground: oklch(0.93 0.015 72);     /* Warm off-white */
--card: oklch(0.18 0.025 50);
--card-foreground: oklch(0.93 0.015 72);
--popover: oklch(0.18 0.025 50);
--popover-foreground: oklch(0.93 0.015 72);
--primary: oklch(0.80 0.15 85);         /* Gold (elevated to primary in dark) */
--primary-foreground: oklch(0.10 0.03 46);
--secondary: oklch(0.22 0.03 52);
--secondary-foreground: oklch(0.93 0.015 72);
--muted: oklch(0.20 0.025 50);
--muted-foreground: oklch(0.68 0.03 65);
--accent: oklch(0.75 0.14 80);          /* Slightly muted gold */
--accent-foreground: oklch(0.15 0.04 50);
--destructive: oklch(0.704 0.191 22.216);
--border: oklch(0.93 0.015 72 / 12%);   /* Semi-transparent borders */
--input: oklch(0.93 0.015 72 / 15%);
--ring: oklch(0.70 0.10 80);
```

### 2.3 Border Radius Scale

```css
--radius: 0.625rem; /* 10px base */
--radius-sm: calc(var(--radius) - 4px);  /* 6px */
--radius-md: calc(var(--radius) - 2px);  /* 8px */
--radius-lg: var(--radius);              /* 10px */
--radius-xl: calc(var(--radius) + 4px);  /* 14px */
```

### 2.4 Scrollbar Styling

Custom thin scrollbars matching the brand:

```css
* { scrollbar-width: thin; scrollbar-color: oklch(0.65 0.05 60) transparent; }
*::-webkit-scrollbar { width: 6px; height: 6px; }
*::-webkit-scrollbar-track { background: transparent; }
*::-webkit-scrollbar-thumb { background-color: oklch(0.65 0.05 60); border-radius: 9999px; }
*::-webkit-scrollbar-thumb:hover { background-color: oklch(0.55 0.06 58); }

.dark * { scrollbar-color: oklch(0.25 0.035 50) transparent; }
.dark *::-webkit-scrollbar-thumb { background-color: oklch(0.25 0.035 50); }
.dark *::-webkit-scrollbar-thumb:hover { background-color: oklch(0.35 0.04 52); }
```

### 2.5 Chart Colors (for data visualizations)

```css
--chart-1: oklch(0.75 0.12 85);  /* Gold */
--chart-2: oklch(0.65 0.10 70);  /* Warm brown */
--chart-3: oklch(0.45 0.06 55);  /* Dark brown */
--chart-4: oklch(0.60 0.12 50);  /* Copper */
--chart-5: oklch(0.55 0.10 40);  /* Deep amber */
```

---

## 3. Layout & Structure

### 3.1 Root Layout

Every app MUST include:

1. **Google Fonts**: Fira Sans + Fira Code loaded via `next/font/google`
2. **Dark mode script**: Inline in `<head>` (see 2.1)
3. **Background layer**: Optional branded background image with overlay
4. **Provider stack**: Session > SWR > App-specific providers > children
5. **Metadata**: Title template using `%s | PrimeTools`, noindex for internal apps

```tsx
<html lang="en" suppressHydrationWarning>
  <head>{/* dark mode script */}</head>
  <body className={`${firaSans.variable} ${firaCode.variable} antialiased`}>
    {/* Optional background layer */}
    <div className="fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-background" />
    </div>
    <Providers>{children}</Providers>
  </body>
</html>
```

### 3.2 App Header

Standard header included on every page:

- **Height**: 64px (`h-16`)
- **Style**: `bg-background/80 backdrop-blur-md` with conditional bottom border
- **Left side**: PrimeTools logo (28px height, `h-7 w-auto`), app name/selector
- **Right side**: Action buttons, help link, user avatar/menu
- **Responsive**: Mobile hamburger menu replaces desktop nav at `lg` breakpoint
- **Logo**: Links to home `/`, always visible

### 3.3 App Footer (Required)

Every generated app MUST include a branded footer:

```
+-----------------------------------------------------------+
|  [PrimeTools Logo]  Built with PrimeTools                 |
|  PrimeMover Internal Tools Platform                       |
|  ------------------------------------------------------- |
|  Privacy Policy  |  Terms  |  Help  |  v{version}        |
+-----------------------------------------------------------+
```

**Requirements:**

- PrimeTools logo (small, 20px height)
- "Built with PrimeTools" tagline
- "PrimeMover Internal Tools Platform" subtitle
- Links: Privacy Policy, Terms of Service, Help
- App version or build identifier
- `bg-card` background with `border-t`
- Muted foreground text (`text-muted-foreground text-xs`)
- Centered on mobile, spread on desktop
- Dark mode aware (all colors from CSS variables)
- Minimum height: 60px
- Padding: `px-6 py-4`

### 3.4 Responsive Breakpoints

Follow Tailwind defaults, mobile-first approach:

| Breakpoint | Width  | Usage                           |
| ---------- | ------ | ------------------------------- |
| `sm`       | 640px  | Small spacing/padding tweaks    |
| `md`       | 768px  | Mobile/tablet threshold         |
| `lg`       | 1024px | Desktop layout switch           |
| `xl`       | 1280px | Wide screen adjustments         |

- Default styles target mobile
- Use `md:` for tablet, `lg:` for desktop overrides
- Hide/show elements: `hidden lg:block` / `lg:hidden`

---

## 4. Component Library

### 4.1 Required Dependencies

```json
{
  "tailwindcss": "^4",
  "@tailwindcss/postcss": "^4",
  "tw-animate-css": "^1.3",
  "class-variance-authority": "^0.7",
  "clsx": "latest",
  "tailwind-merge": "latest",
  "lucide-react": "^0.540",
  "@radix-ui/react-dialog": "latest",
  "@radix-ui/react-dropdown-menu": "latest",
  "@radix-ui/react-tooltip": "latest",
  "@radix-ui/react-collapsible": "latest",
  "@radix-ui/react-select": "latest",
  "@radix-ui/react-slot": "latest",
  "@radix-ui/react-avatar": "latest",
  "@radix-ui/react-scroll-area": "latest"
}
```

### 4.2 Utility Function

Every app must include the `cn()` utility:

```typescript
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

### 4.3 Base UI Components (shadcn/ui, new-york style)

The following components MUST be available in the starter:

| Component       | Source          | Key Features                              |
| --------------- | --------------- | ----------------------------------------- |
| Button          | shadcn/ui       | Variants: default, destructive, outline, secondary, ghost, link. Sizes: sm, default, lg, icon |
| Input           | shadcn/ui       | h-9, focus ring, disabled state, file input styling |
| Textarea        | shadcn/ui       | Auto-resize, min-h-16, field-sizing: content |
| Badge           | shadcn/ui       | Variants: default, secondary, destructive, outline |
| Dialog          | shadcn/ui       | Overlay, animations, keyboard dismiss, focus trap |
| Dropdown Menu   | shadcn/ui       | Submenu support, checkbox/radio items, shortcuts |
| Tooltip         | shadcn/ui       | Arrow, auto-positioning, delay: 0         |
| Select          | shadcn/ui       | Searchable, groups, scroll buttons         |
| Avatar          | shadcn/ui       | Image + text fallback, circular            |
| Collapsible     | shadcn/ui       | Animated expand/collapse                   |
| Scroll Area     | shadcn/ui       | Custom scrollbar, horizontal/vertical      |

### 4.4 shadcn Configuration

```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "new-york",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "",
    "css": "app/globals.css",
    "baseColor": "neutral",
    "cssVariables": true,
    "prefix": ""
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  },
  "iconLibrary": "lucide"
}
```

---

## 5. Console Log Capture (Debugging Infrastructure)

### 5.1 Purpose

Every app that renders in a preview iframe MUST support forwarding console output to the parent PrimeTools app via `postMessage`. This enables the Console panel in the preview to display logs, warnings, and errors for debugging.

### 5.2 PostMessage Protocol

The app must inject console interception that sends structured messages to `window.parent`:

```javascript
// Intercept console methods and forward to parent
['log', 'warn', 'error', 'info'].forEach(function(level) {
  var original = console[level];
  console[level] = function() {
    original.apply(console, arguments);
    try {
      var args = Array.from(arguments);
      var message = args.map(function(a) {
        if (a === null) return 'null';
        if (a === undefined) return 'undefined';
        if (a instanceof Error) return a.message + (a.stack ? '\n' + a.stack : '');
        if (typeof a === 'object') {
          try { return JSON.stringify(a, null, 2); } catch(e) { return String(a); }
        }
        return String(a);
      }).join(' ');

      window.parent.postMessage({
        type: 'console',
        level: level,
        message: message,
        timestamp: Date.now()
      }, '*');
    } catch(e) {}
  };
});

// Capture uncaught errors
window.addEventListener('error', function(e) {
  window.parent.postMessage({
    type: 'console',
    level: 'error',
    message: e.message + (e.filename ? ' at ' + e.filename + ':' + e.lineno : ''),
    timestamp: Date.now()
  }, '*');
});

// Capture unhandled promise rejections
window.addEventListener('unhandledrejection', function(e) {
  window.parent.postMessage({
    type: 'console',
    level: 'error',
    message: 'Unhandled Promise Rejection: ' + (e.reason && e.reason.message ? e.reason.message : String(e.reason)),
    timestamp: Date.now()
  }, '*');
});
```

### 5.3 Message Format

```typescript
interface ConsoleMessage {
  type: 'console'           // Always 'console' for log messages
  level: 'log' | 'warn' | 'error' | 'info'
  message: string            // Serialized log content
  timestamp: number          // Date.now() epoch ms
}
```

### 5.4 Integration Point

This script MUST be included in the app's root layout or `_document`, ideally as an inline `<script>` in `<head>` so it captures logs from the earliest point:

```html
<head>
  <script dangerouslySetInnerHTML={{ __html: `/* console capture script */` }} />
</head>
```

### 5.5 Parent-Side Handling

PrimeTools listens for these messages via `window.addEventListener('message', ...)` in the `WebPreviewBody` component and displays them in the `WebPreviewConsole` panel with:

- Color-coded output (red for errors, yellow for warnings)
- Timestamp per entry
- Log count badge on the Console trigger
- Clear button to reset logs
- "Send to chat" button to forward logs into the AI chat for debugging help

---

## 6. Error Handling

### 6.1 Error Boundary

Every app should include a root error boundary (`error.tsx`) that:

- Catches rendering errors gracefully
- Shows a branded error state (PrimeTools colors)
- Forwards errors via postMessage to parent (see Section 5)
- Provides a "Try again" action

### 6.2 Not Found Page

Include `not-found.tsx` with:

- Branded 404 page matching theme
- Link back to home
- PrimeTools footer

### 6.3 Loading States

Use consistent loading patterns:

- Skeleton loaders for content areas (`bg-muted animate-pulse rounded-md`)
- Spinner for actions (`animate-spin` on a circle icon)
- Blur overlay for form submission states

---

## 7. Typography Standards

### 7.1 Scale

| Usage            | Class         | Size   |
| ---------------- | ------------- | ------ |
| Page title       | `text-2xl`    | 24px   |
| Section heading  | `text-xl`     | 20px   |
| Subsection       | `text-lg`     | 18px   |
| Body text        | `text-base`   | 16px   |
| UI labels        | `text-sm`     | 14px   |
| Captions/meta    | `text-xs`     | 12px   |
| Tiny labels      | `text-[11px]` | 11px   |
| Badges/pills     | `text-[10px]` | 10px   |

### 7.2 Weight Usage

| Context               | Weight          |
| --------------------- | --------------- |
| Body text             | `font-normal` (400) |
| UI labels             | `font-medium` (500) |
| Headings              | `font-semibold` (600) |
| Emphasis              | `font-bold` (700) |
| Subtle text           | `font-light` (300) |

### 7.3 Code/Monospace

Use `font-mono` (Fira Code) for:

- Console output
- Code snippets
- URLs and paths
- Technical identifiers
- Deployment URLs in headers

---

## 8. Accessibility Requirements

### 8.1 Keyboard Navigation

- All interactive elements focusable via Tab
- Escape closes modals, dropdowns, fullscreen
- Enter submits forms
- Arrow keys navigate selects/menus
- Focus ring: 3px width, `ring-ring/50` color

### 8.2 ARIA

- Use Radix UI primitives for built-in ARIA compliance
- `sr-only` text for icon-only buttons
- Proper heading hierarchy (h1-h6)
- Form labels for all inputs
- `aria-invalid` for validation states

### 8.3 Color Contrast

- All text meets WCAG 2.1 AA minimum contrast
- OKLCH color space ensures perceptual uniformity
- Destructive actions are red (#destructive) in both modes
- Don't rely on color alone to convey meaning

---

## 9. Animations & Transitions

### 9.1 Standard Transitions

Use CSS transitions, no Framer Motion dependency:

```css
transition-colors     /* Color changes: 150ms */
transition-opacity    /* Show/hide: 150ms */
transition-transform  /* Scale/move: 200ms */
transition-all        /* Multi-property: 200ms-300ms */
```

### 9.2 Component Animations

| Pattern            | Classes                                           |
| ------------------ | ------------------------------------------------- |
| Dialog enter       | `fade-in-0 zoom-in-95`                            |
| Dialog exit        | `fade-out-0 zoom-out-95`                          |
| Dropdown enter     | `fade-in-0 zoom-in-95 slide-in-from-top-2`       |
| Collapsible expand | Radix managed with CSS data-state selectors        |
| Loading spinner    | `animate-spin`                                    |
| Skeleton pulse     | `animate-pulse`                                   |
| Chevron rotate     | `transition-transform duration-200 rotate-180`    |

### 9.3 Library

Use `tw-animate-css` for animation utilities. No Framer Motion unless explicitly needed.

---

## 10. Responsive Design Patterns

### 10.1 Layout Strategy

- **Mobile** (< 768px): Single-column, bottom navigation, hamburger menu
- **Tablet** (768-1023px): Optional sidebar, adapted layouts
- **Desktop** (1024px+): Multi-panel, full navigation, resizable layouts

### 10.2 Common Patterns

```tsx
{/* Desktop only */}
<div className="hidden lg:flex">...</div>

{/* Mobile only */}
<div className="flex lg:hidden">...</div>

{/* Responsive padding */}
<div className="px-4 sm:px-6 lg:px-8">...</div>

{/* Panel switching on mobile */}
<BottomToolbar activePanel={activePanel} onPanelChange={setActivePanel} />
```

### 10.3 Mobile Detection Hook

```typescript
export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])
  return isMobile
}
```

---

## 11. Project Structure

### 11.1 Directory Layout

```
app/
  globals.css           # Theme tokens, base styles
  layout.tsx            # Root layout with providers + dark mode
  page.tsx              # Home page
  error.tsx             # Error boundary
  not-found.tsx         # 404 page
  api/                  # API routes
components/
  ui/                   # shadcn/ui primitives (button, input, dialog, etc.)
  shared/               # App-wide components (header, footer, layout)
  [feature]/            # Feature-specific components
lib/
  utils.ts              # cn() utility
  client-utils.ts       # useIsMobile, client-side helpers
hooks/                  # Custom React hooks
contexts/               # React context providers
public/
  logo.png              # PrimeTools logo
  icon.png              # App icon / favicon source
  favicon.ico           # Browser favicon
```

### 11.2 File Conventions

- `'use client'` directive on all interactive components
- TypeScript for all files (`.ts`, `.tsx`)
- Named exports for components (not default)
- Props interfaces defined inline or co-located
- `ComponentProps<>` pattern for extending HTML elements

---

## 12. Metadata & SEO

### 12.1 Root Metadata

```typescript
export const metadata: Metadata = {
  title: {
    default: '{App Name} - PrimeTools',
    template: '%s | PrimeTools',
  },
  description: '{App description}',
  robots: {
    index: false,     // Internal tools not indexed
    follow: false,
    googleBot: { index: false, follow: false },
  },
}
```

### 12.2 Favicons

- `favicon.ico` in `/public`
- `icon.png` for manifest
- `apple-icon.png` for iOS

---

## 13. Performance Guidelines

### 13.1 Client/Server Boundary

- Use Server Components by default
- `'use client'` only for interactive features (state, effects, event handlers)
- Keep layouts as Server Components where possible

### 13.2 Data Fetching

- SWR for client-side fetching with config:
  - `revalidateOnFocus: false`
  - `revalidateOnReconnect: true`
  - `errorRetryCount: 3`
  - `errorRetryInterval: 5000`

### 13.3 Images

- Use `next/image` for optimized images where possible
- Logo can use `<img>` for simplicity (small file, static)
- Background images: fixed positioning with `object-cover`

---

## 14. Starter Template Checklist

Every generated app must include:

- [ ] `globals.css` with full OKLCH theme tokens (light + dark)
- [ ] Dark mode as default with system detection script
- [ ] Fira Sans + Fira Code fonts loaded
- [ ] `cn()` utility in `lib/utils.ts`
- [ ] Custom scrollbar styling matching brand
- [ ] PrimeTools branded header with logo
- [ ] PrimeTools branded footer with logo, tagline, and links
- [ ] Console log capture script (postMessage to parent)
- [ ] Error boundary (`error.tsx`) with branded error state
- [ ] Not found page (`not-found.tsx`) with branded 404
- [ ] Base shadcn/ui components: Button, Input, Dialog, Tooltip, Badge
- [ ] `useIsMobile` hook for responsive behavior
- [ ] Proper `<html lang="en" suppressHydrationWarning>` setup
- [ ] Metadata with PrimeTools title template and noindex
- [ ] Tailwind v4 with PostCSS configuration
- [ ] TypeScript strict mode
- [ ] Lucide React for icons

---

## 15. Example: Minimal Page with All Standards

```tsx
import { AppHeader } from '@/components/shared/app-header'
import { AppFooter } from '@/components/shared/app-footer'

export const metadata = {
  title: 'Dashboard',
}

export default function DashboardPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <AppHeader />

      <main className="flex-1 px-4 sm:px-6 lg:px-8 py-6">
        <h1 className="text-2xl font-semibold text-foreground">
          Dashboard
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Overview of your workspace
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {/* Content cards using bg-card, border, rounded-lg */}
        </div>
      </main>

      <AppFooter />
    </div>
  )
}
```

---

## 16. Version History

| Version | Date       | Changes                                      |
| ------- | ---------- | -------------------------------------------- |
| 1.0     | 2025-02-12 | Initial PRD covering theme, components, console capture, layout |

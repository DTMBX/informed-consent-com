# Spacing System Quick Reference

## 8px Grid System

```css
--space-8: 8px    /* Tight internal spacing */
--space-16: 16px  /* Compact spacing, mobile card padding */
--space-24: 24px  /* Standard card padding, comfortable gaps */
--space-32: 32px  /* Section spacing (mobile) */
--space-48: 48px  /* Large section breaks */
--space-64: 64px  /* Section spacing (desktop) */
--space-96: 96px  /* Maximum section padding */
```

---

## Utility Classes

### Layout Containers
```tsx
.clinical-container    /* 960px - Medical/procedure content */
.content-reading       /* 720px - Long-form reading */
.content-max-width     /* 1200px - Wide layouts, tables */
.content-narrow        /* 960px - Narrow focused content */
```

### Vertical Spacing
```tsx
.section-spacing-y            /* Desktop: 64-96px padding */
.section-spacing-mobile       /* Mobile: 32-48px padding */
.section-header-spacing       /* Desktop: 32px bottom margin */
.section-header-spacing-mobile /* Mobile: 24px bottom margin */
```

### Card & Component Spacing
```tsx
.card-padding        /* 24px all sides (desktop) */
.card-padding-mobile /* 16-20px all sides (mobile) */
.card-stack         /* Vertical stack, 24px gaps */
.card-stack-mobile  /* Vertical stack, 16px gaps (mobile) */
```

### Glass Effects
```tsx
.glass-panel   /* 12px blur - Primary UI (header, nav) */
.glass-subtle  /* 8px blur - Secondary UI (badges, callouts) */
```

---

## Component Patterns

### Page Layout
```tsx
<div className="clinical-container px-4 sm:px-6 lg:px-8 py-8 md:py-16">
  {/* Content */}
</div>
```

### Section Header
```tsx
<div className="section-header-spacing-mobile md:section-header-spacing">
  <h2 className="mb-4">Section Title</h2>
  <p className="text-muted-foreground text-base leading-relaxed">
    Description text with good line-height for readability.
  </p>
</div>
```

### Card Stack
```tsx
<div className="card-stack card-stack-mobile">
  <Card className="card-padding">
    <CardHeader>...</CardHeader>
    <CardContent>...</CardContent>
  </Card>
  <Card className="card-padding">
    <CardHeader>...</CardHeader>
    <CardContent>...</CardContent>
  </Card>
</div>
```

### Two-Column Grid (Mobile Stack)
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  <Card className="card-padding">...</Card>
  <Card className="card-padding">...</Card>
</div>
```

---

## Typography Guidelines

### Line Heights
```
Body text:  1.7  (exceptional readability)
Headings:   1.2-1.5 (tighter for large text)
Captions:   1.5
```

### Font Sizes
```
H1: 2.25rem (36px) desktop, 1.875rem (30px) mobile
H2: 1.875rem (30px) desktop, 1.5rem (24px) mobile
H3: 1.5rem (24px) desktop, 1.25rem (20px) mobile
Body: 1rem (16px) - NEVER go below this on mobile
Small: 0.875rem (14px)
```

### Font Families
```tsx
// UI elements, headings, labels
font-family: 'Inter', sans-serif;  // .ui-text class

// Body content, paragraphs
font-family: 'Source Serif 4', serif;  // default body
```

---

## Color Usage

### Primary Actions
```css
--primary: oklch(0.62 0.18 250)        /* Vibrant blue */
--primary-foreground: oklch(0.98 0.005 250)
```

### Accent (Important CTAs)
```css
--accent: oklch(0.58 0.16 35)          /* Warm amber */
--accent-foreground: oklch(0.98 0.005 250)
```

### Evidence/Success
```css
--evidence: oklch(0.54 0.14 165)       /* Teal green */
```

### Caution/Warning
```css
--caution: oklch(0.66 0.14 70)         /* Amber yellow */
```

### Destructive/Risk
```css
--destructive: oklch(0.56 0.20 25)     /* Red - use sparingly */
```

---

## Responsive Breakpoints

```tsx
sm:  640px   /* Small tablets */
md:  768px   /* Tablets, sidebar appears */
lg:  1024px  /* Desktop */
xl:  1280px  /* Large desktop */
```

### Common Responsive Patterns
```tsx
// Stack on mobile, two columns on tablet+
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

// Small padding mobile, larger desktop
<div className="px-4 sm:px-6 lg:px-8">

// Small spacing mobile, larger desktop  
<div className="py-8 md:py-16">

// Hide on mobile, show on desktop
<div className="hidden md:block">

// Show on mobile, hide on desktop
<div className="md:hidden">
```

---

## Accessibility Requirements

### Touch Targets
```tsx
.tap-target  /* min-height: 44px, min-width: 44px */
```

### Focus States
```tsx
.focus-ring  /* 2px ring with high contrast */
```

### Motion Respect
```css
@media (prefers-reduced-motion: reduce) {
  /* All animations < 10ms or disabled */
}
```

---

## Common Mistakes to Avoid

❌ **DON'T**: Use arbitrary spacing values
```tsx
<div className="mb-5 pt-7">  // WRONG
```

✅ **DO**: Use semantic utilities or 8px-grid values
```tsx
<div className="section-header-spacing">  // RIGHT
```

---

❌ **DON'T**: Mix max-width values
```tsx
<div className="max-w-3xl">  // Inconsistent
<div className="max-w-5xl">  // Inconsistent
```

✅ **DO**: Use semantic container classes
```tsx
<div className="clinical-container">    // Medical content
<div className="content-reading">       // Long-form text
```

---

❌ **DON'T**: Apply glass effects everywhere
```tsx
<div className="glass-panel">  // On large scrolling content - WRONG
```

✅ **DO**: Limit to primary UI surfaces only
```tsx
<header className="glass-panel">  // Header/nav - RIGHT
<div className="glass-subtle">    // Badges/callouts - RIGHT
```

---

❌ **DON'T**: Use inconsistent card padding
```tsx
<Card className="p-6">   // Some cards
<Card className="p-8">   // Other cards - INCONSISTENT
```

✅ **DO**: Use semantic card-padding utility
```tsx
<Card className="card-padding">  // Always consistent
```

---

## Quick Decision Tree

### "What container should I use?"
- Medical/procedure content → `clinical-container`
- Long article/reading → `content-reading`
- Wide comparison/table → `content-max-width`

### "What spacing utility?"
- Page top/bottom → `py-8 md:py-16`
- Section header → `section-header-spacing-mobile md:section-header-spacing`
- Card interior → `card-padding`
- Card stack → `card-stack card-stack-mobile`

### "What width for text?"
- Short UI text → No restriction
- Paragraphs → Max ~720px (content-reading)
- Lists/benefits → Max ~960px (clinical-container)

### "Should I use glass effect?"
- Primary nav/header → Yes, `glass-panel`
- Badge/callout → Yes, `glass-subtle`
- Card background → No
- Large content area → No

---

## Examples from Codebase

### Homepage (src/components/Homepage.tsx)
```tsx
<div className="clinical-container px-4 sm:px-6 lg:px-8 py-8 md:py-16">
  <div className="section-header-spacing-mobile md:section-header-spacing">
    <h1>Welcome</h1>
    <p className="text-muted-foreground">Description</p>
  </div>
  
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <Card className="card-padding">...</Card>
  </div>
</div>
```

### Procedure Detail (src/components/ProcedureDetail.tsx)
```tsx
<div className="content-reading px-4 sm:px-6 lg:px-8 py-8 md:py-16">
  <div className="section-header-spacing-mobile md:section-header-spacing">
    <h1>{procedure.name}</h1>
  </div>
  {/* Long-form content benefits from narrower width */}
</div>
```

### Settings (src/components/Settings.tsx)
```tsx
<div className="content-reading px-4 sm:px-6 lg:px-8 py-8 md:py-16">
  <div className="card-stack card-stack-mobile">
    <Card>...</Card>
    <Card>...</Card>
  </div>
</div>
```

---

**Remember**: Clinical clarity over flash. When in doubt, choose the simpler, more readable option.

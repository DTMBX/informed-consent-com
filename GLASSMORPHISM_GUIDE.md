# Glassmorphism Intensity Guide

This document outlines the strategic use of glassmorphism effects throughout the Respectful Care application. Glassmorphism is applied based on card hierarchy, purpose, and visual emphasis needs.

## Available Glass Variants

### `glass-minimal` 
**Properties:** blur 6px, opacity 0.15, minimal border
**Purpose:** Lightest glass effect for low-emphasis supporting content
**Use Cases:**
- Homepage feature cards (Library, Reflection Notes, Birth Plan, Vaccine Schedules)
- Interactive navigation elements that should feel lightweight
- Supporting information cards

**Example:**
```tsx
<Card variant="glass-minimal" className="...">
  {/* Content */}
</Card>
```

### `glass-subtle`
**Properties:** blur 8px, opacity 0.3, subtle border
**Purpose:** Standard glass effect for general content cards
**Use Cases:**
- Benefits/Risks cards in procedure detail pages
- Reflection timer and note cards
- Settings preference cards
- General content cards throughout the app

**Example:**
```tsx
<Card variant="glass-subtle" className="...">
  {/* Content */}
</Card>
```

### `glass-panel` (aliased as `glass`)
**Properties:** blur 16px, opacity 0.5, medium border
**Purpose:** Moderate glass effect for primary containers
**Use Cases:**
- Header navigation bar
- Primary containers requiring moderate prominence
- Modal backgrounds (when used with appropriate z-index)

**Example:**
```tsx
<header className="glass-panel">
  {/* Navigation */}
</header>
```

### `glass-strong`
**Properties:** blur 28px, opacity 0.7, stronger border
**Purpose:** Emphasized glass effect for important callout content
**Use Cases:**
- RSV warning cards (important medical information)
- Birth Plan Management card in Settings
- Critical alert cards requiring user attention
- Important feature announcements

**Example:**
```tsx
<Card variant="glass-strong" className="border-primary/30">
  {/* Important content */}
</Card>
```

### `glass-intense`
**Properties:** blur 32px, opacity 0.85, strong border
**Purpose:** Maximum glass effect for floating panels and modal overlays
**Use Cases:**
- Modal dialog backgrounds
- Floating action panels that need maximum distinction
- Overlays requiring clear separation from page content
- Future interactive tooltips or popovers requiring strong visual separation

**Example:**
```tsx
<Card variant="glass-intense" className="fixed z-50">
  {/* Modal or overlay content */}
</Card>
```

## Component Usage Examples

### Homepage Feature Cards
```tsx
<Card variant="glass-minimal" className="cursor-pointer hover:border-primary/40">
  <BookOpen className="text-primary" />
  <h3>Procedure Library</h3>
  <p>Explore 50+ procedures...</p>
</Card>
```

### Procedure Detail Cards (Benefits/Risks)
```tsx
<Card variant="glass-subtle" className="border-evidence/20">
  <CardHeader>
    <CardTitle>Benefits</CardTitle>
  </CardHeader>
  <CardContent>
    {/* Benefit list */}
  </CardContent>
</Card>
```

### Important Warning/Alert Cards
```tsx
<Card variant="glass-strong" className="border-2 border-primary/30">
  <CardHeader>
    <CardTitle className="flex items-center gap-2">
      <Baby size={32} weight="duotone" />
      Understanding RSV in Newborns
      <Badge className="bg-destructive">Important</Badge>
    </CardTitle>
  </CardHeader>
  {/* Critical information */}
</Card>
```

### Settings Birth Plan Management
```tsx
<Card variant="glass-strong" className="border-accent/30">
  <CardHeader>
    <CardTitle>Birth Plan Management</CardTitle>
  </CardHeader>
  <CardContent>
    <Button onClick={onBirthPlan}>Create or Edit Birth Plan</Button>
  </CardContent>
</Card>
```

## Design Principles

1. **Hierarchy Through Intensity**: More important content uses stronger glass effects (glass-strong, glass-intense), while supporting content uses lighter effects (glass-minimal, glass-subtle)

2. **Consistency Within Context**: Cards of similar importance within the same view should use the same variant
   - All homepage feature cards: `glass-minimal`
   - All settings preference cards: `glass-subtle`
   - All critical alerts: `glass-strong`

3. **Performance Considerations**: Avoid using intense glass effects on large scrolling backgrounds or animated elements, as backdrop-filter is computationally expensive

4. **Accessibility**: Extra Contrast Mode reduces glassmorphism transparency across the board for users requiring maximum readability

5. **Reduced Motion**: All blur and saturation effects respect `prefers-reduced-motion` media query settings

## Technical Implementation

Glass variants are defined in `/src/index.css` as utility classes:

```css
@layer utilities {
  .glass-minimal {
    background: oklch(0.18 0.016 250 / 0.15);
    backdrop-filter: blur(6px) saturate(140%);
    -webkit-backdrop-filter: blur(6px) saturate(140%);
    border: 1px solid oklch(0.28 0.02 250 / 0.2);
  }
  
  /* ... other variants ... */
}
```

The Card component in `/src/components/ui/card.tsx` accepts these variants via props:

```tsx
type CardVariant = "default" | "glass" | "glass-minimal" | "glass-subtle" | "glass-strong" | "glass-intense"

interface CardProps extends ComponentProps<"div"> {
  variant?: CardVariant
}
```

## Migration Path

When updating existing cards:

1. **Identify the card's purpose**: Is it interactive navigation, informational content, or a critical alert?
2. **Choose appropriate variant**: Reference the use cases above
3. **Test visibility**: Ensure text remains readable on the glass background
4. **Check Extra Contrast Mode**: Verify the card remains usable with increased contrast settings

## Future Enhancements

- Consider adding `glass-muted` for even lighter than minimal (opacity 0.08, blur 4px)
- Explore animated glass effects for hover states on interactive cards
- Implement dynamic glass intensity based on user preference slider (accessibility feature)
- Add glass variants with colored tints for semantic contexts (success, warning, error)

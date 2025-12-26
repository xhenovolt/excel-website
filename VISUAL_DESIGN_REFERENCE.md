# Visual Design Reference: Decision Pathways & Admissions Ladder

## Color Schemes

### PathSelector Card Colors
```
Day - Balanced Track:
  Icon Background: Emerald-100 (light) / Emerald-900/30 (dark)
  Icon Color: Emerald-600
  Border: Emerald-200 (light) / Emerald-800 (dark)
  Gradient BG: from-emerald-50 to-teal-50
  Hover BG Accent: Emerald-500

Day - Qur'an Track:
  Icon Background: Blue-100 / Blue-900/30
  Icon Color: Blue-600
  Border: Blue-200 / Blue-800
  Gradient BG: from-blue-50 to-cyan-50
  Hover BG Accent: Blue-500

Boarding - Balanced Track:
  Icon Background: Purple-100 / Purple-900/30
  Icon Color: Purple-600
  Border: Purple-200 / Purple-800
  Gradient BG: from-purple-50 to-pink-50
  Hover BG Accent: Purple-500

Boarding - Qur'an Track:
  Icon Background: Orange-100 / Orange-900/30
  Icon Color: Orange-600
  Border: Orange-200 / Orange-800
  Gradient BG: from-orange-50 to-red-50
  Hover BG Accent: Orange-500
```

### AdmissionsLadder Step Colors
```
Step 1 (Inquiry):
  Background: from-white to-blue-50
  Icon Circle: from-blue-500 to-blue-600
  Accent Color: Blue-600

Step 2 (Application):
  Background: from-white to-cyan-50
  Icon Circle: from-cyan-500 to-cyan-600
  Accent Color: Cyan-600

Step 3 (Placement):
  Background: from-white to-teal-50
  Icon Circle: from-teal-500 to-teal-600
  Accent Color: Teal-600

Step 4 (Enrollment):
  Background: from-white to-green-50
  Icon Circle: from-green-500 to-green-600
  Accent Color: Green-600
```

---

## Shadow Hierarchy

### Light Cards (Initial State)
```css
box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04), 
            0 4px 16px rgba(0, 0, 0, 0.08);
/* Very subtle, barely visible, fits light backgrounds */
```

### Medium Cards (Standard)
```css
box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08), 
            0 8px 24px rgba(0, 0, 0, 0.12);
/* Clearly elevated but not overwhelming */
```

### Elevated Cards (Hover/Expanded)
```css
box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12), 
            0 16px 40px rgba(0, 0, 0, 0.16);
/* Strong lift effect, clearly interactive */
```

### Deep Shadows (Modal-like)
```css
box-shadow: 0 12px 32px rgba(0, 0, 0, 0.16), 
            0 24px 64px rgba(0, 0, 0, 0.24);
/* Very prominent, for important overlays */
```

### Dark Mode Adjustments
All shadows use higher opacity:
- Light: `rgba(0, 0, 0, 0.3)` and `rgba(0, 0, 0, 0.4)`
- Medium: `rgba(0, 0, 0, 0.4)` and `rgba(0, 0, 0, 0.5)`
- Elevated: `rgba(0, 0, 0, 0.5)` and `rgba(0, 0, 0, 0.6)`

---

## Gradient Patterns

### Section Backgrounds
```css
/* Light mode */
background: linear-gradient(135deg, 
  rgba(245, 239, 235, 0.5) 0%, 
  rgba(248, 244, 241, 0.5) 50%, 
  rgba(255, 251, 248, 0.5) 100%);

/* Dark mode */
background: linear-gradient(135deg, 
  rgba(26, 58, 82, 0.2) 0%, 
  rgba(13, 42, 64, 0.1) 50%, 
  rgba(8, 28, 43, 0.05) 100%);
```

### Blue Gradient (Admissions Ladder)
```css
/* Light mode */
background: linear-gradient(135deg, 
  rgba(59, 130, 246, 0.08) 0%, 
  rgba(6, 182, 212, 0.04) 100%);

/* Dark mode */
background: linear-gradient(135deg, 
  rgba(59, 130, 246, 0.15) 0%, 
  rgba(6, 182, 212, 0.08) 100%);
```

### Text Gradient (Headlines)
```css
background: linear-gradient(135deg, #2d5a7b 0%, #3d6fa0 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;

/* Dark mode */
background: linear-gradient(135deg, #6fa3d4 0%, #8bb4db 100%);
```

---

## Typography Scale

### Headers
| Element | Size | Weight | Line-Height | Letter-Spacing |
|---------|------|--------|------------|-----------------|
| h1 | 48px / 72px | Bold (700) | 1.2 | -0.02em |
| h2 | 36px / 48px | Semibold (600) | 1.3 | -0.01em |
| h3 | 24px / 32px | Semibold (600) | 1.35 | 0 |
| h4 | 20px / 24px | Semibold (600) | 1.4 | 0.01em |

### Body
| Element | Size | Weight | Line-Height |
|---------|------|--------|------------|
| Body (p) | 16px | Normal (400) | 1.6 |
| Small | 14px | Normal (400) | 1.6 |
| Caption | 12px | Semibold (600) | 1.5 |
| Label | 13px | Semibold (600) | 1.6 |

### Font Family
- Primary: Inter (Sans-serif)
- Fallback: System UI fonts
- Smoothing: -webkit-font-smoothing: antialiased

---

## Spacing System

### Section Padding
```css
Mobile: py-20  /* 5rem = 80px */
Tablet: py-24  /* 6rem = 96px */
Desktop: py-28 /* 7rem = 112px */
```

### Component Padding
```css
Small cards: p-6   /* 24px */
Medium cards: p-8  /* 32px */
Large cards: p-10  /* 40px */

Tablet: p-8
Desktop: p-10
```

### Gaps & Margins
```css
Between sections: mb-16 / mb-20  /* 64px / 80px */
Between items: gap-6 / gap-8     /* 24px / 32px */
Within cards: space-y-6 / space-y-8
```

---

## Responsive Breakpoints

### Mobile-First Cascade
```
Base: 0-640px (mobile)
  - Single column layouts
  - Full width cards
  - Reduced padding
  - Smaller font sizes
  - Stacked vertical timeline

sm: 640px-768px
  - Minor adjustments

md: 768px-1024px (tablet)
  - 2 column grid
  - Medium padding
  - Alternating timeline (starts)
  - Larger fonts

lg: 1024px-1280px (desktop)
  - Full featured layout
  - All animations enabled
  - Complete shadow effects

xl: 1280px+ (large desktop)
  - Optimal experience
```

---

## Animation Keyframes

### Stagger Container
```javascript
{
  opacity: 0,
  transition: {
    staggerChildren: 0.1,    // 100ms between items
    delayChildren: 0.2       // 200ms before first
  }
}
```

### Fade & Slide In (Item)
```javascript
hidden: { opacity: 0, y: 20 }
show: { 
  opacity: 1, 
  y: 0,
  transition: { duration: 0.5 }
}
```

### Expand/Collapse Details
```javascript
hidden: { opacity: 0, height: 0 }
show: { 
  opacity: 1, 
  height: 'auto',
  transition: { duration: 0.4 }
}
exit: {
  opacity: 0, 
  height: 0,
  transition: { duration: 0.3 }
}
```

### Hover Effects
```javascript
whileHover: { y: -4 }    // Lift 4px
whileHover: { scale: 1.1 } // Grow 10%
transition: { duration: 0.2 } // Quick
```

### Timeline Progress Line
```javascript
hidden: { scaleY: 0, opacity: 0 }
show: {
  scaleY: 1,
  opacity: 1,
  transition: { duration: 0.8, delay: 0.3 }
}
```

---

## Component Layout Grids

### PathSelector Grid
```
Mobile: 
  grid-cols-1        (full width)
  gap-6              (24px gap)
  p-8                (32px padding)

Tablet/Desktop:
  grid-cols-2        (2 columns)
  gap-6              (24px gap)
  p-10               (40px padding)
```

### AdmissionsLadder Timeline (Desktop)
```
Position: Relative grid
Columns: 2 columns per step
Timeline: Vertical centered line
Cards: Alternating left-right

On Small Screens:
  grid-cols-1        (single column)
  Full width stacked
  Timeline: Left aligned
```

### Footer CTA
```
Desktop:
  flex flex-row
  gap-4
  justify-center

Mobile:
  flex-col
  gap-4
  Full width buttons
```

---

## Icon System

### PathSelector Icons
```
day-balanced:    Home (house icon)
day-hifz:        BookOpen (open book)
boarding-balanced: Users (multiple people)
boarding-hifz:   Zap (lightning bolt)

Size: w-7 h-7 (28px)
Padding: 56px container (14px padding)
Color: Matches theme (emerald/blue/purple/orange)
```

### AdmissionsLadder Icons
```
Step 1: MapPin (location pin)
Step 2: FileText (document)
Step 3: Users (people)
Step 4: CheckCircle (checkmark)

Size: w-8 h-8 (32px)
Container: w-16 h-16 (64px circle)
Color: White on gradient background
Ring: ring-4 ring-white (4px border)
```

---

## Accessibility Features

### Contrast Ratios
- Text on light: 4.5:1+ (WCAG AA)
- Text on dark: 4.5:1+ (WCAG AA)
- Interactive elements: Minimum 44x44px touch target
- Focus states: Visible ring or outline

### Keyboard Navigation
- Tab key: Works through all interactive elements
- Enter/Space: Activates buttons and expandable cards
- Arrow keys: Not required (linear flow)

### Screen Reader Support
- Semantic HTML structure
- Proper heading hierarchy (h1 → h2 → h3)
- Alt text on images (not applicable here)
- ARIA labels where needed (none currently)
- Button roles properly defined

### Motion Preferences
- All animations respect `prefers-reduced-motion`
- No auto-playing videos
- No flashing or flickering
- Animations are enhancement, not essential

---

## Dark Mode Implementation

### Color Adjustments
All components have dark: prefix variants:
- `dark:bg-neutral-800` (card backgrounds)
- `dark:text-neutral-50` (primary text)
- `dark:text-neutral-400` (secondary text)
- `dark:border-neutral-700` (borders)
- `dark:from-*-900/30` (gradient overlays)

### Shadow Adjustments
Dark mode uses higher opacity shadows:
```css
.dark .shadow-card {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4), 
              0 8px 24px rgba(0, 0, 0, 0.5);
}
```

### Text Gradient
Dark mode has lighter gradient:
```css
.dark .text-gradient-primary {
  background: linear-gradient(135deg, #6fa3d4 0%, #8bb4db 100%);
}
```

---

## Performance Optimizations

### CSS
- Utility classes for reusability
- Minimal specificity
- Hardware-accelerated properties (transform, opacity)
- No layout-triggering properties on hover

### Components
- Lazy load via scroll viewport
- AnimatePresence for efficient unmounting
- No unnecessary re-renders
- Memoization where appropriate

### Images
- Placeholder gradients (no images loading)
- Ready for real images (structure in place)
- Lazy loading prepared

---

## Browser Support

### Primary Targets
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

### Mobile
- iOS Safari 14+
- Android Chrome 90+
- Samsung Internet 14+

### Features Used
- CSS Grid
- Flexbox
- Gradients
- Backdrop Filter
- CSS Variables
- Modern JavaScript (ES6+)

### Fallbacks
- No critical fallbacks needed
- Graceful degradation for older browsers
- Progressive enhancement approach


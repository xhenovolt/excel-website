# Color & Typography Quick Reference
## Excel Islamic School - Visual Identity System

### 🎨 COLOR SYSTEM

#### PRIMARY (Deep Slate-Blue)
```
primary-50    #f0f6fc  - Lightest background
primary-100   #e0ecf9  - Light backgrounds
primary-200   #c1d9f3  - Light borders
primary-300   #a2c6ed  - Light elements
primary-400   #83b3e7  - Medium elements
primary-500   #3d6fa0  - Links, hover states
primary-600   #2d5a7b  - Buttons, active states ⭐ MAIN
primary-700   #1a3a52  - Dark emphasis, headings
primary-800   #132a40  - Very dark
primary-900   #0c1a28  - Almost black
```

**Use For**: Authority, trust, primary actions, headlines

#### SECONDARY (Warm Earth Brown)
```
secondary-50    #faf7f5  - Lightest accent
secondary-100   #f5efeb  - Light accent backgrounds
secondary-200   #e8dfd7  - Light borders
secondary-300   #dbcfc3  - Medium accents
secondary-400   #c8ada5  - Medium elements
secondary-500   #a8674a  - Warm accents ⭐ MAIN
secondary-600   #8b5436  - Dark accents
secondary-700   #6e4229  - Very dark
secondary-800   #51311d  - Almost black
secondary-900   #342010  - Near black
```

**Use For**: Warmth, connection, gradients with primary, African heritage

#### ACCENT (Warm Gold)
```
accent-50    #fef9f3  - Lightest highlight
accent-100   #fdf3e7  - Light highlights
accent-200   #fbe7cf  - Light elements
accent-300   #f9dbb7  - Medium elements
accent-400   #f7cf9f  - Medium accents
accent-500   #d4a574  - Gold accent ⭐ MAIN
accent-600   #c89d69  - Darker gold
accent-700   #b8915e  - Dark gold
accent-800   #a88553  - Very dark
accent-900   #987948  - Near black
```

**Use For**: Focus states, premium badges, accessibility highlights (sparingly!)

#### NEUTRAL (Warm Grays)
```
neutral-50    #f9fafb  - Almost white background
neutral-100   #f3f4f6  - Light background
neutral-200   #e5e7eb  - Light borders
neutral-300   #d1d5db  - Medium borders
neutral-400   #9ca3af  - Placeholder text
neutral-500   #6b7280  - Disabled text
neutral-600   #4b5563  - Readable text
neutral-700   #374151  - Body text ⭐ MAIN
neutral-800   #1f2937  - Dark text
neutral-900   #111827  - Black text
```

**Use For**: Body text, backgrounds, borders, everything not colored

---

### 📝 TYPOGRAPHY SCALE

#### Headings (Font: Inter, Weight: 600-700, Line Height: 1.2)
```
<h1>  72px desktop / 48px mobile   weight-700  letter-spacing-tight
<h2>  48px desktop / 36px mobile   weight-600  letter-spacing-tight
<h3>  30px desktop / 24px mobile   weight-600  letter-spacing-tight
<h4>  20px (fixed)                 weight-600  margin-bottom: 0.75rem
<h5>  18px (fixed)                 weight-500  margin-bottom: 0.5rem
<h6>  16px (fixed)                 weight-600  uppercase, wide spacing
```

#### Body Text (Font: Inter, Weight: 400, Line Height: 1.5)
```
Base      16px   1.5 line height   color-neutral-700
Large     18px   1.75 line height  className="large"
Small     14px   1.5 line height   className="small"
```

#### Special Styles
```
Strong    weight-600    color-current       <strong> or .font-semibold
Italic    font-italic   weight-400          <em>
Code      monospace     bg-neutral-100      <code>
Link      color-primary underline-on-hover  <a>
```

---

### 🎯 COMMON PATTERNS

#### Buttons
```jsx
// Primary Action
<button className="bg-primary-600 hover:bg-primary-700 text-white">
  Call to Action
</button>

// Secondary Action
<button className="border-2 border-primary-600 text-primary-600 hover:bg-primary-50">
  Secondary
</button>

// Accent (Rare)
<button className="bg-accent-600 hover:bg-accent-700 text-white">
  Premium Action
</button>
```

#### Cards
```jsx
// Light Card
<div className="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-6">
  <h3 className="text-neutral-900 dark:text-white">Title</h3>
  <p className="text-neutral-700 dark:text-neutral-300">Content</p>
</div>

// Primary Accent Card
<div className="bg-primary-50 dark:bg-primary-900/20 border border-primary-200 dark:border-primary-700/50 rounded-lg p-6">
  <h3 className="text-primary-900 dark:text-primary-100">Title</h3>
  <p className="text-neutral-700 dark:text-neutral-300">Content</p>
</div>

// Secondary Accent Card
<div className="bg-secondary-50 dark:bg-secondary-900/20 border border-secondary-200 dark:border-secondary-700/50">
  {/* Same structure */}
</div>
```

#### Badges/Labels
```jsx
// Primary Badge
<span className="bg-primary-100 text-primary-900 px-3 py-1 rounded-full text-sm">
  Primary Label
</span>

// Secondary Badge
<span className="bg-secondary-100 text-secondary-900 px-3 py-1 rounded-full text-sm">
  Secondary Label
</span>

// Accent Badge (Premium)
<span className="bg-accent-100 text-accent-900 px-3 py-1 rounded-full text-sm">
  Premium Badge
</span>
```

#### Section Headers
```jsx
<div className="mb-8">
  <h6 className="text-primary-600 dark:text-primary-400 text-sm uppercase tracking-wide font-semibold mb-2">
    Section Label
  </h6>
  <h2 className="text-neutral-900 dark:text-white text-5xl lg:text-6xl font-light mb-2">
    Main Heading
  </h2>
  <div className="w-16 h-1 bg-gradient-to-r from-primary-600 to-secondary-600"></div>
</div>
```

#### Gradients (Premium)
```jsx
// Primary + Secondary
<div className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
  Hero Section
</div>

// Light Gradient
<div className="bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20">
  Light Section
</div>
```

---

### 🌙 DARK MODE REFERENCE

#### Pattern
```jsx
// Light mode uses neutral-900, dark uses neutral-50
className="text-neutral-900 dark:text-neutral-50"

// Background colors
className="bg-white dark:bg-neutral-900"

// Borders
className="border-neutral-200 dark:border-neutral-700"

// Color accents work the same
className="bg-primary-600 dark:bg-primary-600"  // Same in both modes
```

#### Dark Backgrounds Defined
```
--bg-light: #ffffff
--bg-dark: #0f1419       ← Used as dark:bg-base
--bg-dark-secondary: #1a202c
```

---

### ♿ ACCESSIBILITY CHECKLIST

#### Colors
- [ ] Using Tailwind classes (not inline colors)
- [ ] Text contrast ≥ 4.5:1 (tested)
- [ ] Not relying on color alone for meaning
- [ ] Focus state visible (accent-gold outline)

#### Typography
- [ ] Heading hierarchy semantic (h1 > h2 > h3)
- [ ] Font sizes ≥ 14px
- [ ] Line height ≥ 1.5 for body text
- [ ] Letter spacing appropriate (not too tight)

#### Interaction
- [ ] Focus states visible
- [ ] Links distinguishable from text
- [ ] Buttons large enough to click (44x44px minimum)
- [ ] Color contrast in buttons ≥ 4.5:1

---

### 🔧 TAILWIND CLASS EXAMPLES

```jsx
// Text Colors
className="text-primary-600"        // Interactive text
className="text-secondary-600"      // Earth tone text
className="text-neutral-700"        // Body text
className="text-accent-600"         // Premium (rare)
className="dark:text-primary-400"   // Dark mode

// Backgrounds
className="bg-primary-600"          // Solid primary
className="bg-primary-50"           // Light background
className="dark:bg-neutral-900"     // Dark background
className="bg-gradient-to-r from-primary-600 to-secondary-600"

// Borders
className="border border-neutral-200"
className="border-l-4 border-primary-600"
className="dark:border-neutral-700"

// Typography
className="text-4xl font-bold leading-tight"  // H1
className="text-2xl font-semibold"            // H2
className="text-base font-normal leading-relaxed" // Body
className="text-sm font-medium"               // Label

// Combined
className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
```

---

## Color Decision Tree

**"Which color should I use?"**

```
├─ Is it the main action/CTA?
│  └─ YES → primary-600 ✅
│
├─ Is it for warmth/human connection?
│  └─ YES → secondary-600 ✅
│
├─ Is it body text/content?
│  └─ YES → neutral-700 (light) / neutral-300 (dark) ✅
│
├─ Is it a focus/highlight? (very rare)
│  └─ YES → accent-gold ✅
│
└─ Is it a background/border/neutral element?
   └─ YES → neutral-50 to neutral-900 (as appropriate) ✅
```

---

## Common Mistakes to Avoid

❌ **DON'T**:
```jsx
className="bg-emerald-600"     // Old system (removed!)
className="text-slate-700"     // Old system (removed!)
className="bg-red-500"         // Off-brand color
style={{ color: '#1a3a52' }}   // Inline styles (use classes)
className="text-primary-50"    // Too light on white background
```

✅ **DO**:
```jsx
className="bg-primary-600"                    // New system
className="text-neutral-700 dark:text-neutral-300"
className="text-primary-600"                  // Brand color
className="text-primary-600 dark:text-primary-400"
className="bg-primary-50 text-primary-900"    // Proper contrast
```

---

## Quick Copy-Paste Snippets

### Card Template
```jsx
<div className="bg-white dark:bg-neutral-800 rounded-lg p-6 border border-neutral-200 dark:border-neutral-700">
  <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">Title</h3>
  <p className="text-neutral-700 dark:text-neutral-300">Content</p>
</div>
```

### Primary Button
```jsx
<button className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors">
  Call to Action
</button>
```

### Section Header
```jsx
<div>
  <h2 className="text-5xl md:text-6xl font-light text-neutral-900 dark:text-white mb-8">
    Section Title
  </h2>
  <p className="text-xl text-neutral-700 dark:text-neutral-300">Subtitle or intro text</p>
</div>
```

---

**Last Updated**: Phase 5 Implementation  
**System**: Tailwind CSS v4 with CSS Variables  
**Compatibility**: All modern browsers (IE 11 not supported)

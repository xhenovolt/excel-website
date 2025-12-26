# Feature: Decision Pathways & Admissions Ladder

## Overview
Two complementary features designed to help parents make informed decisions without feeling pressured, and to reduce fear around the admissions process.

---

## Feature 1: "Choose Your Path" Selector

### Purpose
Help parents understand which educational pathway is right for their family without marketing language or pressure.

### Features
- **4 expandable pathway cards:**
  1. Day School - Balanced Track
  2. Day School - Qur'an Memorisation Track
  3. Boarding School - Balanced Track
  4. Boarding School - Qur'an Memorisation Track

- **Each pathway reveals on click:**
  - "Who It's Best For" - Family profile match
  - "Daily Rhythm" - Morning/afternoon/evening timeline
  - "Key Expectations" - Clear requirements from families
  - "Learning Approach" - Educational methodology
  - "Support System" - How we support your child

### Design Elements
- Gradient backgrounds (emerald, blue, purple, orange for each path)
- Smooth expand/collapse animations
- Shadow hierarchy (card → elevated on expand)
- Icon differentiation (Home, BookOpen, Users, Zap)
- Mobile-first responsive grid (1 col → 2 col)

### Placement
1. Home page - Below academics overview section
2. Academics page - Below all learning content
3. Admissions page - Full expanded version

### Data Structure
```json
{
  "pathways": {
    "title": "Choose Your Path",
    "subtitle": "Every family is unique...",
    "paths": [
      {
        "id": "day-balanced",
        "icon": "Home",
        "title": "Day School - Balanced Track",
        "shortDescription": "...",
        "whoItIsFor": "...",
        "dailyRhythm": {...},
        "keyExpectations": [...],
        "learningApproach": "...",
        "supportSystem": "..."
      }
    ]
  }
}
```

### Tone & Messaging
- Respectful, not prescriptive
- Clear expectations without judgment
- Family-centered language
- Emphasis on fit and support

---

## Feature 2: Admissions Process Ladder

### Purpose
Reduce fear by showing the admissions journey is simple, transparent, and supportive at every step.

### Features
- **4-step visual timeline:**
  1. Inquiry & Exploration
  2. Application & Assessment
  3. Placement Discussion
  4. Enrollment & Preparation

- **Each step includes:**
  - Step number with icon
  - Clear description
  - "What Happens" checklist (5-7 bullet points)
  - Timeline expectation ("2-3 weeks", "No deadline", etc.)

- **Visual enhancements:**
  - Vertical animated progress line
  - Color-coded step icons (blue → cyan → teal → green)
  - Alternating card layout (desktop)
  - Hover effects with subtle lift
  - Animated connector arrows between steps

### Design Elements
- Gradient-tinted cards per step
- Shadow hierarchy (card shadows that increase on hover)
- Premium color palette (blues and cyans)
- Glassmorphic footer CTA section
- Responsive timeline (stacked on mobile, alternating on desktop)

### Placement
Admissions page - Below existing content, before contact information

### Data Structure
```json
{
  "admissionsLadder": {
    "title": "Your Admissions Journey",
    "subtitle": "We guide you at every step...",
    "message": "You are supported at every step.",
    "steps": [
      {
        "number": 1,
        "title": "Inquiry & Exploration",
        "icon": "MapPin",
        "description": "...",
        "whatHappens": [...],
        "timeline": "No deadline. Take your time."
      }
    ]
  }
}
```

### Tone & Messaging
- Warm and reassuring
- Emphasizes partnership ("we guide you")
- No pressure ("No deadline")
- Clear and concrete ("What Happens" lists)
- Support-focused

---

## Technical Implementation

### Files Created
1. `/src/components/PathSelector.js` (360 lines)
2. `/src/components/AdmissionsLadder.js` (320 lines)

### Files Modified
1. `/src/data/academics.json` - Added `pathways` object (~150 lines)
2. `/src/data/admissions.json` - Added `admissionsLadder` object (~80 lines)
3. `/src/app/page.js` - Added PathSelector import and rendering
4. `/src/app/admissions/page.js` - Added both components, dual data fetch
5. `/src/app/globals.css` - Added premium shadow and gradient utilities

### Component APIs

#### PathSelector
```jsx
<PathSelector 
  data={academicsData.pathways}  // Required
  condensed={false}              // Optional (currently unused)
/>
```

#### AdmissionsLadder
```jsx
<AdmissionsLadder 
  data={data.admissions.admissionsLadder}  // Required
/>
```

### CSS Utilities Added
- `.shadow-soft` - Subtle elevation
- `.shadow-card` - Medium card shadows
- `.shadow-elevated` - Strong hover effect
- `.shadow-deep` - Deep modal shadows
- `.shadow-hover` - Automatic hover transition
- `.bg-gradient-premium-light` - Light gradient background
- `.bg-gradient-premium-blue` - Blue tinted gradient
- `.bg-gradient-premium-green` - Green tinted gradient
- `.glass-effect` - Glassmorphism with backdrop blur
- `.backdrop-blur-premium` - Premium blur effect
- `.text-gradient-primary` - Gradient text effect
- `.shimmer` - Shimmer loading animation
- Plus dark mode variants for all

---

## User Experience Flow

### Parent Decision Journey
1. **Home Page**: See "Choose Your Path" selector
2. **Curiosity**: Click a pathway to learn details
3. **Confidence**: See exact daily schedule and expectations
4. **Navigation**: Link to contact or academics for more info
5. **Contact**: Schedule conversation with admissions team

### Admissions Process Journey
1. **Understanding**: See the 4-step admissions process
2. **Reassurance**: "You are supported at every step"
3. **Clarity**: Know what happens at each stage
4. **Timeline**: Understand no pressure timelines
5. **Action**: Call to action to get in touch

---

## Visual Design Principles

### Color Coding
- **Day Balanced**: Emerald (nurturing, grounded)
- **Day Hifz**: Blue (focused, academic)
- **Boarding Balanced**: Purple (transformative, immersive)
- **Boarding Hifz**: Orange (energetic, dedicated)
- **Admissions**: Blue-Cyan gradient (trustworthy, approachable)

### Shadow Hierarchy
- Light cards: `shadow-soft`
- Interactive cards: `shadow-card` 
- Hovered elements: `shadow-elevated`
- Modal-like: `shadow-deep`

### Responsive Behavior
- Mobile: Full-width stacked cards, single column
- Tablet: 2-column grid with adjusted spacing
- Desktop: Full layout with alternating patterns

### Animation Principles
- Entrance: Staggered scroll-reveal (0.3-0.6s)
- Interaction: Subtle lifts on hover (0.2s)
- Expand/collapse: 0.3-0.4s ease
- Timeline: Animated progress line on view

---

## Success Metrics

✅ **Parent Clarity**
- No marketing speak
- Clear expectations
- Honest daily schedules
- Visible support system

✅ **Fear Reduction**
- Simple 4-step admissions
- "No deadline" language
- Multiple touchpoints for questions
- Emphasis on support

✅ **Visual Excellence**
- Premium shadow hierarchy
- Gradient backgrounds
- Smooth animations
- Dark mode support

✅ **Mobile Experience**
- Responsive grid layouts
- Touch-friendly buttons
- Readable on small screens
- Fast load time

---

## Future Enhancements

1. **Interactive Decision Tree**: AI-powered pathway recommendation based on family profile
2. **Live Chat**: Connect with admissions during decision process
3. **Virtual Tour**: 360° video walkthrough of each program
4. **Parent Testimonials**: Video from actual parents about pathways
5. **Comparison Tool**: Side-by-side pathway comparison
6. **FAQ Collapse**: Common questions for each pathway

---

## Maintenance Notes

- **Data updates**: Modify JSON files directly (no code change needed)
- **Icon additions**: Add to `iconMap` object in component
- **Color scheme**: Update Tailwind classes in component
- **Timeline copy**: Update in JSON for consistency across pages
- **CSS utilities**: Add to globals.css under @layer utilities


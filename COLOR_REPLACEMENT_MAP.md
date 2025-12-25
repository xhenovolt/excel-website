# Color Replacement Mapping

## Quick Reference for Page Updates

### Color System Migration:
- `emerald-600` → `primary-600` (interactive elements, buttons)
- `emerald-500` → `primary-500` (labels, accents)
- `emerald-100` → `primary-100` (light backgrounds)
- `emerald-900/20` → `primary-900/20` (dark overlays)
- `emerald-900/30` → `primary-900/30` (dark overlays, slightly more opaque)
- `emerald-200` → `primary-200` (light borders)
- `emerald-800` → `primary-800` (dark containers)
- `emerald-50` → `primary-50` (lightest background)

- `amber-600` → `accent-600` (premium accent, limited use)

- `slate-50` / `slate-900` → `neutral-50` / `neutral-900`
- `slate-100` → `neutral-100`
- `slate-200` → `neutral-200`
- `slate-300` → `neutral-300`
- `slate-400` → `neutral-400`
- `slate-600` → `neutral-600`
- `slate-700` → `neutral-700`
- `slate-800` → `neutral-800`
- `slate-50` → `neutral-50`

### Pages Needing Updates:
1. **Homepage** (page.js) - 50+ color references
2. **About** (about/page.js) - 40+ color references
3. **Academics** (academics/page.js) - Check for old colors
4. **Gallery** (gallery/page.js) - Check for old colors
5. **Testimonials** (testimonials/page.js) - Check for old colors
6. **Contact** (contact/page.js) - Check for old colors

### Special Cases:
- Buttons: `bg-emerald-600 hover:bg-emerald-700` → `bg-primary-600 hover:bg-primary-700`
- Borders: `border-emerald-600` → `border-primary-600`
- Gradients: `from-emerald-50 to-slate-50` → `from-primary-50 to-neutral-50`
- Text: `text-emerald-600` → `text-primary-600`
- Dark mode: All dark: `dark:*` remain same, just change the base color

---

## Implementation Plan

For efficiency, recommend using sed or multi_replace_string_in_file to batch update all files at once with the exact mapping above.

Example for Homepage:
```bash
sed -i 's/bg-emerald-600/bg-primary-600/g' src/app/page.js
sed -i 's/text-emerald-600/text-primary-600/g' src/app/page.js
sed -i 's/border-emerald-600/border-primary-600/g' src/app/page.js
sed -i 's/slate-/neutral-/g' src/app/page.js
sed -i 's/amber-/accent-/g' src/app/page.js
```

---

## Verification After Updates

1. Run `npm run build` to ensure no compilation errors
2. Check each page visually for consistency
3. Verify dark mode switching works
4. Test color contrast with WCAG tools
5. Ensure all brand colors align

---

**Status**: Ready to execute bulk replacements when needed.
**Priority**: Complete this to achieve site-wide visual consistency.

# Responsive Design Verification Guide

## Tailwind Breakpoint Configuration

Based on `tailwind.config.ts`, verify these breakpoints are used correctly:

javascript
// Default Tailwind breakpoints
sm: '640px'   // Small tablets
md: '768px'   // Tablets
lg: '1024px'  // Laptops
xl: '1280px'  // Desktops
2xl: '1536px' // Large screens


## Mobile-First Pattern Verification

The project should follow a mobile-first approach. Components should:
1. Have base styles for mobile (no breakpoint prefix)
2. Add `md:`, `lg:`, etc., classes for larger screens

### Example Pattern Check:

✅ **Correct (Mobile-First)**
tsx
div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"


❌ **Incorrect (Desktop-First)**
tsx
div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-1"


## Component Responsive Patterns

### GlassPane Wrapper
Should maintain consistent padding and border radius across breakpoints:
- Mobile: `p-4` or `p-6`
- Tablet+: `p-6` or `p-8`

### Navigation
- Desktop: Sidebar or topbar visible
- Mobile: Hamburger menu triggering MobileDrawer

### Grid Layouts
Bento grid should collapse from 12 columns to:
- Desktop: 12 columns
- Tablet: 6-8 columns
- Mobile: 1 column (full width cards)

### Images
- Use `w-full h-auto` for responsive images
- Consider `object-cover` for card images
- Add `max-width` constraints where needed

### Typography
- Base font size: 16px (1rem)
- Headings scale appropriately using `text-xl`, `text-2xl`, etc.
- Line height: 1.5 for body text

### Touch Targets
Interactive elements must have minimum touch target size:
- Buttons: min 44x44px
- Links: min 44x44px
- Toggles: min 48x28px

## Testing Tools

### Browser DevTools
1. Open Chrome DevTools (F12)
2. Toggle Device Toolbar (Ctrl+Shift+M)
3. Test at: 375px, 768px, 1024px, 1440px

### Responsive Design Mode
- Use built-in device presets
- Test custom widths for edge cases
- Check orientation changes (portrait/landscape)

### Lighthouse
1. Open DevTools > Lighthouse tab
2. Select categories: Performance, Accessibility, Best Practices
3. Run analysis for both mobile and desktop

## Common Responsive Issues to Watch For

1. **Horizontal Scrollbar** - Often caused by fixed-width elements
2. **Text Overflow** - Long text breaking layouts
3. **Touch Target Overlap** - Elements too close on mobile
4. **Hidden Content** - Elements off-screen at certain sizes
5. **Broken Layouts** - Grids/flex containers not wrapping properly
6. **Font Scaling** - Text too small/large at certain breakpoints
7. **Button Size** - CTA buttons difficult to tap on mobile

## Accessibility & Responsive Design

Responsive design should also maintain accessibility:
- [ ] All interactive elements remain keyboard accessible
- [ ] Touch targets meet minimum size requirements
- [ ] Color contrast ratios maintained (4.5:1 for text)
- [ ] Focus indicators visible on all screen sizes
- [ ] Zoom up to 200% doesn't break layout

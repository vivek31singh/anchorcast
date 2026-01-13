# Development Guidelines

## File Structure
```
app/
├─ layout.tsx
├─ page.tsx
├─ boats/
│  └─ page.tsx
├─ posts/
│  ├─ page.tsx
│  └─ [id]/
│     └─ page.tsx
├─ templates/
│  └─ page.tsx
├─ social/
│  └─ page.tsx
├─ settings/
│  └─ page.tsx
├─ components/
│  ├─ bento/
│  │  ├─ StatCard.tsx
│  │  ├─ QuickAction.tsx
│  │  └─ GlassPane.tsx
│  ├─ layout/
│  │  ├─ Nav.tsx
│  │  ├─ UserDropdown.tsx
│  │  └─ MobileDrawer.tsx
│  ├─ boats/
│  │  ├─ BoatGridCard.tsx
│  │  └─ BoatTableRow.tsx
│  ├─ posts/
│  │  ├─ PostStatusBadge.tsx
│  │  ├─ PublishRetry.tsx
│  │  └─ PostPreview.tsx
│  ├─ templates/
│  │  ├─ TemplateEditor.tsx
│  │  └─ HashtagChips.tsx
│  ├─ ui/
│  │  ├─ Button.tsx
│  │  ├─ Toggle.tsx
│  │  └─ Tooltip.tsx
│  └─ icons/
├─ lib/
│  ├─ dummy.ts
│  └─ types.ts
├─ styles/
│  └─ glass.css
└─ README.md
```

## Naming Conventions
- **Files**: `PascalCase.tsx` for components, `camelCase.ts` for utilities/lib, `kebab-case` for folders if multiple words (though mostly single words here).
- **Components**: `PascalCase` (e.g., `StatCard`, `BoatGridCard`).
- **Functions/Variables**: `camelCase` (e.g., `handleClick`, `boatList`).
- **Constants**: `UPPER_SNAKE_CASE` for exported static data (e.g., `DUMMY_BOATS`).
- **Interfaces/Types**: `PascalCase` (e.g., `Boat`, `SocialStats`).

## Coding Standards
- **TypeScript**: Strict mode enabled. Explicit return types for functions.
- **React**: Functional components with Hooks. No Class components.
- **Imports**: Absolute imports using `@/` alias if configured, otherwise relative imports. Group imports: External > Internal > Styles.
- **Styling**: Tailwind utility classes preferred over CSS modules. Use `clsx` and `tailwind-merge` for conditional classes.
- **Components**: `'use client'` directive at the very top for any component using hooks or event handlers.

## Testing Strategy
- **Manual QA**: Verify responsive behavior at 375px, 768px, 1024px, and 1440px.
- **Type Checking**: Run `tsc --noEmit` to catch type errors early.
- **Linting**: Run `npm run lint` to ensure code quality.
- **Visual Regression**: Compare implementation against "Glassmorphism" and "Bento Grid" requirements (checking opacity, blur, and borders).
- **Interaction Testing**: Click all buttons, toggle all switches, and fill all forms to ensure state updates locally.

## Error Handling
- **Form Validation**: Simple conditional checks (e.g., `if (!email) return setError('Email required')`).
- **Null Checks**: Use optional chaining (`boat?.imgUrl`) when accessing nested dummy data.
- **Error UI**: Use red text/borders for invalid inputs. Use specific "Error" state styles in the `PostStatusBadge` component.
- **Console**: No native `alert()`. Use console logs for debugging dummy data flow.

## Dependencies
```json
{
  "dependencies": {
    "next": "14.0.4",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "@heroicons/react": "^2.0.18",
    "clsx": "^2.0.0",
    "tailwind-merge": "^2.1.0"
  },
  "devDependencies": {
    "typescript": "^5.3.3",
    "tailwindcss": "^3.4.0",
    "eslint": "^8.56.0",
    "eslint-config-next": "14.0.4"
  }
}
```
Install via: `npm install next react react-dom @heroicons/react clsx tailwind-merge`

## Configuration
- **tailwind.config.ts**: Configure `content` paths, `theme` colors (blue-500, emerald-500), and extend utilities if necessary.
- **tsconfig.json**: Set `strict: true`, `paths` aliases (optional).
- **next.config.js**: Standard config.
- **app/styles/glass.css**:
  ```css
  @layer utilities {
    .glass {
      @apply bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl shadow-lg;
    }
    .glass-hover {
      @apply hover:bg-white/30 transition-all duration-300;
    }
  }
  ```

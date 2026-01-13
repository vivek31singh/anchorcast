# Implementation Plan

## Core Features
1. **Dashboard Overview**: Visual summary of stats (boats, posts, errors) and quick actions.
2. **Boat Catalogue**: Searchable, filterable list of boats with Grid/Table view toggles.
3. **Post Management**: Review published and failed social media posts with retry mechanisms.
4. **Template Editor**: Create/Edit text templates for FB/IG with dynamic placeholders and hashtag management.
5. **Social Connections**: Display status of connected Facebook/Instagram accounts and manage tokens.
6. **Settings Management**: User preferences, sync frequency, and system reset options.
7. **Glassmorphism UI System**: A unified design language utilizing semi-transparent backgrounds, blurs, and subtle borders.

## User Stories
- As a **broker**, I want to see a high-level overview of my inventory and posting activity on the dashboard so I can quickly assess business health.
- As a **broker**, I want to filter my boat inventory by year or price to find specific listings to promote.
- As a **content manager**, I want to view failed posts to understand why they did not publish and retry them.
- As a **social media manager**, I want to edit message templates to insert specific boat details (like price or title) automatically.
- As an **admin**, I want to connect or reconnect my social media accounts without leaving the dashboard.
- As a **user**, I want to switch between Grid and Table views for the boat catalogue to suit my browsing preference.

## Acceptance Criteria
- Application runs locally via `npm run dev` without errors.
- All pages (`/`, `/boats`, `/posts`, `/templates`, `/social`, `/settings`) render correctly.
- Design matches Glassmorphism aesthetic (blur, transparency, borders).
- Layout is fully responsive on mobile (375px), tablet, and desktop.
- All data displayed comes from `app/lib/dummy.ts` (no external API calls).
- TypeScript compilation passes without errors (`npm run build`).
- Interactive elements (buttons, tabs, toggles) provide visual feedback.
- README.md includes setup instructions and route map.

## Implementation Steps
**Phase 1: Project Initialization & Configuration**
1. Initialize Next.js 14 project with TypeScript and Tailwind CSS.
2. Install dependencies: `@heroicons/react`, `clsx`, `tailwind-merge`.
3. Configure `tailwind.config.ts` for custom colors and animations.
4. Set up global CSS (`glass.css`) with required utility classes.
5. Configure Inter font in the root layout.

**Phase 2: Data Layer & Typing**
1. Create `app/lib/types.ts` defining interfaces for User, Boat, Post, Template, and Social stats.
2. Create `app/lib/dummy.ts` populating these interfaces with the static JSON data defined in requirements.

**Phase 3: Core UI Components**
1. Build `GlassPane` wrapper component using the custom glass utilities.
2. Build `Button` component with variants (primary, ghost, danger) and sizes.
3. Build `Toggle` component for view switching.
4. Build `Tooltip` using pure CSS groups.
5. Build `StatCard` and `QuickAction` components for the Bento grid.

**Phase 4: Layout Components**
1. Implement `Nav` for desktop sidebar/topbar.
2. Implement `MobileDrawer` for mobile navigation.
3. Implement `UserDropdown` for user profile display.
4. Assemble into `app/layout.tsx`.

**Phase 5: Page Implementation (Dashboard)**
1. Implement `app/page.tsx` with the 12-column Bento grid.
2. Integrate StatCards, QuickActions, Calendar widget, and Recent Logs table.
3. Ensure responsive collapsing to single column on mobile.

**Phase 6: Feature Pages Implementation**
1. **Boats (`/boats`)**: Implement Grid/Table toggle, filtering logic, and BoatCard/TableRow components.
2. **Posts (`/posts`)**: Implement tab switching (Published/Failed), PostPreview cards, and detail view `[id]/page.tsx`.
3. **Templates (`/templates`)**: Build the TemplateEditor with textarea helpers and HashtagChips logic.
4. **Social (`/social`)**: Create the connection status card with "Reconnect" simulation.
5. **Settings (`/settings`)**: Build form validation visuals and the "Danger Zone" reset modal.

**Phase 7: Polish & Delivery**
1. Add hover effects and micro-interactions (scale, shadows).
2. Verify responsiveness (375px to 1920px+).
3. Run TypeScript compilation and linter checks.
4. Create README and documentation screenshots.

# Technical Specification

## Architecture Patterns
- **Component-Based Architecture**: Modular React components organized by feature and type.
- **Client-Side Rendering (CSR)**: All interactivity handled via client components (`'use client'`) and React state.
- **Atomic Design Principles**: Separation of atoms (buttons, inputs), molecules (cards, search bars), and organisms (page layouts).
- **Composition Pattern**: Higher-order components (like `GlassPane`) wrapping children to provide consistent styling.

## Component Hierarchy
- **Layout**
  - Nav
    - UserDropdown
    - MobileDrawer
- **Pages**
  - Dashboard (BentoGrid)
    - StatCard
    - QuickAction
    - UpcomingPosts
    - RecentLogs
  - Boats (Catalogue)
    - SearchBar
    - ViewToggle
    - BoatGrid (BoatGridCard)
    - BoatTable (BoatTableRow)
  - Posts (Feed)
    - TabGroup
    - PostList (PostPreview, PostStatusBadge, PublishRetry)
  - Templates (Editor)
    - TemplateEditor
      - PlaceholderHelper
      - HashtagChips
  - Social (Connections)
    - ConnectionCard
  - Settings (Forms)
    - GeneralSettings
    - SyncSettings
    - DangerZone
- **Shared UI (Primitives)**
  - GlassPane
  - Button
  - Toggle
  - Tooltip

## Data Models
```typescript
// User
interface User {
  id: number;
  email: string;
  wpDomain: string;
}

// Stats
interface Stats {
  totalBoats: number;
  publishedPosts: number;
  failedPosts: number;
  nextSync: string; // ISO Date string
}

// Boat
interface Boat {
  id: number;
  title: string;
  price: string;
  year: number;
  lengthFt: number;
  imgUrl: string;
  modifiedGmt: string;
  publishCount: number;
}

// Post
interface Post {
  id: number;
  boatId: number;
  platform: 'fb' | 'ig';
  status: 'published' | 'failed';
  createdAt: string;
  errorMsg: string | null;
  payload: object;
}

// Template
interface Template {
  platform: 'fb' | 'ig';
  templateText: string;
  hashtagPool: string[];
  maxHashtags: number;
}

// Social
interface Social {
  fbPageName: string;
  igUserName: string;
  tokenExpiresAt: string;
}
```

## API Design
**No external API design required.** All data is mocked locally.
- **Data Source**: `app/lib/dummy.ts` exports named constants (e.g., `export const boats = [...]`).
- **Fetching Pattern**: Components import directly from `dummy.ts`.
- **"API" Simulation**: For actions like "Sync Now" or "Save Template", use `setTimeout` to simulate network delay before updating local state.

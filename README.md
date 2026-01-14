# anchorcast

A high-fidelity, responsive dashboard for a boat-broker social media autoposter. Built with Next.js 14, TypeScript, and Tailwind CSS featuring a modern Glassmorphism/Bento Grid UI design.

## 📋 Table of Contents

- [Project Overview](#project-overview)
- [Technology Stack](#technology-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Features & Routes](#features--routes)
- [Development Guidelines](#development-guidelines)
- [Available Scripts](#available-scripts)

## 🎯 Project Overview

**anchorcast** is a frontend dashboard prototype designed for boat brokers to manage their inventory and automate social media posting. The application provides:

- **Dashboard Overview**: Visual summary of inventory stats and posting activity
- **Boat Catalogue**: Searchable, filterable list of boats with Grid/Table view toggles
- **Post Management**: Review published and failed posts with retry mechanisms
- **Template Editor**: Create/Edit text templates for Facebook and Instagram
- **Social Connections**: Manage connected social media accounts
- **Settings**: Configure user preferences, sync frequency, and system options

The UI features a **Glassmorphism** design language with semi-transparent backgrounds, blur effects, and subtle borders, organized in a **Bento Grid** layout for optimal content presentation.

> **Note**: This is a prototype running entirely on the client side. All data is mocked locally without external API calls.

## 🛠 Technology Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| **Next.js** | 14.0.4 | React framework with App Router |
| **React** | 18.2.0 | UI library |
| **TypeScript** | 5.3.3 | Type-safe JavaScript |
| **Tailwind CSS** | 3.4.0 | Utility-first CSS framework |
| **@heroicons/react** | 2.0.18 | Icon library |
| **clsx** | 2.0.0 | Conditional className utility |
| **tailwind-merge** | 2.1.0 | Merge Tailwind classes intelligently |

### Key Features
- ✅ **Next.js 14 App Router**: Modern routing with server components
- ✅ **TypeScript Strict Mode**: Type safety throughout the application
- ✅ **Glassmorphism UI**: Custom glass utility classes for modern aesthetics
- ✅ **Responsive Design**: Mobile-first approach (375px to 1920px+)
- ✅ **Component-Based Architecture**: Modular, reusable components
- ✅ **Local State Management**: React Hooks for interactive features

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd anchorcast
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Building for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
anchorcast/
├── app/
│   ├── components/
│   │   ├── bento/           # Bento grid components
│   │   │   ├── GlassPane.tsx
│   │   │   ├── StatCard.tsx
│   │   │   ├── QuickAction.tsx
│   │   │   ├── UpcomingPosts.tsx
│   │   │   └── RecentLogs.tsx
│   │   ├── layout/          # Layout components
│   │   │   ├── PageShell.tsx
│   │   │   ├── Nav.tsx
│   │   │   ├── UserDropdown.tsx
│   │   │   └── MobileDrawer.tsx
│   │   ├── boats/           # Boat catalogue components
│   │   │   ├── BoatGridCard.tsx
│   │   │   └── BoatTableRow.tsx
│   │   ├── posts/           # Post management components
│   │   │   ├── PostStatusBadge.tsx
│   │   │   ├── PublishRetry.tsx
│   │   │   └── PostPreview.tsx
│   │   ├── templates/       # Template editor components
│   │   │   ├── TemplateEditor.tsx
│   │   │   └── HashtagChips.tsx
│   │   ├── social/          # Social connections components
│   │   │   └── ConnectionCard.tsx
│   │   ├── ui/              # Shared UI primitives
│   │   │   ├── Button.tsx
│   │   │   ├── Toggle.tsx
│   │   │   └── Tooltip.tsx
│   │   └── icons/           # Custom icon components
│   ├── lib/
│   │   ├── types.ts         # TypeScript interfaces
│   │   └── dummy.ts         # Mock data
│   ├── styles/
│   │   └── glass.css        # Glassmorphism utilities
│   ├── boats/
│   │   └── page.tsx         # Boats catalogue page
│   ├── posts/
│   │   └── page.tsx         # Posts management page
│   ├── templates/
│   │   └── page.tsx         # Template editor page
│   ├── social/
│   │   └── page.tsx         # Social connections page
│   ├── settings/
│   │   └── page.tsx         # Settings page
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Dashboard page
├── public/                  # Static assets
├── tailwind.config.ts       # Tailwind configuration
├── tsconfig.json            # TypeScript configuration
├── next.config.js           # Next.js configuration
└── package.json             # Dependencies and scripts
```

## 🗺 Features & Routes

### `/` - Dashboard
**Main Overview Page**

- 12-column Bento grid layout with responsive design
- Stat cards displaying:
  - Total boats in inventory
  - Published posts count
  - Failed posts count
  - Next sync time
- Quick action buttons:
  - Sync Now
  - Add Boat
  - Create Post
- Upcoming posts calendar widget
- Recent activity logs table

**Components Used**: `StatCard`, `QuickAction`, `UpcomingPosts`, `RecentLogs`

### `/boats` - Boat Catalogue
**Inventory Management**

- Search bar to filter boats by title
- View toggle (Grid/Table)
- Grid view: Boat cards with image, title, price, year, length
- Table view: Tabular display with all boat details
- Responsive layout (1 column mobile, multi-column desktop)

**Components Used**: `BoatGridCard`, `BoatTableRow`, `SearchBar`, `ViewToggle`

### `/posts` - Post Management
**Social Media Posts**

- Tab switching between Published and Failed posts
- Post preview cards with:
  - Boat title and image
  - Platform badge (Facebook/Instagram)
  - Status indicator (published/failed)
  - Publish timestamp
  - Retry button for failed posts
- Simulated retry functionality with loading state

**Components Used**: `PostPreview`, `PostStatusBadge`, `PublishRetry`, `TabGroup`

### `/templates` - Template Editor
**Message Templates**

- Platform selection (Facebook/Instagram)
- Textarea for composing message templates
- Dynamic placeholders:
  - `{boat_title}`
  - `{boat_price}`
  - `{boat_year}`
  - `{boat_length}`
- Hashtag management:
  - Add hashtags
  - Remove hashtags
  - Visual tag display
- Max hashtag limit indicator

**Components Used**: `TemplateEditor`, `HashtagChips`, `PlaceholderHelper`

### `/social` - Social Connections
**Account Management**

- Connection status cards for:
  - Facebook Page
  - Instagram Account
- Token expiration display
- Connect/Reconnect buttons
- Simulated connection process with loading state

**Components Used**: `ConnectionCard`

### `/settings` - Settings
**Application Configuration**

- **General Settings**:
  - User email
  - WordPress domain
  - Timezone preferences
- **Sync Settings**:
  - Sync frequency controls
  - Auto-publish toggle
- **Danger Zone**:
  - Reset all data
  - Disconnect all accounts
- Form validation visuals
- Save simulation with success feedback

**Components Used**: `GeneralSettings`, `SyncSettings`, `DangerZone`

## 📐 Development Guidelines

### Coding Standards

- **TypeScript**: Strict mode enabled with explicit return types
- **React**: Functional components with Hooks only (no Class components)
- **Naming Conventions**:
  - Components: `PascalCase` (e.g., `StatCard`)
  - Functions/Variables: `camelCase` (e.g., `handleClick`)
  - Constants: `UPPER_SNAKE_CASE` (e.g., `DUMMY_BOATS`)
  - Files: `PascalCase.tsx` for components, `camelCase.ts` for utilities

### Styling Guidelines

- Use Tailwind utility classes over CSS modules
- Use `clsx` and `tailwind-merge` for conditional classes
- Apply Glassmorphism via `.glass` and `.glass-hover` utilities
- Ensure responsive design with mobile-first approach

### Component Architecture

- Use `'use client'` directive for components with Hooks/event handlers
- Compose complex components from smaller primitives
- Share common logic through custom Hooks if needed
- Maintain separation between atoms, molecules, and organisms

### Data Management

- All data is mocked in `app/lib/dummy.ts`
- Import data directly in components
- Simulate API calls with `setTimeout` for actions
- Use React Hooks (`useState`, `useEffect`) for local state

### Testing Checklist

- [ ] Verify responsiveness at 375px, 768px, 1024px, and 1440px
- [ ] Run TypeScript compilation: `tsc --noEmit`
- [ ] Run linter: `npm run lint`
- [ ] Test all interactive elements (buttons, toggles, forms)
- [ ] Verify Glassmorphism visual effects
- [ ] Check console for errors

## 🎮 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server at http://localhost:3000 |
| `npm run build` | Build the application for production |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint for code quality checks |
| `tsc --noEmit` | Type check without emitting files |

## 🎨 Design System

### Glassmorphism Utilities

```css
.glass {
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 1rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}

.glass-hover {
  transition: all 0.3s ease;
}
.glass-hover:hover {
  background: rgba(255, 255, 255, 0.3);
}
```

### Color Palette

- **Primary**: Blue-500
- **Success**: Emerald-500
- **Danger**: Red-500
- **Neutral**: Gray-50 to Gray-900

## 📝 License

This project is built as a prototype/demonstration.

---

Built with ❤️ using Next.js and Tailwind CSS

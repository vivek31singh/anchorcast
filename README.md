# anchorcast

A high-fidelity, responsive dashboard for a boat-broker social media autoposter. Built with Next.js 14, TypeScript, and Tailwind CSS, featuring a Glassmorphism UI and Bento Grid layout.

## Features

- **Dashboard Overview**: Visual summary of stats (boats, posts, errors) and quick actions.
- **Boat Catalogue**: Searchable, filterable list of boats with Grid/Table view toggles.
- **Post Management**: Review published and failed social media posts with retry mechanisms.
- **Template Editor**: Create/Edit text templates for FB/IG with dynamic placeholders and hashtag management.
- **Social Connections**: Display status of connected Facebook/Instagram accounts and manage tokens.
- **Settings Management**: User preferences, sync frequency, and system reset options.
- **Glassmorphism UI**: Unified design language utilizing semi-transparent backgrounds, blurs, and subtle borders.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3.4
- **Icons**: Heroicons v2
- **Font**: Inter
- **State Management**: React Hooks (useState)

## Getting Started

### Prerequisites

- Node.js 18+ installed.

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
app/
├─ layout.tsx          # Root layout with font configuration
├─ page.tsx            # Dashboard (Home)
├─ boats/              # Boat Catalogue
├─ posts/              # Post Management
├─ templates/          # Template Editor
├─ social/             # Social Connections
├─ settings/           # User Settings
├─ components/         # React components
│  ├─ bento/           # Dashboard grid components
│  ├─ boats/           # Boat specific components
│  ├─ posts/           # Post specific components
│  ├─ templates/       # Template specific components
│  ├─ ui/              # Reusable UI primitives
│  └─ layout/          # Navigation and shell components
└─ lib/                # Utilities and mock data
```

## Route Map

- `/` - Dashboard (Bento Grid Overview)
- `/boats` - Boat Inventory (Grid & Table Views)
- `/posts` - Social Media Posts (Published & Failed tabs)
- `/templates` - Message Template Editor
- `/social` - Connected Accounts Status
- `/settings` - Application Preferences

## Data Source

This prototype uses local mock data located in `app/lib/dummy.ts`. No external API keys or backend setup is required to run this application.
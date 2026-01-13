'use client';

import { useState } from 'react';
import { Nav } from './Nav';
import { MobileDrawer } from './MobileDrawer';
import { UserDropdown } from './UserDropdown';
import { user } from '../../lib/dummy';

interface PageShellProps {
  children: React.ReactNode;
}

export function PageShell({ children }: PageShellProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Desktop Navigation */}
      <Nav className="hidden lg:block" />
      
      {/* Mobile Header */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-40 glass border-b border-white/30">
        <div className="flex items-center justify-between px-4 py-3">
          <h1 className="text-xl font-bold text-white">anchorcast</h1>
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="p-2 text-white hover:bg-white/20 rounded-lg transition-colors"
            aria-label="Open menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileDrawer
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />

      {/* User Dropdown (Desktop) */}
      <div className="hidden lg:block fixed top-4 right-4 z-30">
        <UserDropdown user={user} />
      </div>

      {/* Main Content */}
      <main className="lg:pl-64 pt-16 lg:pt-0">
        <div className="container mx-auto px-4 py-6 lg:py-8">
          {children}
        </div>
      </main>
    </div>
  );
}
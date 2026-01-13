'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { clsx } from 'clsx';
import { user } from '../../lib/dummy';

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const navItems = [
  { href: '/', label: 'Dashboard' },
  { href: '/boats', label: 'Boats' },
  { href: '/posts', label: 'Posts' },
  { href: '/templates', label: 'Templates' },
  { href: '/social', label: 'Social' },
  { href: '/settings', label: 'Settings' },
];

export function MobileDrawer({ isOpen, onClose }: MobileDrawerProps) {
  const pathname = usePathname();

  return (
    <>
      {/* Overlay */}
      <div
        className={clsx(
          'fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 lg:hidden',
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={clsx(
          'fixed top-0 left-0 bottom-0 w-72 z-50 glass border-r border-white/30 rounded-none border-l-0 border-t-0 border-b-0',
          'transform transition-transform duration-300 ease-in-out lg:hidden',
          isOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-white/30">
            <h2 className="text-xl font-bold text-white">anchorcast</h2>
            <button
              onClick={onClose}
              className="p-2 text-white hover:bg-white/20 rounded-lg transition-colors"
              aria-label="Close menu"
            >
              <XMarkIcon className="w-6 h-6" />
            </button>
          </div>

          {/* User Info */}
          <div className="p-4 border-b border-white/30">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
                {user.email[0].toUpperCase()}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-white truncate">
                  {user.email}
                </p>
                <p className="text-xs text-white/60 truncate">
                  {user.wpDomain}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 py-4 px-3 overflow-y-auto">
            <ul className="space-y-1">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className={clsx(
                        'block px-4 py-3 rounded-xl transition-all duration-200',
                        isActive
                          ? 'bg-white/30 text-white font-medium'
                          : 'text-white/80 hover:bg-white/20 hover:text-white'
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-white/30">
            <p className="text-xs text-white/50 text-center">
              © 2024 anchorcast
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
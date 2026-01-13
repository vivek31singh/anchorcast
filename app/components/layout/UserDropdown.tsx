'use client';

import { useState } from 'react';
import { ChevronDownIcon, Cog6ToothIcon, ArrowRightOnRectangleIcon } from '@heroicons/react/24/outline';
import { GlassPane } from '../bento/GlassPane';
import { User } from '../../lib/types';
import { clsx } from 'clsx';

interface UserDropdownProps {
  user: User;
}

export function UserDropdown({ user }: UserDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-3 px-4 py-2 glass-hover cursor-pointer"
      >
        {/* Avatar */}
        <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold text-sm">
          {user.email[0].toUpperCase()}
        </div>

        {/* User Info */}
        <div className="hidden sm:block text-left">
          <p className="text-sm font-medium text-white truncate max-w-32">
            {user.email}
          </p>
          <p className="text-xs text-white/60 truncate max-w-32">
            {user.wpDomain}
          </p>
        </div>

        {/* Chevron */}
        <ChevronDownIcon
          className={clsx(
            'w-4 h-4 text-white/70 transition-transform',
            isOpen && 'rotate-180'
          )}
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />

          {/* Menu */}
          <GlassPane className="absolute right-0 mt-2 w-56 z-50 p-1">
            <div className="py-1">
              {/* Settings Link */}
              <a
                href="/settings"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 px-4 py-2.5 text-sm text-white/80 hover:bg-white/20 hover:text-white rounded-lg transition-colors"
              >
                <Cog6ToothIcon className="w-4 h-4" />
                <span>Settings</span>
              </a>

              <div className="my-1 border-t border-white/20" />

              {/* Sign Out */}
              <button
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 w-full px-4 py-2.5 text-sm text-red-300 hover:bg-red-500/20 hover:text-red-200 rounded-lg transition-colors"
              >
                <ArrowRightOnRectangleIcon className="w-4 h-4" />
                <span>Sign Out</span>
              </button>
            </div>
          </GlassPane>
        </>
      )}
    </div>
  );
}
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { GlassPane } from '../bento/GlassPane';
import { 
  ChartBarIcon,
  BoatIcon,
  DocumentTextIcon,
  PencilSquareIcon,
  ShareIcon,
  Cog6ToothIcon,
} from '@heroicons/react/24/outline';
import { clsx } from 'clsx';

interface NavProps {
  className?: string;
}

const navItems = [
  { href: '/', label: 'Dashboard', icon: ChartBarIcon },
  { href: '/boats', label: 'Boats', icon: BoatIcon },
  { href: '/posts', label: 'Posts', icon: DocumentTextIcon },
  { href: '/templates', label: 'Templates', icon: PencilSquareIcon },
  { href: '/social', label: 'Social', icon: ShareIcon },
  { href: '/settings', label: 'Settings', icon: Cog6ToothIcon },
];

export function Nav({ className }: NavProps) {
  const pathname = usePathname();

  return (
    <nav className={className}>
      <GlassPane className="fixed left-0 top-0 bottom-0 w-64 rounded-none border-r border-white/30 border-l-0 border-t-0 border-b-0">
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="p-6 border-b border-white/30">
            <h1 className="text-2xl font-bold text-white tracking-tight">
              anchorcast
            </h1>
            <p className="text-sm text-white/70 mt-1">Boat Broker Autoposter</p>
          </div>

          {/* Navigation Links */}
          <div className="flex-1 py-6 px-3">
            <ul className="space-y-2">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={clsx(
                        'flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200',
                        isActive
                          ? 'bg-white/30 text-white font-medium'
                          : 'text-white/80 hover:bg-white/20 hover:text-white'
                      )}
                    >
                      <item.icon className="w-5 h-5" />
                      <span>{item.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-white/30">
            <p className="text-xs text-white/50 text-center">
              © 2024 anchorcast
            </p>
          </div>
        </div>
      </GlassPane>
    </nav>
  );
}
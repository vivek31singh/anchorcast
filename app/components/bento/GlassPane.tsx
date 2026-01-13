'use client';

import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { ReactNode } from 'react';

interface GlassPaneProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'sm' | 'lg';
  hover?: boolean;
}

export function GlassPane({ children, className, variant = 'default', hover = false }: GlassPaneProps) {
  const baseClasses: ClassValue[] = ['glass'];

  if (variant === 'sm') {
    baseClasses.push('glass-sm');
    baseClasses.splice(baseClasses.indexOf('glass'), 1);
  }

  if (variant === 'lg') {
    baseClasses.push('glass-lg');
    baseClasses.splice(baseClasses.indexOf('glass'), 1);
  }

  if (hover) {
    baseClasses.push('glass-hover');
  }

  const mergedClassName = twMerge(clsx(...baseClasses, className));

  return (
    <div className={mergedClassName}>
      {children}
    </div>
  );
}
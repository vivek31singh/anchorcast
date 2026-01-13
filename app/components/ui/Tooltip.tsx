'use client';

import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { ReactNode } from 'react';

interface TooltipProps {
  children: ReactNode;
  content: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
  className?: string;
}

export function Tooltip({ children, content, position = 'top', className }: TooltipProps) {
  const positionClasses: Record<string, ClassValue[]> = {
    top: [
      'bottom-full',
      'left-1/2',
      '-translate-x-1/2',
      'mb-2',
      'after:top-full',
      'after:left-1/2',
      'after:-translate-x-1/2',
      'after:border-t-gray-800',
    ],
    bottom: [
      'top-full',
      'left-1/2',
      '-translate-x-1/2',
      'mt-2',
      'after:bottom-full',
      'after:left-1/2',
      'after:-translate-x-1/2',
      'after:border-b-gray-800',
    ],
    left: [
      'right-full',
      'top-1/2',
      '-translate-y-1/2',
      'mr-2',
      'after:left-full',
      'after:top-1/2',
      'after:-translate-y-1/2',
      'after:border-l-gray-800',
    ],
    right: [
      'left-full',
      'top-1/2',
      '-translate-y-1/2',
      'ml-2',
      'after:right-full',
      'after:top-1/2',
      'after:-translate-y-1/2',
      'after:border-r-gray-800',
    ],
  };

  const mergedTooltipClassName = twMerge(
    clsx(
      'absolute',
      'z-50',
      'px-2',
      'py-1',
      'text-xs',
      'font-medium',
      'text-white',
      'bg-gray-800',
      'rounded-md',
      'opacity-0',
      'invisible',
      'group-hover:opacity-100',
      'group-hover:visible',
      'transition-all',
      'duration-200',
      'whitespace-nowrap',
      ...positionClasses[position],
      'after:content-[\'\']',
      'after:absolute',
      'after:border-4',
      'after:border-transparent',
      className
    )
  );

  return (
    <div className="group relative inline-flex">
      {children}
      <span className={mergedTooltipClassName}>{content}</span>
    </div>
  );
}
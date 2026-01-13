'use client';

import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
}

export function Button({
  children,
  className,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  disabled,
  ...props
}: ButtonProps) {
  const baseClasses: ClassValue[] = [
    'font-medium',
    'rounded-xl',
    'transition-all',
    'duration-200',
    'focus:outline-none',
    'focus:ring-2',
    'focus:ring-offset-2',
    'disabled:opacity-50',
    'disabled:cursor-not-allowed',
  ];

  const variantClasses: Record<string, ClassValue[]> = {
    primary: [
      'bg-blue-500',
      'text-white',
      'hover:bg-blue-600',
      'active:bg-blue-700',
      'shadow-md',
      'hover:shadow-lg',
      'focus:ring-blue-500',
    ],
    ghost: [
      'bg-transparent',
      'text-gray-700',
      'hover:bg-white/20',
      'active:bg-white/30',
      'focus:ring-gray-500',
    ],
    danger: [
      'bg-red-500',
      'text-white',
      'hover:bg-red-600',
      'active:bg-red-700',
      'shadow-md',
      'hover:shadow-lg',
      'focus:ring-red-500',
    ],
  };

  const sizeClasses: Record<string, ClassValue[]> = {
    sm: ['px-3', 'py-1.5', 'text-sm'],
    md: ['px-4', 'py-2', 'text-base'],
    lg: ['px-6', 'py-3', 'text-lg'],
  };

  const mergedClassName = twMerge(
    clsx(
      ...baseClasses,
      ...variantClasses[variant],
      ...sizeClasses[size],
      isLoading && 'opacity-70 cursor-wait',
      className
    )
  );

  return (
    <button
      className={mergedClassName}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <span className="flex items-center gap-2">
          <svg
            className="animate-spin h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
          Loading...
        </span>
      ) : (
        children
      )}
    </button>
  );
}
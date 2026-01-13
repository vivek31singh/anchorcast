'use client';

import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { useState, ChangeEvent } from 'react';

interface ToggleProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  className?: string;
  label?: string;
}

export function Toggle({
  checked: controlledChecked,
  onChange,
  disabled = false,
  className,
  label,
}: ToggleProps) {
  const [internalChecked, setInternalChecked] = useState(false);

  const isControlled = controlledChecked !== undefined;
  const checked = isControlled ? controlledChecked : internalChecked;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newChecked = e.target.checked;
    if (!isControlled) {
      setInternalChecked(newChecked);
    }
    onChange?.(newChecked);
  };

  const baseClasses: ClassValue[] = [
    'relative',
    'inline-flex',
    'h-6',
    'w-11',
    'items-center',
    'rounded-full',
    'transition-colors',
    'duration-200',
    'ease-in-out',
    'focus:outline-none',
    'focus:ring-2',
    'focus:ring-blue-500',
    'focus:ring-offset-2',
  ];

  const stateClasses: ClassValue[] = checked
    ? ['bg-blue-500']
    : ['bg-gray-300', 'dark:bg-gray-600'];

  const thumbClasses: ClassValue[] = [
    'inline-block',
    'h-4',
    'w-4',
    'transform',
    'rounded-full',
    'bg-white',
    'transition-transform',
    'duration-200',
    'ease-in-out',
    checked ? 'translate-x-6' : 'translate-x-1',
  ];

  const containerClasses = twMerge(clsx(...baseClasses, ...stateClasses, className));
  const mergedThumbClasses = clsx(...thumbClasses);

  return (
    <label className={clsx('inline-flex items-center gap-2', disabled && 'opacity-50 cursor-not-allowed')}>
      <div className={containerClasses}>
        <input
          type="checkbox"
          className="sr-only"
          checked={checked}
          onChange={handleChange}
          disabled={disabled}
        />
        <span className={mergedThumbClasses} />
      </div>
      {label && (
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
          {label}
        </span>
      )}
    </label>
  );
}
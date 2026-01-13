'use client';

import { XMarkIcon } from '@heroicons/react/24/outline';
import { clsx } from 'clsx';

interface HashtagChipsProps {
  hashtags: string[];
  onRemove: (tag: string) => void;
}

export function HashtagChips({ hashtags, onRemove }: HashtagChipsProps) {
  if (hashtags.length === 0) {
    return (
      <div className="bg-white/5 border-2 border-dashed border-white/20 rounded-xl p-8 text-center">
        <p className="text-white/40 text-sm">No hashtags added yet</p>
        <p className="text-white/30 text-xs mt-1">Add hashtags above to get started</p>
      </div>
    );
  }

  return (
    <div className="flex flex-wrap gap-2">
      {hashtags.map((tag, index) => (
        <span
          key={`${tag}-${index}`}
          className={clsx(
            'inline-flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-blue-500/20 to-purple-500/20',
            'border border-white/20 rounded-lg text-white/90 text-sm',
            'hover:border-white/40 hover:from-blue-500/30 hover:to-purple-500/30',
            'transition-all duration-200 group'
          )}
        >
          <span className="font-medium">{tag}</span>
          <button
            onClick={() => onRemove(tag)}
            className={clsx(
              'flex items-center justify-center w-5 h-5 rounded-full',
              'bg-white/10 hover:bg-white/20 text-white/70 hover:text-white',
              'transition-all duration-200'
            )}
            aria-label={`Remove ${tag}`}
          >
            <XMarkIcon className="w-3 h-3" />
          </button>
        </span>
      ))}
    </div>
  );
}
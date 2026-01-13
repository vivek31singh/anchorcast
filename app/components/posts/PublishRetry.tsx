'use client';

import { ArrowPathIcon } from '@heroicons/react/24/outline';
import { Post } from '@/lib/types';

interface PublishRetryProps {
  post: Post;
  isRetrying: boolean;
  onRetry: () => void;
}

export const PublishRetry = ({ post, isRetrying, onRetry }: PublishRetryProps) => {
  return (
    <div className="flex items-center space-x-3">
      <span className="text-sm text-gray-600 dark:text-gray-400">
        {post.errorMsg || 'Failed to publish'}
      </span>
      <button
        onClick={onRetry}
        disabled={isRetrying}
        className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
          isRetrying
            ? 'bg-gray-400/30 text-gray-500 cursor-not-allowed'
            : 'bg-blue-500/20 text-blue-600 hover:bg-blue-500/30 hover:scale-105 active:scale-95'
        }`}
      >
        <ArrowPathIcon className={`w-4 h-4 ${isRetrying ? 'animate-spin' : ''}`} />
        <span className="text-sm font-medium">
          {isRetrying ? 'Retrying...' : 'Retry'}
        </span>
      </button>
    </div>
  );
};
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/outline';
import type { Post } from '@/lib/types';

interface PostStatusBadgeProps {
  status: Post['status'];
  errorMsg: string | null;
}

export default function PostStatusBadge({ status, errorMsg }: PostStatusBadgeProps) {
  const isPublished = status === 'published';

  return (
    <div
      className={`inline-flex items-center space-x-2 px-3 py-1 rounded-full text-sm ${
        isPublished
          ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
          : 'bg-red-500/20 text-red-300 border border-red-500/30'
      }`}
    >
      {isPublished ? (
        <CheckCircleIcon className="w-4 h-4" />
      ) : (
        <XCircleIcon className="w-4 h-4" />
      )}
      <span className="capitalize">{status}</span>
    </div>
  );
}
import { ArrowPathIcon } from '@heroicons/react/24/outline';
import Button from '@/components/ui/Button';
import type { Post } from '@/lib/types';

interface PublishRetryProps {
  post: Post;
  isRetrying: boolean;
  onRetry: (postId: number) => void;
}

export default function PublishRetry({ post, isRetrying, onRetry }: PublishRetryProps) {
  const isFailed = post.status === 'failed';

  if (!isFailed) {
    return null;
  }

  return (
    <div className="flex flex-col space-y-2">
      {post.errorMsg && (
        <p className="text-sm text-red-400 bg-red-500/10 px-3 py-2 rounded-lg">
          Error: {post.errorMsg}
        </p>
      )}
      <Button
        variant="primary"
        size="sm"
        onClick={() => onRetry(post.id)}
        disabled={isRetrying}
        className="w-full sm:w-auto"
      >
        <ArrowPathIcon
          className={`w-4 h-4 ${isRetrying ? 'animate-spin' : ''}`}
        />
        {isRetrying ? 'Retrying...' : 'Retry Publish'}
      </Button>
    </div>
  );
}
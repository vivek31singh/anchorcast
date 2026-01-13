import { ClockIcon, PhotoIcon } from '@heroicons/react/24/outline';
import GlassPane from '@/components/bento/GlassPane';
import PostStatusBadge from './PostStatusBadge';
import PublishRetry from './PublishRetry';
import type { Post } from '@/lib/types';

interface PostPreviewProps {
  post: Post;
  boatTitle: string;
  isRetrying: boolean;
  onRetry: (postId: number) => void;
}

export default function PostPreview({ post, boatTitle, isRetrying, onRetry }: PostPreviewProps) {
  const platformName = post.platform === 'fb' ? 'Facebook' : 'Instagram';
  const createdAt = new Date(post.createdAt).toLocaleString();

  return (
    <GlassPane className="p-4 hover:bg-white/25 transition-all duration-300">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        {/* Left: Post Info */}
        <div className="flex-1 space-y-3">
          {/* Header: Platform and Status */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center space-x-2">
              <PhotoIcon className="w-5 h-5 text-white/60" />
              <span className="font-medium text-white">{platformName}</span>
            </div>
            <PostStatusBadge status={post.status} errorMsg={post.errorMsg} />
          </div>

          {/* Boat Title */}
          <h3 className="text-lg font-semibold text-white">{boatTitle}</h3>

          {/* Timestamp */}
          <div className="flex items-center space-x-2 text-sm text-white/60">
            <ClockIcon className="w-4 h-4" />
            <span>{createdAt}</span>
          </div>

          {/* Preview of payload text if available */}
          {post.payload && typeof post.payload === 'object' && 'text' in post.payload && (
            <p className="text-sm text-white/70 line-clamp-2">{String(post.payload.text)}</p>
          )}
        </div>

        {/* Right: Actions */}
        <div className="flex sm:flex-col justify-end">
          <PublishRetry post={post} isRetrying={isRetrying} onRetry={onRetry} />
        </div>
      </div>
    </GlassPane>
  );
}
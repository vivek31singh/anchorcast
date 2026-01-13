'use client';

import { FacebookIcon, InstagramIcon } from '@heroicons/react/24/outline';
import { GlassPane } from '@/components/bento/GlassPane';
import { PostStatusBadge } from './PostStatusBadge';
import { PublishRetry } from './PublishRetry';
import { Post } from '@/lib/types';

interface PostPreviewProps {
  post: Post;
  boatTitle: string;
  isRetrying: boolean;
  onRetry: () => void;
}

export const PostPreview = ({ post, boatTitle, isRetrying, onRetry }: PostPreviewProps) => {
  const platformIcon = post.platform === 'fb' ? FacebookIcon : InstagramIcon;
  const PlatformIcon = platformIcon;

  return (
    <GlassPane className="p-6 space-y-4">
      {/* Header with Boat Title and Platform */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg">
            <PlatformIcon className="w-5 h-5 text-blue-500" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{boatTitle}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {post.platform === 'fb' ? 'Facebook' : 'Instagram'} • {new Date(post.createdAt).toLocaleDateString()}
            </p>
          </div>
        </div>
        <PostStatusBadge status={post.status} />
      </div>

      {/* Post Content Preview */}
      <div className="p-4 bg-white/10 rounded-lg border border-white/20">
        <p className="text-gray-700 dark:text-gray-300 text-sm line-clamp-3">
          {typeof post.payload === 'object' && 'message' in post.payload
            ? (post.payload as any).message
            : JSON.stringify(post.payload)}
        </p>
      </div>

      {/* Footer with Retry Action for Failed Posts */}
      {post.status === 'failed' && (
        <div className="pt-2">
          <PublishRetry post={post} isRetrying={isRetrying} onRetry={onRetry} />
        </div>
      )}
    </GlassPane>
  );
};
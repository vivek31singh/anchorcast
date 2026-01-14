'use client';
import { GlassPane } from '../bento/GlassPane';
import { Post } from '@/lib/types';
import { PostStatusBadge } from './PostStatusBadge';
import { PublishRetry } from './PublishRetry';
import { CalendarIcon } from '@heroicons/react/24/outline';

interface PostPreviewProps {
  post: Post;
  boatTitle: string;
  isRetrying: boolean;
  onRetry: (postId: number) => void;
}

export const PostPreview = ({ post, boatTitle, isRetrying, onRetry }: PostPreviewProps) => {
  const platformName = post.platform === 'fb' ? 'Facebook' : 'Instagram';

  return (
    <GlassPane className="hover:scale-[1.01] hover:shadow-xl transition-all duration-300 ease-in-out">
      <div className="flex items-start justify-between p-4">
        <div className="flex-1">
          <div className="mb-2 flex items-center gap-2">
            <span className="rounded-lg bg-blue-100 px-2 py-1 text-xs font-semibold text-blue-700">
              {platformName}
            </span>
            <PostStatusBadge status={post.status} />
          </div>
          <h4 className="mb-1 text-lg font-semibold text-gray-800">{boatTitle}</h4>
          <div className="flex items-center gap-1 text-sm text-gray-500">
            <CalendarIcon className="h-4 w-4" />
            <span>{new Date(post.createdAt).toLocaleDateString()}</span>
          </div>
        </div>
        {post.status === 'failed' && (
          <PublishRetry post={post} isRetrying={isRetrying} onRetry={onRetry} />
        )}
      </div>
    </GlassPane>
  );
};
'use client';

import { GlassPane } from './GlassPane';
import { CalendarIcon } from '@heroicons/react/24/outline';
import { posts } from '../../lib/dummy';
import { Post } from '../../lib/types';

interface UpcomingPostsProps {
  className?: string;
}

export function UpcomingPosts({ className }: UpcomingPostsProps) {
  // Filter for scheduled posts (using published posts as upcoming for demo)
  const upcomingPosts = posts
    .filter((post: Post) => post.status === 'published')
    .slice(0, 5);

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
    });
  };

  const formatTime = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
    });
  };

  const getPlatformLabel = (platform: string) => {
    return platform === 'fb' ? 'Facebook' : 'Instagram';
  };

  const getPlatformColor = (platform: string) => {
    return platform === 'fb' ? 'bg-blue-500/20 text-blue-400' : 'bg-pink-500/20 text-pink-400';
  };

  return (
    <GlassPane className={className}>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <CalendarIcon className="w-5 h-5 text-white/70" />
          <h3 className="text-lg font-semibold text-white">Upcoming Posts</h3>
        </div>
        <span className="text-sm text-white/50">Next 7 days</span>
      </div>

      <div className="space-y-3">
        {upcomingPosts.length > 0 ? (
          upcomingPosts.map((post: Post) => (
            <div
              key={post.id}
              className="flex items-center justify-between p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="flex flex-col items-center justify-center w-12 h-12 bg-white/10 rounded-lg">
                  <span className="text-xs text-white/60">
                    {formatDate(post.createdAt)}
                  </span>
                  <span className="text-sm font-semibold text-white">
                    {formatTime(post.createdAt)}
                  </span>
                </div>
                <div>
                  <span
                    className={`inline-flex items-center px-2 py-1 rounded-md text-xs font-medium ${getPlatformColor(
                      post.platform
                    )}`}
                  >
                    {getPlatformLabel(post.platform)}
                  </span>
                  <p className="text-sm text-white/70 mt-1">
                    Boat #{post.boatId}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <span className="inline-flex items-center gap-1 text-xs text-emerald-400">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                  Scheduled
                </span>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-8">
            <CalendarIcon className="w-12 h-12 text-white/20 mx-auto mb-2" />
            <p className="text-white/50 text-sm">No upcoming posts</p>
          </div>
        )}
      </div>
    </GlassPane>
  );
}

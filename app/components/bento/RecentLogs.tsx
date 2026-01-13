'use client';

import { GlassPane } from './GlassPane';
import {
  ClockIcon,
  CheckCircleIcon,
  XCircleIcon,
  ArrowPathIcon,
} from '@heroicons/react/24/outline';
import { posts } from '../../lib/dummy';
import { Post } from '../../lib/types';

interface RecentLogsProps {
  className?: string;
}

export function RecentLogs({ className }: RecentLogsProps) {
  const recentPosts = posts.slice(0, 8);

  const formatTimeAgo = (dateStr: string) => {
    const date = new Date(dateStr);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMins / 60);
    const diffDays = Math.floor(diffHours / 24);

    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    return `${diffDays}d ago`;
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'published':
        return (
          <CheckCircleIcon className="w-4 h-4 text-emerald-400" />
        );
      case 'failed':
        return (
          <XCircleIcon className="w-4 h-4 text-red-400" />
        );
      default:
        return (
          <ClockIcon className="w-4 h-4 text-white/40" />
        );
    }
  };

  const getPlatformLabel = (platform: string) => {
    return platform === 'fb' ? 'Facebook' : 'Instagram';
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'published':
        return 'Published';
      case 'failed':
        return 'Failed';
      default:
        return 'Pending';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'published':
        return 'text-emerald-400 bg-emerald-400/10';
      case 'failed':
        return 'text-red-400 bg-red-400/10';
      default:
        return 'text-white/60 bg-white/10';
    }
  };

  return (
    <GlassPane className={className}>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <ClockIcon className="w-5 h-5 text-white/70" />
          <h3 className="text-lg font-semibold text-white">Recent Activity</h3>
        </div>
        <span className="text-sm text-white/50">Last 24 hours</span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left border-b border-white/10">
              <th className="pb-3 text-xs font-medium text-white/50 uppercase tracking-wider">
                Post
              </th>
              <th className="pb-3 text-xs font-medium text-white/50 uppercase tracking-wider">
                Platform
              </th>
              <th className="pb-3 text-xs font-medium text-white/50 uppercase tracking-wider">
                Status
              </th>
              <th className="pb-3 text-xs font-medium text-white/50 uppercase tracking-wider">
                Time
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {recentPosts.map((post: Post) => (
              <tr key={post.id} className="hover:bg-white/5 transition-colors">
                <td className="py-3">
                  <div className="flex items-center gap-2">
                    {getStatusIcon(post.status)}
                    <span className="text-sm text-white/90">
                      Boat #{post.boatId}
                    </span>
                  </div>
                </td>
                <td className="py-3">
                  <span className="text-sm text-white/70">
                    {getPlatformLabel(post.platform)}
                  </span>
                </td>
                <td className="py-3">
                  <span
                    className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                      post.status
                    )}`}
                  >
                    {getStatusLabel(post.status)}
                  </span>
                </td>
                <td className="py-3">
                  <span className="text-sm text-white/50">
                    {formatTimeAgo(post.createdAt)}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {recentPosts.length === 0 && (
        <div className="text-center py-8">
          <ClockIcon className="w-12 h-12 text-white/20 mx-auto mb-2" />
          <p className="text-white/50 text-sm">No recent activity</p>
        </div>
      )}
    </GlassPane>
  );
}

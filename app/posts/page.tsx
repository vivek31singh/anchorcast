'use client';

import { useState } from 'react';
import { GlassPane } from '@/components/bento/GlassPane';
import { PostPreview } from '@/components/posts/PostPreview';
import { posts, boats } from '@/lib/dummy';
import { Post } from '@/lib/types';

export default function PostsPage() {
  const [activeTab, setActiveTab] = useState<'published' | 'failed'>('published');
  const [retryingIds, setRetryingIds] = useState<Set<number>>(new Set());

  const handleRetry = (postId: number) => {
    setRetryingIds((prev) => new Set(prev).add(postId));

    // Simulate API call with timeout
    setTimeout(() => {
      setRetryingIds((prev) => {
        const next = new Set(prev);
        next.delete(postId);
        return next;
      });
    }, 2000);
  };

  const filteredPosts = posts.filter((post) => post.status === activeTab);

  const getBoatTitle = (boatId: number): string => {
    const boat = boats.find((b) => b.id === boatId);
    return boat?.title || 'Unknown Boat';
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Posts</h1>
      </div>

      {/* Tab Navigation */}
      <GlassPane className="p-2 flex space-x-2">
        <button
          onClick={() => setActiveTab('published')}
          className={`flex-1 py-2 px-4 rounded-lg font-medium transition-all duration-200 ${
            activeTab === 'published'
              ? 'bg-blue-500 text-white shadow-lg'
              : 'text-gray-600 dark:text-gray-400 hover:bg-white/10'
          }`}
        >
          Published
        </button>
        <button
          onClick={() => setActiveTab('failed')}
          className={`flex-1 py-2 px-4 rounded-lg font-medium transition-all duration-200 ${
            activeTab === 'failed'
              ? 'bg-red-500 text-white shadow-lg'
              : 'text-gray-600 dark:text-gray-400 hover:bg-white/10'
          }`}
        >
          Failed
        </button>
      </GlassPane>

      {/* Posts List */}
      <div className="grid gap-4">
        {filteredPosts.map((post) => (
          <PostPreview
            key={post.id}
            post={post}
            boatTitle={getBoatTitle(post.boatId)}
            isRetrying={retryingIds.has(post.id)}
            onRetry={() => handleRetry(post.id)}
          />
        ))}
        {filteredPosts.length === 0 && (
          <GlassPane className="p-12 text-center">
            <p className="text-gray-500 dark:text-gray-400">
              No {activeTab} posts found
            </p>
          </GlassPane>
        )}
      </div>
    </div>
  );
}
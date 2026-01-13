'use client';

import { useState } from 'react';
import { posts, boats } from '@/lib/dummy';
import type { Post } from '@/lib/types';
import GlassPane from '@/components/bento/GlassPane';
import PostPreview from '@/components/posts/PostPreview';

export default function PostsPage() {
  const [activeTab, setActiveTab] = useState<'published' | 'failed'>('published');
  const [retryingIds, setRetryingIds] = useState<Set<number>>(new Set());

  const filteredPosts = posts.filter((post) => post.status === activeTab);

  const handleRetry = (postId: number) => {
    setRetryingIds((prev) => new Set(prev).add(postId));

    // Simulate network delay for retry action
    setTimeout(() => {
      setRetryingIds((prev) => {
        const updated = new Set(prev);
        updated.delete(postId);
        return updated;
      });
    }, 2000);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-white">Posts Management</h1>
      </div>

      <GlassPane className="p-6">
        {/* Tab Group */}
        <div className="flex space-x-4 border-b border-white/20 pb-4 mb-6">
          <button
            onClick={() => setActiveTab('published')}
            className={`px-4 py-2 rounded-lg transition-all duration-300 ${
              activeTab === 'published'
                ? 'bg-blue-500/30 text-white border border-blue-400/50'
                : 'text-white/60 hover:text-white hover:bg-white/10'
            }`}
          >
            Published
          </button>
          <button
            onClick={() => setActiveTab('failed')}
            className={`px-4 py-2 rounded-lg transition-all duration-300 ${
              activeTab === 'failed'
                ? 'bg-red-500/30 text-white border border-red-400/50'
                : 'text-white/60 hover:text-white hover:bg-white/10'
            }`}
          >
            Failed
          </button>
        </div>

        {/* Post List */}
        <div className="space-y-4">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-white/60">No {activeTab} posts found.</p>
            </div>
          ) : (
            filteredPosts.map((post) => {
              const boat = boats.find((b) => b.id === post.boatId);
              const boatTitle = boat?.title || 'Unknown Boat';
              const isRetrying = retryingIds.has(post.id);

              return (
                <PostPreview
                  key={post.id}
                  post={post}
                  boatTitle={boatTitle}
                  isRetrying={isRetrying}
                  onRetry={handleRetry}
                />
              );
            })
          )}
        </div>
      </GlassPane>
    </div>
  );
}
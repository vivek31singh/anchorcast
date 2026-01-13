'use client';

import { social } from '@/lib/dummy';
import { ConnectionCard } from '@/components/social/ConnectionCard';

export default function SocialPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Social Connections
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Manage your social media account connections for auto-posting
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
        <ConnectionCard
          platform="facebook"
          accountName={social.fbPageName}
          username="anchorcast_boats"
          tokenExpiresAt={social.tokenExpiresAt}
          isConnected={!!social.fbPageName}
        />

        <ConnectionCard
          platform="instagram"
          accountName={social.igUserName}
          username="anchorcast.boats"
          tokenExpiresAt={social.tokenExpiresAt}
          isConnected={!!social.igUserName}
        />
      </div>

      <div className="mt-12 p-6 bg-amber-500/10 border border-amber-500/30 rounded-2xl">
        <h3 className="text-lg font-semibold text-amber-800 dark:text-amber-300 mb-2">
          Connection Tips
        </h3>
        <ul className="space-y-2 text-amber-700 dark:text-amber-400 text-sm">
          <li>• Make sure your business pages are properly set up on each platform</li>
          <li>• Token expiration is set to 60 days by default for security</li>
          <li>• Reconnecting before expiration ensures uninterrupted auto-posting</li>
          <li>• Both accounts must be connected for cross-platform posting</li>
        </ul>
      </div>
    </div>
  );
}

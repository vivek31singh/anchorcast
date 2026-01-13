'use client';

import { useState } from 'react';
import { FacebookIcon, InstagramIcon } from '@heroicons/react/24/outline';
import { GlassPane } from '@/components/bento/GlassPane';
import { Button } from '@/components/ui/Button';

export type SocialPlatform = 'facebook' | 'instagram';

interface ConnectionCardProps {
  platform: SocialPlatform;
  accountName: string;
  username: string;
  tokenExpiresAt: string;
  isConnected: boolean;
}

export const ConnectionCard = ({
  platform,
  accountName,
  username,
  tokenExpiresAt,
  isConnected: initialConnected,
}: ConnectionCardProps) => {
  const [isConnected, setIsConnected] = useState(initialConnected);
  const [isConnecting, setIsConnecting] = useState(false);

  const getPlatformIcon = () => {
    switch (platform) {
      case 'facebook':
        return <FacebookIcon className="w-8 h-8 text-blue-600" />;
      case 'instagram':
        return <InstagramIcon className="w-8 h-8 text-pink-600" />;
      default:
        return null;
    }
  };

  const getPlatformColor = () => {
    switch (platform) {
      case 'facebook':
        return 'bg-blue-500/10 border-blue-500/30';
      case 'instagram':
        return 'bg-pink-500/10 border-pink-500/30';
      default:
        return '';
    }
  };

  const handleConnect = () => {
    setIsConnecting(true);
    // Simulate connection process with setTimeout
    setTimeout(() => {
      setIsConnecting(false);
      setIsConnected(true);
    }, 1500);
  };

  const handleReconnect = () => {
    setIsConnecting(true);
    // Simulate reconnection process with setTimeout
    setTimeout(() => {
      setIsConnecting(false);
    }, 1500);
  };

  const getStatusBadge = () => {
    if (isConnecting) {
      return (
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-500/20 text-yellow-700 dark:text-yellow-300">
          <span className="animate-spin mr-1.5 h-2 w-2 border-2 border-yellow-500 border-t-transparent rounded-full"></span>
          Connecting...
        </span>
      );
    }
    if (isConnected) {
      return (
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-500/20 text-emerald-700 dark:text-emerald-300">
          <span className="mr-1.5 h-2 w-2 bg-emerald-500 rounded-full"></span>
          Connected
        </span>
      );
    }
    return (
      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-500/20 text-red-700 dark:text-red-300">
        <span className="mr-1.5 h-2 w-2 bg-red-500 rounded-full"></span>
        Disconnected
      </span>
    );
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  return (
    <GlassPane className={`p-6 ${getPlatformColor()} border-2`}>
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-white/30 rounded-lg backdrop-blur-sm">
            {getPlatformIcon()}
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white capitalize">
              {platform}
            </h3>
            {accountName && (
              <p className="text-sm text-gray-600 dark:text-gray-400">{accountName}</p>
            )}
          </div>
        </div>
        {getStatusBadge()}
      </div>

      <div className="space-y-3 mb-6">
        <div className="flex justify-between items-center text-sm">
          <span className="text-gray-600 dark:text-gray-400">Username:</span>
          <span className="font-medium text-gray-900 dark:text-white">@{username}</span>
        </div>
        {isConnected && (
          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-600 dark:text-gray-400">Token expires:</span>
            <span className="font-medium text-gray-900 dark:text-white">
              {formatDate(tokenExpiresAt)}
            </span>
          </div>
        )}
      </div>

      <Button
        variant={isConnected ? 'ghost' : 'primary'}
        className="w-full"
        disabled={isConnecting}
        onClick={isConnected ? handleReconnect : handleConnect}
      >
        {isConnecting
          ? 'Processing...'
          : isConnected
          ? 'Reconnect'
          : `Connect ${platform.charAt(0).toUpperCase() + platform.slice(1)}`}
      </Button>
    </GlassPane>
  );
};

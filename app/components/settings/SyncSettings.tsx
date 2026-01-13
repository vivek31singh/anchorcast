'use client';

import { useState } from 'react';
import { ClockIcon, ArrowPathIcon, BellIcon } from '@heroicons/react/24/outline';
import { Button } from '@/components/ui/Button';

export const SyncSettings = () => {
  const [syncFrequency, setSyncFrequency] = useState('hourly');
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [isSyncing, setIsSyncing] = useState(false);
  const [lastSyncTime, setLastSyncTime] = useState<string | null>(null);
  const [saveSuccess, setSaveSuccess] = useState(false);

  const handleSyncNow = () => {
    setIsSyncing(true);
    
    setTimeout(() => {
      setIsSyncing(false);
      setLastSyncTime(new Date().toLocaleTimeString());
      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 3000);
    }, 1500);
  };

  const handleSaveSyncSettings = () => {
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 3000);
  };

  const frequencies = [
    { value: 'realtime', label: 'Real-time (Live)' },
    { value: 'hourly', label: 'Every Hour' },
    { value: 'daily', label: 'Once Daily' },
    { value: 'weekly', label: 'Once Weekly' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
          Sync Settings
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Configure how frequently your data synchronizes with WordPress
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Sync Frequency
          </label>
          <div className="grid grid-cols-2 gap-3">
            {frequencies.map((freq) => (
              <button
                key={freq.value}
                onClick={() => {
                  setSyncFrequency(freq.value);
                  setSaveSuccess(false);
                }}
                className={`p-3 rounded-lg border-2 text-left transition-all ${
                  syncFrequency === freq.value
                    ? 'border-blue-500 bg-blue-500/10 dark:border-blue-400 dark:bg-blue-400/10'
                    : 'border-white/30 bg-white/50 hover:bg-white/70 dark:border-gray-700 dark:bg-gray-800/50 dark:hover:bg-gray-700/50'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <ClockIcon className={`w-4 h-4 ${
                    syncFrequency === freq.value ? 'text-blue-600 dark:text-blue-400' : 'text-gray-400'
                  }`} />
                  <span className={`text-sm font-medium ${
                    syncFrequency === freq.value ? 'text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-300'
                  }`}>
                    {freq.label}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between p-4 bg-white/30 rounded-lg dark:bg-gray-800/30">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-blue-500/20 rounded-lg">
              <BellIcon className="w-5 h-5 text-blue-500" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900 dark:text-white">
                Enable Notifications
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Get notified about sync status
              </p>
            </div>
          </div>
          <button
            onClick={() => {
              setNotificationsEnabled(!notificationsEnabled);
              setSaveSuccess(false);
            }}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
              notificationsEnabled ? 'bg-blue-500' : 'bg-gray-300 dark:bg-gray-600'
            }`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                notificationsEnabled ? 'translate-x-6' : 'translate-x-1'
              }`}
            />
          </button>
        </div>

        <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-500/10 to-emerald-500/10 rounded-lg border border-blue-500/20">
          <div className="flex items-center space-x-3">
            <div>
              <p className="text-sm font-medium text-gray-900 dark:text-white">
                Last Sync
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                {lastSyncTime || 'Never synchronized'}
              </p>
            </div>
          </div>
          <Button
            onClick={handleSyncNow}
            disabled={isSyncing}
            variant="ghost"
            size="sm"
          >
            {isSyncing ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Syncing...
              </>
            ) : (
              <>
                <ArrowPathIcon className="-ml-1 mr-2 h-4 w-4" />
                Sync Now
              </>
            )}
          </Button>
        </div>
      </div>

      {saveSuccess && (
        <div className="flex items-center text-sm text-emerald-600 dark:text-emerald-400">
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          Sync settings saved successfully
        </div>
      )}
    </div>
  );
};

'use client';

import { useState } from 'react';
import { ExclamationTriangleIcon, TrashIcon } from '@heroicons/react/24/outline';
import { Button } from '@/components/ui/Button';

export const DangerZone = () => {
  const [showResetConfirm, setShowResetConfirm] = useState(false);
  const [isResetting, setIsResetting] = useState(false);
  const [resetSuccess, setResetSuccess] = useState(false);

  const handleResetSystem = () => {
    if (!showResetConfirm) {
      setShowResetConfirm(true);
      return;
    }

    setIsResetting(true);
    
    setTimeout(() => {
      setIsResetting(false);
      setShowResetConfirm(false);
      setResetSuccess(true);
      setTimeout(() => setResetSuccess(false), 3000);
    }, 1500);
  };

  return (
    <div className="space-y-6">
      <div className="border-2 border-red-500/30 rounded-lg p-6 bg-red-500/5">
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <div className="p-3 bg-red-500/20 rounded-full">
              <ExclamationTriangleIcon className="w-6 h-6 text-red-500" />
            </div>
          </div>
          <div className="flex-1">
            <h2 className="text-lg font-semibold text-red-600 dark:text-red-400 mb-1">
              Danger Zone
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              These actions are irreversible. Please proceed with caution.
            </p>

            <div className="space-y-4">
              <div className="bg-white/50 rounded-lg p-4 dark:bg-gray-800/50">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-sm font-medium text-gray-900 dark:text-white">
                      Reset All Settings
                    </h3>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                      This will reset all your preferences to default values
                    </p>
                  </div>
                  <Button
                    onClick={handleResetSystem}
                    disabled={isResetting}
                    variant="danger"
                    size="sm"
                  >
                    {isResetting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Resetting...
                      </>
                    ) : showResetConfirm ? (
                      'Confirm Reset'
                    ) : (
                      <>
                        <TrashIcon className="-ml-1 mr-2 h-4 w-4" />
                        Reset Settings
                      </>
                    )}
                  </Button>
                </div>
                {showResetConfirm && (
                  <p className="text-xs text-red-600 dark:text-red-400 mt-2">
                    ⚠️ This action cannot be undone. Click again to confirm.
                  </p>
                )}
              </div>

              <div className="bg-white/50 rounded-lg p-4 dark:bg-gray-800/50">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-sm font-medium text-gray-900 dark:text-white">
                      Clear All Cached Data
                    </h3>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                      Remove all locally cached posts and boat data
                    </p>
                  </div>
                  <Button
                    onClick={() => {}}
                    variant="danger"
                    size="sm"
                  >
                    <TrashIcon className="-ml-1 mr-2 h-4 w-4" />
                    Clear Cache
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {resetSuccess && (
        <div className="flex items-center justify-center p-4 bg-emerald-500/10 rounded-lg border border-emerald-500/30">
          <svg className="w-5 h-5 text-emerald-600 dark:text-emerald-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
            Settings have been reset to defaults
          </span>
        </div>
      )}
    </div>
  );
};

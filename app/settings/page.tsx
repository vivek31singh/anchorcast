'use client';

import { GlassPane } from '@/components/bento/GlassPane';
import { GeneralSettings } from '@/components/settings/GeneralSettings';
import { SyncSettings } from '@/components/settings/SyncSettings';
import { DangerZone } from '@/components/settings/DangerZone';
import { CogIcon } from '@heroicons/react/24/outline';

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-3">
        <div className="p-2 bg-blue-500/20 rounded-lg">
          <CogIcon className="w-6 h-6 text-blue-500" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Settings</h1>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Manage your preferences and system configuration
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="lg:col-span-2">
          <GlassPane>
            <GeneralSettings />
          </GlassPane>
        </div>
        <div className="lg:col-span-2">
          <GlassPane>
            <SyncSettings />
          </GlassPane>
        </div>
        <div className="lg:col-span-2">
          <GlassPane>
            <DangerZone />
          </GlassPane>
        </div>
      </div>
    </div>
  );
}

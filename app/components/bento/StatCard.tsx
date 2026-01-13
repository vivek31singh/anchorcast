'use client';

import React from 'react';
import { GlassPane } from './GlassPane';
import { ArrowTrendingUpIcon, ArrowTrendingDownIcon } from '@heroicons/react/24/outline';

type TrendDirection = 'up' | 'down' | 'neutral';

interface StatCardProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  label: string;
  value: string | number;
  trend?: {
    value: string;
    direction: TrendDirection;
  };
}

export const StatCard: React.FC<StatCardProps> = ({
  icon: Icon,
  label,
  value,
  trend,
}) => {
  return (
    <GlassPane className="flex items-center gap-4">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/30">
        <Icon className="h-6 w-6 text-blue-600" />
      </div>
      <div className="flex-1">
        <p className="text-sm font-medium text-gray-600">{label}</p>
        <p className="text-2xl font-bold text-gray-900">{value}</p>
        {trend && (
          <div className="flex items-center gap-1 text-sm">
            {trend.direction === 'up' && (
              <ArrowTrendingUpIcon className="h-4 w-4 text-emerald-600" />
            )}
            {trend.direction === 'down' && (
              <ArrowTrendingDownIcon className="h-4 w-4 text-red-500" />
            )}
            <span
              className={
                trend.direction === 'up'
                  ? 'text-emerald-600'
                  : trend.direction === 'down'
                  ? 'text-red-500'
                  : 'text-gray-500'
              }
            >
              {trend.value}
            </span>
          </div>
        )}
      </div>
    </GlassPane>
  );
};

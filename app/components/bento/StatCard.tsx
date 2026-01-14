'use client';

import { GlassPane } from './GlassPane';
import { 
  TrendingUpIcon, 
  TrendingDownIcon,
  ArrowUpIcon,
  ArrowDownIcon
} from '@heroicons/react/24/outline';

interface StatCardProps {
  label: string;
  value: string | number;
  trend?: 'up' | 'down' | 'neutral';
  trendValue?: string;
  icon?: React.ReactNode;
}

export const StatCard: React.FC<StatCardProps> = ({
  label,
  value,
  trend = 'neutral',
  trendValue,
  icon
}) => {
  const getTrendIcon = () => {
    switch (trend) {
      case 'up':
        return <ArrowUpIcon className="w-4 h-4 text-emerald-500" />;
      case 'down':
        return <ArrowDownIcon className="w-4 h-4 text-red-500" />;
      default:
        return null;
    }
  };

  return (
    <GlassPane className="p-6 hover:scale-105 transition-all duration-300">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-white/70 mb-1">{label}</p>
          <p className="text-3xl font-bold text-white">{value}</p>
          {trend !== 'neutral' && trendValue && (
            <div className="flex items-center gap-1 mt-2">
              {getTrendIcon()}
              <span className={`text-sm font-medium ${
                trend === 'up' ? 'text-emerald-500' : 'text-red-500'
              }`}>
                {trendValue}
              </span>
            </div>
          )}
        </div>
        {icon && (
          <div className="p-3 bg-white/10 rounded-xl">
            {icon}
          </div>
        )}
      </div>
    </GlassPane>
  );
};

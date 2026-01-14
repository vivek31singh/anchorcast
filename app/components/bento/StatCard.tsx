'use client';

import { GlassPane } from './GlassPane';
import { 
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
        return <ArrowDownIcon className="w-4 h-4 text-rose-500" />;
      default:
        return null;
    }
  };

  return (
    <GlassPane className="p-6 hover:scale-105 transition-transform duration-300">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-gray-600 mb-1">{label}</p>
          <p className="text-3xl font-bold text-gray-900">{value}</p>
        </div>
        {icon && <div className="p-2 bg-blue-100 rounded-lg">{icon}</div>}
      </div>
      {(trend !== 'neutral' && trendValue) && (
        <div className="flex items-center mt-4 space-x-1">
          {getTrendIcon()}
          <span className={`text-sm font-medium ${trend === 'up' ? 'text-emerald-600' : 'text-rose-600'}`}>
            {trendValue}
          </span>
        </div>
      )}
    </GlassPane>
  );
};
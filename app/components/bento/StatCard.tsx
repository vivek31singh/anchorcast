import { GlassPane } from './GlassPane';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StatCardProps {
  label: string;
  value: string | number;
  icon: LucideIcon;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  className?: string;
}

export const StatCard = ({ label, value, icon: Icon, trend, className }: StatCardProps) => {
  return (
    <GlassPane className={cn('hover:scale-[1.02] hover:shadow-2xl transition-all duration-300 ease-in-out', className)}>
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-500">{label}</p>
          <p className="mt-2 text-3xl font-bold text-gray-800">{value}</p>
          {trend && (
            <p
              className={cn(
                'mt-2 text-sm font-medium',
                trend.isPositive ? 'text-emerald-600' : 'text-red-600'
              )}
            >
              {trend.isPositive ? '+' : '-'}{trend.value}%
            </p>
          )}
        </div>
        <div className="rounded-xl bg-gradient-to-br from-blue-500/20 to-emerald-500/20 p-3">
          <Icon className="h-6 w-6 text-blue-600" />
        </div>
      </div>
    </GlassPane>
  );
};
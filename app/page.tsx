import { StatCard } from './components/bento/StatCard';
import { QuickAction } from './components/bento/QuickAction';
import { UpcomingPosts } from './components/bento/UpcomingPosts';
import { RecentLogs } from './components/bento/RecentLogs';
import { PageShell } from './components/layout/PageShell';
import { stats } from './lib/dummy';
import {
  ChartBarIcon,
  DocumentCheckIcon,
  ExclamationTriangleIcon,
  ClockIcon,
  ArrowPathIcon,
  PlusIcon,
} from '@heroicons/react/24/outline';

export default function DashboardPage() {
  return (
    <PageShell>
      <div className="px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white">Dashboard</h1>
          <p className="mt-1 text-white/60">
            Overview of your inventory and posting activity
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-12 gap-4 lg:gap-6">
          {/* Stat Cards - Top Row */}
          <div className="col-span-1 md:col-span-2 lg:col-span-3 xl:col-span-3">
            <StatCard
              title="Total Boats"
              value={stats.totalBoats}
              icon={<ChartBarIcon />}
              trend="+12%"
              trendPositive={true}
            />
          </div>
          <div className="col-span-1 md:col-span-2 lg:col-span-3 xl:col-span-3">
            <StatCard
              title="Published Posts"
              value={stats.publishedPosts}
              icon={<DocumentCheckIcon />}
              trend="+8%"
              trendPositive={true}
            />
          </div>
          <div className="col-span-1 md:col-span-2 lg:col-span-3 xl:col-span-3">
            <StatCard
              title="Failed Posts"
              value={stats.failedPosts}
              icon={<ExclamationTriangleIcon />}
              trend="-2%"
              trendPositive={true}
            />
          </div>
          <div className="col-span-1 md:col-span-2 lg:col-span-3 xl:col-span-3">
            <StatCard
              title="Next Sync"
              value={new Date(stats.nextSync).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
              })}
              icon={<ClockIcon />}
              trend="2h left"
              trendPositive={false}
            />
          </div>

          {/* Quick Actions - Middle Section */}
          <div className="col-span-1 md:col-span-1 lg:col-span-2 xl:col-span-2">
            <QuickAction
              title="Sync Now"
              description="Update inventory"
              icon={<ArrowPathIcon />}
              onClick={() => console.log('Sync clicked')}
            />
          </div>
          <div className="col-span-1 md:col-span-1 lg:col-span-2 xl:col-span-2">
            <QuickAction
              title="Add Boat"
              description="New listing"
              icon={<PlusIcon />}
              onClick={() => console.log('Add boat clicked')}
            />
          </div>

          {/* Upcoming Posts - Middle Section */}
          <div className="col-span-1 md:col-span-2 lg:col-span-4 xl:col-span-8">
            <UpcomingPosts />
          </div>

          {/* Recent Logs - Bottom Section */}
          <div className="col-span-1 md:col-span-2 lg:col-span-4 xl:col-span-12">
            <RecentLogs />
          </div>
        </div>
      </div>
    </PageShell>
  );
}

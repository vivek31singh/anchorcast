'use client';

import { useState, useMemo } from 'react';
import { PageShell } from '../components/layout/PageShell';
import { GlassPane } from '../components/bento/GlassPane';
import { Button } from '../components/ui/Button';
import { Toggle } from '../components/ui/Toggle';
import { BoatGridCard } from '../components/boats/BoatGridCard';
import { BoatTableRow } from '../components/boats/BoatTableRow';
import { boats } from '../lib/dummy';
import { 
  MagnifyingGlassIcon,
  Squares2X2Icon,
  TableCellsIcon,
  PlusIcon,
} from '@heroicons/react/24/outline';
import { clsx } from 'clsx';

type ViewMode = 'grid' | 'table';

export default function BoatsPage() {
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter boats based on search query
  const filteredBoats = useMemo(() => {
    if (!searchQuery.trim()) return boats;
    
    const query = searchQuery.toLowerCase();
    return boats.filter(boat => 
      boat.title.toLowerCase().includes(query) ||
      boat.price.toLowerCase().includes(query) ||
      boat.year.toString().includes(query) ||
      boat.lengthFt.toString().includes(query)
    );
  }, [searchQuery]);

  return (
    <PageShell>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Boat Catalogue</h1>
            <p className="text-gray-600 mt-1">Manage and browse your boat inventory</p>
          </div>
          <Button className="w-full sm:w-auto">
            <PlusIcon className="w-5 h-5 mr-2" />
            Add Boat
          </Button>
        </div>

        {/* Search and View Controls */}
        <GlassPane className="p-4 mb-6">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="relative w-full sm:max-w-md">
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search boats by name, price, year..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-white/50 border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent text-gray-900 placeholder-gray-500 transition-all"
              />
            </div>

            {/* View Toggle */}
            <div className="flex items-center gap-2 bg-white/30 rounded-xl p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={clsx(
                  'p-2 rounded-lg transition-all',
                  viewMode === 'grid' 
                    ? 'bg-white/60 text-blue-600 shadow-sm' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-white/40'
                )}
                aria-label="Grid view"
              >
                <Squares2X2Icon className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('table')}
                className={clsx(
                  'p-2 rounded-lg transition-all',
                  viewMode === 'table' 
                    ? 'bg-white/60 text-blue-600 shadow-sm' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-white/40'
                )}
                aria-label="Table view"
              >
                <TableCellsIcon className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-3 text-sm text-gray-600">
            Showing {filteredBoats.length} of {boats.length} boats
          </div>
        </GlassPane>

        {/* Content - Grid View */}
        {viewMode === 'grid' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredBoats.map((boat) => (
              <BoatGridCard key={boat.id} boat={boat} />
            ))}
          </div>
        )}

        {/* Content - Table View */}
        {viewMode === 'table' && (
          <GlassPane className="overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-white/30">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Boat
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Price
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Posts
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Last Modified
                    </th>
                    <th className="px-4 py-3 text-right text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/20">
                  {filteredBoats.map((boat) => (
                    <BoatTableRow key={boat.id} boat={boat} />
                  ))}
                </tbody>
              </table>
            </div>

            {/* Empty State */}
            {filteredBoats.length === 0 && (
              <div className="py-12 text-center">
                <MagnifyingGlassIcon className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 text-lg">No boats found</p>
                <p className="text-gray-500 text-sm mt-1">Try adjusting your search query</p>
              </div>
            )}
          </GlassPane>
        )}

        {/* Empty State for Grid */}
        {viewMode === 'grid' && filteredBoats.length === 0 && (
          <GlassPane className="py-12 text-center">
            <MagnifyingGlassIcon className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600 text-lg">No boats found</p>
            <p className="text-gray-500 text-sm mt-1">Try adjusting your search query</p>
          </GlassPane>
        )}
      </div>
    </PageShell>
  );
}
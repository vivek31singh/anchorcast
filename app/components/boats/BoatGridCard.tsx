'use client';

import { Boat } from '../../lib/types';
import { GlassPane } from '../bento/GlassPane';
import { Button } from '../ui/Button';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { clsx } from 'clsx';

interface BoatGridCardProps {
  boat: Boat;
}

export function BoatGridCard({ boat }: BoatGridCardProps) {
  return (
    <GlassPane className="overflow-hidden group">
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-blue-100 to-blue-200">
        <img
          src={boat.imgUrl}
          alt={boat.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg text-sm font-semibold text-gray-800">
          {boat.year}
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 text-lg mb-1 line-clamp-1">{boat.title}</h3>
        
        <div className="flex items-center justify-between mb-3">
          <span className="text-2xl font-bold text-blue-600">{boat.price}</span>
          <span className="text-gray-600 text-sm">{boat.lengthFt} ft</span>
        </div>

        <div className="flex items-center justify-between text-sm text-gray-500">
          <span>{boat.publishCount} posts</span>
          <span className="text-xs">
            {new Date(boat.modifiedGmt).toLocaleDateString()}
          </span>
        </div>

        <Button 
          variant="ghost" 
          size="sm" 
          className="w-full mt-4 group-hover:bg-blue-50"
        >
          View Details
          <ArrowRightIcon className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </GlassPane>
  );
}
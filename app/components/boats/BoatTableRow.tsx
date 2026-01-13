'use client';

import { Boat } from '../../lib/types';
import { Button } from '../ui/Button';
import { ArrowRightIcon, PencilIcon } from '@heroicons/react/24/outline';
import { clsx } from 'clsx';

interface BoatTableRowProps {
  boat: Boat;
}

export function BoatTableRow({ boat }: BoatTableRowProps) {
  return (
    <tr className="border-b border-white/20 hover:bg-white/10 transition-colors">
      {/* Boat Info */}
      <td className="px-4 py-4">
        <div className="flex items-center gap-3">
          <div className="w-16 h-12 rounded-lg overflow-hidden bg-gradient-to-br from-blue-100 to-blue-200 flex-shrink-0">
            <img
              src={boat.imgUrl}
              alt={boat.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <div className="font-semibold text-gray-900">{boat.title}</div>
            <div className="text-sm text-gray-500">{boat.year} • {boat.lengthFt} ft</div>
          </div>
        </div>
      </td>

      {/* Price */}
      <td className="px-4 py-4">
        <span className="font-semibold text-blue-600">{boat.price}</span>
      </td>

      {/* Publish Count */}
      <td className="px-4 py-4">
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100/50 text-blue-800">
          {boat.publishCount} posts
        </span>
      </td>

      {/* Last Modified */}
      <td className="px-4 py-4 text-gray-600">
        {new Date(boat.modifiedGmt).toLocaleDateString()}
      </td>

      {/* Actions */}
      <td className="px-4 py-4">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" className="p-2">
            <PencilIcon className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="sm" className="p-2">
            <ArrowRightIcon className="w-4 h-4" />
          </Button>
        </div>
      </td>
    </tr>
  );
}
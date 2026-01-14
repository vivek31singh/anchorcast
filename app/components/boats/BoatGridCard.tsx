'use client';
import { GlassPane } from '../bento/GlassPane';
import { Boat } from '@/lib/types';

interface BoatGridCardProps {
  boat: Boat;
  onSelect: (id: number) => void;
}

export const BoatGridCard = ({ boat, onSelect }: BoatGridCardProps) => {
  return (
    <GlassPane
      className="cursor-pointer hover:scale-[1.02] hover:shadow-2xl transition-all duration-300 ease-in-out"
      onClick={() => onSelect(boat.id)}
    >
      <div className="aspect-video w-full overflow-hidden rounded-t-xl bg-gradient-to-br from-blue-100 to-emerald-50">
        <img
          src={boat.imgUrl || '/placeholder-boat.png'}
          alt={boat.title}
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{boat.title}</h3>
        <p className="mt-1 text-2xl font-bold text-blue-600">{boat.price}</p>
        <div className="mt-3 flex items-center justify-between text-sm text-gray-500">
          <span>{boat.year} • {boat.lengthFt} ft</span>
          <span>{boat.publishCount} posts</span>
        </div>
      </div>
    </GlassPane>
  );
};
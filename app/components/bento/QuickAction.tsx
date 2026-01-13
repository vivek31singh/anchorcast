'use client';

import React from 'react';
import { GlassPane } from './GlassPane';
import { Button } from '../ui/Button';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger';

type ButtonSize = 'sm' | 'md' | 'lg';

interface QuickActionProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  label: string;
  description: string;
  buttonText: string;
  onClick?: () => void;
  buttonVariant?: ButtonVariant;
  buttonSize?: ButtonSize;
}

export const QuickAction: React.FC<QuickActionProps> = ({
  icon: Icon,
  label,
  description,
  buttonText,
  onClick,
  buttonVariant = 'primary',
  buttonSize = 'md',
}) => {
  return (
    <GlassPane className="flex items-center gap-4">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/30">
        <Icon className="h-6 w-6 text-blue-600" />
      </div>
      <div className="flex flex-1 flex-col">
        <h3 className="font-semibold text-gray-900">{label}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
      <Button
        variant={buttonVariant}
        size={buttonSize}
        onClick={onClick}
        className="shrink-0"
      >
        {buttonText}
      </Button>
    </GlassPane>
  );
};

'use client';

import { icons } from 'lucide-react';
import { HTMLAttributes } from 'react';

interface IconProps extends HTMLAttributes<HTMLDivElement> {
  name: string;
  size?: number;
}

export function Icon({ name, size = 24, className, ...props }: IconProps) {
  const LucideIcon = icons[name as keyof typeof icons];

  if (!LucideIcon) {
    console.warn(`Icon "${name}" not found in Lucide icons`);
    return null;
  }

  return (
    <div className={className} {...props}>
      <LucideIcon size={size} />
    </div>
  );
}


import React from 'react';
import { Element, categoryColors } from '@/data/elements';
import { cn } from '@/lib/utils';

interface ElementCardProps {
  element: Element;
  isSelected?: boolean;
  onClick?: () => void;
  className?: string;
}

const ElementCard: React.FC<ElementCardProps> = ({ 
  element, 
  isSelected = false, 
  onClick,
  className
}) => {
  return (
    <div 
      className={cn(
        "element-card",
        categoryColors[element.category],
        isSelected && "ring-2 ring-primary scale-105",
        className
      )}
      onClick={onClick}
    >
      <div className="text-xs text-gray-500">{element.number}</div>
      <div className="text-lg font-bold">{element.symbol}</div>
      <div className="text-xs truncate max-w-full">{element.name}</div>
    </div>
  );
};

export default ElementCard;

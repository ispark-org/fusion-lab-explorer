
import React from 'react';
import { Element, categoryColors } from '@/data/elements';
import { cn } from '@/lib/utils';

interface ElementCardProps {
  element: Element;
  isSelected?: boolean;
  onClick?: () => void;
  onShowDetails?: () => void;
  className?: string;
}

const ElementCard: React.FC<ElementCardProps> = ({ 
  element, 
  isSelected = false, 
  onClick,
  onShowDetails,
  className
}) => {
  const handleClick = (e: React.MouseEvent) => {
    if (e.shiftKey && onShowDetails) {
      onShowDetails();
    } else if (onClick) {
      onClick();
    }
  };

  return (
    <div 
      className={cn(
        "element-card cursor-pointer hover:scale-105 transition-transform text-center p-1",
        categoryColors[element.category],
        isSelected && "ring-2 ring-primary scale-105 font-bold",
        className
      )}
      onClick={handleClick}
      title="Click to select, Shift+Click for details"
    >
      <div className="text-[0.6rem] text-gray-600">{element.number}</div>
      <div className="text-sm font-bold">{element.symbol}</div>
      <div className="text-[0.6rem] truncate max-w-full">{element.name}</div>
    </div>
  );
};

export default ElementCard;

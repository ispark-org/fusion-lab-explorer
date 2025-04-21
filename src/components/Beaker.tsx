
import React from 'react';
import { cn } from '@/lib/utils';

interface BeakerProps {
  color?: string;
  isReacting?: boolean;
  reactionType?: 'color-change' | 'fizz' | 'glow' | 'none';
  children?: React.ReactNode;
}

const Beaker: React.FC<BeakerProps> = ({ 
  color = 'bg-blue-100', 
  isReacting = false,
  reactionType = 'none',
  children
}) => {
  return (
    <div className={cn(
      "beaker relative",
      isReacting && reactionType === 'glow' && "animate-glow"
    )}>
      <div className={cn(
        "absolute bottom-0 left-0 right-0 transition-all duration-1000 ease-in-out",
        color,
        isReacting ? "h-3/4" : "h-0"
      )}>
        {isReacting && reactionType === 'fizz' && (
          <>
            <div className="absolute bottom-4 left-4 w-2 h-2 rounded-full bg-white/80 animate-bubble" style={{ animationDelay: '0.2s' }}></div>
            <div className="absolute bottom-8 left-8 w-3 h-3 rounded-full bg-white/80 animate-bubble" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute bottom-12 left-12 w-2 h-2 rounded-full bg-white/80 animate-bubble" style={{ animationDelay: '0.8s' }}></div>
            <div className="absolute bottom-8 left-20 w-4 h-4 rounded-full bg-white/80 animate-bubble" style={{ animationDelay: '1.2s' }}></div>
          </>
        )}
      </div>
      {children}
    </div>
  );
};

export default Beaker;

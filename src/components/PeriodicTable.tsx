
import React from 'react';
import { Element } from '@/data/elements';
import ElementCard from './ElementCard';

interface PeriodicTableProps {
  elements: Element[];
  selectedElements: Element[];
  onElementSelect: (element: Element) => void;
}

const PeriodicTable: React.FC<PeriodicTableProps> = ({ 
  elements, 
  selectedElements, 
  onElementSelect 
}) => {
  // Create a grid layout for the first 20 elements (simplified for this version)
  // A full implementation would handle all 118 elements in the correct positions
  
  const isElementSelected = (element: Element) => {
    return selectedElements.some(el => el.number === element.number);
  };

  return (
    <div className="w-full overflow-auto p-2">
      <div className="grid grid-cols-18 gap-1">
        {elements.map(element => {
          const gridColumn = element.group || 1;
          const gridRow = element.period;

          return (
            <div
              key={element.number}
              className="w-14 h-14"
              style={{
                gridColumn,
                gridRow,
              }}
            >
              <ElementCard
                element={element}
                isSelected={isElementSelected(element)}
                onClick={() => onElementSelect(element)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PeriodicTable;

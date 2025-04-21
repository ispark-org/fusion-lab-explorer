
import React, { useState } from 'react';
import { Element } from '@/data/elements';
import ElementCard from './ElementCard';
import ElementDetailsDialog from './ElementDetailsDialog';

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
  const [selectedElementForDetails, setSelectedElementForDetails] = useState<Element | null>(null);
  
  const isElementSelected = (element: Element) => {
    return selectedElements.some(el => el.number === element.number);
  };

  return (
    <div className="w-full overflow-auto p-2">
      <div className="grid grid-cols-18 gap-1 relative">
        {/* Render main block elements */}
        {elements.map(element => {
          // Skip lanthanides (57-71) and actinides (89-103) as they'll be shown separately
          if ((element.number >= 57 && element.number <= 71) || 
              (element.number >= 89 && element.number <= 103)) {
            return null;
          }

          return (
            <div
              key={element.number}
              className="w-14 h-14"
              style={{
                gridColumn: element.group || 1,
                gridRow: element.period,
              }}
            >
              <ElementCard
                element={element}
                isSelected={isElementSelected(element)}
                onClick={() => onElementSelect(element)}
                onShowDetails={() => setSelectedElementForDetails(element)}
              />
            </div>
          );
        })}

        {/* Render lanthanides */}
        <div className="col-span-18 mt-4">
          <div className="grid grid-cols-15 gap-1">
            {elements
              .filter(element => element.number >= 57 && element.number <= 71)
              .map(element => (
                <div key={element.number} className="w-14 h-14">
                  <ElementCard
                    element={element}
                    isSelected={isElementSelected(element)}
                    onClick={() => onElementSelect(element)}
                    onShowDetails={() => setSelectedElementForDetails(element)}
                  />
                </div>
              ))}
          </div>
        </div>

        {/* Render actinides */}
        <div className="col-span-18 mt-1">
          <div className="grid grid-cols-15 gap-1">
            {elements
              .filter(element => element.number >= 89 && element.number <= 103)
              .map(element => (
                <div key={element.number} className="w-14 h-14">
                  <ElementCard
                    element={element}
                    isSelected={isElementSelected(element)}
                    onClick={() => onElementSelect(element)}
                    onShowDetails={() => setSelectedElementForDetails(element)}
                  />
                </div>
              ))}
          </div>
        </div>
      </div>

      <ElementDetailsDialog
        element={selectedElementForDetails}
        open={!!selectedElementForDetails}
        onOpenChange={(open) => !open && setSelectedElementForDetails(null)}
      />
    </div>
  );
};

export default PeriodicTable;

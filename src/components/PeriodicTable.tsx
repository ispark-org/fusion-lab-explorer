
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

  const renderElementInPosition = (atomicNumber: number) => {
    const element = elements.find(e => e.number === atomicNumber);
    if (!element) return <div className="w-14 h-14" />;

    return (
      <div className="w-14 h-14">
        <ElementCard
          element={element}
          isSelected={isElementSelected(element)}
          onClick={() => onElementSelect(element)}
          onShowDetails={() => setSelectedElementForDetails(element)}
        />
      </div>
    );
  };

  return (
    <div className="w-full overflow-auto p-2">
      <div className="inline-block min-w-full">
        {/* Period 1 */}
        <div className="grid grid-cols-18 gap-1">
          {renderElementInPosition(1)}
          <div className="col-span-16" />
          {renderElementInPosition(2)}
        </div>

        {/* Period 2 */}
        <div className="grid grid-cols-18 gap-1 mt-1">
          {renderElementInPosition(3)}
          {renderElementInPosition(4)}
          <div className="col-span-10" />
          {renderElementInPosition(5)}
          {renderElementInPosition(6)}
          {renderElementInPosition(7)}
          {renderElementInPosition(8)}
          {renderElementInPosition(9)}
          {renderElementInPosition(10)}
        </div>

        {/* Period 3 */}
        <div className="grid grid-cols-18 gap-1 mt-1">
          {renderElementInPosition(11)}
          {renderElementInPosition(12)}
          <div className="col-span-10" />
          {renderElementInPosition(13)}
          {renderElementInPosition(14)}
          {renderElementInPosition(15)}
          {renderElementInPosition(16)}
          {renderElementInPosition(17)}
          {renderElementInPosition(18)}
        </div>

        {/* Periods 4-7 (Main block) */}
        {[4, 5, 6, 7].map(period => (
          <div key={period} className="grid grid-cols-18 gap-1 mt-1">
            {Array.from({ length: 18 }).map((_, index) => {
              const atomicNumber = elements.find(
                e => e.period === period && e.group === index + 1
              )?.number;
              return atomicNumber ? renderElementInPosition(atomicNumber) : <div key={index} className="w-14 h-14" />;
            })}
          </div>
        ))}

        {/* Spacer */}
        <div className="h-4" />

        {/* Lanthanides */}
        <div className="grid grid-cols-15 gap-1 mt-4 ml-16">
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

        {/* Actinides */}
        <div className="grid grid-cols-15 gap-1 mt-1 ml-16">
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

      <ElementDetailsDialog
        element={selectedElementForDetails}
        open={!!selectedElementForDetails}
        onOpenChange={(open) => !open && setSelectedElementForDetails(null)}
      />
    </div>
  );
};

export default PeriodicTable;

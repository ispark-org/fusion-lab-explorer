
import React, { useState } from 'react';
import { Element, categoryColors } from '@/data/elements';
import ElementCard from './ElementCard';
import ElementDetailsDialog from './ElementDetailsDialog';
import { ScrollArea } from '@/components/ui/scroll-area';

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

  // Find element by group and period
  const getElement = (group: number, period: number) => {
    return elements.find(e => e.group === group && e.period === period);
  };

  // Find lanthanide or actinide by number
  const getLanthActElement = (number: number) => {
    return elements.find(e => e.number === number);
  };

  // Render an element cell
  const renderElement = (element: Element | undefined, key: string) => {
    if (!element) return <div key={key} className="empty-cell" />;
    
    return (
      <div key={key} className="element-container">
        <ElementCard
          element={element}
          isSelected={isElementSelected(element)}
          onClick={() => onElementSelect(element)}
          onShowDetails={() => setSelectedElementForDetails(element)}
          className=""
        />
      </div>
    );
  };

  // Render an empty cell
  const renderEmptyCell = (key: string) => {
    return <div key={key} className="empty-cell" />;
  };

  return (
    <div className="periodic-table-container w-full">
      <ScrollArea className="h-[calc(100vh-300px)]">
        <div className="periodic-table inline-block p-4">
          {/* Group labels */}
          <div className="grid grid-cols-18 gap-1 mb-2">
            <div className="period-label"></div>
            {Array.from({ length: 18 }, (_, i) => (
              <div key={`group-${i+1}`} className="group-label">{i+1}</div>
            ))}
          </div>

          {/* Period 1 */}
          <div className="grid grid-cols-18 gap-1 mb-1">
            <div className="period-label">1</div>
            {renderElement(getElement(1, 1), "1-1")}
            {Array.from({ length: 16 }).map((_, i) => renderEmptyCell(`empty-1-${i+2}`))}
            {renderElement(getElement(18, 1), "1-18")}
          </div>

          {/* Period 2 */}
          <div className="grid grid-cols-18 gap-1 mb-1">
            <div className="period-label">2</div>
            {renderElement(getElement(1, 2), "2-1")}
            {renderElement(getElement(2, 2), "2-2")}
            {Array.from({ length: 10 }).map((_, i) => renderEmptyCell(`empty-2-${i+3}`))}
            {Array.from({ length: 6 }).map((_, i) => renderElement(getElement(i+13, 2), `2-${i+13}`))}
          </div>

          {/* Period 3 */}
          <div className="grid grid-cols-18 gap-1 mb-1">
            <div className="period-label">3</div>
            {renderElement(getElement(1, 3), "3-1")}
            {renderElement(getElement(2, 3), "3-2")}
            {Array.from({ length: 10 }).map((_, i) => renderEmptyCell(`empty-3-${i+3}`))}
            {Array.from({ length: 6 }).map((_, i) => renderElement(getElement(i+13, 3), `3-${i+13}`))}
          </div>

          {/* Period 4 */}
          <div className="grid grid-cols-18 gap-1 mb-1">
            <div className="period-label">4</div>
            {Array.from({ length: 18 }).map((_, i) => renderElement(getElement(i+1, 4), `4-${i+1}`))}
          </div>

          {/* Period 5 */}
          <div className="grid grid-cols-18 gap-1 mb-1">
            <div className="period-label">5</div>
            {Array.from({ length: 18 }).map((_, i) => renderElement(getElement(i+1, 5), `5-${i+1}`))}
          </div>

          {/* Period 6 */}
          <div className="grid grid-cols-18 gap-1 mb-1">
            <div className="period-label">6</div>
            {renderElement(getElement(1, 6), "6-1")}
            {renderElement(getElement(2, 6), "6-2")}
            <div className="lanthanide-marker">*</div>
            {Array.from({ length: 15 }).map((_, i) => renderElement(getElement(i+4, 6), `6-${i+4}`))}
          </div>

          {/* Period 7 */}
          <div className="grid grid-cols-18 gap-1 mb-4">
            <div className="period-label">7</div>
            {renderElement(getElement(1, 7), "7-1")}
            {renderElement(getElement(2, 7), "7-2")}
            <div className="actinide-marker">**</div>
            {Array.from({ length: 15 }).map((_, i) => renderElement(getElement(i+4, 7), `7-${i+4}`))}
          </div>

          {/* Lanthanides */}
          <div className="grid grid-cols-18 gap-1 mb-1">
            <div className="period-label lanthanide-label">*</div>
            {renderEmptyCell("la-empty-1")}
            {renderEmptyCell("la-empty-2")}
            {Array.from({ length: 15 }).map((_, i) => renderElement(getLanthActElement(i+57), `la-${i+57}`))}
          </div>

          {/* Actinides */}
          <div className="grid grid-cols-18 gap-1 mb-6">
            <div className="period-label actinide-label">**</div>
            {renderEmptyCell("ac-empty-1")}
            {renderEmptyCell("ac-empty-2")}
            {Array.from({ length: 15 }).map((_, i) => renderElement(getLanthActElement(i+89), `ac-${i+89}`))}
          </div>

          {/* Legend */}
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 legend">
            <div className="legend-item">
              <div className="legend-color bg-red-200 border-red-400"></div>
              <span>Alkali Metals</span>
            </div>
            <div className="legend-item">
              <div className="legend-color bg-orange-200 border-orange-400"></div>
              <span>Alkaline Earth Metals</span>
            </div>
            <div className="legend-item">
              <div className="legend-color bg-yellow-200 border-yellow-400"></div>
              <span>Transition Metals</span>
            </div>
            <div className="legend-item">
              <div className="legend-color bg-lime-200 border-lime-400"></div>
              <span>Post-transition Metals</span>
            </div>
            <div className="legend-item">
              <div className="legend-color bg-green-200 border-green-400"></div>
              <span>Metalloids</span>
            </div>
            <div className="legend-item">
              <div className="legend-color bg-teal-200 border-teal-400"></div>
              <span>Nonmetals</span>
            </div>
            <div className="legend-item">
              <div className="legend-color bg-cyan-200 border-cyan-400"></div>
              <span>Halogens</span>
            </div>
            <div className="legend-item">
              <div className="legend-color bg-purple-200 border-purple-400"></div>
              <span>Noble Gases</span>
            </div>
            <div className="legend-item">
              <div className="legend-color bg-pink-200 border-pink-400"></div>
              <span>Lanthanides</span>
            </div>
            <div className="legend-item">
              <div className="legend-color bg-fuchsia-200 border-fuchsia-400"></div>
              <span>Actinides</span>
            </div>
          </div>
        </div>
      </ScrollArea>

      <ElementDetailsDialog
        element={selectedElementForDetails}
        open={!!selectedElementForDetails}
        onOpenChange={(open) => !open && setSelectedElementForDetails(null)}
      />

      <style>
        {`
        .periodic-table-container {
          font-size: 0.75rem;
        }
        .periodic-table {
          --cell-size: 3.2rem;
        }
        .element-container {
          width: var(--cell-size);
          height: var(--cell-size);
        }
        .empty-cell {
          width: var(--cell-size);
          height: var(--cell-size);
        }
        .period-label, .group-label {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 1.5rem;
          height: var(--cell-size);
          font-weight: bold;
          color: white;
        }
        .lanthanide-marker, .actinide-marker {
          display: flex;
          align-items: center;
          justify-content: center;
          width: var(--cell-size);
          height: var(--cell-size);
          font-weight: bold;
          color: white;
        }
        .lanthanide-label, .actinide-label {
          color: #FEC6A1;
        }
        .legend {
          color: white;
        }
        .legend-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.75rem;
        }
        .legend-color {
          width: 1.5rem;
          height: 1.5rem;
          border-radius: 0.25rem;
          border-width: 1px;
        }
        `}
      </style>
    </div>
  );
};

export default PeriodicTable;

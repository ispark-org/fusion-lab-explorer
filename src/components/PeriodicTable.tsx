
import React, { useState } from 'react';
import { Element, categoryColors } from '@/data/elements';
import ElementCard from './ElementCard';
import ElementDetailsDialog from './ElementDetailsDialog';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

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

  const renderElementInPosition = (positions: [number, number], size = 1) => {
    const [row, col] = positions;
    const element = elements.find(e => 
      (e.period === row && e.group === col) || 
      // Special case for Lanthanides (57-71) and Actinides (89-103)
      (row === 8 && e.number >= 57 && e.number <= 71 && (e.number - 57 + 3) === col) ||
      (row === 9 && e.number >= 89 && e.number <= 103 && (e.number - 89 + 3) === col)
    );

    if (!element) {
      return <div className={`empty-cell ${size > 1 ? `col-span-${size}` : ''}`} />;
    }

    return (
      <div className={`element-container ${size > 1 ? `col-span-${size}` : ''}`}>
        <ElementCard
          element={element}
          isSelected={isElementSelected(element)}
          onClick={() => onElementSelect(element)}
          onShowDetails={() => setSelectedElementForDetails(element)}
        />
      </div>
    );
  };

  // Helper to create a range of cells
  const renderElementRange = (period: number, startGroup: number, endGroup: number) => {
    return Array.from({ length: endGroup - startGroup + 1 }).map((_, index) => {
      const group = startGroup + index;
      return renderElementInPosition([period, group]);
    });
  };

  // Helper for empty cells
  const renderEmptyCells = (count: number) => {
    return Array.from({ length: count }).map((_, index) => (
      <div key={`empty-${index}`} className="empty-cell" />
    ));
  };

  return (
    <div className="periodic-table-container w-full overflow-auto p-2">
      <div className="periodic-table inline-block">
        {/* Group numbers row */}
        <div className="grid grid-cols-18 gap-1 mb-2">
          <div className="label-cell" />
          {Array.from({ length: 18 }).map((_, i) => (
            <div key={`group-${i+1}`} className="group-label">{i+1}</div>
          ))}
        </div>

        {/* Period 1 */}
        <div className="grid grid-cols-18 gap-1">
          <div className="period-label">1</div>
          {renderElementInPosition([1, 1])}
          {renderEmptyCells(16)}
          {renderElementInPosition([1, 18])}
        </div>

        {/* Period 2 */}
        <div className="grid grid-cols-18 gap-1">
          <div className="period-label">2</div>
          {renderElementInPosition([2, 1])}
          {renderElementInPosition([2, 2])}
          {renderEmptyCells(10)}
          {renderElementRange(2, 13, 18)}
        </div>

        {/* Period 3 */}
        <div className="grid grid-cols-18 gap-1">
          <div className="period-label">3</div>
          {renderElementInPosition([3, 1])}
          {renderElementInPosition([3, 2])}
          {renderEmptyCells(10)}
          {renderElementRange(3, 13, 18)}
        </div>

        {/* Period 4 */}
        <div className="grid grid-cols-18 gap-1">
          <div className="period-label">4</div>
          {renderElementRange(4, 1, 18)}
        </div>

        {/* Period 5 */}
        <div className="grid grid-cols-18 gap-1">
          <div className="period-label">5</div>
          {renderElementRange(5, 1, 18)}
        </div>

        {/* Period 6 */}
        <div className="grid grid-cols-18 gap-1">
          <div className="period-label">6</div>
          {renderElementInPosition([6, 1])}
          {renderElementInPosition([6, 2])}
          {/* La marker */}
          <div className="lanthanide-marker">*</div>
          {renderElementRange(6, 4, 18)}
        </div>

        {/* Period 7 */}
        <div className="grid grid-cols-18 gap-1">
          <div className="period-label">7</div>
          {renderElementInPosition([7, 1])}
          {renderElementInPosition([7, 2])}
          {/* Ac marker */}
          <div className="actinide-marker">**</div>
          {renderElementRange(7, 4, 18)}
        </div>

        {/* Spacer row */}
        <div className="h-4"></div>

        {/* Lanthanides Row (Period 8 for our model) */}
        <div className="grid grid-cols-18 gap-1">
          <div className="period-label lanthanide-label">*</div>
          {renderEmptyCells(2)}
          {/* Start at column 3 */}
          {Array.from({ length: 15 }).map((_, index) => 
            renderElementInPosition([8, index + 3])
          )}
        </div>

        {/* Actinides Row (Period 9 for our model) */}
        <div className="grid grid-cols-18 gap-1">
          <div className="period-label actinide-label">**</div>
          {renderEmptyCells(2)}
          {/* Start at column 3 */}
          {Array.from({ length: 15 }).map((_, index) => 
            renderElementInPosition([9, index + 3])
          )}
        </div>

        {/* Legend */}
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 legend">
          <div className="legend-item">
            <div className="legend-color bg-red-100 border-red-300"></div>
            <span>Alkali Metals</span>
          </div>
          <div className="legend-item">
            <div className="legend-color bg-orange-100 border-orange-300"></div>
            <span>Alkaline Earth Metals</span>
          </div>
          <div className="legend-item">
            <div className="legend-color bg-yellow-100 border-yellow-300"></div>
            <span>Transition Metals</span>
          </div>
          <div className="legend-item">
            <div className="legend-color bg-lime-100 border-lime-300"></div>
            <span>Post-transition Metals</span>
          </div>
          <div className="legend-item">
            <div className="legend-color bg-green-100 border-green-300"></div>
            <span>Metalloids</span>
          </div>
          <div className="legend-item">
            <div className="legend-color bg-teal-100 border-teal-300"></div>
            <span>Nonmetals</span>
          </div>
          <div className="legend-item">
            <div className="legend-color bg-cyan-100 border-cyan-300"></div>
            <span>Halogens</span>
          </div>
          <div className="legend-item">
            <div className="legend-color bg-purple-100 border-purple-300"></div>
            <span>Noble Gases</span>
          </div>
          <div className="legend-item">
            <div className="legend-color bg-pink-100 border-pink-300"></div>
            <span>Lanthanides</span>
          </div>
          <div className="legend-item">
            <div className="legend-color bg-fuchsia-100 border-fuchsia-300"></div>
            <span>Actinides</span>
          </div>
        </div>
      </div>

      {/* Element Details Dialog */}
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
          --cell-size: 3.5rem;
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

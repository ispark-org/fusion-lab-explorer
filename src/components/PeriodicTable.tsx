
import React, { useState } from 'react';
import { Element, categoryColors } from '@/data/elements';
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

  const renderElementInPosition = (positions: [number, number], size = 1) => {
    const [row, col] = positions;
    const element = elements.find(e => 
      (e.period === row && e.group === col) || 
      (row === 8 && e.number >= 57 && e.number <= 71 && (e.number - 57 + 3) === col) ||
      (row === 9 && e.number >= 89 && e.number <= 103 && (e.number - 89 + 3) === col)
    );

    if (!element) {
      return <div key={`empty-${row}-${col}`} className={`empty-cell ${size > 1 ? `col-span-${size}` : ''}`} />;
    }

    const getCategoryColor = (category: string) => {
      switch (category) {
        case 'alkali-metal': return 'bg-red-200 hover:bg-red-300 border-red-400';
        case 'alkaline-earth-metal': return 'bg-orange-200 hover:bg-orange-300 border-orange-400';
        case 'transition-metal': return 'bg-yellow-200 hover:bg-yellow-300 border-yellow-400';
        case 'post-transition-metal': return 'bg-lime-200 hover:bg-lime-300 border-lime-400';
        case 'metalloid': return 'bg-green-200 hover:bg-green-300 border-green-400';
        case 'nonmetal': return 'bg-teal-200 hover:bg-teal-300 border-teal-400';
        case 'halogen': return 'bg-cyan-200 hover:bg-cyan-300 border-cyan-400';
        case 'noble-gas': return 'bg-purple-200 hover:bg-purple-300 border-purple-400';
        case 'lanthanoid': return 'bg-pink-200 hover:bg-pink-300 border-pink-400';
        case 'actinoid': return 'bg-fuchsia-200 hover:bg-fuchsia-300 border-fuchsia-400';
        default: return 'bg-gray-200 hover:bg-gray-300 border-gray-400';
      }
    };

    return (
      <div key={`element-${element.number}`} className={`element-container ${size > 1 ? `col-span-${size}` : ''}`}>
        <ElementCard
          element={element}
          isSelected={isElementSelected(element)}
          onClick={() => onElementSelect(element)}
          onShowDetails={() => setSelectedElementForDetails(element)}
          className={getCategoryColor(element.category)}
        />
      </div>
    );
  };

  const renderElementRange = (period: number, startGroup: number, endGroup: number) => {
    return Array.from({ length: endGroup - startGroup + 1 }).map((_, index) => {
      const group = startGroup + index;
      return renderElementInPosition([period, group]);
    });
  };

  const renderEmptyCells = (count: number) => {
    return Array.from({ length: count }).map((_, index) => (
      <div key={`empty-placeholder-${index}`} className="empty-cell" />
    ));
  };

  return (
    <div className="periodic-table-container w-full overflow-auto p-2">
      <div className="periodic-table inline-block">
        <div className="grid grid-cols-18 gap-1 mb-2">
          <div className="label-cell" />
          {Array.from({ length: 18 }).map((_, i) => (
            <div key={`group-${i+1}`} className="group-label">{i+1}</div>
          ))}
        </div>

        <div className="grid grid-cols-18 gap-1">
          <div className="period-label">1</div>
          {renderElementInPosition([1, 1])}
          {renderEmptyCells(16)}
          {renderElementInPosition([1, 18])}
        </div>

        <div className="grid grid-cols-18 gap-1">
          <div className="period-label">2</div>
          {renderElementInPosition([2, 1])}
          {renderElementInPosition([2, 2])}
          {renderEmptyCells(10)}
          {renderElementRange(2, 13, 18)}
        </div>

        <div className="grid grid-cols-18 gap-1">
          <div className="period-label">3</div>
          {renderElementInPosition([3, 1])}
          {renderElementInPosition([3, 2])}
          {renderEmptyCells(10)}
          {renderElementRange(3, 13, 18)}
        </div>

        <div className="grid grid-cols-18 gap-1">
          <div className="period-label">4</div>
          {renderElementRange(4, 1, 18)}
        </div>

        <div className="grid grid-cols-18 gap-1">
          <div className="period-label">5</div>
          {renderElementRange(5, 1, 18)}
        </div>

        <div className="grid grid-cols-18 gap-1">
          <div className="period-label">6</div>
          {renderElementInPosition([6, 1])}
          {renderElementInPosition([6, 2])}
          <div className="lanthanide-marker">*</div>
          {renderElementRange(6, 4, 18)}
        </div>

        <div className="grid grid-cols-18 gap-1">
          <div className="period-label">7</div>
          {renderElementInPosition([7, 1])}
          {renderElementInPosition([7, 2])}
          <div className="actinide-marker">**</div>
          {renderElementRange(7, 4, 18)}
        </div>

        <div className="h-4"></div>

        <div className="grid grid-cols-18 gap-1">
          <div className="period-label lanthanide-label">*</div>
          {renderEmptyCells(2)}
          {Array.from({ length: 15 }).map((_, index) => 
            renderElementInPosition([8, index + 3])
          )}
        </div>

        <div className="grid grid-cols-18 gap-1">
          <div className="period-label actinide-label">**</div>
          {renderEmptyCells(2)}
          {Array.from({ length: 15 }).map((_, index) => 
            renderElementInPosition([9, index + 3])
          )}
        </div>

        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 legend">
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

      <ElementDetailsDialog
        element={selectedElementForDetails}
        open={!!selectedElementForDetails}
        onOpenChange={(open) => !open && setSelectedElementForDetails(null)}
      />

      <style jsx>{`
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
      `}</style>
    </div>
  );
};

export default PeriodicTable;

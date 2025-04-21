
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import PeriodicTable from '@/components/PeriodicTable';
import ElementCard from '@/components/ElementCard';
import { Button } from '@/components/ui/button';
import { elements, Element } from '@/data/elements';
import { toast } from '@/components/ui/use-toast';
import { ScrollArea } from '@/components/ui/scroll-area';

const MixElements = () => {
  const [selectedElements, setSelectedElements] = useState<Element[]>([]);
  const navigate = useNavigate();

  const handleElementSelect = (element: Element) => {
    if (selectedElements.some(el => el.number === element.number)) {
      // If already selected, remove it
      setSelectedElements(prev => prev.filter(el => el.number !== element.number));
    } else {
      // If not selected and we have less than 3 elements, add it
      if (selectedElements.length < 3) {
        setSelectedElements(prev => [...prev, element]);
      } else {
        toast({
          title: "Maximum elements reached",
          description: "You can only select up to 3 elements at a time.",
          variant: "destructive",
        });
      }
    }
  };

  const handleProceedToReaction = () => {
    if (selectedElements.length < 2) {
      toast({
        title: "More elements needed",
        description: "Select at least 2 elements to create a reaction.",
        variant: "destructive",
      });
      return;
    }

    // Store selected elements in local storage to use in the reaction page
    localStorage.setItem('selectedElements', JSON.stringify(selectedElements));
    navigate('/watch-reaction');
  };

  return (
    <Layout title="Mix Elements" showBackButton>
      <div className="flex flex-col h-full">
        <div className="mb-4 p-4 bg-white/10 rounded-lg">
          <h2 className="text-lg font-bold mb-2 text-white">Selected Elements</h2>
          <div className="flex flex-wrap gap-2">
            {selectedElements.length === 0 ? (
              <p className="text-white/70">Select elements from the periodic table below</p>
            ) : (
              selectedElements.map(element => (
                <ElementCard 
                  key={element.number} 
                  element={element} 
                  isSelected 
                  onClick={() => handleElementSelect(element)}
                  className="w-20 h-20"
                />
              ))
            )}
          </div>
        </div>

        <div className="flex-grow overflow-hidden bg-white/10 rounded-lg p-4">
          <h2 className="text-lg font-bold mb-4 text-white">Periodic Table</h2>
          <PeriodicTable 
            elements={elements} 
            selectedElements={selectedElements}
            onElementSelect={handleElementSelect}
          />
        </div>

        <div className="mt-4 flex justify-center">
          <Button 
            onClick={handleProceedToReaction}
            className="bg-accent text-accent-foreground hover:bg-accent/80"
            size="lg"
          >
            Proceed to Reaction
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default MixElements;

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import Beaker from '@/components/Beaker';
import ElementCard from '@/components/ElementCard';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Element } from '@/data/elements';
import { Compound, findCompound } from '@/data/compounds';
import { toast } from '@/components/ui/use-toast';

interface CompoundDetails {
  funFacts?: string[];
  uses?: string[];
}

const WatchReaction = () => {
  const [selectedElements, setSelectedElements] = useState<Element[]>([]);
  const [isReacting, setIsReacting] = useState(false);
  const [resultCompound, setResultCompound] = useState<Compound | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedElements = localStorage.getItem('selectedElements');
    if (storedElements) {
      setSelectedElements(JSON.parse(storedElements));
    } else {
      navigate('/mix-elements');
    }
  }, [navigate]);

  const startReaction = () => {
    setIsReacting(true);
    
    const compound = findCompound(selectedElements);
    
    setTimeout(() => {
      setResultCompound(compound);
      
      if (compound) {
        const discoveries = JSON.parse(localStorage.getItem('discoveries') || '[]');
        if (!discoveries.some((d: Compound) => d.formula === compound.formula)) {
          discoveries.push(compound);
          localStorage.setItem('discoveries', JSON.stringify(discoveries));
          
          toast({
            title: "New Discovery!",
            description: `You've discovered ${compound.name} (${compound.formula})`,
          });
        }
      }
    }, 2000);
  };

  const resetReaction = () => {
    setIsReacting(false);
    setResultCompound(null);
  };

  const goToMixElements = () => {
    navigate('/mix-elements');
  };

  const goToJournal = () => {
    navigate('/discovery-journal');
  };

  return (
    <Layout title="Watch Reaction" showBackButton>
      <div className="flex flex-col items-center h-full">
        <div className="mb-6 flex justify-center flex-wrap gap-4">
          {selectedElements.map(element => (
            <ElementCard 
              key={element.number} 
              element={element}
              className="w-20 h-20"
            />
          ))}
        </div>

        <div className="relative mb-8">
          <Beaker 
            isReacting={isReacting}
            reactionType={resultCompound?.visual}
            color={resultCompound?.color || 'bg-blue-200'}
          />
        </div>

        {resultCompound ? (
          <Card className="p-4 max-w-md w-full bg-white/20 text-white border-none mb-6">
            <h2 className="text-xl font-bold mb-2">{resultCompound.name} ({resultCompound.formula})</h2>
            <p className="text-sm mb-4">{resultCompound.description}</p>
            
            {resultCompound.funFacts && (
              <div className="mt-4">
                <h3 className="text-lg font-semibold mb-2">Fun Facts</h3>
                <ul className="list-disc list-inside space-y-1">
                  {resultCompound.funFacts.map((fact, index) => (
                    <li key={index} className="text-sm">{fact}</li>
                  ))}
                </ul>
              </div>
            )}
            
            {resultCompound.uses && (
              <div className="mt-4">
                <h3 className="text-lg font-semibold mb-2">Real-life Uses</h3>
                <ul className="list-disc list-inside space-y-1">
                  {resultCompound.uses.map((use, index) => (
                    <li key={index} className="text-sm">{use}</li>
                  ))}
                </ul>
              </div>
            )}
          </Card>
        ) : isReacting ? (
          <Card className="p-4 max-w-md w-full bg-white/20 text-white border-none mb-6">
            <h2 className="text-xl font-bold mb-2">Reaction in progress...</h2>
            <p className="text-sm">Observing what happens when these elements mix.</p>
          </Card>
        ) : (
          <Card className="p-4 max-w-md w-full bg-white/20 text-white border-none mb-6">
            <h2 className="text-xl font-bold mb-2">Ready to React</h2>
            <p className="text-sm">Press the button to start the reaction and see what happens!</p>
          </Card>
        )}

        <div className="flex gap-4">
          {!isReacting ? (
            <Button 
              onClick={startReaction}
              className="bg-green-500 hover:bg-green-600 text-white"
              size="lg"
            >
              Start Reaction
            </Button>
          ) : !resultCompound ? (
            <Button 
              disabled
              className="bg-yellow-500 text-white opacity-70"
              size="lg"
            >
              Reacting...
            </Button>
          ) : (
            <Button 
              onClick={resetReaction}
              className="bg-blue-500 hover:bg-blue-600 text-white"
              size="lg"
            >
              Reset
            </Button>
          )}
          
          <Button
            onClick={goToMixElements}
            variant="outline"
            className="border-white text-white hover:bg-white/20"
          >
            Try New Elements
          </Button>
          
          {resultCompound && (
            <Button
              onClick={goToJournal}
              variant="outline"
              className="border-white text-white hover:bg-white/20"
            >
              View Journal
            </Button>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default WatchReaction;


import React, { useState, useEffect } from 'react';
import Layout from '@/components/Layout';
import { Card } from '@/components/ui/card';
import { compounds, Compound } from '@/data/compounds';
import { elements } from '@/data/elements';

const DiscoveryJournal = () => {
  const [discoveries, setDiscoveries] = useState<Compound[]>([]);

  useEffect(() => {
    // Load discoveries from local storage
    const storedDiscoveries = localStorage.getItem('discoveries');
    if (storedDiscoveries) {
      setDiscoveries(JSON.parse(storedDiscoveries));
    }
  }, []);

  // Function to get element names for a compound
  const getElementNames = (compound: Compound) => {
    return compound.elements
      .map(num => elements.find(el => el.number === num)?.name)
      .filter(Boolean)
      .join(', ');
  };

  return (
    <Layout title="Discovery Journal" showBackButton>
      <div className="flex flex-col items-center">
        <div className="max-w-3xl w-full">
          <div className="bg-white/10 rounded-lg p-4 mb-6">
            <h2 className="text-xl font-bold text-white mb-2">Your Discoveries</h2>
            <p className="text-white/70 mb-4">
              You've discovered {discoveries.length} out of {compounds.length} compounds.
            </p>
            
            {discoveries.length === 0 && (
              <p className="text-white/80 italic">
                Your journal is empty. Start mixing elements to make discoveries!
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {discoveries.map((compound, index) => (
              <Card key={index} className="p-4 bg-white/20 text-white border-none">
                <h3 className="text-lg font-bold">{compound.name}</h3>
                <div className="text-2xl font-mono my-2">{compound.formula}</div>
                <p className="text-sm mb-2">{compound.description}</p>
                <p className="text-xs text-white/70">Elements: {getElementNames(compound)}</p>
              </Card>
            ))}
            
            {/* Show undiscovered compounds as locked entries */}
            {compounds
              .filter(c => !discoveries.some(d => d.formula === c.formula))
              .map((compound, index) => (
                <Card key={`undiscovered-${index}`} className="p-4 bg-white/10 text-white/40 border-none">
                  <h3 className="text-lg font-bold">???</h3>
                  <div className="text-2xl font-mono my-2">???</div>
                  <p className="text-sm mb-2">This compound hasn't been discovered yet.</p>
                  <p className="text-xs">Mix more elements to uncover this compound!</p>
                </Card>
              ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DiscoveryJournal;

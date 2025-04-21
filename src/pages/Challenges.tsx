
import React, { useState, useEffect } from 'react';
import Layout from '@/components/Layout';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { compounds, Compound } from '@/data/compounds';
import { useNavigate } from 'react-router-dom';

interface Challenge {
  id: number;
  title: string;
  description: string;
  requirement: {
    type: 'discover' | 'use-element';
    count: number;
    elementId?: number;
  };
  reward: string;
  completed: boolean;
}

const Challenges = () => {
  const [challenges, setChallenges] = useState<Challenge[]>([
    {
      id: 1,
      title: "Element Explorer",
      description: "Discover your first 3 compounds",
      requirement: { type: 'discover', count: 3 },
      reward: "Beginner Chemist Badge",
      completed: false
    },
    {
      id: 2, 
      title: "Oxygen Expert",
      description: "Create 3 compounds containing Oxygen",
      requirement: { type: 'use-element', count: 3, elementId: 8 },
      reward: "Oxygen Specialist Badge",
      completed: false
    },
    {
      id: 3,
      title: "Master Chemist",
      description: "Discover all available compounds",
      requirement: { type: 'discover', count: compounds.length },
      reward: "Master Chemist Certificate",
      completed: false
    }
  ]);
  
  const navigate = useNavigate();

  useEffect(() => {
    // Check for completed challenges based on discoveries
    const discoveries: Compound[] = JSON.parse(localStorage.getItem('discoveries') || '[]');
    
    setChallenges(prev => prev.map(challenge => {
      let completed = false;
      
      if (challenge.requirement.type === 'discover') {
        completed = discoveries.length >= challenge.requirement.count;
      } else if (challenge.requirement.type === 'use-element') {
        const compoundsWithElement = discoveries.filter(compound => 
          compound.elements.includes(challenge.requirement.elementId || 0)
        );
        completed = compoundsWithElement.length >= challenge.requirement.count;
      }
      
      return { ...challenge, completed };
    }));
  }, []);

  return (
    <Layout title="Challenges" showBackButton>
      <div className="flex flex-col items-center">
        <div className="max-w-3xl w-full">
          <div className="bg-white/10 rounded-lg p-4 mb-6">
            <h2 className="text-xl font-bold text-white mb-2">Chemistry Challenges</h2>
            <p className="text-white/70">
              Complete these missions to earn rewards and prove your chemistry skills!
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {challenges.map((challenge) => (
              <Card 
                key={challenge.id} 
                className={`p-4 border-none ${
                  challenge.completed 
                    ? 'bg-green-500/20 text-white' 
                    : 'bg-white/20 text-white'
                }`}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-bold">{challenge.title}</h3>
                    <p className="text-sm mb-2">{challenge.description}</p>
                    <p className="text-xs">
                      Reward: <span className="font-semibold">{challenge.reward}</span>
                    </p>
                  </div>
                  <div className="flex flex-col items-end">
                    {challenge.completed ? (
                      <span className="inline-block px-2 py-1 bg-green-500 text-white text-xs rounded-full mb-2">
                        Completed!
                      </span>
                    ) : (
                      <span className="inline-block px-2 py-1 bg-white/20 text-white text-xs rounded-full mb-2">
                        In Progress
                      </span>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="mt-6 flex justify-center">
            <Button 
              onClick={() => navigate('/mix-elements')}
              className="bg-accent text-accent-foreground hover:bg-accent/80"
            >
              Start Mixing Elements
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Challenges;

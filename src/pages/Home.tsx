
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Card } from '@/components/ui/card';

const quotes = [
  "Chemistry is the scientific discipline involved with elements and compounds.",
  "Elements are the simplest forms of matter that cannot be broken down by chemical means.",
  "The periodic table organizes elements by their properties and atomic structure.",
  "Compounds are formed when different elements combine through chemical bonds.",
  "Chemistry allows us to understand the world at a molecular level."
];

const Home = () => {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center h-full text-white">
        <h1 className="text-4xl font-bold mb-2 text-center">Element Fusion Lab</h1>
        <p className="text-xl mb-8 text-center text-white/80">Explore the periodic table and create compounds</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl w-full">
          <Link to="/mix-elements">
            <Card className="menu-card bg-lab-softgreen text-green-800 border-none h-40">
              <div className="text-4xl mb-2">🧪</div>
              <h2 className="text-xl font-bold">Mix Elements</h2>
              <p className="text-sm text-center">Select elements to combine</p>
            </Card>
          </Link>
          
          <Link to="/watch-reaction">
            <Card className="menu-card bg-lab-softyellow text-yellow-800 border-none h-40">
              <div className="text-4xl mb-2">⚗️</div>
              <h2 className="text-xl font-bold">Watch Reaction</h2>
              <p className="text-sm text-center">See elements react in real-time</p>
            </Card>
          </Link>
          
          <Link to="/discovery-journal">
            <Card className="menu-card bg-lab-softorange text-orange-800 border-none h-40">
              <div className="text-4xl mb-2">📓</div>
              <h2 className="text-xl font-bold">Discovery Journal</h2>
              <p className="text-sm text-center">Track your chemical discoveries</p>
            </Card>
          </Link>
          
          <Link to="/challenges">
            <Card className="menu-card bg-lab-softpurple text-purple-800 border-none h-40">
              <div className="text-4xl mb-2">🎯</div>
              <h2 className="text-xl font-bold">Challenges</h2>
              <p className="text-sm text-center">Complete missions to earn rewards</p>
            </Card>
          </Link>
        </div>
        
        <div className="mt-8 p-4 bg-white/20 rounded-lg max-w-md">
          <p className="italic text-sm text-center">"{randomQuote}"</p>
        </div>
      </div>
    </Layout>
  );
};

export default Home;

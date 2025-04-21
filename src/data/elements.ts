
export interface Element {
  number: number;
  symbol: string;
  name: string;
  atomicMass: number;
  category: ElementCategory;
  group: number | null;
  period: number;
}

export type ElementCategory = 
  | 'alkali-metal'
  | 'alkaline-earth-metal'
  | 'transition-metal'
  | 'post-transition-metal'
  | 'metalloid'
  | 'nonmetal'
  | 'halogen'
  | 'noble-gas'
  | 'lanthanoid'
  | 'actinoid';

export const categoryColors: Record<ElementCategory, string> = {
  'alkali-metal': 'bg-red-100 border-red-300',
  'alkaline-earth-metal': 'bg-orange-100 border-orange-300',
  'transition-metal': 'bg-yellow-100 border-yellow-300',
  'post-transition-metal': 'bg-lime-100 border-lime-300',
  'metalloid': 'bg-green-100 border-green-300',
  'nonmetal': 'bg-teal-100 border-teal-300',
  'halogen': 'bg-cyan-100 border-cyan-300',
  'noble-gas': 'bg-purple-100 border-purple-300',
  'lanthanoid': 'bg-pink-100 border-pink-300',
  'actinoid': 'bg-fuchsia-100 border-fuchsia-300',
};

export const elements: Element[] = [
  // First row
  { number: 1, symbol: 'H', name: 'Hydrogen', atomicMass: 1.008, category: 'nonmetal', group: 1, period: 1 },
  { number: 2, symbol: 'He', name: 'Helium', atomicMass: 4.0026, category: 'noble-gas', group: 18, period: 1 },
  
  // Second row
  { number: 3, symbol: 'Li', name: 'Lithium', atomicMass: 6.94, category: 'alkali-metal', group: 1, period: 2 },
  { number: 4, symbol: 'Be', name: 'Beryllium', atomicMass: 9.0122, category: 'alkaline-earth-metal', group: 2, period: 2 },
  { number: 5, symbol: 'B', name: 'Boron', atomicMass: 10.81, category: 'metalloid', group: 13, period: 2 },
  { number: 6, symbol: 'C', name: 'Carbon', atomicMass: 12.011, category: 'nonmetal', group: 14, period: 2 },
  { number: 7, symbol: 'N', name: 'Nitrogen', atomicMass: 14.007, category: 'nonmetal', group: 15, period: 2 },
  { number: 8, symbol: 'O', name: 'Oxygen', atomicMass: 15.999, category: 'nonmetal', group: 16, period: 2 },
  { number: 9, symbol: 'F', name: 'Fluorine', atomicMass: 18.998, category: 'halogen', group: 17, period: 2 },
  { number: 10, symbol: 'Ne', name: 'Neon', atomicMass: 20.180, category: 'noble-gas', group: 18, period: 2 },
  
  // First 20 elements for now
  { number: 11, symbol: 'Na', name: 'Sodium', atomicMass: 22.990, category: 'alkali-metal', group: 1, period: 3 },
  { number: 12, symbol: 'Mg', name: 'Magnesium', atomicMass: 24.305, category: 'alkaline-earth-metal', group: 2, period: 3 },
  { number: 13, symbol: 'Al', name: 'Aluminum', atomicMass: 26.982, category: 'post-transition-metal', group: 13, period: 3 },
  { number: 14, symbol: 'Si', name: 'Silicon', atomicMass: 28.085, category: 'metalloid', group: 14, period: 3 },
  { number: 15, symbol: 'P', name: 'Phosphorus', atomicMass: 30.974, category: 'nonmetal', group: 15, period: 3 },
  { number: 16, symbol: 'S', name: 'Sulfur', atomicMass: 32.06, category: 'nonmetal', group: 16, period: 3 },
  { number: 17, symbol: 'Cl', name: 'Chlorine', atomicMass: 35.45, category: 'halogen', group: 17, period: 3 },
  { number: 18, symbol: 'Ar', name: 'Argon', atomicMass: 39.95, category: 'noble-gas', group: 18, period: 3 },
  { number: 19, symbol: 'K', name: 'Potassium', atomicMass: 39.098, category: 'alkali-metal', group: 1, period: 4 },
  { number: 20, symbol: 'Ca', name: 'Calcium', atomicMass: 40.078, category: 'alkaline-earth-metal', group: 2, period: 4 },
  
  // The rest of the elements would go here - simplified for the first version
];

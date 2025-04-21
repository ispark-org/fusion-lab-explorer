
import { Element } from './elements';

export interface Compound {
  elements: number[];
  name: string;
  formula: string;
  description: string;
  visual: 'color-change' | 'fizz' | 'glow' | 'none';
  color?: string;
}

export const compounds: Compound[] = [
  {
    elements: [1, 8], // Hydrogen + Oxygen
    name: 'Water',
    formula: 'H₂O',
    description: 'Essential for life, water covers 71% of Earth\'s surface and is found in our bodies, food, and environment.',
    visual: 'color-change',
    color: 'bg-blue-200'
  },
  {
    elements: [11, 17], // Sodium + Chlorine
    name: 'Table Salt',
    formula: 'NaCl',
    description: 'Common table salt is used for seasoning food and was historically valuable for food preservation.',
    visual: 'color-change',
    color: 'bg-white'
  },
  {
    elements: [6, 8], // Carbon + Oxygen
    name: 'Carbon Dioxide',
    formula: 'CO₂',
    description: 'A gas exhaled by humans and animals, used by plants in photosynthesis and in carbonated drinks.',
    visual: 'fizz',
  },
  {
    elements: [1, 17], // Hydrogen + Chlorine
    name: 'Hydrogen Chloride',
    formula: 'HCl',
    description: 'In water, it forms hydrochloric acid, which is found in your stomach and used in industry.',
    visual: 'fizz',
  },
  {
    elements: [20, 8], // Calcium + Oxygen
    name: 'Calcium Oxide',
    formula: 'CaO',
    description: 'Also known as quicklime, used in cement, steel manufacturing, and water treatment.',
    visual: 'glow',
  },
  {
    elements: [13, 8], // Aluminum + Oxygen
    name: 'Aluminum Oxide',
    formula: 'Al₂O₃',
    description: 'Found in nature as corundum and used in sandpaper, ceramics, and as gemstones (rubies and sapphires).',
    visual: 'color-change',
    color: 'bg-red-200'
  },
  {
    elements: [1, 7], // Hydrogen + Nitrogen
    name: 'Ammonia',
    formula: 'NH₃',
    description: 'Used in cleaning products and fertilizers, ammonia has a strong, distinctive smell.',
    visual: 'color-change',
    color: 'bg-blue-100'
  },
  {
    elements: [6, 1], // Carbon + Hydrogen
    name: 'Methane',
    formula: 'CH₄',
    description: 'The simplest hydrocarbon and main component of natural gas used for heating and cooking.',
    visual: 'none',
  },
  {
    elements: [16, 8], // Sulfur + Oxygen
    name: 'Sulfur Dioxide',
    formula: 'SO₂',
    description: 'A gas with a strong smell, released by volcanoes and industrial processes.',
    visual: 'color-change',
    color: 'bg-yellow-200'
  },
  {
    elements: [7, 8], // Nitrogen + Oxygen
    name: 'Nitrogen Dioxide',
    formula: 'NO₂',
    description: 'A reddish-brown toxic gas that contributes to air pollution and smog.',
    visual: 'color-change',
    color: 'bg-red-300'
  }
];

export const findCompound = (selectedElements: Element[]): Compound | null => {
  if (selectedElements.length < 2) return null;
  
  const elementNumbers = selectedElements.map(el => el.number).sort((a, b) => a - b);
  
  return compounds.find(compound => 
    compound.elements.length === elementNumbers.length && 
    compound.elements.every((el, i) => el === elementNumbers[i])
  ) || null;
};

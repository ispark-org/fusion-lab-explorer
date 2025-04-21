import { Element } from './elements';

export interface Compound {
  elements: number[];
  name: string;
  formula: string;
  description: string;
  visual: 'color-change' | 'fizz' | 'glow' | 'none';
  color?: string;
  funFacts?: string[];
  uses?: string[];
}

export const compounds: Compound[] = [
  {
    elements: [1, 8],
    name: 'Water',
    formula: 'H₂O',
    description: 'Essential for life, water covers 71% of Earth\'s surface and is found in our bodies, food, and environment.',
    visual: 'color-change',
    color: 'bg-blue-200',
    funFacts: [
      "Water is the only natural substance found in all three states: liquid, solid (ice), and gas (steam).",
      "Hot water freezes faster than cold water in certain conditions (Mpemba effect).",
      "97% of Earth's water is in the oceans."
    ],
    uses: [
      "Drinking and cooking",
      "Agriculture and irrigation",
      "Industrial processes and cooling",
      "Cleaning and sanitation"
    ]
  },
  {
    elements: [11, 17],
    name: 'Table Salt',
    formula: 'NaCl',
    description: 'Common table salt is used for seasoning food and was historically valuable for food preservation.',
    visual: 'color-change',
    color: 'bg-white',
    funFacts: [
      "Table salt is composed of sodium and chlorine atoms.",
      "The average person consumes about 3.5 grams of salt per day.",
      "Salt is used in various industries, including food processing, manufacturing, and construction."
    ],
    uses: [
      "Seasoning food",
      "Food preservation",
      "Industrial processes",
      "Cooking and baking"
    ]
  },
  {
    elements: [6, 8],
    name: 'Carbon Dioxide',
    formula: 'CO₂',
    description: 'A gas exhaled by humans and animals, used by plants in photosynthesis and in carbonated drinks.',
    visual: 'fizz',
    funFacts: [
      "Carbon dioxide is a greenhouse gas that contributes to global warming.",
      "It is the primary gas that causes the greenhouse effect.",
      "Carbon dioxide is also used in the production of carbonated beverages."
    ],
    uses: [
      "Photosynthesis",
      "Carbonated drinks",
      "Industrial processes",
      "Climate change mitigation"
    ]
  },
  {
    elements: [1, 17],
    name: 'Hydrogen Chloride',
    formula: 'HCl',
    description: 'In water, it forms hydrochloric acid, which is found in your stomach and used in industry.',
    visual: 'fizz',
    funFacts: [
      "Hydrogen chloride is a strong acid.",
      "It is used in the production of various chemicals and materials.",
      "It is also used in the production of fertilizers and pesticides."
    ],
    uses: [
      "Stomach acid",
      "Industrial processes",
      "Chemical production",
      "Fertilizers and pesticides"
    ]
  },
  {
    elements: [20, 8],
    name: 'Calcium Oxide',
    formula: 'CaO',
    description: 'Also known as quicklime, used in cement, steel manufacturing, and water treatment.',
    visual: 'glow',
    funFacts: [
      "Calcium oxide is a basic oxide.",
      "It is used in the production of cement and steel.",
      "It is also used in water treatment to remove impurities."
    ],
    uses: [
      "Cement",
      "Steel manufacturing",
      "Water treatment",
      "Industrial processes"
    ]
  },
  {
    elements: [13, 8],
    name: 'Aluminum Oxide',
    formula: 'Al₂O₃',
    description: 'Found in nature as corundum and used in sandpaper, ceramics, and as gemstones (rubies and sapphires).',
    visual: 'color-change',
    color: 'bg-red-200',
    funFacts: [
      "Aluminum oxide is a hard, brittle material.",
      "It is used in the production of sandpaper and ceramics.",
      "It is also used in the production of gemstones."
    ],
    uses: [
      "Sandpaper",
      "Ceramics",
      "Gemstones",
      "Industrial processes"
    ]
  },
  {
    elements: [1, 7],
    name: 'Ammonia',
    formula: 'NH₃',
    description: 'Used in cleaning products and fertilizers, ammonia has a strong, distinctive smell.',
    visual: 'color-change',
    color: 'bg-blue-100',
    funFacts: [
      "Ammonia is a colorless gas with a strong, pungent odor.",
      "It is used in cleaning products and disinfectants.",
      "It is also used in the production of fertilizers."
    ],
    uses: [
      "Cleaning products",
      "Disinfectants",
      "Fertilizers",
      "Industrial processes"
    ]
  },
  {
    elements: [6, 1],
    name: 'Methane',
    formula: 'CH₄',
    description: 'The simplest hydrocarbon and main component of natural gas used for heating and cooking.',
    visual: 'none',
    funFacts: [
      "Methane is a colorless, odorless gas.",
      "It is the main component of natural gas.",
      "It is used in heating and cooking."
    ],
    uses: [
      "Heating",
      "Cooking",
      "Industrial processes",
      "Energy production"
    ]
  },
  {
    elements: [16, 8],
    name: 'Sulfur Dioxide',
    formula: 'SO₂',
    description: 'A gas with a strong smell, released by volcanoes and industrial processes.',
    visual: 'color-change',
    color: 'bg-yellow-200',
    funFacts: [
      "Sulfur dioxide is a colorless gas with a strong, pungent odor.",
      "It is released by volcanoes and industrial processes.",
      "It is used in the production of sulfuric acid."
    ],
    uses: [
      "Volcanoes",
      "Industrial processes",
      "Sulfuric acid production",
      "Environmental pollution"
    ]
  },
  {
    elements: [7, 8],
    name: 'Nitrogen Dioxide',
    formula: 'NO₂',
    description: 'A reddish-brown toxic gas that contributes to air pollution and smog.',
    visual: 'color-change',
    color: 'bg-red-300',
    funFacts: [
      "Nitrogen dioxide is a reddish-brown gas with a strong, pungent odor.",
      "It is a toxic gas that contributes to air pollution and smog.",
      "It is released by industrial processes and vehicle exhaust."
    ],
    uses: [
      "Air pollution",
      "Smog",
      "Industrial processes",
      "Vehicle exhaust"
    ]
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

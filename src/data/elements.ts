
export interface Element {
  number: number;
  symbol: string;
  name: string;
  atomicMass: number;
  category: ElementCategory;
  group: number | null;
  period: number;
  funFacts?: string;
  uses?: string;
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
  { number: 1, symbol: 'H', name: 'Hydrogen', atomicMass: 1.008, category: 'nonmetal', group: 1, period: 1, funFacts: "The lightest and most abundant element in the universe.", uses: "Fuel cells, rocket fuel, and manufacturing chemicals." },
  { number: 2, symbol: 'He', name: 'Helium', atomicMass: 4.0026, category: 'noble-gas', group: 18, period: 1, funFacts: "First discovered on the Sun before Earth.", uses: "Balloons, deep-sea diving tanks, and cooling MRI machines." },
  { number: 3, symbol: 'Li', name: 'Lithium', atomicMass: 6.94, category: 'alkali-metal', group: 1, period: 2, funFacts: "Lightest metal that floats on water.", uses: "Batteries, medications, and aerospace alloys." },
  { number: 4, symbol: 'Be', name: 'Beryllium', atomicMass: 9.0122, category: 'alkaline-earth-metal', group: 2, period: 2, funFacts: "One of the lightest metals with high thermal conductivity.", uses: "Aerospace, nuclear reactors, and X-ray equipment." },
  { number: 5, symbol: 'B', name: 'Boron', atomicMass: 10.81, category: 'metalloid', group: 13, period: 2, funFacts: "Essential for plant growth.", uses: "Fiberglass, detergents, and semiconductors." },
  { number: 6, symbol: 'C', name: 'Carbon', atomicMass: 12.011, category: 'nonmetal', group: 14, period: 2, funFacts: "Forms the basis for all known life.", uses: "Fuels, diamonds, graphite, and countless organic compounds." },
  { number: 7, symbol: 'N', name: 'Nitrogen', atomicMass: 14.007, category: 'nonmetal', group: 15, period: 2, funFacts: "Makes up 78% of Earth's atmosphere.", uses: "Fertilizers, explosives, and refrigeration." },
  { number: 8, symbol: 'O', name: 'Oxygen', atomicMass: 15.999, category: 'nonmetal', group: 16, period: 2, funFacts: "Essential for cellular respiration.", uses: "Medical treatments, combustion, and water purification." },
  { number: 9, symbol: 'F', name: 'Fluorine', atomicMass: 18.998, category: 'halogen', group: 17, period: 2, funFacts: "Most reactive non-metal.", uses: "Toothpaste, refrigerants, and pharmaceuticals." },
  { number: 10, symbol: 'Ne', name: 'Neon', atomicMass: 20.180, category: 'noble-gas', group: 18, period: 2, funFacts: "Produces the familiar red glow in signs.", uses: "Neon signs, cryogenic refrigeration, and lasers." },
  { number: 11, symbol: 'Na', name: 'Sodium', atomicMass: 22.990, category: 'alkali-metal', group: 1, period: 3, funFacts: "Explodes when placed in water.", uses: "Table salt, street lights, and glass production." },
  { number: 12, symbol: 'Mg', name: 'Magnesium', atomicMass: 24.305, category: 'alkaline-earth-metal', group: 2, period: 3, funFacts: "Burns with a bright white light.", uses: "Fireworks, lightweight alloys, and supplements." },
  { number: 13, symbol: 'Al', name: 'Aluminum', atomicMass: 26.982, category: 'post-transition-metal', group: 13, period: 3, funFacts: "Most abundant metal in Earth's crust.", uses: "Aircraft, packaging, and construction materials." },
  { number: 14, symbol: 'Si', name: 'Silicon', atomicMass: 28.085, category: 'metalloid', group: 14, period: 3, funFacts: "Second most abundant element in Earth's crust.", uses: "Computer chips, solar cells, and glass." },
  { number: 15, symbol: 'P', name: 'Phosphorus', atomicMass: 30.974, category: 'nonmetal', group: 15, period: 3, funFacts: "Glows in the dark.", uses: "Fertilizers, matches, and detergents." },
  { number: 16, symbol: 'S', name: 'Sulfur', atomicMass: 32.06, category: 'nonmetal', group: 16, period: 3, funFacts: "Known since ancient times as brimstone.", uses: "Fertilizers, gunpowder, and vulcanizing rubber." },
  { number: 17, symbol: 'Cl', name: 'Chlorine', atomicMass: 35.45, category: 'halogen', group: 17, period: 3, funFacts: "Used as a chemical weapon in WWI.", uses: "Water purification, bleach, and PVC production." },
  { number: 18, symbol: 'Ar', name: 'Argon', atomicMass: 39.95, category: 'noble-gas', group: 18, period: 3, funFacts: "Makes up 1% of Earth's atmosphere.", uses: "Light bulbs, welding, and preserving historical documents." },
  { number: 19, symbol: 'K', name: 'Potassium', atomicMass: 39.098, category: 'alkali-metal', group: 1, period: 4, funFacts: "Essential for nerve function.", uses: "Fertilizers, soaps, and food additives." },
  { number: 20, symbol: 'Ca', name: 'Calcium', atomicMass: 40.078, category: 'alkaline-earth-metal', group: 2, period: 4, funFacts: "Fifth most abundant element in Earth's crust.", uses: "Cement, dairy products, and dietary supplements." },
  { number: 21, symbol: 'Sc', name: 'Scandium', atomicMass: 44.956, category: 'transition-metal', group: 3, period: 4, funFacts: "More common in the sun than on Earth.", uses: "Aerospace alloys, stadium lights, and electronics." },
  { number: 22, symbol: 'Ti', name: 'Titanium', atomicMass: 47.867, category: 'transition-metal', group: 4, period: 4, funFacts: "Strongest natural metal by weight.", uses: "Aerospace, medical implants, and sporting equipment." },
  { number: 23, symbol: 'V', name: 'Vanadium', atomicMass: 50.942, category: 'transition-metal', group: 5, period: 4, funFacts: "Changes color in different oxidation states.", uses: "Steel production, aerospace, and superconducting magnets." },
  { number: 24, symbol: 'Cr', name: 'Chromium', atomicMass: 51.996, category: 'transition-metal', group: 6, period: 4, funFacts: "Gives rubies their red color.", uses: "Stainless steel, chrome plating, and dyes." },
  { number: 25, symbol: 'Mn', name: 'Manganese', atomicMass: 54.938, category: 'transition-metal', group: 7, period: 4, funFacts: "Essential for photosynthesis.", uses: "Steel production, batteries, and dietary supplements." },
  { number: 26, symbol: 'Fe', name: 'Iron', atomicMass: 55.845, category: 'transition-metal', group: 8, period: 4, funFacts: "Most common element on Earth by mass.", uses: "Steel, construction, and transportation." },
  { number: 27, symbol: 'Co', name: 'Cobalt', atomicMass: 58.933, category: 'transition-metal', group: 9, period: 4, funFacts: "Essential for vitamin B12.", uses: "Batteries, magnets, and medical equipment." },
  { number: 28, symbol: 'Ni', name: 'Nickel', atomicMass: 58.693, category: 'transition-metal', group: 10, period: 4, funFacts: "Earth's core is mostly iron and nickel.", uses: "Coins, batteries, and stainless steel." },
  { number: 29, symbol: 'Cu', name: 'Copper', atomicMass: 63.546, category: 'transition-metal', group: 11, period: 4, funFacts: "First metal used by humans (10,000 BCE).", uses: "Electrical wiring, plumbing, and architecture." },
  { number: 30, symbol: 'Zn', name: 'Zinc', atomicMass: 65.38, category: 'transition-metal', group: 12, period: 4, funFacts: "Essential for immune function.", uses: "Galvanizing steel, batteries, and sunscreen." },
  { number: 31, symbol: 'Ga', name: 'Gallium', atomicMass: 69.723, category: 'post-transition-metal', group: 13, period: 4, funFacts: "Melts in your hand at 85.6°F (29.8°C).", uses: "Semiconductors, LEDs, and solar panels." },
  { number: 32, symbol: 'Ge', name: 'Germanium', atomicMass: 72.630, category: 'metalloid', group: 14, period: 4, funFacts: "First element predicted to exist before discovery.", uses: "Fiber optics, electronics, and infrared equipment." },
  { number: 33, symbol: 'As', name: 'Arsenic', atomicMass: 74.922, category: 'metalloid', group: 15, period: 4, funFacts: "Famous as a poison throughout history.", uses: "Semiconductors, wood preservatives, and certain glass products." },
  { number: 34, symbol: 'Se', name: 'Selenium', atomicMass: 78.971, category: 'nonmetal', group: 16, period: 4, funFacts: "Essential nutrient for humans and animals.", uses: "Glass production, photocopiers, and nutritional supplements." },
  { number: 35, symbol: 'Br', name: 'Bromine', atomicMass: 79.904, category: 'halogen', group: 17, period: 4, funFacts: "Only non-metal liquid at room temperature.", uses: "Flame retardants, pesticides, and medications." },
  { number: 36, symbol: 'Kr', name: 'Krypton', atomicMass: 83.798, category: 'noble-gas', group: 18, period: 4, funFacts: "Used to define the meter from 1960-1983.", uses: "High-powered lasers, high-speed photography, and lighting." },
  { number: 37, symbol: 'Rb', name: 'Rubidium', atomicMass: 85.468, category: 'alkali-metal', group: 1, period: 5, funFacts: "Ignites spontaneously in air.", uses: "Atomic clocks, electronics, and vacuum tubes." },
  { number: 38, symbol: 'Sr', name: 'Strontium', atomicMass: 87.62, category: 'alkaline-earth-metal', group: 2, period: 5, funFacts: "Gives fireworks their bright red color.", uses: "Fireworks, glow-in-the-dark products, and medical imaging." },
  { number: 39, symbol: 'Y', name: 'Yttrium', atomicMass: 88.906, category: 'transition-metal', group: 3, period: 5, funFacts: "Named after a village in Sweden.", uses: "LED/LCD displays, lasers, and cancer treatments." },
  { number: 40, symbol: 'Zr', name: 'Zirconium', atomicMass: 91.224, category: 'transition-metal', group: 4, period: 5, funFacts: "Highly resistant to corrosion.", uses: "Nuclear reactors, ceramics, and cubic zirconia." },
  { number: 41, symbol: 'Nb', name: 'Niobium', atomicMass: 92.906, category: 'transition-metal', group: 5, period: 5, funFacts: "Superconducting when cooled.", uses: "Superconducting magnets, stainless steel, and jet engines." },
  { number: 42, symbol: 'Mo', name: 'Molybdenum', atomicMass: 95.95, category: 'transition-metal', group: 6, period: 5, funFacts: "Essential for several enzymes in humans.", uses: "High-strength steel alloys, catalysts, and lubricants." },
  { number: 43, symbol: 'Tc', name: 'Technetium', atomicMass: 98, category: 'transition-metal', group: 7, period: 5, funFacts: "First artificially produced element.", uses: "Medical imaging, nuclear medicine, and superconductors." },
  { number: 44, symbol: 'Ru', name: 'Ruthenium', atomicMass: 101.07, category: 'transition-metal', group: 8, period: 5, funFacts: "Used in the electronics industry.", uses: "Electronics, catalysts, and solar energy." },
  { number: 45, symbol: 'Rh', name: 'Rhodium', atomicMass: 102.91, category: 'transition-metal', group: 9, period: 5, funFacts: "Most expensive precious metal.", uses: "Catalytic converters, jewelry, and reflective coatings." },
  { number: 46, symbol: 'Pd', name: 'Palladium', atomicMass: 106.42, category: 'transition-metal', group: 10, period: 5, funFacts: "Can absorb 900 times its volume in hydrogen.", uses: "Catalytic converters, electronics, and jewelry." },
  { number: 47, symbol: 'Ag', name: 'Silver', atomicMass: 107.87, category: 'transition-metal', group: 11, period: 5, funFacts: "Best electrical and thermal conductor of all metals.", uses: "Jewelry, photography, and electronics." },
  { number: 48, symbol: 'Cd', name: 'Cadmium', atomicMass: 112.41, category: 'transition-metal', group: 12, period: 5, funFacts: "Used in the world's first rechargeable batteries.", uses: "Batteries, pigments, and nuclear reactor control rods." },
  { number: 49, symbol: 'In', name: 'Indium', atomicMass: 114.82, category: 'post-transition-metal', group: 13, period: 5, funFacts: "Makes a 'crying' sound when bent.", uses: "Touch screens, solders, and semiconductors." },
  { number: 50, symbol: 'Sn', name: 'Tin', atomicMass: 118.71, category: 'post-transition-metal', group: 14, period: 5, funFacts: "Known and used since prehistoric times.", uses: "Food packaging, solders, and bronze production." },
  { number: 51, symbol: 'Sb', name: 'Antimony', atomicMass: 121.76, category: 'metalloid', group: 15, period: 5, funFacts: "Used by ancient Egyptians for eye makeup.", uses: "Flame retardants, batteries, and semiconductors." },
  { number: 52, symbol: 'Te', name: 'Tellurium', atomicMass: 127.60, category: 'metalloid', group: 16, period: 5, funFacts: "Gives garlic-like odor to breath if ingested.", uses: "Solar panels, electronics, and metallurgy." },
  { number: 53, symbol: 'I', name: 'Iodine', atomicMass: 126.90, category: 'halogen', group: 17, period: 5, funFacts: "Essential for thyroid hormone production.", uses: "Disinfectants, photography, and nutrition." },
  { number: 54, symbol: 'Xe', name: 'Xenon', atomicMass: 131.29, category: 'noble-gas', group: 18, period: 5, funFacts: "Used in the first ion propulsion system in space.", uses: "Lighting, medical imaging, and spacecraft propulsion." },
  { number: 55, symbol: 'Cs', name: 'Cesium', atomicMass: 132.91, category: 'alkali-metal', group: 1, period: 6, funFacts: "Used in the world's most accurate atomic clocks.", uses: "Atomic clocks, oil drilling, and photoelectric cells." },
  { number: 56, symbol: 'Ba', name: 'Barium', atomicMass: 137.33, category: 'alkaline-earth-metal', group: 2, period: 6, funFacts: "Used in medical imaging of the digestive tract.", uses: "Medical diagnostics, fireworks, and drilling fluids." },
  { number: 57, symbol: 'La', name: 'Lanthanum', atomicMass: 138.91, category: 'lanthanoid', group: 3, period: 6, funFacts: "First element in the lanthanide series.", uses: "Camera lenses, catalytic converters, and hybrid car batteries." },
  { number: 58, symbol: 'Ce', name: 'Cerium', atomicMass: 140.12, category: 'lanthanoid', group: null, period: 6, funFacts: "Most abundant of the rare earth elements.", uses: "Catalytic converters, lighter flints, and polishing powders." },
  { number: 59, symbol: 'Pr', name: 'Praseodymium', atomicMass: 140.91, category: 'lanthanoid', group: null, period: 6, funFacts: "Creates strong magnetic fields when combined with cobalt.", uses: "Aircraft engines, permanent magnets, and specialized glasses." },
  { number: 60, symbol: 'Nd', name: 'Neodymium', atomicMass: 144.24, category: 'lanthanoid', group: null, period: 6, funFacts: "Creates the strongest permanent magnets.", uses: "Hard drives, headphones, and electric motors." },
  { number: 61, symbol: 'Pm', name: 'Promethium', atomicMass: 145, category: 'lanthanoid', group: null, period: 6, funFacts: "Does not occur naturally on Earth.", uses: "Nuclear batteries, watches, and measuring devices." },
  { number: 62, symbol: 'Sm', name: 'Samarium', atomicMass: 150.36, category: 'lanthanoid', group: null, period: 6, funFacts: "Used in cancer treatments.", uses: "Magnets, lasers, and radiation treatment." },
  { number: 63, symbol: 'Eu', name: 'Europium', atomicMass: 151.96, category: 'lanthanoid', group: null, period: 6, funFacts: "Used in anti-counterfeiting marks on Euro banknotes.", uses: "Red and blue phosphors in displays and anti-counterfeiting measures." },
  { number: 64, symbol: 'Gd', name: 'Gadolinium', atomicMass: 157.25, category: 'lanthanoid', group: null, period: 6, funFacts: "Has unusual magnetic and electronic properties.", uses: "MRI contrast agents, nuclear reactors, and memory devices." },
  { number: 65, symbol: 'Tb', name: 'Terbium', atomicMass: 158.93, category: 'lanthanoid', group: null, period: 6, funFacts: "Glows green in certain applications.", uses: "Green phosphors in displays, sonar systems, and data storage." },
  { number: 66, symbol: 'Dy', name: 'Dysprosium', atomicMass: 162.50, category: 'lanthanoid', group: null, period: 6, funFacts: "Name means 'hard to get' in Greek.", uses: "Wind turbines, electric vehicles, and data storage devices." },
  { number: 67, symbol: 'Ho', name: 'Holmium', atomicMass: 164.93, category: 'lanthanoid', group: null, period: 6, funFacts: "Has the strongest magnetic properties of any element.", uses: "Magnetic flux concentrators, nuclear reactors, and lasers." },
  { number: 68, symbol: 'Er', name: 'Erbium', atomicMass: 167.26, category: 'lanthanoid', group: null, period: 6, funFacts: "Gives pink coloration to glass and porcelain.", uses: "Fiber optic communications, lasers, and metallurgy." },
  { number: 69, symbol: 'Tm', name: 'Thulium', atomicMass: 168.93, category: 'lanthanoid', group: null, period: 6, funFacts: "Rarest naturally occurring lanthanide.", uses: "Portable X-ray devices, lasers, and ceramic magnetic materials." },
  { number: 70, symbol: 'Yb', name: 'Ytterbium', atomicMass: 173.05, category: 'lanthanoid', group: null, period: 6, funFacts: "Changes electrical resistance under pressure.", uses: "Fiber optic technology, stainless steel, and lasers." },
  { number: 71, symbol: 'Lu', name: 'Lutetium', atomicMass: 174.97, category: 'lanthanoid', group: null, period: 6, funFacts: "Last element in the lanthanide series.", uses: "Petroleum refining catalysts, LED lighting, and PET scan detectors." },
  { number: 72, symbol: 'Hf', name: 'Hafnium', atomicMass: 178.49, category: 'transition-metal', group: 4, period: 6, funFacts: "Always found with zirconium in nature.", uses: "Nuclear reactor control rods, alloys for rockets, and computer chips." },
  { number: 73, symbol: 'Ta', name: 'Tantalum', atomicMass: 180.95, category: 'transition-metal', group: 5, period: 6, funFacts: "Extremely resistant to corrosion.", uses: "Electronics, surgical implants, and aircraft engines." },
  { number: 74, symbol: 'W', name: 'Tungsten', atomicMass: 183.84, category: 'transition-metal', group: 6, period: 6, funFacts: "Highest melting point of all metals.", uses: "Light bulb filaments, cutting tools, and military applications." },
  { number: 75, symbol: 'Re', name: 'Rhenium', atomicMass: 186.21, category: 'transition-metal', group: 7, period: 6, funFacts: "Last stable element to be discovered.", uses: "Jet engines, catalysts, and electrical contacts." },
  { number: 76, symbol: 'Os', name: 'Osmium', atomicMass: 190.23, category: 'transition-metal', group: 8, period: 6, funFacts: "Densest naturally occurring element.", uses: "Electrical contacts, fountain pen tips, and instrument pivots." },
  { number: 77, symbol: 'Ir', name: 'Iridium', atomicMass: 192.22, category: 'transition-metal', group: 9, period: 6, funFacts: "Second-most dense element after osmium.", uses: "Spark plugs, crucibles, and medical devices." },
  { number: 78, symbol: 'Pt', name: 'Platinum', atomicMass: 195.08, category: 'transition-metal', group: 10, period: 6, funFacts: "Used by pre-Columbian South Americans.", uses: "Catalytic converters, jewelry, and cancer medications." },
  { number: 79, symbol: 'Au', name: 'Gold', atomicMass: 196.97, category: 'transition-metal', group: 11, period: 6, funFacts: "Only metal that is naturally yellow/golden.", uses: "Jewelry, electronics, and currency backing." },
  { number: 80, symbol: 'Hg', name: 'Mercury', atomicMass: 200.59, category: 'transition-metal', group: 12, period: 6, funFacts: "Only metal that's liquid at room temperature.", uses: "Thermometers, dental fillings, and scientific research." },
  { number: 81, symbol: 'Tl', name: 'Thallium', atomicMass: 204.38, category: 'post-transition-metal', group: 13, period: 6, funFacts: "Historically used as a rat poison.", uses: "Electronics, medical imaging, and insecticides." },
  { number: 82, symbol: 'Pb', name: 'Lead', atomicMass: 207.2, category: 'post-transition-metal', group: 14, period: 6, funFacts: "Was used in ancient Roman waterworks.", uses: "Batteries, radiation shields, and construction materials." },
  { number: 83, symbol: 'Bi', name: 'Bismuth', atomicMass: 208.98, category: 'post-transition-metal', group: 15, period: 6, funFacts: "Forms colorful oxide crystals.", uses: "Pharmaceuticals, cosmetics, and low-melting alloys." },
  { number: 84, symbol: 'Po', name: 'Polonium', atomicMass: 209, category: 'post-transition-metal', group: 16, period: 6, funFacts: "Discovered by Marie Curie.", uses: "Thermoelectric power in space satellites, anti-static devices, and research." },
  { number: 85, symbol: 'At', name: 'Astatine', atomicMass: 210, category: 'halogen', group: 17, period: 6, funFacts: "Rarest naturally occurring element on Earth.", uses: "Medical research, particularly cancer therapy." },
  { number: 86, symbol: 'Rn', name: 'Radon', atomicMass: 222, category: 'noble-gas', group: 18, period: 6, funFacts: "Can accumulate in basements of buildings.", uses: "Cancer treatment and scientific research." },
  { number: 87, symbol: 'Fr', name: 'Francium', atomicMass: 223, category: 'alkali-metal', group: 1, period: 7, funFacts: "Most radioactive of all naturally occurring elements.", uses: "Research into atomic structure and cancer treatment." },
  { number: 88, symbol: 'Ra', name: 'Radium', atomicMass: 226, category: 'alkaline-earth-metal', group: 2, period: 7, funFacts: "Used in early glow-in-the-dark products.", uses: "Medical treatments, research, and formerly in luminous paint." },
  { number: 89, symbol: 'Ac', name: 'Actinium', atomicMass: 227, category: 'actinoid', group: 3, period: 7, funFacts: "First element in the actinide series.", uses: "Neutron sources and radiation therapy." },
  { number: 90, symbol: 'Th', name: 'Thorium', atomicMass: 232.04, category: 'actinoid', group: null, period: 7, funFacts: "Potential nuclear fuel for power generation.", uses: "Nuclear fuel, gas mantles, and high-temperature ceramics." },
  { number: 91, symbol: 'Pa', name: 'Protactinium', atomicMass: 231.04, category: 'actinoid', group: null, period: 7, funFacts: "Its discovery completed the natural series of elements.", uses: "Scientific research and potential nuclear applications." },
  { number: 92, symbol: 'U', name: 'Uranium', atomicMass: 238.03, category: 'actinoid', group: null, period: 7, funFacts: "Used to date the age of Earth.", uses: "Nuclear fuel, military applications, and aircraft counterweights." },
  { number: 93, symbol: 'Np', name: 'Neptunium', atomicMass: 237, category: 'actinoid', group: null, period: 7, funFacts: "First synthetic transuranium element.", uses: "Neutron detection instruments and potential nuclear fuel." },
  { number: 94, symbol: 'Pu', name: 'Plutonium', atomicMass: 244, category: 'actinoid', group: null, period: 7, funFacts: "Powers deep space missions like Voyager.", uses: "Nuclear weapons, spacecraft power, and research." },
  { number: 95, symbol: 'Am', name: 'Americium', atomicMass: 243, category: 'actinoid', group: null, period: 7, funFacts: "Used in smoke detectors.", uses: "Smoke detectors, industrial gauges, and medical applications." },
  { number: 96, symbol: 'Cm', name: 'Curium', atomicMass: 247, category: 'actinoid', group: null, period: 7, funFacts: "Named after Marie and Pierre Curie.", uses: "Scientific research and portable power sources." },
  { number: 97, symbol: 'Bk', name: 'Berkelium', atomicMass: 247, category: 'actinoid', group: null, period: 7, funFacts: "Named after Berkeley, California.", uses: "Scientific research and creating heavier elements." },
  { number: 98, symbol: 'Cf', name: 'Californium', atomicMass: 251, category: 'actinoid', group: null, period: 7, funFacts: "Used to detect gold and silver in prospecting.", uses: "Starting nuclear reactors, cancer treatments, and moisture gauges." },
  { number: 99, symbol: 'Es', name: 'Einsteinium', atomicMass: 252, category: 'actinoid', group: null, period: 7, funFacts: "Named after Albert Einstein.", uses: "Scientific research and creating heavier elements." },
  { number: 100, symbol: 'Fm', name: 'Fermium', atomicMass: 257, category: 'actinoid', group: null, period: 7, funFacts: "Named after Enrico Fermi.", uses: "Scientific research and creating heavier elements." },
  { number: 101, symbol: 'Md', name: 'Mendelevium', atomicMass: 258, category: 'actinoid', group: null, period: 7, funFacts: "Named after Dmitri Mendeleev.", uses: "Scientific research and the study of nuclear properties." },
  { number: 102, symbol: 'No', name: 'Nobelium', atomicMass: 259, category: 'actinoid', group: null, period: 7, funFacts: "Named after Alfred Nobel.", uses: "Scientific research and the study of nuclear properties." },
  { number: 103, symbol: 'Lr', name: 'Lawrencium', atomicMass: 266, category: 'actinoid', group: null, period: 7, funFacts: "Last element in the actinide series.", uses: "Scientific research only." },
  { number: 104, symbol: 'Rf', name: 'Rutherfordium', atomicMass: 267, category: 'transition-metal', group: 4, period: 7, funFacts: "Named after Ernest Rutherford.", uses: "Scientific research only." },
  { number: 105, symbol: 'Db', name: 'Dubnium', atomicMass: 268, category: 'transition-metal', group: 5, period: 7, funFacts: "Named after Dubna, Russia.", uses: "Scientific research only." },
  { number: 106, symbol: 'Sg', name: 'Seaborgium', atomicMass: 269, category: 'transition-metal', group: 6, period: 7, funFacts: "Named after Glenn Seaborg.", uses: "Scientific research only." },
  { number: 107, symbol: 'Bh', name: 'Bohrium', atomicMass: 270, category: 'transition-metal', group: 7, period: 7, funFacts: "Named after Niels Bohr.", uses: "Scientific research only." },
  { number: 108, symbol: 'Hs', name: 'Hassium', atomicMass: 269, category: 'transition-metal', group: 8, period: 7, funFacts: "Named after the German state of Hesse.", uses: "Scientific research only." },
  { number: 109, symbol: 'Mt', name: 'Meitnerium', atomicMass: 278, category: 'transition-metal', group: 9, period: 7, funFacts: "Named after Lise Meitner.", uses: "Scientific research only." },
  { number: 110, symbol: 'Ds', name: 'Darmstadtium', atomicMass: 281, category: 'transition-metal', group: 10, period: 7, funFacts: "Named after Darmstadt, Germany.", uses: "Scientific research only." },
  { number: 111, symbol: 'Rg', name: 'Roentgenium', atomicMass: 282, category: 'transition-metal', group: 11, period: 7, funFacts: "Named after Wilhelm Röntgen.", uses: "Scientific research only." },
  { number: 112, symbol: 'Cn', name: 'Copernicium', atomicMass: 285, category: 'transition-metal', group: 12, period: 7, funFacts: "Named after Nicolaus Copernicus.", uses: "Scientific research only." },
  { number: 113, symbol: 'Nh', name: 'Nihonium', atomicMass: 286, category: 'post-transition-metal', group: 13, period: 7, funFacts: "Named after Japan (Nihon).", uses: "Scientific research only." },
  { number: 114, symbol: 'Fl', name: 'Flerovium', atomicMass: 289, category: 'post-transition-metal', group: 14, period: 7, funFacts: "Named after Flerov Laboratory in Russia.", uses: "Scientific research only." },
  { number: 115, symbol: 'Mc', name: 'Moscovium', atomicMass: 290, category: 'post-transition-metal', group: 15, period: 7, funFacts: "Named after Moscow region.", uses: "Scientific research only." },
  { number: 116, symbol: 'Lv', name: 'Livermorium', atomicMass: 293, category: 'post-transition-metal', group: 16, period: 7, funFacts: "Named after Lawrence Livermore National Laboratory.", uses: "Scientific research only." },
  { number: 117, symbol: 'Ts', name: 'Tennessine', atomicMass: 294, category: 'halogen', group: 17, period: 7, funFacts: "Named after Tennessee, US.", uses: "Scientific research only." },
  { number: 118, symbol: 'Og', name: 'Oganesson', atomicMass: 294, category: 'noble-gas', group: 18, period: 7, funFacts: "Named after Yuri Oganessian.", uses: "Scientific research only." }
];

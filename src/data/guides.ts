import hero from '../assets/photos/hero.jpg';
import drafts from '../assets/photos/drafts.jpg';
import heating from '../assets/photos/heating.jpg';
import insulation from '../assets/photos/insulation.jpg';
import insulation2 from '../assets/photos/insulation2.jpg';
import water from '../assets/photos/water.jpg';
import electricity from '../assets/photos/electricity.jpg';
import kitchen from '../assets/photos/kitchen.jpg';
import laundry from '../assets/photos/laundry.jpg';
import heating2 from '../assets/photos/heating2.jpg';
import heating3 from '../assets/photos/heating3.jpg';
import drafts2 from '../assets/photos/drafts2.jpg';
import electricity2 from '../assets/photos/electricity2.jpg';
import heating10 from '../assets/photos/heating10.jpg';
import heating11 from '../assets/photos/heating11.jpg';
import heating14 from '../assets/photos/heating14.jpg';
import heating15 from '../assets/photos/heating15.jpg';
import heating18 from '../assets/photos/heating18.jpg';
import heating19 from '../assets/photos/heating19.jpg';
import heating20 from '../assets/photos/heating20.jpg';
import heating22 from '../assets/photos/heating22.jpg';
import heating23 from '../assets/photos/heating23.jpg';
import heating24 from '../assets/photos/heating24.jpg';
import heating4 from '../assets/photos/heating4.jpg';
import heating5 from '../assets/photos/heating5.jpg';
import heating6 from '../assets/photos/heating6.jpg';
import heating7 from '../assets/photos/heating7.jpg';
import heating8 from '../assets/photos/heating8.jpg';
import heating9 from '../assets/photos/heating9.jpg';
import water2 from '../assets/photos/water2.jpg';
import electricity3 from '../assets/photos/electricity3.jpg';
import electricity4 from '../assets/photos/electricity4.jpg';

const extra: Partial<Record<CategoryId, { photo: ImageMetadata; alt: string }[]>> = {
  heating: [
    { photo: heating2, alt: 'Close-up of a small ceramic space heater glowing red' },
    { photo: heating3, alt: 'A wood-paneled cabin living room with a gray sofa' },
  ],
  drafts: [{ photo: drafts2, alt: 'An orange sofa and coffee table with a cup and an open book' }],
  electricity: [{ photo: electricity2, alt: 'A frosted LED bulb with its LED chips visible' }],
};

export const heroPhoto = { src: hero, alt: 'A warm living room with a tan leather sofa and floor-to-ceiling windows' };

export type CategoryId = 'drafts' | 'heating' | 'insulation' | 'water' | 'electricity' | 'kitchen' | 'laundry';

export const categories: Record<CategoryId, { name: string; blurb: string; photo: ImageMetadata; alt: string }> = {
  drafts: { name: 'Drafts & Sealing', blurb: 'Find the leaks you can feel, then close them cheaply.', photo: drafts, alt: 'Living room with long curtains drawn beside a large window' },
  heating: { name: 'Heating & Cooling', blurb: 'Thermostats, heat pumps, space heaters and the math behind them.', photo: heating, alt: 'A hand adjusting a wall-mounted digital thermostat' },
  insulation: { name: 'Insulation', blurb: 'Attics, rim joists, crawl spaces and the gaps between them.', photo: insulation, alt: 'A worker blowing loose-fill insulation into an attic' },
  water: { name: 'Water Heating', blurb: 'Showerheads, pipe wrap, timers and heat pump water heaters.', photo: water, alt: 'A hand turning on a bathtub shower head' },
  electricity: { name: 'Appliances & Electricity', blurb: 'Measure what each plug really costs before replacing anything.', photo: electricity, alt: 'Several LED light bulbs of different shapes on a black background' },
  kitchen: { name: 'Kitchen', blurb: 'What it costs to boil, bake, slow-cook and keep food cold.', photo: kitchen, alt: 'A steel kettle heating on a gas stove burner' },
  laundry: { name: 'Laundry', blurb: 'Cold washes, drying racks and keeping the dryer vent clear.', photo: laundry, alt: 'White laundry hanging on a folding drying rack' },
};

export const guides: Record<string, { category: CategoryId; dek: string }> = {
  'air-fryer-toaster-oven-vs-oven-energy-cost': { category: 'kitchen', dek: 'A small oven uses less power per meal, but it takes years of cooking to pay for itself.' },
  'air-sealing-caulk-foam-outlet-gaskets': { category: 'drafts', dek: 'Caulk, spray foam and foam outlet gaskets for the small leaks that add up.' },
  'attic-insulation-approaches-when-to-call-pro': { category: 'insulation', dek: 'Blown-in, batts or air sealing first, and the attic jobs worth handing to a pro.' },
  'attic-stair-hatch-insulation-covers': { category: 'insulation', dek: 'An uninsulated attic hatch is often the largest hole in an otherwise insulated ceiling.' },
  'best-smart-plugs-vampire-power': { category: 'electricity', dek: 'Find which devices draw power while off, then decide if a smart plug is worth it.' },
  'best-smart-thermostats-2026': { category: 'heating', dek: 'Nest, ecobee and Honeywell compared on the features that actually change your heating schedule.' },
  'best-weatherstripping-draft-stoppers': { category: 'drafts', dek: 'Door sweeps, foam tape and V-strip matched to the gap you actually have.' },
  'cellular-honeycomb-shades-winter-heat-loss': { category: 'drafts', dek: 'How much heat cellular shades hold in at night, and how to pick ones that fit.' },
  'crawl-space-vent-covers-winter': { category: 'insulation', dek: 'Foam plugs, damper vents and the vents you should never block.' },
  'dehumidifier-cost-to-run-basement-humidity': { category: 'electricity', dek: 'Check your basement humidity and fix the moisture source before buying a bigger unit.' },
  'dryer-vent-cleaning-kits-energy-fire-safety': { category: 'laundry', dek: 'A clogged vent stretches every dry cycle and raises fire risk. Here is how to clear it.' },
  'duct-sealing-mastic-foil-tape-hvac': { category: 'heating', dek: 'Seal the duct joints you can reach with mastic and real foil tape, never cloth duct tape.' },
  'electric-baseboard-heater-thermostats-line-voltage': { category: 'heating', dek: 'Baseboard heaters need line-voltage thermostats. Match the voltage, poles and amps.' },
  'electric-blanket-heated-throw-cost-to-run': { category: 'heating', dek: 'A heated throw costs pennies an hour, but it only saves money if the thermostat goes down.' },
  'electric-fireplace-cost-to-run-heat-vs-flame-only': { category: 'heating', dek: 'Heat mode runs about 26¢ an hour. The flame effect alone costs almost nothing.' },
  'electric-kettle-vs-stove-microwave-cost-to-boil-water': { category: 'kitchen', dek: 'A liter costs about 2¢ in a kettle. Overfilling and reboiling cost more than which device you use.' },
  'electric-water-heater-timers-cut-standby': { category: 'water', dek: 'When a timer on an electric tank helps, and when your schedule makes it pointless.' },
  'engine-block-heater-cost-to-run-timer': { category: 'electricity', dek: 'Two hours of plugging in warms most engines. A timer cuts a winter of block heater power by about 80 percent.' },
  'emporia-vue-vs-sense': { category: 'electricity', dek: 'Two whole-home energy monitors compared: install, accuracy and what you learn from each.' },
  'fireplace-chimney-draft-blockers': { category: 'drafts', dek: 'Cold air from an unused fireplace is usually a leaky damper. Here is how to plug it safely.' },
  'furnace-humidifier-water-panels-winter-comfort': { category: 'heating', dek: 'Replace the right water panel and dry winter air feels warmer at the same setting.' },
  'garage-door-weather-seals-bottom-seals': { category: 'drafts', dek: 'Bottom seals and perimeter strips for attached garages that leak cold into the house.' },
  'garage-heater-cost-to-run-electric-vs-propane': { category: 'heating', dek: 'What an hour of garage heat costs with electric, propane or a heat pump, and the door fixes to do first.' },
  'heat-pump-aux-heat-high-bill-thermostat-settings': { category: 'heating', dek: 'Backup heat strips are expensive. These thermostat settings keep them from kicking in early.' },
  'heat-pump-water-heater-vs-standard': { category: 'water', dek: 'A heat pump water heater costs more up front. Here is how to tell if it pays back in your home.' },
  'heated-mattress-pads-zone-heating': { category: 'heating', dek: 'Warm the bed instead of the house and drop the overnight thermostat.' },
  'heated-pet-bed-water-bowl-cost-to-run': { category: 'electricity', dek: 'A heated pet bed runs on 4 to 60 watts. Here is what beds, bowls and bird baths cost per month.' },
  'holiday-lights-cost-to-run-led-vs-incandescent-timers': { category: 'electricity', dek: 'Four example displays, from about $1 to $90 a season, plus timers and outdoor safety.' },
  'humidifier-cost-to-run-ultrasonic-vs-evaporative-vs-warm-mist': { category: 'electricity', dek: 'Cool-mist models look cheap to run, but part of their cost shows up on the furnace bill.' },
  'hot-tub-cost-to-run-winter-cover-thermal-blanket': { category: 'water', dek: 'A tired cover is the usual reason a winter hot tub bill jumps. Here is how to check it and what to fix first.' },
  'hvac-air-filters-merv-efficiency': { category: 'heating', dek: 'Which MERV rating your system can handle, and when a thick filter hurts airflow.' },
  'indoor-clothes-drying-racks-cut-dryer-cost': { category: 'laundry', dek: 'Figure out what a dryer load costs, then air-dry without making the house damp.' },
  'insulate-hot-water-pipes-water-heater-jacket': { category: 'water', dek: 'Foam sleeves on the first few feet of pipe, and when an old tank still needs a jacket.' },
  'kill-a-watt-plug-in-energy-meter': { category: 'electricity', dek: 'A $25 plug-in meter tells you what an appliance really costs before you replace it.' },
  'led-bulbs-save-money-wattage-guide': { category: 'electricity', dek: 'Which bulbs to swap first, what wattage to buy and how fast LEDs pay off.' },
  'low-flow-showerheads-faucet-aerators': { category: 'water', dek: 'Less hot water per shower means less work for the water heater, with no new tank.' },
  'lower-electric-bill-priority-checklist': { category: 'electricity', dek: 'The free and cheap steps worth doing this month, in the order we would do them.' },
  'oil-filled-space-heaters-zone-heating': { category: 'heating', dek: 'Heat the room you use with an oil-filled radiator and turn the rest of the house down.' },
  'outdoor-faucet-covers-freeze-protection': { category: 'water', dek: 'Drain the spigot first, then pick a foam cup, hard shell or sock before the first freeze.' },
  'pipe-freeze-heat-tape-protection': { category: 'water', dek: 'Insulate exposed lines first and add heat tape only where pipes still freeze.' },
  'plug-in-thermostats-space-heaters': { category: 'heating', dek: 'Space heater dials overshoot. A plug-in thermostat holds the temperature you actually set.' },
  'radiator-heat-reflectors-exterior-walls': { category: 'heating', dek: 'A reflective panel behind a radiator sends heat into the room instead of the outside wall.' },
  'recessed-light-covers-attic-air-sealing': { category: 'insulation', dek: 'Fire-rated covers for recessed lights that leak into the attic, and which cans to leave alone.' },
  'refrigerator-freezer-cost-to-run-thermometer-coil-brush': { category: 'kitchen', dek: 'Measure your fridge, set the right temperatures and test the door seal. Coil cleaning matters less than you think.' },
  'register-booster-fans-cold-rooms': { category: 'heating', dek: 'A booster fan moves more warm air to a cold room. It cannot create heat that is not there.' },
  'rim-joist-band-joist-insulation-basement': { category: 'insulation', dek: 'Cut foam board to fit each bay along the basement rim and seal the edges with spray foam.' },
  'roof-heat-cable-cost-to-run-ice-dams': { category: 'insulation', dek: 'A 100-foot cable costs about $2 a day to run. When it is worth it, and the attic fixes that stop ice dams for good.' },
  'sliding-glass-door-draft-sealing-winter': { category: 'drafts', dek: 'Weatherstrip, shrink film or a heavy curtain for the patio door that lets winter in.' },
  'slow-cooker-vs-instant-pot-vs-oven-cost-to-run': { category: 'kitchen', dek: 'What a pot of chili or a roast costs to cook each way, with food-safety notes.' },
  'smart-thermostat-install-cost-vs-diy': { category: 'heating', dek: 'What a pro charges, what a C-wire is and when installing it yourself is fine.' },
  'space-heater-cost-to-run-ceramic-vs-infrared-vs-oil-filled': { category: 'heating', dek: 'Every electric heater turns watts into heat the same way. Your bill is watts × hours × rate.' },
  'thermal-blackout-curtains-energy-savings': { category: 'drafts', dek: 'Lined curtains help most over cold glass you still want to open during the day.' },
  'thermal-camera-vs-infrared-thermometer-find-drafts': { category: 'drafts', dek: 'Start with incense or a $20 IR thermometer. Get a thermal camera only if you need the whole wall.' },
  'thermostat-setback-savings-math-per-degree': { category: 'heating', dek: 'What one degree, a night setback or an away schedule saves, and how to test it in your home.' },
  'tv-gaming-console-pc-cost-to-run-standby': { category: 'electricity', dek: 'Three example households show where standby power hides behind the TV and under the desk.' },
  'under-desk-heaters-foot-warmers-home-office': { category: 'heating', dek: 'Warm your feet at the desk and turn the house down while you work.' },
  'washer-dryer-cost-per-load-cold-wash-vs-hot-dryer': { category: 'laundry', dek: 'Hot water and the dryer make up most of what a load costs. Here is the per-load math.' },
  'whole-house-fan-winter-covers': { category: 'insulation', dek: 'Whole-house fan shutters leak all winter. Cover them from below or box them from the attic.' },
  'window-ac-smart-controllers-ceiling-fan-savings': { category: 'heating', dek: 'Put a schedule on a window AC and pair it with a ceiling fan to run it less.' },
  'window-ac-winter-covers-draft-sealing': { category: 'drafts', dek: 'If the window unit stays in all winter, cover it inside and out to stop the draft.' },
  'window-insulation-kits-winter-drafts': { category: 'drafts', dek: 'Indoor shrink film adds a still-air layer to drafty single-pane windows for a few dollars.' },
};

const photoFor: Record<string, { photo: ImageMetadata; alt: string }> = {
  'engine-block-heater-cost-to-run-timer': { photo: electricity4, alt: "A snow-covered SUV parked outside an apartment block with a power cord running from a wooden post to its front end" },
  'heated-pet-bed-water-bowl-cost-to-run': { photo: electricity3, alt: "A brindle dog curled up asleep in a round, fur-lined pet bed" },
  'roof-heat-cable-cost-to-run-ice-dams': { photo: insulation2, alt: "A heat cable clipped in a zigzag along the shingles above a white gutter" },
  'garage-heater-cost-to-run-electric-vs-propane': { photo: heating24, alt: "The inside of a white steel single-car garage door with its tracks and hinges" },
  'hot-tub-cost-to-run-winter-cover-thermal-blanket': { photo: water2, alt: "A round outdoor hot tub with a wooden surround in a leafy garden" },
  'best-smart-thermostats-2026': { photo: heating4, alt: "A person holding a smart thermostat showing the room temperature" },
  'duct-sealing-mastic-foil-tape-hvac': { photo: heating10, alt: "Workers installing a section of sheet-metal ductwork" },
  'electric-baseboard-heater-thermostats-line-voltage': { photo: heating8, alt: "A white electric baseboard heater with a built-in dial thermostat" },
  'electric-blanket-heated-throw-cost-to-run': { photo: heating18, alt: "A woman spreading a colorful blanket over a sofa" },
  'electric-fireplace-cost-to-run-heat-vs-flame-only': { photo: heating3, alt: "A wood-paneled cabin living room with a gray sofa" },
  'furnace-humidifier-water-panels-winter-comfort': { photo: heating20, alt: "An unfinished basement with a furnace and metal ductwork" },
  'heat-pump-aux-heat-high-bill-thermostat-settings': { photo: heating, alt: "A hand adjusting a wall-mounted digital thermostat" },
  'heated-mattress-pads-zone-heating': { photo: heating19, alt: "A neatly made bed with white sheets and pillows" },
  'hvac-air-filters-merv-efficiency': { photo: heating9, alt: "A pleated HVAC air filter held next to a furnace" },
  'oil-filled-space-heaters-zone-heating': { photo: heating6, alt: "Close-up of a panel radiator with a thermostatic valve" },
  'plug-in-thermostats-space-heaters': { photo: heating23, alt: "A small portable fan heater" },
  'radiator-heat-reflectors-exterior-walls': { photo: heating7, alt: "A white column radiator against a wall above a wood floor" },
  'register-booster-fans-cold-rooms': { photo: heating11, alt: "A sitting room with a ceiling fan, sofa and dresser" },
  'smart-thermostat-install-cost-vs-diy': { photo: heating5, alt: "A woman setting a wall thermostat while holding her phone" },
  'space-heater-cost-to-run-ceramic-vs-infrared-vs-oil-filled': { photo: heating2, alt: "Close-up of a small ceramic space heater glowing red" },
  'thermostat-setback-savings-math-per-degree': { photo: heating22, alt: "A thermostatic radiator valve with numbered settings" },
  'window-ac-smart-controllers-ceiling-fan-savings': { photo: heating14, alt: "A window air conditioner seen from inside the room" },
  'under-desk-heaters-foot-warmers-home-office': { photo: heating15, alt: "A woman working at a desk in a home office" },
};

export function guideMeta(id: string) {
  const g = guides[id] ?? { category: 'electricity' as CategoryId, dek: '' };
  const base = categories[g.category];
  const pool = [{ photo: base.photo, alt: base.alt }, ...(extra[g.category] ?? [])];
  const idx = Object.keys(guides).filter((k) => guides[k].category === g.category).indexOf(id);
  const pick = photoFor[id] ?? pool[Math.max(0, idx) % pool.length];
  return { ...g, cat: { ...base, photo: pick.photo, alt: pick.alt } };
}

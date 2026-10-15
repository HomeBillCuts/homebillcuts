---
title: "Thermostat Setback Savings Math: What 1 Degree, Night Setbacks, and Away Schedules Really Save"
description: "US guide to thermostat setback savings: the honest ~1% per degree rule of thumb (and why it's ~3% when you lower the setpoint all day), gas and electric worked examples, raising the AC 1°F in summer, season and rate-sensitivity tables, heating-degree-day normalization for a real A/B test, heat pump aux and radiant/boiler exceptions, TOU pre-heat and pre-cool, free fixes first, a, troubleshooting, and a verified Amazon shortlist."
pubDate: 2026-10-11
updatedDate: 2026-10-12
faqs:
  - question: "How much do you save per degree you lower the thermostat?"
    answer: "The U.S. Department of Energy's rule of thumb is that turning the thermostat back 7–10°F for 8 hours a day can save up to about 10% a year on heating and cooling — roughly 1% of heating cost per degree for each 8-hour daily setback. Lowering the setpoint by 1°F around the clock is about three 8-hour blocks, so roughly 3%. These are estimates, not promises: the percentage is larger in mild climates and leaky homes and smaller in tight or very cold ones. Compute your own dollars from your bill and verify with a weather-normalized test."
  - question: "Does it cost more to reheat the house than you save with a setback?"
    answer: "For a gas furnace, boiler with normal response, or electric resistance heat, no. A house loses heat in proportion to the indoor-outdoor temperature difference, so a cooler house loses less heat for every hour it sits cooler. The recovery burst only replaces part of what you didn't lose. The main exception is heat pumps, where a fast recovery can trigger expensive auxiliary strip heat, and very slow radiant systems where recovery can take hours."
  - question: "Should I use setbacks with a heat pump?"
    answer: "Use small ones — about 2–4°F — and a thermostat with heat-pump-aware or adaptive recovery that warms up slowly without calling for auxiliary strips. DOE's own guidance says not to do setbacks on a heat pump without a programmable or smart thermostat designed for heat pumps. One hour a day of 10 kW strip heat can cost about $30 a month more than letting the compressor do the work, which wipes out a small setback's savings. Check your aux runtime report after a week."
  - question: "Does raising the air conditioner 1 degree save money?"
    answer: "Yes, by the same logic in reverse: a smaller indoor-outdoor difference means less heat leaking in. Using the same rule of thumb, raising the cooling setpoint 1°F all day is roughly 3% of cooling cost, and a 4°F setup while you're at work adds a few percent more. On a $135/month cooling bill that's about $4 per degree per month — an estimate to verify on your utility's daily kWh data, not a guarantee. Ceiling fans in occupied rooms make a higher setpoint more comfortable."
  - question: "Is a smart thermostat worth it just for setbacks?"
    answer: "Only if you won't keep a schedule on what you already have. A basic programmable thermostat set to disciplined night and away setbacks captures most of the savings. Smart models help when your schedule is irregular (geofencing), rooms are uneven (remote sensors), you have a heat pump that needs aux-aware recovery, or your utility offers a rebate. If you already set back every night, the incremental savings from upgrading are small."
  - question: "How do I calculate my own heating cost per degree?"
    answer: "Find your heating dollars per month: gas bill therms minus your summer baseline therms, or winter kWh minus shoulder-month kWh, times your variable rate. Then use about 1% per degree for each 8-hour daily setback. Example: 94 heating therms × $1.30 = $122/month; an 8°F night setback ≈ 8% ≈ $10/month, and each 1°F of 8-hour setback ≈ $1.22/month. Verify with a two- to four-week A/B test normalized by heating degree days."
  - question: "What setback temperatures are reasonable?"
    answer: "Many households use about 68°F awake and home and 60–64°F asleep or away in winter, and around 78°F home with higher away setpoints in summer. Keep homes with infants, older adults, or medically vulnerable people warmer, use only 2–4°F setbacks on heat pumps and slow radiant systems, and don't let any home drop to where pipes could freeze — keep at least about 55°F when away in freezing weather."
---

The thermostat is the cheapest "upgrade" in the house because you already own it. The honest question is how much a setback actually saves on *your* bill — not a marketing percentage on a box. Using your own bill, you'll work out what one degree is worth and run the numbers for nights and time away with gas, electric resistance and heat pumps. Heating degree days help you check the result so a cold snap doesn't fool you.


## The 60-second version

- **Rule of thumb:** about 1% of your heating cost per °F for each 8-hour daily setback (DOE: 7–10°F for 8 hours a day → up to ~10% a year). It's an estimate, not a measurement of your house.
- **Lowering the "home" setpoint 1°F around the clock ≈ 3%** — three 8-hour blocks. That's often worth more than a fancy schedule.
- **Your dollars:** heating $/month × 1% × degrees × (setback hours ÷ 8). On a $122/month gas heating bill, an 8°F night setback is roughly $10/month, or about $50 over a 5-month season.
- **Reheating does not cost more than you saved** for furnaces and resistance heat. Heat pumps are the exception — a recovery that fires aux strips can cost more than the setback saves.
- **Summer works in reverse:** raising the AC setpoint is the cooling version of a setback.
- **Test it, normalized for weather:** compare therms or kWh per heating degree day, not raw weekly totals.
- **Free first:** program the thermostat you have, drop 1–2°F with a sweater, fix drafts and filters. Buy a smart thermostat only to solve a specific problem (irregular schedule, uneven rooms, heat pump recovery).

## Why setbacks work (the physics in one paragraph)

Heat loss through walls, windows, the attic, and air leaks is roughly proportional to indoor temperature minus outdoor temperature. Lower the indoor number and the house leaks less heat for every hour it sits cooler. The morning recovery has to put back the heat stored in the air, furniture, and drywall — but that's smaller than the heat you didn't lose overnight. That's why, for gas furnaces, boilers with normal response, and electric resistance heat, you come out ahead. The myth that "it costs more to warm back up" comes from heat pumps (where recovery method matters) and from people comparing a cold-snap week to a mild week without normalizing.

### Why the percentage is bigger in mild climates (but the dollars may not be)

A rough degree-hour sanity check shows where the "1% per degree" rule comes from — and why your result will differ:

- A house needs heat roughly when outdoor temperature is below its balance point (often ~60°F for a 68°F setpoint, because people, appliances, and sun supply a few degrees for free).
- **Daily heating load ≈ 24 hours × (balance point − average outdoor temp)** in degree-hours.
- An 8°F setback for 8 hours removes at most 64 degree-hours — less in practice, because the house takes a couple of hours to coast down and recovery starts before you wake.

| Climate example | Avg outdoor | Daily load (degree-hours) | Max cut from 8°F × 8 h | Realistic (~60% of max) |
|---|---|---|---|---|
| Cold (northern January) | 25°F | 24 × 35 = 840 | ~7.6% | ~4.6% |
| Mild (southern January) | 45°F | 24 × 15 = 360 | ~17.8% | ~10.7% |

So the percentage saved is larger in mild weather — matching DOE's note that setback savings are greater in milder climates — but a mild-climate heating bill is smaller to begin with, so the dollars can be similar. Leaky houses cool down fast and capture more of the setback; tight, heavy houses barely drop and capture less. This is a simplified model; it's here to explain the range, not to replace your bill.

## Step 1: Find your heating dollars per month

You need the variable part of the bill — the per-therm or per-kWh charges a setback can actually reduce. Fixed monthly customer charges don't change no matter what the thermostat does.

- **Gas heat:** winter-month therms − summer-month therms (water heater, stove, dryer baseline) = heating therms. Multiply by your variable $/therm (supply + delivery charges per therm, from the bill's line items).
- **Electric resistance or heat pump:** winter kWh − shoulder-month kWh (April or October, when you're neither heating nor cooling) = heating kWh. Multiply by your variable $/kWh. If your bill is simple, total charges ÷ total kWh is close enough.
- **Propane or heating oil:** same idea with gallons — gallons delivered per heating season ÷ heating months × price per gallon. Deliveries are lumpy, so use a full season, not one fill.

### Worked example A: gas furnace

- January: 112 therms. July: 18 therms. Heating = 94 therms.
- Variable rate: $1.30/therm → 94 × $1.30 = $122.20/month of heat.

### Worked example B: electric resistance (furnace strips or baseboard)

- January: 2,100 kWh. October: 800 kWh. Heating = 1,300 kWh.
- Rate: $0.17/kWh → 1,300 × $0.17 = $221/month of heat.

### Worked example C: heat pump

- January: 1,450 kWh. October: 800 kWh. Heating = 650 kWh.
- Rate: $0.17/kWh → 650 × $0.17 = $110.50/month of heat. (Same house as B would use far fewer kWh because a heat pump moves heat instead of making it.)

## Step 2: Apply the honest rule of thumb (and do the per-degree math)

DOE's guidance — 7–10°F for 8 hours a day, up to ~10% a year — works out to roughly 1% of heating cost per degree, per 8-hour daily setback. The formula:

**Monthly savings ≈ heating $/month × 1% × degrees set back × (hours per day ÷ 8) × (days per week used ÷ 7)**

### Gas furnace ($122.20/month of heat)

| Move | Math | ≈ Per month | ≈ 5-month season |
|---|---|---|---|
| Each 1°F of 8-hour setback | $122.20 × 1% | $1.22 | $6 |
| 8°F night setback (8 h, every night) | $122.20 × 8% | $9.78 | $49 |
| + 6°F workday away (8 h, 5 days) | $122.20 × 6% × 5/7 | $5.24 | $26 |
| Lower home setpoint 69→68°F, 24/7 | $122.20 × ~3% | $3.67 | $18 |
| All three stacked | | ~$18.70 | ~$93 |

### Electric resistance ($221/month of heat)

| Move | ≈ Per month | ≈ 5-month season |
|---|---|---|
| Each 1°F of 8-hour setback | $2.21 | $11 |
| 8°F night setback | $17.68 | $88 |
| + 6°F workday away (5 days) | $9.47 | $47 |
| Lower home setpoint 1°F, 24/7 | $6.63 | $33 |

Resistance heat is expensive per unit of heat, so every degree is worth roughly twice as much here as in the gas example — and setbacks work cleanly because there's no aux-heat trap.

### Heat pump ($110.50/month of heat)

| Move | ≈ Per month | Note |
|---|---|---|
| 3°F night setback | $3.32 | Only if recovery stays on the compressor |
| Lower home setpoint 1°F, 24/7 | $3.32 | Often the better heat-pump move |
| One hour/day of 10 kW aux strips by mistake | +$30.60 cost | 10 kWh of strip heat vs ~4 kWh from the compressor at COP ~2.5 → 6 kWh × $0.17 × 30 days |
| Even 15 min/day of strips | +$7.65 cost | Still more than the setback saves |

That last row is the whole heat-pump story in one line: a setback that triggers aux heat every morning is a net loss. See the heat-pump section below.

## Step 2b: Cooling — raising the AC 1°F is the summer setback

Heat flows in when it's hot outside, so a higher indoor setpoint means a smaller temperature difference and less AC runtime. DOE's guidance is to turn the thermostat up in summer the same way you turn it down in winter.

### Worked example D: central AC

- July: 1,500 kWh. April: 750 kWh. Cooling = 750 kWh × $0.18 = $135/month.

| Move | Math (same rule of thumb) | ≈ Per month | ≈ 4-month summer |
|---|---|---|---|
| Raise setpoint 1°F, 24/7 | $135 × ~3% | $4.05 | $16 |
| Raise 76→78°F, 24/7 (add ceiling fans in occupied rooms) | $135 × ~6% | $8.10 | $32 |
| 4°F setup while at work (8 h, 5 days) | $135 × 4% × 5/7 | $3.86 | $15 |

Cooling caveats, honestly:

- **Sun and humidity matter more than in winter.** Solar gain through windows and latent (moisture) load can make your real per-degree number higher or lower than the rule of thumb. Your utility's daily kWh is the referee.
- **Very large setups in humid climates** can let indoor humidity climb, and a long recovery on a hot afternoon may not finish before you're home. 4–7°F is a sane range; pre-cool shortly before arrival instead of all afternoon.
- **Fans cool people, not rooms.** A ceiling fan (often tens of watts) in an occupied room lets many people accept a higher setpoint; running fans in empty rooms just adds kWh. More on that in [window AC smart controllers & ceiling fan savings](/blog/window-ac-smart-controllers-ceiling-fan-savings/).
- **Don't shut the AC fully off** in hot, humid weather if it leads to mold, warped wood, or pets and electronics overheating — a higher setpoint beats "off."

## Season totals and rate sensitivity

### Season totals by heating bill (5-month heating season)

| Monthly heating cost | 4°F night | 8°F night | 8°F night + 8°F away (every day) | Lower home 1°F, 24/7 |
|---|---|---|---|---|
| $100 | ~$20 | ~$40 | ~$80 | ~$15 |
| $200 | ~$40 | ~$80 | ~$160 | ~$30 |
| $300 | ~$60 | ~$120 | ~$240 | ~$45 |

The stacked column assumes two full 8-hour setbacks every day — an upper-end estimate. DOE's "up to ~10%" figure is for one 7–10°F, 8-hour setback; stacking more setback hours helps, but your real result is usually below the arithmetic.

### Rate sensitivity: same house, different prices (8°F night setback ≈ 8%)

**Electric resistance, 1,300 heating kWh/month:**

| Variable rate | Heating $/month | ≈ Savings/month | ≈ 5-month season |
|---|---|---|---|
| $0.12/kWh | $156 | $12.48 | $62 |
| $0.17/kWh | $221 | $17.68 | $88 |
| $0.25/kWh | $325 | $26.00 | $130 |
| $0.35/kWh | $455 | $36.40 | $182 |

**Gas furnace, 94 heating therms/month:**

| Variable rate | Heating $/month | ≈ Savings/month | ≈ 5-month season |
|---|---|---|---|
| $0.90/therm | $84.60 | $6.77 | $34 |
| $1.30/therm | $122.20 | $9.78 | $49 |
| $1.80/therm | $169.20 | $13.54 | $68 |
| $2.50/therm | $235.00 | $18.80 | $94 |

The U.S. average residential electric price was 18.31¢/kWh in July 2026 (EIA, preliminary) — use it as an example only; your own rate can be far higher or lower, and that's the single biggest swing factor in every table above.

## Step 3: Measure, don't trust — the HDD-normalized A/B test

Your central heat can't be plugged into a Kill A Watt, but you can still test the setback on the meter you already pay for. The trap: weather swamps a setback. A week that's 25% colder will use more energy even with a perfect schedule. The fix is heating degree days (HDD).

### What a heating degree day is

**HDD for one day = 65°F − that day's average outdoor temperature** (zero if the average is above 65°F). A day averaging 35°F is 30 HDD; a week of those is 210 HDD. Energy used for heating scales roughly with HDD, so therms per HDD or kWh per HDD cancels out most of the weather. Many utility portals show HDD next to your usage; otherwise look up your nearest weather station's daily averages (NOAA/National Weather Service climate data or degree-day websites) and do the subtraction.

(Cooling has the mirror version — cooling degree days, CDD = daily average − 65°F — for testing an AC setup.)

### The test, step by step

1. **Pick a baseline.** Subtract non-heating use per day: summer therms ÷ 30 for gas, or shoulder-month kWh ÷ 30 for electric.
2. **Week A (no setback):** hold one steady setpoint. Read the gas meter (or download daily kWh) at the same time each morning.
3. **Week B (setback):** run your planned night/away schedule. Same reading routine.
4. **Ideally repeat A and B once more** (A/B/A/B over four weeks) to smooth out wind, sun, and holidays.
5. **Compute heating use per HDD** for each week and compare.

### Worked example: the cold snap that "proved" setbacks don't work

| | Week A (steady 68°F) | Week B (8°F night setback) |
|---|---|---|
| Heating therms (after baseline) | 24.0 | 28.2 |
| HDD that week | 180 | 230 (cold snap) |
| Therms per HDD | 0.1333 | 0.1226 |

Raw totals say the setback week used 17.5% more gas. Normalized, it used about 8% less per degree day — right in line with the rule of thumb. Without HDD, you'd have turned off a schedule that was working.

### Gas meter and electric interval tips

- **Gas:** read the dial or digital index daily at the same time; note units (some meters read in CCF — multiply by your bill's therm factor, often near 1.0–1.04).
- **Electric:** most utilities with smart meters show daily or hourly kWh online. Hourly data also shows your recovery spike — useful for heat pumps.
- **Space heaters in the mix:** if you zone-heat, put each heater on a [Kill A Watt](/blog/kill-a-watt-plug-in-energy-meter/) and log its weekly kWh × rate alongside the central-heat change, so a deep central setback isn't just shifting cost into a 1,500 W space heater. A [plug-in thermostat for the space heater](/blog/plug-in-thermostats-space-heaters/) keeps that side honest too.

## The heat pump exception (read before setting a big setback)

Heat pumps are efficient because the compressor moves heat; electric auxiliary ("aux," "backup," "emergency," or "strip") heat makes it at 1 kWh in, 1 kWh of heat out. Typical strips are 5–15 kW. When a heat pump thermostat sees a large gap between current and target temperature — like 6–8°F at 6 a.m. — many stage in the strips to close it fast. DOE's own guidance is not to do setbacks on a heat pump without a programmable or smart thermostat designed for heat pumps.

What works better:

- **Small setbacks: 2–4°F**, or none at all in deep cold. Many heat pump households save more by lowering the steady setpoint 1–2°F than by scheduling.
- **Adaptive / smart recovery on, and heat-pump mode configured correctly** (heat pump with aux, not "furnace"), so the thermostat ramps up early on the compressor alone.
- **Aux lockout / balance point** settings: on many thermostats you can prevent strips above an outdoor temperature (for example, keep aux off above about 30–35°F if your system can carry the house there — your installer or manual sets the real number). That requires an outdoor sensor or weather data.
- **Check the aux runtime report** after a week. If aux ran every morning, shrink or remove the setback.

Full settings walkthrough: [heat pump aux heat high bill — thermostat settings](/blog/heat-pump-aux-heat-high-bill-thermostat-settings/).

### Adaptive recovery honesty

"Smart recovery," "early on," and similar features start heating before the scheduled wake-up so the house is warm on time. That's good for comfort and essential for heat pumps — but it shortens the effective setback. A 10 p.m.–6 a.m. schedule with a 90-minute recovery is really a ~6.5-hour setback at most, and the house spends some of that coasting down. Learning thermostats may also shrink your setbacks if you keep overriding them. Expect real savings below the nominal schedule math, and let the HDD test tell you where you land.

## Other exceptions: radiant, boilers, TOU rates, health, and pipes

### Radiant floors and slow boilers

- **High thermal mass** (in-floor radiant, cast-iron radiators) can take hours to recover. A deep setback may leave you cold all morning, tempting manual overrides that erase the savings.
- Use smaller setbacks (2–4°F), start recovery 2–3 hours early, or skip the night setback and use a lower steady setpoint.
- **Condensing boilers with outdoor reset** are most efficient at low water temperatures. Deep setbacks can force high-temperature recovery that reduces condensing efficiency — ask your installer before going aggressive.

### Ductless mini-splits

Mini-splits usually run best at a steady, modest output. Small setbacks are fine; most don't have strip heat, but recovery at high fan speed is less efficient than steady low-speed running. A 1–2°F lower setpoint is often the simpler win.

### Electric baseboard (line-voltage)

Resistance heat, so setbacks work cleanly — and baseboards are zoned by room, so setting back unused rooms all day is often bigger than a whole-house night setback. You need line-voltage thermostats; see [electric baseboard heater thermostats](/blog/electric-baseboard-heater-thermostats-line-voltage/).

### Time-of-use (TOU) rates: pre-heat and pre-cool

On TOU plans, the goal shifts from fewer kWh to fewer expensive kWh.

- **Summer pre-cool example (illustrative):** peak 4–9 p.m. at $0.40/kWh, off-peak $0.14/kWh. A 2.5 kW AC that runs 3 hours during peak costs about $3.00/day. Pre-cooling 2°F lower from 2–4 p.m. adds maybe 2 kWh off-peak (~$0.28), then a setpoint 2°F higher during peak cuts peak runtime to ~1.5 hours (~$1.50). Net ≈ $1.20/day, ~$35/month — even if total kWh rises slightly.
- **Winter morning peaks:** some utilities price 6–9 a.m. high. Finish recovery before the peak window, then coast. With a heat pump, make sure the earlier recovery still avoids aux.
- **Read your tariff.** Peak hours, seasons, and demand charges vary by utility; the math only works with your real price windows.

### Health and comfort

- Keep homes with infants, older adults, or medically vulnerable people warmer. WHO housing guidance recommends at least about 64°F (18°C) indoors in cold seasons for the general population, and warmer for vulnerable groups.
- Bedrooms that drop too low can mean condensation on cold windows; if you see moisture or mold on sills, moderate the setback and check humidity.

### Pipes and freezing weather

- Don't let an away setpoint drop below about 55°F in freezing weather, and open sink cabinets on exterior walls during cold snaps.
- Vacant homes, cabins, and rentals need extra margin — see [pipe freeze protection & heat tape](/blog/pipe-freeze-heat-tape-protection/) and [outdoor faucet covers](/blog/outdoor-faucet-covers-freeze-protection/).

## Free first (before you buy anything)

1. **Program the thermostat you already have.** Most programmables shipped with a schedule nobody set — or a permanent "Hold" that overrides it. Look for Schedule / Program, set wake, leave, return, and sleep periods, and turn off permanent hold.
2. **The sweater setpoint.** Lower "home" 1–2°F and add a sweater, slippers, or a [heated throw](/blog/electric-blanket-heated-throw-cost-to-run/). At ~3% per degree all day, that's often worth more than any schedule. A [heated mattress pad](/blog/heated-mattress-pads-zone-heating/) makes a deeper night setback comfortable for pennies a night.
3. **Fix the biggest drafts** so the setback actually holds: [weatherstripping and draft stoppers](/blog/best-weatherstripping-draft-stoppers/), [window insulation kits](/blog/window-insulation-kits-winter-drafts/), and [air sealing outlets and gaps](/blog/air-sealing-caulk-foam-outlet-gaskets/).
4. **Change or check the filter.** A clogged filter lengthens recovery and can trip high-limit safeties; see [HVAC air filters & MERV](/blog/hvac-air-filters-merv-efficiency/).
5. **Use the windows.** Open south-facing blinds on sunny winter days; close them (or [cellular shades](/blog/cellular-honeycomb-shades-winter-heat-loss/)) at night.
6. **Leave registers open.** Closing many supply registers in a ducted system rarely saves money and can stress the blower; set back with the thermostat instead.
7. **Check thermostat placement.** A thermostat near a sunny window, lamp, kitchen, or drafty door reads wrong, so the whole schedule is off.

## What to do first

| Your situation | Do this first | Setback depth | Watch out for |
|---|---|---|---|
| Gas furnace, regular schedule | Program night + away setbacks | 7–10°F night, similar away | Overrides; schedule drift |
| Gas furnace, irregular schedule | Lower steady setpoint; consider geofencing | 4–8°F when away | Phones/geofence that don't "leave" |
| Electric resistance / baseboard | Room-by-room setbacks; line-voltage stats | 7–10°F; unused rooms all day | Space heaters shifting cost |
| Heat pump | Lower setpoint 1–2°F; aux lockout | 2–4°F max | Morning aux runtime |
| Radiant / cast-iron boiler | Steady lower setpoint or early recovery | 2–4°F | Hours-long recovery, overrides |
| Central AC, hot climate | Raise setpoint + fans in occupied rooms | 4–7°F away | Humidity; late recovery |
| TOU electric plan | Pre-cool / pre-heat outside peak | Coast through peak | Demand charges; aux on pre-heat |
| Vulnerable occupants | Comfort and safety first | Small or none | Bedroom temps, condensation |
| Vacation / second home | Away setpoint, not off | ~55°F minimum in winter | Freezing pipes, Wi-Fi outages |

## What not to do

- **Don't turn the heat off** in freezing weather to "save more." Pipes and health cost far more.
- **Don't run deep setbacks on a heat pump** without aux-aware recovery.
- **Don't crank the thermostat to 80°F** to warm up faster — furnaces deliver heat at the same rate; you just overshoot.
- **Don't judge a setback on one week of raw usage.** Normalize by HDD/CDD.
- **Don't buy a smart thermostat to fix a schedule problem** you could fix in five minutes on the one you own.
- **Don't let space heaters quietly replace central heat** without metering them.
- **Don't wire a low-voltage smart thermostat to a 120/240 V baseboard circuit.** It's a shock and fire hazard; use a line-voltage thermostat.
- **Don't close most supply registers** to "zone" a ducted system.

## Which one should you buy?

1. **Manual dial thermostat with a regular schedule?** A basic programmable or a budget smart thermostat pays back fastest — you're adding setbacks you weren't doing.
2. **Already programmable and you actually keep the schedule?** Don't buy. Upgrade savings are small; spend the money on [air sealing](/blog/air-sealing-caulk-foam-outlet-gaskets/) or [duct sealing](/blog/duct-sealing-mastic-foil-tape-hvac/).
3. **Programmable but it's always on "Hold"?** Fix the habit first. If you won't, a smart thermostat with geofencing or learning is the honest reason to buy.
4. **Irregular schedule (shift work, hybrid, travel)?** Smart with geofencing (ecobee, Nest, Amazon Smart Thermostat via the Alexa app).
5. **Uneven rooms or the thermostat sits in the wrong spot?** Models with remote room sensors (ecobee Premium, Honeywell Home T9, Nest Learning with Temperature Sensor) so setbacks track the rooms you use.
6. **Heat pump?** Pick one with heat-pump and aux-aware logic, confirm it supports your wiring (O/B reversing valve, aux/emergency terminals), and plan to set aux lockout.
7. **No C-wire?** Many smart thermostats need a common wire for steady power. Check your wiring before buying, and read the listing for included power adapters — or see [smart thermostat install cost vs DIY](/blog/smart-thermostat-install-cost-vs-diy/).
8. **Electric baseboard?** Standard low-voltage smart thermostats won't work — see [line-voltage thermostats](/blog/electric-baseboard-heater-thermostats-line-voltage/).
9. **Rebate available?** Check your utility and the ENERGY STAR rebate finder; certified smart thermostats are often eligible, which can cut payback a lot.

### Payback math (illustrative)

| Starting point | New savings/season (gas example) | $130 thermostat payback |
|---|---|---|
| Manual dial, no setbacks → schedule | ~$75 (night + away) | ~2 heating seasons |
| Programmable, always on Hold → smart | ~$40–75 if you finally set back | ~2–3 seasons |
| Programmable, schedule already used → smart | ~$10–20 | ~7–13 seasons |

Swap in your own season savings from the tables above; with a utility rebate, divide by the net price.

For ranked picks and feature detail, see [best smart thermostats for 2026](/blog/best-smart-thermostats-2026/).

## Our picks

> We earn a commission if you buy through these Amazon links, at no extra cost to you. Check size and fit on the listing before you order.

### Measure first

- **P3 P4400 Kill A Watt Electricity Usage Monitor** — meter any plug-in space heater you use alongside setbacks so central savings aren't just shifted into a 1,500 W heater: [View on Amazon](https://www.amazon.com/dp/B00009MDBU/?tag=homebillcuts-20)

### Budget smart scheduling

- **Amazon Smart Thermostat** — low-cost scheduling and app/Alexa control for households whose real problem is "nobody set the schedule"; check C-wire needs on the listing before buying: [View on Amazon](https://www.amazon.com/dp/B08J4C8871/?tag=homebillcuts-20)

### Room sensors (uneven homes, bad thermostat location)

- **ecobee Smart Thermostat Premium (with SmartSensor)** — occupancy-aware room sensing, geofencing, and runtime reports that make the A/B test and heat pump aux checks easier: [View on Amazon](https://www.amazon.com/dp/B09XXS48P8/?tag=homebillcuts-20)
- **Honeywell Home T9 (sensor-ready)** — room-priority sensing once you add Smart Room Sensors and smart recovery; confirm heat pump configuration options for your system: [View on Amazon](https://www.amazon.com/dp/B07N83WK9T/?tag=homebillcuts-20)

### Learning thermostat

- **Google Nest Learning Thermostat (4th gen) + Nest Temperature Sensor (2nd gen), Silver** — learning schedules and away detection for irregular routines; review its learned setbacks after a couple of weeks so it doesn't quietly shrink them: [View on Amazon](https://www.amazon.com/dp/B0D5BGST5N/?tag=homebillcuts-20)

*Listings change. If an ASIN goes missing, search the exact model name on Amazon rather than grabbing a random "smart thermostat" result.*

## Troubleshooting

| Symptom | Likely cause | Fix |
|---|---|---|
| Bill didn't drop after adding setbacks | Colder month; schedule on Hold; overrides | Normalize by HDD; check Hold; review override history |
| House never reaches setback temp overnight | Tight/heavy house, or setback too short | Normal — savings are smaller; lower steady setpoint instead |
| Cold every morning | Recovery starts too late; slow radiant system | Enable adaptive recovery or start earlier; shrink setback |
| Heat pump bill went up | Aux strips running on recovery | Shrink to 2–4°F; set aux lockout; check aux runtime |
| "Aux heat" shows every morning | Large setpoint jump; wrong system type configured | Configure as heat pump with aux; smaller, slower recovery |
| Smart thermostat setbacks got smaller | Learning from your overrides | Re-set the schedule or turn off auto-learning |
| Geofence never goes "away" | One phone left at home; location permissions | Add all household phones; check app permissions |
| Thermostat reads warm/cold vs rooms | Sun, lamp, kitchen, or drafty wall | Relocate or use a remote room sensor |
| Thermostat reboots or Wi-Fi drops | Insufficient power (no C-wire) | Add C-wire or the maker's power adapter |
| Space heater kWh climbing | Central setback too deep for occupied rooms | Meter heaters; moderate setback or zone deliberately |

## What this won't fix

- **The ~1% per degree figure is a rule of thumb**, derived from DOE's "up to 10% for 7–10°F, 8 hours a day" guidance — not a measurement of your home.
- **Weather swamps small changes.** A setback worth 5–8% can be hidden by a 20% colder week; normalize by heating or cooling degree days.
- **Heat pump savings depend on aux behavior** more than on the schedule.
- **Adaptive recovery shortens real setbacks**, so actual savings usually land below the nominal math.
- **Cooling math is fuzzier** — sun, humidity, and duct location move it more than in winter.
- **Our tables are illustrative.** Your rate, climate, house tightness, and equipment dominate.

## Checklist: one weekend

1. Pull a winter bill and a summer/shoulder bill; compute heating therms or kWh and your variable rate.
2. Do the math: heating $/month × 1% × degrees × (hours ÷ 8). Write down your expected monthly number.
3. Find your thermostat's schedule menu; turn off permanent Hold.
4. Program night and away setbacks — 7–10°F for furnaces and resistance, 2–4°F for heat pumps and radiant.
5. Lower the "home" setpoint 1°F and live with it for a week.
6. Heat pump? Confirm system type, enable adaptive recovery, set aux lockout, and check aux runtime after 7 days.
7. Put a Kill A Watt on any space heater you use.
8. Start a two- to four-week A/B test; log therms or kWh and HDD daily.
9. Fix the top two drafts and check the filter.
10. Only then decide whether a new thermostat (or a rebate) is worth it.

## FAQ

### How much do you save per degree you lower the thermostat?

The U.S. Department of Energy's rule of thumb is that turning the thermostat back 7–10°F for 8 hours a day can save up to about 10% a year on heating and cooling — roughly 1% of heating cost per degree for each 8-hour daily setback. Lowering the setpoint by 1°F around the clock is about three 8-hour blocks, so roughly 3%. These are estimates, not promises: the percentage is larger in mild climates and leaky homes and smaller in tight or very cold ones. Compute your own dollars from your bill and verify with a weather-normalized test.

### Does it cost more to reheat the house than you save with a setback?

For a gas furnace, boiler with normal response, or electric resistance heat, no. A house loses heat in proportion to the indoor-outdoor temperature difference, so a cooler house loses less heat for every hour it sits cooler. The recovery burst only replaces part of what you didn't lose. The main exception is heat pumps, where a fast recovery can trigger expensive auxiliary strip heat, and very slow radiant systems where recovery can take hours.

### Should I use setbacks with a heat pump?

Use small ones — about 2–4°F — and a thermostat with heat-pump-aware or adaptive recovery that warms up slowly without calling for auxiliary strips. DOE's own guidance says not to do setbacks on a heat pump without a programmable or smart thermostat designed for heat pumps. One hour a day of 10 kW strip heat can cost about $30 a month more than letting the compressor do the work, which wipes out a small setback's savings. Check your aux runtime report after a week.

### Does raising the air conditioner 1 degree save money?

Yes, by the same logic in reverse: a smaller indoor-outdoor difference means less heat leaking in. Using the same rule of thumb, raising the cooling setpoint 1°F all day is roughly 3% of cooling cost, and a 4°F setup while you're at work adds a few percent more. On a $135/month cooling bill that's about $4 per degree per month — an estimate to verify on your utility's daily kWh data, not a guarantee. Ceiling fans in occupied rooms make a higher setpoint more comfortable.

### Is a smart thermostat worth it just for setbacks?

Only if you won't keep a schedule on what you already have. A basic programmable thermostat set to disciplined night and away setbacks captures most of the savings. Smart models help when your schedule is irregular (geofencing), rooms are uneven (remote sensors), you have a heat pump that needs aux-aware recovery, or your utility offers a rebate. If you already set back every night, the incremental savings from upgrading are small.

### How do I calculate my own heating cost per degree?

Find your heating dollars per month: gas bill therms minus your summer baseline therms, or winter kWh minus shoulder-month kWh, times your variable rate. Then use about 1% per degree for each 8-hour daily setback. Example: 94 heating therms × $1.30 = $122/month; an 8°F night setback ≈ 8% ≈ $10/month, and each 1°F of 8-hour setback ≈ $1.22/month. Verify with a two- to four-week A/B test normalized by heating degree days.

### What setback temperatures are reasonable?

Many households use about 68°F awake and home and 60–64°F asleep or away in winter, and around 78°F home with higher away setpoints in summer. Keep homes with infants, older adults, or medically vulnerable people warmer, use only 2–4°F setbacks on heat pumps and slow radiant systems, and don't let any home drop to where pipes could freeze — keep at least about 55°F when away in freezing weather.

## Sources

- U.S. Department of Energy, Energy Saver, [Programmable Thermostats](https://web.archive.org/web/20260628214732/https://www.energy.gov/energysaver/programmable-thermostats) (archived copy) — "save as much as 10% a year on heating and cooling by simply turning your thermostat back 7°–10°F for 8 hours a day"; greater percentage savings in milder climates; ~68–70°F while awake in winter
- U.S. Department of Energy, [Energy Saver Guide (PDF)](https://www.energy.gov/sites/default/files/2022-08/energy-saver-guide-2022.pdf) — same 7–10°F / 8-hour guidance, and the caution not to set back a heat pump without a programmable or smart thermostat designed for heat pumps
- ENERGY STAR, [Smart Thermostats](https://www.energystar.gov/products/smart_thermostats) — certification based on field data, geofencing and scheduling features, compatibility buying tips, rebate finder; treat any savings figure as an estimate for an average home
- U.S. Energy Information Administration, [Electric Power Monthly, Table 5.3](https://www.eia.gov/electricity/monthly/epm_table_grapher.php?t=epmt_5_3) — average U.S. residential price 18.31¢/kWh, July 2026 (preliminary); used as an example only
- World Health Organization, *Housing and Health Guidelines* (2018) — minimum indoor temperature of about 18°C (64°F) in cold seasons for the general population

## Related reading

- [Best smart thermostats for 2026](/blog/best-smart-thermostats-2026/) — ranked picks once you know you need one
- [Smart thermostat install cost vs DIY](/blog/smart-thermostat-install-cost-vs-diy/) — C-wire, wiring, and when to call a pro
- [Heat pump aux heat high bill — thermostat settings](/blog/heat-pump-aux-heat-high-bill-thermostat-settings/) — aux lockout, balance point, recovery
- [Kill A Watt & plug-in energy meters](/blog/kill-a-watt-plug-in-energy-meter/) — meter space heaters alongside your setback test
- [Space heater cost to run](/blog/space-heater-cost-to-run-ceramic-vs-infrared-vs-oil-filled/) — zone heating math
- [Plug-in thermostats for space heaters](/blog/plug-in-thermostats-space-heaters/) — put the space heater on a schedule too
- [Electric baseboard heater thermostats (line-voltage)](/blog/electric-baseboard-heater-thermostats-line-voltage/) — room-by-room setbacks
- [Weatherstripping & draft stoppers](/blog/best-weatherstripping-draft-stoppers/) — make the setback hold
- [HVAC air filters & MERV](/blog/hvac-air-filters-merv-efficiency/) — airflow for faster, cheaper recovery
- [Lower your electric bill: priority checklist](/blog/lower-electric-bill-priority-checklist/) — this-month order of operations
- [Start Here](/start-here/) — full suggested reading order

## Bottom line

**Roughly 1% of your heating cost per degree for each 8-hour daily setback, and about 3% per degree if you lower the setpoint all day** — compute it from your own bill, check it against heating degree days for two to four weeks, keep heat pump and radiant setbacks small, and program the thermostat you already have before buying a new one. Summer works the same way in reverse. Then go after the bigger heating moves on [Start Here](/start-here/). Amazon links may earn a commission as an Associate ([disclosure](/disclosure/)).

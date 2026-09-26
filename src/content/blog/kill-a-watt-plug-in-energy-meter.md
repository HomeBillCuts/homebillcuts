---
title: "Kill A Watt & Plug-In Energy Meters: Measure Before You Upgrade"
description: "Bill-first US guide to Kill A Watt and plug-in energy meters — measure-first walk (standby vs running vs 24h kWh), situation priorities, buyer decision tree, install troubleshooting, honest limits, and a verified Amazon shortlist. No guaranteed savings."
pubDate: 2026-09-18
updatedDate: 2026-09-26
faqs:
  - question: "Will a Kill A Watt or plug-in meter lower my electric bill by itself?"
    answer: "No. A meter only shows watts and kWh. Your bill drops when you change something—unplug a vampire cluster, replace a failing fridge, stop running a space heater on a high central setpoint, or skip a gadget you don’t need. Measurement prevents bad purchases; it doesn’t cut kWh on its own."
  - question: "Can I use a Kill A Watt on a dryer, range, water heater, or EV charger?"
    answer: "No. Classic plug-in meters like the P4400 are for typical US 120V receptacles, usually capped near 15A. Dryers, ranges, most water heaters, and EVSE are 240V (or hardwired) and need different tools—start with the Emporia Vue vs Sense guide for panel-level questions, and hire a qualified electrician for panel work."
  - question: "Should I buy a classic Kill A Watt P4400 or an energy-monitoring smart plug?"
    answer: "Buy the P4400 (or similar LCD meter) when you want one cheap tool you can move room to room and you don’t need schedules. Buy a monitoring smart plug when you’ve already identified a load worth cutting on a timer and you want measure + automate in one outlet. Many households start with the meter, then add smart plugs only for clusters that earned a cutoff."
  - question: "How long should I leave a meter on a refrigerator?"
    answer: "Hours, not seconds. Compressors cycle; a 10-second snapshot during a run or a quiet stretch misleads you. Leave the meter for at least several hours—ideally a full day—so kWh includes on and off periods. Then apply your bill’s rate: monthly $ ≈ kWh × your $/kWh. Results vary with door openings, ambient temperature, and defrost."
  - question: "Why does my Kill A Watt show weird watts or VA that don’t match the nameplate?"
    answer: "Nameplates are often maximum or design ratings, not continuous draw. Power factor, motor startup, and cycling loads make instantaneous watts bounce. Prefer accumulated kWh over hours for bill decisions. Also check that the appliance is fully seated in the meter and the meter is fully seated in the wall—loose plugs cause odd readings and heat."
  - question: "Is a whole-home monitor better than a Kill A Watt?"
    answer: "Different jobs. A plug-in meter answers one 120V cord at a time and costs little. A panel monitor (Emporia Vue, Sense, and similar) sees whole-home and many 240V circuits you cannot meter with a Kill A Watt. Start with the cheap meter when your question is “is this garage fridge a villain?” Graduate to a panel tool when plug-level questions are exhausted."
---

A plug-in watt meter does **not** save kilowatt-hours by sitting in the wall. It stops you from buying the wrong gadget — and it proves which 120V loads are actually worth cutting, replacing, or ignoring.

If you’ve ever stared at a high bill and guessed — “must be the fridge,” “must be the TV,” “I need a whole-home monitor” — this guide is the cheap middle step. A classic **Kill A Watt–style meter** (and, later, energy-monitoring smart plugs) tells you what a *specific* 120V appliance actually draws: standby watts, running watts, and accumulated kWh. That truth is usually cheaper than another smart widget.

This page is **bill-first**: honest framing, a stronger measure-first walk with bill math using *your* rate, situation priorities and a do-not list, a buyer decision tree table, install/use troubleshooting, honest limits, and a short post-setup checklist that can actually move kWh. No fake dollar guarantees.

Start with the free path: the [priority checklist](/blog/lower-electric-bill-priority-checklist/) and [Start Here](/start-here/). Position this tool correctly:

- **Plug-in meter (this guide):** one 120V cord at a time — fridge, AV strip, window AC, oil-filled heater, mattress pad, desktop nest.
- **[Smart plugs for vampire power](/blog/best-smart-plugs-vampire-power/):** cut standby *after* you’ve measured it.
- **[Emporia Vue vs Sense](/blog/emporia-vue-vs-sense/):** whole-home / circuit visibility when plug-level questions are exhausted — including 240V mysteries a Kill A Watt cannot touch.

No guaranteed dollar savings. Your rates, climate, and habits decide the math.

## Honest framing: the meter prevents bad purchases

A Kill A Watt does not “optimize” your home. It answers one question: **what is this cord doing?** That answer is valuable when you’re about to spend money on smart plugs, a space heater, a second freezer, a window-AC gadget, or a panel monitor — and when you’re arguing with yourself about whether the garage fridge is still worth feeding.

It helps most when:

- One or two 120V appliances are the mystery (extra freezer, garage fridge, “always warm” AV rack).
- You’re about to buy [smart plugs](/blog/best-smart-plugs-vampire-power/), a [zone heater](/blog/oil-filled-space-heaters-zone-heating/), or a “monitoring” gadget and want numbers first.
- Utility interval data shows a baseline bump and you want appliance-level proof without opening the panel.
- You’re teaching kids or roommates what “standby” actually costs in *your* house.

It helps less when:

- You haven’t done the free checklist items yet (bill reading, thermostat schedules, dirty filters, obvious drafts).
- The only question is 240V (dryer, range, water heater, EVSE) — wrong tool; see [Emporia Vue vs Sense](/blog/emporia-vue-vs-sense/).
- You already know the waste (empty rooms at 72°F all day) and just need to change setpoints.
- You’re shopping for a panel monitor as a hobby when a $30 meter would answer the only question you have.

**Honest framing:** Measurement prevents bad purchases. Your bill drops only when you *act* — unplug, schedule a cutoff, repair/replace a dying load, or skip the gadget. The display alone changes nothing.

## Measure-first walk: standby vs running vs 24h kWh

You’re collecting three different numbers. Don’t mix them up. Spend one focused session — a Saturday morning is enough for most houses — before you buy another pack of smart plugs.

1. **Read your bill once.** Note your real $/kWh (and whether you’re on time-of-use). Don’t invent a national average. Write the number on a sticky note next to the meter.
2. **Pick one suspect.** Garage fridge, AV strip, [oil-filled heater](/blog/oil-filled-space-heaters-zone-heating/), [window AC](/blog/window-ac-smart-controllers-ceiling-fan-savings/), heated mattress pad, desktop/charger nest. One load per session beats twenty half-finished readings.
3. **Plug meter into wall → appliance into meter.** Seat both firmly. Note the outlet (GFCI? shared with a surge strip?) so you can reproduce the setup later.
4. **Capture standby / idle watts.** Device “off” but plugged in (clock, network wake, soft-off). Useful for AV clusters and charger nests before you buy [smart plugs](/blog/best-smart-plugs-vampire-power/).
5. **Capture running watts.** On and doing work (heater on High, AC compressor running, PC under load). Treat this as a snapshot — duty cycle still matters.
6. **Leave it long enough for accumulated kWh.** Minutes for a lamp brick; **hours, ideally a full day**, for fridges, freezers, and anything that cycles. Compressors lie in 10-second snapshots.
7. **Do the bill math with YOUR rate.** Templates only — plug in numbers from *your* sticky note:
   - `kWh ≈ (average watts × hours) / 1000`
   - `Daily $ ≈ daily kWh × YOUR $/kWh`
   - `Monthly $ ≈ daily $ × 30` (or use the meter’s multi-day kWh ÷ days × 30 × rate)
8. **Decide one action.** Ignore, unplug / schedule cutoff, repair/replace, borrow another week of data, or escalate to a [whole-home monitor](/blog/emporia-vue-vs-sense/).

**Fridge / freezer rule:** leave it on for **hours**, ideally a full day. Compressors cycle. A 10-second reading during a quiet stretch or a defrost spike will lie to you. Door openings, garage heat, and dirty coils all move the number — measure under *your* normal use.

**Example shape only (not a promise):** if something averages 100W for 8 hours/day, that’s about 0.8 kWh/day. Multiply by *your* rate. We will not invent a national average or promise a dollar cut.

**What “good enough” looks like:** you can explain the load in one sentence (“garage fridge ≈ X kWh/day at our rate”) and you’ve picked the next lever — unplug, smart-plug schedule, replace, or leave it alone.

## Situation priorities + do-not list

**Do these in order:**

1. **Finish free checklist wins** — thermostat setpoints, dirty filters, obvious drafts — before shopping meters or plugs ([priority checklist](/blog/lower-electric-bill-priority-checklist/)).
2. **Meter the loudest mystery first** — second fridge/freezer, AV rack that stays warm, heater you’re stacking on a high central setpoint.
3. **Prefer hours of kWh over ten-second watts** for cycling loads.
4. **Act on one result** before metering the whole house — unplug, schedule, repair, or consciously ignore.
5. **Only then automate** with [smart plugs](/blog/best-smart-plugs-vampire-power/) for clusters that earned a nightly cutoff.
6. **Escalate to panel monitoring** when the mystery is whole-home, 240V, or HVAC — [Emporia Vue vs Sense](/blog/emporia-vue-vs-sense/).
7. **Recheck the next bill’s kWh** after you change something. If usage didn’t move, the spike wasn’t that plug load.

**Buy (or borrow) a plug-in meter now if:**

- One or two 120V appliances are the open question.
- You’re about to buy smart plugs, a space heater, or a monitoring gadget and want numbers first.
- You’re arguing about keeping a second fridge or freezer.
- Interval data shows a baseline bump and you want cord-level proof without opening the panel.

**Wait if:**

- Free checklist items are still undone.
- The only question is 240V / hardwired.
- You already know the waste and just need to change habits.
- A neighbor or library already has a meter you can borrow for a weekend.

**Do not:**

- **Do not use a plug-in watt meter on dryers, ranges, ovens, most electric water heaters, or EV chargers** — those are 240V (or hardwired). Wrong tool; see [Emporia](/blog/emporia-vue-vs-sense/).
- **Do not open the electrical panel** to “make a Kill A Watt work.” Panel / CT work is clamp territory — hire a qualified electrician if you’re not qualified.
- **Do not put food refrigerators or freezers on a smart schedule** after you meter them. Measure yes; automated cutoff usually no (food safety).
- **Do not park a 1500W heater or hard-working window AC on a 10A-continuous monitoring plug** just because the peak rating says 15A. Read continuous vs peak.
- **Do not daisy-chain** meter → surge strip → another strip → heavy load and then blame the meter for heat or odd readings.
- **Do not treat meter accuracy as utility-grade billing evidence** in a dispute with your utility. Household decisions yes; legal metering no.
- **Do not optimize an 8W charger nest** while an attic hatch or door gap dumps conditioned air — weatherize and setpoints still outrank milliwatts.

## Hard limits (read before you plug anything in)

Typical Kill A Watt–class meters and most monitoring smart plugs are built for **US 115–125VAC receptacles** and **about 15A max** (~1875VA on many P4400-class labels; smart plugs often list 15A / 1800W). That is *not* universal — always read the label on *your* unit.

**Never use a plug-in watt meter on:**

- **240V** dryers, ranges, ovens, most electric water heaters, or EV chargers
- Hardwired loads with no cord/plug
- Anything that requires opening the **electrical panel**
- Loads above the meter’s amp rating (space heaters near 1500W are already close to the ceiling — check both meter and circuit)

If your question is “what’s the dryer doing?” or “is the heat pump using strip heat?”, skip this guide’s product shortlist and go to [Emporia Vue vs Sense](/blog/emporia-vue-vs-sense/). Wrong tool = wrong (or dangerous) answer.

## Safety (not electrical contracting advice)

This is consumer product guidance for ordinary grounded outlets — not a substitute for a licensed electrician or the device manual.

- Use a **grounded** outlet. Don’t defeat ground with cheap ungrounded adapters just to make the meter fit.
- Stay **inside the meter’s rating** and the circuit’s breaker. If the plug or meter feels hot, stop.
- Don’t bury the meter under rugs, cushions, or closed cabinets — heat needs to escape.
- Don’t put medical devices, life-safety equipment, sump pumps, or critical always-on gear on a metering setup you’ll forget about or on a smart plug that can cut power.
- Unplug the meter (and the appliance) to move it. Don’t yank by the cord under load if you can avoid it.
- Refrigerators and freezers: metering is fine; **automated cutoff** is usually a bad idea (food safety). Measure, don’t schedule them off.
- Window ACs and heaters: confirm the cord, outlet, and meter ratings before stacking adapters. Strategy for heat belongs in [oil-filled zone heating](/blog/oil-filled-space-heaters-zone-heating/); cooling automation belongs in the [window AC / smart controllers guide](/blog/window-ac-smart-controllers-ceiling-fan-savings/) — after you have runtime numbers.

If anything looks damaged, scorched, or undersized for the load — stop and rethink. When in doubt on panel or 240V work, hire a pro.

## Room-by-room: where a plug meter earns its keep

### Extra freezer / second fridge

Classic bill villains in garages and basements — especially old units in hot spaces. Meter for a full day. Cross-check whether you still need the second box. Do **not** put food storage on a smart schedule.

### AV / vampire cluster

TV + soundbar + game console + streaming stick + soundbar sub. Meter the **whole strip** as used, then hunt the worst offender. After you have numbers, the [vampire-power smart plugs guide](/blog/best-smart-plugs-vampire-power/) is the cutoff step.

### Window AC

Many 120V window units fit a meter if you stay inside amp ratings and don’t defeat a dedicated circuit’s intent with sketchy adapters. Measure a hot afternoon’s kWh, then decide whether a [smart IR controller / fan strategy](/blog/window-ac-smart-controllers-ceiling-fan-savings/) is worth it — automation only pays when runtime drops.

### Oil-filled heater (zone heat)

Near 1500W on High — you’re close to the 15A world. Meter to learn *hours*, not to “optimize” a heater you’re stacking on a high central setpoint. Strategy first: [oil-filled zone heating](/blog/oil-filled-space-heaters-zone-heating/).

### Heated mattress pad

Usually modest watts vs a space heater — still worth a night’s kWh if you’re justifying a deeper thermostat setback. See [heated mattress pads](/blog/heated-mattress-pads-zone-heating/).

### Desktop / charger nest

Monitors, docks, USB bricks, printers. Idle watts surprise people. Measure the strip, then cut with a switched strip or smart plug you’ll actually use.

### Garage fridge / shop loads

Same as extra freezer: heat and age matter. Battery chargers and always-on shop Wi‑Fi gear are secondary suspects.

### Do-not-waste-time list

Skip marathon metering on:

- LED nightlights that already draw near nothing
- Phone chargers you’ve already checked at ~0W when the phone is unplugged
- Single USB bricks you already unplug
- Anything 240V (wrong tool)

Spend the meter’s time on cycling loads and multi-device clusters.

## Buyer decision tree

Use this after the measure-first walk — not instead of reading the amp label on the tool you buy.

| Your situation | Lean toward | Why |
| --- | --- | --- |
| You want one cheap tool to move room to room; no app needed | **Classic LCD Kill A Watt P4400** | Watts / VA / amps / kWh on the display; best “truth before shopping” default |
| You’ve already proven a cluster deserves a nightly cutoff | **Energy-monitoring smart plug** (15A-class when the load needs it) | Measure + schedule in one outlet; see [smart plugs guide](/blog/best-smart-plugs-vampire-power/) |
| You want onboard $/kWh on the meter itself | **Kill A Watt EZ / P4460** *if clearly in stock* — else P4400 + your bill | EZ stock comes and goes; we won’t invent a flaky CTA. P4400 + sticky-note rate is enough |
| The mystery is whole-home, HVAC, or 240V | **Emporia / Sense–class panel monitor** | Plug meters cannot see dryers, ranges, WH, EVSE — [Emporia vs Sense](/blog/emporia-vue-vs-sense/) |
| Idle cost is pennies after a real duty cycle | **Skip / stop shopping** | Spend the cash on LEDs, drafts, or the checklist — not another gadget |
| A neighbor, tool library, or utility loaner has a meter | **Borrow for a weekend** | Same answers; zero purchase if one weekend of data is enough |
| Load is dryer / range / water heater / EV / hardwired | **Do not use a plug-in meter** | Wrong voltage / wrong interface; hire or use panel CTs |

Prioritize a grounded outlet, a clear amp rating, and a plan for what you’ll *do* with the number. Deprioritize rainbow apps, “save $X/month” packaging, and buying six monitoring plugs before you’ve metered one cluster.

### Amp / watt math (quick)

At 120V, 15A ≈ 1,800W theoretical. Real continuous loads should stay **well under** the label. A 1500W heater on High is already near the ceiling of many meters and many 15A circuits — especially if anything else shares the breaker. Prefer listed (UL/ETL) hardware. Monitoring smart plugs sometimes advertise **15A peak** with a lower **continuous** rating (e.g. 10A continuous) — that difference matters for heaters and hard-working window ACs.

## Amazon shortlist (verified)

> **Affiliate disclosure:** As an Amazon Associate I earn from qualifying purchases. Some links below are affiliate links (including Amazon). We may earn a commission if you buy — at no extra cost to you. We do not guarantee bill reductions. Full details: [Disclosure](/disclosure/).

### 1) P3 P4400 Kill A Watt Electricity Usage Monitor — primary pick

**Why it makes the list:** The standard portable LCD meter for US 120V plug loads. Watts, VA, amps, Hz, and cumulative kWh without an account or app. Ideal “measure before you upgrade” tool already used elsewhere on this site.

**Watch-outs:** ~115VAC class / **15A** style rating (~1875VA on typical P4400 labeling) — not for 240V. Accuracy is fine for household decisions, not utility billing disputes. You still do the dollar math with *your* rate.

- P3 P4400 Kill A Watt: [View on Amazon](https://www.amazon.com/dp/B00009MDBU/?tag=homebillcuts-20)

### 2) Kasa Matter KP125M energy-monitoring smart plug (2-pack) — measure + automate

**Why it makes the list:** When a cluster has already earned a nightly cutoff, monitoring plugs show idle watts in the app *and* let you schedule. This Matter KP125M pack is listed at **15A / 1800W max** — better headroom than 10A-continuous plugs for many (not all) 120V loads.

**Watch-outs:** Needs 2.4 GHz Wi‑Fi / Matter setup you’ll maintain. Monitoring doesn’t save energy until you act. Still not for heaters you shouldn’t remote-cut, medical loads, or 240V. Use as the automation step after (or alongside) a portable meter — not as your only diagnostic forever. Full cutoff patterns: [best smart plugs for vampire power](/blog/best-smart-plugs-vampire-power/).

- Kasa Matter KP125M 2-pack: [View on Amazon](https://www.amazon.com/dp/B0BYGRLRS1/?tag=homebillcuts-20)

### 3) Emporia energy-monitoring smart plug (1-pack) — disclose the continuous limit

**Why it makes the list:** Handy if you already use Emporia’s app ecosystem and want per-outlet kWh with scheduling. Fine for lamps, chargers, and modest electronics.

**Watch-outs:** Listing specifies **10A maximum continuous load** and **15A max peak** (peak only for limited time per day on the copy we verified). That is **not** the same as a full-time 15A Kill A Watt. Do **not** park a 1500W heater or a hard-working window AC on a 10A-continuous plug. Prefer the P4400 for portable diagnostics; prefer a 15A-rated monitoring plug (or a mechanical switched strip) for heavier 120V loads. If you outgrow plug-level questions, the panel products live in [Emporia Vue vs Sense](/blog/emporia-vue-vs-sense/).

- Emporia energy-monitoring smart plug: [View on Amazon](https://www.amazon.com/dp/B0CLVTKYQ9/?tag=homebillcuts-20)

### What we omitted on purpose

- **P4460 Kill A Watt EZ:** real product family, but live Amazon listings were unavailable / messy at last check — we won’t invent a stock CTA. If you need onboard $/kWh, check current P3 EZ stock yourself or use the P4400 + your bill.
- Random no-name “watt meter” ASINs with unclear ratings.
- Panel monitors here — they belong in the [Emporia vs Sense](/blog/emporia-vue-vs-sense/) comparison.

## Install / use troubleshooting

| Symptom | Likely cause | What to try |
| --- | --- | --- |
| Watts bounce wildly / look “wrong” | Motor startup, cycling compressor, power factor, short sample | Prefer accumulated **kWh over hours**; ignore single-second spikes for bill decisions |
| Fridge “uses nothing” for minutes then spikes | Normal compressor cycle (or defrost) | Leave the meter **several hours to a full day**; include door openings as you actually live |
| Reading is zero / blank | Meter not fully seated, outlet dead, GFCI tripped, device not drawing | Reseat meter and plug; test outlet with a lamp; reset GFCI; confirm the device is actually on |
| Meter or plug feels warm/hot | Overload, loose connection, daisy-chained strips, failing contacts | Unplug immediately; check watts vs rating; one strip max; replace damaged gear |
| Won’t fit with a bulky cord + meter | Right-angle plugs, furniture tight to wall, GFCI / decorator plates | Try a different receptacle; don’t force bent prongs; avoid sketchy “thin” adapters under load |
| Surge strip + meter + strip stack acts weird | Daisy-chain, shared ground/neutral noise, overloaded strip | Meter the cluster **as used** on one strip; don’t cascade strips; stay under strip amp rating |
| GFCI trips when you insert the meter | Sensitive GFCI, damaged cord, moisture, shared wet-location circuit | Reset once; inspect cords; try a known-good dry receptacle; don’t bypass GFCI |
| “Inaccurate” kWh vs the utility bill | Different loads, TOU buckets, meter tolerance, partial-day sample | Kill A Watt is for **one cord**, not the whole service; compare like periods; use for relative decisions |
| Monitoring smart plug watts disagree with Kill A Watt | Different sample windows, PF handling, cheap metering tolerance | Treat both as relative; trust multi-hour kWh trends over single watt snapshots |
| Display hard to read behind furniture | Normal for deep entertainment centers | Meter for a day, photograph the kWh, then remove — don’t live with a meter wedged forever |

## Honest limits (what a meter will not fix)

A plug-in energy meter is a **truth tool for 120V corded loads**. It will not:

- Cut kWh by itself while you admire the display.
- See dryers, ranges, water heaters, EVSE, or other 240V / hardwired loads.
- Replace thermostat discipline, dirty-filter changes, or weatherization ([priority checklist](/blog/lower-electric-bill-priority-checklist/)).
- Make an Always-On smart-plug schedule magically save energy.
- Turn a bargain outlet into a safe heater controller.
- Substitute for AFCI/GFCI, surge panels, or an electrician on panel work.
- Win a formal billing dispute with utility-grade accuracy.

If your bill spike is seasonal heating or water heat, start with setpoints, filters, and the right big lever — then use the meter to clean up the 120V mysteries that remain.

## Post-setup checklist that can move kWh

Measurement only pays when you change something. After one real duty cycle on a suspect load:

1. **Write the number down** — standby W, running W (if useful), and kWh over N hours, plus *your* $/kWh math.
2. **Unplug or mechanically switch off** any vampire cluster whose idle cost annoyed you — no app required.
3. **Add a smart-plug schedule** only for clusters that earned a nightly cutoff ([smart plugs guide](/blog/best-smart-plugs-vampire-power/)); keep fridges/freezers off automated cutoffs.
4. **Repair or replace** a fridge/freezer whose daily kWh is absurd for its size *and* you’re ready for the capital — don’t “optimize” a dying sealed system with gadgets.
5. **Skip the gadget** you were about to buy if the meter showed the load was already fine.
6. **Escalate** to [Emporia Vue vs Sense](/blog/emporia-vue-vs-sense/) only if the mystery is whole-home or 240V.
7. **Glance at the next bill’s kWh**, not marketing claims. If usage didn’t move, admit the spike was HVAC/water heat and pivot — still no guaranteed savings.

## Habits that multiply (or replace) a meter weekend

- Put the PC to sleep/hibernate on a real policy; don’t expect a meter (or plug) to babysit a machine that never sleeps.
- Unplug the secondary garage fridge if it’s half empty and ancient — measure first if you’re unsure.
- Finish high-hour [LED swaps](/blog/led-bulbs-save-money-wattage-guide/) before obsessing over lamp transformers.
- Teach roommates what the sticky-note rate means so “standby” becomes a household number, not a lecture.
- Borrow before you buy if a utility or library loaner program exists in your area.

## Related reading

- [Lower your electric bill: priority checklist](/blog/lower-electric-bill-priority-checklist/) — where measurement sits vs free habits
- [Best smart plugs for vampire power](/blog/best-smart-plugs-vampire-power/) — cut standby after you measure it
- [Emporia Vue vs Sense](/blog/emporia-vue-vs-sense/) — whole-home / 240V when a plug meter isn’t enough
- [LED bulbs wattage guide](/blog/led-bulbs-save-money-wattage-guide/) — lighting swaps; meter lamp clusters if you want proof
- [Oil-filled space heaters for zone heating](/blog/oil-filled-space-heaters-zone-heating/) — high-watt 120V heat done as strategy, not stack
- [Window AC smart controllers & ceiling fans](/blog/window-ac-smart-controllers-ceiling-fan-savings/) — measure runtime before you automate cooling
- [Heated mattress pads for zone heating](/blog/heated-mattress-pads-zone-heating/) — modest watts vs space heaters; a night’s kWh helps the setback case
- [Start Here](/start-here/) — full reading order

## Bottom line

A Kill A Watt–style meter is the cheapest way to turn “I think the fridge is bad” into a number you can trust enough to act on. It won’t lower the bill by sitting in the wall. It *will* keep you from buying the wrong smart plug pack, the wrong panel monitor, or another heater you stack on a high setpoint.

**Next steps:**

1. Finish anything obvious on the [priority checklist](/blog/lower-electric-bill-priority-checklist/).
2. Meter one suspect 120V load for a real duty cycle (hours for fridges) and do the math with *your* rate.
3. Act: unplug, schedule, repair/replace, or consciously skip.
4. If standby earned a cutoff, use the [smart plugs guide](/blog/best-smart-plugs-vampire-power/).
5. If the mystery is whole-home or 240V, graduate to [Emporia Vue vs Sense](/blog/emporia-vue-vs-sense/).
6. Otherwise return to [Start Here](/start-here/) and pick the next lever — still no guaranteed savings.

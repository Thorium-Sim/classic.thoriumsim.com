---
id: card_engine_control
title: Engine Control
---

## Overview

The engine control card is used to fire up the engines in the ship and begin
moving toward a destination. On this screen, users will see primarily two types
of engines: impulse engines and warp engines. Each type of engine may or may not
exist on a given starship, based on the size and type of ship. Additional types
of engines may also be configured based on the needs of the simulator and the
universe.

![Engine Control](/img/card_engineControl.jpg)

## Impulse Engines

Impulse engines operate at speeds slower than the speed of light. The default
setting is to have 5 speeds, ranging from 0.25 impulse speed to 1.25 impulse
speed, with the upper extreme (1.25) considered a Destructive Impulse speed.
Additional speeds may be configured when necessary. The speed of the ship may be
set in two ways:

1.  By clicking on the speed setting or the box below it in the upper half of
    the screen, or
2.  By clicking on the gray button with the name of the speed setting.

The yellow bar below the list of speeds indicates the ship's current speed
setting. The green bar indicates the level of power in the system; the speed of
the ship cannot be set to a higher setting than the allocated power; in other
words, the yellow bar will never exceed the green bar in length. Power
allocation is set on the Power Distribution card, and will not be explained in
detail here.

The heat bar represents the temperature of the impulse engines, which must be
monitored for a successful flight. The red bar will rise based on the speed of
the impulse engines. The heat level can be reduced by clicking the "Coolant"
button to flush the system with coolant. The blue bar, representing the level of
coolant allocated to the impulse engine system, will decrease proportionately.
If the coolant is depleted, additional coolant can be allocated to the Impulse
Engines system on the [Coolant Control](/docs/card_coolant_control.html) card.

## Warp Engines

Warp engines operate at speeds faster than the speed of light, and traditionally
have 10 speeds, including a range from Warp 1 through Warp 9.54, with the
fastest speed (9.54) considered Destructive Warp. Additional speeds can be
configured based on the simulator needs.

The warp engines (and any other configured engines) operate essentially like the
impulse engines, with speeds being set by clicking on the speed gauge at the top
of the screen or by clicking the gray buttons listing each speed. Power
distribution and speed are again represented by green and yellow bars,
respectively. The warp engines have a separate heating and cooling system,
managed with coolant in the same way as the impulse engines.

The full stop button will bring the ship to a complete stop, regardless of which
engines are engaged.

## Core Control

![Engine Control Core](/img/core_engineControl.jpg)

Use the simple drop-down in the Engine Control Core to set the speed of the ship
from behind the scenes. The settings here are subject to the limitations of
power distribution, which can be changed in the [Systems Core](#). In other
words, even from the Engine Control Core, the speed cannot be set any higher
than the level of power which has been allocated to the engine system.

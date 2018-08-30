---
id: card_railgun
title: Railgun
category: cards
subcategory: Tactical
---

The railgun is a system for destroying incoming projectiles. It is a weapon which must be loaded prior to firing and fires based on a simplified sensor grid.
![Railgun Card](/img/railgun.jpg)
_Note: Be sure to add the railgun system to your simulator config._
The sensor grid shows incoming projectiles only. The railgun diagram shows the loaded bolts. If the Railgun Loading is on one of the stations on the simulator, then loading must be done from that card. Otherwise, loading can be done from the same card that fires the railgun.
To fire the railgun, you just have to click and hold on the sensor grid. A red dot will show where you fired. If you hit an incoming projectile enough times, it will explode and you won't be harmed by it.

## Core

![Railgun Core](/img/railgun-core.jpg)
The railgun core allows the flight director to choose how many bolts are currently loaded, how many can be loaded, and how many are available to be loaded.
The projectiles from the railgun come from hostile sensor contacts. You must first change a sensor contact to be hostile.
![Hostile Sensor Contact](/img/hostile-contact.jpg)
Hostile contacts appear with a red shadow on the sensors grid.
![Hostile Contact](/img/hostile-indicator.jpg)
Hostile contacts appear in the Battle Core. The Battle core is where you can coordinate the attacks of the hostile contacts.
![Battle Core](/img/battle-core.jpg)
You can control several factors:

- The speed at which projectiles move from the hostile contact to the center of the sensors grid.
- How many hitpoints a projectile has. This is the number of times the railgun has to hit the contact before it explodes. Use a smaller number for an easier projectile.
- The hostile contacts. You can hover on the contact icon to see which contact it is on the sensors grid (if you have a sensors grid component on your screen). You can click the 'Fire' button to immediately fire a projectile from that contact. Checking the 'Auto-fire' button will make the contact automatically fire a projectile every 12 - 15 seconds.
  The projectile will be destroyed in one of two cases:

1.  It's hitpoints were depleted down to zero through railgun fire.
2.  It reached the center of the sensors grid, and impacted the simulator.

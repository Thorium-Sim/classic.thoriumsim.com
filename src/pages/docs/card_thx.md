---
id: card_thx
title: THX-1138
---

The THX-1138 is a hypercard (meaning it is intended to be used on many or all of
the stations at once). It was originally used in the Magellan as a
planet-busting super weapon. However, in Thorium, it's uses can much more
varried.

The basic principle is having every single station charge up the device. Once
all of the stations have charged their sectors, the executive officer is able to
activate the device. It could be used as a weapon; it could also be used as a
wormhole generator, transwarp device, mass-transporter, phase cloaking device,
or anything else that might fit in your mission.

How is this done? By changing the name of the system. The THX cards only use the
system's name, so you could name it 'Wormhole Generator' or 'Phase Cloaking
Device', and that is what the crew would think they are using.

![Crew THX Card](/docs/card_thx1.jpg)

The crew's THX screen shows the ship in the middle and a charging bar on the
right side. Holding down the 'Charge' button will increase the charge. Once the
charge bar is at the top, the crewmember can press the 'Lock Sector' button.
This will lock out their station, making them unable to do anything until the
device is activated.

![Executive THX Card](/docs/card_thx2.jpg)

The executive officer's screen looks similar. However, they see all of the
charge statuses of all of the other stations (indicated with yellow bars on the
ship diagram). Once all of the stations have been locked, the executive officer
can press the 'Activate' button to use the device. The executive officer can
also 'Deactivate' the device.

**Note:** The executive officer station must be configured in the simulator's
station config, as shown below:

![Executive Station Settings](/docs/config_exec.jpg)

## Core

![THX Core](/docs/core_thx.jpg)

The THX Core is simple. The very top shows the activated or deactivated status.
Double-clicking will toggle the activated state.

Below that are three buttons. "Reset THX" will reset all of the charges to 0 and
unlock all of the stations. "Engage THX Control" will change all of the stations
to be on the 'THX' card. "Disengage THX Control" will change all of the stations
to not be on the THX card.

Below that is the list of all of the clients, with the client IDs and the
station name. Next to each is the charge percent. If the charge percent is red,
the client has been locked.

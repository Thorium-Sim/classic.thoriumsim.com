---
title: Bridge Map
category: cards
subcategory: Command
---






The bridge map card allows the command officers on the ship to see all of the stations on the bridge. Hovering over the stations provides a description of the station. The descriptions are added in the Station Set config  of the Simulator config screen.

![Bridge Map Card](/img/bridge-map-card.jpg)

## Core

The core allows the flight director to specifically target an action at any client on the bridge. These are the same actions which are provided by the actions core, and can be done individually by choosing an action and clicking on the client to target.

![Bridge Map Core](/img/bridge-map-core.jpg)

## Configuring the Bridge Map

For the bridge map to work properly, both for the core and for the card, a few things have to be done.

1) A bridge map file must be created for the set in question and either added to the simulator in the simulator's assets config or assigned to a set. If the bridge map file is assigned to a set, that set must be used when assigning clients at the beginning of a flight.

2) The file **must** be an SVG. Any other kind of image will not work.

3) Each client on the map must have its own SVG element within the SVG. Any kind of element can work, whether it is a `rect`, `path`, or `ellipse`. It just has to be it's own element.

4) Each client SVG element must have a `data-client` attribute added to it. This attribute represents the client ID of the client that the element corresponds to. This makes it possible to send actions to that station from the core and look up the station assigned to that client on the crew station.

5) There are two optional data attributes which can be added. `data-name` will be the name of the client; `data-description` will be the description. Note: These attributes will be overridden by the station's name and description if the `data-client` attribute is set and if a station is assigned to that client. This is useful for non-station clients, such as viewscreens and other objects on the bridge which should be labeled.

Other than that, any SVG can be used. This provides a wide range of possible bridge maps. 

Here is a sample SVG (... represents omitted sections):

```
<svg clip-rule="evenodd" fill-rule="evenodd" stroke-linecap="round" stroke-miterlimit="1.41421" viewBox="0 0 173 92">
 ...
  <path data-name="Sensors" data-description="I see things." data-client="Voyager Sensors.local" d="m86.495 66.48c5.381-8.396 6.079-15.429 6.134-20.88h-9.349c-.173 5.126-.87 10.066-4.629 15.623z" />
...
</svg>

```

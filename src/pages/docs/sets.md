---
id:sets
title:Client Sets
---

![Set Config](/docs/set_config.jpg)

Sets are connections between clients and a specific station in a specific
station set on a specific simulator. They are called sets because they should
correspond to the physical clients inside of a simulator set. Configuring sets
allows the flight director to automatically assign all of the connected clients
to their corresponding simulators and stations.

Sets must be configured before starting the flight, but after clients have been
connected.

* Click "Add Set" to create a new set. _Note: When you apply a set to a flight,
  it will set the name of the simulator to the name of the set._
* Choose the simulator you want to configure.
* Choose the station set you want to configure.
* Choose the station you want to configure. Note that you can choose to have a
  client show the viewscreen or be blacked out.
* Select all of the clients you want that station to run on. You can choose
  multiple clients, but each client can only run one station.

Then, when you [start your flight](/docs/starting_flight.html) you can choose
the set at the client config screen. All of your clients will be configured to
run whichever station is selected for that simulator, station set, and client.

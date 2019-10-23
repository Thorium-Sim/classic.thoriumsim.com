---
title: Guide for Developers
category: developers
---
**Note: Development is starting for Thorium 2.0. If you are interested in participating, please reach out in the Thorium Discord server, here:** [**https://discord.gg/UvxTQZz**](https://discord.gg/UvxTQZz)****

Thorium is built on a number of technologies and tools:

* [React](https://facebook.github.io/react/) for the frontend
* [Apollo Client](http://www.apollostack.com/) for the data layer
* [GraphQL](http://graphql.org) for the transmission layer
* [NodeJS](http://nodejs.org) for the server

Be sure to learn about these technologies before diving in too deep.

Thorium also uses a number of patterns, such as:

* Subscriptions and PubSub - this provides reactive updates to the frontend
  views.
* Dynamic frontend views which change and respond to backend data. This is what
  allows Thorium to dynamically change what simulators, stations, and cards show
  on an individual client.

Thorium uses a unique vocabulary:

* **Simulator**: a virtual representation of a spaceship or other vessel.
  Simulators have **StationSets**, **Stations** **Systems**, Crew, Decks, Rooms,
  Inventory, etc. Examples of Simulators include the USS Voyager, USS Odyssey,
  etc.
* **Station**: an individual grouping of **Cards**. Belongs to a **Simulator**.
  Stations have **Cards**. Examples of stations include Helm, Tactical, Command,
  Communications, Operations, Engineer, etc.
* **StationSet**: a group of stations for a specific **Simulator**.
  **Simulators** can have multiple StationSets for different groups and
  missions. For example, you can have a station set for 8 crew members, 12 crew
  members. You can have a station set for school flights (with simpler cards) or
  you can have a level-3 station set for experienced groups.
* **Card**: an individual screen. Typically control a single aspect of the
  simulator. Belongs to at least one **Station**. Examples include Targeting
  Grid, Engine Control, Thrusters, Security Teams, etc.
* **System**: a representation of the capabilities of a simulator. Systems are
  assigned to **Simulators**. Each system is different and unique and is
  individually developed.
* **Mission**: a timeline of events which happen during the course of a
  simulation. Missions have timeline items which execute **Macros**.
* **Macro**: An atomic, scripted operation with an event and arguments for the
  event. Belongs to **Mission**.
* **Client**: A representation of an individual computer connected to Thorium.
  Tracks information about that specific client, including the login state, the
  login name, the offline state, etc. Also tracks the **Flight**, **Simulator**,
  and **Station** assigned to the client.
* **Flight**: an individual instance of a simulated experience. Flights have at
  least one **Simulator** (which you select a **StationSet** and \[optionally] a
  **Mission** on).
* **Set**: a representation of a physical configuration of **Client** computers.
  Used to quickly and automatically set up the **Clients** with information
  about their **Flight**, **Simulator**, and **Station** based on the
  **Simulator** and **StationSet**
* **Asset**: an image associated with some information in the simulation.
  Organized in Folders and Containers. Examples include Sensor Contacts, Ship
  Images, Comm Images, etc.

_Please open an issue if you find another term that needs a definition_

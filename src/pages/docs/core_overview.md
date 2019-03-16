---
title: Core Overview
category: docs
subcategory: Cores
position: 1
---

What is the core? It is the main control screen for the entire simulator. The
core allows the flight director to see what all of the crew does with their
stations and respond to it. The core is also how the flight director provides
information and direction about what is going on during the mission to the crew.

The core screens (outlined in the next pages) are configured to give the flight
director flexibility as you control certain aspects of the simulator: controls,
viewscreens, messages, etc.

Most of what the flight director will do with the core will surround the
mini-core components that control individual aspects of the simulator. Nearly
every card has its own core which is used to control it. Each of the cores are
described on their corresponding card doc page, with a few cores that have their
own documentation page.

## Core Feed

![Core Feed](/img/core_feed.jpg)

One of the most powerful features of the core is the core feed. This is
available on the main screen of the Next core layout and on the side bar of the
Default and IIFX cores. This provides a feed of notifications from the
simulation. Each notification in the core feed can be expanded to show the
corresponding core for that notification. Shown above is the expanded
transporters core. This can allow the flight director to respond to contextual
events without having to search for the necessary core component.

## Timeline

![Core Timeline](/img/core_timeline.jpg)

Another powerful feature of Core is the timeline. This allows the flight
director to automate parts of the mission through a mission timeline system.
Before the mission, a mission author can script the different steps of the
mission into a complete timeline. This timeline can include descriptions of what
happens during that part of the mission, viewscreen transitions, or changes to
the simulation itself. The screenshot above shows a timeline step which sends
processed data to sensors, changes the viewscreen to a video clip, and then
changes the viewscreen to auto mode after that video clip is done.

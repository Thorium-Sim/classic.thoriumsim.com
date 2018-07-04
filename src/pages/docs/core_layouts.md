---
id: core_layouts
title: Core Layouts
---

Thorium supports the ability to switch between multiple core layouts. This
allows the flight director to easily pull up the most pertinent information
without sacrificing screen space. Core layouts are built into Thorium and new
layouts must be added in code. If you want a new core layout,
[file an issue](https://github.com/Thorium-Sim/thorium/issues/new).

## Core Header

![Header](/docs/core_layouts_1.jpg)

Every core layout has a header with the following controls:

1. **<- Client Config** - Return to the client config screen.
2. **Simulator Selector** - Choose a simulator from the flight. This allows you
   to switch between which simulator is being controlled by the core.
3. **Layout Selector** - Switch between the different core layouts.
4. **Mosaic Layout Selector** - Only appears on Dynamic or Next layout. This
   lets you save a dynamic layout to the server and reload previously saved
   dynamic layouts.
5. **Bug Report/Issue Tracker** - Use this to file a bug report or feature
   request.
6. **Notifications** - Choose if notifications appear on the core screen.
7. **Speech** - Choose if notifications are spoken.
8. **Clear Notifications** - Clears any notifications on the screen.

## Layouts

* [Next](#)
* [Default](#)
* [IIFX](#)
* [Dynamic](#)
* [Jr](#)
* [Viewscreen](#)
* [Tactical Maps](#)
* [Panels](#)
* [Messages](#)

## Function Key Popups

You can access any core component from any core layout with function keys. Press
and hold the key to view the core components related to that key. Double press
the key to have the core components stay on the screen. Press again to make them
go away.

* **F1** - Generic Components
  * Actions
  * Extras
  * Remote
  * Messaging
  * Clients
* **F2** - Ship Components
  * Ship
  * Decks
  * Cargo
  * Crew
  * Heat
  * Self Destruct
* **F3** - Flight
  * Engine Control
  * Thruster
  * Navigation
  * Docking
* **F4** - Weapons
  * Targeting
  * Phaser
  * Torpedo
  * Shield Control
* **F5** - Damage
  * Systems
  * Damage Reports
  * Damage Teams
* **F6** - Sensors
  * Sensors Grid
  * Sensors
  * Probe Control
  * Probe Network
* **F7** - Comm
  * Short Range Comm
  * Decoding
  * Long Range Comm
  * Internal Comm
  * Signal Jammer
  * Code Cyphers
  * Interception
  * Short Range Signals
* **F8** - Engineer
  * Reactor Control
  * Exocomps
* **F9** - Security
  * Security Decks
  * Security Teams
  * Crew
* **F10** - Operations
  * Transporter
  * Stealth Field
  * Tractor Beam
  * Shuttles

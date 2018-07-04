---
id: asset_config
title: Asset Folder Structure
---

Assets in Thorium must be imported by Thorium and placed in specific folders to be used by the controls. You can create these folders in the 'Asset Config' page. Simulator specifc assets should be added on the Simulator Config.

```
assets
├── 3D
│   ├── Mesh
│   └── Texture
│       ├── Planets - Used for the Planetary Scan viewscreen
├── Comm Images - Used for the Short Range Comm screen
├── Docking Images - Used for Shuttlebays and Docking Ports
├── Library Images - Available to be used in the Library Entries
├── Misc
│   └── Login Logo - Shown on the Login Scree 
├── Sensor Contacts
│   ├── Icons - SVGs preferred
│   └── Pictures
├── Ship Views - Used for the Ship Views viewscreen
├── Sounds - Sound effects. Not used yet.
└── Viewscreen
    ├── Tactical Backgrounds - Used for tactical maps
    ├── Tactical Icons - Used for tactical maps
    └── Videos - Used for the Videos viewscreen

```
![Asset Folders](/docs/asset_config.jpg)
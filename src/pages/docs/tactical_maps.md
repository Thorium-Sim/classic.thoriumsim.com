---
id: tactical_maps
title: Tactical Maps
---

## Overview

Tactical maps are designed to allow the flight director to compose and show screens which display tactical or strategic information for the crew. Tactical maps can be shown as part of a mission timeline or ad hoc during a mission.

There are two classes of tactical maps: Saved and Flight-based. A saved map is created before a flight begins. Once the flight is started, saved tactical maps can be loaded into the flight, which creates a duplicate map for just that flight. This allows the flight's tactical map to be manipulated without updating the saved map.

Maps are composed of 'Layers'. There are currently three types of layers:

- Grid, allowing you to create a gridlines which span the tactical map
- Image, for full-size background images
- Object, for individual icons, graphics, or labels which can be moved around the canvas.

Tactical maps can be created from the main tactical map editor, accessed from the welcome screen, or from the tactical core layout.

## Create and Edit Tactical Maps

![Tactical Maps](/docs/tactical_maps_1.jpg)

1) A list of saved maps. You can choose a map to edit by clicking on it in the list.
2) Click this button to create a new map.
3) Click this button to duplicate a the currently selected map.
4) The list of layers for the currently selected map. Layers are listed from back to front, with the top layer being at the very back. You can click and drag layers in this list to reorder them.
5) Add a new layer. New layers are added to the top of the layer stack.
6) Remove a layer from the layer stack.
7) Clear the entire tactical. This removes all layers and is irreversable.

## Grid Layer

![Tactical Maps](/docs/tactical_maps_2.jpg)

1) Use this to switch between the different layer types.
2) Change the number of grid columns with this slider.
3) Change the number of grid rows with this slider.
4) When this box is checked, the grid will show labels on the left (letters) and bottom (numbers) Battleship-style.
5) Change the grid color and opacity with this color picker

## Image Layer

![Tactical Maps](/docs/tactical_maps_3.jpg)

1) Use this to switch between the different layer types.
2) This is a file browser for the files located in the `/Viewscreen/Tactical Backgrounds` asset folder. You can navigate the files in this folder by clicking on folders or the 'Back' button. Clicking on one of the images will set the layer's image to that image.

## Object Layer

![Tactical Maps](/docs/tactical_maps_4.jpg)

1) Use this to switch between the different layer types.
2) Click this button to add an iconless label to the map.
3) This is a file browser for the files located in the `/Viewscreen/Tactical Icons` asset folder. You can navigate the files in this folder by clicking on folders or the 'Back' button. To add an icon to the canvas, click and drag from this file browser on to the canvas.
4) This is the canvas. You can click and drag to move icons or you can click on an icon to select it. Selecting icons allows you to configure them. You can also click and drag to select and move multiple icons at the same time.

## Configuring Objects

![Tactical Maps](/docs/tactical_maps_5.jpg)

1) This slider scales both the icon and the label, making them both larger or smaller.
2) This changes the speed at which the icon moves. **Note: To move icons with an animation of any kind, you must change this value.** Otherwise, icons will instantly move to the place you drag them.
3) When checked, the icon will flash periodically.
4) When checked, the icon will be moved when the *WASD* keys are pressed on the keyboard. This is for convenience in moving icons when the tactical is shown on the viewscreen.
5) When checked, the icon will be moved when the *IJKL* keys are pressed on the keyboard. This is for convenience in moving icons when the tactical is shown on the viewscreen.
6) The contents of this box will be displayed below the icon.
7) To change the font of the label, you must type in the name of the font here. **Note: The font must be installed on whatever computers the tactical map will be displayed on for it to work properly.**
8) This slider changes the size of the font used for the label.
9) This color picker changes the color of the label.

## Tactical Map Control

![Tactical Maps](/docs/tactical_maps_6.jpg)

To activate a tactical map during a flight, use the Viewscreen core layout with the 'TacticalMap' viewscreen. 

1) This is a list of all the saved maps available. Click a saved map to select it.
2) Once a saved map is selected, click this button to load the map. A copy will be created for this flight.
3) When the 'Frozen' checkbox is checked, any changes made to the tactical map will not be sent to the Viewscreen. This allows you to configure and manipulate several areas of the map simultaneously. When the box is unchecked, all changes will be sent to the viewscreen.
4) This is a list of the flight maps. Clicking on a flight map will change which map is currently displayed on the viewscreen.
5) If you make changes to the tactical map that are worthy of being saved forever, you can click this button to do so.

## Mission Macro

![Tactical Maps](/docs/tactical_maps_7.jpg)

The mission macro for tactical maps is called 'Set a tactical on the viewscreen'
The mission macro is configured by selecting the saved tactical map you would like to show.
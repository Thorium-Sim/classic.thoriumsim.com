---
id: card_navigation
title: Navigation
---

## Overview

The navigation screen uses advanced technology to calculate course coordinates and set course for unlimited interstellar destinations. Based on configurations in the Navigation Core, course coordinates can be given either as XYZ values or as thruster coordinates which must be set using the [Thrusters card](/docs/card_thrusters.html). Additionally, configuration in the Navigation Core may erase the "Calculate Course" options, in which case the coordinates may be retreived from various other sources, such as the [Sensors Scan card](/docs/card_sensors_scans.html), and entered on the Navigation card.

![Navigation](/img/card_navigation.jpg)

## Calculating Course

To calculate a course, a user must:

1) Type the name of the destination in the "Desired Destination" field. 
2) Click "Calculate Coordinates."
3) Wait for the computer to calculate the correct coordinates for the desired destination. (For more information about how to populate these values from the Navigation Core, see below under the "Navigation Core" heading.)

## Setting Course

Once the coordinates have appeared in the "Calculated Course" field, the officer responsible for navigation must accurately transcribe the coordinates from the "Calculated Course" fields into the "Current Course" fields. This may be done by clicking into the first field and inputting the correct number, using the on-screen keypad or another externally connected keyboard. Move through each input field by hitting enter or tab, or by clicking into the next field with a mouse. When the final coordinate is accurately inputted, hit enter. The ship will begin to set its course for the desired destination!

## Navigation Core

![Navigation Core](/img/core_navigation.jpg)

The Navigation Core features a few options to configure the flight experience, as well as the controls for sending course coordinates to the navigation station.

### Navigation Card Configuration Options

Checking the "Calculate" checkbox retains the functionality to both calculate and set the ship's course on the Navigation card. Unchecking this box simplifies the Navigation card to simply include the "Current Course" fields, which can be used to enter coordinates obtained from other sources. 

Checking the "Thrusters" checkbox changes the calculated coordinates from the default XYZ coordinates to Thruster coordinates, which are used to redirect the ship on the [Thrusters card](/docs/card_thrusters.html). Using this setting removes the "Current Course" section from the Navigation card altogether.

### Current and Calculated Coordinates Read-out

The three "Current" fields list the XYZ or thruster coordinates entered by the ship crew. The "New" fields are the course coordinates which are to be sent to the "Calculated Course" section of the crew's Navigation screen. The blue bar beneath the "Current" and "New" fields lists the desired destination inputted by the crew.

The course coordinates can be inputted into the "New" fields four ways:

1) By manually typing in the desired XYZ or thruster coordinates in each field.
2) By clicking the teal "Random" button to auto-generate XYZ coordinates. If the "Thrusters" checkbox is selected, this option is unavailable.
3) By clicking the yellow "Refresh Thrusters" button to auto-generate thruster coordinates. This option is available regardless of whether "Thrusters" is checked or not.
4) By selecting preset course coordinates from the Preset drop-down. These are helpful to maintain consistency when navigating to familiar destinations.

To send the "New" coordinates to the crew's Navigation screen, click "Send." If the desired destination is unknown or out-of-bounds for the mission, use the "Unknown" button and then click "Send" to send the "No Course Available" message.

Additional Navigation options are available by using the [Advanced Navigation card](/docs/card_navigation_advanced.html).

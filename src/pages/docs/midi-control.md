---
title: MIDI Control
category: flight_directing
---
Thorium support configuring MIDI boards to perform actions in the controls. These MIDI boards could have sliders, rotors, and buttons, all of which can affect things in the simulator.

Two models of MIDI board are supported:

* X-Touch MINI
* Behringer BCF 2000

More models could be added in the future. If you are interested, get in touch with Alex or file an issue.

MIDI Boards are configured from the sidebar of Thorium. Multiple MIDI configurations can be assigned to a simulator at once, and they can be changed mid-flight.

![](/img/midi_control_1.jpg)

When configuring a MIDI set, you must first choose the MIDI board which you want to use. A diagram of the MIDI board shows which controls can be configured. Clicking on the control selects it, allowing you to add actions to the control. You can also select controls by manipulating a MIDI device plugged into the computer.

Once you have selected a control on the MIDI device, you'll be able to configure how that control interacts with Thorium.

![](/img/midi_control_2.jpg)

Buttons have three configurations:

1. Macro - When the button is pressed, a one or more macros can be triggered. The MIDI board will not light up or respond to the macro at all.
2. Momentary Macro - Macros can be triggered both when the button is pressed down and when it is released. The MIDI board will not light up or respond to the macros at all.
3. Toggle - The button is connected to data in Thorium that determines whether it's light is on or not. Pressing the button will toggle that data in Thorium.

There are currently two options for the Toggle configuration.

1. Mute/Unmute a MOTU Channel
2. Mute/Unmute a MOTU Send (Connection between an input and an output)

Sliders and rotors have a single configuration which connects them to data in Thorium that determines their value. For controls that can be updated on the MIDI board (like LED lights around a rotor or a motorized slider) those controls will reflect the value in Thorium. Changing the rotor or slider will update the value in Thorium.

There are currently three options for adjusting the value of the sliders and rotors.

1. Set the Radiation Level
2. Change the lighting intensity
3. Change a MOTU Channel fader (volume)

If there are other toggle and value options you would like to have in Thorium, submit an issue and it will be added.

Some of the toggle and value options require configuration, like choosing which MOTU channel to set the volume for. Those options appear on the right side of the screen.

![](/img/midi_control_4.jpg)

After configuring your MIDI device, you can activate it for a simulator by adding it to the simulator in the MIDI section of the simulator config screen. You can also activate MIDI devices using Macros.

## Using MIDI Devices in a Flight

Currently, Thorium only connects to MIDI devices if a special "MIDI Core" is displayed on the Core. This core shows the activated MIDI devices and having it open starts the connection to any connected MIDI devices. If the MIDI core is closed, your computer won't be able to communicate with your MIDI Device.

![](/img/midi_control_5.jpg)

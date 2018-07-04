---
id: damage_reports_config
title: Auto-Generated Damage Reports
---

Thorium supports both pre-written plaintext damage reports and auto-generated damage reports. In the case of auto-generated reports, it creates those reports on-the-fly when the report is requested.

When creating a damage report, Thorium follows these steps:

1. Get information about the simulator, including what cards are assigned to stations, if the ship has security officers, or if the damaged system has power.

2. Generate a list of potential damage report steps. These are gathered from the optional damage report steps assigned to either the simulator or the system specifically. There is also a list of default optional damage report steps which are used in all damage report generation (see below).

3. Based on the information gathered, filter the list of potential damage report steps to only those which can be completed in the simulator. IE. don't add a step to create a damage team if there are no damage control officers, or don't add a step to send exocomps if there is no exocomps card.

4. Assemble a preliminary damage report. This is just a list of steps, not the actual text of the steps themselves. It uses the following logic to create this list:

    1. If the system has power, the first step will always be to remove power from that system.

    2. Add in required damage steps. These steps are assigned to the simulator as a whole or added to the system specifically, both in the 'DamageReports' section of the 'Simulator Config' screen . These steps will be added regardless of the requested length of the report. *Note:* Requered damage steps are not filtered based on the capability of the simulator.

    3. Add in optional damage steps. These steps are randomly assigned from the available damage report steps until a) the report reaches it's requested length or b) all of the steps have been used.

    4. Some damage report steps are labeled to be put at the end of the report. Those damage steps are included at this point.

    5. Any damage teams that have not been recalled at this point will be recalled. This step reads like 'Wait until the *such and such* damage team finishes their work'.

    6. If the system has power, it will add a step to restore power to the system.

    7. A finisher step is added at the end. This step currently always includes a reactivation code.

5. Once the steps are assembled, the report goes through a giant function that replaces the damage report steps with the text of that step. The text is randomly generated with from several lists of possible values. This will hopefully ensure no two reports are the same.
  - *Note:* Systems can be assigned to rooms on the ship. This will affect the damage report output. For example, internal calls will be directed to that room.

# How can you help?

There are a number of things you can do to improve damage report step generation:

- Come up with new possible damage report steps. 
- Create new instructions for damage team reports. These instructions are based on the type of damage team member that is being sent.
- Come up with new messages to send in the Damage Team Message step
- Come up with new messages to say in the Internal Comm step
- Come up with new messages to send in the Long Range Comm step
- Come up with new destinations to send in the Long Range Comm step
- Come up with new probe queries for the Probe step
- Come up with new excuses to evacuate decks in the Security Decks step
- Come up with new instructions for the Security Teams step

*Note: Damage report step text should be system agnostic.*

Add your ideas as an [issue](https://github.com/Thorium-Sim/thorium/issues/new) or send me an [email](mailto:alex@fyreworks.us).

# Damage Report Values

## All Possible Damage Report Steps

- Damage Team - Send a damage team to a location.
  - Uses different instructions for each type of damage team.
  - Ex. Computer specialists say "Diagnose and repair the malfunctions to the %SYSTEM% systems computers." whereas Quality Assurance peeps say "An unknown systems error is causing faults in the %SYSTEM% system. A diagnostic must be performed."
- Damage Team Message - Use the messaging system to send a message to the damage teams.
- Exocomps - Send an exocomp to the system. Includes random parts to put on the exocomp.
- Finish - Finishes the report. Includes a reactivation code.
- Generic - Used for writing your own damage reports. Can include any text.
- Internal Call - Make an internal call to the system's room.
- Long Range Message - Send a long range message to a starbase.
- Power - Add or remove power from the system.
- Probe Launch - Launch a probe and have it perform a query.
- Remote Access - Send a remote access code with the remote access widget.
- Security Evac - Evacuate a room.
- Security Team - Send a security team. 
- Send Inventory - Send inventory to another room. 
- Software Panel - Randomly switch some switches on a software panel.

## Default Optional Damage Report Steps

These steps are included in all damage reports as optional steps. They are filtered based on the capabilities of the simulator.

- Damage Team
- Damage Team Message
- Remote Access Code
- Transfer Inventory
- Long Range Message
- Exocomps
- Software Panel

## Damage Team Member Positions

Crew members that have these positions are available to be used as damage team members. The position they have affects the damage report instructions.

- Computer Specialist
- Custodian
- Quality Assurance
- Electrician
- Explosive Expert
- Fire Control
- General Engineer
- Hazardous Waste Expert
- Maintenance Officer
- Mechanic
- Plumber
- Structural Engineer
- Welder

## Exocomp Part List

- CASM Generator
- Coaxial Servo
- Computer Interface
- Digital Sequencer
- EPS Power Node
- EPS Step-Down Conduit
- Fiberoptic Wire Linkage
- Field Emitter
- Field Generator
- Fusion Generator
- Fusion Welder
- Gravity Generator
- Holographic Servo Display
- IDC Power Cable
- Integrated Fluid Sensor
- Isolinear Programs
- Isolinear Rod
- Magnetic Bolt Fastener
- Magnetic Coil
- Network Adapter
- Power Coupling
- Power Splitter
- Prefire Chamber
- Residual Power Store
- Sensor Grid
- Subspace Transceiver
---
id: card_sensor_scans
title: Sensor Scans
---

Scans are requests made to the sensors system to give the requester aditional
information, based on the query. Once the request has been processed, the
results appear in the results box. Simple enough, right?

Like [Sensors](/docs/card_sensors), sensor scans are slightly neuanced.

There is a distinction between internal sensors and external sensors. Instead of
identifying a scan as being either 'internal' or 'external', there are two
separate systems which handle scans. This means the two systems can be broken
and have power adjusted independent of each other. _If this seems weird or you
think it should be changed, get in touch._

There is also a distinction beteween 'Standard' mode and 'History' mode. Each of
those modes will be addressed below.

## Standard Mode

![Standard Mode](/img/card_sensor_scans2.jpg)

In standard mode, there can only be one active scan per sensor system. A scan is
made by typing the query into the box on top. For internal sensors, the option
is given to choose all decks or pick a specific deck. On the right side are
choices for what the scan should focus on. Clicking the begin scan button will
initate the scan. The crew member must wait until the scan is complete before
receiving results.

_**Note:** Sensor Scans made from the Sensor Grid card will always be in
standard mode. History mode is not available for sensor scans made from the
Sensor Grid card_

![Standard Mode Core](/img/core_sensor_scans2.jpg)

At the top of the core, you can choose between 'External' and 'Internal'
sensors. A checkbox allows you to toggle between standard and history mode.

The blue box turns red when a scan has been initiated and the text appears in
that blue box. The response can be typed in the grey box below, or chosen from
one of the two drop-downs.

The 'Answers' dropdown has several preset scan answers which can be used for
various purposes. There are also hotkeys which invoke those scan answers.
Pressing the 'Option/Alt' key and a number will place the corresponding scan
answer into the sensor scan box. Those scan answers are listed in detail at the
bottom of this article.

The 'Info' dropdown has scan answers that are preset as part of a mission
timeline. Once the timeline item is run, the dropdown is populated with
mission-specific scan answers.

Clicking the 'Send' button sends the response text as the response to a scan
request. Clicking the 'Data' button sends the response text as processed data to
the [Sensor Grid](/docs/card_sensors) screen. Clicking 'Probe Data' sends the
response text as probe processed data to the
[Probe Network](/docs/card_probe_network) screen.

## History Mode

![History Mode](/img/card_sensor_scans1.jpg)

History mode is almost identical to standard mode with one exception. Multiple
scans can be requested at the same time. Requested scans appear in a list on the
left with a rotating icon to indicate that they are currently being processed.
Red scans indicate scans which have been cancelled. Green scans indicate that
the scan has been answered. Previous scans can be referenced after the fact.
Clicking the 'New Scan' button will initiate a new scan.

![History Mode Core](/img/core_sensor_scans_1.jpg)

History mode on the core also has a sidebar of previous and current scans on the
left with the same color-coding as the card. Clicking on a scan allows the
Flight Director to send a response to that specific scan.

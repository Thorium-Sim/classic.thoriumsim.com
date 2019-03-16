---
title: Getting Started with Thorium
sidebar_label: Getting Started
category: docs
subcategory: An Overview
position: '1'
---
## Download and Install

To get started with Thorium, you first have to download and install it. A built version is available on the [download](/download) page. You can also install Thorium by building the code on your computer. Instructions for doing that are available on the [Github page](https://github.com/Thorium-Sim/thorium).

The controls have no dependencies and should start right up when you start the program.

![The starting window](/img/getting_started_1.png)

```
Client Server is now running on http://192.168.1.4:3000/client
Access the Flight Director on http://192.168.1.4:3000
GraphQL Server is now running on http://192.168.1.4:3001/graphql
Access GraphiQL developer tool on http://192.168.1.4:3001/graphiql
```

Since Thorium is run inside a web browser, you need to navigate to the first URL which it showed you. That will bring you to the welcome screen.

Thorium was built for Chrome. We suggest running on a 1600x900 resolution, or 1920x1080 resolution. You can also try 1366x768 resolution, but some elements might not line up properly. 1024x768 resolution may also work, your milage may vary.

![The welcome screen](/img/getting_started_2.jpg)

## Importing Simulators, Missions, and Assets

Thorium ships with no simulators, missions, and assets. This is to reduce the size of the download and to selectively allow you to configure your own installation. While you can you create your own simulator configs, we will provide a number of configs for you as separate downloads.

Simulator configs are descriptively named, not named after the simulator itself. The simulator is named when a set is applied to it when the flight is started.

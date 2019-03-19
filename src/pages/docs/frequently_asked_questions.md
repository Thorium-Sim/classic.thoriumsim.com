---
title: Frequently Asked Questions
category: docs
subcategory: An Overview
---
## What browsers are compatible with Thorium?

Thorium was built to run in Chrome. Safari and Firefox are compatible in most cases. For the best experience, we suggest running your host machine and all client machines on Chrome.

## What are the best screen resolutions to run Thorium on?

Thorium was designed to run on 1600x900 resolution, but supports 1920x1080
resolution as well. You can also try 1366x768 resolution as well, but some
elements might not line up properly. 1024x768 resolution may also work, but
again - your milage may vary.

## My Viewscreen and Sound Player aren't working anymore!

With the recent upgrade to Chrome 71, audio autoplay is now blocked before user input. This means that the sound player won't work unless you click on the page. See more information [here](https://developers.google.com/web/updates/2017/09/autoplay-policy-changes). You can still have the webpage autoplay. You just have to change some settings.

1. Open up Chrome on any computer that runs a sound player or viewscreen.
2. Navigate to <chrome://flags/#autoplay-policy>
3. Change the 'Autoplay Policy' option to 'No user gesture is required.'
4. Restart Chrome

This is not necessary for the dedicated Thorium Client application.



Some frequently asked questions were answered in the following demonstration:

```
<iframe width="560" height="315" src="https://www.youtube.com/embed/-5hnBiHjKFo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
```

---
title: Sound Player
category: docs
subcategory: Config
---
Thorium has a special client station called a sound player. This is a station
specifically dedicated to playing sound effects with macros. The main purpose of
this is to replicate the functionality of existing sound effects players, like
Quartz Audio.

Using this sound player station is easy. Just configure it like you would any
station in the client config or sets manager. Then, any 'Play Sound' macro
configured to play through the sound player (which is default) will play through
the sound output of that client.

This works on computers running in the Chrome web browser or in the Thorium
Client program. The 'Play Sound' macro also supports outputs with multiple
channels, such as Motu devices over USB or Thunderbolt. That can be used to play
specific sound effects over specific speakers.



**Note:** With the recent upgrade to Chrome 71, audio autoplay is now blocked before user input. This means that the sound player won't work unless you click on the page. See more information [here](https://developers.google.com/web/updates/2017/09/autoplay-policy-changes). You can still have the webpage autoplay. You just have to change some settings.

1. Open up Chrome on any computer that runs a sound player or viewscreen.
2. Navigate to <chrome://flags/#autoplay-policy>
3. Change the 'Autoplay Policy' option to 'No user gesture is required.'
4. Restart Chrome

This is not necessary for the dedicated Thorium Client application.

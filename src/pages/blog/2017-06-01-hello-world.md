---
title: The Birth of Thorium
author: Alex Anderson
authorURL: http://twitter.com/ralex1993
authorFBID: 764853781
---


<figure>
  <img src="/posts/banner.png" alt="Banner" />
</figure>

Thorium as a project began in June of 2016. After the partial failure of [Flint](https://github.com/infinitedg/flint), I wanted to develop a set of controls that I could be proud of. Flint had a pie-in-the-sky vision of what was possible. However, in the day-to-day development, that vision didn't translate well. Ultimately, due to lack of focus and poor developer experience, Flint fell by the wayside.

After a few months of tinkering [with](https://github.com/alexanderson1993/website-class) [other](https://github.com/alexanderson1993/assassin) [projects](https://github.com/alexanderson1993/crowdfund), and with the encouragement of my brother, I decided the time finally came to start working on the next version of starship simulator controls. This version wouldn't reach too far... at first. Instead, it would build a platform for developing modular, future-proof controls with the latest web technologies. 

Since then, I've been developing Thorium, with a goal to keep momentum by writing code at least once every day. This has been while I've been employed part time and attending school full time. (Also, I started dating, got engaged, and got married all while Thorium has been under development).

Keep following this blog for more details about where Thorium is now and where it is going. I hope you like what you see. Just know that the best is yet to come.

Alex

### Technical Details

I was able to leverage what I learned from Flint to propel my development of Thorium. During the first few months of development, I had to decide several things:

* How should data be stored?
* How should state be managed between the client and the server?
* How should data be rendered on the client?
* Should I build it for one simulator, or for many simulators?

Using web technologies was a no-brainer. The velocity and robustness of web development tools is staggering and jumping aboard was obvious. However, which of those tools to use was carefully considered. After playing around with Elixir and the Phoenix framework, I decided that I would write the server in Node.js. While Elixir would provide significant improvements to speed with concurrent processing and the ability to horizontally scale servers, the use case of simulators doesn't necessarily need the ability to process a million requests a second. Node.js gives familiarity and also convenience as the front-end and back-end are written with the same language.

The front-end was created with React. The community support is unbeatable and the modular nature makes it possible to keep screens and controls separate while importing when necessary.

GraphQL was a late addition to the mix, but a welcome one. It provides the simplest way of sending data to and from the client and server. With its self-documenting API, it's really easy to see all of the data you can get and send both ways, simplifying the development process substantially. When they released support for subscriptions, I was sold and jumped all in.

The final piece was event sourcing. This is the idea that instead of storing the current state of the simulator, you store every event which brought the simulator to its current state. This has a few benefits:

* A rich stream of data allowing you to see exactly what happened at what point during the mission, which could be useful for analytics.
* The ability to rewind events to a point, effectively allowing you to rewind the experience by an arbitrary amount.
* A central event store can send and receive events from multiple servers, making it possible to expand the controls horizontally or though a mircoservice architecture. 

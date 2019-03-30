---
title: Hosting Thorium Remotely (Over the Web)
category: developers
---
Thorium was built with immersive, local simualtions and experiences in mind. Typically, users will operate stations on the same network as the host. It is not recommended to use Thorium over the web; however, for those interested, the process is documented here.

To host Thorium over the web, you'll need to clear four checkpoints which, if not configured properly, will not allow clients to connect with the host.

Steps (assuming we'll host via a domain):

1. Start up Thorium on your server. The server can be any desktop on your network. This device needs to remain online at all times (assuming you want Thorium always accessible).
2. You'll need to make sure Thorium is cleared by your device's firewall and network settings. Often, your OS will prompt you to allow Thorium to clear your firewall. If not, you'll need to consults instructions for your particular operating system to allow Thorium to bypass or be whitelisted by your device firewall.

![](/img/screen-shot-2019-03-29-at-11.48.23-pm.png)

3. Next, you'll need to open ports on your router. Hopefully you have full control of your router settings. (If you live in an apartment with shared wifi or other situation, this step may be difficult to do.) Thorium uses ports 1337, 1338, and 1339. You will need to ensure port forwarding is setup to open those three ports and forward them to your server/device. You will need to consult the manual for your brand of router to see steps to open ports on your router. In this example, the internal ip of the server is listed.

![](/img/screen-shot-2019-03-30-at-12.07.30-am.png)

4. The final step is to purchase and setup a domain (mydomain.com). This will easily allow your clients to connect to the host. Alternative methods of connection may include a VPN, but for the purposes of this guide, we will stick with a domain example. Once you purchase a domain from your provider of choice, you'll need to configure the domain to point to your server. You'll need to setup A records for your domain, select the TTL (time to live) - leave it at default or 60 minutes is typical. 5 minutes is pictured and also acceptable. The data will the be public ip of your server/device you are hosting Thorium from. If you are not sure what the public ip of your server is, google "public ip" from that machine. The name must be an @ sign for the first, and I've decided to use a wildcard "*" for the second to capture all subdomains (this would include www.). Once you have this setup, you should be good to go! Domains can take up to 24 hours to propogate these changes throughout the web, be patient and try every 20 minutes until something happens. If you don't see Thorium working after a day, something along the way isn't configured properly and you'll need to revisit one of the above steps.

![](/img/screen-shot-2019-03-30-at-12.03.53-am.png)

Once you have completed the setup steps above, all that is left to do is navigate to your domain. Open a browser (preferably Chrome) or the Thorium kiosk and go to mydomain.com:1337/client - the ":1337/client" piece is what will connect you to Thorium instead of a web page.

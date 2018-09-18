import React, { Component } from "react";

class WidgetBot extends Component {
  componentDidMount() {
    if (typeof window === `undefined`) return;
    const { server, channel } = this.props;
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/@widgetbot/crate@3";
    script.async = true;
    document.body.appendChild(script);
    function checkCrate() {
      if (window && window.Crate && !window.crate) {
        window.crate = new window.Crate({
          server,
          channel,
          shard: "https://cl1.widgetbot.io"
        });
      }
      setTimeout(checkCrate, 50);
    }

    checkCrate();
  }
  render() {
    return <div />;
  }
}
export default WidgetBot;

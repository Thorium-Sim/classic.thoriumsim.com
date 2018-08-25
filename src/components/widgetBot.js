import React, { Component } from 'react'

class WidgetBot extends Component {
  componentDidMount() {
    if (typeof window === `undefined`) return
    const { server, channel } = this.props
    const script = document.createElement('script')
    script.src = 'https://cdn.jsdelivr.net/npm/@widgetbot/crate@3'
    script.async = true
    document.body.appendChild(script)
    function checkCrate() {
      if (window && window.Crate) {
        const crate = new Crate({
          server,
          channel,
          shard: 'https://cl1.widgetbot.io',
        })
        return
      }
      setTimeout(checkCrate, 50)
    }

    checkCrate()
  }
  render() {
    return <div />
  }
}
export default WidgetBot

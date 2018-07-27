import React from "react"
import WWObject from "@nasaworldwind/worldwind"

export class WorldWind extends React.Component {
  componentDidMount() {
    let wwd = new WWObject.WorldWindow("worldwind-canvas")

    wwd.addLayer(new WWObject.BMNGOneImageLayer())
    wwd.addLayer(new WWObject.BMNGLandsatLayer())

    wwd.addLayer(new WWObject.CompassLayer())
    wwd.addLayer(new WWObject.CoordinatesDisplayLayer(wwd))
    wwd.addLayer(new WWObject.ViewControlsLayer(wwd))
  }

  render() {
    return (
      <canvas id="worldwind-canvas" {...this.props}>
        Your browser does not support HTML5 Canvas.
      </canvas>
    )
  }
}

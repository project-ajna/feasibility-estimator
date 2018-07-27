import React from "react"
import WorldWind from "@nasaworldwind/worldwind"

export class WWViewer extends React.Component {
  componentDidMount() {
    let wwd = new WorldWind.WorldWindow("worldwind-canvas")

    wwd.addLayer(new WorldWind.BMNGOneImageLayer())
    wwd.addLayer(new WorldWind.BMNGLandsatLayer())

    wwd.addLayer(new WorldWind.CompassLayer())
    wwd.addLayer(new WorldWind.CoordinatesDisplayLayer(wwd))
    wwd.addLayer(new WorldWind.ViewControlsLayer(wwd))
  }

  render() {
    return (
      <canvas id="worldwind-canvas" {...this.props}>
        Your browser does not support HTML5 Canvas.
      </canvas>
    )
  }
}

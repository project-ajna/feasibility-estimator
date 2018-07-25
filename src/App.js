import React, { Component } from "react"
import "./styles/main.css"

import WorldWind from "@nasaworldwind/worldwind"

class App extends Component {
  componentDidMount() {
    let wwd = new WorldWind.WorldWindow("worldwind-canvas")

    wwd.addLayer(new WorldWind.BMNGOneImageLayer())
    wwd.addLayer(new WorldWind.BMNGLandsatLayer())

    wwd.addLayer(new WorldWind.CompassLayer())
    wwd.addLayer(new WorldWind.CoordinatesDisplayLayer(wwd))
    wwd.addLayer(new WorldWind.ViewControlsLayer(wwd))
  }

  render() {
    console.log(WorldWind)

    return (
      <div className="">
        <div className="">Ajna</div>
        <canvas id="worldwind-canvas">
          Your browser does not support HTML5 Canvas.
        </canvas>
      </div>
    )
  }
}

export default App

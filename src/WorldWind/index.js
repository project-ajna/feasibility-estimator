import React from "react"
import WWObject from "@nasaworldwind/worldwind"
import WorldWind from "@nasaworldwind/worldwind"
import { sprintf } from "sprintf-js"

export class Globe extends React.Component {
  componentDidMount() {
    let rect = document
      .getElementById("worldwind-canvas")
      .getBoundingClientRect()

    let wwd = new WWObject.WorldWindow("worldwind-canvas")

    wwd.addLayer(new WWObject.BMNGOneImageLayer())
    wwd.addLayer(new WWObject.BMNGLandsatLayer())

    wwd.addLayer(new WWObject.CompassLayer())
    wwd.addLayer(new WWObject.CoordinatesDisplayLayer(wwd))
    wwd.addLayer(new WWObject.ViewControlsLayer(wwd))

    var handleClick = function(recognizer) {
      //var x = recognizer.clientX, y = recognizer.clientY

      let p1 = wwd.pick([0, 35]).objects[0].position
      let p2 = wwd.pick([rect.width - 10, rect.height - 10]).objects[0].position

      let x1 = sprintf("%.2f", p1.latitude),
        y1 = sprintf("%.2f", p1.longitude)
      let x2 = sprintf("%.2f", p2.latitude),
        y2 = sprintf("%.2f", p2.longitude)

      let width = parseInt(rect.width - 10, 10),
        height = parseInt(rect.bottom - 45, 10)
      let bbox = `${x2},${y1},${x1},${y2}`

      let url = `https://worldwind25.arc.nasa.gov/wms?service=WMS&request=GetMap&version=1.3.0&transparent=TRUE&layers=BlueMarble-200405,esat&styles=&format=image/jpeg&width=${
        width
      }&height=${height}&crs=EPSG:4326&bbox=${bbox}`

      console.log(url)

      url = `/forest-cover?width=${width}&height=${height}&bbox=${bbox}`

      fetch(url)
        .then(r => r.json())
        .then(d => console.log(d))
    }

    new WorldWind.ClickRecognizer(wwd, handleClick)
    new WorldWind.TapRecognizer(wwd, handleClick)
  }

  render() {
    return (
      <canvas id="worldwind-canvas" {...this.props}>
        Your browser does not support HTML5 Canvas.
      </canvas>
    )
  }
}

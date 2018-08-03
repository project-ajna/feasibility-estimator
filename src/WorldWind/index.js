import React from "react"
import WWObject from "@nasaworldwind/worldwind"
//import WorldWind from "@nasaworldwind/worldwind"
import { sprintf } from "sprintf-js"

export class Globe extends React.Component {
  constructor(props) {
    super(props)
  }

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

    let set = this.props.set
    let update = this.props.update

    var handleClick = function(recognizer) {
      //var x = recognizer.clientX, y = recognizer.clientY

      if(wwd.navigator.range > 2000000) {
        set({error: true})
        return
      }

      set({error: false})

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

        url = `http://cors-anywhere.herokuapp.com/173.212.207.78:5000//forest-cover?width=${width}&height=${height}&bbox=${bbox}`

        console.log(url)

        this.set({loading: true})

        fetch(url, {
          mode: "cors",
          headers: {
            "X-Requested-With": "XMLHttpRequest",
          }
        })
          .then(r => r.json())
          .then(d => update(d))
    }

    this.props.setup(handleClick)

    //new WorldWind.ClickRecognizer(wwd, handleClick)
    //new WorldWind.TapRecognizer(wwd, handleClick)
  }

  render() {
    let props = {...this.props}
    delete props['setup']
    delete props['update']
    delete props['error']

    return (
        <canvas id="worldwind-canvas" {...props}>
          Your browser does not support HTML5 Canvas.
        </canvas>
    )
  }
}

import React, { Component } from "react"
import { WorldWind } from "./WorldWind"
import { Toolbar } from "./Toolbar"

class App extends Component {
  render() {
    return (
      <div className="bg-black h-screen">
        <Toolbar />
        <WorldWind
          className="w-full"
          style={{ height: "calc(100% - 6.3rem)" }}
        />
      </div>
    )
  }
}

export default App

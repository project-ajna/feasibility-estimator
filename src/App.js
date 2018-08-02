import React, { Component } from "react"
import { Globe } from "./WorldWind"
import { Toolbar } from "./Toolbar"

class App extends Component {
  render() {
    return (
      <div className="bg-black h-screen">
        <Toolbar />
        <Globe
          className="w-full"
          style={{ height: "calc(100% - 6.3rem)" }}
        />
      </div>
    )
  }
}

export default App

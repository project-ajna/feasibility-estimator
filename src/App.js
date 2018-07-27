import React, { Component } from "react"
import { WWViewer } from "./WWViewer"
import { Toolbar } from "./Toolbar"

class App extends Component {
  render() {
    return (
      <div className="bg-black h-screen">
        <Toolbar />
        <WWViewer
          className="w-full m-0 border-orange border-1"
          style={{ height: "calc(100% - 6.3rem)" }}
        />
      </div>
    )
  }
}

export default App

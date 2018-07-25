import React, { Component } from "react"
import { WWViewer } from "./WWViewer"
import { Toolbar } from "./Toolbar"

class App extends Component {
  render() {
    return (
      <div className="bg-black h-screen">
        <Toolbar />
        <WWViewer className="w-full h-full" />
      </div>
    )
  }
}

export default App

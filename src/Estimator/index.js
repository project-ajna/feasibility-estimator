import React, { Component } from "react"
import { WorldWind } from "../WorldWind"

import { Toolbar } from "../Toolbar"

export function Estimator() {
  return (
    <div className="bg-black h-screen">
      <Toolbar />
      <WorldWind className="w-full" style={{ height: "calc(100% - 6.3rem)" }} />
    </div>
  )
}

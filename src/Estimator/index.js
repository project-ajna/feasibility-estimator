import React from "react"
import { Globe } from "../WorldWind"

import { TB } from "../Toolbar"

export function Estimator() {
  return (
    <div className="bg-black h-screen">
      <TB />
      <Globe className="w-full" style={{ height: "calc(100% - 6.3rem)" }} />
    </div>
  )
}

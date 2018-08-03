import React from "react"
import { Link } from "react-router-dom"

import { HomeIcon } from "../icons/HomeIcon"

export function Toolbar() {
  return (
    <div>
      <div className="h-24 px-5 bg-grey-lightest flex shadow items-center">
        <div className="bg-grey-light rounded hover:bg-grey cursor-pointer p-3">
          <Link to="/">
            <HomeIcon scale={0.8} color="#000" />
          </Link>
        </div>
        <div className="p-3 rounded ml-3 select-none text-lg">
          Ajna | Feasibility Estimator
        </div>
      </div>
      <div className="absolute opacity-75 text-black px-5 py-2 font-mono text-xs flex flex-row-reverse bg-grey w-full">
        Using NASA WorldWind Data
      </div>
    </div>
  )
}

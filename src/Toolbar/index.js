import React from "react"

export function Toolbar() {
  return (
    <div>
      <div className="py-4 px-5 bg-grey-lightest flex shadow justify-between items-center">
        <div className="p-3 bg-grey-light rounded hover:bg-grey select-none cursor-pointer">
          Ajna | Feasibility Estimator
        </div>
      </div>
      <div className="absolute opacity-75 text-black px-5 py-2 font-mono text-xs flex flex-row-reverse bg-grey w-full">
        Using NASA WorldWind Data
      </div>
    </div>
  )
}

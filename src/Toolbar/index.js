import React from "react"
import { Link } from "react-router-dom"

import { HomeIcon } from "../icons/HomeIcon"
import { DataDisplay } from "../DataDisplay"

const Info = ({ children }) => (
  <div className="bg-grey-light p-3 rounded flex justify-center items-center ml-2">
    {children}
  </div>
)

export function Toolbar({
  results = true,
  warningArea = false,
  loading = false,
}) {
  return (
    <div>
      <div className="h-24 px-5 bg-grey-lightest flex justify-between shadow items-center">
        <div className="flex">
          <div className="bg-grey-light rounded hover:bg-grey cursor-pointer p-3">
            <Link to="/">
              <HomeIcon scale={0.8} color="#000" />
            </Link>
          </div>
          <div className="py-3 rounded ml-2 select-none text-lg">
            Ajna Feasibility Estimator
          </div>
        </div>
        <div>
          <div className="flex">
            {results && (
              <div className="flex">
                <DataDisplay label="Area" data="123.12 sq. km" />
                <DataDisplay label="Forest Cover" data="23%" />
                <DataDisplay label="Cost" data="€ 23M" />
                <DataDisplay label="RoI" data="250% in 3 years" />
              </div>
            )}
            {loading && <Info>Loading..</Info>}
            {warningArea && (
              <Info>Area too large to estimate, please zoom in</Info>
            )}
            <div className="p-2 px-4 cursor-pointer bg-blue text-white ml-2 rounded flex justify-center items-center">
              Estimate
            </div>
          </div>
        </div>
      </div>
      <div className="absolute opacity-75 text-black px-5 py-2 font-mono text-xs flex flex-row-reverse bg-grey w-full">
        Using NASA WorldWind Data
      </div>
    </div>
  )
}

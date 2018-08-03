import React from "react"
import { Link } from "react-router-dom"

import { HomeIcon } from "../icons/HomeIcon"
import { DataDisplay } from "../DataDisplay"

const Info = ({ children }) => (
  <div className="bg-grey-light p-3 rounded flex justify-center items-center ml-2">
    {children}
  </div>
)

class Stater extends React.Component {
  state = {
    results: false,
    warningArea: false,
    loading: false,
  }

  estimate = () => {
    this.setState(s => ({ loading: true, results: false }))

    setTimeout(() => {
      this.setState(s => ({ results: true, loading: false }))
    }, 4000)
  }

  render() {
    const { results, warningArea, loading } = this.state

    return this.props.render({
      results,
      warningArea,
      loading,
      estimate: this.estimate,
    })
  }
}

function Toolbar({
  results = true,
  warningArea = false,
  loading = false,
  estimate,
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
                <DataDisplay label="Area" data="64,000 sq Kms" />
                <DataDisplay label="Forest Cover" data="37%" />
                <DataDisplay label="Cost" data="€ 1.8M" />
              </div>
            )}
            {loading && <Info>Loading..</Info>}
            {warningArea && (
              <Info>Area too large to estimate, please zoom in</Info>
            )}
            <div
              onClick={estimate}
              className="p-2 px-4 cursor-pointer bg-blue text-white ml-2 rounded flex justify-center items-center"
            >
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

export const TB = propsOriginal => (
  <Stater render={props => <Toolbar {...props} {...propsOriginal} />} />
)

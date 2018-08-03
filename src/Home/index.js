import React from "react"
import { Link } from "react-router-dom"

export class Home extends React.Component {
  render() {
    return (
      <div className="w-full p-6 flex">
        <Link
          to="/estimator"
          className="bg-blue p-5 no-underline cursor-pointer white font-mono text-white rounded"
        >
          Estimator
        </Link>
      </div>
    )
  }
}

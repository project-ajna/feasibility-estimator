import React from "react"
import { Link } from "react-router-dom"

export class Home extends React.Component {
  render() {
    return (
      <div className="w-full flex flex-col bg-grey-light h-screen">
        <div
          className="w-full bg-green h-full"
          style={{
            background: "url(/forest.jpg)",
            backgroundSize: "cover",
          }}
        />
        <div className="w-full p-5 flex">
          <Link
            to="/estimator"
            className="bg-blue p-5 no-underline flex items-center cursor-pointer white font-mono text-white rounded"
          >
            Estimator
          </Link>
        </div>
        <div className="w-full p-5 flex bg-black text-white font-mono text-xs">
          <a className="mr-2 text-white no-underline font-bold" href="">
            Github
          </a>{" "}
          |{" "}
          <a
            className="mx-2 text-white no-underline font-bold"
            href="mailto:jikkujose@gmail.com"
          >
            Contact
          </a>{" "}
          |{" "}
          <a
            className="mx-2 text-white no-underline font-bold"
            href="https://medium.com/singularityu/ajna-wins-global-impact-challenge-india-2018-d2af5ef8b038"
          >
            Singularity University's Recognition
          </a>
        </div>
      </div>
    )
  }
}

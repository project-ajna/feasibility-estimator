import React from "react"
import { Link } from "react-router-dom"
import YouTube from "react-youtube"

const opts = {
  height: "390",
  width: "640",
  playerVars: {
    autoplay: 0,
  },
}

export class Home extends React.Component {
  render() {
    return (
      <div className="w-full flex flex-col bg-grey-light">
        <div
          className="w-full h-16 px-5 flex items-center font-mono"
          style={{ background: "url(255, 255, 255, 0.5)" }}
        >
          Project Ajna
        </div>
        <div
          className="w-full bg-green h-full p-5"
          style={{
            background: "url(/forest.jpg)",
            backgroundSize: "cover",
          }}
        >
          <div className="px-5 flex justify-between items-center ">
            <div
              className="text-white font-mono"
              style={{ width: "30rem", fontSize: "3rem" }}
            >
              Ajna combats illegal logging using drones, deep learning,
              satellite data & blockchain
            </div>
            <YouTube
              videoId="q4kK2TsPAjc"
              opts={opts}
              onReady={this._onReady}
            />
          </div>
        </div>
        <div
          className="w-full p-5 flex flex-col justify-center items-center"
          style={{ height: "15rem" }}
        >
          <div className="p-5 font-mono text-xl">
            Try our estimator that uses Nasa WorldWind data to estimate the cost
            implementing Ajna
          </div>
          <Link
            style={{ width: "10rem" }}
            to="/estimator"
            className="bg-blue p-5 no-underline flex justify-center items-center cursor-pointer white font-mono text-white rounded"
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

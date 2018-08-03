import React from "react"
import { Globe } from "../WorldWind"
import { TB } from "../Toolbar"

function estimate() {
  console.log(estimate)
}

function update() {}

export class Estimator extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      data: {
        cover: "",
        area: "",
        cost: "",
      },
      error: false,
      loading: false,
    }

    console.log(estimate, update)
  }

  estimate = () => {
    this.handleClick()
  }

  wireGlobe = handleClick => {
    this.handleClick = handleClick
  }

  update = data => {
    console.log("update", data)
    this.setState({ data, loading: false })
  }

  set = s => {
    this.setState(s)
  };

  render() {
    return (
      <div className="bg-black h-screen">
        <TB
          loading={this.state.loading}
          warningArea={this.state.error}
          results={this.state.data}
          estimate={this.estimate}
        />
        <Globe
          className="w-full"
          style={{ height: "calc(100% - 6.3rem)" }}
          setup={this.wireGlobe}
          update={this.update}
          set={this.set}
        />
      </div>
    )
  }
}

import React, { Component } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import { Estimator } from "./Estimator"
import { Home } from "./Home"

const NotFound = () => <div className="w4 h4 bg-yellow" />

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={routeProps => <Home {...routeProps} />}
          />
          <Route exact path="/estimator" render={routeProps => <Estimator />} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    )
  }
}

export default App

import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Home from './views/home'
import AirJordan from './views/air-jordan'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={Home} exact path="/" />
        <Route component={AirJordan} exact path="/air-jordan" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))

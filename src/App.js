import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import About from './containers/About'
import Blog from './containers/Blog'
import Projects from './containers/Projects'

class App extends Component {

  render() {
    return(
      <Router>
        <Switch>
          <div className="App">
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/blog' component={Blog} />
            <Route exact path='/projects' component={Projects} />
          </div>
        </Switch>
      </Router>
    )
  }
}

export default App;

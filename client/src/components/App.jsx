import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Home from './Home';
import Projects from './Projects';
import Header from './Header';

class App extends Component {
  state = {};
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/:name' component={Projects} />
            <Redirect from='*' to='/' />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

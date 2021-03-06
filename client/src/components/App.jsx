import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Home from './Home';
import Projects from './Projects';
import Contact from './Contact';
import Other from './Other';
import Cv from './Cv';
import GoToTop from './GoToTop';

class App extends Component {
  state = {};

  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/contact' component={Contact} />
            <Route exact path='/other' component={Other} />
            <Route exact path='/cv' component={Cv} />
            <Route exact path='/:name' component={Projects} />
            <Redirect from='*' to='/' />
          </Switch>
          <GoToTop />
        </div>
      </Router>
    );
  }
}

export default App;

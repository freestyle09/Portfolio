import React, { Component } from 'react';

import Header from './Header';
import AboutMe from './AboutMe';

class App extends Component {
  state = {};
  render() {
    return (
      <div>
        <Header />
        <AboutMe />
      </div>
    );
  }
}

export default App;

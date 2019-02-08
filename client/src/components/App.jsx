import React, { Component } from 'react';

import Header from './Header';
import AboutMe from './AboutMe';
import MySkills from './MySkills';
import Portfolio from './Portfolio';

class App extends Component {
  state = {};
  render() {
    return (
      <div>
        <Header />
        <AboutMe />
        <MySkills />
        <Portfolio />
      </div>
    );
  }
}

export default App;

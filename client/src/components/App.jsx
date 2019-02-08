import React, { Component } from 'react';

import Header from './Header';
import AboutMe from './AboutMe';
import MySkills from './MySkills';

class App extends Component {
  state = {};
  render() {
    return (
      <div>
        <Header />
        <AboutMe />
        <MySkills />
      </div>
    );
  }
}

export default App;

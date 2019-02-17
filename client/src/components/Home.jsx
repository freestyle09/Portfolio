import React, { Component } from 'react';

import AboutMe from './AboutMe';
import MySkills from './MySkills';
import Portfolio from './Portfolio';

class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <AboutMe />
        <MySkills />
        <Portfolio />
      </div>
    );
  }
}

export default Home;

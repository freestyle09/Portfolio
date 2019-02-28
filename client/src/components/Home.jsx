import React, { Component } from 'react';

import Header from './Header';
import AboutMe from './AboutMe';
import MySkills from './MySkills';
import Portfolio from './Portfolio';
import Contact from './Contact';

class Home extends Component {
  state = {};

  render() {
    return (
      <div>
        <Header />
        <AboutMe />
        <MySkills />
        <Portfolio />
        <Contact />
      </div>
    );
  }
}

export default Home;

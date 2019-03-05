import React, { Component } from 'react';
import Menu from './Menu';
import Arrow from './Arrow';

class Header extends Component {
  state = {};

  render() {
    return (
      <header>
        <div className='background-image' />
        <div className='container'>
          <h1>Józef Rzadkosz</h1>
          <div>An interactive front-end developer with the passion for creativity</div>
          <Menu />
          <Arrow />
        </div>
      </header>
    );
  }

  mql = window.matchMedia('(orientation: portrait)');

  resize = m => {
    if (m.matches) {
      const header = document.querySelector('header');
      let height = document.documentElement.clientHeight + 'px';
      header.style.height = height;
    } else {
      const header = document.querySelector('header');
      let height = document.documentElement.clientHeight + 'px';
      header.style.height = height;
    }
  };
  componentDidMount() {
    this.mql.addListener(this.resize);
  }
  componentWillUnmount() {
    this.mql.removeListener(this.resize);
  }
}

export default Header;

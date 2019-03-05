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

  mql;
  header;

  changeOrientation = m => {
    if (m.matches) {
      let height = window.innerHeight + 'px';
      this.header.style.height = height;
    } else {
      let height = window.innerHeight + 'px';
      this.header.style.height = height;
    }
  };

  componentDidMount() {
    this.header = document.querySelector('header');
    this.mql = window.matchMedia('(orientation: portrait)');

    if (window.innerWidth < 897) {
      let height = window.innerHeight + 'px';
      this.header.style.height = height;
    }
    this.mql.addListener(this.changeOrientation);
  }
  componentWillUnmount() {
    this.mql.removeListener(this.changeOrientation);
  }
}

export default Header;

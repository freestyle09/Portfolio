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
      console.log('portair');
      let height = document.documentElement.clientHeight + 'px';
      this.header.style.height = height;
    } else {
      console.log('landscape');
      let height = document.documentElement.clientHeight + 'px';
      this.header.style.height = height;
    }
  };

  componentDidMount() {
    this.header = document.querySelector('header');
    this.mql = window.matchMedia('(orientation: portrait)');

    if (window.innerWidth < 768) {
      let height = document.documentElement.clientHeight + 'px';
      this.header.style.height = height;
    }
    this.mql.addListener(this.changeOrientation);
  }
}

export default Header;

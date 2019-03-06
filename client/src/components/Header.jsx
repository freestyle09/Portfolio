import React, { Component } from 'react';
import Menu from './Menu';
import Arrow from './Arrow';

class Header extends Component {
  state = {};

  render() {
    console.log('rendered');
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

  changeOrientation = async m => {
    if (m.matches) {
      setTimeout(() => {
        let height = window.innerHeight + 'px';
        this.header.style.height = height;
      }, 1);
    } else {
      setTimeout(() => {
        let height = window.innerHeight + 'px';
        this.header.style.height = height;
      }, 1);
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

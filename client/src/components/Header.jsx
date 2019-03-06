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

  changeHeight = () => {
    setTimeout(() => {
      let height = window.innerHeight + 'px';
      this.header.style.height = height;
    }, 1);
  };

  changeOrientation = async m => {
    if (m.matches) {
      this.changeHeight();
    } else {
      this.changeHeight();
    }
  };

  resize = () => {
    if (window.innerWidth > 879) {
      this.changeHeight();
    }
  };

  componentDidMount() {
    this.header = document.querySelector('header');
    this.mql = window.matchMedia('(orientation: portrait)');
    this.mql.addListener(this.changeOrientation);
    window.addEventListener('resize', this.resize);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.resize);
    this.mql.removeListener(this.changeOrientation);
  }
}

export default Header;

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

  resize = () => {
    if (window.innerWidth < 768) {
      const header = document.querySelector('header');
      let height = document.documentElement.clientHeight + 'px';
      header.style.height = height;
    }
  };
  componentDidMount() {
    window.addEventListener('resize', this.resize);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.resize);
  }
}

export default Header;

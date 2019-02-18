import React, { Component } from 'react';
import Menu from './Menu';

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
        </div>
      </header>
    );
  }
}

export default Header;

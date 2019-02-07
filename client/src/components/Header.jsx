import React, { Component } from 'react';

class Header extends Component {
  state = {};
  render() {
    return (
      <header>
        <div className='background-image' />
        <div className='container'>
          <h1>Józef Rzadkosz</h1>
          <div>An interactive front-end developer with the passion for creativity</div>
          <ul className='menu'>
            <li>
              <a href='#'>Home</a>
            </li>
            <li>
              <a href='#'>Projects</a>
            </li>
            <li>
              <a href='#'>Contact</a>
            </li>
          </ul>
        </div>
      </header>
    );
  }
}

export default Header;

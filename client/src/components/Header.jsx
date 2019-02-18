import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

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
              <NavLink exact activeClassName='active' to='/'>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink exact activeClassName='active' to='/other'>
                Other
              </NavLink>
            </li>
            <li>
              <NavLink exact activeClassName='active' to='/contact'>
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </header>
    );
  }
}

export default Header;

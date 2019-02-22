import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Menu extends Component {
  state = {};
  render() {
    return (
      <ul className='menu'>
        <li>
          <NavLink exact activeClassName='active' to='/'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink exact activeClassName='active' to='/other'>
            Other Projects
          </NavLink>
        </li>
      </ul>
    );
  }
}

export default Menu;

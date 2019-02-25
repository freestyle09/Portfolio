import React, { Component } from 'react';
import Menu from './Menu';

class Other extends Component {
  state = {};
  render() {
    return (
      <section id='other'>
        <div className='background-image' />
        <div className='container'>
          <div className='other-menu'>
            <h1>Other projects</h1>
            <Menu />
          </div>
        </div>
      </section>
    );
  }
}

export default Other;

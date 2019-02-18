import React, { Component } from 'react';
import Menu from './Menu';

class SmallMenu extends Component {
  state = {};
  render() {
    return (
      <section id='menu'>
        <div className='background-image' />
        <div className='container'>
          <div>
            <h1>Józef Rzadkosz</h1>
            <Menu />
          </div>
        </div>
      </section>
    );
  }
}

export default SmallMenu;

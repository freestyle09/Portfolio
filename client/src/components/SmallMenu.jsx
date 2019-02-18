import React, { Component } from 'react';
import Menu from './Menu';

class SmallMenu extends Component {
  state = {};
  render() {
    return (
      <section id='menu'>
        <div className='background-image' />
        <div className='container'>
          <div className='small-menu'>
            <h1>Józef Rzadkosz</h1>
            <Menu />
          </div>
          <div className='title'>
            <h3>{this.props.title}</h3>
            <h4>{this.props.smallDesc}</h4>
          </div>
        </div>
      </section>
    );
  }
}

export default SmallMenu;

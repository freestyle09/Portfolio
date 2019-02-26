import React, { Component } from 'react';
import Menu from './Menu';
class Cv extends Component {
  state = {
    language: 'en'
  };
  render() {
    return (
      <section id='cv'>
        <div className='background-image' />
        <div className='container'>
          <div className='flex'>
            <h1>cv</h1>
            <Menu />
          </div>
        </div>
      </section>
    );
  }
}

export default Cv;

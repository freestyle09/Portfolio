import React, { Component } from 'react';
import Menu from './Menu';
import Gallery from './Gallery';
import Footer from './Footer';

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
          <div className='text'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur eos ullam odio magnam? Eligendi, labore
            dolores delectus voluptatum corporis rem distinctio non debitis at commodi ullam, incidunt pariatur dolorum
            rerum?
          </div>
          <Gallery />
        </div>
        <Footer />
      </section>
    );
  }
}

export default Other;

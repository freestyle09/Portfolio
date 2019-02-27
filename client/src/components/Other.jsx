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
            In the meantime while I was learning programming I was trying to create simply 3D model of my brothers
            house. From house project I have created model in Blender and later I have moved this model into game engine
            Unreal Engine 4. In this game I wanted to take a person on a journey around the house. This person could
            walk around the house and simply go sightseeing. This project is not finished yet but I want to end it
            someday and improve my modeling, game desing skills in those technologies. Some of models are made for study
            only.
          </div>
          <Gallery />
        </div>
        <Footer />
      </section>
    );
  }
}

export default Other;

import React, { Component } from 'react';
import Lightbox from './Lightbox';

class Gallery extends Component {
  images = [];

  render() {
    return (
      <section id='gallery'>
        <Lightbox images={this.images} />
      </section>
    );
  }

  componentWillMount() {
    for (let i = 1; i < 24; i++) {
      let obj = {};

      obj = {
        id: i,
        url: `${i}.jpg`,
        tb: `${i}.jpg`
      };

      this.images.push(obj);
    }
  }
}

export default Gallery;
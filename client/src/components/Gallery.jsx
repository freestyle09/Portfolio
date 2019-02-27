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
    for (let i = 1; i < 28; i++) {
      let obj = {};
      if (i === 6 || i === 7 || i === 8 || i === 9) {
        obj = {
          id: i,
          class: 'vertical',
          url: `${i}.jpg`,
          tb: `thumb/${i}.jpg`
        };
      } else {
        obj = {
          id: i,
          url: `${i}.jpg`,
          tb: `thumb/${i}.jpg`
        };
      }

      this.images.push(obj);
    }
  }
}

export default Gallery;

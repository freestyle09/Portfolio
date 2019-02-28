import React, { Component } from 'react';

class Arrow extends Component {
  state = {};
  aboutme;

  seeMore = () => {
    this.aboutme.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
  };
  render() {
    return (
      <div onClick={this.seeMore} id='arrow'>
        <div className='arrow'>
          <div className='arrow-top' />
          <div className='arrow-bottom' />
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.aboutme = document.getElementById('aboutme');
  }
}

export default Arrow;

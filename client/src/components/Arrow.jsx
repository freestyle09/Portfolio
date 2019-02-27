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
        <div>
          <i className='fas fa-arrow-down' />
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.aboutme = document.getElementById('aboutme');
    console.log(this.aboutme);
  }
}

export default Arrow;

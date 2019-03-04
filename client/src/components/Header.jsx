import React, { Component } from 'react';
import Menu from './Menu';
import Arrow from './Arrow';

class Header extends Component {
  state = {};
  header = React.createRef();
  render() {
    return (
      <header ref={this.header}>
        <div className='background-image' />
        <div className='container'>
          <h1>Józef Rzadkosz</h1>
          <div>An interactive front-end developer with the passion for creativity</div>
          <Menu />
          <Arrow />
        </div>
      </header>
    );
  }

  componentDidMount() {
    if (window.innerWidth < 768) {
      const height = document.documentElement.clientHeight;
      this.header.current.style.height = `${height}px`;
    }
  }
}

export default Header;

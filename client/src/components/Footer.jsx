import React, { Component } from 'react';

class Footer extends Component {
  state = {
    date: new Date()
  };
  render() {
    return (
      <footer>
        <div className='container'>Copyright &copy; {this.state.date.getFullYear()} | Józef Rzadkosz</div>
      </footer>
    );
  }
}

export default Footer;

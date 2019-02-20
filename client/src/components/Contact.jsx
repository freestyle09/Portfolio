import React, { Component } from 'react';
import ContactForm from './ContactForm';

class Contact extends Component {
  state = {
    date: new Date()
  };
  render() {
    return (
      <section id='contact'>
        <div className='background-image' />
        <ContactForm />
        <div id='footer'>Copyright &copy; {this.state.date.getFullYear()} Józef Rzadkosz</div>
      </section>
    );
  }
}

export default Contact;

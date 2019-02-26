import React from 'react';
import Swal from 'sweetalert2';

export default class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      surname: '',
      email: '',
      phone: '',
      message: '',
      errors: null,
      show: false,
      isLoading: false
    };
  }

  errors = [];
  errFirst = 'Name is required and must be at least 3 characters long';
  errSurname = 'Surname is required and must be at least 3 characters long';
  errEmail = 'E-mail is required';
  errEmailCorrect = 'E-mail must be valid address';
  errPhone = 'Phone number must be at least 9 digits long';
  errMessage = 'Message is required and must be at least 10 characters long';

  handleFirstName = e => {
    const firstName = e.target.value;
    if (firstName.length < 3) {
      if (this.errors.indexOf(this.errFirst) < 0) {
        this.errors.push(this.errFirst);
      }
      e.target.classList.add('input-bottom-validate');
      this.setState({
        errors: this.errors
      });
    } else {
      e.target.classList.remove('input-bottom-validate');
      let index = this.errors.indexOf(this.errFirst);
      if (index > -1) {
        this.errors.splice(index, 1);
        this.setState({
          errors: this.errors
        });
      }
    }
    this.setState({
      firstName
    });
  };
  handleSurname = e => {
    const surname = e.target.value;
    if (surname.length < 3) {
      if (this.errors.indexOf(this.errSurname) < 0) {
        this.errors.push(this.errSurname);
      }
      e.target.classList.add('input-bottom-validate');
      this.setState({
        errors: this.errors
      });
    } else {
      e.target.classList.remove('input-bottom-validate');
      let index = this.errors.indexOf(this.errSurname);
      if (index > -1) {
        this.errors.splice(index, 1);
        this.setState({
          errors: this.errors
        });
      }
    }
    this.setState({
      surname
    });
  };
  handleEmail = e => {
    const email = e.target.value;
    // Validate
    if (email.length < 3) {
      if (this.errors.indexOf(this.errEmail) < 0) {
        this.errors.push(this.errEmail);
      }
      e.target.classList.add('input-bottom-validate');
      this.setState({
        errors: this.errors
      });
    } else {
      e.target.classList.remove('input-bottom-validate');
      let index = this.errors.indexOf(this.errEmail);
      if (index > -1) {
        this.errors.splice(index, 1);
        this.setState({
          errors: this.errors
        });
      }
    }

    if (email.indexOf('@') < 0) {
      if (this.errors.indexOf(this.errEmailCorrect) < 0) {
        this.errors.push(this.errEmailCorrect);
      }
      e.target.classList.add('input-bottom-validate');
      this.setState({
        errors: this.errors
      });
    } else {
      e.target.classList.remove('input-bottom-validate');
      let index = this.errors.indexOf(this.errEmailCorrect);
      if (index > -1) {
        this.errors.splice(index, 1);
        this.setState({
          errors: this.errors
        });
      }
    }

    this.setState({
      email
    });
  };
  handlePhone = e => {
    const phone = e.target.value;
    // Validation
    if (phone.length < 9) {
      if (this.errors.indexOf(this.errPhone) < 0) {
        this.errors.push(this.errPhone);
      }
      e.target.classList.add('input-bottom-validate');
      this.setState({
        errors: this.errors
      });
    } else {
      e.target.classList.remove('input-bottom-validate');
      let index = this.errors.indexOf(this.errPhone);
      if (index > -1) {
        this.errors.splice(index, 1);
        this.setState({
          errors: this.errors
        });
      }
    }

    this.setState({
      phone
    });
  };
  handleMessage = e => {
    const message = e.target.value;
    // Validation
    if (message.length <= 10) {
      if (this.errors.indexOf(this.errMessage) < 0) {
        this.errors.push(this.errMessage);
      }
      e.target.classList.add('input-bottom-validate');
      this.setState({
        errors: this.errors
      });
    } else {
      e.target.classList.remove('input-bottom-validate');
      let index = this.errors.indexOf(this.errMessage);
      if (index > -1) {
        this.errors.splice(index, 1);
        this.setState({
          errors: this.errors
        });
      }
    }
    this.setState({
      message
    });
  };

  sendForm = e => {
    e.preventDefault();
    if (this.state.firstName.length === 0) {
      if (this.errors.indexOf(this.errFirst) < 0) {
        this.errors.push(this.errFirst);
      }
      document.getElementById('firstName').classList.add('input-bottom-validate');
    }
    if (this.state.surname.length === 0) {
      if (this.errors.indexOf(this.errSurname) < 0) {
        this.errors.push(this.errSurname);
      }
      document.getElementById('surname').classList.add('input-bottom-validate');
    }
    if (this.state.email.length === 0) {
      if (this.errors.indexOf(this.errEmail) < 0) {
        this.errors.push(this.errEmail);
      }
      document.getElementById('email').classList.add('input-bottom-validate');
    }
    if (this.state.phone.length === 0) {
      if (this.errors.indexOf(this.errPhone) < 0) {
        this.errors.push(this.errPhone);
      }
      document.getElementById('phone').classList.add('input-bottom-validate');
    }
    if (this.state.message.length === 0) {
      if (this.errors.indexOf(this.errMessage) < 0) {
        this.errors.push(this.errMessage);
      }
      document.getElementById('message').classList.add('input-bottom-validate');
    } else if (this.state.errors.length > 0) {
    } else {
      // Make an object and send it
      const obj = {
        firstName: this.state.firstName,
        surname: this.state.surname,
        email: this.state.email,
        phone: this.state.phone,
        message: this.state.message
      };
      this.setState({
        isLoading: true
      });
      fetch('/contact', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
      })
        .then(resp => resp.json())
        .then(() => {
          // Alert after submiting the form
          this.setState({
            isLoading: false
          });
          Swal.fire({
            title: 'Success!',
            text: 'E-mail sent successfully',
            type: 'success',
            confirmButtonText: 'Close'
          });
        })
        .catch(() => {
          this.setState({
            isLoading: false
          });
          Swal.fire({
            title: 'Ups...',
            text: 'Email could not be sent',
            type: 'error',
            confirmButtonText: 'Close'
          });
        });

      const form = document.querySelector('.form');
      const input = form.querySelectorAll('input:not([type=hidden]), textarea');
      for (let el of input) {
        el.value = '';
      }
      this.setState({
        firstName: '',
        surname: '',
        email: '',
        phone: '',
        message: ''
      });
    }
    this.setState({
      errors: this.errors
    });
  };

  render() {
    return (
      <div id='contact-form' className='contact-form'>
        <div className='container'>
          <h2>Contact</h2>

          {this.state.errors && (
            <div className='error'>
              {this.state.errors.map((el, index) => (
                <div key={index}>{el}</div>
              ))}
            </div>
          )}

          <form className='form' onSubmit={this.sendForm}>
            <div>
              <div className='form-group'>
                <input
                  placeholder='Name'
                  onChange={this.handleFirstName}
                  id='firstName'
                  type='text'
                  className={'form-control ' + this.props.active}
                />
              </div>
              <div className='form-group'>
                <input
                  placeholder='Surname'
                  onChange={this.handleSurname}
                  id='surname'
                  type='text'
                  className={'form-control ' + this.props.active}
                />
              </div>
              <div className='form-group'>
                <input
                  placeholder='E-mail'
                  onChange={this.handleEmail}
                  id='email'
                  type='email'
                  className={'form-control ' + this.props.active}
                />
              </div>
              <div className='form-group'>
                <input
                  placeholder='Phone'
                  onChange={this.handlePhone}
                  id='phone'
                  type='number'
                  className={'form-control ' + this.props.active}
                />
              </div>

              <div className='form-group'>
                <textarea
                  placeholder='Message'
                  id='message'
                  onChange={this.handleMessage}
                  className={'form-control ' + this.props.active}
                />
              </div>

              <div>
                <button className='btn btn-primary btn-main' type='submit' name='action'>
                  Send
                </button>
                {this.state.isLoading && (
                  <div className='loading'>
                    <div>
                      <img src='Spinner-1s-200px-white.svg' alt='' />
                      <div>Sending an e-mail...</div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

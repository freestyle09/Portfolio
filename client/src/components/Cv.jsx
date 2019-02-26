import React, { Component } from 'react';
import Menu from './Menu';
import Footer from './Footer';

class Cv extends Component {
  state = {
    language: 'en'
  };

  changeLanguage = string => {
    this.setState({
      language: string
    });
  };
  render() {
    return (
      <section id='cv'>
        <div className='background-image' />
        <div className='container'>
          <div className='flex'>
            <h1>curriculum vitae</h1>
            <Menu />
          </div>
          <div className='languages'>
            <div>
              <a
                className={this.state.language === 'en' ? 'language language-active' : 'language'}
                onClick={() => this.changeLanguage('en')}
              >
                <img src='/united-kingdom.png' alt='' />
              </a>
              <a
                className={this.state.language === 'pl' ? 'language language-active' : 'language'}
                onClick={() => this.changeLanguage('pl')}
              >
                <img src='/poland.png' alt='' />
              </a>
            </div>
            {this.state.language === 'pl' && (
              <a className='download' href='/cv_pl.pdf' download='JózefRzadkosz_cv_pl'>
                <i className='fas fa-file-download' />
              </a>
            )}
            {this.state.language === 'en' && (
              <a className='download' href='/header_train.jpg' download='JózefRzadkosz_cv_en'>
                <i className='fas fa-file-download' />
              </a>
            )}
          </div>
          {this.state.language === 'pl' && (
            <div className='cv'>
              <img src='/cv_pl.png' alt='' />
            </div>
          )}
          {this.state.language === 'en' && <div>English</div>}
        </div>
        <Footer />
      </section>
    );
  }
}

export default Cv;

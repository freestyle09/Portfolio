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
            <h1>Cv</h1>
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
              <a className='download' href='/cv_pl.pdf' download='Józef_Rzadkosz_cv_pl'>
                <i className='fas fa-file-download' />
              </a>
            )}
            {this.state.language === 'en' && (
              <a className='download' href='/cv_en.pdf' download='Józef_Rzadkosz_cv_en'>
                <i className='fas fa-file-download' />
              </a>
            )}
          </div>
          {this.state.language === 'pl' && (
            <div className='cv'>
              <h3>(Preview only)</h3>
              <div>
                <img src='/cv_pl.png' alt='' />
              </div>
            </div>
          )}
          {this.state.language === 'en' && (
            <div className='cv'>
              <h3>(Preview only)</h3>
              <div>
                <img src='/cv_en.png' alt='' />
              </div>
            </div>
          )}
        </div>
        <Footer />
      </section>
    );
  }
}

export default Cv;

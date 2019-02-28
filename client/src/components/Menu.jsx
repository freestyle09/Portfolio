import React, { Component } from 'react';
import { Link, NavLink, Redirect } from 'react-router-dom';

class Menu extends Component {
  state = {};

  goTo = selector => {
    if (window.location.pathname !== '/') {
      this.constructor.changeUrl();
    }
    let checkExist = setInterval(() => {
      let element = document.getElementById(selector);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        clearInterval(checkExist);
      }
    }, 100);
  };

  static changeUrl() {
    return <Redirect to='/' />;
  }

  goToPortfolio = () => {
    this.goTo('portfolio');
    this.closeMenu();
  };

  goToContact = () => {
    this.goTo('contact');
    this.closeMenu();
  };

  showMenu = () => {
    this.clickable.current.classList.add('clickable');
    this.menu.current.classList.toggle('menu-active');
    this.button.current.classList.toggle('menu-button-active');
  };

  goToTop = () => {
    this.closeMenu();
    document.body.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  closeMenu = () => {
    if (this.menu.current.classList.contains('menu-active')) {
      this.clickable.current.classList.remove('clickable');
      this.menu.current.classList.remove('menu-active');
      this.button.current.classList.remove('menu-button-active');
    }
  };

  menu = React.createRef();
  button = React.createRef();
  clickable = React.createRef();

  portfolio;
  contact;
  homeLink;
  portfolioLink;
  contactLink;

  render() {
    return (
      <React.Fragment>
        <ul className='menu' ref={this.menu}>
          <li>
            <NavLink id='home-link' onClick={this.goToTop} exact activeClassName='active' to='/'>
              Home
            </NavLink>
          </li>
          <li>
            <Link id='portfolio-link' to='/' onClick={this.goToPortfolio}>
              Portfolio
            </Link>
          </li>
          <li>
            <Link id='contact-link' to='/' onClick={this.goToContact}>
              Contact
            </Link>
          </li>
          <li>
            <NavLink exact activeClassName='active' to='/other/'>
              Other Projects
            </NavLink>
          </li>
          <li>
            <NavLink exact activeClassName='active' to='/cv/'>
              CV
            </NavLink>
          </li>
        </ul>
        <button onClick={this.showMenu} ref={this.button} className='menu-button'>
          Menu
        </button>
        <div ref={this.clickable} onClick={this.closeMenu} />
      </React.Fragment>
    );
  }
  scroll = () => {
    if (window.location.pathname === '/' && this.portfolio) {
      let portfolioPosition = this.portfolio.offsetTop - 200;
      let contactPosition = this.contact.offsetTop - 200;
      if (window.scrollY < portfolioPosition) {
        this.homeLink.classList.add('active');
        this.portfolioLink.classList.remove('active');
        this.contactLink.classList.remove('active');
      } else if (window.scrollY > portfolioPosition && window.scrollY < contactPosition - 200) {
        this.homeLink.classList.remove('active');
        this.portfolioLink.classList.add('active');
        this.contactLink.classList.remove('active');
      } else {
        this.homeLink.classList.remove('active');
        this.portfolioLink.classList.remove('active');
        this.contactLink.classList.add('active');
      }
    }
  };
  componentDidMount() {
    this.portfolio = document.getElementById('portfolio');
    this.contact = document.getElementById('contact');
    this.portfolioLink = document.getElementById('portfolio-link');
    this.contactLink = document.getElementById('contact-link');
    this.homeLink = document.getElementById('home-link');
    if (window.innerWidth < 768) {
      window.addEventListener('scroll', this.scroll);
    }
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.scroll);
  }
}

export default Menu;

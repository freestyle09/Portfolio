import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Portfolio extends Component {
  state = {
    projects: null
  };

  render() {
    return (
      <section id='portfolio'>
        <div className='container'>
          <h2>Portfolio</h2>
          <h3>All my projects</h3>
        </div>
        <div className='projects'>
          <div className='container'>
            {this.state.projects &&
              this.state.projects.map(el => (
                <div key={el.id} className='project'>
                  <div>
                    <NavLink to={'/' + el.url}>
                      <img src={el.image} alt='' />
                    </NavLink>

                    <NavLink to={'/' + el.url}>
                      <h4>{el.title}</h4>
                    </NavLink>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    );
  }
  componentDidMount() {
    fetch('/projects')
      .then(resp => resp.json())
      .then(data =>
        this.setState({
          projects: data
        })
      )
      .catch(error => console.log(error));
  }
}

export default Portfolio;

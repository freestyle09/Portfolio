import React, { Component } from 'react';
import Footer from './Footer';

class Projects extends Component {
  state = {
    project: null
  };
  render() {
    const project = this.state.project;
    return (
      <section id='projects'>
        {this.state.project && (
          <div>
            <div className='background-image' />

            <div className='container'>
              <h2>{project.title}</h2>
              <div className='description'>
                {/* <h4>Project Description</h4> */}
                <div>{project.description}</div>
              </div>
              <div className='technologies'>
                <h4>Technologies used in project</h4>
                <div>{project.technologies}</div>
              </div>
              <div className='image'>
                <h4>Layout</h4>
                <img src={project.image} alt='' />
              </div>
            </div>
          </div>
        )}
        <Footer />
      </section>
    );
  }

  componentDidMount() {
    fetch('/projects' + this.props.location.pathname)
      .then(resp => resp.json())
      .then(data =>
        this.setState({
          project: data
        })
      );
  }
}

export default Projects;

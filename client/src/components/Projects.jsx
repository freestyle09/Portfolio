import React, { Component } from 'react';
import Footer from './Footer';
import Menu from './Menu';

class Projects extends Component {
  state = {
    project: null
  };
  render() {
    const project = this.state.project;
    return (
      <section id='projects'>
        {project && (
          <div>
            <div className='background-image' />

            <div className='container'>
              <div className='helper'>
                <h2>{project.title}</h2>
                <h3>{project.shortDesc}</h3>
                <div>
                  <a href={project.github} target='_blank'>
                    <i className='fab fa-github' />
                  </a>
                  {project.website && (
                    <a href={project.website} target='_blank'>
                      <i className='fas fa-globe-europe' />
                    </a>
                  )}
                </div>
                {!project.isFinished && <h3 className='isFinished'>(not finished)</h3>}
                <Menu />
              </div>

              <div className='description'>
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

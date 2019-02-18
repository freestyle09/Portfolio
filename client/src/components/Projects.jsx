import React, { Component } from 'react';
import Menu from './Menu';

class Projects extends Component {
  state = {
    project: null
  };
  render() {
    const project = this.state.project;
    return (
      <div>
        {this.state.project && (
          <div>
            <Menu />
            <div className='container'>
              <h3>{project.title}</h3>
              <div>{project.description}</div>
              <img src={project.image} alt='' />
            </div>
          </div>
        )}
      </div>
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

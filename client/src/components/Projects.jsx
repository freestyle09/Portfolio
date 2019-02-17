import React, { Component } from 'react';

class Projects extends Component {
  state = {};
  render() {
    return <div>{this.props.location.project.title}</div>;
  }
}

export default Projects;

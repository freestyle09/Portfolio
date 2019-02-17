import React, { Component } from 'react';

class Projects extends Component {
  state = {
    project: null
  };
  render() {
    return <div>{this.state.project && this.state.project.title}</div>;
  }

  componentDidMount() {
    console.log(this.props);
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

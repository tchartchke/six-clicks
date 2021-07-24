import './SaveForm.css';
import React, { Component } from 'react';

class SaveForm extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      submitted: false
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      ...this.state,
      submitted: true
    })
    this.props.savePlay(this.state.name, this.props.save);
  }

  render() {
    if (this.state.submitted) {
      return <div className="saveForm">Saved!</div>;
    }
    else {
      return (
        <form className="saveForm" onSubmit={this.handleSubmit}>
          Save Your Results
          <input onChange={this.handleChange} placeholder="Name" type="text" name="name" value={this.state.name}></input>
          <input type="submit" value="Save Results"></input>
        </form>);
    }
  }
}
export default SaveForm
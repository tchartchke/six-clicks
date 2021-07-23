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
      return <div>Saved!</div>;
    }
    else {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>Name</label>
          <inpu t onChange={this.handleChange} type="text" name="name" value={this.state.name}></inpu>
          <input type="submit" value="Save Results"></input>
        </form>);
    }
  }
}
export default SaveForm
//  form to select mission start and end.
//  must validate that start and end are existing wiki pages
//  if either are empty, select random page

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Header from '../components/Header';

class InitForm extends Component {
  constructor () {
    super();
    this.state = {
      start : '',
      end : ''
    }
  }

  handleChange = (e) => {
    this.setState( {
      ...this.state,
      [e.target.name] : e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    //do some dispatch action update state and go start the game
    //if neither empty, check if valid
  }

  handleCheck = (e) => {
    const elemName = `${e.target.name}-input`
    const element = document.getElementById(elemName)
    this.toggleEnable(element)
    this.setState( {
      ...this.state,
      [e.target.name] : ''
    });
  }

  toggleEnable(element) {
    element.disabled = !element.disabled
  }

  render () {
    return (
      <div>
        <Header text={'Select End Points'} />
        <form onSubmit={this.handleSubmit}>
          <label>Start</label>
          <input onChange={this.handleChange} type="text" name="start" value={this.state.start} id="start-input"></input>
          <input onChange={this.handleCheck} type="checkbox" name="start"></input>Randomize
          <br></br>
          <label>End</label>
          <input onChange={this.handleChange} type="text" name="end" value={this.state.end} id="end-input"></input>
          <input onChange={this.handleCheck} type="checkbox" name="end"></input>Randomize
          <br></br>
          <input type="submit" value="Start Game"></input>
        </form>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/rules'>Rules</Link></li>
      </div>
    );
  }
}


export default InitForm;
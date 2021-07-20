//  form to select mission start and end.
//  must validate that start and end are existing wiki pages
//  if either are empty, select random page

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Header from '../components/Header';

const endPoint = 'https://en.wikipedia.org/w/api.php'

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

    // for (const [key, value] of Object.entries(this.state)) {
    //   if (value === '') {
    //     this.setState( {
    //       ...this.state,
    //       // [key] : 'Special:Random' 
    //     })
    //   } else {
    //     fetch(endPoint + '?action=parse&page='+ value + '&prop=text&format=json&origin=*')
    //     .then(response => response.json())
    //     .then(data => {
    //       if (data.error){
    //         console.log('cannot parse ' + key + 'ing point')
    //         //
    //       } else {

    //       }
    //     });
    //     // `https://en.wikipedia.org/w/api.php?action=parse&page=${Mozart}&prop=text&formatversion=2&format=json`
    //   }
      
    // }
    //if start and end are valid
    if (this.validMission(this.state)) {
      this.props.startGame(this.state)
    }
    console.log('end of submit')
  }

  validMission(mission){
    return true;
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
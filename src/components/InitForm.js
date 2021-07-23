import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Header from '../components/Header';

class InitForm extends Component {
  constructor () {
    super();
    this.state = {
      mission: {
        start: '',
        end: ''},
      valid: {
        start: false,
        end: false},
      random: {
        start: false,
        end: false
      }
    }
  }

  handleChange = (e) => {
    this.setState( {
      ...this.state,
      mission: { 
        ...this.state.mission,
        [e.target.name]: e.target.value},
      valid: { 
        ...this.state.valid,
        [e.target.name]: false }
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    for (const [key, value] of Object.entries(this.state.mission)) {
      if (this.state.random[key]) {
        this.getRandom(key)
      } else {
        fetch(`https://en.wikipedia.org/w/api.php?action=parse&page=${value}&prop=revid&formatversion=2&format=json&origin=*`)
          .then(response => response.json())
          .then(data => {
            if (data.parse){
              this.setState({
                ...this.state,
                valid: {
                  ...this.state.valid,
                  [key]: true }
                });
            }
          })        
      }
    }  
  } 

  handleStartClick = () => {
    this.props.initPage(this.state.mission)
  }
  
  validMission(){
    if( this.state.valid.start === true && this.state.valid.end === true){
      return (<button onClick={this.handleStartClick}>Begin Mission</button>);
    }
  }

  getRandom(key){
    return fetch('https://en.wikipedia.org/w/api.php?action=query&list=random&rnlimit=1&format=json&origin=*')
    .then(resp => resp.json()).then(data => 
      {
        this.setState({...this.state,
          mission: {
            ...this.state.mission,
            [key]: data.query.random[0].title },
          valid: {
            ...this.state.valid,
            [key]: true }
        })
      })
    .catch(error => {console.log(error);}); 
  }

  handleCheck = (e) => {
    const elemName = `${e.target.name}-input`
    const element = document.getElementById(elemName)
    this.toggleEnable(element)
    const rState = this.state.random[e.target.name]
    this.setState( {
      ...this.state,
      random: { ...this.state.random,
      [e.target.name]: !rState}
    });
  }

  toggleEnable(element) {
    element.disabled = !element.disabled
  }

  render () {
    return (
      <div>
        <Header text={'Select Mission'} />
        <form onSubmit={this.handleSubmit}>
          <label>Start</label>
          <input onChange={this.handleChange} type="text" name="start" value={this.state.mission.start} id="start-input"></input>
          <input onChange={this.handleCheck} type="checkbox" name="start"></input>Randomize
          <br></br>
          <label>End</label>
          <input onChange={this.handleChange} type="text" name="end" value={this.state.mission.end} id="end-input"></input>
          <input onChange={this.handleCheck} type="checkbox" name="end"></input>Randomize
          <br></br>
          <input type="submit" value="Validate Mission"></input>
        </form>
        { this.validMission() }
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/rules'>Rules</Link></li>
      </div>
    );
  }
}


export default InitForm;
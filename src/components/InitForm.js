import './InitForm.css';
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
      return (<button className="playButton" onClick={this.handleStartClick}>Begin Mission</button>);
    }
  }

  getRandom(key){
    return fetch('https://en.wikipedia.org/w/api.php?action=query&list=random&rnnamespace=0&rnlimit=1&format=json&origin=*')
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
        <form className="initForm" onSubmit={this.handleSubmit}>
          <div className="initInput">
            <input className="inputBox" onChange={this.handleChange} type="text" name="start" value={this.state.mission.start} placeholder="Starting Wikipedia Article Title" id="start-input"></input>
            <input onChange={this.handleCheck} type="checkbox" name="start"></input>Randomize
   
            <input className="inputBox" onChange={this.handleChange} type="text" name="end" value={this.state.mission.end} placeholder="Ending Wikipedia Article Title" id="end-input"></input>
            <input onChange={this.handleCheck} type="checkbox" name="end"></input>Randomize
          </div>  
        
          <input className="validateButton" type="submit" value="Validate Mission"></input>
          
          { this.validMission() }
        </form>
        <div className="mainLink" >
          <Link className="bigbutton box3" to='/'>Home</Link>
          <Link className="bigbutton box1" to='/rules'>Rules</Link>
        </div>
      </div>
    );
  }
}


export default InitForm;
//  form to select mission start and end.
//  must validate that start and end are existing wiki pages
//  if either are empty, select random page

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Header from '../components/Header';

// const endPoint = 'https://en.wikipedia.org/w/api.php'

// https://en.wikipedia.org/w/api.php
// ?action=parse&page=
// Pet_door
// &prop=text&formatversion=2&format=json&origin=*


class InitForm extends Component {
  constructor () {
    super();
    this.state = {
      mission: {
        start : '',
        end : ''},
      valid : {
        start : false,
        end : false},
      random : {
        start : false,
        end : false
      }
    }
  }

  handleChange = (e) => {
    this.setState( {
      ...this.state,
      mission : { ...this.state.mission,
      [e.target.name] : e.target.value}
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    // debugger;

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


    // ****this will get the bare html****
    // fetch(`https://en.wikipedia.org/w/api.php?action=parse&page=${pageTitle}&prop=text&formatversion=2&format=json&origin=*`).then(response=>response.json()).then(data => console.log(data.parse.text))


    //validate mission start and end
        //if randomize selected, 




    if (this.validMission()) {
      // this.props.startGame(this.state.mission)
      this.props.startGame({start: 'Adolf Hitler', end: 'Jesus'})
    }
    console.log('end of submit')
  }

  validMission(){
    return true;
  }

  getRandom(key){
    return fetch('https://en.wikipedia.org/w/api.php?action=query&list=random&rnlimit=1&format=json&origin=*')
    .then(resp => resp.json()).then(data => 
      {
        const mission = this.state.mission
        this.setState({...this.state,
          mission : {
            ...mission,
            [key] : data.query.random[0].title
          }
        }, ()=>{console.log(this.state)})
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
      random : { ...this.state.random,
      [e.target.name] : !rState}
    });
  }

  toggleEnable(element) {
    element.disabled = !element.disabled
    
    // this.setState( {
    //   ...this.state,
    //   random : { ...this.state.random,
    //     [e.target.name] : this.state.random[e.target.name]
    //   }
    // })
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
          <input type="submit" value="Start Game"></input>
        </form>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/rules'>Rules</Link></li>
      </div>
    );
  }
}


export default InitForm;
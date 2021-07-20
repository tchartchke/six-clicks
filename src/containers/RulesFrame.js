import React, { Component } from 'react';
import Header from '../components/Header';
import Rules from '../components/Rules';

class RulesFrame extends Component {
  render () {
    return( 
      <div className="App">
        <Header text={'Rules'} />
        <Rules />
      </div>);
  }
}

export default RulesFrame
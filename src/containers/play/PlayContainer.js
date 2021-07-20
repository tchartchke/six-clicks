import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';

class PlayContainer extends Component {
  render () {
    return (
      <div>
        <Header text={'Select End Points'} />
        
        
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/rules'>Rules</Link></li>

      </div>
    );
  }
}

export default PlayContainer;
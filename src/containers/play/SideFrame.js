import React, { Component } from 'react';
import { connect } from 'react-redux'
import Mission from '../../components/Mission';
import ClickCounter from '../../components/ClickCounter';
import Path from '../../components/Path';
import './SideFrame.css';
import logo from '../../logo.svg';
import { Link } from 'react-router-dom';



class SideFrame extends Component {

  render() {
    const { clicks, path, mission } = this.props.state
    return(
      <div className="sideFrame">
        
        <Link to="/"><img src={logo} alt="Logo" /></Link>

        <Mission mission={mission}/>
        <ClickCounter clicks={clicks} />
        <Path path={path} />
      </div>    
    );
  };
}

export default connect()(SideFrame)

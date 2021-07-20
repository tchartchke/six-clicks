import React, { Component } from 'react';
import { connect } from 'react-redux'
import Mission from '../../components/Mission';
import ClickCounter from '../../components/ClickCounter';
import Path from '../../components/Path';


class SideFrame extends Component {

  render() {
    const { clicks, path, inPlay, mission } = this.props.state
    
  
    return(
      <div>
        <Mission mission={mission}/>
        <ClickCounter clicks={clicks} />
        {/* <Path path={path} /> */}
      </div>    
    );
  };
}

export default connect()(SideFrame)
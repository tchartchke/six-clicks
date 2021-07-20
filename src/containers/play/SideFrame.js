import React, { Component } from 'react';
import { connect } from 'react-redux'
import Mission from '../../components/Mission';


class SideFrame extends Component {

  render() {

    const start = "Jesus";
    const end = "Hitler";
  
    return(
      <Mission start={start} end={end}/>
    );
  };
}

export default connect()(SideFrame)
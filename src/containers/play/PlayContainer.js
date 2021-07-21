import React, { Component } from 'react';
import { connect } from 'react-redux'

import InitForm from '../../components/InitForm';
import SideFrame from './SideFrame';
import WikiFrame from './WikiFrame';

class PlayContainer extends Component {
  //  if inPlay
  //    return start game
  //  else
  //    return init form to init states
  
  render () {
    if (this.props.inPlay){
      return (
        <div>
          <SideFrame state={this.props}/>
          <WikiFrame pageTitle={this.props.path[this.props.path.length - 1]} next={this.props.next}/>
        </div>
      )
    } else {
      return (
        <div>
          <InitForm startGame={this.props.start}/>
          


        </div>
      );
      }
  }
}

const mapStoreToProps = state => {
  return (
    {    
        clicks : state.clicks, 
        path : state.path, 
        inPlay : state.inPlay, 
        mission : state.mission}
  );
}

const mapDispatchToProps = dispatch => {
  return (
    {
      start: mission => dispatch({type: "START_GAME", mission}),
      next: page => dispatch({type: "NEXT_PAGE", page})
    }
  )
}

export default connect(mapStoreToProps, mapDispatchToProps)(PlayContainer);
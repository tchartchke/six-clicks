import React, { Component } from 'react';
import { connect } from 'react-redux'

import InitForm from '../../components/InitForm';
import SideFrame from './SideFrame';
import WikiFrame from './WikiFrame';
import endGame from '../../components/EndGame'
import EndGame from '../../components/EndGame';

class PlayContainer extends Component {

  render () {
    if (this.props.inPlay){
      return (
        <div>
          <SideFrame state={this.props}/>
          <WikiFrame pageTitle={this.props.path[this.props.path.length - 1]} next={this.props.next} end={this.props.mission.end} endGame={this.props.endGame}/>
        </div>
      )
    } else {
      if (this.props.gameOver) {
        return (
          <EndGame />
        );
      } else {
      return (
        <InitForm startGame={this.props.start}/>
      );
      }
    }
  }
}

const mapStoreToProps = state => {
  return (
    {    
        clicks : state.clicks, 
        path : state.path, 
        inPlay : state.inPlay, 
        gameOver: state.gameOver,
        mission : state.mission}
  );
}

const mapDispatchToProps = dispatch => {
  return (
    {
      start: mission => dispatch({type: "START_GAME", mission}),
      next: pageTitle => dispatch({type: "NEXT_PAGE", pageTitle}),
      endGame : () => dispatch({type: 'END_GAME'})
    }
  )
}

export default connect(mapStoreToProps, mapDispatchToProps)(PlayContainer);
import React, { Component } from 'react';
import { connect } from 'react-redux'

import { fetchPage, initPage, endGame } from '../actions/actions'

import InitForm from '../components/InitForm';
import SideFrame from './play/SideFrame';
import WikiFrame from './play/WikiFrame';
import EndGame from '../components/EndGame';

class PlayContainer extends Component {

  render () {
    if (this.props.inPlay){
      return (
        <div>
          <SideFrame state={this.props}/>
          <WikiFrame pageTitle={this.props.mission.start} next={this.props.fetchPage} end={this.props.mission.end} endGame={this.props.endGame} currHTML={this.props.currHTML}/>
        </div>
      )
    } else {
      if (this.props.gameOver) {
        return (
          <EndGame clicks={this.props.clicks} mission={this.props.mission}/>
        );
      } else {
      return (
        <InitForm initPage={this.props.initPage}/>
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
        mission : state.mission,
        currHTML : state.currHTML}
  );
}

const mapDispatchToProps = dispatch => {
  return (
    {
      initPage: mission => dispatch(initPage(mission)),
      fetchPage: pageTitle => dispatch(fetchPage(pageTitle)),
      endGame : () => dispatch(endGame())
    }
  )
}

export default connect(mapStoreToProps, mapDispatchToProps)(PlayContainer);
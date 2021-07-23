import React, { Component } from 'react';
import { connect } from 'react-redux'

import { fetchPage, initPage, endGame, savePlay, getPlaythrus, replayMission, newMission } from '../actions/actions'

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
          <EndGame clicks={this.props.clicks} path={this.props.path} mission={this.props.mission} savePlay={this.props.savePlay} getPlaythrus={this.props.getPlaythrus} playthrus={this.props.playthrus} replayMission={this.props.replayMission} newMission={this.props.newMission}/>
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
        clicks: state.clicks, 
        path: state.path, 
        inPlay: state.inPlay, 
        gameOver: state.gameOver,
        mission: state.mission,
        currHTML: state.currHTML,
        playthrus: state.playthrus}
  );
}

const mapDispatchToProps = dispatch => {
  return (
    {
      initPage: mission => dispatch(initPage(mission)),
      fetchPage: pageTitle => dispatch(fetchPage(pageTitle)),
      endGame: () => dispatch(endGame()),
      savePlay: (name, play) => dispatch(savePlay(name, play)),
      getPlaythrus: () => dispatch(getPlaythrus()),
      replayMission: mission => dispatch(replayMission(mission)),
      newMission: () => dispatch(newMission())
    }
  )
}

export default connect(mapStoreToProps, mapDispatchToProps)(PlayContainer);
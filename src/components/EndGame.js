import React, { Component } from 'react';
import { connect } from 'react-redux'
import { savePlay, getPlaythrus, /*replayMission, */newMission } from '../actions/actions'
import './EndGame.css';

import SaveForm from './SaveForm';
import PreviousPlays from './PreviousPlays';
import Header from './Header';

class EndGame extends Component {

  componentDidMount(){
    this.props.getPlaythrus()
  }

  render() {
    const { clicks, path, mission } = this.props;
    const save = { clicks, path, mission };
    return (
      <div className="endGame">

        <Header text={"Congrats! You made it!"}/>
        <h1>
          It took you <b>{clicks} click(s)</b> to get from <b>{mission.start}</b> to <b>{mission.end}</b>
        </h1>
        
        <SaveForm save={save} savePlay={this.props.savePlay} getPlaythrus={this.props.getPlaythrus}/>
        {/* <div>
          <a href="/play" onClick={() => this.props.replayMission(mission)}>Play this Mission again</a>
        </div>   */}
        <div>
          <a href="/play" onClick={this.props.newMission}>Play new Mission </a>
        </div>
        <PreviousPlays plays={this.props.playthrus}/>
      </div>
    );
  }
}

const mapStoreToProps = state => {
  return (
    {    
        clicks: state.clicks, 
        path: state.path, 
        mission: state.mission,
        playthrus: state.playthrus}
  );
}

const mapDispatchToProps = dispatch => {
  return (
    {
      savePlay: (name, play) => dispatch(savePlay(name, play)),
      getPlaythrus: () => dispatch(getPlaythrus()),
      // replayMission: mission => dispatch(replayMission(mission)),
      newMission: () => dispatch(newMission())
    }
  )
}

export default connect(mapStoreToProps, mapDispatchToProps)(EndGame)
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { savePlay, getPlaythrus, replayMission, newMission } from '../actions/actions'

import SaveForm from './SaveForm';
import PreviousPlays from './PreviousPlays';

class EndGame extends Component {

  componentDidMount(){
    this.props.getPlaythrus()
  }

  render() {
    const { clicks, path, mission } = this.props;
    const save = { clicks, path, mission };
    return (
      <div>You did it! <br></br>
      It took you {clicks} click(s) to get from {mission.start} to {mission.end}
        
        <ul>
        <li>Save your results</li>
        <SaveForm save={save} savePlay={this.props.savePlay} getPlaythrus={this.props.getPlaythrus}/>
        <li><a href="#" onClick={this.props.replayMission}>Play this Mission again</a></li> {/* plays game - sets init parameters */}
        <li><a href="#" onClick={this.props.newMission}>Play new Mission </a></li> {/* newMission */}
        {/* displays previous plays */}
        </ul>
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
      replayMission: mission => dispatch(replayMission(mission)),
      newMission: () => dispatch(newMission())
    }
  )
}

export default connect(mapStoreToProps, mapDispatchToProps)(EndGame)
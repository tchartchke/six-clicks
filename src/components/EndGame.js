import React, { Component } from 'react';
import SaveForm from './SaveForm';
import PreviousPlays from './PreviousPlays';

const API_URL = process.env.REACT_APP_API_URL;

class EndGame extends Component {

  componentDidMount(){
    this.props.getPlaythrus()
  }

  render() {
    const { clicks, path, mission, playthrus } = this.props;
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

export default EndGame

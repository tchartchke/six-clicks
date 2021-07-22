import React, { Component } from 'react';

class EndGame extends Component {
  render() {
    return (
      <div>You did it! <br></br>
      It took you {this.props.clicks} click(s) to get from {this.props.mission.start} to {this.props.mission.end}
        <ul>
        <li>Save you results</li>
        <li>Play this Mission again</li>
        <li>Play new Mission</li>
        </ul></div>
    );
  }
}

export default EndGame

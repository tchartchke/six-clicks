import React, { Component } from 'react';
import SaveForm from './SaveForm';
import PreviousPlays from './PreviousPlays';

class EndGame extends Component {
  constructor() {
    super();
    this.state = {
      playthrus : []
    }
  }

  componentDidMount(){
    fetch('http://localhost:3001/api/playthrus')
      .then(response => response.json())
      .then(playthrus => this.setState({ playthrus }))
  }

  render() {
    console.log(this.state)
    return (
      <div>You did it! <br></br>
      It took you {this.props.clicks} click(s) to get from {this.props.mission.start} to {this.props.mission.end}
        
        <ul>
        <li>Save your results</li> {/* makes api call to save */}
        <SaveForm />
        <li>Play this Mission again</li> {/* plays game - sets init parameters */}
        <li>Play new Mission</li> {/* Link to bring you back to init form */}
        {/* displays previous plays */}
        </ul>
        <PreviousPlays plays={this.state.playthrus}/>
      </div>
    );
  }
}

export default EndGame

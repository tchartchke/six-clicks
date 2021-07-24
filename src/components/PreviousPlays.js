import React from 'react';
import Playthru from './Playthru';
import './PreviousPlays.css';

const PreviousPlays = (props) => (
  <div className="previousPlays">
    <h2>Previously Played Missions</h2>
    <div>
      <table className="wikitable sortable">
        <tbody>
          <tr>
            <th>Name</th>
            <th>Start</th>
            <th>End</th>
            <th>Clicks</th>
          </tr>
          {props.plays.map(playthru => <Playthru key={playthru.id} playthru={playthru}/>)}
        </tbody>
      </table>
      </div>
  </div>
)

export default PreviousPlays
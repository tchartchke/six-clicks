import React from 'react';
import Playthru from './Playthru';

const PreviousPlays = (props) => (
  <div>
    <h1>Previously Played Missions</h1>
    {props.plays.map(playthru => <Playthru key={playthru.id} playthru={playthru}/>)}
  </div>
)

export default PreviousPlays
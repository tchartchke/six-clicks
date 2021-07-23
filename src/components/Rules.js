import './Rules.css';
import React from 'react';
import { Link } from 'react-router-dom';

const Rules = () => {
  return(
      <div className="RulesPage">
        <h2>Objective</h2>
        <p>Players (one or more) <a href="">start</a> on the same randomly selected article, and must navigate to another pre-selected target <a href="">article</a>, solely by clicking links within each article. The goal is to arrive at the target article in the fewest clicks (articles), or the least time. The single-player Wiki Game, known as Wikirace, Wikispeedia, WikiLadders, WikiClick, or WikiWhack, involves reducing one's previous time or number of clicks.</p>
        <p>Click only styled links - as they will bring you to the proper place. Other links will not lead you to the right place</p>
        <h2>Setup</h2>
        <ul>
          <li>Pick a start and end point of mission</li>
          <li>Can use randomizer</li>
          <li>A note on User: and Talk: Pages</li>
          <li>Validate Mission</li>
          <li>Begin Game</li>
        </ul>
        <div className="mainLink">
          <Link className="bigbutton box2" to='/play'>Play</Link>
          <Link className="bigbutton home" to='/'>Home</Link>
          </div>
      </div>
  );
}

export default Rules
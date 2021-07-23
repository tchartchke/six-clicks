import './Rules.css';
import React from 'react';
import { Link } from 'react-router-dom';

const Rules = () => {
  return(
      <div className="RulesPage">
        <p>Players (one or more) start on the same randomly selected article, and must navigate to another pre-selected target article, solely by clicking links within each article. The goal is to arrive at the target article in the fewest clicks (articles), or the least time. The single-player Wiki Game, known as Wikirace, Wikispeedia, WikiLadders, WikiClick, or WikiWhack, involves reducing one's previous time or number of clicks.</p>
        <div className="mainLink">
          <Link className="home" to='/'>Home</Link>
          </div>
      </div>
  );
}

export default Rules
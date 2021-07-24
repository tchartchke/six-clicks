import './Rules.css';
import React from 'react';
import { Link } from 'react-router-dom';

const Rules = () => {
  return(
      <div className="RulesPage">
        <h2>Objective</h2>
        <p>
          Starting from one <a href='https://en.wikipedia.org/wiki/Main_Page'>Wikipedia</a> article, use the links on the page to travel from one article to another designated article in the least number of clicks. Articles can be explicited selected or randomized.
        </p>
        <p>
        The game originated in Liverpool, England sometime around 2010 and was the brain child of - Stephen Scragg and Theo Di Caprio, both are now renowned as the “godfathers” of the <a href='https://en.wikipedia.org/wiki/Wikipedia:Wikirace'>Wiki Race game</a> and an annual event is held in Coruna, Spain to celebrate them.
        </p>
        <h2>Setup</h2>
        <ol>
          <li>Pick a start and end point for each <i>Mission</i>. Use specific titles that correspond to the Wikipedia title</li>
          <li>Check the randomizer checkmark by each end point to select a random value</li>
          <li>Select <i>Validate Mission</i> to verify the page exists on Wikipedia as an article. The <i>Begin Mission</i> button will appear if both end points are valid selections</li>
          <li>Click through the pages to reach the designated</li>
          <li>At the end there is the option to make another attempt of the same <i>Mission</i> or initiate a new one</li>
        </ol>
        <h2>Easy Mission Suggestons</h2>
        <ul>
          <li>Jesus</li>
          <li>Dictators</li>
          <li>Sports</li>
          <li>Music</li>
          <li>Countries</li>
          <li>Adolf Hitler</li>
          <li>United Nations</li>
        </ul>
        <div className="mainLink">
          <Link className="bigbutton box2" to='/play'>Play</Link>
          <Link className="bigbutton box3" to='/'>Home</Link>
          </div>
      </div>
  );
}

export default Rules


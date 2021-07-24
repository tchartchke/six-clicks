import './Path.css';

import React from 'react';

const Path = props => {
  const renderPath = props.path.map((page, id) => <li><a href={`https://en.wikipedia.org/wiki/${page}`} key={id} rel="noreferrer" target="_blank">{page}</a></li>);

  return(
    <div className="pathList">
      <h3>Path</h3>
      <ul>
        {renderPath}
      </ul>
    </div>
  );
}

export default Path
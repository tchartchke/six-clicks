//given an array, return a list of the titles of the pages

import React from 'react';

const Path = props => {
  const renderPath = props.path.map((page, id) => <li key={id}>{page}</li>);

  return(
    <div>
      Path
      <ul>
        {renderPath}
      </ul>
    </div>
  );
}

export default Path
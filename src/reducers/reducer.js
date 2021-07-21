// import { bindActionCreators } from "redux";

import { StaticRouter } from "react-router";

export default function reducer(
  state = { 
    clicks : 0, 
    path : [], 
    inPlay : false , 
    mission : {}
  }, action) {
  switch (action.type) {
    case 'START_GAME':
      return { ...state,
        path : [action.mission.start],
        inPlay : true,
        mission : action.mission
      };
    case 'NEXT_PAGE':
      return { ...state,
        clicks : state.clicks + 1,
        path : state.path.concat(action.pageTitle) };

    default:
      return state;
  }
}

//new click
//restart game
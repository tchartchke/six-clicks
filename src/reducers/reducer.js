import { bindActionCreators } from "redux";

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
      //update current page, add page to path, increment # clicks, check if page matches goal
      return { ...state };

    default:
      return state;
  }
}

//new click
//restart game
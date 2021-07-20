export default function reducer(
  state = { 
    clicks : 0, 
    path : [], 
    currPage : '', 
    inPlay : false , 
    mission : {}
  }, action) {
  switch (action.type) {
    case 'START_GAME':
      //set mission, set inPlay to true, set currPage to mission.start, add mission.start to path
      return { ...state };
    case 'NEXT_PAGE':
      //update current page, add page to path, increment # clicks, check if page matches goal
      return { ...state };

    default:
      return state;
  }
}

//new click
//restart game
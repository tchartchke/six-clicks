export default function reducer(
  state = { 
    requesting: false,
    clicks : 0, 
    path : [], 
    inPlay : false , 
    gameOver : false, 
    mission : {}, 
    currHTML : ''
  }, action) {
  switch (action.type) {
    case 'LOAD_PAGE':
      return {...state,
        requesting : true,
        path : [...state.path],
        inPlay : true,
        }  
    case 'PLAY_GAME':
      return { ...state,
        requesting : false,
        path : [action.mission.start],
        inPlay : true,
        mission : action.mission,
        currHTML : action.currHTML
        
      };
    case 'NEXT_PAGE':
      return { ...state,
        requesting : false,
        clicks : state.clicks + 1,
        path : state.path.concat(action.pageTitle),
        currHTML : action.currHTML
      };
    case 'END_GAME':
      console.log("mission accomplished")
      return {... state,
        clicks : state.clicks + 1,
        path : [...state.path],
        inPlay : false,
        gameOver : true
      };
    default:
      return state;
  }
}
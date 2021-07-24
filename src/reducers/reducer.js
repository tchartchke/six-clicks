export default function reducer(
  state = { 
    requesting: false,
    clicks: 0, 
    path: [], 
    inPlay: false , 
    gameOver: false, 
    mission: {}, 
    currHTML: '',
    playthrus: []
  }, action) {
  switch (action.type) {
    case 'LOAD_PAGE':
      return { ...state,
        requesting: true,
        path: [...state.path],
        inPlay: true } ;
    case 'PLAY_GAME':
      return { ...state,
        requesting: false,
        path: [action.mission.start],
        inPlay: true,
        mission: action.mission,
        currHTML: action.currHTML
      };
    case 'NEXT_PAGE':
      return { ...state,
        requesting: false,
        clicks: state.clicks + 1,
        path: state.path.concat(action.pageTitle),
        currHTML: action.currHTML
      };
    case 'END_GAME':
      return {...state,
        clicks: state.clicks + 1,
        path: state.path.concat(action.pageTitle),
        inPlay: false,
        gameOver: true
      };
    case 'GET_PLAYTHRUS':
      return {
        ...state,
        playthrus: action.playthrus};
    case 'REPLAY_MISSION':
      return ({ ...state,
          clicks: 0, 
          path: [], 
          inPlay: true,
          gameOver: false, 
          currHTML: '',
        });
    case 'NEW_MISSION':
    return ({ ...state,
      clicks: 0,
      path: [],
      gameOver: false,
    });
    default:
      return state;
  }
}
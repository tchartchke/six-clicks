const wikiBase = 'https://en.wikipedia.org/w/api.php?'
const API_URL = process.env.REACT_APP_API_URL;

export const initPage = (mission) => {
  return (dispatch) => {
    dispatch({ type: 'LOAD_PAGE' })
    fetch(`${wikiBase}action=parse&page=${mission.start}&prop=text&formatversion=2&format=json&origin=*`)
      .then(response => response.json())
      .then(data => {
        dispatch({ type: 'PLAY_GAME', mission, currHTML: data.parse.text })
      }).catch(e => console.log(e))
  }
}

export const fetchPage = (pageTitle) => {
  return (dispatch) => {
    dispatch({ type: 'LOAD_PAGE' })
    fetch(`${wikiBase}action=parse&page=${pageTitle}&prop=text&formatversion=2&format=json&origin=*`)
      .then(response => response.json())
      .then(data => {
        dispatch({ type: 'NEXT_PAGE', pageTitle:pageTitle, currHTML: data.parse.text })
      })
  }
}

export function endGame(pageTitle) {
  return ({type: 'END_GAME', pageTitle});
}

export function savePlay(name, play) {
  const saveObj = {
    name: name, 
    clicks: play.clicks, 
    start: play.mission.start, 
    end: play.mission.end, 
    path: play.path
  }
  return (dispatch) => {
    fetch(`${API_URL}/playthrus`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(saveObj)
    })
    .then(response => response.json())
    .then(playthrus => dispatch({ type: 'GET_PLAYTHRUS', playthrus: playthrus }))
    .catch(e => console.log(e));
  }
}

export function getPlaythrus() {
  return (dispatch) => {
    fetch(`${API_URL}/playthrus`)
      .then(response => response.json())
      .then(playthrus => dispatch({ type: 'GET_PLAYTHRUS', playthrus: playthrus }))
      .catch(e => console.log(e));
    }
}

export function replayMission(mission) {
  return (dispatch) => {
    dispatch({ type: 'REPLAY_MISSION' })
    fetch(`${wikiBase}action=parse&page=${mission.start}&prop=text&formatversion=2&format=json&origin=*`)
      .then(response => response.json())
      .then(data => {
        dispatch({ type: 'PLAY_GAME', mission, currHTML: data.parse.text })
      }).catch(e => console.log(e))
  }
}

export function newMission() {
  return ({ type: 'NEW_MISSION' });
}
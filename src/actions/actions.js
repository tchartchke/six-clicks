export const initPage = (mission) => {
  return (dispatch) => {
    dispatch({ type: 'LOAD_PAGE' })
    fetch(`https://en.wikipedia.org/w/api.php?action=parse&page=${mission.start}&prop=text&formatversion=2&format=json&origin=*`)
      .then(response => response.json())
      .then(data => {
        dispatch({ type: 'PLAY_GAME', mission, currHTML: data.parse.text })
      })
  }
}

export const fetchPage = (pageTitle) => {
  return (dispatch) => {
    dispatch({ type: 'LOAD_PAGE' })
    fetch(`https://en.wikipedia.org/w/api.php?action=parse&page=${pageTitle}&prop=text&formatversion=2&format=json&origin=*`)
      .then(response => response.json())
      .then(data => {
        dispatch({ type: 'NEXT_PAGE', pageTitle:pageTitle, currHTML: data.parse.text })
      })
  }
}

export function endGame() {
  return ({type: 'END_GAME'});
}
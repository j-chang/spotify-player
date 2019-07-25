export const UPDATE_PLAYLISTS = 'UPDATE_PLAYLISTS'

const updatePlaylists = (playlists) => (
  {
    type: UPDATE_PLAYLISTS,
    playlists
  }
)

export const fetchPlaylists = (token) => {
  const config = {
    method: 'GET',
    headers: {Authorization: `Bearer ${token}`, 'Content-Type': 'application/json'}
  }

  return (dispatch) => {
    return fetch('https://cors-anywhere.herokuapp.com/https://api.spotify.com/v1/me/playlists', config)
      .then(response => response.ok ? response : Promise.reject(response.statusText))
      .then(response => response.json())
      .then((responseJSON) => dispatch(updatePlaylists(responseJSON.items.map(playlist => playlist.name))))
      .catch(error => console.log(error))
  }
}
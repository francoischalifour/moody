import Spotify from 'spotify-web-api-js'

export const PLAYLISTS_REQUEST = 'PLAYLISTS_REQUEST'
export const PLAYLISTS_RECEIVE = 'PLAYLISTS_RECEIVE'

const spotifyApi = new Spotify()

const actionRequestPlaylists = () => {
  return {
    type: PLAYLISTS_REQUEST
  }
}

const actionReceivePlaylists = playlists => {
  return {
    type: PLAYLISTS_RECEIVE,
    playlists
  }
}

export const getPlaylists = playlistName => {
  return dispatch => {
    dispatch(actionRequestPlaylists())

    spotifyApi
      .searchPlaylists(playlistName)
      .then(playlists => dispatch(actionReceivePlaylists(playlists)))
      .catch(err => console.error('Cannot load playlist: ', err))
  }
}

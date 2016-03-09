import ajax from 'axios'
import {
  SPOTIFY_BASE,
  SPOTIFY_CLIENT_ID,
  SPOTIFY_CLIENT_SECRET,
  GET_PLAYLIST
} from './spotify'

export const PLAYLISTS_REQUEST = 'PLAYLISTS_REQUEST'
export const PLAYLISTS_RECEIVE = 'PLAYLISTS_RECEIVE'

const actionRequestPlaylists = () => {
  return {
    type: PLAYLISTS_REQUEST
  }
}

const actionReceivePlaylists = (playlists) => {
  return {
    type: PLAYLISTS_RECEIVE,
    playlists
  }
}

export const getPlaylists = (playlistName) => {
  return dispatch => {
    dispatch(actionRequestPlaylists())

    const url = `${SPOTIFY_BASE}v1/search?q=${playlistName}&type=playlist`

    return ajax.get(url)
      .then(playlists => dispatch(actionReceivePlaylists(playlists)))
      .catch(err => console.error('Cannot load playlist: ', err))
  }
}

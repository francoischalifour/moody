import Spotify from 'spotify-web-api-js'

export const PLAYLISTS_REQUEST = 'PLAYLISTS_REQUEST'
export const PLAYLISTS_RECEIVE = 'PLAYLISTS_RECEIVE'
export const PLAYLISTTRACKS_REQUEST = 'PLAYLISTTRACKS_REQUEST'
export const PLAYLISTTRACKS_RECEIVE = 'PLAYLISTTRACKS_RECEIVE'



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

const actionRequestPlaylistTracks = () => {
  return {
    type: PLAYLISTTRACKS_REQUEST
  }
}

const actionReceivePlaylistTracks = tracks => {
  return {
    type: PLAYLISTTRACKS_RECEIVE,
    tracks
  }
}

export const getPlaylistsTrack = playlist => dispatch => {
  dispatch(actionRequestPlaylistTracks())

  //TODO: get URI

  spotifyApi
    .getPlaylistTracks()
    .then(tracks => dispatch(actionReceivePlaylistTracks(tracks)))
    .catch(err => console.error('Cannot load tracks: ', err))
}


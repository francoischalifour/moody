import assign from 'object-assign'

import {
  PLAYLISTS_REQUEST,
  PLAYLISTS_RECEIVE,
  PLAYLISTTRACKS_REQUEST,
  PLAYLISTTRACKS_RECEIVE
} from '../actions/playlists'

const initialState = {
  isFetching: false,
  playlists: [],
  tracks: []
}

export default function playlistsReducer(state = initialState, action) {
  switch (action.type) {
    case PLAYLISTS_REQUEST:
      return assign({}, state, {
        isFetching: true
      })

    case PLAYLISTS_RECEIVE:
      const playlists = action.playlists

      return assign({}, state, {
        isFetching: false,
        isComplete: true,
        playlists
      })

    case PLAYLISTTRACKS_REQUEST:
      return assign({}, state, {
        isFetching: true
      })

    case PLAYLISTTRACKS_RECEIVE:
      const tracks = action.tracks

      return assign({}, state, {
        isFetching: false,
        isComplete: true,
        tracks
      })

    default:
      return state
  }
}

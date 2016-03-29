import assign from 'object-assign'

import {
  PLAYLISTS_REQUEST,
  PLAYLISTS_RECEIVE
} from '../actions/playlists'

const initialState = {
  isFetching: false,
  isComplete: false,
  playlists: [],
  tracks: []
}

export default function playlistsReducer(state = initialState, action) {
  switch (action.type) {
    case PLAYLISTS_REQUEST:
      return assign({}, state, {
        isFetching: true,
        isComplete: false
      })

    case PLAYLISTS_RECEIVE:
      const playlists = action.playlists

      return assign({}, state, {
        isFetching: false,
        isComplete: true,
        playlists
      })
  }

  return state
}
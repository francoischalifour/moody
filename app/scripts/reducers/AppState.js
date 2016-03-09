import dotProp from 'dot-prop-immutable';
// ACTIONS
import {
  GET_ARTIST,
  GET_INPUT,
  GET_ALBUMS,
  GET_TRACKS,
  CLEAR_INPUT,
  FOLLOW,
  GET_PLAYLIST
} from '../actions/artists.js';

// STATE
const INITIAL_STATE = {
  artist: [],
  albums: [],
  tracks: [],
  playlist: [],
  searchValue: '',
  receivedArtist: false,
  receivedAlbums: false,
  receivedTracks: false,
  followed: false
};

// REDUCER
export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
  case GET_ARTIST:
    state = dotProp.set(state, 'artist', action.payload.data.artists.items[0]);
    state = dotProp.set(state, 'receivedArtist', true);
    console.log(state);
    return state;
  case GET_ALBUMS:
    state = dotProp.set(state, 'albums', action.payload.data);
    state = dotProp.set(state, 'receivedAlbums', true);
    console.log(state);
    return state;
  case GET_TRACKS:
    state = dotProp.set(state, 'tracks', action.payload.data);
    state = dotProp.set(state, 'receivedTracks', true);
    console.log(state);
    return state;
  case GET_PLAYLIST:
    state = dotProp.set(state, 'playlist', action.payload.data);
    console.log(state);
    return state;
  case GET_INPUT:
    state = dotProp.set(state, 'searchValue', action.payload);
    console.log(state);
    return state;
  case CLEAR_INPUT:
    state = dotProp.set(state, 'searchValue', action.payload);
    console.log(state);
    return state;
  case FOLLOW:
    state = dotProp.set(state, 'followed', true);
    console.log(state);
    return state;
  default:
    return state;
  }
}
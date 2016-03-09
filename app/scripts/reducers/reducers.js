import { combineReducers } from 'redux'
import playlists from './playlistsReducer'

const rootReducer = combineReducers({
  playlists
})

export default rootReducer

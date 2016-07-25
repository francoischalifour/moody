import { combineReducers } from 'redux'
import playlists from './playlistsReducer'
import user from './userReducer'

const rootReducer = combineReducers({
  playlists,
  user,
})

export default rootReducer

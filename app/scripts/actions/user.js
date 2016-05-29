import Spotify from 'spotify-web-api-js'

export const USER_REQUEST = 'USER_REQUEST'
export const USER_RECEIVE = 'USER_RECEIVE'

const spotifyApi = new Spotify()

const actionRequestUser = () => {
  return {
    type: USER_REQUEST
  }
}

const actionReceiveUser = user => {
  return {
    type: USER_RECEIVE,
    user
  }
}

export const getUser = () => dispatch => {
  dispatch(actionRequestUser())

  spotifyApi
    .getMe()
    .then(user => dispatch(actionReceiveUser(user)))
    .catch(err => console.error('Cannot retrieve user: ', err))
}

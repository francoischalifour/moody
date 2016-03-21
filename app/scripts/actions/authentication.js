import Spotify from 'spotify-web-api-js'
const spotifyApi = new Spotify()

export const SPOTIFY_TOKENS = 'SPOTIFY_TOKENS'
export const SPOTIFY_ME_BEGIN = 'SPOTIFY_ME_BEGIN'
export const SPOTIFY_ME_SUCCESS = 'SPOTIFY_ME_SUCCESS'
export const SPOTIFY_ME_FAILURE = 'SPOTIFY_ME_FAILURE'

export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_RECIEVE = 'LOGIN_RECIEVE'

import {
  SPOTIFY_CLIENT_ID,
  REDIRECT_URI,
  STATE_KEY
} from './spotify'

export function setTokens(accessToken) {
	if (accessToken) {
    const tokenString = accessToken.split('=')[1].split('&')[0]
    spotifyApi.setAccessToken(tokenString)
  }

 	return { type: SPOTIFY_TOKENS, accessToken }
}

const actionRequestLogin = () => {
  return {
    type: LOGIN_REQUEST
  }
}

const actionReceiveLogin = () => {
  return {
    type: LOGIN_RECIEVE
  }
}

export const loginUser = () => {
	return dispatch => {
		dispatch(actionRequestLogin())

    const state = generateRandomString(16)
    localStorage.setItem(STATE_KEY, state)
    const scope = 'user-read-private user-read-email'
    let url = 'https://accounts.spotify.com/authorize'
        url += '?response_type=token'
        url += '&client_id=' + encodeURIComponent(SPOTIFY_CLIENT_ID)
        url += '&scope=' + encodeURIComponent(scope)
        url += '&redirect_uri=' + encodeURIComponent(REDIRECT_URI)
        url += '&state=' + encodeURIComponent(state)

    window.location = url
	}
}

function generateRandomString(length) {
  var text = ''
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  for (var i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length))
  }
  return text
};
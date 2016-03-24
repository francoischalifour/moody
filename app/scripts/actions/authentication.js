import { hashHistory } from 'react-router'
import Spotify from 'spotify-web-api-js'

import {
  SPOTIFY_CLIENT_ID,
  REDIRECT_URI,
  STATE_KEY,
  SPOTIFY_TOKEN_KEY
} from './spotify'

export const SPOTIFY_TOKENS = 'SPOTIFY_TOKENS'
export const SPOTIFY_ME_BEGIN = 'SPOTIFY_ME_BEGIN'
export const SPOTIFY_ME_SUCCESS = 'SPOTIFY_ME_SUCCESS'
export const SPOTIFY_ME_FAILURE = 'SPOTIFY_ME_FAILURE'

const spotifyApi = new Spotify()

export const setTokens = accessToken => dispatch => {
  if (!accessToken) return

  const tokenState = accessToken.split('state=')[1].split('?')[0]

  if (tokenState === localStorage[STATE_KEY]) {
    const token = accessToken.split('=')[1].split('&')[0]
    localStorage.setItem(SPOTIFY_TOKEN_KEY, token)
    spotifyApi.setAccessToken(token)
  } else {
    // TODO: Show an error
    console.warn('tokenState does not match')
  }
}

export const loginUser = () => dispatch => {
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

export const logoutUser = () => dispatch => {
  localStorage.clear()

  hashHistory.push('/')
}

function generateRandomString(length) {
  var statusString = ''
  const allowedChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

  for (var i = 0; i < length; i++) {
      statusString += allowedChars.charAt(Math.floor(Math.random() * allowedChars.length))
  }

  return statusString
}
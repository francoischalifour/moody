import { hashHistory } from 'react-router'
import Spotify from 'spotify-web-api-js'

import {
  SPOTIFY_CLIENT_ID,
  REDIRECT_URI,
  STATE_KEY,
  SPOTIFY_TOKEN_KEY,
} from './spotify'

const spotifyApi = new Spotify()

const generateRandomString = length => {
  let statusString = ''
  const allowedChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

  for (let i = 0; i < length; i++) {
    statusString += allowedChars.charAt(Math.floor(Math.random() * allowedChars.length))
  }

  return statusString
}

export const setTokens = accessToken => () => {
  if (!accessToken) return

  const tokenState = accessToken.split('state=')[1].split('?')[0]

  if (tokenState === localStorage.getItem(STATE_KEY)) {
    const token = accessToken.split('=')[1].split('&')[0]
    localStorage.setItem(SPOTIFY_TOKEN_KEY, token)
    spotifyApi.setAccessToken(token)
  }
}

export const loginUser = () => () => {
  const state = generateRandomString(16)
  localStorage.setItem(STATE_KEY, state)
  const scope = 'user-read-private user-read-email'
  const url = 'https://accounts.spotify.com/authorize' +
    '?response_type=token' +
    `&client_id=${encodeURIComponent(SPOTIFY_CLIENT_ID)}` +
    `&scope=${encodeURIComponent(scope)}` +
    `&redirect_uri=${encodeURIComponent(REDIRECT_URI)}` +
    `&state=${encodeURIComponent(state)}`

  window.location = url
}

export const logoutUser = () => () => {
  localStorage.clear()

  hashHistory.push('/')
}

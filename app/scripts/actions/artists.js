import ajax from 'axios'
import {
  SPOTIFY_BASE,
  SPOTIFY_CLIENT_ID,
  SPOTIFY_CLIENT_SECRET,
  SPOTIFY_SEARCH
} from './spotify.js'

const actionRequestArtists = () => {
  return {
    type: 'artist'
  }
}

const actionReceiveArtists = artists => {
  return {
    type: 'artist',
    artists
  }
}

export const fetchArtists = () => {
  return dispatch => {
    dispatch(actionRequestArtists())

    const url = [SPOTIFY_BASE, SPOTIFY_SEARCH].join('/')

    return ajax.get(url)
      .then(response = response.artists)
      .then(artists = dispatch(actionReceiveArtists(artists)))
      .catch(err => throw err)
  }
}

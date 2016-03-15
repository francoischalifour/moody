import React, { Component } from 'react'
import { connect } from 'react-redux'
import { API_MOODS } from '../actions/api.js'
import { getPlaylists } from '../actions/playlists'

import Playlist from '../components/Playlist'

class PlaylistContainer extends Component {
  constructor(props) {
    super(props)
    this.moods = API_MOODS.map((mood) => mood.toLowerCase())
  }

  componentDidMount() {
    const {
      dispatch,
      routeParams
    } = this.props

    dispatch(getPlaylists(routeParams.name.toLowerCase()))
  }

  render() {
    const {
      routeParams,
      playlists
    } = this.props

    const {
      isFetching,
      isComplete
    } = playlists

    if (this.moods.includes(routeParams.name)) {
      document.body.className = routeParams.name

      if (!isComplete) {
        return (
          <div className="moody-hero">
            <p className="moody-hero__subtitle">Loading...</p>
          </div>
        )
      } else {
        const playlistContent = playlists.playlists.data.playlists.items
        const randomSongNo = Math.random() * (playlistContent.length)
        const playlistURI = playlistContent[parseInt(randomSongNo)].uri

        return (
          <Playlist name={routeParams.name} playlist={playlistURI}/>
        )
      }
    }

    return (
      <div className="moody-hero">
        <p className="moody-hero__subtitle">This playlist doesn't exist.</p>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const playlistsState = state.playlists

  return {
    playlists: playlistsState
  }
}

export default connect(mapStateToProps)(PlaylistContainer)

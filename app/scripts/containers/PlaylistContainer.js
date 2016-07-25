import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import { API_MOODS } from '../actions/api'
import { getPlaylists } from '../actions/playlists'

import Sidebar from '../components/Sidebar'
import Playlist from '../components/Playlist'

class PlaylistContainer extends Component {
  constructor(props) {
    super(props)

    const {
      routeParams,
    } = this.props

    this.moods = API_MOODS.map(mood => mood.toLowerCase())
    this.name = routeParams.name.toLowerCase()
  }

  componentDidMount() {
    const {
      dispatch,
    } = this.props

    dispatch(getPlaylists(this.name))
  }

  render() {
    const {
      playlists,
    } = this.props

    const {
      isComplete,
    } = playlists

    if (this.moods.includes(this.name)) {
      document.body.className = this.name

      if (!isComplete) {
        return (
          <div>
            <Sidebar />

            <div className="moody-hero">
              <p className="moody-hero__subtitle">Loading...</p>
            </div>
          </div>
        )
      }

      const playlistContent = playlists.playlists.playlists.items
      const randomSongNo = Math.random() * (playlistContent.length - 1)
      const playlistURI = playlistContent[parseInt(randomSongNo, 10)].uri
      const playlistCover = playlistContent[parseInt(randomSongNo, 10)].images[0].url

      return (
        <div>
          <Sidebar />

          <Playlist
            name={this.name}
            playlist={playlistURI}
            cover={playlistCover}
          />
        </div>
      )
    }

    return (
      <div>
        <Sidebar />

        <div className="moody-hero">
          <p className="moody-hero__subtitle">
            This playlist doesn't exist.
          </p>
        </div>
      </div>
    )
  }
}

PlaylistContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  routeParams: PropTypes.object.isRequired,
  playlists: PropTypes.object,
}

const select = state => ({
  playlists: state.playlists,
  tracks: state.tracks,
})

export default connect(select)(PlaylistContainer)

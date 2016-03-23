import React, { Component } from 'react'
import { connect } from 'react-redux'

import { API_MOODS } from '../actions/api'
import { getPlaylists } from '../actions/playlists'

import SidebarContainer from '../containers/SidebarContainer'
import Playlist from '../components/Playlist'

class PlaylistContainer extends Component {
  constructor(props) {
    super(props)
    this.moods = API_MOODS.map(mood => mood.toLowerCase())
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
          <div>
            <SidebarContainer/>

            <div className="moody-hero">
              <p className="moody-hero__subtitle">Loading...</p>
            </div>
          </div>
        )
      } else {
        const playlistContent = playlists.playlists.playlists.items
        const randomSongNo = Math.random() * (playlistContent.length - 1)
        const playlistURI = playlistContent[parseInt(randomSongNo)].uri
        const playlistCover = playlistContent[parseInt(randomSongNo)].images[0].url

        return (
          <div>
            <SidebarContainer/>

            <Playlist
              name={routeParams.name}
              playlist={playlistURI}
              cover={playlistCover}
            />
          </div>
        )
      }
    }

    return (
      <div>
        <SidebarContainer/>

        <div className="moody-hero">
          <p className="moody-hero__subtitle">This playlist doesn't exist.</p>
        </div>
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
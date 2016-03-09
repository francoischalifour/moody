import React from 'react'
import { connect } from 'react-redux'
import { API_MOODS } from '../actions/api.js'
import { getPlaylists } from '../actions/playlists'

import Playlist from '../components/Playlist.js'

class PlaylistContainer extends React.Component {
  constructor(props) {
    super(props)
    this.moods = API_MOODS.map((mood) => mood.toLowerCase())
  }

  componentDidMount() {
    const {
      dispatch,
      routeParams
    } = this.props;

    dispatch(getPlaylists(routeParams.name.toLowerCase()));
  }

  render() {
    const {
      routeParams,
      playlists
    } = this.props

    if (this.moods.includes(routeParams.name)) {
      document.body.className = routeParams.name

      // TODO: find a way to intercept only the last call
      if (playlists.playlists.hasOwnProperty('data')) {
        const playlistURI = playlists.playlists.data.playlists.items[0].uri

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

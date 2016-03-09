import React from 'react'
import { API_MOODS } from '../actions/api.js'

import Playlist from '../components/Playlist.js'

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.moods = API_MOODS.map(mood => mood.toLowerCase())
  }

  render() {
    const {
      routeParams
    } = this.props

    const playlistName = routeParams.name.toLowerCase()

    if (this.moods.includes(playlistName)) {
      document.body.className = playlistName

      return (
        <Playlist name={playlistName}/>
      )
    } else {
      return (
        <div className="moody-hero">
          <p className="moody-hero__subtitle">This playlist doesn't exist.</p>
        </div>
      )
    }
  }
}

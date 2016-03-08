import React from 'react'
import { API_MOODS } from '../actions/api.js'

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.moods = API_MOODS.map(mood => mood.toLowerCase())
  }

  render() {
    const {
      routeParams
    } = this.props

    return (
      <div className="moody-hero">
        <h1 className="moody-hero__title">Playlist</h1>
        {this.renderPlaylist(routeParams)}
      </div>
    )
  }

  renderPlaylist(title) {
    const playlistName = title.name.toLowerCase()

    if (this.moods.includes(playlistName)) {
      return (
        <p className="moody-hero__subtitle">{playlistName}</p>
      )
    } else {
      return (
        <p className="moody-hero__subtitle">unknown playlist</p>
      )
    }
  }
}

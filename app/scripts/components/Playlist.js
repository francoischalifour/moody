import React, { Component } from 'react'
import { Link } from 'react-router'

export default class extends Component {
  render() {
    const {
      name,
      playlist,
      cover
    } = this.props

    return (
      <div className="moody-hero">
        <h1 className="moody-hero__title">Playlist {name}</h1>

        <img
          className="moody-playlist__cover"
          src={cover}
          alt="Playlist cover"
        />

        <div className="moody-player">
          <iframe
            src={`https://embed.spotify.com/?uri=${playlist}`}
            width="300"
            height="80"
            frameBorder="0"
            allowTransparency="true"
          ></iframe>
        </div>
      </div>
    )
  }
}
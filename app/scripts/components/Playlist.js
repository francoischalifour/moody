import React, { Component } from 'react'
import { Link } from 'react-router'

export default class extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {
      name,
      playlist
    } = this.props

    return (
      <div className="moody-hero">
        <h1 className="moody-hero__title">Playlist {name}</h1>
        <div>
          <Link to="/">Back home</Link>
        </div>

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

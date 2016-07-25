import React, { PropTypes } from 'react'

const Playlist = ({
  name,
  playlist,
  cover,
}) =>
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
        height="80"
        frameBorder="0"
        allowTransparency="true"
      ></iframe>
    </div>
  </div>

Playlist.propTypes = {
  name: PropTypes.string.isRequired,
  playlist: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
}

export default Playlist

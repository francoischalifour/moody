import React from 'react'

export default class extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {
      name
    } = this.props

    return (
      <div className="moody-hero">
        <h1 className="moody-hero__title">Playlist {name}</h1>

        <div className="moody-player">
          <iframe
            src="https://embed.spotify.com/?uri=spotify:user:qlmhuge:playlist:6Df19VKaShrdWrAnHinwVO"
            width="300"
            height="80"
            frameborder="0"
            allowtransparency="true"
          ></iframe>
        </div>
      </div>
    )
  }
}

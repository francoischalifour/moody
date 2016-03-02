import React from 'react'

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      moods: [
        'Sadness',
        'Joy',
        'Anger'
      ]
    }
  }

  render() {
    return (
      <ul className="moody-moodbox">{this.state.moods.map(this.renderMood)}</ul>
    )
  }

  renderMood(mood) {
    return (
      <li>{mood}</li>
    )
  }
}

import React from 'react'
import { Link } from 'react-router'
import { API_MOODS } from '../actions/api.js'

export default class extends React.Component {
  render() {
    return (
      <ul className="moody-moodbox">{API_MOODS.map(this.renderMood)}</ul>
    )
  }

  renderMood(mood) {
    return (
      <Link to={`playlist/${mood.toLowerCase()}`}><li>{mood}</li></Link>
    )
  }
}

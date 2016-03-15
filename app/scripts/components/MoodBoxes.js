import React, { Component } from 'react'
import { Link } from 'react-router'
import { API_MOODS } from '../actions/api'

export default class extends Component {
  render() {
    return (
      <ul className="moody-moodbox">{API_MOODS.map(this.renderMood)}</ul>
    )
  }

  renderMood(mood) {
    return (
      <Link
        to={`playlist/${mood.toLowerCase()}`}
        className={mood.toLowerCase()}>
        <li>{mood}</li>
      </Link>
    )
  }
}

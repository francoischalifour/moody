import React from 'react'
import { Link } from 'react-router'
import { API_MOODS } from '../actions/api'

const moodTemplate = (mood, index) =>
  <Link
    to={`playlist/${mood.toLowerCase()}`}
    className={mood.toLowerCase()}
    key={index}
  >
    <li>{mood}</li>
  </Link>

const moodBoxes = () =>
  <ul className="moody-moodbox">
    {API_MOODS.map(moodTemplate)}
  </ul>

export default moodBoxes

import React from 'react'
import MoodBoxes from './MoodBoxes.js'

export default class extends React.Component {
  render() {
    return (
      <div className="moody-hero">
        <h1 className="moody-hero__title">Moody</h1>
        <p className="moody-hero__subtitle">Find the perfect music for you mood.</p>

        <MoodBoxes/>
      </div>
    )
  }
}

import React, { Component } from 'react'
import MoodBoxes from './MoodBoxes'

export default class extends Component {
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

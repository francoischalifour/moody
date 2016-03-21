import React, { Component } from 'react'
import MoodBoxes from '../components/MoodBoxes'
import { connect } from 'react-redux'

import {
	setTokens
} from '../actions/authentication'

class HomeContainer extends Component {
  componentDidMount() {
  	const {
			routeParams,
			dispatch
		} = this.props

		dispatch(setTokens(routeParams.splat))
  }

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

export default connect()(HomeContainer)
import React, { Component } from 'react'
import { connect } from 'react-redux'

import { setTokens } from '../actions/authentication'

import SidebarContainer from '../containers/SidebarContainer'
import MoodBoxes from '../components/MoodBoxes'

class HomeContainer extends Component {
  componentDidMount() {
  	const {
			routeParams,
			dispatch
		} = this.props

    dispatch(setTokens(routeParams.splat))
  }

  render() {
    const {
      user,
      isComplete
    } = this.props

    return (
      <div>
        <SidebarContainer/>

        <div className="moody-hero">
          <h1 className="moody-hero__title">Moody</h1>
          <p className="moody-hero__subtitle">Find the perfect music for you mood.</p>

          <MoodBoxes/>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const userState = state.user

  return {
    user: userState
  }
}

export default connect(mapStateToProps)(HomeContainer)
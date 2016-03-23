import React, { Component } from 'react'
import { connect } from 'react-redux'

import { setTokens } from '../actions/authentication'
import { getUser } from '../actions/user'

import SidebarContainer from '../containers/SidebarContainer'
import MoodBoxes from '../components/MoodBoxes'

import {
  USER_KEY
} from '../actions/spotify'

class HomeContainer extends Component {
  componentDidMount() {
  	const {
			routeParams,
			dispatch
		} = this.props

    if (routeParams.splat) {
      dispatch(setTokens(routeParams.splat))
      dispatch(getUser())
    }
  }

  render() {
    const {
      user,
    } = this.props

    const {
      isComplete
    } = user

    if (isComplete) {
      const userName = user.user.display_name || user.user.uri.split(':')[2]
      localStorage.setItem(USER_KEY, userName)
    }

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
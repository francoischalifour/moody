import React, { Component } from 'react'
import { connect } from 'react-redux'

import { setTokens } from '../actions/authentication'
import {
  USER_KEY,
  SPOTIFY_TOKEN_KEY
} from '../actions/spotify'
import { getUser } from '../actions/user'

import SidebarContainer from '../containers/SidebarContainer'
import MoodBoxes from '../components/MoodBoxes'
import Notification from '../components/Notification'

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

    let username = 'stranger'
    let notification = null

    if (isComplete && !localStorage[SPOTIFY_TOKEN_KEY]) {
      username = user.user.display_name || user.user.uri.split(':')[2]
      localStorage.setItem(USER_KEY, username)
      notification = <Notification message="See you soon, [data]!" data={username}/>
    }

    return (
      <div>
        <SidebarContainer/>

        <div className="moody-hero">
          <h1 className="moody-hero__title">Moody</h1>
          <p className="moody-hero__subtitle">Find the perfect music for you mood.</p>

          <MoodBoxes/>
        </div>

        {notification}
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
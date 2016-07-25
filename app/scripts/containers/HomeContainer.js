import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import { setTokens } from '../actions/auth'
import {
  USER_KEY,
  SPOTIFY_TOKEN_KEY,
} from '../actions/spotify'
import { getUser } from '../actions/user'

import Sidebar from '../components/Sidebar'
import MoodBoxes from '../components/MoodBoxes'
import Notification from '../components/Notification'

class HomeContainer extends Component {
  componentDidMount() {
    const {
			routeParams,
			dispatch,
		} = this.props

    if (routeParams.splat) {
      dispatch(setTokens(routeParams.splat))
      dispatch(getUser())
    }
  }

  render() {
    const {
      routeParams,
      user,
    } = this.props

    const {
      isComplete,
    } = user

    let notification = null

    if (isComplete && routeParams.splat) {
      const username = user.user.display_name || user.user.uri.split(':')[2]
      localStorage.setItem(USER_KEY, username)
      notification = <Notification message="Welcome to Moody, [data]!" data={username} />
    } else if (isComplete && !localStorage.getItem(SPOTIFY_TOKEN_KEY)) {
      notification = <Notification message="See you soon!" />
    }

    return (
      <div>
        <Sidebar />

        <div className="moody-hero">
          <h1 className="moody-hero__title">Moody</h1>
          <p className="moody-hero__subtitle">
            Music for you feelings.
          </p>

          <MoodBoxes />
        </div>

        {notification}
      </div>
    )
  }
}

HomeContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  routeParams: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
}

function select(state) {
  return {
    user: state.user,
  }
}

export default connect(select)(HomeContainer)

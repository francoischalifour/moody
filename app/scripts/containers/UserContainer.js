import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import {
  loginUser,
  logoutUser,
} from '../actions/auth'
import {
  USER_KEY,
  SPOTIFY_TOKEN_KEY,
} from '../actions/spotify'

import Sidebar from '../components/Sidebar'

class UserContainer extends Component {
  constructor(props) {
    super(props)

    this.handleLogin = this.handleLogin.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
  }

  handleLogin() {
    this.props.dispatch(loginUser())
  }

  handleLogout() {
    this.props.dispatch(logoutUser())
  }

  render() {
    if (!localStorage.getItem(SPOTIFY_TOKEN_KEY)) {
      return (
        <div>
          <Sidebar />

          <div className="moody-hero">
            <h1 className="moody-hero__title">Log in with Spotify</h1>
            <p className="moody-hero__subtitle">
              Get the full experience by linking your account.
            </p>

            <button
              className="moody-login__button"
              onClick={this.handleLogin}
            >
               Login with Spotify
            </button>
          </div>
        </div>
      )
    }

    const username = localStorage.getItem(USER_KEY)

    return (
      <div>
        <Sidebar />

        <div className="moody-hero">
          <h1 className="moody-hero__title">Hello, {username}</h1>
          <p className="moody-hero__subtitle">
            We hope you enjoy your experience.
          </p>

          <button
            className="moody-login__button"
            onClick={this.handleLogout}
          >
             Log out
          </button>
        </div>
      </div>
    )
  }
}

UserContainer.propTypes = {
  dispatch: PropTypes.func,
}

export default connect()(UserContainer)

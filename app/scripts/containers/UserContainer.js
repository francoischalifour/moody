import React, { Component } from 'react'
import { connect } from 'react-redux'

import {
  loginUser,
  logoutUser
} from '../actions/auth'
import {
  USER_KEY,
  SPOTIFY_TOKEN_KEY
} from '../actions/spotify'

import Sidebar from '../components/Sidebar'

class UserContainer extends Component {
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
              onClick={this.handleLogin.bind(this)}
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
            onClick={this.handleLogout.bind(this)}
          >
             Log out
          </button>
        </div>
      </div>
    )
  }
}

export default connect()(UserContainer)
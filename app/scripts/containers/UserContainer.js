import React, { Component } from 'react'
import { connect } from 'react-redux'

import {
  loginUser,
  logoutUser
} from '../actions/authentication'

import {
  USER_KEY,
  SPOTIFY_TOKEN_KEY
} from '../actions/spotify'

import SidebarContainer from '../containers/SidebarContainer'

class UserContainer extends Component {
	componentDidMount() {
			const {
			routeParams,
			dispatch
		} = this.props
	}

  login() {
    this.props.dispatch(loginUser())
  }

	logout() {
		this.props.dispatch(logoutUser())
	}

	render() {
    if (!localStorage[SPOTIFY_TOKEN_KEY]) {
  		return (
        <div>
          <SidebarContainer/>

          <div className="moody-hero">
            <h1 className="moody-hero__title">Log in with Spotify</h1>
            <p className="moody-hero__subtitle">Get the full experience by linking your account.</p>

            <button
              className="moody-login__button"
              onClick={this.login.bind(this)}
            >
               Login with Spotify
            </button>
          </div>
        </div>
      )
    }

    const username = localStorage[USER_KEY]

    return (
      <div>
        <SidebarContainer/>

        <div className="moody-hero">
          <h1 className="moody-hero__title">Hello, {username}</h1>
          <p className="moody-hero__subtitle">We hope your enjoy your experience.</p>

          <button
            className="moody-login__button"
            onClick={this.logout.bind(this)}
          >
             Log out
          </button>
        </div>
      </div>
    )
	}
}

export default connect()(UserContainer)
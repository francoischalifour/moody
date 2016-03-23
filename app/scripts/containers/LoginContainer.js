import React, { Component } from 'react'
import { connect } from 'react-redux'

import { loginUser } from '../actions/authentication'

import SidebarContainer from '../containers/SidebarContainer'

class LoginContainer extends Component {
	componentDidMount() {
			const {
			routeParams,
			dispatch
		} = this.props
	}

	handleChange(event) {
		this.props.dispatch(loginUser())
	}

	render() {
		return (
      <div>
        <SidebarContainer/>

        <div className="moody-hero">
          <h1 className="moody-hero__title">Log in with Spotify</h1>
          <p className="moody-hero__subtitle">Get the full experience by linking your account.</p>

          <button
            className="moody-login__button"
            onClick={this.handleChange.bind(this)}
          >
             Login with Spotify
          </button>
        </div>
      </div>
    )
	}
}

export default connect()(LoginContainer)
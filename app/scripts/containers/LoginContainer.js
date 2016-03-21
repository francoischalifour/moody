import React, { Component } from 'react'
import { connect } from 'react-redux'

import Sidebar from '../components/Sidebar'

import {
	loginUser
} from '../actions/authentication'

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
        <Sidebar/>

        <button onClick={ this.handleChange.bind(this) }>
           Login
        </button>
      </div>
    )
	}

}

export default connect()(LoginContainer)
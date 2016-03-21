import React, { Component } from 'react'
import { connect } from 'react-redux'

import {
	loginUser
} from '../actions/authentication'

class LoginContainer extends Component {
	
	componentDidMount(){
			const {
			routeParams,
			dispatch
		} = this.props
		
	}

	handleChange(event){

		this.props.dispatch(loginUser()); //TODO: FIX
	}

	render() {
		return (
      <button onClick={ this.handleChange.bind(this) }>
       	Login
      </button>
    )
	}

}

export default connect()(LoginContainer)
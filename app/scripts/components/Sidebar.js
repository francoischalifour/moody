import React, { Component } from 'react'
import { Link } from 'react-router'

import {
  loginUser
} from '../actions/authentication'

export default class extends Component {
  render() {
    return (
      <div className="moody-sidebar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
    )
  }
}

import React, { Component } from 'react'
import { Link } from 'react-router'

export default class extends Component {
  render() {
    return (
      <div className="moody-sidebar">
        <ul>
          <li>
            <Link to="/" title="Home">
              <i className="material-icons">home</i>
            </Link>
          </li>

          <li>
            <Link to="/account" title="Account">
              <i className="material-icons">account_circle</i>
            </Link>
          </li>

          <li>
            <Link to="/about" title="About">
              <i className="material-icons">info_outline</i>
            </Link>
          </li>
        </ul>
      </div>
    )
  }
}
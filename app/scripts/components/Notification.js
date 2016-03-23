import React, { Component } from 'react'

export default class extends Component {
  render() {
    const {
      message,
      data
    } = this.props

    const notification = message.replace('[data]', data)

    return (
      <div className="moody-notification">
        <p>{notification}</p>
      </div>
    )
  }
}

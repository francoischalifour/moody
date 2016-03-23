import React, { Component } from 'react'
import { connect } from 'react-redux'

import Sidebar from '../components/Sidebar'

class SidebarContainer extends Component {
  redirectUser() {
    const {
      dispatch
    } = this.props
  }

  render() {
    return (
      <Sidebar/>
    )
  }
}

export default connect()(SidebarContainer)
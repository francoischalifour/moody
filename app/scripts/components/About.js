import React, { Component } from 'react'

import SidebarContainer from '../containers/SidebarContainer'

export default class extends Component {
  render() {
    return (
      <div>
        <SidebarContainer/>

        <div className="moody-hero">
          <h1 className="moody-hero__title">About</h1>

          <p className="moody-hero__subtitle">
            Moody plays music according to your mood.
          </p>

          <p>
            It was developed in the Client Programming with JavaScript course at Jönköping University.
          </p>
        </div>
      </div>
    )
  }
}

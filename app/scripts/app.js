import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, hashHistory } from 'react-router'

import Home from './components/Home'
import PlaylistContainer from './containers/PlaylistContainer'
import About from './components/About'

const mountNode = document.getElementById('app')

React.render((
  <Router history={hashHistory}>
    <Route path="about" component={About}/>
    <Route path="playlist/:name" component={PlaylistContainer}/>
    <Route path="*" component={Home}/>
  </Router>
), mountNode)

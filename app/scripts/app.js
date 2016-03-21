import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, hashHistory } from 'react-router'

import configureStore from './store/configureStore'

import HomeContainer from './containers/HomeContainer'
import PlaylistContainer from './containers/PlaylistContainer'
import LoginContainer from './containers/LoginContainer'
import About from './components/About'

const store = configureStore()
const mountNode = document.getElementById('app')

render((
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="about" component={About}/>
      <Route path="playlist/:name" component={PlaylistContainer}/>
      <Route path="login" component={LoginContainer}/>

      <Route path="*" component={HomeContainer}/>
    </Router>
  </Provider>
), mountNode)

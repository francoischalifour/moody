import React from 'react'
import { Provider } from 'react-redux'
import { Router, Route } from 'react-router'

import Home from './components/Home'

const mountNode = document.getElementById('app')

React.render(<Home/>, mountNode)

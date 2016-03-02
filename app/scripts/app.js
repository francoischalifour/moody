import React from 'react'
import Home from './components/Home'

window.React = React
const mountNode = document.getElementById('app')

React.render(<Home/>, mountNode)

import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import 'milligram'
import './css/navBar.css'



import App from './App'

ReactDOM.render(
	<Router><App /></Router>,
	document.getElementById('root')
)
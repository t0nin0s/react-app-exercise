import React from 'react'
import { HashRouter as Router } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import { Route, Switch } from 'react-router-dom'
import NotFound from './NotFound'
import Login from './Login'

import App from './App'
import theme from '../config/Theme'

const muiTheme = getMuiTheme(theme)

const Root = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <Router>
      <div>
        <Route path="/" component= {App} />
        <Route path="/login" component={Login} />
        <Route component={NotFound} />
      </div>
    </Router>
  </MuiThemeProvider>
)

export default Root

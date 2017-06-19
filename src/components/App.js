import React from 'react'
import { Route, Switch } from 'react-router-dom'

import NotFound from './NotFound'
import Login from './Login'
import Main from './Main'

const App = () => {
    return (
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/login" component={Login} />
        <Route component={NotFound} />
      </Switch>
    )
  }

export default App

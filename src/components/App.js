import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'
import { pink700 } from 'material-ui/styles/colors'
import NavDrawer from './layout/NavDrawer'
import { spacing, typography } from 'material-ui/styles'
import withWidth, { LARGE } from 'material-ui/utils/withWidth'
import { Route, Switch } from 'react-router-dom'

<<<<<<< HEAD
<<<<<<< HEAD
import UserListContainer from './user/UserListContainer'
import WorkshopListContainer from './workshop/WorkshopListContainer'
=======
=======
>>>>>>> b53d216372ee3462c9da6c043b9ffb334bfd6798
import UserList from './user/UserList'
import WorkshopList from './workshop/WorkshopList'
>>>>>>> b53d216372ee3462c9da6c043b9ffb334bfd6798
import Dashboard from './dashboard'
import NotFound from './NotFound'

class App extends Component {
  constructor() {
    super()
    this.state = {
      nav: { open: false }
    }
    this.toggleNav = this.toggleNav.bind(this)
    this.closeNav = this.closeNav.bind(this)
  }

  getStyles() {
    const styles = {
      appBar: {
        position: 'fixed',
        top: 0,
        color: typography.textFullWhite
      },
      app: {},
      logo: {
        cursor: 'pointer',
        fontSize: 24,
        color: typography.textFullWhite,
        fontWeight: typography.fontWeightLight,
        backgroundColor: pink700
      }
    }
    return styles
  }

  toggleNav() {
    this.setState({ nav: { open: !this.state.nav.open } })
  }

  closeNav() {
    this.setState({ nav: { open: false } })
  }

  render() {
    let docked = false
    let navDrawerOpen = this.state.nav.open
    let styles = this.getStyles()

    if (this.props.width === LARGE) {
      docked = true
      navDrawerOpen = true
      styles.app.paddingLeft = 256
    }

    return (
<<<<<<< HEAD
      <div>
        <div className="main-view">
          <AppBar
            title="Course Manager"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            onLeftIconButtonTouchTap={this.toggleNav}
            className="app-bar"
          />
          <NavDrawer
            open={navDrawerOpen}
            toggleNav={this.toggleNav}
            closeNav={this.closeNav}
            styles={styles}
            docked={docked}
          />
          <div className="view-container" style={styles.app}>
              <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route path="/users" component={UserListContainer} />
                <Route path="/workshops" component={WorkshopListContainer} />
                <Route component={NotFound} />
              </Switch>
          </div>
=======
      <div className="main-view">
        <AppBar
          title="Course Manager"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          onLeftIconButtonTouchTap={this.toggleNav}
          className="app-bar"
        />
        <NavDrawer
          open={navDrawerOpen}
          toggleNav={this.toggleNav}
          closeNav={this.closeNav}
          styles={styles}
          docked={docked}
        />
        <div className="view-container" style={styles.app}>
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/users" component={UserList} />
            <Route path="/login" component={Login} />
            <Route render={({ location }) => (
                <h3>Page not found <code>{location.pathname}</code></h3>
              )} />
          </Switch>
>>>>>>> b53d216372ee3462c9da6c043b9ffb334bfd6798
        </div>
      </div>
    )
  }
}

export default withWidth()(App)

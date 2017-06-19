import React from 'react'
import PropTypes from 'prop-types'
import { ListItem } from 'material-ui/List'
import ActionGrade from 'material-ui/svg-icons/action/grade'
import Avatar from 'material-ui/Avatar'
import { pinkA200 } from 'material-ui/styles/colors'
import withWidth, { LARGE } from 'material-ui/utils/withWidth'
import { Route, Switch, withRouter } from 'react-router-dom'

import View from '../layout/View'
import WorkshopInfoContainer from './WorkshopInfoContainer'

const WorkshopList = ({ workshops = [], match, history, width}) => {
  const showWorkshop = (workshop) => {
    history.push(`/workshops/${workshop.id}`)
  }

  const listItems = (
    <View>
      { workshops.map(workshop => (
        <ListItem
          onClick={() => { showWorkshop(workshop) }} key={workshop.id} style={{color: "black"}}
          primaryText={ `${workshop.title}`}
          leftIcon={<ActionGrade color={pinkA200} />}
        />
      ))}
    </View>
  )

  return (
    <View style={{ display: 'flex' }}>
      <Route
        exact={width < LARGE}
        path={`${match.url}`}
        render={() => listItems }
      />
      <Switch>
        <Route path={`${match.url}/:workshop`} component={WorkshopInfoContainer} />
        <Route exact path={width < LARGE ? `/` : null} component={View} />
      </Switch>
    </View>
  )
}

export default withWidth()(withRouter(WorkshopList))

WorkshopList.contextTypes = {
  router: PropTypes.object.isRequired
}

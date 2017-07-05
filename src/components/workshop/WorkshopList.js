import React from 'react'
import { ListItem } from 'material-ui/List'
import ActionGrade from 'material-ui/svg-icons/action/grade'
import { pinkA200 } from 'material-ui/styles/colors'
import { Route } from 'react-router-dom'

import WorkshopInfo from './WorkshopInfo'

import View from '../layout/View'

class WorkshopList extends React.Component {

  showWorshopInfo(workshop) {
    this.props.history.push(`/workshops/${workshop.id}`)
  }

  render() {
    // console.log('props in workshopList', props)
    const { match, width, workshops } = this.props
    return (
      <View style={{ display: 'flex' }}>
        <View>
          { workshops.map(workshop => (
            <ListItem
              onClick={this.showWorshopInfo.bind(this, workshop)}
              key={workshop.id}
              style={{color: "black"}}
              primaryText={ `${workshop.title}`}
              leftIcon={<ActionGrade color={pinkA200} />}
            />
          ))}
        </View>
        <Route path={`${match.url}/:id`} component={WorkshopInfo} />
      </View>
    )
  }
}

export default WorkshopList

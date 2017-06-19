import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import {
  Card, CardActions, CardHeader, CardMedia, CardTitle
} from 'material-ui/Card'

import View from '../layout/View'

class UserProfile extends Component {
  constructor() {
    super()
    this.state = { username: null }
  }

  componentDidMount() {
    this.fetchUser(this.props.match.params.username)
  }

  fetchUser(username) {
    fetch(`/data/users/${username}.json`, {
        method: 'get'
    }).then((response) => {
        return response.json()
    }).then((data) => {
        this.setState({user : data})
    }).catch((err)=> {
        console.log(err)
    })
  }

  render() {
    let user = this.state.user
    let username = this.props.match.params.username
    if (user && user.username !== username) {
      this.fetchUser(username)
    }
    let fullname = ''
    let email = ''

    if (user){
      fullname = `${user.name.title} ${user.name.first} ${user.name.last}`
      email = user.email
    }

    return (
      <View>
        <Card>
          <CardHeader
            title={fullname}
            subtitle={username}
            avatar={`/images/${username}_sm.jpg`}
          />
          <CardMedia
            overlay={<CardTitle title={email} />}
          >
            <img alt={username} src={`/images/${username}_lg.jpg`} />
          </CardMedia>
          <CardActions />
        </Card>
      </View>
    )
  }
}

UserProfile.propTypes = {
  match: PropTypes.object.isRequired
}

export default UserProfile

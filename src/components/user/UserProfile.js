import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  Card, CardActions, CardHeader, CardMedia, CardTitle
} from 'material-ui/Card'

import View from '../layout/View'

const UserProfile = (props) => {
  const { user } = props
  let username = ''
  let fullname = ''
  let email = ''

  if (user){
    fullname = `${user.name.title} ${user.name.first} ${user.name.last}`
    email = user.email
    username = user.username
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

export default UserProfile

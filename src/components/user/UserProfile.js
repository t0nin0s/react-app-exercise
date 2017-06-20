import React from 'react'
import {
  Card, CardActions, CardHeader, CardMedia, CardTitle
} from 'material-ui/Card'

import View from '../layout/View'

const UserProfile = ({ user, username }) => {
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



export default UserProfile

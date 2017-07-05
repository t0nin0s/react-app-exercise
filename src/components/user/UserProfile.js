import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  Card, CardActions, CardHeader, CardMedia, CardTitle
} from 'material-ui/Card'

import View from '../layout/View'

<<<<<<< HEAD
const UserProfile = (props) => {
  const { user } = props
  let username = ''
  let fullname = ''
  let email = ''
=======
class UserProfile extends Component {
  constructor() {
    super()
    this.state = { user: null }
  }

  componentDidMount() {
    this.fetchUser(this.props.match.params.username)
  }
>>>>>>> b53d216372ee3462c9da6c043b9ffb334bfd6798

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

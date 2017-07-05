import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import UserProfile from './UserProfile'

class UserProfileContainer extends Component {

  constructor() {
    super()
    this.state = { user: null }
  }

  componentDidMount() {
    const username = this.props.match.params.username
    this.fetchUser(username)
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.username !== nextProps.match.params.username) {
      this.fetchUser(nextProps.match.params.username)
    }
  }

  fetchUser = (username) => (
    fetch(`/data/users/${username}.json`, {
        method: 'get'
    }).then((response) => {
        return response.json()
    }).then((data) => {
        this.setState({user : data})
    }).catch((err)=> {
        console.log(err)
    })
  )

  render() {
    return (
      <UserProfile
        user={this.state.user}
      />
    )
  }
}

export default UserProfileContainer

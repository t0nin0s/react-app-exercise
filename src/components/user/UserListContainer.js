import React, { Component } from 'react'
import UserList from './UserList'

class UserListContainer extends Component {
  constructor() {
    super()
    this.state = {
      users: []
    }
  }

  componentDidMount() {
    fetch('/data/users.js', {
        method: 'get'
    }).then((response) => {
        return response.json()
    }).then((data) => {
        this.setState({ users: data })
    }).catch((err)=> {
        console.log(err)
    })
  }

  render() {
    return (
      <UserList users={this.state.users} />
    )
  }
}

export default UserListContainer

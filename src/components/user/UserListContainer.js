import React, { Component } from 'react'
import UserList from './UserList'
import { fetchUsers } from '../../api/user'

class UserListContainer extends Component {
  constructor() {
    super()
    this.state = {
      users: []
    }
  }

  componentDidMount() {
    fetchUsers()
    .then((data) => {
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

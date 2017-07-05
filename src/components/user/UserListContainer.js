import React, { Component } from 'react'
// import { Route } from 'react-router-dom'
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
    const { match, location, history, width } = this.props
    return (
      //you need to render the UserList component and pass the users
      <UserList
          users={this.state.users}
          match={match}
          location={location}
          history={history}
      />
    )
  }
}

export default UserListContainer

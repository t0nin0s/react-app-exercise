import React, {Component} from 'react'
import PropTypes from 'prop-types'
import UserProfile from './UserProfile'

class UserProfileContainer extends Component {
  constructor() {
    super()
    this.state = { user: null }
    this.fetchUser = this.fetchUser.bind(this)
  }

  componentDidMount() {
    this.fetchUser(this.props.match.params.username)
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.username !== nextProps.match.params.username) {
      this.fetchUser(nextProps.match.params.username)
    }
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
    return (
      <UserProfile
        fetchUser={this.fetchUser}
        user={this.state.user}
        username={this.props.match.params.username}
      />
    )
  }
}

UserProfileContainer.propTypes = {
  match: PropTypes.object.isRequired
}

export default UserProfileContainer

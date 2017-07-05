import React, {Component} from 'react'
import {FormGroup, FormControl, Button} from 'react-bootstrap'

class Login extends Component {

  constructor() {
    super()
    this.state = {
      username: '',
      password: ''
    }
  }

  handleOnChange = (event) => {
    const { value, id } = event.target
    this.setState({
      [id]: value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const { username, password } = this.state
    if (this.usename === 'toninos@gmail.com' &&
        this.password === 'secreto'
      ){
        this.props.history.push(`/`)
      } else {
        console.log('Try again!!!!!!!, Id like to style this a bit but dont have the time :(')
      }
  }

  render () {
    return (
      <form className="form-signin" onSubmit={this.handleSubmit}>
        <FormGroup>
          <h2 className="form-signin-heading">Please sign in</h2>
        </FormGroup>
        <FormGroup>
          <FormControl
              value={this.state.user}
              onChange={this.handleOnChange}
              className="form-control"
              id="username"
              type="email"
              placeholder="Enter email"
            />
          <FormControl
              value={this.state.password}
              onChange={this.handleOnChange}
              className="form-control"
              id="password"
              type="password"
              placeholder="Password"
            />
        </FormGroup>
        <Button bsSize="large" bsStyle="primary" block type="submit">Sign in</Button>
      </form>
    )
  }
}

export default Login

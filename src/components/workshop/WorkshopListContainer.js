import React, { Component } from 'react'

import WorkshopList from './WorkshopList'

class WorkshopListContainer extends Component {
  constructor() {
    super()
    this.state = {
      workshops: []
    }
  }

  componentDidMount() {
    this.fetchWorkshops();
  }

  fetchWorkshops = () => (
    fetch('/data/workshops.js', {
      method: 'get'
    }).then((response) => {
      return response.json()
    }).then((data) => {
      this.setState({ workshops: data })
    }).catch((err) => {
      console.log(err)
    })
  )

  render() {
    const { match, location, history, width } = this.props
    return (
      <WorkshopList
        workshops={ this.state.workshops }
        match={match}
        location={location}
        history={history}
      />
    )
  }
}

export default WorkshopListContainer

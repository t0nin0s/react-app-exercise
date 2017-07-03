import React, {Component} from 'react'
import WorkshopList from './WorkshopList'
import { fetchWorkshops } from '../../api/workshop'

class WorkshopListContainer extends Component {
  constructor() {
    super()
    this.state = {
      workshops: []
    }
  }

  componentDidMount() {
    fetchWorkshops().then((data) => {
      this.setState({ workshops: data })
    }).catch((err)=> {
      console.log(err)
    })
  }

  render() {
    return (
      <WorkshopList
        workshops={this.state.workshops}
      />
    )
  }
}

export default WorkshopListContainer

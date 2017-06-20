import React, {Component} from 'react'
import WorkshopInfo from './WorkshopInfo'
import PropTypes from 'prop-types'

class WorkshopInfoContainer extends Component {
  constructor() {
    super()
    this.state = { workshop: null }
  }

  componentDidMount() {
    this.fetchWorkshop(this.props.match.params.workshop)
  }

  componentWillReceiveProps(nextProps) {
   if (this.props.match.params.workshop !== nextProps.match.params.workshop) {
     this.fetchWorkshop(this.props.match.params.workshop)
   }
 }

  fetchWorkshop = (workshop) => {
    fetch(`/data/workshops/${workshop}.json`, {
      method: 'get'
    }).then((response) => {
      return response.json()
    }).then((data) => {
      this.setState({workshop : data})
    }).catch((err)=> {
      console.log(err)
    })
  }

  render() {
    return (
      <WorkshopInfo
        fetchWorkshop={this.fetchWorkshop}
        workshop={this.state.workshop}
        workshopID={this.props.match.params.workshop}
      />
    )
  }
}

WorkshopInfoContainer.propTypes = {
  match: PropTypes.object.isRequired
}

export default WorkshopInfoContainer

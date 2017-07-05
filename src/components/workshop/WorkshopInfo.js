import React from 'react'
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import View from '../layout/View'

class WorkshopInfo extends React.Component {

  constructor() {
    super()
    this.state = {
      workshop: null
    }
  }

  componentDidMount() {
    const workshop = this.props.match.params.id
    console.log('WSInfo DidMount about to fetch Workshop')
    this.fetchWorkshop(workshop)
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.id !== nextProps.match.params.id) {
      console.log('WSInfo componentWillReceiveProps about to fetch Workshop')
      this.fetchWorkshop(nextProps.match.params.id)
    }
  }

  fetchWorkshop = (workshop) => (
    fetch(`/data/workshops/${workshop}.json`, {
        method: 'get'
    }).then((response) => {
        return response.json()
    }).then((data) => {
        this.setState({workshop : data})
    }).catch((err)=> {
        console.log(err)
    })
  )

  render() {
    const { workshop } = this.state
    return (
      <View>
      { !workshop &&
        <h1>Loading Worshop Info</h1>
      }
      { workshop &&
        <Card>
          <CardHeader
            title={workshop.title}
            subtitle={workshop.url}
            avatar={workshop.instructors[0].avatar}
          />
          <CardTitle title={workshop.title} subtitle="Card subtitle" />
          <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
            Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
            Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
          </CardText>
          <CardActions>
            <FlatButton label="Action1" />
            <FlatButton label="Action2" />
          </CardActions>
        </Card>
      }
      </View>
    )
  }

}

export default WorkshopInfo

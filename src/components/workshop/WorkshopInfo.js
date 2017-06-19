import React from 'react'
import {
  Card, CardActions, CardHeader,
  CardMedia, CardTitle, CardText
} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'

const WorkshopInfo = ( { workshop, workshopID, fetchWorkshop}) => {

  let instructors = ''
  let title = ''
  let button = ''

  if (workshop && workshop.id !== workshopID) {
    fetchWorkshop(workshopID)
  }

  if (workshop) {
    instructors = workshop.instructors.map((instructor, index) => (
      <CardHeader
      key={index}
      title={instructor.name}
      subtitle={instructor.url}
      avatar={instructor.avatar}
      />
    ))
    title = `${workshop.title}  -  ${workshop.price}`
    button = (<FlatButton label="Buy" href={workshop.url} />)
  }

  return (
    <Card>
      <CardTitle title={title} />
      <CardTitle title="Instructors" />
        {instructors}
      <CardActions>
        {button}
      </CardActions>
    </Card>
  )
}




export default WorkshopInfo

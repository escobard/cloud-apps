import React from "react"
import { Grid } from "semantic-ui-react";

const Note = ({ id, data: { title, description, date }}) => {
  return(
    <Grid id={`${id}-note`}  columns='equal'>
      <Grid.Column>
        <i aria-hidden="true" className="sticky note big circular icon"></i>
      </Grid.Column>
      <Grid.Column computer mobile={10} tablet={12} width={14}>
        <h3>{title}</h3>
        <p>{description}</p>
      </Grid.Column>
      <Grid.Column>
        <p>{date}</p>
      </Grid.Column>
    </Grid>
  )
}

export default Note;

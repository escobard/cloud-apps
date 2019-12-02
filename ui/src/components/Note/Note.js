import React from "react";
import { Grid } from "semantic-ui-react";

import "./Note.scss";

const Note = ({ id, data: { title, description, date } }) => {
  return (
    <Grid id={`${id}-note`} columns="equal">
      <Grid.Column>
        <i
          aria-hidden="true"
          className="sticky note big circular icon"
        />
      </Grid.Column>
      <Grid.Column
        computer
        mobile={10}
        tablet={12}
        width={14}
        className="content"
      >
        <h3>{title}</h3>
        <p>{description}</p>
      </Grid.Column>
      <Grid.Column className="date">
        <p>{date}</p>
      </Grid.Column>
    </Grid>
  );
};

export default Note;


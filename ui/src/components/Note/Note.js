import React from "react";
import { Grid } from "semantic-ui-react";

import "./Note.scss";

const Note = ({ id, data: { subject, note, date } }) => {
  return (
    <Grid id={`${id}-note`} columns="equal">
      <Grid.Column>
        <i
          aria-hidden="true"
          className="sticky note big circular icon"
        />
      </Grid.Column>
      <Grid.Column
        mobile={9}
        tablet={12}
        computer={14}
        className="content"
      >
        <h3>{subject}</h3>
        <p>{note}</p>
      </Grid.Column>
      <Grid.Column className="date">
        <p>{date}</p>
      </Grid.Column>
    </Grid>
  );
};

export default Note;


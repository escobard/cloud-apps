import React from "react";
import { Grid } from "semantic-ui-react";

import "./Note.scss";

/** Note Component
 * @name Note
 * @param {string} id, inherited ID from parent
 * @param {object} data, note subject, date and message properties
 * @return {Component} Note
 * */

const Note = ({ id, data: { subject, note, date } }) => (
  <Grid id={`${id}-note`} columns="equal">
    <Grid.Column>
      <i aria-hidden="true" className="sticky note big circular icon" />
    </Grid.Column>
    <Grid.Column mobile={9} tablet={12} computer={14} className="content">
      <h3>{subject}</h3>
      <p>{note}</p>
    </Grid.Column>
    <Grid.Column className="date">
      <p>{date}</p>
    </Grid.Column>
  </Grid>
);

export default Note;

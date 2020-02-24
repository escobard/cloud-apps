import React from "react";
import { Grid } from "semantic-ui-react";

import "./Note.scss";

/** Note Component
 * @name Note
 * @param {string} id, inherited ID from parent
 * @param {object} data, note subject, date and message properties
 * @return {Component} Note
 * */

const Note = ({ id, data: { subject, note, date, icon } }) => (
  <Grid id={`${id}-note`} columns="equal">
    <Grid.Column mobile={3} tablet={2} computer={1} className="icon">
      <i
        aria-hidden="true"
        className={`${icon ? icon : "sticky note"} big circular icon`}
      />
    </Grid.Column>
    <Grid.Column mobile={9} tablet={12} computer={13} className="content">
      <h3>{subject}</h3>
      <p>{note}</p>
    </Grid.Column>
    {date && (
      <Grid.Column mobile={4} tablet={2} computer={2} className="date">
        <p>{date}</p>
      </Grid.Column>
    )}
  </Grid>
);

export default Note;

import React from "react";
import PropTypes from "prop-types";

import { Grid } from "semantic-ui-react";

import "./Note.scss";

// TODO - improve grid structure for error cases
const Note = ({ data: { subject, note, date, icon } }) => (
  <Grid
    columns="equal"
    className={subject === "API error" ? "error note" : "note"}
  >
    <Grid.Column mobile={3} tablet={2} computer={1} className="icon">
      <i
        aria-label={icon && icon.label ? icon.label : "note icon"}
        className={`${(icon && icon.image) ||
          "sticky note"} big circular icon error`}
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

Note.propTypes = {
  data: PropTypes.shape({
    subject: PropTypes.string.isRequired,
    note: PropTypes.string.isRequired,
    date: PropTypes.string,
    icon: PropTypes.shape({
      image: PropTypes.string,
      label: PropTypes.string
    })
  })
};

Note.defaultProps = {
  data: {
    date: undefined,
    icon: undefined
  }
};

export default Note;

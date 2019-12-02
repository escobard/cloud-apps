import React from "react";
import { Modal, Grid } from "semantic-ui-react";

import "./Modal.scss";

// all icons should be OUTLINE to differentiate
const ModalElement = ({ id, open, close, title }) => {
  const modalId = `${id}-modal`;

  return (
    <Modal id={modalId} size="large" open={open} onClose={close}>
      <Modal.Content>
        <div className="header">
          <Grid>
            <Grid.Column width={2}>
              <i aria-hidden="true" className="arrow left big icon" />
            </Grid.Column>
            <Grid.Column width={12}>
              <h2>{title}</h2>
            </Grid.Column>
            <Grid.Column width={2}>
              <i aria-hidden="true" className="clipboard outline big icon" />
            </Grid.Column>
          </Grid>
        </div>
        <div className="icon" />
        <div className="form" />
        <button>Add Note</button>
      </Modal.Content>
    </Modal>
  );
};

export default ModalElement;
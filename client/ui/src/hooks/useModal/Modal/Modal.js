import React from "react";
import PropTypes from "prop-types";
import { Modal, Grid } from "semantic-ui-react";

import "./Modal.scss";

const ModalElement = ({ title, content, showModal, closeModal }) => (
  <Modal id="modal" size="large" open={showModal} onClose={closeModal}>
    <Modal.Content>
      <Grid className="header">
        <Grid.Column width={2}>
          <i
            onKeyDown={e => {
              e.key === "Enter" && closeModal();
            }}
            tabIndex={0}
            aria-label="Back"
            onClick={closeModal}
            className="arrow left big icon"
            role="button"
          />
        </Grid.Column>
        <Grid.Column width={12}>
          <h2>{title}</h2>
        </Grid.Column>
        <Grid.Column width={2}>
          <i aria-hidden="true" className="clipboard outline big icon" />
        </Grid.Column>
      </Grid>
      <div className="icon-container">
        <i
          aria-hidden="true"
          className="sticky note outline big circular icon"
        />
      </div>
      {content}
    </Modal.Content>
  </Modal>
);

ModalElement.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.shape({}).isRequired,
  showModal: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired
};

export default ModalElement;

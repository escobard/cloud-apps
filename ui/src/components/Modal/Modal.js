import React from "react";
import { Modal, Grid } from "semantic-ui-react";
import PropTypes from "prop-types";

import "./Modal.scss";

/** Dynamically creates a modal from the data provided via props
 * @dev renders a semantic-ui-react modal
 * @param {boolean} state, determines open / close state
 * @param {function} close, state handler from parent
 * @param {string} title, string for modal title
 * @param {function} content, component to render in modal
 * @returns {Component}, ModalElement
 * */

const ModalElement = ({ state, close, data: {title, content}}) => (
  <Modal id="modal" size="large" open={state} onClose={close}>
    <Modal.Content>
      <Grid className="header">
        <Grid.Column width={2}>
          <i
            onKeyDown={e => {
              e.key === "Enter" && close();
            }}
            tabIndex={0}
            aria-label="Back"
            onClick={close}
            className="arrow left big icon"
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



export default ModalElement;

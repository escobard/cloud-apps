import React from "react";
import { Modal } from "semantic-ui-react";

const ModalElement = ({ open, close }) => {
  return (
    <Modal size="large" open={open} onClose={close}>
      <Modal.Content>
        <p>Are you sure you want to delete your account</p>
      </Modal.Content>
    </Modal>
  );
};

export default ModalElement;
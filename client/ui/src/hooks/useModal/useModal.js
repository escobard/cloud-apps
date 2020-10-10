import React, { useState } from "react";

import Modal from "./Modal";

// for global usage, useModal should become a provider instead of a hook
const useModal = () => {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => setShowModal(false);
  const renderModal = props => (
    <Modal showModal={showModal} closeModal={closeModal} {...props} />
  );
  return { showModal, openModal, closeModal, renderModal };
};

export default useModal;

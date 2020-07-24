import React, { useState } from "react";

const useModal = () => {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {setShowModal(true)};
  const closeModal = () => setShowModal(false);
  return { showModal, openModal, closeModal };
};

export default useModal;

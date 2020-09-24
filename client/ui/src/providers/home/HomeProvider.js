import React from "react";

import { useModal } from "hooks";

export const HomeContext = React.createContext([{}, () => {}]);

const HomeProvider = ({ children }) => {
  const { showModal, openModal, closeModal, renderModal } = useModal();

  return (
    <HomeContext.Provider value={{ showModal, openModal, closeModal, renderModal }}>
      {children}
    </HomeContext.Provider>
  );
};

export default HomeProvider;

import React from "react";

import { useModal } from "hooks";

export const HomeContext = React.createContext([{}, () => {}]);

const HomeProvider = ({ children }) => {
  const { showModal, openModal, closeModal } = useModal();

  return (
    <HomeContext.Provider value={{ showModal, openModal, closeModal }}>
      {children}
    </HomeContext.Provider>
  );
};

export default HomeProvider;

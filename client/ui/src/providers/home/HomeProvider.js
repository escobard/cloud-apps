import React, { useEffect, useState } from "react";

import { HomeContext } from ".";

export const HomeContext = React.createContext([{}, () => {}]);

const HomeProvider = ({ children }) => {
  return <HomeContext.Provider value={}>{children}</HomeContext.Provider>;
};

export default HomeProvider;

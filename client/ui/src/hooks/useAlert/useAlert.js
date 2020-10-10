import { useState } from "react";

const useAlert = () => {
  const [alert, setAlert] = useState({});

  return { alert, setAlert };
};

export default useAlert;

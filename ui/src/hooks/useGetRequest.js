import { useEffect, useState } from "react";

/** Manages state for resolving a GET request
 * @name useGetRequest
 * @dev used to avoid managing response state at a page container level
 * @param {function} request, async request function pending resolution
 * @param {*} effect, property to watch for change
 * @return {object} data, resolved response
 * */

export const useGetRequest = (request, effect) => {
  const [data, setData] = useState([]);
  const unmounted = useRef(null);

  const getData = async () => {
    try {
      const results = await request();
      if (results && !unmounted.current){
        setData(results);
      }
    } catch (e) {
      return "useGetRequest error: " + e;
    }
  };

  useEffect(() => {
    unmounted.current = false;
    getData();
    return () => {
      unounted.current = true;
    }

  }, [effect, unmounted]);

  return {
    data
  };
};

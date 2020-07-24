import { useEffect, useState, useRef } from "react";

import { cleanError } from "utils";

/** Manages state for resolving a GET request
 * @name useGetRequest
 * @dev used to avoid managing response state at a page container level
 * @param {function} request, async request function pending resolution
 * @param {*} effect, property to watch for change
 * @return {object} data, resolved response
 * */

const useGetRequest = (request) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const isMounted = useRef(null);

  const getData = async () => {
    try {
      isMounted.current && setLoading(true)
      const results = await request();
      if (results && isMounted.current){
        setData(results);
        setLoading(false)
      }
    } catch (e) {
      // placeholder
    }
  };

  useEffect(() => {
    isMounted.current = true;
    getData();
    return () => {
      isMounted.current = false;
    }

  }, [isMounted]);

  return {
    data,
    loading
  };
};

export default useGetRequest;

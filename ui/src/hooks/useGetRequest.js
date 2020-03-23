import { useEffect, useState, useRef } from "react";

/** Manages state for resolving a GET request
 * @name useGetRequest
 * @dev used to avoid managing response state at a page container level
 * @param {function} request, async request function pending resolution
 * @param {*} effect, property to watch for change
 * @return {object} data, resolved response
 * */

export const useGetRequest = (request, effect) => {
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
      const error = "useGetRequest error: " + e;
      if (isMounted.current){
        setData(error)
        setLoading(false)
      }
    }
  };

  useEffect(() => {
    isMounted.current = true;
    getData();
    return () => {
      isMounted.current = false;
    }

  }, [effect, isMounted]);

  return {
    data,
    loading
  };
};

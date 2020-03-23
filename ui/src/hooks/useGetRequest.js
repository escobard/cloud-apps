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
  const unmounted = useRef(null);

  const getData = async () => {
    try {
      setLoading(true)
      const results = await request();
      console.log('RESULTS', results)
      if (results && !unmounted.current){
        setData(results);
      }
    } catch (e) {
      const error = "useGetRequest error: " + e;
      setData(error)
      return error;
    } finally {
      setLoading(false)
    }
  };

  useEffect(() => {
    unmounted.current = false;
    getData();
    return () => {
      unmounted.current = true;
    }

  }, [effect, unmounted]);

  return {
    data,
    loading,
    getData
  };
};

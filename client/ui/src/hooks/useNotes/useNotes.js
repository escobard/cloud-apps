import React, { useState, useEffect, useRef } from "react";

import { api } from "utils";

import { apiRoutes, headers } from "../../constants";

const useNotes = () => {
  const [loading, setLoading] = useState(false);
  const [note, setNote] = useState(undefined);
  const [notes, setNotes] = useState(undefined);
  const isMounted = useRef(null);

  useEffect(() => {
    isMounted.current = true;
    if (isMounted.current){
      getNotes();
    }
    return () => {
      isMounted.current = false;
    };
  }, [isMounted]);

  useEffect(() => {
    note && getNotes();
  }, [note]);

  const getNotes = async () => {
    isMounted.current && setLoading(true);
    const results = await api("get", apiRoutes.getNotes, { headers });
    if (isMounted.current && results) {
      setNotes(results);
      return setLoading(false);
    }
  };

  const addNote = async note => {
    isMounted.current && setLoading(true);
    const results = await api("post", apiRoutes.addNote, { headers }, note);
    if (isMounted.current && results) {
      setNote(results);
      return setLoading(false);
    }
  };

  return {
    loading,
    notes,
    note,
    getNotes,
    addNote
  };
};

export default useNotes;

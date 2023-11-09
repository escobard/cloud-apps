import { useState, useEffect, useRef } from "react";

import { api } from "../../utils";

import { apiRoutes, headers } from "../../constants";

const useNotes = () => {
  const [loading, setLoading] = useState(false);
  const [note, setNote] = useState(undefined);
  const [notes, setNotes] = useState(undefined);
  const isMounted = useRef(null);

  const getNotes = async () => {
    isMounted.current && setLoading(true);
    const results = await api("get", apiRoutes.getNotes, { headers });
    if (isMounted.current && results) {
      setNotes(results);
      setLoading(false);
      return results;
    }
    return results;
  };

  useEffect(() => {
    isMounted.current = true;
    if (isMounted.current) {
      getNotes();
    }
    return () => {
      isMounted.current = false;
    };
  }, [isMounted]);

  useEffect(() => {
    note && getNotes();
  }, [note]);

  const addNote = async (newNote) => {
    isMounted.current && setLoading(true);
    const results = await api("post", apiRoutes.addNote, { headers }, newNote);
    if (isMounted.current && results) {
      setNote(results);
      setLoading(false);
      return results;
    }
    return results;
  };

  return {
    loading,
    notes,
    note,
    getNotes,
    addNote,
  };
};

export default useNotes;

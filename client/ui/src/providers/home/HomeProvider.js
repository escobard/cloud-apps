import React, { useEffect, useState } from "react";

import { useGetRequest } from "hooks";
import { getNotes } from "utils";

import { HomeContext } from ".";
import { addNoteFields } from "ui/src/constants";
import { addNote as addNoteRequest, validateForm } from "ui/src/utils";

export const HomeContext = React.createContext([{}, () => {}]);

const HomeProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);
  const [alert, setAlertState] = useState({});

  const [modal, setModal] = useState(false);

  const { data: fetchedNotes } = useGetRequest(getNotes);

  const setAlert = alert => {
    if (!alert) setAlertState({});
    setAlertState(alert);
  };

  // state helpers
  const toggleModal = () => {
    setAlert(!modal);
  };

  // TODO refactor to hook
  /** Submits the POST request to the API
   * @name addNote
   * @dev this requests tests basic validation between UI and API
   * @param {string} subject, contains note's subject value
   * @param {string} note, contains note's note value
   * @returns /addNote route response, or validation message
   **/

  const addNote = async (subject, note) => {
    const conditions = [
      {
        condition: subject.length < 5,
        error: addNoteFields[0].errors[0]
      },
      {
        condition: note.length < 25,
        error: addNoteFields[1].errors[0]
      }
    ];

    const errors = validateForm(conditions);

    if (errors.length > 0) {
      setAlert({
        title: "Note form error:",
        message: `Form contains the following error(s): ${errors.join(", ")}.`,
        status: "red"
      });
    }

    if (errors.length === 0) {
      const request = {
        // TODO - this should come from authentication token after phase 4
        user_id: 1,
        subject,
        note
      };

      const response = await addNoteRequest(request);

      if (!response.status) {
        return setAlert({
          title: "Note form error(s)",
          message: response,
          status: "red"
        });
      }
      const {
        data: { status }
      } = response;

      setAlert({
        title: "Note added!",
        message: status,
        status: "green"
      });

      const notes = await getNotes();

      // TODO - split into its child function for readability
      setTimeout(() => {
        setNotes(notes);
        setModal(false);
        return setAlert({});
      }, 500);
    }
  };

  useEffect(() => {
    setNotes(fetchedNotes);
  }, [fetchedNotes]);

  return (
    <HomeContext.Provider
      value={{
        notes: { notes },
        alert: { alert },
        setAlert: { setAlert },
        modal: { modal },
        setModal: { toggleModal },
        addNote: { addNote }
      }}
    >
      {children}
    </HomeContext.Provider>
  );

  // TODO proptypes
};

export default HomeProvider;

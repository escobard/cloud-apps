import { todayDate } from "utils/todayDate";

export const footer = {
  noNotes: "NO NOTES",
  withNotes: "COMPLETED"
};

export const header = {
  title: "Your Notes",
  todayDate: todayDate()
};

export const notes = {
  noNotes: {
    subject: "No Notes",
    note: "Add a note by clicking on the + icon below.",
    icon: {
      image: "exclamation",
      label: "No Notes"
    }
  },
  apiError: {
    subject: "API error",
    icon: {
      image: "exclamation",
      label: "API error"
    }
  }
};

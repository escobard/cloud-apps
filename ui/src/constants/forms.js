export const addNoteFields = [
  {
    name: "subject",
    label: "Subject",
    placeholder: "Enter a subject for your note",
    value: "",
    errors: ["Subject must contain more than 5"]
  },
  {
    name: "note",
    label: "Note *",
    placeholder: "Enter a description for your note (required)",
    value: "",
    errors: ["Note must contain more than 25 characters"]
  }
];

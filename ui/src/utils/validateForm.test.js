import { validateForm} from "./validateForm";

// TODO - look into improving this absolute path logic to match ui code
import { addNoteFields } from "Constants";

describe("validateForm", () => {
  console.log(addNoteFields)
  const conditions = [
    {
      condition: true,
      error: addNoteFields[0].errors[0]
    },
    {
      condition: false,
      error: addNoteFields[1].errors[0]
    }
  ];
})
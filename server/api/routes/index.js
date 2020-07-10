import { routes } from "../constants";

import health from "./health"
import addNote from "./addNote"
import getNotes from "./getNotes"

export default app => {

  // lifecycle checks
  app.use(routes.health, health);
  
  // note routes
  app.use(routes.addNote, addNote)
  app.use(routes.getNotes, getNotes)
};

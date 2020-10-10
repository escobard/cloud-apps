import { Router } from "express";

import { Notes } from "../services/postgres";
import { checkDB } from "../middlewares";
import { cleanError } from "../utils";

export default Router().post("/", checkDB(), async (req, res) => {
  try {
    const { subject, note } = req.body;

    const date = new Date().toLocaleDateString("en-US", {
      year: "2-digit",
      month: "2-digit",
      day: "2-digit",
      hour: "numeric",
      minute: "numeric",
      timeZone: "Canada/Mountain",
    });

    // TODO revealing too much information on response, should reduce this to only the id with phase 4
    const addNote = await Notes.create({ user_id: 1, subject, note, date });
    res.status(200).json(addNote);
  } catch (err) {
    res.status(503).json(cleanError(err));
  }
});

import { Router } from "express";

import { models } from "../services/postgres"
import { checkDB } from "../middlewares";
import { cleanError } from "../utils";

const { Notes } = models;

export default Router().get("/", checkDB(), async (req, res) => {
  try {
    const getNotes = await Notes.findAll();
    return res.status(200).json(getNotes.reverse());
  } catch (err) {
    return res.status(503).json(cleanError(err));
  }
});

const router = require("express").Router(),
  {
    models: { Notes }
  } = require("../services/postgres"),
  { checkDB } = require("../middlewares"),
  { cleanError } = require("../utils")

router.post("/", checkDB, async (req, res) => {
  try {
    console.log("/addNote request", req.body);
    const { subject, note } = req.body;

    const date = new Date().toLocaleDateString("en-US", {
      year: "2-digit",
      month: "2-digit",
      day: "2-digit",
      hour: "numeric",
      minute: "numeric",
      timeZone: "Canada/Mountain"
    });

    // user_id will be dynamic after phase 3
    // TODO revealing too much information on response, should reduce this with phase 4
    const addNote = await Notes.create({ user_id: 1, subject, note, date });
    res.status(200).json(addNote);
  } catch (err) {
    const error = cleanError(err);
    res.status(503).json(error);
  }
});

module.exports = router;

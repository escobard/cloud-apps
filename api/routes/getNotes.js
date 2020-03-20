const router = require("express").Router(),
  {
    models: { Notes }
  } = require("../services/postgres"),
  { checkDB } = require("../middlewares"),
  { cleanError } = require("../utils");

// the route here is replaced by the route passed within ./tests-in-order.js
router.get("/", checkDB, async (req, res) => {
  try {
    const getNotes = await Notes.findAll();
    return res.status(200).json(getNotes.reverse());
  } catch (err) {
    return res.status(503).json(cleanError(err));
  }
});

module.exports = router;

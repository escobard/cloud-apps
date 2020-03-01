const router = require("express").Router(),
  {
    models: { Notes }
  } = require("../services/postgres");
checkDB = require("../middlewares/checkDB");

// the route here is replaced by the route passed within ./index.js
router.get("/", checkDB, async (req, res) => {
  try {
    const getNotes = await Notes.findAll();
    res.status(200).json(getNotes.reverse());
  } catch (err) {
    const error = "getNotes route promise rejection" + err;
    console.log(error)
    res.status(503).json(error)
  }
});

module.exports = router;

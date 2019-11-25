const router = require('express').Router(),
  { models: { Notes } } = require("../services/postgres");
// add future validation
// postFormValidation = require("../middlewares/postFormValidation");

// the route here is replaced by the route passed within ./index.js
router.get('/', async (req, res) => {
  console.log('/getNotes request', req.body);
  
  const getNotes = await Notes.findAll()
  // TODO - update with addNote logic
  
  res.status(200).json(JSON.stringify(addNote, null, 4));
});

module.exports = router;

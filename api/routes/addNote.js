const router = require('express').Router(),
{ models: { Notes } } = require("../services/postgres");
  // add future validation
  // postFormValidation = require("../middlewares/postFormValidation");

// the route here is replaced by the route passed within ./index.js
router.post('/', async (req, res) => {
  console.log('/addNote request', req.body);
  const { user_id, subject, note } = req.body;
  
  const addNote = await Notes.create({user_id, subject, note})
  // TODO - update with addNote logic
  
  res.status(200).json(addNote);
});

module.exports = router;

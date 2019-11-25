const router = require('express').Router(),
{ models: { Notes } } = require("../services/postgres");
  // add future validation
  // postFormValidation = require("../middlewares/postFormValidation");

// the route here is replaced by the route passed within ./index.js
router.post('/', (req, res) => {
  console.log('/addNote request', req.body);
  
  // TODO - update with addNote logic
  Notes.create({user_id: 1, subject: "first note", note: "First note thoughts"}).then(note => {
    console.log("Note:", note)
  })
});

module.exports = router;

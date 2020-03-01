const router = require('express').Router(),
{ models: { Notes } } = require("../services/postgres"),
  checkDB = require("../middlewares/checkDB")
  addNoteValidation = require("../middlewares/addNoteValidation");

router.post('/', async (req, res) => {
  try{
    console.log('/addNote request', req.body);
    const { subject, note } = req.body;

    // may want to migrate this logic to Postgres to remove this operation from the API
    const options = { year: '2-digit', month: '2-digit', day: '2-digit', hour: 'numeric', minute: 'numeric' };
    const date  = new Date().toLocaleDateString("en-US", options);

    // TODO - user_id will be dynamic after phase 3
    const addNote = await Notes.create({user_id: 1, subject, note, date})

    res.status(200).json(addNote);
  }catch(err){
    const error = "addNotes route promise rejection" + err;
    console.log(error)
    res.status(503).json(error)
  }

});

module.exports = router;

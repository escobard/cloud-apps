const router = require('express').Router();
  // add future validation
  // postFormValidation = require("../middlewares/postFormValidation");

// the route here is replaced by the route passed within ./index.js
router.post('/', (req, res) => {
  console.log('/addNote request', req.body);
  
  // TODO - update with addNote logic
});

module.exports = router;

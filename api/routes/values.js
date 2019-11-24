const router = require('express').Router();

// the route here is replaced by the route passed within ./index.js
router.get('/', async (req, res) => {
    const values = await pg.query('SELECT * from notes.values');

    // sends only the values, stripping redundant pg data
  res.status(200).json(
    values.rows);
});

module.exports = router;

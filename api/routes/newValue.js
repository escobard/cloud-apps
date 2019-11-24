const router = require('express').Router();

router.post('/', async (req, res) =>{
    // saves in PG
    pg.query('INSERT INTO notes.values(number) VALUES($1)', [2]);

    res.send({ working: true })
})

module.exports = router;

const router = require('express').Router();

router.post('/', async (req, res) =>{
    // saves in PG
    pg.query('INSERT INTO values(number) VALUES($1)', [1]);

    res.send({ working: true })
})

module.exports = router;

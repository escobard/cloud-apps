const router = require("express").Router();

router.get("/", (req, res) => {
  res.status(200).json({
    healthy: true,
    DB: global.hasDB === true,
    // TODO update docker with this new variable for staging / prod
    process: process.env.environment
  });
});

module.exports = router;

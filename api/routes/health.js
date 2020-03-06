const router = require("express").Router();

router.get("/", (req, res) => {
  res.status(200).json({
    healthy: true,
    DB: global.hasDB === true,
    process:
      global.environment
        ? global.environment
        : "dev"
  });
});

module.exports = router;

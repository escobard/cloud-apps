import { Router } from "express";

export default Router().get("/", (req, res) => {
  res.status(200).json({
    healthy: true,
    DB: global.hasDB === true,
    // TODO update docker with this new variable for staging / prod
    // TODO update process to environment, so it makes more sense
    process: process.env.environment,
  });
});

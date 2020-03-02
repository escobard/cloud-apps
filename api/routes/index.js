const routes = require("../constants/routes");

module.exports = app => {

  // lifecycle checks
  app.use(routes.health, require("../routes/health"));
  
  // note routes
  app.use(routes.addNote, require('../routes/addNote'))
  app.use(routes.getNotes, require("../routes/getNotes"))
};

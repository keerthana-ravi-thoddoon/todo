"use strict";
module.exports = function(app) {
  //Initialize models
  require("../api/models/todoitems");

  //Initialize routes
  let todoitemsRoutes = require("../api/routes/todoitems-route");  
  todoitemsRoutes(app);
};

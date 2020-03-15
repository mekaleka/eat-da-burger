
// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burgers = {
  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(vals, cb) {
    orm.create("burgers", ["name", "devoured"], [vals, false],function(res) {
      cb(res);
    });
  },
  update: function(con, cb) {
    var objColVals = {
      devoured: true
    }
    var condition = "id = " + con;
    console.log(condition);
    orm.update("burgers", objColVals, condition, function(res) {
      cb(res);
    });
  },

  delete: function(condition, cb) {
    var con = "id = " + condition;
    orm.delete("burgers", con, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (burgersController.js).
module.exports = burgers;

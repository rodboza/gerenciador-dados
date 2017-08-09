
const mongoose = require('mongoose');

module.exports = function(app) {

  var db = {};

  db = mongoose.createConnection(app.env.connectString);

  return db;

}

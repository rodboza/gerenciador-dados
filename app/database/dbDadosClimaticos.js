

module.exports = function(app) {

  var db = {};

  db = app.mongoose.createConnection(app.env.connectString);

  return db;

}

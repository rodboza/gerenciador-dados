

module.exports = function(app) {

  var db = {};
  db = app.mongoose.connect(app.env.connectString);

  return db;

}

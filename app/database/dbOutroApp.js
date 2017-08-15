console.log("inicio dbAuth");

module.exports = function(app) {
  var db = {};
  db = app.mongoose.connect(app.env.connectString.dbAuth, {useMongoClient:true});
  return db;
}

console.log("fim dbAuth");

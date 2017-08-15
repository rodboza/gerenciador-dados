console.log("inicio dbDadosClimaticos");


module.exports = function(app) {
  var db = {};
  db = app.mongoose.connect(app.env.connectString.dbClimatico, {useMongoClient:true});
  return db;
}

console.log("fim dbDadosClimaticos");

console.log("inicio dbDadosClimaticos");


module.exports = function(app) {

  var db = {};
  //var mongo = new app.mongoose();
  db = app.mongoose.connect(app.env.connectStringdbClimatico, {useMongoClient:true});


  return db;

}

console.log("fim dbDadosClimaticos");

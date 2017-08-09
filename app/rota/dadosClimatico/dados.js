

module.exports = function(app) {


  var api = app.api.dadosClimaticos.dados;

  app.get("/dadosClimatico/dados", api.getDados);


};

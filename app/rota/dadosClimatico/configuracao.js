

module.exports = function(app) {


  var api = app.api.dadosClimaticos.dados;

  app.get("/dadosClimatico/dados/atual", api.getDadosAtual);
  app.post("/dadosClimatico/dados", api.registrarDados);


};

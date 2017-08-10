

module.exports = function(app) {


  var dadosModelo = app.modelo.dadosClimatico.dados;

  dadosModelo
    .after('post', app.sendErrorsFromDB)
    .after('put', app.sendErrorsFromDB)
    .after('get', app.sendErrorsFromDB)
    .after('delete', app.sendErrorsFromDB);
  
  dadosModelo.updateOptions({new: true, runValidators: true});
  
  dadosModelo.register(app,'/dadosClimatico/dados');
  
  
  var api = app.api.dadosClimaticos.dados;
  
  
 // app.get("/dadosClimatico/dados", api.getDados);
  app.get("/dadosClimatico/dados/atual", api.getDadosAtual);
//  app.post("/dadosClimatico/dados", api.registrarDados);


};

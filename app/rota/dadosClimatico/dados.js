

module.exports = function(app) {


  var dadosModelo = app.modelo.dadosClimatico.dados;
  console.log(dadosModelo.routes);

  /*/**/
  dadosModelo.methods(['get', 'post', 'put', 'delete']);

  /*dadosModelo
    .after('post', app.erros.sendErrorsOrNext)
    .after('put', app.erros.sendErrorsOrNext)
    .after('get', app.erros.sendErrorsOrNext)
    .after('delete', app.erros.sendErrorsOrNext);*/

  dadosModelo.updateOptions({new: true, runValidators: true});

  dadosModelo.register(app,'/dadosClimatico/dados');
/**/

  var api = app.api.dadosClimaticos.dados;


 // app.get("/dadosClimatico/dados", api.getDados);
  app.get("/dadosClimatico/dados/atual", api.getDadosAtual);
//  app.post("/dadosClimatico/dados", api.registrarDados);


};

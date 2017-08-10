
module.exports = function(app) {

  var configuracaoModelo = app.modelo.dadosClimatico.configuracao;
  
  configuracaoModelo.methods(['get', 'post', 'put', 'delete']);
  
  configuracaoModelo
    .after('post', app.sendErrorsFromDB)
    .after('put', app.sendErrorsFromDB)
    .after('get', app.sendErrorsFromDB)
    .after('delete', app.sendErrorsFromDB);
  
  configuracaoModelo.updateOptions({new: true, runValidators: true});
  
  configuracaoModelo.register(app,'/dadosClimatico/configuracao');
  
  var api = app.api.dadosClimaticos.configuracao;
  
  app.get("/dadosClimatico/configuracao/intervalo", api.getIntervalo);
  
  
};

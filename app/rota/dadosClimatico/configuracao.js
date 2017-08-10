
module.exports = function(app) {

  var configuracaoModel = app.modelo.dadosClimatico.configuracao;
  
  console.log(configuracaoModel);
  
  configuracaoModel.methods(['get', 'post', 'put', 'delete']);
  
  configuracaoModel
    .after('post', app.sendErrorsFromDB)
    .after('put', app.sendErrorsFromDB)
    .after('get', app.sendErrorsFromDB)
    .after('delete', app.sendErrorsFromDB);
  
  configuracaoModel.updateOptions({new: true, runValidators: true});
  
  configuracaoModel.register(app,'/dadosClimatico/configuracao');
  
  var api = app.api.dadosClimaticos.configuracao;
  
  app.get("/dadosClimatico/configuracao/intervalo", api.getIntervalo);
  
  
};

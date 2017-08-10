
module.exports = function(app) {

  var configuracaoModel = app.database.dbDadosClimaticos.model('Configuacao');
  configuracaoModel.methods(['get', 'post', 'put', 'delete']);
  configuracaoModel configuracaoModel.updateOptions({new: true, runValidators: true});
  configuracaoModel.register(app,'/configuracao');
  
  var api = app.api.dadosClimaticos.configuracao;
  
  app.get("/configuracao/intervalo", api.getIntervalo);
  
  
};

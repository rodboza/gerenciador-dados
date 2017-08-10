
module.exports = function(app) {

  var configuracaoModel = app.modelo.dadosClimatico.configuracao;
  
  console.log(configuracaoModel);
  
  configuracaoModel.methods(['get', 'post', 'put', 'delete']);
  configuracaoModel.updateOptions({new: true, runValidators: true});
  configuracaoModel.register(app,'/configuracao');
  
  var api = app.api.dadosClimaticos.configuracao;
  
  app.get("/configuracao/intervalo", api.getIntervalo);
  
  
};


module.exports = function(app) {

  var configuracaoModelo = app.modelo.dadosClimatico.configuracao;

  configuracaoModelo.methods(['get', 'post', 'put', 'delete']);

  configuracaoModelo
    .after('post', app.erros.sendErrorsOrNext)
    .after('put', app.erros.sendErrorsOrNext)
    .after('get', app.erros.sendErrorsOrNext)
    .after('delete', app.erros.sendErrorsOrNext);

  configuracaoModelo.updateOptions({new: true, runValidators: true});

  configuracaoModelo.register(app,'/dadosClimatico/configuracao');

  var api = app.api.dadosClimaticos.configuracao;

  app.get("/dadosClimatico/configuracao/intervalo", api.getIntervalo);


};

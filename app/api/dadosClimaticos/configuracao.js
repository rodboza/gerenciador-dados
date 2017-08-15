

module.exports = function(app) {

  var api = {};
  configuracaoModelo = app.modelo.dadosClimatico.configuracao;

  api.getIntervalo = function(req, res, next) {

    configuracaoModelo.findOne({} , (err, configuracao) => {
      if (err) {
        return app.sendErrorsFromDB(res, err);
      } else if (configuracao) {
        const intervalo = configuracao.intervalo;
        return res.status(200).json(intervalo);
      } else {
        return res.sendStatus(204);
      }
    })
  }


  return api;
};

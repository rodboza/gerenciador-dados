

module.exports = function(app) {

  var api = {};
  configuracaoModelo = app.modelo.dadosClimatico.configuracoes;

  //INICIO FUNCAO
  api.getNomeValor = function(req, res, next) {
    var busca = req.params.nome;
    configuracaoModelo.findOne( {nome:'INTERVALO'} , (err, configuracao) => {

      if (err)
        return app.sendErrorsFromDB(res, err);

      if (configuracao)
        return res.status(200).json(configuracao.valor);

      return res.sendStatus(404);
    })
  }
  //FIM FUNCAO

  //INICIO FUNCAO
  api.getAll = function(req, res, next) {
    return res.sendStatus(404);
  }
  //FIM FUNCAO

  //INICIO FUNCAO
  api.getOne = function(req, res, next) {
    return res.sendStatus(404);
  }
  //FIM FUNCAO

  //INICIO FUNCAO
  api.post = function(req, res, next) {
    return res.sendStatus(404);
  }
  //FIM FUNCAO

  //INICIO FUNCAO
  api.put = function(req, res, next) {
    return res.sendStatus(404);
  }
  //FIM FUNCAO

  //INICIO FUNCAO
  api.delete = function(req, res, next) {
    return res.sendStatus(404);
  }
  //FIM FUNCAO

  return api;

};

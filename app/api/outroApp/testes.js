module.exports = function(app) {

  let api = {};
  modelo = app.modelo.outroApp.testes

    api.getAll = function(req, res, next) {

      modelo.find({} , (err, dados) => {
        if (err)
          return app.erros.sendErrorsFromDB(res, err);

        if (dados)
          return res.status(200).json(dados);

        return res.sendStatus(404);

      })
    }

  //INICIO FUNCAO
  api.getOne = function(req, res, next) {
    return res.sendStatus(404);
  }
  //FIM FUNCAO

  api.post = function(req, res, next) {
    return res.sendStatus(404);
  }

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

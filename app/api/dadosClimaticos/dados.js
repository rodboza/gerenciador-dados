

module.exports = function(app) {

  var api = {};
  dadosModelo = app.modelo.dadosClimatico.dados

  api.getDadosAtual = function(req, res, next) {

    dadosModelo.findOne({} , (err, dados) => {
      if (err)
        return app.erros.sendErrorsFromDB(res, err);

      if (dados)
        return res.status(200).json(dados);

      return res.sendStatus(404);

    }).sort({ocorrencia:-1});
  }


    api.getAll = function(req, res, next) {

      dadosModelo.find({} , (err, dados) => {
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

    const ocorrencia = req.body.ocorrencia || Date.now()
    const temperatura = req.body.temperatura || -999
    const umidadeumidade = req.body.umidade || -999
    const pressao = req.body.pressao || -999

    const newDados = new dadosModelo({ ocorrencia, temperatura, umidade, pressao });

    newDados.save()
    .then( (err) => {return app.erros.sendErrorsFromDB(res, err);});
//function (err){
//return app.erros.sendErrorsFromDB(res, err);
//}
//);
    return res.status(201).json(newDados);

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

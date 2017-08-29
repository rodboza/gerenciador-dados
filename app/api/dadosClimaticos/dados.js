

module.exports = function(app) {

  var api = {};
  dadosModelo = app.modelo.dadosClimatico.dados

  api.getDadosAtual = function(req, res, next) {
    dadosModelo.findOne({} , 
      (err, dados) => {
        if (err)
          return app.erros.sendErrorsFromDB(res, err);
        if (dados)
          return res.status(200).json(dados);
        return res.sendStatus(404);
      }
    ).sort({ocorrencia:-1});
  }

   
  
  //INICIO FUNCAO
  api.getId = function(req, res, next) {
    dadosModelo.findById(req.params.id)
      .exec()
      .then(
        (dados) => {
          if (!dados)
            return res.sendStatus(404);
          req.dados = dados;
          next();            
        })
      .catch (
        (err) => {
          return app.erros.sendErrorsFromDB(res, err);
        });
  }
  //FIM FUNCAO
  
  api.getAll = function(req, res, next) {
    dadosModelo.find({} , (err, dados) => {
      if (err)
        return app.erros.sendErrorsFromDB(res, err);
      if (dados)
        return res.status(200).json(dados);
      return res.sendStatus(404);
    });
  }

  //INICIO FUNCAO
  api.getOne = function(req, res, next) {
    return res.status(200).json(req.dados);
  }
  //FIM FUNCAO

  api.post = function(req, res, next) {
    var dados = new dadosModelo();
    dados.ocorrencia = req.body.ocorrencia || Date.now();
    dados.temperatura = req.body.temperatura || -999;
    dados.umidade = req.body.umidade || -999;
    dados.pressao = req.body.pressao || -999;
    
    dados.save()
      .then( 
        (err) => {
            return app.erros.sendErrorsFromDB(res, err);
        }
      );
    return res.status(201).json(dados);
  }

  //INICIO FUNCAO
  api.put = function(req, res, next) {
    var dados = req.dados;
    dados.ocorrencia = req.body.ocorrencia || dados.ocorrencia
    dados.temperatura = req.body.temperatura || dados.temperatura
    dados.umidadeumidade = req.body.umidade || dados.umidadeumidade
    dados.pressao = req.body.pressao || dados.pressao
    dados.save()
      .then( 
        (err) => {
            return app.erros.sendErrorsFromDB(res, err);
        }
      );
    return res.status(201).json(dados);  }
  //FIM FUNCAO

  //INICIO FUNCAO
  api.delete = function(req, res, next) {
    
    dadosModelo.remove(
        {_id: req.params.id}, 
        (err, dados) => {
            if (err)
              return app.erros.sendErrorsFromDB(res, err);
        }
    );
    return res.sendStatus(200);
  }
  //FIM FUNCAO

  return api;
};

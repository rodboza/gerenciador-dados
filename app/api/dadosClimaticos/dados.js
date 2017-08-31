

module.exports = function(app) {

  let api = {};
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
    let dados = new dadosModelo();
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
    let d = req.dados;
    d.ocorrencia = req.body.ocorrencia || d.ocorrencia;
    d.temperatura = req.body.temperatura || d.temperatura;
    d.umidade = req.body.umidade || d.umidadeumidade;
    d.pressao = req.body.pressao || d.pressao;
    //dadosModelo.updateOne({_id:d._id}, {ocorrencia:d.ocorrencia, temperatura:d.temperatura, umidade:d.umidade, pressao:d.pressao})
    d.save()
      .then( 
        (err) => {
            return app.erros.sendErrorsFromDB(res, err);
        }
      );
    return res.status(201).json(d);  }
  //FIM FUNCAO

  //INICIO FUNCAO
  api.delete = function(req, res, next) {
    let dados = req.dados;
    dadosModelo.remove(
        {_id: dados._id}, 
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

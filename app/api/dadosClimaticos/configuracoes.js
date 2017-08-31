

module.exports = function(app) {

  let api = {};
  configuracaoModelo = app.modelo.dadosClimatico.configuracoes;

  //INICIO FUNCAO
  api.getNomeValor = function(req, res, next) {
    configuracaoModelo.findOne( {nome:req.params.nome} , (err, configuracao) => {
      if (err)
        return app.erros.sendErrorsFromDB(res, err);
      if (!configuracao)
        return res.sendStatus(404);
      return res.status(200).json(configuracao.valor);
    });
  }
  //FIM FUNCAO

  //INICIO FUNCAO
  api.getId = function(req, res, next) {
    configuracaoModelo.findOne( {_id:req.params.id} , (err, configuracao) => {
      if (err)
        return app.erros.sendErrorsFromDB(res, err);
      if (!configuracao)
        return res.sendStatus(404);
      req.configuracao = configuracao;
      next();
    });
  }
  //FIM FUNCAO
  
  //INICIO FUNCAO
  api.getName = function(req, res, next) {
    configuracaoModelo
      .findOne( 
        {nome:req.params.nome} 
        ,(err, configuracao) => {
          if (err)
            return app.erros.sendErrorsFromDB(res, err);
          if (!configuracao)
            return res.sendStatus(404);
          req.configuracao = configuracao;
          next();
        }
      );
  }
  //FIM FUNCAO

  //INICIO FUNCAO
  api.getAll = function(req, res, next) {
    configuracaoModelo.find({}, (err, configuracao) => {
      if (err)
        return app.erros.sendErrorsFromDB(res, err);
      if (!configuracao)
        return res.sendStatus(404);
      return res.status(200).json(configuracao);
    });
  }
  //FIM FUNCAO

  //INICIO FUNCAO
  api.getOne = function(req, res, next) {
    return res.status(200).json(req.configuracao);
  }
  //FIM FUNCAO

  //INICIO FUNCAO
  api.post = function(req, res, next) {
    let config = new configuracaoModelo();
    config.nome = req.body.nome;
    config.valor = req.body.valor;

    configuracaoModelo
      .findOne( 
          {nome:config.nome} 
          ,(err, configuracao) => {
            if (err)
              return app.erros.sendErrorsFromDB(res, err);
            if (configuracao)
              return app.erros.sendErrorsDuplicateRecord(res, configuracao.nome);
            config
              .save()
              .then ( (err) => app.erros.sendErrorsFromDB(res, err) );
            return res.status(201).json(config);
          }
      )
      

  }
  //FIM FUNCAO

  //INICIO FUNCAO
  api.put = function(req, res, next) {
    let config = req.configuracao;
    config.valor = req.body.valor;
    config
      .save()
      .then( (err) => app.erros.sendErrorsFromDB(res, err));
      return res.status(201).json(config);
    }
  //FIM FUNCAO

  //INICIO FUNCAO
  api.delete = function(req, res, next) {
    configuracaoModelo
      .remove({_id:req.configuracao._id})
      .exec()
      .then( (err) => app.erros.sendErrorsFromDB(res, err));
    return res.sendStatus(200);
  }
  //FIM FUNCAO

  return api;

};

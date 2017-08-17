

module.exports = function(app) {

  var api = {};
  dadosModelo = app.modelo.dadosClimatico.dados

  api.getDadosAtual = function(req, res, next) {

    dadosModelo.findOne({$query:{}, $orderby:{ocorrencia:-1}} , (err, dados) => {
      if (err) 
        return app.erros.sendErrorsFromDB(res, err);
      
      if (dados) {
        console.log("dados");
        const { ocorrencia, temperatura, umidade, pressao } = dados;
        res.status(200).json(dados);
      }

      return res.sendStatus(204);

    })
  }


    api.getAll = function(req, res, next) {

      dadosModelo.find({} , (err, dados) => {
        if (err) 
          return app.erros.sendErrorsFromDB(res, err);
        
        if (dados)
          return res.status(200).json(dados);
        
        return res.sendStatus(204);
        
      })
    }

  //INICIO FUNCAO
  api.getOne = function(req, res, next) {
  }
  //FIM FUNCAO
  
  api.post = function(req, res, next) {
    
    const ocorrencia = req.body.ocorrencia || Date.now()
    const temperatura = req.body.temperatura || -999
    const umidadeumidade = req.body.umidade || -999
    const pressao = req.body.pressao || -999
    
    const newDados = new dadosModelo({ ocorrencia, temperatura, umidade, pressao });

    newDados.save()
    .then(
      function (err){
        return app.erros.sendErrorsFromDB(res, err);
      }
    );
    
    return res.status(201).json(newDados);
  }

  //INICIO FUNCAO
  api.put = function(req, res, next) {
  }
  //FIM FUNCAO

  //INICIO FUNCAO
  api.put = function(req, res, next) {
  }
  //FIM FUNCAO

  return api;
};

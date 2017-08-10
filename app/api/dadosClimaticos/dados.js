

module.exports = function(app) {

  var api = {};
  dadosModelo = app.modelo.dadosClimatico.dados

  api.getDadosAtual = function(req, res, next) {

    dadosModelo.findOne({$query:{}, $orderby:{ocorrencia:-1}} , (err, dados) => {
      if (err) {
        return app.sendErrorsFromDB(res, err);
      } else if (dados) {
        const { ocorrencia, temperatura, umidade, pressao } = dados;
        //return res.status(200).send("<h1>teste da chamada da API</h1><br> nome=" + ocorrencia) ;
        return res.status(200).json(dados);
      }
    })
  }


    api.getDados = function(req, res, next) {

      dadosModelo.find({} , (err, dados) => {
        if (err) {
          return app.sendErrorsFromDB(res, err);
        } else if (dados) {
          //const { ocorrencia, temperatura, umidade, pressao } = dados;
          //return res.status(200).send("<h1>teste da chamada da API</h1><br> nome=" + ocorrencia) ;
          return res.status(200).json(dados);
        }
      })
    }

  api.registrarDados = function(req, res, next) {
    const ocorrencia = req.body.ocorrencia || Date.now()
    const temperatura = req.body.temperatura || -999
    const umidadeumidade = req.body.umidade || -999
    const pressao = req.body.pressao || -999
    const newDados = new dadosModelo({ ocorrencia, temperatura, umidade, pressao });
    //const newDados = new Dados({ ocorrencia: Date.now(), temperatura: i, umidade: i, pressao:i });
    newDados.save()
    .then(
      function (err){
        return app.sendErrorsFromDB(res, err);
      }
    );
    return res.status(201).json(newDados);
  }


  return api;
};

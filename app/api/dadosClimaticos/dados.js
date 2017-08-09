

module.exports = function(app) {

  var api = {};
  Dados = app.database.dbDadosClimaticos.model('Dados');

  api.getDados = function(req, res, next) {

    /*
    for (var i = 0; i < 100; i++) {
      const newDados = new Dados({ ocorrencia: Date.now(), temperatura: i, umidade: i, pressao:i });
      newDados.save()
      .then(
        function (err){
          return app.sendErrorsFromDB(res, err);
        }
      );
    }
*/

    Dados.findOne({} , (err, dados) => {
      if (err) {
        return app.sendErrorsFromDB(res, err);
      } else if (dados) {
        const { ocorrencia, temperatura, umidade, pressao } = dados;
        return res.status(200).send("<h1>teste da chamada da API</h1><br> nome=" + ocorrencia) ;
      }
    })
  }

  return api;
};

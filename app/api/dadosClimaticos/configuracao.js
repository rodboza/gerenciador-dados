

module.exports = function(app) {

  var api = {};
  configuracaoModelo = app.modelo.dadosClimatico.configuracao;

  //INICIO FUNCAO
  api.getIntervalo = function(req, res, next) {

    configuracaoModelo.findOne({} , (err, configuracao) => {
      
      if (err)
        return app.sendErrorsFromDB(res, err);
      
      if (configuracao) {
        const intervalo = configuracao.intervalo;
        return res.status(200).json(intervalo);
      } 
      
      return res.sendStatus(204);
      
    })
  }
  //FIM FUNCAO

  //INICIO FUNCAO
  api.getAll = function(req, res, next) {
  }
  //FIM FUNCAO

  //INICIO FUNCAO
  api.getOne = function(req, res, next) {
  }
  //FIM FUNCAO

  //INICIO FUNCAO
  api.post = function(req, res, next) {
  }
  //FIM FUNCAO

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

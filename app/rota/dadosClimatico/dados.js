var express    = require('express');

module.exports = function(app) {

  var router = express.Router();
  var api = app.api.dadosClimaticos.dados;
  
  router 
    .get('/atual', api.getDadosAtual)
    .get('/', api.getAll)
    .get('/:id', api.getOne)
    .post('/', api.post)
    .put('/:id', api.put)
    .delete('/:id', api.delete)
  ;

  app.use('/dadosClimatico/dados', router);

};

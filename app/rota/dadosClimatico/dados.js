var express    = require('express');


module.exports = function(app) {

  var router = express.Router();
  var api = app.api.dadosClimaticos.dados;

  router
    .get('/atual', api.getDadosAtual)
    .get('/', api.getAll)
    .post('/', api.post)
    .get('/:id', api.getId, api.getOne)
    .put('/:id', api.getId, api.put)
    .delete('/:id', api.getId, api.delete)
  ;

  app.use('/dadosClimatico/dados', router);

};

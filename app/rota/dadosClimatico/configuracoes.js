var express    = require('express');

module.exports = function(app) {

  var router = express.Router();
  var api = app.api.dadosClimaticos.configuracoes;

  router
    .get('/:nome/valor', api.getNomeValor)
    .get('/', api.getAll)
    .post('/', api.post)
    .get('/:id', api.getId, api.getOne)
    .put('/:id', api.getId, api.put)
    .delete('/:id', api.getId, api.delete)
  ;

  app.use('/dadosClimatico/configuracoes', router);

};

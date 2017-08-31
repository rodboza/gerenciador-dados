let express    = require('express');

module.exports = function(app) {

  let router = express.Router();
  let api = app.api.dadosClimaticos.configuracoes;

  router
    .get('/:nome/valor', api.getNomeValor)
    .get('/', api.getAll)
    .post('/', api.post)
    .get('/:nome', api.getName, api.getOne)
    //.put('/:nome/:valor', api.getName, api.put)
    .put('/:nome', api.getName, api.put)
    .delete('/:nome', api.getName, api.delete)
  ;

  app.use('/dadosClimatico/configuracoes', router);

};

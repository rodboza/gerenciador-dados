var express    = require('express');

module.exports = function(app) {
  
  var router = express.Router();
  var api = app.api.dadosClimaticos.configuracao;
  
  router 
    .get('/intervalo', api.getIntervalo)
    .get('/', api.getAll)
    .get('/:id', api.getOne)
    .post('/', api.post)
    .put('/:id', api.put)
    .delete('/:id', api.delete)
  ;

  app.use('/dadosClimatico/configuracao', router);

};

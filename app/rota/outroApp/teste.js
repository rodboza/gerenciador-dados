var express    = require('express');


module.exports = function(app) {

  var router = express.Router();
  var api = app.api.outroApp.testes;

  router
    .get('/', api.getAll)
    .get('/:id', api.getOne)
    .post('/', api.post)
    .put('/:id', api.put)
    .delete('/:id', api.delete)
  ;

  app.use('/outroApp/testes', router);

};

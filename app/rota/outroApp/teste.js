let express    = require('express');


module.exports = function(app) {

  let router = express.Router();
  let api = app.api.outroApp.testes;

  router
    .get('/', api.getAll)
    .get('/:id', api.getOne)
    .post('/', api.post)
    .put('/:id', api.put)
    .delete('/:id', api.delete)
  ;

  app.use('/outroApp/testes', router);

};

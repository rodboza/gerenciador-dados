let _  = require('lodash');

module.exports = function(app) {

  let erros = {};

  erros.sendErrorsFromDB = (res, dbErrors) => {
    if (dbErrors.errors) {
      let errors = [];
      _.forIn(dbErrors.errors, error => errors.push(error.message));
      console.log(`erros: ${errors}`);
      return res.status(400).json({ errors });
    }
  }

  
  erros.sendErrorsDuplicateRecord = (res,valor) => {
      let errors = [];
      errors.push(`Erro ao incluir o registro! Valor "${valor}" duplicado`);
      return res.status(400).json({ errors });
  }

  erros.sendErrorsOrNext = (req, res, next) => {
    let bundle = res.locals.bundle;

    if(bundle.errors) {
      let errors = app.errors.parseErrors(bundle.errors);
      res.status(500).json({errors});
    } else {
      next();
    }
  }

  erros.parseErrors = (nodeRestfulErrors) => {
    let errors = [];
    _.forIn(nodeRestfulErrors, error => errors.push(error.message));
    return errors;
  }

  return erros;
};

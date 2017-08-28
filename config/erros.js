const _  = require('lodash');

module.exports = function(app) {

  var erros = {};

  erros.sendErrorsFromDB = (res, dbErrors) => {
    if (dbErrors) {
      const errors = [];
      _.forIn(dbErrors.errors, error => errors.push(error.message));
      return res.status(400).json({ errors });
    }
  }

  erros.sendErrorsOrNext = (req, res, next) => {
    const bundle = res.locals.bundle;

    if(bundle.errors) {
      var errors = app.errors.parseErrors(bundle.errors);
      res.status(500).json({errors});
    } else {
      next();
    }
  }

  erros.parseErrors = (nodeRestfulErrors) => {
    const errors = [];
    _.forIn(nodeRestfulErrors, error => errors.push(error.message));
    return errors;
  }

  return erros;
};

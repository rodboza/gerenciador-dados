const _  = require('lodash');

module.exports = function(app) {

  var erros = {};

  erros.sendErrorsFromDB = (res, dbErrors) => {
    console.log("sendErrorsFromDB");
    if (dberrosErrors) {
      const errors = [];
      _.forIn(dbErrors.errors, error => errors.push(error.message));
      return res.status(400).json({ errors });
    }
  }

  erros.sendErrorsOrNext = (req, res, next) => {
    console.log("sendErrorsOrNext");
    const bundle = res.locals.bundle;

    if(bundle.errors) {
      var errors = app.errors.parseErrors(bundle.errors);
      res.status(500).json({errors});
    } else {
      console.log("next");
      next();
    }
  }

  erros.parseErrors = (nodeRestfulErrors) => {
    console.log("parseErrors");
    const errors = [];
    _.forIn(nodeRestfulErrors, error => errors.push(error.message));
    return errors;
  }

  return erros;
};

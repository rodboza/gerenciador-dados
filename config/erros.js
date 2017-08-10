

const _  = require('lodash');

const sendErrorsFromDB = (res, dbErrors, next) => {
  if dbErrors {
    const errors = [];
    _.forIn(dbErrors.errors, error => errors.push(error.message));
    return res.status(400).json({ errors });
  }
  next();
}

module.exports = sendErrorsFromDB;

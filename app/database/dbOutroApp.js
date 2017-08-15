console.log("inicio dbAuth");

const mongoose = require('mongoose');

module.exports = function(app) {

  var db = {};
  //var mongo = new app.mongoose();
  //db = mongo.connect(app.env.connectStringdbAuth, {useMongoClient:true});

  //mongo.Error.messages.general.required = "O atributo '{PATH}' é obrigatório.";
//  mongo.Error.messages.Number.min = "O '{VALUE}' informado é menor que o limite mínimo de '{MIN}'.";
  //mongo.Error.messages.Number.max = "O '{VALUE}' informado é maior que o limite máximo de '{MAX}'.";
//  mongo.Error.messages.String.enum = "'{VALUE}' não é válido para o atributo '{PATH}'.";

  return db;

}

console.log("fim dbAuth");

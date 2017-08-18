console.log("inicio dbDadosClimaticos");

module.exports = function(app) {
  var db = {};
  var mong = new app.mongoose();
  db = mong.connect(app.env.connectString.dbClimatico, {useMongoClient:true});

  mong.Error.messages.general.required = "O atributo '{PATH}' é obrigatório.";
  mong.Error.messages.Number.min = "O '{VALUE}' informado é menor que o limite mínimo de '{MIN}'.";
  mong.Error.messages.Number.max = "O '{VALUE}' informado é maior que o limite máximo de '{MAX}'.";
  mong.Error.messages.String.enum = "'{VALUE}' não é válido para o atributo '{PATH}'.";

  return db;
}



console.log("fim dbDadosClimaticos");

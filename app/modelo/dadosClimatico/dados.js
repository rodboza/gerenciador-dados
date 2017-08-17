
module.exports = function(app){

  const dadosSchema = new app.database.dbDadosClimaticos.base.Schema({
      ocorrencia: { type: Date },
      temperatura: { type: Number },
      umidade: { type: Number },
      pressao: { type: Number}
  }) ;

  return app.database.dbDadosClimaticos.base.model('Dados', dadosSchema);
}

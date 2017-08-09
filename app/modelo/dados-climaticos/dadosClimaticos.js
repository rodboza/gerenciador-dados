
module.exports = function(app){

  const dadosClimaticosSchema = new app.mongoose.Schema({
      ocorrencia: { type: Date, required: true },
      temperatura: { type: Number },
      umidade: { type: Number },
      pressao: { type: Number}
  }) ;

  return app.database.dbDadosClimaticos.model('dadosClimaticos', dadosClimaticosSchema);

}

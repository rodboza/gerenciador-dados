
module.exports = function(app){

  const dadosColetorSchema = new app.mongoose.Schema({
      ocorrencia: { type: Date, required: true },
      temperatura: { type: Number },
      umidade: { type: Number },
      pressao: { type: Number}
  }) ;

  return app.database.dbDadosClimaticos.model('dadosColetor', dadosColetorSchema);

}

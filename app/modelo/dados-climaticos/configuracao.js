
module.exports = function(app){

  const configuracaoSchema = new app.mongoose.Schema({
      intervalo: { type: Date, required: true },
      temperaturaMin: { type: Number },
      temperaturaMax: { type: Number },
      umidadeMin: { type: Number },
      umidadeMax: { type: Number },
      pressaoMin: { type: Number},
      pressaoMax: { type: Number}
  }) ;

  return app.database.dbDadosClimaticos.model('configuracao', configuracaoSchema);

}

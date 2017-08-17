
module.exports = function(app){

  const configuracaoSchema = new app.database.dbDadosClimaticos.base.Schema({
      intervalo: { type: Number },
      temperaturaMin: { type: Number },
      temperaturaMax: { type: Number },
      umidadeMin: { type: Number },
      umidadeMax: { type: Number },
      pressaoMin: { type: Number},
      pressaoMax: { type: Number}
  }) ;

   return app.database.dbDadosClimaticos.base.model('Configuracao', configuracaoSchema);
}

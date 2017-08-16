
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

   var teste = app.restful.model('Configuracao', configuracaoSchema);
   return teste;
}

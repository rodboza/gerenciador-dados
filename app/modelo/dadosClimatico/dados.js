
module.exports = function(app){

  const dadosSchema = new app.database.dbDadosClimaticos.base.Schema({
      ocorrencia: { type: Date },
      temperatura: { type: Number },
      umidade: { type: Number },
      pressao: { type: Number}
  }) ;

  return app.restful.model('Dados', dadosSchema);
//console.log(">>>>>");
  //console.log(app.restful.model('Dados', dadosSchema).routes);
  //console.log("<<<<<");
  //console.log(app.database.dbDadosClimaticos.base.model('Dados', dadosSchema));

  return app.database.dbDadosClimaticos.base.model('Dados', dadosSchema);

}

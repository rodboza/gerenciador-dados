
module.exports = function(app){

  const configuracoesSchema = new app.database.dbDadosClimaticos.base.Schema({
      nome: { type: String },
      valor: { type: String }
  }) ;

   return app.database.dbDadosClimaticos.base.model('Configuracoes', configuracoesSchema);
}

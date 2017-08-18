
module.exports = function(app){

  const testesSchema = new app.database.dbOutroApp.base.Schema({
      valor: { type: String }
  }) ;

   return app.database.dbOutroApp.base.model('Testes', testesSchema);
}

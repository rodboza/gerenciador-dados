const restful = require('node-restful');
const mongoose = require('mongoose');

module.exports = function(app){

  const dadosColetorSchema = new mongoose.Schema({
      ocorrencia: { type: Date, required: true },
      temperatura: { type: Number },
      umidade: { type: Number },
      pressao: { type: Number}
  }) ;

  return app.database.dbDadosClimaticos.model('dadosColetor', dadosColetorSchema);

}

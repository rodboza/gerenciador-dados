

module.exports = function(app) {

  var api = {};
  configuracaoModelo = app.modelo.dadosClimatico.configuracao;

  api.getIntervalo = function(req, res, next) {

    console.log('>>>>1');



    var conf = new configuracaoModelo ({intervalo: 15,temperaturaMin: -10,temperaturaMax: 50,umidadeMin: 0,umidadeMax: 100,pressaoMin: 800, pressaoMax: 1200});
    conf.save();

    console.log(configuracaoModelo);

    configuracaoModelo.findOne({} , (err, configuracao) => {
      console.log('>>>>2');
      if (err) {
        console.log('>>>>erro');
        return app.sendErrorsFromDB(res, err);
      } else if (configuracao) {
        console.log('>>>>existe');
        const intervalo = configuracao.intervalo;
        return res.status(200).json(intervalo);
      } else {
        console.log('>>>>não existe');
        return res.sendStatus(204);
      }
    })
  }


  return api;
};

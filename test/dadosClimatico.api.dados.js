let api = require('./dadosClimatico/api.dados.spec');

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();
chai.use(chaiHttp);

let app = require('../config/server');
app.teste = {};
app.teste.server;
app.teste.port = 3001;
app.teste.url = '/dadosClimatico/dados';
app.teste.dadosEx = {  
    ocorrencia: Date.now(),
    temperatura: 40,
    umidade: 80,
    pressao: 100
};

describe('dadosClimatio.api.dados', function () {

    before((done) => {api.DoBefore (done, chai, app);});
    after((done) => {api.DoAfter (done, chai, app);});

    it('Incluir um dado na API',(done) => {api.PostOneRecord (done, chai, app);} );
    it('Fazer um GET na API ', (done) => {api.DoApiGet (done, chai, app);} );
    it('Pegar o dado mais novo', (done) => {api.GetLastRecord (done, chai, app);} );
    it('Remover um dado na API', (done) => {api.DeleteOneRecord (done, chai, app);} );

});



 
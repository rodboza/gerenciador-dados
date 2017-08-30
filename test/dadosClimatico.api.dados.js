//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();
chai.use(chaiHttp);

let dadosTester = require('./dadosClimatico/api.dados.spec');




let app = require('../config/server');
let teste = {};
teste.server;
teste.port = 3001;
teste.url = '/dadosClimatico/dados';
teste.dadosEx = {  
    ocorrencia: Date.now(),
    temperatura: 40,
    umidade: 80,
    pressao: 100
};

dadosTester.SetApp (app);
dadosTester.SetChai (chai);
dadosTester.SetTeste (teste);

describe('dadosClimatio.api.dados', function () {

    before((done) => {dadosTester.DoBefore (done);}); 
    after((done) => {dadosTester.DoAfter (done);});

    it('Incluir um dado na API',(done) => {dadosTester.PostOneRecord (done);} );
    it('Fazer um GET na API ', (done) => {dadosTester.DoGetRecords (done);} );
    it('Pegar o dado mais novo', (done) => {dadosTester.GetLastRecord (done);} );
    it('Atualizar um dado', dadosTester.PutOneRecord);
    it('Remover um dado na API', (done) => {dadosTester.DeleteOneRecord (done);} );

});



 
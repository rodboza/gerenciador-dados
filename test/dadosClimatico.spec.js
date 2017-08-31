//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();
chai.use(chaiHttp);





let serverCrt = require('./dadosClimatico/server.ctrl')
                .Setup(3001);

let dadosTst = require('./dadosClimatico/dados.ctrl');
dadosTst.Setup ( serverCrt, chai);

let configTst = require('./dadosClimatico/configuracoes.ctrl');
configTst.Setup ( serverCrt, chai);


                
before('Before', serverCrt.DoBefore ); 
after( 'After', serverCrt.DoAfter );




describe('Teste da API de Dados', () => {
    it('Incluir um dado na API', dadosTst.PostOneRecord );
    it('Fazer um GET na API ', dadosTst.GetAllRecords );
    it('Pegar o dado mais novo', dadosTst.GetLastRecord  );
    it('Atualizar um dado', dadosTst.PutOneRecord);
    it('Remover um dado na API', dadosTst.DeleteOneRecord );
});




describe('Teste da API de Configurações', () => {
    it('Incluir uma nova configuração na API', configTst.PostOneRecord );
    it('Não permitir incluir uma configuração duplicada', configTst.PostDuplicateRecord );
    it('Fazer um GET na API ', configTst.GetAllRecords );
    it('Pegar um valor pelo nome da configuração', configTst.GetValueByName  );
    it('Pegar uma configuracao pelo nome da configuração', configTst.GetRecordByName  );
    it('Atualizar uma configuração', configTst.PutOneRecord);
    it('Remover uma configuração na API', configTst.DeleteOneRecord );
});



 
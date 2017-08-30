

let dadosTester = {};

let _app = {};
let _chai = {};
let _teste = {};

dadosTester.SetApp = (app) => _app = app;
dadosTester.SetChai = (chai) => _chai = chai;
dadosTester.SetTeste = (teste) => _teste = teste;

dadosTester.DoBefore = function  (done) {
    _teste.server = _app.listen(_teste.port, function() {
        console.log(`      >>>Test is running on port ${_teste.port}.`);
        done();
    });
}

dadosTester.DoAfter = function  (done) {
    _teste.server.close();
    console.log('      >>>Test is closed!');
    done();
}

dadosTester.DoGetRecords = function  (done) {
    _chai.request(_app)
    .get(_teste.url)
    .end((err, res) => {
        res.should.be.status(200);
        res.body.should.be.a('array');
        done();
    });
}

dadosTester.PostOneRecord = function (done) {
    let dados = _teste.dadosEx;
    _chai.request(_app)
        .post(_teste.url)
        .send(dados)
        .end((err, res) => {
            res.should.be.status(201);
            res.body.should.be.a('object');
            res.body.should.have.property('temperatura').eql(dados.temperatura);            
            res.body.should.have.property('umidade').eql(dados.umidade);            
            res.body.should.have.property('pressao').eql(dados.pressao);
            Date(res.body.ocorrencia).should.eql(Date(dados.ocorrencia));
            done();            
        });            
}

dadosTester.GetLastRecord = function (done) {
    let dados = _teste.dadosEx;
    _chai.request(_app)
    .get(_teste.url+'/atual')
    .end((err, res) => {
        res.should.be.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('temperatura').eql(dados.temperatura);            
        res.body.should.have.property('umidade').eql(dados.umidade);            
        res.body.should.have.property('pressao').eql(dados.pressao);
        Date(res.body.ocorrencia).should.eql(Date(dados.ocorrencia));
        done();
    });
}

dadosTester.DeleteOneRecord  = function (done) {
    let _id;

    _chai.request(_app)
    .get(_teste.url+'/atual')
    .end((err, res) => {
        res.should.be.status(200);
        res.body.should.be.a('object');
        _id = res.body._id;

        _chai.request(_app)
        .delete(_teste.url +'/'+_id)
        .end((err, res) => {
            res.should.be.status(200);
            done();
        });

    });
} 

dadosTester.PutOneRecord = () => {

}

module.exports = dadosTester;
 

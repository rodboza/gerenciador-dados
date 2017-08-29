
var api = {};

api.DoBefore = function  (done, chai, app) {
    app.teste.server = app.listen(app.teste.port, function() {
        console.log(`      >>>Test is running on port ${app.teste.port}.`);
        done();
    });
}

api.DoAfter = function  (done, chai, app) {
    app.teste.server.close();
    console.log('      >>>Test is closed!');
    done();
}

api.DoApiGet = function  (done, chai, app) {
    chai.request(app)
    .get(app.teste.url)
    .end((err, res) => {
        res.should.be.status(200);
        res.body.should.be.a('array');
        done();
    });
}

api.PostOneRecord = function (done, chai, app) {
    let dados = app.teste.dadosEx;
    chai.request(app)
        .post(app.teste.url)
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

api.GetLastRecord = function (done, chai, app) {
    let dados = app.teste.dadosEx;
    chai.request(app)
    .get(app.teste.url+'/atual')
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

api.DeleteOneRecord  = function (done, chai, app) {
    var _id;

    chai.request(app)
    .get(app.teste.url+'/atual')
    .end((err, res) => {
        res.should.be.status(200);
        res.body.should.be.a('object');
        _id = res.body._id;

        chai.request(app)
        .delete(app.teste.url +'/'+_id)
        .end((err, res) => {
            res.should.be.status(200);
            done(err);
        });

    });

} 

module.exports = api;
 

let ConfigTst = {};

let _app = {};
let _chai = {};
let _url = {};
let _configEx = {  
    nome: 'Teste',
    valor: '40'
};

let _configExAlt = {  
    nome: 'Teste',
    valor: '10'
};


ConfigTst.Setup = ( serverCrt, chai ) => {
    _app = serverCrt.GetApp();
    _chai = chai;
    _url = serverCrt.GetUrl('/configuracoes');
    return ConfigTst;
} 

ConfigTst.PostOneRecord = (done) => {
    _chai.request(_app)
    .post( _url )
    .send(_configEx)
    .end((err, res) => {
        res.should.be.status(201);
        res.body.should.be.a('object');
        res.body.should.have.property('nome').eql(_configEx.nome);            
        res.body.should.have.property('valor').eql(_configEx.valor);            
        done();            
    });            
}
ConfigTst.PostDuplicateRecord = (done) => {
    _chai.request(_app)
    .post( _url )
    .send(_configEx)
    .end((err, res) => {
        res.should.be.status(400);
        res.body.should.be.a('object');
        done();            
    });            
}


ConfigTst.GetAllRecords = (done) => { 
    _chai.request(_app)
    .get( _url )
    .end((err, res) => {
        res.should.be.status(200);
        res.body.should.be.a('array');
        done();
    });
}

ConfigTst.GetValueByName = (done) => { 
    _chai.request(_app)
    .get( _url + '/' + _configEx.nome + '/valor' )
    .end((err, res) => {
        res.should.be.status(200);
        res.body.should.be.eql(_configEx.valor);
        done();
    });
}

ConfigTst.GetRecordByName = (done) => { 
    _chai.request(_app)
    .get( _url + '/' + _configEx.nome )
    .end((err, res) => {
        res.should.be.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('nome').eql(_configEx.nome);            
        res.body.should.have.property('valor').eql(_configEx.valor);            
        done();
    });
}

ConfigTst.PutOneRecord = (done) => {
    _chai.request(_app)
    .put( _url + '/' + _configEx.nome )
    .send(_configExAlt)
    .end((err, res) => {
        res.should.be.status(201);

        _chai.request(_app)
        .get( _url + '/' + _configEx.nome + '/valor' )
        .end((err, res) => {
            res.should.be.status(200);
            res.body.should.be.eql(_configExAlt.valor);
            done();
        });
    });
}


ConfigTst.DeleteOneRecord = (done) => { 
    let nome;

    _chai.request(_app)
    .get( _url + '/' + _configEx.nome )
    .end((err, res) => {
        res.should.be.status(200);
        res.body.should.be.a('object');
        nome = res.body.nome;

        _chai.request(_app)
        .delete( _url + '/' +nome )
        .end((err, res) => {
            res.should.be.status(200);
            done();
        });

    });
} 


module.exports = ConfigTst;
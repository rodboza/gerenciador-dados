

let DadosTst = {};

let _app = {};
let _chai = {};
let _url = {};
let _dadosEx = {  
    ocorrencia: Date.now(),
    temperatura: 40,
    umidade: 80,
    pressao: 100
};

let _dadosExAlt = {  
    ocorrencia: Date.now(),
    temperatura: 10,
    umidade: 40,
    pressao: 50
};


DadosTst.Setup = ( serverCrt, chai ) => {
    _app = serverCrt.GetApp();
    _chai = chai;
    _url = serverCrt.GetUrl('/dados');
    return DadosTst;
} 


DadosTst.PostOneRecord = (done) => { 
    _chai.request(_app)
        .post( _url )
        .send(_dadosEx)
        .end((err, res) => {
            res.should.be.status(201);
            res.body.should.be.a('object');
            res.body.should.have.property('temperatura').eql(_dadosEx.temperatura);            
            res.body.should.have.property('umidade').eql(_dadosEx.umidade);            
            res.body.should.have.property('pressao').eql(_dadosEx.pressao);
            Date(res.body.ocorrencia).should.eql(Date(_dadosEx.ocorrencia));
            done();            
        });            
}

DadosTst.GetAllRecords = (done) => { 
    _chai.request(_app)
    .get( _url )
    .end((err, res) => {
        res.should.be.status(200);
        res.body.should.be.a('array');
        done();
    });
}


DadosTst.GetLastRecord = (done) => { 
    _chai.request(_app)
    .get( _url + '/atual' )
    .end((err, res) => {
        res.should.be.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('temperatura').eql(_dadosEx.temperatura);            
        res.body.should.have.property('umidade').eql(_dadosEx.umidade);            
        res.body.should.have.property('pressao').eql(_dadosEx.pressao);
        Date(res.body.ocorrencia).should.eql(Date(_dadosEx.ocorrencia));
        done();
    });
}


DadosTst.PutOneRecord = (done) => {
    let _id;
    _chai.request(_app)
    .get( _url + '/atual' )
    .end((err, res) => {
        res.should.be.status(200);
        res.body.should.be.a('object');
        _id = res.body._id;

        _chai.request(_app)
        .put( _url + '/' +_id )
        .send(_dadosExAlt)
        .end((err, res) => {
            res.should.be.status(201);

            _chai.request(_app)
            .get( _url + '/' +_id )
            .end((err, res) => {
                res.should.be.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('temperatura').eql(_dadosExAlt.temperatura);            
                res.body.should.have.property('umidade').eql(_dadosExAlt.umidade);            
                res.body.should.have.property('pressao').eql(_dadosExAlt.pressao);
                Date(res.body.ocorrencia).should.eql(Date(_dadosExAlt.ocorrencia));
                done();
            });
        });

    });

}

DadosTst.DeleteOneRecord = (done) => { 
    let _id;

    _chai.request(_app)
    .get( _url + '/atual' )
    .end((err, res) => {
        res.should.be.status(200);
        res.body.should.be.a('object');
        _id = res.body._id;

        _chai.request(_app)
        .delete( _url + '/' +_id )
        .end((err, res) => {
            res.should.be.status(200);
            done();
        });

    });
} 



module.exports = DadosTst;
 

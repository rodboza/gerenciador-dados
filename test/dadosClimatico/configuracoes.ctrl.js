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
    console.log(_url)
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



module.exports = ConfigTst;
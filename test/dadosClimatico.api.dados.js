let app = require('../config/server');
let api = require('./dadosClimatico/api.dados.spec');
const port = process.env.PORT || 3001;
let server ;

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();
chai.use(chaiHttp);

describe('dadosClimatio.api.dados', function () {

    before(function(done){
        server = app.listen(port, function() {
            console.log(`   >>>Test is running on port ${port}.`);
            done();
        });
    });

    after(function(done){
        server.close();
        console.log('   >>>Test is closed!');
        done();
    });

      
    //it('Fazer um GET na API ', api.DoApiGet () );
    it('Incluir um dado na API',api.PostOneRecord);
    it('Remover um dado na API', api.DeleteOneRecord);
    it('Pegar o dado mais novo', api.GetLastRecord)

    it('test', function  (done) {
        chai.request(app)
            .get('/dadosClimatico/dados')
            .end((err, res) => {
                console.log(res.status);
                res.should.be.status(200);
                done();
            });
    });

});



 
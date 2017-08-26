
const assert = require('assert');



var api = {};

api.DoApiGet = function  (app, http, done) {
    http.request()
        .get('/dadosClimatico/dados')
        .expect(200,done);
}

api.teste2 = function (app, http, done) {
    assert.equal(-1,-1);
}

api.teste3 = function (app, http, done) {
    assert.equal(-1,-1);
}


module.exports = api;
 


const assert = require('assert');

var api = {};

api.teste1 = function  () {
    console.log("teste");
    assert.equal(-1,-1);
}

api.teste2 = function () {
    assert.equal(-1,-1);
}


module.exports = api;
 
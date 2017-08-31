
let ServerCrt = {};

let server = {};
let _port = {};
let _app = require('../../config/server');
let _url = '/dadosClimatico';

ServerCrt.Setup = (port) => {
    _port = port;
    return ServerCrt;
} 

ServerCrt.DoBefore = (done) => { 
    server = _app.listen(_port, function() {
        console.log(`Inicializando o servidor na porta ${_port}.`);
        done();
    });
}

ServerCrt.DoAfter = (done) => { 
    server.close();
    console.log('Finalizando o servidor!');
    done();
}

ServerCrt.GetUrl =  (recurso) => {
    return _url+recurso;
}

ServerCrt.GetApp = () => {
    return _app;
}

module.exports = ServerCrt;

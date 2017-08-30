console.log("inicio server");

let bodyParser = require('body-parser');
let express = require('express');
let allowCors = require('./cors');
let queryParser = require('express-query-int');
let consign = require('consign');


let app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(allowCors);
app.use(queryParser());

app.env = require('./.env');
app.mongoose = require('mongoose').Mongoose;
app.erros = require ('./erros') (app) ;

consign({cwd: 'app'})
  .include('database')
  .then('modelo')
  .then('api')
  .then('rota')
  .into(app);

module.exports = app;

console.log("fim server");

console.log("inicio server");

const bodyParser = require('body-parser');
const express = require('express');
const allowCors = require('./cors');
const queryParser = require('express-query-int');
const consign = require('consign');


const app = express();

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

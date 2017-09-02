var express = require('express');

var runItemtypes = require('./routes/itemtypes');

var pg = require('pg');

var cn = {
    user: 'postgres',
    password: '1qw23er4',
    host: 'localhost',
    port: 5432,
    database: 'dnd5ecg'
};
var app = express();
var bodyParser = require('body-parser');
var pool = new pg.Pool(cn);
app.use(bodyParser.json());         
app.use(bodyParser.urlencoded({ extended: true })); app.use(bodyParser.urlencoded({ extended: true })); 

var async = require('async');

runItemtypes(app, pg, async, pool);

app.listen(5000);

module.exports = app;
var express = require('express');

var runArmors = require('./routes/armors');
var runCore = require('./routes/core');
var runEquipment = require('./routes/equipment');
var runItemtypes = require('./routes/itemtypes');
var runPicklists = require('./routes/picklists');
var runWeapons = require('./routes/weapons');

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

runArmors(app, pg, async, pool);
runCore(app, pg, async, pool);
runEquipment(app, pg, async, pool);
runItemtypes(app, pg, async, pool);
runPicklists(app, pg, async, pool);
runWeapons(app, pg, async, pool);

app.listen(5000);

module.exports = app;
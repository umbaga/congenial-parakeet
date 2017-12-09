var express = require('express');

var itemtypes = require('./modules/itemtypeDefinition');
var modules = require('./modules/manageObjects');

var runArmors = require('./routes/armors');
var runBackgrounds = require('./routes/backgrounds');
var runCore = require('./routes/core');
var runEquipment = require('./routes/equipment');
var runItemtypes = require('./routes/itemtypes');
var runPacks = require('./routes/packs');
var runPicklists = require('./routes/picklists');
var runProficiency = require('./routes/proficiency');
var runRaces = require('./routes/races');
var runSpells = require('./routes/spell');
var runSpellLists = require('./routes/spell_list');
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
app.use(bodyParser.json({limit: '5mb', extended: true}));
app.use(bodyParser.urlencoded({limit: '5mb', extended: true}));
var pool = new pg.Pool(cn);
app.use(bodyParser.json());         
app.use(bodyParser.urlencoded({ extended: true })); app.use(bodyParser.urlencoded({ extended: true })); 

var async = require('async');

runArmors(app, pg, async, pool, itemtypes, modules);
runBackgrounds(app, pg, async, pool, itemtypes, modules);
runCore(app, pg, async, pool, itemtypes, modules);
runEquipment(app, pg, async, pool, itemtypes, modules);
runItemtypes(app, pg, async, pool, itemtypes, modules);
runPacks(app, pg, async, pool, itemtypes, modules);
runPicklists(app, pg, async, pool, itemtypes, modules);
runProficiency(app, pg, async, pool, itemtypes, modules);
runRaces(app, pg, async, pool, itemtypes, modules);
runSpells(app, pg, async, pool, itemtypes, modules);
runSpellLists(app, pg, async, pool, itemtypes, modules);
runWeapons(app, pg, async, pool, itemtypes, modules);

app.listen(5000);

module.exports = app;
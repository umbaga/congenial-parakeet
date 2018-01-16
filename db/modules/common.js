var express = require('express');

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

var sql, results, vals, delimitArray, first;

module.exports = {
    testFunction: function (res, cb) {
        pool.connect(function(err, client, done) {
            if (err) {
                done();
                console.error(err);
                return res.status(500).json({ success: false, data: err});
            }
            async.waterfall([
                function init(callback) {
                    var resObj = {id: 2};
                    callback(null, resObj);
                },
                function insertItemTable(resObj, callback) {
                    sql = 'INSERT INTO x_test_table';
                    sql += ' ("id")';
                    sql += ' VALUES ($1)';
                    vals = [2];
                    results = [];
                    var query = client.query(new pg.Query(sql, vals));
                    query.on('row', function(row) {
                        results.push(row);
                    });
                    query.on('end', function() {
                        done();
                        return callback(null, resObj);
                    });
                }
            ], function(error, result) {
                if (error) {
                    console.error(error);
                }
                return cb(result);
            });
        });
    },
    charts: {
        del: function(res, cb) {
            
        },
        insert: function(res, cb) {
            
        },
        update: function(res, cb) {
            
        }
    },
    dice: {
        del: function(res, cb) {
            
        },
        insert: function(res, cb) {
            
        },
        update: function(res, cb) {
            
        }
    },
    mechanics: {
        del: function(res, cb) {
            
        },
        insert: function(res, cb) {
            
        },
        update: function(res, cb) {
            
        }
    },
    proficiencyGroups: {
        del: function(res, cb) {
            
        },
        insert: function(res, cb) {
            
        },
        update: function(res, cb) {
            
        }
    }
};
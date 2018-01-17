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
app.use(bodyParser.urlencoded({ extended: true }));

var async = require('async');

var sql, results, vals, delimitArray, first;

var common = {
    testFunction: function (res, cb) {
        pool.connect(function(err, client, done) {
            if (err) {
                done();
                console.error(err);
                return res.status(500).json({ success: false, data: err});
            }
            async.waterfall([
                function init(callback) {
                    var resObj = {};
                    callback(null, resObj);
                },
                function insertItemTable(resObj, callback) {
                    var testVal = common.parameterArray.resetValues(5);
                    var testDice = [
                        {dieCount: 1, dieType: 4, modifier: 0, multiplier: 1, divisor: 1},
                        {dieCount: 1, dieType: 20, modifier: 0, multiplier: 1, divisor: 4}
                    ];
                    var testDiceReturn = common.dice.getDiceObjects(testDice, function(test) {
                        console.log('########################');
                        console.log(test);
                    });
                    sql = 'SELECT * FROM x_test_table';
                    vals = [];
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
    datatypes: {
        dice: {
            compare: function(a, b) {
                if (a.dieCount == b.dieCount
                   && a.dieType == b.dieType
                   && a.modifier == b.modifier
                   && a.multiplier == b.multiplier
                   && a.divisor == b.divisor) {
                    return true;
                }
                return false;
            },
            getId: function(arr, obj) {
                for (var q = 0; q < arr.length; q++) {
                    if (common.datatypes.dice.compare(arr[q], obj)) {
                        return arr[q].id;
                    }
                }
                return 0;
            },
            getObject: function(arr, obj) {
                var retVal = obj;
                retVal.id = common.datatypes.dice.getId(arr, obj);
                return retVal;
            }
        }
    },
    parameterArray: {
        incrementValues: function(arr) {
            var retVal = [];
            for (var e = 0; e < arr.length; e++) {
                retVal.push(arr[e] + arr.length);
            }
            return retVal;
        },
        resetValues: function(count, startingValue) {
            var finalStartingValue = 0;
            var retVal = [];
            if (startingValue != null && startingValue != undefined) {
                finalStartingValue = startingValue;
            }
            for (var e = finalStartingValue + 1; e <= count + finalStartingValue; e++) {
                retVal.push(e);
            }
            return retVal;
        },
        sql: function(arr, startingValue) {
            var finalStartingValue = 0;
            if (startingValue != null && startingValue != undefined) {
                finalStartingValue = startingValue;
            }
            var needsComma = false;
            var retVal = '(';
            if (finalStartingValue != 0) {
                for (var e = 1; e <= finalStartingValue; e++) {
                    if (needsComma) {
                        retVal += ', ';
                    }
                    retVal += '$' + e.toString();
                    needsComma = true;
                }
            }
            for (var e = 0; e < arr.length; e++) {
                if (needsComma) {
                    retVal += ', ';
                }
                retVal += '$' + arr[e];
                needsComma = true;
            }
            retVal += ')';
            return retVal;
        }
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
        getDiceObjects: function(diceArr, cb) {
            pool.connect(function(err, client, done) {
                if (err) {
                    done();
                    console.error(err);
                    return res.status(500).json({ success: false, data: err});
                }
                async.waterfall([
                    function init(callback) {
                        var resObj = diceArr;
                        callback(null, resObj);
                    },
                    function insertDiceTable(resObj, callback) {
                        vals = [];
                        results = [];
                        needsComma = false;
                        sql = 'with vals as (';
                        for (var e = 0; e < resObj.length; e++) {
                            if (needsComma) {
                                sql += ' UNION ';
                            }
                            var baseVal = e * 5;                            
                            sql += 'select $' + (baseVal + 1).toString() + ' :: bigint as "dieCount"';
                            sql += ', $' + (baseVal + 2).toString() + ' :: bigint as "dieType"';
                            sql += ', $' + (baseVal + 3).toString() + ' :: bigint as "modifier"';
                            sql += ', $' + (baseVal + 4).toString() + ' :: bigint as "multiplier"';
                            sql += ', $' + (baseVal + 5).toString() + ' :: bigint as "divisor"';
                            vals.push(resObj[e].dieCount);
                            vals.push(resObj[e].dieType);
                            vals.push(resObj[e].modifier);
                            vals.push(resObj[e].multiplier);
                            vals.push(resObj[e].divisor);
                            needsComma = true;
                        }
                        sql += ' )';
                        sql += ' insert into adm_core_dice ("dieCount", "dieType", "modifier", "multiplier", "divisor")';
                        sql += ' select v."dieCount", v."dieType", v."modifier", v."multiplier", v."divisor"';
                        sql += ' from vals as v';
                        sql += ' where not exists (';
                        sql += ' select * from adm_core_dice as t';
                        sql += ' where t."dieCount" = v."dieCount"';
                        sql += ' and t."dieType" = v."dieType"';
                        sql += ' and t."modifier" = v."modifier"';
                        sql += ' and t."multiplier" = v."multiplier"';
                        sql += ' and t."divisor" = v."divisor")';
                        sql += ' returning id AS "diceId";';
                        var query = client.query(new pg.Query(sql, vals));
                        query.on('row', function(row) {
                            results.push(row);
                        });
                        query.on('end', function() {
                            done();
                            return callback(null, resObj);
                        });
                    },
                    function assignDiceIds(resObj, callback) {
                        vals = [];
                        results = [];
                        needsComma = false;
                        sql = 'SELECT dice.id, dice."dieCount", dice."dieType", dice.modifier, dice.multiplier, dice.divisor';
                        sql += ' FROM adm_core_dice dice';
                        for (var e = 0; e < resObj.length; e++) {
                            if (needsComma) {
                                sql += ' OR ';
                            } else {
                                sql += ' WHERE ';
                            }
                            var baseVal = e * 5;
                            sql += '(dice."dieCount" = $' + (baseVal + 1).toString() + ' AND dice."dieType" = $' + (baseVal + 2).toString();
                            sql += ' AND dice.modifier = $' + (baseVal + 3).toString() + ' AND dice.multiplier = $' + (baseVal + 4).toString();
                            sql += ' AND dice.divisor = $' + (baseVal + 5).toString() + ')';
                            needsComma = true;
                            vals.push(resObj[e].dieCount);
                            vals.push(resObj[e].dieType);
                            vals.push(resObj[e].modifier);
                            vals.push(resObj[e].multiplier);
                            vals.push(resObj[e].divisor);
                        }
                        var query = client.query(new pg.Query(sql, vals));
                        query.on('row', function(row) {
                            results.push(row);
                        });
                        query.on('end', function() {
                            done();
                            for (var w = 0; w < resObj.length; w++) {
                                resObj[w] = common.datatypes.dice.getObject(results, resObj[w]);
                            }
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

module.exports = common;

module.exports = function(app, pg, async, pool, itemtypes, common) {
    app.delete('/api/adm/feat/:id', function(req, res) {
        var results = [];
        pool.connect(function(err, client, done) {
            if (err) {
                done();
                console.error(err);
                return res.status(500).json({ success: false, data: err});
            }
            async.waterfall([
                function init(callback) {
                    callback(null, req);
                },
                function deleteItemTable(req, callback) {
                    sql = 'DELETE FROM adm_core_item';
                    sql += ' WHERE "id" = $1';
                    vals = [req.params.id];
                    var query = client.query(new pg.Query(sql, vals));
                    query.on('row', function(row) {
                        results.push(row);
                    });
                    query.on('end', function() {
                        done();
                        var resObj = [req.params.id];
                        return callback(null, resObj);
                    });
                },
                function deleteDescription(resObj, callback) {
                    sql = 'DELETE FROM adm_core_description';
                    sql += ' WHERE "itemId" = $1';
                    vals = [req.params.id];
                    var query = client.query(new pg.Query(sql, vals));
                    var results = [];
                    query.on('row', function(row) {
                        results.push(row);
                    });
                        query.on('end', function() {
                        done();
                        return callback(null, resObj);
                    });
                }/*,
                function deleteMechanicLinkTable(resObj, callback) {
                    sql = 'DELETE FROM adm_link_mechanic';
                    sql += ' WHERE "referenceId" = $1';
                    vals = [req.params.id];
                    var query = client.query(new pg.Query(sql, vals));
                    var results = [];
                    query.on('row', function(row) {
                        results.push(row);
                    });
                        query.on('end', function() {
                        done();
                        return callback(null, resObj);
                    });
                },
                function deletePrerequisiteLinkTable(resObj, callback) {
                    sql = 'DELETE FROM adm_link_prerequisite';
                    sql += ' WHERE "referenceId" = $1';
                    vals = [req.params.id];
                    var query = client.query(new pg.Query(sql, vals));
                    var results = [];
                    query.on('row', function(row) {
                        results.push(row);
                    });
                        query.on('end', function() {
                        done();
                        return callback(null, resObj);
                    });
                }*/
            ], function(error, result) {
                if (error) {
                    console.error(error);
                }
                return res.json(result);
            });
        });
    });
    app.put('/api/adm/feat/:id', function(req, res) {
        var results = [];
        pool.connect(function(err, client, done) {
            if (err) {
                done();
                console.error(err);
                return res.status(500).json({ success: false, data: err});
            }
            async.waterfall([
                function init(callback) {
                    callback(null, req);
                },
                function updateItemTable(req, callback) {
                    sql = 'UPDATE adm_core_item';
                    sql += ' SET "itemName" = $1';
                    sql += ' WHERE id = $2'
                    vals = [req.body.feat.name, req.params.id];
                    var query = client.query(new pg.Query(sql, vals));
                    query.on('row', function(row) {
                        results.push(row);
                    });
                    query.on('end', function() {
                        done();
                        var resObj = req.body;
                        return callback(null, resObj);
                    });
                },
                function updateEquipmentTable(resObj, callback) {
                    sql = 'UPDATE adm_def_equipment';
                    sql += ' SET weight = $1';
                    sql += ', cost = $2';
                    sql += ' WHERE "equipmentId" = $3';
                    vals = [resObj.feat.weight, resObj.feat.cost, req.params.id];
                    var query = client.query(new pg.Query(sql, vals));
                    var results = [];
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
                return res.json(result);
            });
        });
    });
    app.post('/api/adm/feat', function(req, res) {
        var results = [];
        pool.connect(function(err, client, done) {
            if (err) {
                done();
                console.error(err);
                return res.status(500).json({ success: false, data: err});
            }
            async.waterfall([
                function init(callback) {
                    callback(null, req);
                },
                function insertItemTable(req, callback) {
                    var vals, results, sql, needsComma, first, second, third, fourth, fifth, sixth, seventh;
                    sql = 'INSERT INTO adm_core_item';
                    sql += ' ("itemName", "itemTypeId", "resourceId")';
                    sql += ' VALUES ($1, $2, $3) returning id AS "equipmentId";';
                    vals = [
                        req.body.feat.name,
                        itemtypes.TYPE.FEAT,
                        req.body.feat.resource.id
                    ];
                    results = [];
                    var query = client.query(new pg.Query(sql, vals));
                    query.on('row', function(row) {
                        results.push(row);
                    });
                    query.on('end', function() {
                        done();
                        var resObj = req.body;
                        
                        resObj.feat.hasMechanics = false;
                        resObj.feat.hasMechanicTitles = false;
                        if (resObj.feat.mechanics && resObj.feat.mechanics.length != 0) {
                            resObj.feat.hasMechanics = true;
                            for (var e = 0; e < resObj.feat.mechanics.length; e++) {
                                if (resObj.feat.mechanics[e].title && resObj.feat.mechanics[e].title.length != 0) {
                                    resObj.feat.hasMechanicTitles = true;
                                }
                            }
                        }
                        resObj.feat.hasSpecialMechanicText = false;
                        if (resObj.feat.mechanics && resObj.feat.mechanics && resObj.feat.mechanics.length != 0) {
                            for (var e = 0; e < resObj.feat.mechanics.length; e++) {
                                resObj.feat.mechanics[e].specialTextId = 0;
                                if (resObj.feat.mechanics[e].specialText && resObj.feat.mechanics[e].specialText.length != 0) {
                                    resObj.feat.hasSpecialMechanicText = true;
                                }
                            }
                        }
                        resObj.feat.hasPrerequisites = false;
                        if (resObj.feat.prerequisites && resObj.feat.prerequisites.length != 0) {
                            resObj.feat.hasPrerequisites = true;
                        }
                        resObj.feat.id = results[0].equipmentId;
                        return callback(null, resObj);
                    });
                },
                function testCommonFunction(resObj, callback) {
                    //common.testFunction(resObj, function(testObj) {
                        //resObj.testing = testObj;
                        return callback(null, resObj);
                    //});
                }
            ], function(error, result) {
                if (error) {
                    console.error(error);
                }
                return res.json(result);
            });
        });
    });
    app.get('/api/adm/feats', function(req, res) {
        var results = [];
        var vals = [];
        pool.connect(function(err, client, done) {
            if (err) {
                done();
                console.error(err);
                return res.status(500).json({ success: false, data: err});
            }
            
            sql = 'SELECT i."itemName" AS name, i.id';
            sql += ', get_base_mechanics(i.id) AS "mechanics"';
            sql += ', get_proficiency_groups(i.id) AS "proficiencyGroups"';
            sql += ', \'[]\' as "prerequisites"';
            sql += ' FROM adm_core_item i';
            sql += ' WHERE i."itemTypeId" = $1';
            sql += ' ORDER BY i."itemName"';
            vals = [itemtypes.TYPE.FEAT];
            var query = client.query(new pg.Query(sql, vals));
            query.on('row', function(row) {
                results.push(row);
            });
            query.on('end', function() {
                done();
                return res.json(results);
            });
        });
    });
};
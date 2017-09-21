
module.exports = function(app, pg, async, pool) {
    app.delete('/api/adm/equipment/armor/:id', function(req, res) {
        var results = [];
        pool.connect(function(err, client, done) {
            if (err) {
                done();
                console.error(err);
                return res.status(500).json({ success: false, data: err});
            }
            async.waterfall([
                function init(cb) {
                    cb(null, req);
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
                        var tmp = [req.params.id];
                        return callback(null, tmp);
                    });
                },
                function deleteEquipmentTable(resObj, callback) {
                    sql = 'DELETE FROM adm_def_equipment';
                    sql += ' WHERE "equipmentId" = $1';
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
                function deleteArmorTable(resObj, callback) {
                    sql = 'DELETE FROM adm_def_equipment_armor';
                    sql += ' WHERE "equipmentId" = $1';
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
                }
            ], function(error, result) {
                if (error) {
                    console.error(error);
                }
                return res.json(result);
            });
        });
    });
    app.put('/api/adm/equipment/armor/:id', function(req, res) {
        var results = [];
        pool.connect(function(err, client, done) {
            if (err) {
                done();
                console.error(err);
                return res.status(500).json({ success: false, data: err});
            }
            async.waterfall([
                function init(cb) {
                    cb(null, req);
                },
                function updateItemTable(req, callback) {
                    sql = 'UPDATE adm_core_item';
                    sql += ' SET "itemName" = $1';
                    sql += ' WHERE id = $2'
                    vals = [req.body.armor.name, req.params.id];
                    var query = client.query(new pg.Query(sql, vals));
                    query.on('row', function(row) {
                        results.push(row);
                    });
                    query.on('end', function() {
                        done();
                        var tmp = req.body;
                        return callback(null, tmp);
                    });
                },
                function updateEquipmentTable(resObj, callback) {
                    sql = 'UPDATE adm_def_equipment';
                    sql += ' SET weight = $1';
                    sql += ', cost = $2';
                    sql += ' WHERE "equipmentId" = $3';
                    vals = [resObj.armor.weight, resObj.armor.cost, req.params.id];
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
                function updateArmorTable(resObj, callback) {
                    sql = 'UPDATE adm_def_equipment_armor';
                    sql += ' SET "proficiencyId" = $1';
                    sql += ', "baseArmorClass" = $2';
                    sql += ', "applyDexModifier" = $3';
                    sql += ', "hasMaxDexModifier" = $4';
                    sql += ', "maxDexModifier" = $5';
                    sql += ', "minimumStrength" = $6';
                    sql += ', "stealthDisadvantage" = $7';
                    sql += ', "isCumulative" = $8';
                    sql += ' WHERE "equipmentId" = $9';
                    vals = [resObj.armor.proficiency.id, resObj.armor.baseArmorClass, resObj.armor.applyDexModifier, resObj.armor.hasMaxDexModifier, resObj.armor.maxDexModifier, resObj.armor.minimumStrength, resObj.armor.stealthDisadvantage, resObj.armor.isCumulative, resObj.armor.id];
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
    app.post('/api/adm/equipment/armor', function(req, res) {
        var results = [];
        pool.connect(function(err, client, done) {
            if (err) {
                done();
                console.error(err);
                return res.status(500).json({ success: false, data: err});
            }
            async.waterfall([
                function init(cb) {
                    cb(null, req);
                },
                function insertItem(req, callback) {
                    sql = 'INSERT INTO adm_core_item';
                    sql += ' ("itemName", "itemTypeId")';
                    sql += ' VALUES ($1, 88) returning id AS "equipmentId";';
                    vals = [req.body.armor.name];
                    var query = client.query(new pg.Query(sql, vals));
                    query.on('row', function(row) {
                        results.push(row);
                    });
                    query.on('end', function() {
                        done();
                        var tmp = req.body;
                        tmp.armor.id = results[0].equipmentId;
                        return callback(null, tmp);
                    });
                },
                function insertEquipment(resObj, callback) {
                    sql = 'INSERT INTO adm_def_equipment';
                    sql += ' ("equipmentId", "weight", "cost", "categoryId")';
                    sql += ' VALUES ($1, $2, $3, 178);';
                    vals = [resObj.armor.id, resObj.armor.weight, resObj.armor.cost];
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
                function insertArmor(resObj, callback) {
                    sql = 'INSERT INTO adm_def_equipment_armor';
                    sql += ' ("equipmentId", "proficiencyId", "baseArmorClass", "applyDexModifier", "hasMaxDexModifier"';
                    sql += ', "maxDexModifier", "minimumStrength", "stealthDisadvantage", "isCumulative")';
                    sql += ' VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)';
                    vals = [resObj.armor.id, resObj.armor.proficiency.id, resObj.armor.baseArmorClass, resObj.armor.applyDexModifier, resObj.armor.hasMaxDexModifier, resObj.armor.maxDexModifier, resObj.armor.minimumStrength, resObj.armor.stealthDisadvantage, resObj.armor.isCumulative];
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
    app.get('/api/adm/equipment/armors', function(req, res) {
        var results = [];
        pool.connect(function(err, client, done) {
            if (err) {
                done();
                console.error(err);
                return res.status(500).json({ success: false, data: err});
            }
            
            sql = 'SELECT i."itemName" AS name, i.id, eq.cost, eq.weight, arm."stealthDisadvantage", arm."minimumStrength"';
            sql += ', arm."baseArmorClass", arm."applyDexModifier", arm."hasMaxDexModifier", arm."maxDexModifier", arm."isCumulative"';
            //sql += ',json_build_object(\'baseArmorClass\', arm."baseArmorClass", \'applyDexModifier\', arm."applyDexModifier", \'hasMaxDexModifier\', arm."hasMaxDexModifier", \'maxDexModifier\', arm."maxDexModifier", \'isCumulative\', arm."isCumulative") AS "armorClass"';
            sql += ', json_build_object(\'name\', armprof."itemName", \'id\', armprof."id") AS "proficiency"';
            sql += ', json_build_object(\'name\', rsrc."itemName", \'id\', rsrc."id") AS "resource"';
            sql += ' FROM adm_core_item i';
            sql += ' INNER JOIN adm_def_equipment eq ON eq."equipmentId" = i.id';
            sql += ' INNER JOIN adm_def_equipment_armor arm ON arm."equipmentId" = i.id';
            sql += ' INNER JOIN adm_core_item armprof ON armprof.id = arm."proficiencyId"';
            sql += ' INNER JOIN adm_core_item rsrc ON rsrc.id = i."resourceId"';
            sql += ' ORDER BY arm."baseArmorClass"';
            var query = client.query(new pg.Query(sql));
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
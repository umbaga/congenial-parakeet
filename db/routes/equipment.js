
module.exports = function(app, pg, async, pool) {
    app.delete('/api/adm/equipment/:id', function(req, res) {
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
                function deleteUnitCountTable(resObj, callback) {
                    sql = 'DELETE FROM adm_def_equipment_count_unit';
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
    app.put('/api/adm/equipment/:id', function(req, res) {
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
                    vals = [req.body.equipment.name, req.params.id];
                    var query = client.query(new pg.Query(sql, vals));
                    query.on('row', function(row) {
                        results.push(row);
                    });
                    query.on('end', function() {
                        done();
                        var tmp = req.body;
                        tmp.equipment.needsCountUnit = false;
                        if (tmp.equipment.count || tmp.equipment.unit) {
                            tmp.equipment.needsCountUnit = true;
                        }
                        return callback(null, tmp);
                    });
                },
                function updateEquipmentTable(resObj, callback) {
                    sql = 'UPDATE adm_def_equipment';
                    sql += ' SET weight = $1';
                    sql += ', cost = $2';
                    sql += ', "categoryId" = $3';
                    sql += ' WHERE "equipmentId" = $4';
                    vals = [resObj.equipment.weight, resObj.equipment.cost, resObj.equipment.category.id, req.params.id];
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
                function checkForCountUnit(resObj, callback) {
                    sql = 'SELECT * FROM adm_def_equipment_count_unit WHERE "equipmentId" = $1';
                    vals = [req.params.id];
                    var query = client.query(new pg.Query(sql, vals));
                    var results = [];
                    query.on('row', function(row) {
                        results.push(row);
                    });
                    query.on('end', function() {
                        done();
                        var countUnitExists = false;
                        if (results.length > 0) {
                            countUnitExists = true;
                        }
                        return callback(null, resObj, countUnitExists);
                    });
                },
                function addEditCountUnit(resObj, countUnitExists, callback) {
                    sql = '';
                    if (resObj.equipment.needsCountUnit && countUnitExists) {
                        //update
                        sql = 'UPDATE adm_def_equipment_count_unit';
                        sql += ' SET "itemCount" = $1';
                        sql += ' WHERE "unitName" = $2';
                        vals = [resObj.equipment.count, resObj.equipment.unit];
                    } else if (resObj.equipment.needsSpecial && !countUnitExists) {
                        //insert
                        sql = 'INSERT INTO adm_def_equipment_count_unit';
                        sql += ' ("specialDescription", "weaponId", "equipmentId")';
                        sql += ' VALUES ($1, $2)';
                        vals = [resObj.equipment.count, resObj.equipment.unit, resObj.equipment.id];
                    } else {
                        //delete
                        sql = 'DELETE FROM adm_def_equipment_count_unit';
                        sql += ' WHERE "equipmentId" = $1';
                        vals = [resObj.equipment.id];
                    }
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
    app.post('/api/adm/equipment', function(req, res) {
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
                    sql = 'INSERT INTO adm_core_item';
                    sql += ' ("itemName", "itemTypeId")';
                    sql += ' VALUES ($1, 90) returning id AS "equipmentId";';
                    vals = [req.body.equipment.name];
                    var query = client.query(new pg.Query(sql, vals));
                    query.on('row', function(row) {
                        results.push(row);
                    });
                    query.on('end', function() {
                        done();
                        var tmp = req.body;
                        tmp.equipment.needsCountUnit = false;
                        if (tmp.equipment.count || tmp.equipment.unit) {
                            tmp.equipment.needsCountUnit = true;
                        }
                        tmp.equipment.id = results[0].equipmentId;
                        return callback(null, tmp);
                    });
                },
                function insertEquipmentTable(resObj, callback) {
                    sql = 'INSERT INTO adm_def_equipment';
                    sql += ' ("equipmentId", "weight", "cost", "categoryId")';
                    sql += ' VALUES ($1, $2, $3, $4);';
                    vals = [resObj.equipment.id, resObj.equipment.weight, resObj.equipment.cost, resObj.equipment.category.id];
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
                function insertCountUnitTable(resObj, callback) {
                    if (resObj.equipment.needsCountUnit) {
                        sql = 'INSERT INTO adm_def_equipment_count_unit';
                        sql += ' ("equipmentId", "itemCount", "unitName")';
                        sql += ' VALUES ($1, $2, $3);';
                        vals = [resObj.equipment.id, resObj.equipment.count, resObj.equipment.unit];
                        var query = client.query(new pg.Query(sql, vals));
                        var results = [];
                        query.on('row', function(row) {
                            results.push(row);
                        });
                        query.on('end', function() {
                            done();
                            return callback(null, resObj);
                        });
                    } else {
                        return callback(null, resObj);
                    }
                }
            ], function(error, result) {
                if (error) {
                    console.error(error);
                }
                return res.json(result);
            });
        });
    });
    app.get('/api/adm/equipments', function(req, res) {
        var results = [];
        pool.connect(function(err, client, done) {
            if (err) {
                done();
                console.error(err);
                return res.status(500).json({ success: false, data: err});
            }
            
            sql = 'SELECT i."itemName" AS name, i.id';
            sql += ', equip.cost, equip.weight';
            sql += ', json_build_object(\'name\', cat."itemName", \'id\', cat."id") AS "category"';
            sql += ', json_build_object(\'name\', rsrc."itemName", \'id\', rsrc."id") AS "resource"';
            sql += ', case when cntunit."itemCount" IS NULL then 1 else cntunit."itemCount" end AS "count"';
            sql += ', case when cntunit."unitName" IS NULL then \'\' else cntunit."unitName" end AS "unit"';
            sql += ' FROM adm_core_item i';
            sql += ' INNER JOIN adm_def_equipment equip ON equip."equipmentId" = i.id';
            sql += ' INNER JOIN adm_core_item cat ON cat.id = equip."categoryId"';
            sql += ' INNER JOIN adm_core_item rsrc ON rsrc.id = i."resourceId"';
            sql += ' LEFT OUTER JOIN adm_def_equipment_count_unit cntunit ON cntunit."equipmentId" = i.id';
            sql += ' WHERE equip."categoryId" NOT IN (97, 178, 175)';
            sql += ' ORDER BY i."itemName"';
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
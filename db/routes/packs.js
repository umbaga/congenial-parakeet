
module.exports = function(app, pg, async, pool) {
    app.delete('/api/adm/equipment/pack/:id', function(req, res) {
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
                    sql = 'DELETE FROM adm_link_equipment';
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
                }
            ], function(error, result) {
                if (error) {
                    console.error(error);
                }
                return res.json(result);
            });
        });
    });
    app.put('/api/adm/equipment/pack/:id', function(req, res) {
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
                    sql += ', "resourceId" = $2';
                    sql += ' WHERE id = $3';
                    vals = [req.body.pack.name, req.body.pack.resource.id, req.params.id];
                    var query = client.query(new pg.Query(sql, vals));
                    query.on('row', function(row) {
                        results.push(row);
                    });
                    query.on('end', function() {
                        done();
                        var tmp = req.body;
                        tmp.pack.needsCountUnit = false;
                        if (tmp.pack.count || tmp.pack.unit) {
                            tmp.pack.needsCountUnit = true;
                        }
                        return callback(null, tmp);
                    });
                },
                function updateEquipmentTable(resObj, callback) {
                    sql = 'UPDATE adm_def_equipment';
                    sql += ' SET weight = $1';
                    sql += ', cost = $2';
                    sql += ' WHERE "equipmentId" = $3';
                    vals = [resObj.pack.weight, resObj.pack.cost, req.params.id];
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
                function deleteUnneededAssignedItems(resObj, callback) {
                    sql = 'DELETE FROM adm_link_equipment';
                    sql += ' WHERE "referenceId" = $1';
                    if (resObj.pack.assignedEquipment.length != 0) {
                        sql += ' AND "equipmentId" NOT IN (';
                    }
                    vals = [req.params.id];
                    for (var k = 0; k < resObj.pack.assignedEquipment.length; k++) {
                        var newParam = k + 2;
                        sql += '$' + newParam.toString();
                        if (k < resObj.pack.assignedEquipment.length - 1) {
                            sql += ',';
                        }
                        vals.push(resObj.pack.assignedEquipment[k].id);
                    }
                    if (resObj.pack.assignedEquipment.length != 0) {
                        sql += ');';
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
                },
                function checkNeededAssignedItems(resObj, callback) {
                    var theseIdsExist = [];
                    sql = 'SELECT * FROM adm_link_equipment';
                    sql += ' WHERE "referenceId" = $1';
                    if (resObj.pack.assignedEquipment.length != 0) {
                        sql += ' AND "equipmentId" IN (';
                    }
                    vals = [req.params.id];
                    for (var p = 0; p < resObj.pack.assignedEquipment.length; p++) {
                        var newParam = p + 2;
                        sql += '$' + newParam.toString();
                        if (p < resObj.pack.assignedEquipment.length - 1) {
                            sql += ',';
                        }
                        vals.push(resObj.pack.assignedEquipment[p].id);
                    }
                    if (resObj.pack.assignedEquipment.length != 0) {
                        sql += ');';
                    }
                    var query = client.query(new pg.Query(sql, vals));
                    var results = [];
                    query.on('row', function(row) {
                        results.push(row);
                    });
                    query.on('end', function() {
                        done();
                        for (var w = 0; w < results.length; w++) {
                            theseIdsExist.push(parseInt(results[w].equipmentId));
                        }
                        return callback(null, resObj, theseIdsExist);
                    });
                },
                function addNeededAssignedItems(resObj, theseIdsExist, callback) {
                    if (resObj.pack.assignedEquipment.length != 0) {
                        sql = 'INSERT INTO adm_link_equipment';
                        sql += ' ("referenceId", "equipmentId", "assignedCount")';
                        sql += ' VALUES ';
                        var firstParam = 1;
                        var secondParam = 2;
                        var thirdParam = 3;
                        var paramSql = '';
                        vals = [];
                        for (var g = 0; g < resObj.pack.assignedEquipment.length; g++) {
                            //cycle through assigned
                            var assignThis = true;
                            for (var f = 0; f < theseIdsExist.length; f++) {
                                if (resObj.pack.assignedEquipment[g].id == theseIdsExist[f]) {
                                    assignThis = false;
                                }
                            }
                            if (assignThis) {
                                paramSql += '($' + firstParam.toString() + ', $' + secondParam.toString() + ', $' + thirdParam.toString() + '),';
                                firstParam = firstParam + 3;
                                secondParam = secondParam + 3;
                                thirdParam = thirdParam + 3;
                                vals.push(resObj.pack.id, resObj.pack.assignedEquipment[g].id, resObj.pack.assignedEquipment[g].assignedCount);
                            }
                        }
                        paramSql = paramSql.replace(/,\s*$/, "");
                        sql += paramSql;
                        if (paramSql.length != 0) {
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
                    } else {
                        return callback(null, resObj);
                    }
                },
                function updateAssignedItems(resObj, callback) {
                    vals = [];
                    sql = 'UPDATE adm_link_equipment as t';
                    sql += ' SET "assignedCount" = c."assignedCount"';
                    sql += ' FROM (VALUES';
                    var firstParam = 1;
                    var secondParam = 2;
                    var thirdParam = 3;
                    for(var x = 0; x < resObj.pack.assignedEquipment.length; x++) {
                        sql += '($' + firstParam.toString() + '::bigint, $' + secondParam.toString() + '::bigint, $' + thirdParam.toString() + '::bigint)';
                        vals.push(parseInt(resObj.pack.id), resObj.pack.assignedEquipment[x].id, resObj.pack.assignedEquipment[x].assignedCount);
                        if (x < resObj.pack.assignedEquipment.length - 1) {
                            sql += ',';
                        }
                        firstParam = firstParam + 3;
                        secondParam = secondParam + 3;
                        thirdParam = thirdParam + 3;
                    }
                    sql += ') AS c("referenceId", "equipmentId", "assignedCount")';
                    sql += ' WHERE c."referenceId" = t."referenceId"';
                    sql += ' AND c."equipmentId" = t."equipmentId"';
                    if (resObj.pack.assignedEquipment.length != 0) {
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
    app.post('/api/adm/equipment/pack', function(req, res) {
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
                    sql += ' ("itemName", "resourceId", "itemTypeId")';
                    sql += ' VALUES ($1, $2, 90) returning id AS "equipmentId";';
                    vals = [req.body.pack.name, req.body.pack.resource.id];
                    var query = client.query(new pg.Query(sql, vals));
                    query.on('row', function(row) {
                        results.push(row);
                    });
                    query.on('end', function() {
                        done();
                        var tmp = req.body;
                        tmp.pack.needsCountUnit = false;
                        if (tmp.pack.count || tmp.pack.unit) {
                            tmp.pack.needsCountUnit = true;
                        }
                        tmp.pack.id = results[0].equipmentId;
                        return callback(null, tmp);
                    });
                },
                function insertEquipmentTable(resObj, callback) {
                    sql = 'INSERT INTO adm_def_equipment';
                    sql += ' ("equipmentId", "weight", "cost", "categoryId")';
                    sql += ' VALUES ($1, $2, $3, 175);';
                    vals = [resObj.pack.id, resObj.pack.weight, resObj.pack.cost];
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
                function insertAssignedItemsTable(resObj, callback) {
                    if (resObj.pack.assignedEquipment.length != 0) {
                        sql = 'INSERT INTO adm_link_equipment';
                        sql += ' ("referenceId", "equipmentId", "assignedCount")';
                        sql += ' VALUES ';
                        vals = [];
                        for (var t = 0; t < resObj.pack.assignedEquipment.length; t++) {
                            var first = (t * 3) + 1;
                            var second = first + 1;
                            var third = first + 2;
                            sql += '($' + first.toString() + ', $' + second.toString() + ', $' + third.toString() + ')';
                            if (t < resObj.pack.assignedEquipment.length - 1) {
                                sql += ', ';
                            } else {
                                sql += ';';
                            }
                            vals.push(resObj.pack.id);
                            vals.push(resObj.pack.assignedEquipment[t].id);
                            vals.push(resObj.pack.assignedEquipment[t].assignedCount);
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
    app.get('/api/adm/equipment/packs', function(req, res) {
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
            sql += ', case when cntunit."itemCount" IS NULL then 0 else cntunit."itemCount" end AS "count"';
            sql += ', case when cntunit."unitName" IS NULL then \'\' else cntunit."unitName" end AS "unit"';
            sql += ', case when count(asseq) = 0 then \'[]\' else json_agg((SELECT x FROM ';
            sql += ' (SELECT asseq.id, asseqtbl.cost, asseqtbl.weight, asseq."itemName" as "name", pack."assignedCount"';
            sql += ', case when asscntunit."itemCount" IS NULL then 1 else asscntunit."itemCount" end AS "count"';
            sql += ', case when asscntunit."unitName" IS NULL then \'\' else asscntunit."unitName" end AS "unit") x)) end AS "assignedEquipment"';
            sql += 'FROM adm_core_item i';
            sql += ' INNER JOIN adm_def_equipment equip ON equip."equipmentId" = i.id';
            sql += ' INNER JOIN adm_core_item cat ON cat.id = equip."categoryId"';
            sql += ' INNER JOIN adm_core_item rsrc ON rsrc.id = i."resourceId"';
            sql += ' LEFT OUTER JOIN adm_def_equipment_count_unit cntunit ON cntunit."equipmentId" = i.id';
            sql += ' LEFT OUTER JOIN adm_link_equipment pack ON pack."referenceId" = i.id';
            sql += ' LEFT OUTER JOIN adm_core_item asseq ON asseq.id = pack."equipmentId"';
            sql += ' LEFT OUTER JOIN adm_def_equipment asseqtbl ON asseqtbl."equipmentId" = asseq.id';
            sql += ' LEFT OUTER JOIN adm_def_equipment_count_unit asscntunit ON asscntunit."equipmentId" = asseq.id';
            sql += ' WHERE equip."categoryId" = 175';
            sql += ' GROUP BY i."itemName", i.id, equip.cost, equip.weight, cat."itemName", cat."id"';
            sql += ' , rsrc."itemName", rsrc."id", cntunit."itemCount", cntunit."unitName"';
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
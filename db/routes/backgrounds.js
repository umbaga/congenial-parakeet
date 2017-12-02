module.exports = function(app, pg, async, pool, itemtypes, modules) {
    app.delete('/api/adm/background/:id', function(req, res) {
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
                function deleteDescriptions(resObj, callback) {
                    sql = 'DELETE FROM adm_core_description';
                    sql += ' WHERE "itemId" = $1';
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
                function deleteChartEntries(resObj, callback) {
                    sql = 'DELETE FROM adm_def_chart_dice_entry';
                    sql += ' WHERE "chartId" IN (SELECT "chartId" FROM adm_link_chart WHERE "referenceId" = $1)';
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
                function deleteCharts(resObj, callback) {
                    sql = 'DELETE FROM adm_core_chart';
                    sql += ' WHERE "id" IN (SELECT "chartId" FROM adm_link_chart WHERE "referenceId" = $1)';
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
                function deleteChartLinks(resObj, callback) {
                    sql = 'DELETE FROM adm_link_chart';
                    sql += ' WHERE "referenceId" = $1';
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
                function deleteEquipmentLinks(resObj, callback) {
                    sql = 'DELETE FROM adm_link_equipment';
                    sql += ' WHERE "referenceId" = $1';
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
                function deleteProficiencyGroups(resObj, callback) {
                    sql = 'DELETE FROM adm_def_item_group';
                    sql += ' WHERE "itemGroupId" IN (SELECT "itemGroupId" FROM adm_link_item_group WHERE "referenceId" = $1)';
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
                function deleteProficiencyGroupLinks(resObj, callback) {
                    sql = 'DELETE FROM adm_link_item_group';
                    sql += ' WHERE "referenceId" = $1';
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
                function deleteBackgroundTable(resObj, callback) {
                    sql = 'DELETE FROM adm_def_background';
                    sql += ' WHERE "backgroundId" = $1';
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
    app.put('/api/adm/background/:id', function(req, res) {
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
                    sql += ' SET "itemName" = $2';
                    sql += ' WHERE id = $1';
                    vals = [req.params.id, req.body.background.name];
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
                function updateDescription(resObj, callback) {
                    sql = 'UPDATE adm_core_item';
                    sql += ' SET "description" = $2';
                    sql += ' WHERE "itemId" = $1';
                    vals = [resObj.background.id, resObj.background.description];
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
                function updateBackgroundTable(resObj, callback) {
                    sql = 'UPDATE adm_def_background';
                    sql += ' SET "startingGold" = $2';
                    sql += ' WHERE "backgroundId" = $1';
                    vals = [resObj.background.id, resObj.background.startingGold];
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
                function updateFeatureName(resObj, callback) {
                    sql = 'UPDATE adm_core_item';
                    sql += ' SET "itemName" = $2';
                    sql += ' WHERE id = $1';
                    vals = [resObj.background.feature.id, resObj.background.feature.name];
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
                function updateFeatureDescription(resObj, callback) {
                    sql = 'UPDATE adm_core_item';
                    sql += ' SET "description" = $2';
                    sql += ' WHERE "itemId" = $1';
                    vals = [resObj.background.feature.id, resObj.background.feature.description];
                    var query = client.query(new pg.Query(sql, vals));
                    query.on('row', function(row) {
                        results.push(row);
                    });
                    query.on('end', function() {
                        done();
                        var tmp = req.body;
                        return callback(null, tmp);
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
    app.post('/api/adm/background', function(req, res) {
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
                    results = [];
                    vals = [];
                    sql = 'INSERT INTO adm_core_item';
                    sql += ' ("itemName", "resourceId", "itemTypeId")';
                    sql += ' VALUES ($1, $2, $3) returning id AS "backgroundId";';
                    vals = [req.body.background.name, req.body.background.resource.id, itemtypes.TYPE.BACKGROUND];
                    var query = client.query(new pg.Query(sql, vals));
                    query.on('row', function(row) {
                        results.push(row);
                    });
                    query.on('end', function() {
                        done();
                        var tmp = req.body;
                        tmp.background.id = results[0].backgroundId;
                        return callback(null, tmp);
                    });
                },
                function insertFeatureItem(resObj, callback) {
                    results = [];
                    vals = [];
                    sql = 'INSERT INTO adm_core_item';
                    sql += ' ("itemName", "resourceId", "itemTypeId")';
                    sql += ' VALUES ($1, $2, $3) returning id AS "featureId";';
                    vals = [resObj.background.feature.name, resObj.background.resource.id, itemtypes.TYPE.FEATURE];
                    var query = client.query(new pg.Query(sql, vals));
                    query.on('row', function(row) {
                        results.push(row);
                    });
                    query.on('end', function() {
                        done();
                        resObj.background.feature.id = results[0].featureId;
                        return callback(null, resObj);
                    });
                },
                function insertSuggestedCharacteristicsDescription(resObj, callback) {
                    if (resObj.background.suggestedCharacteristics && resObj.background.suggestedCharacteristics.length != 0) {
                        results = [];
                        vals = [];
                        sql = 'INSERT INTO adm_core_description';
                        sql += ' ("itemId", "description", "descriptionTypeId")';
                        sql += ' VALUES ($1, $2, $3)';
                        vals = [resObj.background.id, resObj.background.suggestedCharacteristics, itemtypes.DESCRIPTION.SUGGESTED_CHARACTERISTICS];
                        var query = client.query(new pg.Query(sql, vals));
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
                },
                function insertProficiencyGroupItems(resObj, callback) {
                    results = [];
                    vals = [];
                    if (resObj.background.proficiencyGroups && resObj.background.proficiencyGroups.length != 0) {
                        sql = 'INSERT INTO adm_core_item';
                        sql += ' ("itemName", "resourceId", "itemTypeId")';
                        sql += ' VALUES ';
                        var first = 1;
                        var second = 2;
                        var third = 3;
                        var tmpItemName = '';
                        for (var e = 0; e < resObj.background.proficiencyGroups.length; e++) {
                            if (e != 0) {
                                sql += ', ';
                            }
                            sql += '($' + first.toString() + ', $' + second.toString() + ', ' + third.toString() + ')';
                            first = first + 3;
                            second = second + 3;
                            third = third + 3;
                            tmpItemName = resObj.background.name + ': ' + resObj.background.proficiencyGroups[e].mechanic.name + ' - ' + e.toString();
                            vals.push(tmpItemName);
                            vals.push(resObj.background.resource.id);
                            vals.push(itemtypes.TYPE.ITEM_GROUP);
                        }
                        sql += ' returning id AS "itemGroupId";';
                        var query = client.query(new pg.Query(sql, vals));
                        query.on('row', function(row) {
                            results.push(row);
                        });
                        query.on('end', function() {
                            done();
                            for (var t = 0; t < results.length; t++) {
                                resObj.background.proficiencyGroups[t].id = results[t].itemGroupId;
                            }
                            return callback(null, resObj);
                        });
                    } else {
                        return callback(null, resObj);
                    }
                },
                function insertBackgroundDescription(resObj, callback) {
                    results = [];
                    vals = [];
                    if (resObj.background.description && resObj.background.description.length != 0) {
                        sql = 'INSERT INTO adm_core_description';
                        sql += '("itemId", "description")';
                        sql += ' VALUES ($1, $2)';
                        vals = [resObj.background.id, resObj.background.description];
                        var query = client.query(new pg.Query(sql, vals));
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
                },
                function insertFeatureDescription(resObj, callback) {
                    results = [];
                    vals = [];
                    if (resObj.background.feature.description && resObj.background.feature.description.length != 0) {
                        sql = 'INSERT INTO adm_core_description';
                        sql += '("itemId", "description")';
                        sql += ' VALUES ($1, $2)';
                        vals = [resObj.background.feature.id, resObj.background.feature.description];
                        var query = client.query(new pg.Query(sql, vals));
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
                },
                function insertBackground(resObj, callback) {
                    results = [];
                    vals = [];
                    sql = 'INSERT INTO adm_def_background';
                    sql += ' ("backgroundId", "startingGold", "featureId")';
                    sql += ' VALUES ($1, $2, $3)';
                    vals = [resObj.background.id, resObj.background.startingGold, resObj.background.feature.id];
                    var query = client.query(new pg.Query(sql, vals));
                    query.on('row', function(row) {
                        results.push(row);
                    });
                    query.on('end', function() {
                        done();
                        return callback(null, resObj);
                    });
                },
                function insertEqupmentLink(resObj, callback) {
                    results = [];
                    vals = [];
                    if (resObj.background.assignedEquipment && resObj.background.assignedEquipment.length != 0) {
                        sql = 'INSERT INTO adm_link_equipment';
                        sql += ' ("referenceId", "equipmentId", "assignedCount")';
                        sql += ' VALUES ';
                        var first = 1;
                        var second = 2;
                        var third = 3;
                        for (var e = 0; e < resObj.background.assignedEquipment.length; e++) {
                            sql += '($' + first.toString() + ', $' + second.toString() + ', $' + third.toString() + ')';
                            if (e < resObj.background.assignedEquipment.length - 1) {
                                sql += ', ';
                            }
                            first = first + 3;
                            second = second + 3;
                            third = third + 3;
                            vals.push(resObj.background.id);
                            vals.push(resObj.background.assignedEquipment[e].id);
                            vals.push(resObj.background.assignedEquipment[e].assignedCount);
                        }
                        sql += ';';
                        var query = client.query(new pg.Query(sql, vals));
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
                },
                function assignExistentDiceId(resObj, callback) {
                    results = [];
                    vals = [];
                    if (resObj.background.charts && resObj.background.charts.length != 0) {
                        sql = 'SELECT dice.*';
                        sql += ' FROM adm_core_dice dice';
                        var first = 1;
                        var second = 2;
                        for (var e = 0; e < resObj.background.charts.length; e++) {
                            sql += (e == 0) ? ' WHERE' : ' OR';
                            sql += ' (dice."dieCount" = $' + first.toString();
                            sql += ' AND dice."dieType" = $' + second.toString() + ')';
                            vals.push(resObj.background.charts[e].dieRoll.dieCount);
                            vals.push(resObj.background.charts[e].dieRoll.dieType);
                            first = first + 2;
                            second = second + 2;
                        }
                        var query = client.query(new pg.Query(sql, vals));
                        query.on('row', function(row) {
                            results.push(row);
                        });
                        query.on('end', function() {
                            done();
                            for (var i = 0; i < results.length; i++) {
                                for (var j = 0; j < resObj.background.charts.length; j++) {
                                    if (resObj.background.charts[j].dieRoll.dieCount == results[i].dieCount &&
                                       resObj.background.charts[j].dieRoll.dieType == results[i].dieType) {
                                        resObj.background.charts[j].dieRoll.id = results[i].id;
                                    }
                                }
                            }
                            return callback(null, resObj);
                        });
                    } else {
                        return callback(null, resObj);
                    }
                    
                },
                function insertCharts(resObj, callback) {
                    results = [];
                    vals = [];
                    if (resObj.background.charts && resObj.background.charts.length != 0) {
                        sql = 'INSERT INTO adm_core_chart';
                        sql += ' ("title")';
                        sql += ' VALUES';
                        var first = 1;
                        for (var w = 0; w < resObj.background.charts.length; w ++) {
                            sql += '($' + first.toString() + ')';
                            if (w < resObj.background.charts.length - 1) {
                                sql += ', ';
                            }
                            vals.push(resObj.background.charts[w].title);
                            first = first + 1;
                        }
                        sql += ' returning id AS "chartId", "title"';
                        var query = client.query(new pg.Query(sql, vals));
                        query.on('row', function(row) {
                            results.push(row);
                        });
                        query.on('end', function() {
                            done();
                            for (var i = 0; i < results.length; i++) {
                                for (var j = 0; j < resObj.background.charts.length; j++) {
                                    if (results[i].title == resObj.background.charts[j].title) {
                                        resObj.background.charts[j].id = results[i].chartId;
                                    }
                                }
                            }
                            return callback(null, resObj);
                        });
                    } else {
                        return callback(null, resObj);
                    }
                },
                function insertChartDice(resObj, callback) {
                    results = [];
                    vals = [];
                    if (resObj.background.charts && resObj.background.charts.length != 0) {
                        sql = 'INSERT INTO adm_def_chart_dice';
                        sql += ' ("chartId", "diceId")';
                        sql += ' VALUES ';
                        first = 1;
                        second = 2;
                        for (var e = 0; e < resObj.background.charts.length; e++) {
                            if (e != 0) {
                                sql += ', ';
                            }
                            sql += '($' + first.toString() + ', $' + second.toString() + ')';
                            first = first + 2;
                            second = second + 2;
                            vals.push(resObj.background.charts[e].id);
                            vals.push(resObj.background.charts[e].dieRoll.id);
                        }
                        var query = client.query(new pg.Query(sql, vals));
                        query.on('row', function(row) {
                            results.push(row);
                        });
                        query.on('end', function() {
                            done();
                            for (var i = 0; i < results.length; i++) {
                                for (var j = 0; j < resObj.background.charts.length; j++) {
                                    if (results[i].title == resObj.background.charts[j].title) {
                                        resObj.background.charts[j].id = results[i].chartId;
                                    }
                                }
                            }
                            return callback(null, resObj);
                        });
                    } else {
                        return callback(null, resObj);
                    }
                },
                function insertChartEntries(resObj, callback) {
                    results = [];
                    vals = [];
                    if (resObj.background.charts && resObj.background.charts.length != 0) {
                        sql = 'INSERT INTO adm_def_chart_dice_entry';
                        sql += ' ("chartId", "minimum", "maximum", "description")';
                        sql += ' VALUES';
                        var first = 1;
                        var second = 2;
                        var third = 3;
                        var fourth = 4;
                        var addComma = false;
                        for (var i = 0; i < resObj.background.charts.length; i++) {
                            for (var j = 0; j < resObj.background.charts[i].entries.length; j++) {
                                if (addComma) {
                                    sql += ', ';
                                }
                                sql += ' ($' + first.toString() + ', $' + second.toString() + ', $' + third.toString() + ', $' + fourth.toString() + ')';
                                vals.push(resObj.background.charts[i].id);
                                vals.push(resObj.background.charts[i].entries[j].minimum);
                                vals.push(resObj.background.charts[i].entries[j].minimum);
                                vals.push(resObj.background.charts[i].entries[j].description);
                                first = first + 4;
                                second = second + 4;
                                third = third + 4;
                                fourth = fourth + 4;
                                addComma = true;
                            }
                        }
                        var query = client.query(new pg.Query(sql, vals));
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
                },
                function insertChartLink(resObj, callback) {
                    results = [];
                    vals = [];
                    if (resObj.background.charts && resObj.background.charts.length != 0) {
                        sql = 'INSERT INTO adm_link_chart';
                        sql += ' ("referenceId", "chartId", "orderIndex")';
                        sql += ' VALUES ';
                        var first = 1;
                        var second = 2;
                        var third = 3;
                        for (var e = 0; e < resObj.background.charts.length; e++) {
                            if (e != 0) {
                                sql += ', ';
                            }
                            sql += '($' + first.toString() + ', $' + second.toString() + ', $' + third.toString() + ')';
                            first = first + 3;
                            second = second + 3;
                            third = third + 3;
                            vals.push(resObj.background.id);
                            vals.push(resObj.background.charts[e].id);
                            vals.push(resObj.background.charts[e].orderIndex);
                        }
                        var query = client.query(new pg.Query(sql, vals));
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
                },
                function insertChartDescriptions(resObj, callback) {
                    return callback(null, resObj);
                },
                function insertProficiencyGroups(resObj, callback) {
                    results = [];
                    vals = [];
                    if (resObj.background.proficiencyGroups && resObj.background.proficiencyGroups.length != 0) {
                        sql = 'INSERT INTO adm_def_item_group';
                        sql += ' ("itemGroupId", "mechanicTypeId", "selectCount")';
                        sql += ' VALUES';
                        var first = 1;
                        var second = 2;
                        var third = 3;
                        for (var i = 0; i < resObj.background.proficiencyGroups.length; i++) {
                            sql += ' ($' + first.toString() + ', $' + second.toString() + ', $' + third.toString() + ')';
                            if (i < resObj.background.proficiencyGroups.length - 1) {
                                sql += ', ';
                            }
                            vals.push(resObj.background.proficiencyGroups[i].id);
                            vals.push(resObj.background.proficiencyGroups[i].mechanic.id);
                            vals.push(resObj.background.proficiencyGroups[i].selectCount);
                            first = first + 3;
                            second = second + 3;
                            third = third + 3;
                        }
                        var query = client.query(new pg.Query(sql, vals));
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
                },
                function insertProficiencies(resObj, callback) {
                    results = [];
                    vals = [];
                    if (resObj.background.proficiencyGroups && resObj.background.proficiencyGroups.length != 0) {
                        sql = 'INSERT INTO adm_link_item_group_assignment';
                        sql += ' ("itemGroupId", "itemId")';
                        sql += ' VALUES';
                        var first = 1;
                        var second = 2;
                        var addComma = false;
                        for (var i = 0; i < resObj.background.proficiencyGroups.length; i++) {
                            if (resObj.background.proficiencyGroups[i].proficiencies.length != 0) {
                                for (var j = 0; j < resObj.background.proficiencyGroups[i].proficiencies.length; j++) {
                                    if (addComma) {
                                        sql += ', ';
                                    }
                                    sql += ' ($' + first.toString() + ', $' + second.toString() + ')';
                                    vals.push(resObj.background.proficiencyGroups[i].id);
                                    vals.push(resObj.background.proficiencyGroups[i].proficiencies[j].id);
                                    first = first + 2;
                                    second = second + 2;
                                    addComma = true;
                                }
                            } else {
                                if (addComma) {
                                    sql += ', ';
                                }
                                sql += ' ($' + first.toString() + ', $' + second.toString() + ')';
                                vals.push(resObj.background.proficiencyGroups[i].id);
                                vals.push(resObj.background.proficiencyGroups[i].category.id);
                                first = first + 2;
                                second = second + 2;
                                addComma = true;
                            }
                        }
                        var query = client.query(new pg.Query(sql, vals));
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
                },
                function insertProficiencyGroupLinks(resObj, callback) {
                    results = [];
                    vals = [];
                    if (resObj.background.proficiencyGroups && resObj.background.proficiencyGroups.length != 0) {
                        sql = 'INSERT INTO adm_link_item_group';
                        sql += ' ("referenceId", "itemGroupId")';
                        sql += ' VALUES';
                        var first = 1;
                        var second = 2;
                        for (var e = 0; e < resObj.background.proficiencyGroups.length; e++) {
                            sql += ' ($' + first.toString() + ', $' + second.toString() + ')';
                            if (e < resObj.background.proficiencyGroups.length - 1) {
                                sql += ', ';
                            }
                            vals.push(resObj.background.id);
                            vals.push(resObj.background.proficiencyGroups[e].id);
                            first = first + 2;
                            second = second + 2;
                        }
                        var query = client.query(new pg.Query(sql, vals));
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
    app.get('/api/adm/backgrounds', function(req, res) {
        var results = [];
        var vals = [];
        pool.connect(function(err, client, done) {
            if (err) {
                done();
                console.error(err);
                return res.status(500).json({ success: false, data: err});
            }
            sql = 'SELECT i.id, i."itemName" as name';
            sql += ', bg."startingGold"';
            sql += ', description.description';
            sql += ', suggchardesc.description AS "suggestedCharacteristics"';
            sql += ', json_build_object(';
            sql += '    \'id\', rsrc."id"';
            sql += '    , \'name\', rsrc."itemName"';
            sql += ') AS "resource"';
            sql += ', json_build_object(';
            sql += '    \'name\', feature."itemName"';
            sql += '    , \'id\', feature."id"';
            sql += '    , \'description\', featuredesc.description';
            sql += ') AS "feature"';
            sql += ', case when count(eq) = 0 then \'[]\' else json_agg(';
            sql += '    (';
            sql += '        SELECT x FROM (';
            sql += '            SELECT eqi.id, eq.cost, eq.weight, eqi."itemName" as "name"';
            sql += '            , bglnkeq."assignedCount"';
            sql += '            , case when cntunit."itemCount" IS NULL then 1 else cntunit."itemCount" end AS "count"';
            sql += '            , case when cntunit."unitName" IS NULL then \'\' else cntunit."unitName" end AS "unit"';
            sql += '        ) x';
            sql += '    )';
            sql += ') end AS "assignedEquipment"';
            sql += ', (';
            sql += '    SELECT construct_chart_object_arrays(i.id)';
            sql += ') AS charts';
            sql += ', (';
            sql += '    SELECT r.proficiencies FROM (';
            sql += '        SELECT json_agg(proficiency_row) AS proficiencies';
            sql += '        , d.id FROM adm_core_item d ';
            sql += '        INNER JOIN adm_link_item_group dc ON (dc."referenceId" = d.id) ';
            sql += '        INNER JOIN (';
            sql += '            SELECT  c.id, c."itemName" AS name';
            sql += '            , json_build_object(';
            sql += '                \'id\', CASE WHEN profcat.id IS NULL THEN catcat.id ELSE profcat.id END';
            sql += '                , \'name\', CASE WHEN profcat."itemName" IS NULL THEN catcat."itemName" ELSE profcat."itemName" END';
            sql += '                , \'parentId\', CASE WHEN profcat."itemName" IS NULL THEN catcatdef."parentId" ELSE profcatdef."parentId" END';
            sql += '                , \'isTool\', CASE WHEN profcat."itemName" IS NULL THEN CASE WHEN catcatdef."parentId"::int <> 0 THEN true ELSE false END ELSE CASE WHEN profcatdef."parentId"::int <> 0 THEN true ELSE false END END';
            sql += '            ) AS category';
            sql += '            , pgrp."selectCount"';
            sql += '            , json_agg(';
            sql += '                json_build_object(';
            sql += '                    \'id\', prof."id", \'name\', prof."itemName"';
            sql += '                )';
            sql += '            ) AS proficiencies';
            sql += '            , json_build_object(';
            sql += '                \'id\', mech."id", \'name\', mech."itemName"';
            sql += '            ) AS "mechanic" ';
            sql += '            FROM adm_core_item c ';
            sql += '            INNER JOIN adm_link_item_group bgcht ON bgcht."itemGroupId" = c.id ';
            sql += '            INNER JOIN adm_def_item_group pgrp ON pgrp."itemGroupId" = bgcht."itemGroupId" ';
            sql += '            INNER JOIN adm_core_item mech ON mech.id = pgrp."mechanicTypeId" ';
            sql += '            INNER JOIN adm_link_item_group_assignment cm ON (';
            sql += '                cm."itemGroupId" = c.id';
            sql += '            ) ';
            sql += '            INNER JOIN adm_core_item prof ON (';
            sql += '                prof.id = cm."itemId"';
            sql += '            ) ';
            sql += '            LEFT OUTER JOIN adm_def_proficiency profdef ON profdef."proficiencyId" = prof.id AND mech.id IN ($1, $2) ';
            sql += '            LEFT OUTER JOIN adm_core_item profcat ON profcat.id = profdef."categoryId" ';
            sql += '            LEFT OUTER JOIN adm_def_proficiency_category profcatdef ON profcatdef."proficiencyCategoryId" = profcat.id ';
            sql += '            LEFT OUTER JOIN adm_core_item catcat ON catcat.id = cm."itemId" AND mech."id" = $3 ';
            sql += '            LEFT OUTER JOIN adm_def_proficiency_category catcatdef ON catcatdef."proficiencyCategoryId" = catcat.id ';
            sql += '            GROUP BY c.id';
            sql += '            , mech.id';
            sql += '            , pgrp."selectCount"';
            sql += '            , profcat.id, profcat."itemName"';
            sql += '            , catcat.id, catcat."itemName"';
            sql += '            , profcatdef."parentId"';
            sql += '            , catcatdef."parentId"';
            sql += '        ) proficiency_row ON (';
            sql += '            proficiency_row.id = dc."itemGroupId"';
            sql += '        ) ';
            sql += '        GROUP BY d.id';
            sql += '    ) r(proficiencies, id) ';
            sql += '    WHERE id = i.id';
            sql += ') AS "proficiencyGroups"';
            sql += ' FROM adm_core_item i';
            sql += '	INNER JOIN adm_def_background bg ON bg."backgroundId" = i.id';
            sql += '	INNER JOIN adm_core_item feature ON feature.id = bg."featureId"';
            sql += '	INNER JOIN adm_core_description featuredesc ON featuredesc."itemId" = bg."featureId"';
            sql += '	LEFT OUTER JOIN adm_link_equipment bglnkeq ON bglnkeq."referenceId" = i.id';
            sql += '	LEFT OUTER JOIN adm_core_item eqi ON eqi.id = bglnkeq."equipmentId"';
            sql += '	LEFT OUTER JOIN adm_def_equipment eq ON eq."equipmentId" = eqi.id';
            sql += '	LEFT OUTER JOIN adm_def_equipment_count_unit cntunit ON cntunit."equipmentId" = eqi.id';
            sql += '	LEFT OUTER JOIN adm_core_description description ON (description."itemId" = i.id AND description."descriptionTypeId" = $4)';
            sql += '	LEFT OUTER JOIN adm_core_description suggchardesc ON (suggchardesc."itemId" = i.id AND suggchardesc."descriptionTypeId" = $5)';
            sql += '	INNER JOIN adm_core_item rsrc ON rsrc.id = i."resourceId"';
            sql += ' GROUP BY i."itemName", i.id';
            sql += ', rsrc.id, rsrc."itemName"';
            sql += ', bg."startingGold"';
            sql += ', feature."itemName", feature."id"';
            sql += ', featuredesc.description';
            sql += ', description.description';
            sql += ', suggchardesc.description';
            sql += ' ORDER BY i."itemName"';
            vals = [
                itemtypes.SELECTION_MECHANIC.ASSIGNMENT, 
                itemtypes.SELECTION_MECHANIC.SELECT_FROM.LIST, 
                itemtypes.SELECTION_MECHANIC.SELECT_FROM.CATEGORY,
                itemtypes.DESCRIPTION.GENERAL,
                itemtypes.DESCRIPTION.SUGGESTED_CHARACTERISTICS
            ];
            var query = client.query(new pg.Query(sql, vals));
            query.on('row', function(row) {
                results.push(row);
            });
            query.on('end', function() {
                done();
                for (var t = 0; t < results.length; t++) {
                    if (results[t].charts && results[t].charts && results[t].charts.length != 0) {
                        results[t].charts = results[t].charts.sort(function (a, b) {
                            return a.orderIndex - b.orderIndex;
                        });
                        for (var x = 0; x < results[t].charts.length; x++) {
                            results[t].charts[x].entries = results[t].charts[x].entries.sort(function (a, b) {
                                return a.minimum - b.minimum;
                            });
                        }
                    }
                }
                return res.json(results);
            });
        });
    });
};
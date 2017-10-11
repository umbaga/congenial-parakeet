module.exports = function(app, pg, async, pool) {
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
                function deleteAssociatedItemTableEntries(resObj, callback) {
                    sql = 'DELETE FROM adm_core_item';
                    sql += ' WHERE "id" = $1';
                    sql += ' OR "id" IN (SELECT "featureId" FROM adm_def_background WHERE "backgroundId" = $1)';
                    sql += ' OR "id" IN (SELECT "variantBackgroundId" FROM adm_def_background_variant WHERE "backgroundId" = $1)';
                    sql += ' OR "id" IN (SELECT "featureId" FROM adm_def_background_variant WHERE "backgroundId" = $1)';
                    sql += ' OR "id" IN (SELECT chart.id FROM adm_core_chart chart';
                    sql += ' INNER JOIN adm_link_chart link ON link."chartId" = chart.id';
                    sql += ' WHERE link."referenceId" = $1)';
                    sql += '  OR "id" IN (SELECT "proficiencyGroupId" FROM adm_link_proficiency_group WHERE "referenceId" = $1)';
                },
                function deleteDescriptions(resObj, callback) {
                    sql = 'DELETE FROM adm_core_description';
                    sql += ' WHERE "itemId" = $1';
                    sql += ' OR "itemId" IN (SELECT "featureId" FROM adm_def_background WHERE "backgroundId" = $1)';
                    sql += ' OR "itemId" IN (SELECT "variantBackgroundId" FROM adm_def_background_variant WHERE "backgroundId" = $1)';
                    sql += ' OR "itemId" IN (SELECT "featureId" FROM adm_def_background_variant WHERE "backgroundId" = $1)';
                    sql += ' OR "itemId" IN (SELECT chart.id FROM adm_core_chart chart';
                    sql += ' INNER JOIN adm_link_chart link ON link."chartId" = chart.id';
                    sql += ' WHERE link."referenceId" = $1)';
                },
                function deleteChartEntries(resObj, callback) {
                    sql = 'DELETE FROM adm_def_chart_entry';
                    sql += ' WHERE "chartId" IN (SELECT "chartId" FROM adm_link_chart WHERE "referenceId" = $1)';
                },
                function deleteCharts(resObj, callback) {
                    sql = 'DELETE FROM adm_def_chart';
                    sql += ' WHERE "id" IN (SELECT "chartId" FROM adm_link_chart WHERE "referenceId" = $1)';
                },
                function deleteChartLinks(resObj, callback) {
                    sql = 'DELETE FROM adm_link_chart';
                    sql += ' WHERE "referenceId" = $1';
                },
                function deleteEquipmentLinks(resObj, callback) {
                    sql = 'DELETE FROM adm_link_equipment';
                    sql += ' WHERE "referenceId" = $1';
                },
                function deleteProficiencyGroupLinks(resObj, callback) {
                    sql = 'DELETE FROM adm_link_proficiency_group';
                    sql += ' WHERE "referenceId" = $1';
                },
                function deleteProficiencyGroups(resObj, callback) {
                    sql = 'DELETE FROM adm_def_proficiency_group';
                    sql += ' WHERE "proficiencyGroupId" IN (SELECT "proficiencyGroupId" FROM adm_link_proficiency_group WHERE "referenceId" = $1)';
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
                },
                function deleteEquipmentCategoryLinks(resObj, callback) {
                    sql = 'DELETE FROM adm_link_equipment_category';
                    sql += ' WHERE "referenceId" = $1';
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
                    sql += ' VALUES ($1, $2, 98) returning id AS "backgroundId";';
                    vals = [req.body.background.name, req.body.background.resource.id];
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
                    sql += ' VALUES ($1, $2, 113) returning id AS "featureId";';
                    vals = [resObj.background.feature.name, resObj.background.resource.id];
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
                function insertSuggestCharacteristicsItem(resObj, callback) {
                    results = [];
                    vals = [];
                    sql = 'INSERT INTO adm_core_item';
                    sql += ' ("itemName", "resourceId", itemTypeId")';
                    sql += ' VALUES ("Suggested Characteristics", $1, 117) returning id as "suggestedCharacteristicsId"';
                    vals = [resObj.background.resource.id];
                    var query = client.query(new pg.Query(sql, vals));
                    query.on('row', function(row) {
                        results.push(row);
                    });
                    query.on('end', function() {
                        done();
                        resObj.background.suggestedCharacteristics.id = results[0].suggestedCharacteristicsId;
                        return callback(null, resObj);
                    });
                },
                function insertSuggestedCharacteristicsDescription(resObj, callback) {
                    results = [];
                    vals = [];
                    sql = 'INSERT INTO adm_core_description';
                    sql += ' ("itemId", "description")';
                    sql += ' VALUES ($1, $2) returning id as "suggestedCharacteristicsId"';
                    vals = [resObj.background.suggestedCharacteristics.id, resObj.background.suggestedCharacteristics.description];
                    var query = client.query(new pg.Query(sql, vals));
                    query.on('row', function(row) {
                        results.push(row);
                    });
                    query.on('end', function() {
                        done();
                        resObj.background.suggestedCharacteristics.id = results[0].suggestedCharacteristicsId;
                        return callback(null, resObj);
                    });
                },
                function insertBackgroundVariantItems(resObj, callback) {
                    results = [];
                    vals = [];
                    if (resObj.background.variants && resObj.background.variants.length != 0) {
                        sql = 'INSERT INTO adm_core_item';
                        sql += ' ("itemName", "resourceId", "itemTypeId")';
                        sql += ' VALUES';
                        let first = 1;
                        let second = 2;
                        for (var f = 0; f < resObj.background.variants.length; f++) {
                            sql += '($' + first.toString() + ', $' + second.toString() + ', 115)';
                            if (f < resObj.background.variants.length - 1) {
                                sql += ', ';
                            }
                            first = first + 2;
                            second = second + 2;
                            vals.push(resObj.background.variants[f].name);
                            vals.push(resObj.background.variants[f].resource.id);
                        }
                        sql += ' returning id AS "variantId";';
                        var query = client.query(new pg.Query(sql, vals));
                        query.on('row', function(row) {
                            results.push(row);
                        });
                        query.on('end', function() {
                            done();
                            for (var t = 0; t < results.length; t++) {
                                resObj.background.variants[t].id = results[t].variantId;
                            }
                            return callback(null, resObj);
                        });
                        
                    } else {
                        return callback(null, resObj);
                    }
                },
                function insertBackgroundVariantFeatureItems(resObj, callback) {
                    results = [];
                    vals = [];
                    if (resObj.background.variants && resObj.background.variants.length != 0) {
                        sql = 'INSERT INTO adm_core_item';
                        sql += ' ("itemName", "resourceId", "itemTypeId")';
                        sql += ' VALUES ';
                        var first = 1;
                        var second = 2;
                        for (var e = 0; e < resObj.background.variants.length; e++) {
                            sql += '($' + first.toString() + ', $' + second.toString() + ', 113)';
                            if (e < resObj.background.variants.length - 1) {
                                sql += ', ';
                            }
                            first = first + 2;
                            second = second + 2;
                            vals.push(resObj.background.variants[e].feature.name);
                            vals.push(resObj.background.variants[e].resource.id);
                        }
                        sql += ' returning id AS "featureId"';
                        var query = client.query(new pg.Query(sql, vals));
                        query.on('row', function(row) {
                            results.push(row);
                        });
                        query.on('end', function() {
                            done();
                            for (var t = 0; t < results.length; t++) {
                                resObj.background.variants[t].feature.id = results[t].featureId;
                            }
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
                        var tmpItemName = '';
                        for (var e = 0; e < resObj.background.proficiencyGroups.length; e++) {
                            if (e != 0) {
                                sql += ', ';
                            }
                            sql += '($' + first.toString() + ', $' + second.toString() + ', 116)';
                            first = first + 2;
                            second = second + 2;
                            tmpItemName = resObj.background.name + ': ' + resObj.background.proficiencyGroups[e].mechanic.name + ' - ' + e.toString();
                            vals.push(tmpItemName);
                            vals.push(resObj.background.resource.id);
                        }
                        sql += ' returning id AS "proficiencyGroupId";';
                        var query = client.query(new pg.Query(sql, vals));
                        query.on('row', function(row) {
                            results.push(row);
                        });
                        query.on('end', function() {
                            done();
                            for (var t = 0; t < results.length; t++) {
                                resObj.background.proficiencyGroups[t].id = results[t].proficiencyGroupId;
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
                function insertVariantFeatureDescriptions(resObj, callback) {
                    results = [];
                    vals = [];
                    if (resObj.background.variants && resObj.background.variants.length != 0) {
                        sql = 'INSERT INTO adm_core_description';
                        sql += ' ("itemId", "description")';
                        sql += ' VALUES';
                        var hasAtLeastOneDescription = false;
                        var first = 1;
                        var second = 2;
                        for (var e = 0; e < resObj.background.variants.length; e++) {
                            if (resObj.background.variants[e].description && resObj.background.variants[e].description.length != 0) {
                                hasAtLeastOneDescription = true;
                                sql += ' ($' + first.toString() + ', $' + second.toString() + ')';
                                if (e < resObj.background.variants.length - 1) {
                                    sql += ', ';
                                }
                                vals.push(resObj.background.variants[e].feature.id);
                                vals.push(resObj.background.variants[e].feature.description);
                                first = first + 2;
                                second = second + 2;
                            }
                        }
                        if (hasAtLeastOneDescription) {
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
                    } else {
                        return callback(null, resObj);
                    }
                },
                function insertBackground(resObj, callback) {
                    results = [];
                    vals = [];
                    sql = 'INSERT INTO adm_def_background';
                    sql += ' ("backgroundId", "startingGold", "featureId", "suggestedCharacteristicsId")';
                    sql += ' VALUES ($1, $2, $3, $4)';
                    vals = [resObj.background.id, resObj.background.startingGold, resObj.background.feature.id, resObj.background.suggestedCharacteristics.id];
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
                function insertMissingDice(resObj, callback) {
                    results = [];
                    vals = [];
                    if (resObj.background.charts && resObj.background.charts.length != 0) {
                        var runInsert = false;
                        sql = 'INSERT INTO adm_core_dice';
                        sql += ' ("dieCount", "dieType")';
                        sql += ' VALUES';
                        var first = 1;
                        var second = 2;
                        vars = [];
                        for (var i = 0; i < resObj.background.charts.length; i++) {
                            if (!resObj.background.charts[i].dieRoll.id || resObj.background.charts[i].dieRoll.id == 0) {
                                if(!runInsert) {
                                    sql += ', ';
                                }
                                runInsert = true;
                                sql += ' ($' + first.toString() + ', $' + second.toString() + ')';
                                vals.push(resObj.background.charts[i].dieRoll.dieCount);
                                vals.push(resObj.background.charts[i].dieRoll.dieType);
                                first = first + 2;
                                second = second + 2;
                            }
                        }
                        sql += ' returning id, "dieCount", "dieType"';
                        if (runInsert) {
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
                    } else {
                        return callback(null, resObj);
                    }
                },
                function insertCharts(resObj, callback) {
                    results = [];
                    vals = [];
                    if (resObj.background.charts && resObj.background.charts.length != 0) {
                        sql = 'INSERT INTO adm_core_chart';
                        sql += ' ("diceId", "title")';
                        sql += ' VALUES';
                        var first = 1;
                        var second = 2;
                        for (var w = 0; w < resObj.background.charts.length; w ++) {
                            sql += '($' + first.toString() + ', $' + second.toString() + ')';
                            if (w < resObj.background.charts.length - 1) {
                                sql += ', ';
                            }
                            vals.push(resObj.background.charts[w].dieRoll.id);
                            vals.push(resObj.background.charts[w].title);
                            first = first + 2;
                            second = second + 2;
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
                function insertChartEntries(resObj, callback) {
                    results = [];
                    vals = [];
                    if (resObj.background.charts && resObj.background.charts.length != 0) {
                        sql = 'INSERT INTO adm_def_chart_entry';
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
                function insertProficiencyGroups(resObj, callback) {
                    results = [];
                    vals = [];
                    if (resObj.background.proficiencyGroups && resObj.background.proficiencyGroups.length != 0) {
                        sql = 'INSERT INTO adm_def_proficiency_group';
                        sql += ' ("proficiencyGroupId", "mechanicTypeId", "selectCount")';
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
                        sql = 'INSERT INTO adm_link_proficiency_group_assignment';
                        sql += ' ("proficiencyGroupId", "proficiencyId")';
                        sql += ' VALUES';
                        var first = 1;
                        var second = 2;
                        var addComma = false;
                        for (var i = 0; i < resObj.background.proficiencyGroups.length; i++) {
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
                        sql = 'INSERT INTO adm_link_proficiency_group';
                        sql += ' ("referenceId", "proficiencyGroupId")';
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
        pool.connect(function(err, client, done) {
            if (err) {
                done();
                console.error(err);
                return res.status(500).json({ success: false, data: err});
            }
            sql = 'SELECT i.id, i."itemName" as name';
            sql += '  , bg."startingGold"';
            sql += '  , description.description';
            sql += '  , json_build_object(\'id\', suggcharitem.id,';
            sql += '         \'name\', suggcharitem."itemName",';
            sql += '         \'description\', suggchardesc.description)';
            sql += '  , json_build_object(';
            sql += '      \'id\', rsrc."id",';
            sql += '      \'name\', rsrc."itemName") AS "resource"';
            sql += '  , json_build_object(';
            sql += '         \'name\', feature."itemName", ';
            sql += '         \'id\', feature."id",';
            sql += '         \'description\', featuredesc.description';
            sql += '   ) AS "feature"';
            sql += '  , case ';
            sql += '   when count(eq) = 0 ';
            sql += '   then \'[]\' ';
            sql += '   else ';
            sql += '   	json_agg((';
            sql += '   		SELECT x FROM (';
            sql += '   			SELECT eqi.id, eq.cost, eq.weight, eqi."itemName" as "name", bglnkeq."assignedCount"';
            sql += '     				, case when cntunit."itemCount" IS NULL then 1 else cntunit."itemCount" end AS "count"';
            sql += '     				, case when cntunit."unitName" IS NULL then \'\' else cntunit."unitName" end AS "unit") x)) end AS "assignedEquipment"';
            sql += '   ';
            sql += '  , (SELECT r.charts';
            sql += '   FROM (';
            sql += '       SELECT ';
            sql += '           json_agg(chart_row) AS charts,';
            sql += '       	d.id';
            sql += '       FROM adm_core_item d';
            sql += '       INNER JOIN adm_link_chart dc ON (dc."referenceId" = d.id)';
            sql += '       INNER JOIN (';
            sql += '           SELECT  ';
            sql += '               c.id,       ';
            sql += '               c.title,';
            sql += '           	cd.description,';
            sql += '           	bgcht."orderIndex",';
            sql += '               json_agg(cm) AS entries';
            sql += '               , json_build_object(';
            sql += '                   \'dieCount\', dice."dieCount", ';
            sql += '                   \'dieType\', dice."dieType",';
            sql += '                   \'rendered\', CASE WHEN dice."dieType" = 1 ';
            sql += '                   THEN dice."dieCount"::text';
            sql += '                   ELSE dice."dieCount"::text || \'d\' || dice."dieType"::text';
            sql += '                   END';
            sql += '               ) AS "dieRoll"';
            sql += '           FROM adm_core_chart c';
            sql += '           INNER JOIN adm_link_chart bgcht ON bgcht."chartId" = c.id';
            sql += '           INNER JOIN adm_def_chart_entry cm ON (cm."chartId" = c.id) ';
            sql += '           INNER JOIN adm_core_dice dice ON dice.id = c."diceId"';
            sql += '           LEFT OUTER JOIN adm_core_description cd ON cd."itemId" = c.id';
            sql += '           GROUP BY c.id, dice."dieType", dice."dieCount", bgcht."orderIndex", cd.description';
            sql += '           ORDER BY bgcht."orderIndex"';
            sql += '       ) chart_row ON (chart_row.id = dc."chartId")';
            sql += '       GROUP BY d.id';
            sql += '   ) r(charts, id) WHERE id = i.id) AS charts';
            sql += '  , (SELECT r.variants';
            sql += '   FROM (';
            sql += '       SELECT ';
            sql += '           json_agg(variant_row) AS variants,';
            sql += '       	dc."backgroundId" AS id';
            sql += '       FROM adm_core_item d';
            sql += '       INNER JOIN adm_def_background_variant dc ON (dc."backgroundId" = d.id)';
            sql += '       INNER JOIN (';
            sql += '           SELECT  ';
            sql += '               c.id,       ';
            sql += '               c."itemName" as name';
            sql += '               , json_build_object(';
            sql += '                   \'id\', feature."id", ';
            sql += '                   \'name\', feature."itemName",';
            sql += '                   \'description\', featuredesc.description';
            sql += '               ) AS "feature"';
            sql += '           	, json_build_object(';
            sql += '                   	\'id\', varres."id",';
            sql += '                   	\'name\', varres."itemName"';
            sql += '                   ) AS "resource"';
            sql += '           FROM adm_core_item c';
            sql += '           INNER JOIN adm_def_background_variant bgcht ON bgcht."variantBackgroundId" = c.id';
            sql += '           INNER JOIN adm_core_item feature ON (feature."id" = bgcht."featureId") ';
            sql += '           INNER JOIN adm_core_description featuredesc ON featuredesc."itemId" = bgcht."featureId"';
            sql += '           INNER JOIN adm_core_item varres ON varres.id = c."resourceId"';
            sql += '           GROUP BY c.id, feature."id", feature."itemName", featuredesc.description, varres."id"';
            sql += '       ) variant_row ON (variant_row.id = dc."variantBackgroundId")';
            sql += '       GROUP BY dc."backgroundId"';
            sql += '   ) r(variants, id) WHERE id = i.id) AS variants';
            sql += '   , (SELECT r.proficiencies';
            sql += '   	FROM (';
            sql += '   		SELECT ';
            sql += '   			json_agg(proficiency_row) AS proficiencies,';
            sql += '   			d.id';
            sql += '   		FROM adm_core_item d';
            sql += '   		INNER JOIN adm_link_proficiency_group dc ON (dc."referenceId" = d.id)';
            sql += '   		INNER JOIN (';
            sql += '   			SELECT  ';
            sql += '   				c.id,       ';
            sql += '   				c."itemName" AS name,';
            sql += '                  json_build_object(';
            sql += '                                  \'id\', CASE WHEN profcat.id IS NULL THEN catcat.id ELSE profcat.id END,';
            sql += '                                  \'name\', CASE WHEN profcat."itemName" IS NULL THEN catcat."itemName" ELSE profcat."itemName" END,';
            sql += '                                 \'parentId\', CASE WHEN profcat."itemName" IS NULL THEN catcatdef."parentId" ELSE profcatdef."parentId" END,';
            sql += '                      			\'isTool\', CASE WHEN profcat."itemName" IS NULL THEN';
            sql += '                      				CASE WHEN catcatdef."parentId"::int <> 0 THEN true ELSE false END';
            sql += '                      			ELSE';
            sql += '                      				CASE WHEN profcatdef."parentId"::int <> 0 THEN true ELSE false END';
            sql += '                      			END';
            sql += '                              ) AS category,';
            sql += '   				pgrp."selectCount",';
            sql += '   				json_agg(json_build_object(';
            sql += '   		                \'id\', prof."id", ';
            sql += '   		                \'name\', prof."itemName"';
            sql += '   		            )) AS proficiencies';
            sql += '   		            , json_build_object(';
            sql += '   		                \'id\', mech."id", ';
            sql += '   		                \'name\', mech."itemName"';
            sql += '   		            ) AS "mechanic"';
            sql += '   			FROM adm_core_item c';
            sql += '   			INNER JOIN adm_link_proficiency_group bgcht ON bgcht."proficiencyGroupId" = c.id';
            sql += '   			INNER JOIN adm_def_proficiency_group pgrp ON pgrp."proficiencyGroupId" = bgcht."proficiencyGroupId"';
            sql += '   			INNER JOIN adm_core_item mech ON mech.id = pgrp."mechanicTypeId"';
            sql += '   			INNER JOIN adm_link_proficiency_group_assignment cm ON (cm."proficiencyGroupId" = c.id)';
            sql += '   			INNER JOIN adm_core_item prof ON (prof.id = cm."proficiencyId")';
            sql += '   			LEFT OUTER JOIN adm_def_proficiency profdef ON profdef."proficiencyId" = prof.id AND mech.id IN (556, 554)';
            sql += '   			LEFT OUTER JOIN adm_core_item profcat ON profcat.id = profdef."categoryId"';
            sql += '              LEFT OUTER JOIN adm_def_proficiency_category profcatdef ON profcatdef."proficiencyCategoryId" = profcat.id';
            sql += '              LEFT OUTER JOIN adm_core_item catcat ON catcat.id = cm."proficiencyId" AND mech."id" = 555';
            sql += '              LEFT OUTER JOIN adm_def_proficiency_category catcatdef ON catcatdef."proficiencyCategoryId" = catcat.id';
            sql += '   			GROUP BY c.id, mech.id, pgrp."selectCount", profcat.id, profcat."itemName", catcat.id, catcat."itemName", profcatdef."parentId", catcatdef."parentId"';
            sql += '   	) proficiency_row ON (proficiency_row.id = dc."proficiencyGroupId")';
            sql += '   	GROUP BY d.id';
            sql += '   ) r(proficiencies, id) WHERE id = i.id) AS "proficiencyGroups"';
            sql += '   FROM adm_core_item i';
            sql += '   INNER JOIN adm_def_background bg ON bg."backgroundId" = i.id';
            sql += '   INNER JOIN adm_core_item feature ON feature.id = bg."featureId"';
            sql += '   INNER JOIN adm_core_description featuredesc ON featuredesc."itemId" = bg."featureId"';
            sql += '    LEFT OUTER JOIN adm_link_equipment bglnkeq ON bglnkeq."referenceId" = i.id';
            sql += '    LEFT OUTER JOIN adm_core_item eqi ON eqi.id = bglnkeq."equipmentId"';
            sql += '    LEFT OUTER JOIN adm_def_equipment eq ON eq."equipmentId" = eqi.id';
            sql += '    LEFT OUTER JOIN adm_def_equipment_count_unit cntunit ON cntunit."equipmentId" = eqi.id';
            sql += '    LEFT OUTER JOIN adm_core_description description ON description."itemId" = i.id';
            sql += '   INNER JOIN adm_core_item rsrc ON rsrc.id = i."resourceId"';
            sql += '   INNER JOIN adm_core_item suggcharitem ON suggcharitem.id = bg."suggestedCharacteristicsId"';
            sql += '   INNER JOIN adm_core_description suggchardesc ON suggchardesc."itemId" = suggcharitem.id';
            sql += '    GROUP BY i."itemName", i.id';
            sql += '  , rsrc.id, rsrc."itemName"';
            sql += '  , bg."startingGold"';
            sql += '  , feature."itemName", feature."id", featuredesc.description';
            sql += '  , description.description';
            sql += '  , suggcharitem.id, suggcharitem."itemName", suggchardesc.description';
            sql += '   ORDER BY i."itemName"';
            var query = client.query(new pg.Query(sql));
            query.on('row', function(row) {
                results.push(row);
            });
            query.on('end', function() {
                done();
                for (var t = 0; t < results.length; t++) {
                    if (results[t].charts && results[t].charts.length != 0) {
                        results[t].charts = results[t].charts.sort(function (a, b) {
                            return a.orderIndex - b.orderIndex;
                        })
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
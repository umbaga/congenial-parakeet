module.exports = function(app, pg, async, pool, itemtypes, modules) {
    app.delete('/api/adm/spell/:id', function(req, res) {
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
                function deleteSpellDef(resObj, callback) {
                    sql = 'DELETE FROM adm_def_spell';
                    sql += ' WHERE "spellId" = $1';
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
                function deleteSupplementalDescriptionDef(resObj, callback) {
                    sql = 'DELETE FROM adm_def_supplemental_description';
                    sql += ' WHERE "descriptionId" IN (SELECT id FROM adm_core_description WHERE "itemId" = $1)';
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
                function deleteDescription(resObj, callback) {
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
                function deleteSpellComponentLinkDef(resObj, callback) {
                    sql = 'DELETE FROM adm_link_spell_component';
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
                function deleteDamageTable(resObj, callback) {
                    sql = 'DELETE FROM adm_def_damage';
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
                function deleteSpellDamageTable(resObj, callback) {
                    sql = 'DELETE FROM adm_def_spell_damage';
                    sql += ' WHERE "spellId" = $1';
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
                function deleteSavingThrowTable(resObj, callback) {
                    sql = 'DELETE FROM adm_def_spell_saving_throw';
                    sql += ' WHERE "spellId" = $1';
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
                function deleteMechanicsTable(resObj, callback) {
                    sql = 'DELETE FROM adm_link_mechanic';
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
                function deleteChartEntriesTable(resObj, callback) {
                    sql = 'DELETE FROM adm_def_chart_entry';
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
                function deleteChartColumnsTable(resObj, callback) {
                    sql = 'DELETE FROM adm_def_chart_column';
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
                function deleteChartRowsTable(resObj, callback) {
                    sql = 'DELETE FROM adm_def_chart_row';
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
                function deleteChartDefTable(resObj, callback) {
                    sql = 'DELETE FROM adm_def_chart';
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
                function deleteChartCoreTable(resObj, callback) {
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
                function deleteChartLinkTable(resObj, callback) {
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
                }
            ], function(error, result) {
                if (error) {
                    console.error(error);
                }
                return res.json(result);
            });
        });
    });
    app.put('/api/adm/spell/:id', function(req, res) {
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
                    vals = [req.params.id, req.body.spell.name];
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
                function updateSpellTable(resObj, callback) {
                    sql = 'UPDATE adm_def_spell';
                    sql += ' SET "level" = $2';
                    sql += ', "schoolId" = $3';
                    sql += ', "castingTimeId" = $4';
                    sql += ', "durationId" = $5';
                    sql += ', "rangeId" = $6';
                    sql += ' WHERE "spellId" = $1';
                    vals = [resObj.spell.id, resObj.spell.level, resObj.spell.school.id, resObj.spell.castingTime.id, resObj.spell.duration.id, resObj.spell.range.id];
                    var query = client.query(new pg.Query(sql, vals));
                    query.on('row', function(row) {
                        results.push(row);
                    });
                    query.on('end', function() {
                        done();
                        var tmp = req.body;
                        return callback(null, resObj);
                    });
                },
                function determineDescriptionTask(resObj, callback) {
                    resObj.spell.deleteDescription = false;
                    resObj.spell.descriptionExists = false;
                    if (resObj.description && resObj.description.length != 0) {
                        results = [];
                        sql = 'SELECT *';
                        sql += ' FROM adm_core_description';
                        sql += ' WHERE "itemId" = $1';
                        sql += ' AND "descriptionTypeId" = 171';
                        vals = [resObj.spell.id];
                        var query = client.query(new pg.Query(sql, vals));
                        query.on('row', function(row) {
                            results.push(row);
                        });
                        query.on('end', function() {
                            done();
                            if (results && results.length != 0) {
                                resObj.spell.descriptionExists = true;
                            }
                            return callback(null, resObj);
                        });
                        
                    } else {
                        resObj.spell.deleteDescription = true;
                        return callback(null, resObj);
                    }
                },
                function updateDescription(resObj, callback) {
                    sql = 'UPDATE adm_core_description';
                    sql += ' SET "description" = $2';
                    sql += ' WHERE "itemId" = $1';
                    sql += ' AND "descriptionTypeId" = 171';
                    vals = [resObj.spell.id, resObj.spell.description];
                    var query = client.query(new pg.Query(sql, vals));
                    query.on('row', function(row) {
                        results.push(row);
                    });
                    query.on('end', function() {
                        done();
                        var tmp = req.body;
                        return callback(null, resObj);
                    });
                },
                function updateAtHigherLevelsDescription(resObj, callback) {
                    sql = 'UPDATE adm_core_description';
                    sql += ' SET "description" = $2';
                    sql += ' WHERE "itemId" = $1';
                    sql += ' AND "descriptionTypeId" = 122';
                    vals = [resObj.spell.id, resObj.spell.description];
                    var query = client.query(new pg.Query(sql, vals));
                    query.on('row', function(row) {
                        results.push(row);
                    });
                    query.on('end', function() {
                        done();
                        var tmp = req.body;
                        return callback(null, resObj);
                    });
                },
                function deleteComponentsTable(resObj, callback) {
                    sql = 'DELETE FROM adm_link_spell_component';
                    sql += ' WHERE "referenceId" = $1';
                    sql += ' AND "componentId" NOT IN (';
                    var first = 2;
                    vals = [resObj.spell.id];
                    for (var e = 0; e < resObj.spell.components.length; e++) {
                        if (e != 0) {
                            sql += ', ';
                        }
                        sql += '$' + first.toString();
                        vals.push(resObj.spell.components[e].id);
                        first++;
                    }
                    sql += ')';
                    var query = client.query(new pg.Query(sql, vals));
                    query.on('row', function(row) {
                        results.push(row);
                    });
                    query.on('end', function() {
                        done();
                        var tmp = req.body;
                        return callback(null, resObj);
                    });
                },
                function insertComponentsTable(resObj, callback) {
                    sql = 'with vals as (';
                    var first = 1;
                    var second = 2;
                    var third = 3;
                    vals = [];
                    for (var e = 0; e < resObj.spell.components.length; e++) {
                        if (e != 0) {
                            sql += ' UNION ';
                        }
                        sql += 'select $' + first.toString() + ' ::bigint as "referenceId"';
                        sql += ', $' + second.toString() + ' ::bigint as "componentId"';
                        sql += ', $' + third.toString() + ' ::varchar as "description"';
                        first = first + 3;
                        second = second + 3;
                        third = third + 3;
                        vals.push(resObj.spell.id);
                        vals.push(resObj.spell.components[e].id);
                        vals.push(resObj.spell.components[e].description);
                    }
                    sql += ' ) ';
                    sql += '  insert into adm_link_spell_component ("referenceId", "componentId")';
                    sql += '  select v."referenceId", v."componentId"';
                    sql += '  from vals as v';
                    sql += '  where not exists ';
                    sql += ' (select * from adm_link_spell_component as t where t."referenceId" = v."referenceId" and t."componentId" = v."componentId")';
                    var query = client.query(new pg.Query(sql, vals));
                    query.on('row', function(row) {
                        results.push(row);
                    });
                    query.on('end', function() {
                        done();
                        var tmp = req.body;
                        return callback(null, resObj);
                    });
                },
                function updateComponentsTable(resObj, callback) {
                    sql = 'UPDATE adm_link_spell_component as t SET';
                    sql += '    description = c.description';
                    sql += ' FROM (VALUES';
                    vals = [];
                    var first = 1;
                    var second = 2;
                    var third = 3;
                    for (var e = 0; e < resObj.spell.components.length; e++) {
                        if (e != 0) {
                            sql += ', ';
                        }
                        sql += '($' + first.toString() + '::bigint, $' + second.toString() + '::bigint, $' + third.toString() + '::varchar)';
                        first = first + 3;
                        second = second + 3;
                        third = third + 3;
                        vals.push(resObj.spell.id);
                        vals.push(resObj.spell.components[e].id);
                        vals.push(resObj.spell.components[e].description);
                    }
                    sql += ') AS c("referenceId", "componentId", "description")';
                    sql += ' WHERE c."referenceId" = t."referenceId"';
                    sql += ' AND c."componentId" = t."componentId"';
                    var query = client.query(new pg.Query(sql, vals));
                    query.on('row', function(row) {
                        results.push(row);
                    });
                    query.on('end', function() {
                        done();
                        var tmp = req.body;
                        return callback(null, resObj);
                    });
                },
                function determineDamageUpdateType(resObj, callback) {
                    
                },
                function updateDamage(resObj, callback) {
                    
                },
                function determineDamageExecuteType(resObj) {
                    
                },
                function deleteUnneededMechanics(resObj, callback) {
                    
                },
                function insertMissingMechanics(resObj, callback) {
                    
                },
                function updateMechanics(resObj, callback) {
                    
                }
            ], function(error, result) {
                if (error) {
                    console.error(error);
                }
                return res.json(result);
            });
        });
    });
    app.post('/api/adm/spell', function(req, res) {
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
                    sql += ' VALUES ($1, $2, $3) returning id AS "spellId";';
                    vals = [req.body.spell.name, req.body.spell.resource.id, itemtypes.TYPE.SPELL];
                    var query = client.query(new pg.Query(sql, vals));
                    query.on('row', function(row) {
                        results.push(row);
                    });
                    query.on('end', function() {
                        done();
                        var tmp = req.body;
                        tmp.spell.id = results[0].spellId;
                        tmp.spell.needDamage = false;
                        if (tmp.spell.damageType && tmp.spell.damageType.id != 0) {
                            tmp.spell.needDamage = true;
                        }
                        tmp.spell.needSavingThrow = false;
                        if (tmp.spell.savingThrow && tmp.spell.savingThrow.abilityScore && tmp.spell.savingThrow.abilityScore.name && tmp.spell.savingThrow.abilityScore.name.length != 0) {
                            tmp.spell.needSavingThrow = true;
                        }
                        tmp.spell.hasAnyTypeOfChart = false;
                        tmp.spell.hasDieChart = false;
                        tmp.spell.hasStandardCharts = false;
                        if (tmp.spell.charts && tmp.spell.charts.length != 0) {
                            tmp.spell.hasAnyTypeOfChart = true;
                            for (var c = 0; c < tmp.spell.charts.length; c++) {
                                if (tmp.spell.charts[c].type.id == 904) {
                                    tmp.spell.hasStandardCharts = true;
                                }
                                if (tmp.spell.charts[c].type.id == 806) {
                                    tmp.spell.hasDieChart = true;
                                }
                            }
                        }
                        tmp.spell.needDiceCheck = false;
                        if (tmp.spell.damage && tmp.spell.damage.dice && tmp.spell.damage.dice.dieCount != 0) {
                            tmp.spell.needDiceCheck = true;
                        }
                        for (var m = 0; m < tmp.spell.mechanics.advancement.length; m++) {
                            if (tmp.spell.mechanics.advancement[m].dice && tmp.spell.mechanics.advancement[m].dice.dieCount != 0) {
                                tmp.spell.needDiceCheck = true;
                            }
                        }
                        for (var m = 0; m < tmp.spell.mechanics.base.length; m++) {
                            if (tmp.spell.mechanics.base[m].dice && tmp.spell.mechanics.base[m].dice.dieCount != 0) {
                                tmp.spell.needDiceCheck = true;
                            }
                        }
                        if (tmp.spell.damage && tmp.spell.damage.supplemental && tmp.spell.damage.supplemental.length != 0) {
                            for (var s = 0; s < tmp.spell.damage.supplemental.length; s++) {
                                if (tmp.spell.damage.supplemental[s].dice && tmp.spell.damage.supplemental[s].dice.dieCount != 0) {
                                    tmp.spell.needDiceCheck = true;
                                }
                            }
                        }
                        return callback(null, tmp);
                    });
                },
                function insertSpellTable(resObj, callback) {
                    results = [];
                    vals = [];
                    sql = 'INSERT INTO adm_def_spell';
                    sql += ' ("spellId", "level", "schoolId", "durationId", "rangeId", "castingTimeId", "isRitual")';
                    sql += ' VALUES ($1, $2, $3, $4, $5, $6, $7)';
                    vals = [
                        resObj.spell.id, 
                        resObj.spell.level, 
                        resObj.spell.school.id, 
                        resObj.spell.duration.id, 
                        resObj.spell.range.id, 
                        resObj.spell.castingTime.id, 
                        resObj.spell.isRitual
                    ];
                    var query = client.query(new pg.Query(sql, vals));
                    query.on('row', function(row) {
                        results.push(row);
                    });
                    query.on('end', function() {
                        done();
                        return callback(null, resObj);
                    });
                },
                function insertDescription(resObj, callback) {
                    results = [];
                    vals = [];
                    sql = 'INSERT INTO adm_core_description';
                    sql += ' ("itemId", "description")';
                    sql += ' VALUES ($1, $2)';
                    vals = [resObj.spell.id, resObj.spell.description];
                    var query = client.query(new pg.Query(sql, vals));
                    query.on('row', function(row) {
                        results.push(row);
                    });
                    query.on('end', function() {
                        done();
                        return callback(null, resObj);
                    });
                },
                function insertAtHigherLevelsDescription(resObj, callback) {
                    if (resObj.spell.atHigherLevels && resObj.spell.atHigherLevels.length != 0) {
                        results = [];
                        vals = [];
                        sql = 'INSERT INTO adm_core_description';
                        sql += ' ("itemId", "description", "descriptionTypeId")';
                        sql += ' VALUES ($1, $2, $3) returning id AS "atHigherLevelsId";';
                        vals = [resObj.spell.id, resObj.spell.atHigherLevels, itemtypes.DESCRIPTION.AT_HIGHER_LEVELS];
                        var query = client.query(new pg.Query(sql, vals));
                        query.on('row', function(row) {
                            results.push(row);
                        });
                        query.on('end', function() {
                            done();
                            resObj.spell.atHigherLevelsId = results[0].atHigherLevelsId;
                            return callback(null, resObj);
                        });
                    } else {
                        return callback(null, resObj);
                    }
                },
                function insertSpellComponentsTable(resObj, callback) {
                    results = [];
                    vals = [];
                    sql = 'INSERT INTO adm_link_spell_component';
                    sql += ' ("referenceId", "componentId", "description")';
                    sql += ' VALUES ';
                    var first = 1;
                    var second = 2;
                    var third = 3;
                    for (var e = 0; e < resObj.spell.components.length; e++) {
                        if (e != 0) {
                            sql += ', ';
                        }
                        sql += '($' + first.toString() + ', $' + second.toString() + ', $' + third.toString() + ')';
                        vals.push(resObj.spell.id);
                        vals.push(resObj.spell.components[e].id);
                        vals.push(resObj.spell.components[e].description);
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
                },
                function insertMissingDamageDice(resObj, callback) {
                    if (resObj.spell.needDiceCheck) {
                        var first = 1;
                        var second = 2;
                        var third = 3;
                        var fourth = 4;
                        var fifth = 5;
                        vals = [];
                        var includeUnion = false;
                        sql = 'with vals as ';
                        sql += ' (';
                        if (resObj.spell.damage && resObj.spell.damage.dice.dieCount && resObj.spell.damage.dice.dieCount != 0) {
                            sql += 'select $' + first.toString() +' :: bigint as "dieCount", $' + second.toString() +' :: bigint as "dieType"';
                            sql += ', $' + third.toString() +' :: smallint as "modifier", $' + fourth.toString() +' :: smallint as "multiplier"';
                            sql += ', $' + fifth.toString() +' :: smallint as "divisor"';
                            first = first + 5;
                            second = second + 5;
                            third = third + 5;
                            fourth = fourth + 5;
                            fifth = fifth + 5;
                            includeUnion = true;
                            vals.push(resObj.spell.damage.dice.dieCount);
                            vals.push(resObj.spell.damage.dice.dieType);
                            vals.push(resObj.spell.damage.dice.modifier);
                            vals.push(resObj.spell.damage.dice.multiplier);
                            vals.push(resObj.spell.damage.dice.divisor);
                        }
                        if (resObj.spell.damage && resObj.spell.damage.improvement && resObj.spell.damage.improvement.dice.dieCount && resObj.spell.damage.improvement.dice.dieCount != 0) {
                            if (includeUnion) {
                                sql += ' UNION ';
                            }
                            sql += 'select $' + first.toString() +' :: bigint as "dieCount", $' + second.toString() +' :: bigint as "dieType"';
                            sql += ', $' + third.toString() +' :: smallint as "modifier", $' + fourth.toString() +' :: smallint as "multiplier"';
                            sql += ', $' + fifth.toString() +' :: smallint as "divisor"';
                            first = first + 5;
                            second = second + 5;
                            third = third + 5;
                            fourth = fourth + 5;
                            fifth = fifth + 5;
                            includeUnion = true;
                            vals.push(resObj.spell.damage.improvement.dice.dieCount);
                            vals.push(resObj.spell.damage.improvement.dice.dieType);
                            vals.push(resObj.spell.damage.improvement.dice.modifier);
                            vals.push(resObj.spell.damage.improvement.dice.multiplier);
                            vals.push(resObj.spell.damage.improvement.dice.divisor);
                        }
                        if (resObj.spell.damage && resObj.spell.damage.maximum && resObj.spell.damage.maximum.dice.dieCount && resObj.spell.damage.maximum.dice.dieCount != 0) {
                            if (includeUnion) {
                                sql += ' UNION ';
                            }
                            sql += 'select $' + first.toString() +' :: bigint as "dieCount", $' + second.toString() +' :: bigint as "dieType"';
                            sql += ', $' + third.toString() +' :: smallint as "modifier", $' + fourth.toString() +' :: smallint as "multiplier"';
                            sql += ', $' + fifth.toString() +' :: smallint as "divisor"';
                            first = first + 5;
                            second = second + 5;
                            third = third + 5;
                            fourth = fourth + 5;
                            fifth = fifth + 5;
                            vals.push(resObj.spell.damage.maximum.dice.dieCount);
                            vals.push(resObj.spell.damage.maximum.dice.dieType);
                            vals.push(resObj.spell.damage.maximum.dice.modifier);
                            vals.push(resObj.spell.damage.maximum.dice.multiplier);
                            vals.push(resObj.spell.damage.maximum.dice.divisor);
                        }
                        if (resObj.spell.mechanics && resObj.spell.mechanics.base && resObj.spell.mechanics.base.length != 0) {
                            for (var m = 0; m < resObj.spell.mechanics.base.length; m++) {
                                if (resObj.spell.mechanics.base[m].dice && resObj.spell.mechanics.base[m].dice.dieCount != 0) {
                                    if (includeUnion) {
                                        sql += ' UNION ';
                                    }
                                    sql += 'select $' + first.toString() +' :: bigint as "dieCount", $' + second.toString() +' :: bigint as "dieType"';
                                    sql += ', $' + third.toString() +' :: smallint as "modifier", $' + fourth.toString() +' :: smallint as "multiplier"';
                                    sql += ', $' + fifth.toString() +' :: smallint as "divisor"';
                                    first = first + 5;
                                    second = second + 5;
                                    third = third + 5;
                                    fourth = fourth + 5;
                                    fifth = fifth + 5;
                                    includeUnion = true;
                                    vals.push(resObj.spell.mechanics.base[m].dice.dieCount);
                                    vals.push(resObj.spell.mechanics.base[m].dice.dieType);
                                    vals.push(resObj.spell.mechanics.base[m].dice.modifier);
                                    vals.push(resObj.spell.mechanics.base[m].dice.multiplier);
                                    vals.push(resObj.spell.mechanics.base[m].dice.divisor);
                                }
                            }
                        }
                        if (resObj.spell.mechanics && resObj.spell.mechanics.advacement && resObj.spell.mechanics.advacement.length != 0) {
                            for (var m = 0; m < resObj.spell.mechanics.advacement.length; m++) {
                                if (resObj.spell.mechanics.advacement[m].dice && resObj.spell.mechanics.advacement[m].dice.dieCount != 0) {
                                    if (includeUnion) {
                                        sql += ' UNION ';
                                    }
                                    sql += 'select $' + first.toString() +' :: bigint as "dieCount", $' + second.toString() +' :: bigint as "dieType"';
                                    sql += ', $' + third.toString() +' :: smallint as "modifier", $' + fourth.toString() +' :: smallint as "multiplier"';
                                    sql += ', $' + fifth.toString() +' :: smallint as "divisor"';
                                    first = first + 5;
                                    second = second + 5;
                                    third = third + 5;
                                    fourth = fourth + 5;
                                    fifth = fifth + 5;
                                    includeUnion = true;
                                    vals.push(resObj.spell.mechanics.advacement[m].dice.dieCount);
                                    vals.push(resObj.spell.mechanics.advacement[m].dice.dieType);
                                    vals.push(resObj.spell.mechanics.advacement[m].dice.modifier);
                                    vals.push(resObj.spell.mechanics.advacement[m].dice.multiplier);
                                    vals.push(resObj.spell.mechanics.advacement[m].dice.divisor);
                                }
                            }
                        }
                        if (resObj.spell.damage && resObj.spell.damage.supplemental && resObj.spell.damage.supplemental.length != 0) {
                            for (var s = 0; s < resObj.spell.damage.supplemental.length; s++) {
                                if (resObj.spell.damage.supplemental[s].dice && resObj.spell.damage.supplemental[s].dice.dieCount != 0) {
                                    if (includeUnion) {
                                        sql += ' UNION ';
                                    }
                                    sql += 'select $' + first.toString() +' :: bigint as "dieCount", $' + second.toString() +' :: bigint as "dieType"';
                                    sql += ', $' + third.toString() +' :: smallint as "modifier", $' + fourth.toString() +' :: smallint as "multiplier"';
                                    sql += ', $' + fifth.toString() +' :: smallint as "divisor"';
                                    first = first + 5;
                                    second = second + 5;
                                    third = third + 5;
                                    fourth = fourth + 5;
                                    fifth = fifth + 5;
                                    includeUnion = true;
                                    vals.push(resObj.spell.damage.supplemental[s].dice.dieCount);
                                    vals.push(resObj.spell.damage.supplemental[s].dice.dieType);
                                    vals.push(resObj.spell.damage.supplemental[s].dice.modifier);
                                    vals.push(resObj.spell.damage.supplemental[s].dice.multiplier);
                                    vals.push(resObj.spell.damage.supplemental[s].dice.divisor);
                                }
                            }
                        }
                        sql += ')';
                        sql += ' insert into adm_core_dice ("dieCount", "dieType", "modifier", "multiplier", "divisor") ';
                        sql += ' select v."dieCount", v."dieType", v."modifier", v."multiplier", v."divisor" from vals as v ';
                        sql += ' where not exists (';
                        sql += ' select * from adm_core_dice as t ';
                        sql += ' where t."dieCount" = v."dieCount" ';
                        sql += ' and t."dieType" = v."dieType"';
                        sql += ' and t."modifier" = v."modifier"';
                        sql += ' and t."multiplier" = v."multiplier"';
                        sql += ' and t."divisor" = v."divisor")';
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
                function assignDamageIds(resObj, callback) {
                    if (resObj.spell.needDiceCheck) {
                        vals = [];
                        results = [];
                        first = 1;
                        second = 2;
                        third = 3;
                        fourth = 4;
                        fifth = 5;
                        var usesOrClause = false;
                        sql = 'SELECT * FROM adm_core_dice';
                        if (resObj.spell.damage && resObj.spell.damage.dice.dieCount && resObj.spell.damage.dice.dieCount != 0) {
                            sql += usesOrClause ? ' OR ' : ' WHERE ';
                            sql += ' ("dieCount" = $' + first.toString() + ' AND "dieType" = $' + second.toString();
                            sql += ' AND "modifier" = $' + third.toString() + ' AND "multiplier" = $' + fourth.toString();
                            sql += ' AND "divisor" = $' + fifth.toString() + ')';
                            first = first + 5;
                            second = second + 5;
                            third = third + 5;
                            fourth = fourth + 5;
                            fifth = fifth + 5;
                            vals.push(resObj.spell.damage.dice.dieCount);
                            vals.push(resObj.spell.damage.dice.dieType);
                            vals.push(resObj.spell.damage.dice.modifier);
                            vals.push(resObj.spell.damage.dice.multiplier);
                            vals.push(resObj.spell.damage.dice.divisor);
                            usesOrClause = true;
                        }
                        if (resObj.spell.damage && resObj.spell.damage.improvement && resObj.spell.damage.improvement.dice.dieCount && resObj.spell.damage.improvement.dice.dieCount != 0) {
                            sql += usesOrClause ? ' OR ' : ' WHERE ';
                            sql += ' ("dieCount" = $' + first.toString() + ' AND "dieType" = $' + second.toString();
                            sql += ' AND "modifier" = $' + third.toString() + ' AND "multiplier" = $' + fourth.toString();
                            sql += ' AND "divisor" = $' + fifth.toString() + ')';
                            first = first + 5;
                            second = second + 5;
                            third = third + 5;
                            fourth = fourth + 5;
                            fifth = fifth + 5;
                            vals.push(resObj.spell.damage.improvement.dice.dieCount);
                            vals.push(resObj.spell.damage.improvement.dice.dieType);
                            vals.push(resObj.spell.damage.improvement.dice.modifier);
                            vals.push(resObj.spell.damage.improvement.dice.multiplier);
                            vals.push(resObj.spell.damage.improvement.dice.divisor);
                            usesOrClause = true;
                        }
                        if (resObj.spell.damage && resObj.spell.damage.maximum && resObj.spell.damage.maximum.dice.dieCount && resObj.spell.damage.maximum.dice.dieCount != 0) {
                            sql += usesOrClause ? ' OR ' : ' WHERE ';
                            sql += ' ("dieCount" = $' + first.toString() + ' AND "dieType" = $' + second.toString();
                            sql += ' AND "modifier" = $' + third.toString() + ' AND "multiplier" = $' + fourth.toString();
                            sql += ' AND "divisor" = $' + fifth.toString() + ')';
                            first = first + 5;
                            second = second + 5;
                            third = third + 5;
                            fourth = fourth + 5;
                            fifth = fifth + 5;
                            vals.push(resObj.spell.damage.maximum.dice.dieCount);
                            vals.push(resObj.spell.damage.maximum.dice.dieType);
                            vals.push(resObj.spell.damage.maximum.dice.modifier);
                            vals.push(resObj.spell.damage.maximum.dice.multiplier);
                            vals.push(resObj.spell.damage.maximum.dice.divisor);
                            usesOrClause = true;
                        }
                        if (resObj.spell.damage && resObj.spell.damage.supplemental && resObj.spell.damage.supplemental.length != 0) {
                            for (var s = 0; s < resObj.spell.damage.supplemental.length; s++) {
                                if (resObj.spell.damage.supplemental[s].dice && resObj.spell.damage.supplemental[s].dice.dieCount != 0) {
                                    sql += usesOrClause ? ' OR ' : ' WHERE ';
                                    sql += ' ("dieCount" = $' + first.toString() + ' AND "dieType" = $' + second.toString();
                                    sql += ' AND "modifier" = $' + third.toString() + ' AND "multiplier" = $' + fourth.toString();
                                    sql += ' AND "divisor" = $' + fifth.toString() + ')';
                                    first = first + 5;
                                    second = second + 5;
                                    third = third + 5;
                                    fourth = fourth + 5;
                                    fifth = fifth + 5;
                                    vals.push(resObj.spell.damage.supplemental[s].dice.dieCount);
                                    vals.push(resObj.spell.damage.supplemental[s].dice.dieType);
                                    vals.push(resObj.spell.damage.supplemental[s].dice.modifier);
                                    vals.push(resObj.spell.damage.supplemental[s].dice.multiplier);
                                    vals.push(resObj.spell.damage.supplemental[s].dice.divisor);
                                    usesOrClause = true;
                                }
                            }
                        }
                        if (resObj.spell.mechanics && resObj.spell.mechanics.base && resObj.spell.mechanics.base.length != 0) {
                            for (var m = 0; m < resObj.spell.mechanics.base.length; m++) {
                                if (resObj.spell.mechanics.base[m].dice && resObj.spell.mechanics.base[m].dice.dieCount != 0) {
                                    sql += usesOrClause ? ' OR ' : ' WHERE ';
                                    sql += ' ("dieCount" = $' + first.toString() + ' AND "dieType" = $' + second.toString();
                                    sql += ' AND "modifier" = $' + third.toString() + ' AND "multiplier" = $' + fourth.toString();
                                    sql += ' AND "divisor" = $' + fifth.toString() + ')';
                                    first = first + 5;
                                    second = second + 5;
                                    third = third + 5;
                                    fourth = fourth + 5;
                                    fifth = fifth + 5;
                                    vals.push(resObj.spell.mechanics.base[m].dice.dieCount);
                                    vals.push(resObj.spell.mechanics.base[m].dice.dieType);
                                    vals.push(resObj.spell.mechanics.base[m].dice.modifier);
                                    vals.push(resObj.spell.mechanics.base[m].dice.multiplier);
                                    vals.push(resObj.spell.mechanics.base[m].dice.divisor);
                                    usesOrClause = true;
                                }
                            }
                        }
                        if (resObj.spell.mechanics && resObj.spell.mechanics.advacement && resObj.spell.mechanics.advacement.length != 0) {
                            for (var m = 0; m < resObj.spell.mechanics.advacement.length; m++) {
                                if (resObj.spell.mechanics.advacement[m].dice && resObj.spell.mechanics.advacement[m].dice.dieCount != 0) {
                                    sql += usesOrClause ? ' OR ' : ' WHERE ';
                                    sql += ' ("dieCount" = $' + first.toString() + ' AND "dieType" = $' + second.toString();
                                    sql += ' AND "modifier" = $' + third.toString() + ' AND "multiplier" = $' + fourth.toString();
                                    sql += ' AND "divisor" = $' + fifth.toString() + ')';
                                    first = first + 5;
                                    second = second + 5;
                                    third = third + 5;
                                    fourth = fourth + 5;
                                    fifth = fifth + 5;
                                    vals.push(resObj.spell.mechanics.advacement[m].dice.dieCount);
                                    vals.push(resObj.spell.mechanics.advacement[m].dice.dieType);
                                    vals.push(resObj.spell.mechanics.advacement[m].dice.modifier);
                                    vals.push(resObj.spell.mechanics.advacement[m].dice.multiplier);
                                    vals.push(resObj.spell.mechanics.advacement[m].dice.divisor);
                                    usesOrClause = true;
                                }
                            }
                        }
                        var query = client.query(new pg.Query(sql, vals));
                        query.on('row', function(row) {
                            results.push(row);
                        });
                        query.on('end', function() {
                            done();
                            for (var e = 0; e < results.length; e++) {
                                if (resObj.spell.damage && resObj.spell.damage.dice && resObj.spell.damage.dice.dieCount != 0) {
                                    if (resObj.spell.damage.dice.dieCount == results[e].dieCount && resObj.spell.damage.dice.dieType == results[e].dieType
                                       && resObj.spell.damage.dice.modifier == results[e].modifier && resObj.spell.damage.dice.multiplier == results[e].multiplier
                                       && resObj.spell.damage.dice.divisor == results[e].divisor) {
                                        resObj.spell.damage.dice.id = results[e].id;
                                    }
                                }
                                if (resObj.spell.damage && resObj.spell.damage.improvement && resObj.spell.damage.improvement.dice && resObj.spell.damage.improvement.dice.dieCount != 0) {
                                    if (resObj.spell.damage.improvement.dice.dieCount == results[e].dieCount && resObj.spell.damage.improvement.dice.dieType == results[e].dieType
                                       && resObj.spell.damage.improvement.dice.modifier == results[e].modifier && resObj.spell.damage.improvement.dice.multiplier == results[e].multiplier
                                       && resObj.spell.damage.improvement.dice.divisor == results[e].divisor) {
                                        resObj.spell.damage.improvement.dice.id = results[e].id;
                                    } 
                                }
                                if (resObj.spell.damage && resObj.spell.damage.maximum && resObj.spell.damage.maximum.dice && resObj.spell.damage.maximum.dice.dieCount != 0) {
                                    if (resObj.spell.damage.maximum.dice.dieCount == results[e].dieCount && resObj.spell.damage.maximum.dice.dieType == results[e].dieType
                                       && resObj.spell.damage.maximum.dice.modifier == results[e].modifier && resObj.spell.damage.maximum.dice.multiplier == results[e].multiplier
                                       && resObj.spell.damage.maximum.dice.divisor == results[e].divisor) {
                                        resObj.spell.damage.maximum.dice.id = results[e].id;
                                    } 
                                }
                                if (resObj.spell.mechanics && resObj.spell.mechanics.base && resObj.spell.mechanics.base.length != 0) {
                                    for (var m = 0; m < resObj.spell.mechanics.base.length; m++) {
                                        if (resObj.spell.mechanics.base[m] && resObj.spell.mechanics.base[m].dice && resObj.spell.mechanics.base[m].dice.dieCount != 0) {
                                            if (resObj.spell.mechanics.base[m].dice.dieCount == results[e].dieCount && resObj.spell.mechanics.base[m].dice.dieType == results[e].dieType
                                               && resObj.spell.mechanics.base[m].dice.modifier == results[e].modifier && resObj.spell.mechanics.base[m].dice.multiplier == results[e].multiplier
                                               && resObj.spell.mechanics.base[m].dice.divisor == results[e].divisor) {
                                                resObj.spell.mechanics.base[m].dice.id = results[e].id;
                                            }
                                        }
                                    }
                                }
                                if (resObj.spell.mechanics && resObj.spell.mechanics.advancement && resObj.spell.mechanics.advancement.length != 0) {
                                    for (var m = 0; m < resObj.spell.mechanics.advancement.length; m++) {
                                        if (resObj.spell.mechanics.advancement[m] && resObj.spell.mechanics.advancement[m].dice && resObj.spell.mechanics.advancement[m].dice.dieCount != 0) {
                                            if (resObj.spell.mechanics.advancement[m].dice.dieCount == results[e].dieCount && resObj.spell.mechanics.advancement[m].dice.dieType == results[e].dieType
                                               && resObj.spell.mechanics.advancement[m].dice.modifier == results[e].modifier && resObj.spell.mechanics.advancement[m].dice.multiplier == results[e].multiplier
                                               && resObj.spell.mechanics.advancement[m].dice.divisor == results[e].divisor) {
                                                resObj.spell.mechanics.advancement[m].dice.id = results[e].id;
                                            }
                                        }
                                    }
                                }
                                if (resObj.spell.damage && resObj.spell.damage.supplemental && resObj.spell.damage.supplemental.length != 0) {
                                    for (var s = 0; s < resObj.spell.damage.supplemental.length; s++) {
                                        if (resObj.spell.damage.supplemental[s].dice && resObj.spell.damage.supplemental[s].dice.dieCount != 0) {
                                            if (resObj.spell.damage.supplemental[s].dice.dieCount == results[e].dieCount
                                               && resObj.spell.damage.supplemental[s].dice.dieType == results[e].dieType
                                               && resObj.spell.damage.supplemental[s].dice.modifier == results[e].modifier
                                               && resObj.spell.damage.supplemental[s].dice.multiplier == results[e].multiplier
                                               && resObj.spell.damage.supplemental[s].dice.divisor == results[e].divisor) {
                                                resObj.spell.damage.supplemental[s].dice.id = results[e].id;
                                            }
                                        }
                                    }
                                }
                            }
                            return callback(null, resObj);
                        });
                    } else {
                        return callback(null, resObj);
                    }
                },
                function insertSupplementalDamage(resObj, callback) {
                    if (resObj.spell.damage && resObj.spell.damage.supplemental && resObj.spell.damage.supplemental.length != 0) {
                        vals = [];
                        results = [];
                        sql = 'INSERT INTO adm_link_supplemental_damage';
                        sql += ' ("referenceId", "diceId", "damageTypeId")';
                        sql += ' VALUES ';
                        first = 1;
                        second = 2;
                        third = 3;
                        for (var s = 0; s < resObj.spell.damage.supplemental.length; s++) {
                            if (s != 0) {
                                sql += ', ';
                            }
                            sql += ' ($' + first.toString() + ', $' + second.toString() + ', $' + third.toString() + ')';
                            first = first + 3;
                            second = second + 3;
                            third = third + 3;
                            vals.push(resObj.spell.id);
                            vals.push(resObj.spell.damage.supplemental[s].dice.id);
                            vals.push(resObj.spell.damage.supplemental[s].type.id);
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
                function insertDamage(resObj, callback) {
                    if (resObj.spell.damage && resObj.spell.damage.dice && resObj.spell.damage.dice.dieCount && resObj.spell.damage.dice.dieCount != 0) {
                        results = [];
                        vals = [];
                        sql = 'INSERT INTO adm_def_damage';
                        sql += ' ("referenceId", "diceId", "damageTypeId", "abilityScoreModifierId")';
                        sql += ' VALUES ($1, $2, $3, $4)';
                        vals = [
                            resObj.spell.id, 
                            resObj.spell.damage.dice.id, 
                            resObj.spell.damage.type.id,
                        ];
                        if (resObj.spell.damage.applyAbilityScoreModifier) {
                            vals.push(resObj.spell.damage.abilityScore.id);
                        } else {
                            vals.push(0);
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
                function insertImprovementDamage(resObj, callback) {
                    if ((resObj.spell.damage && resObj.spell.damage.improvement && resObj.spell.damage.improvement.dice && resObj.spell.damage.improvement.dice.dieCount != 0) ||
                       (resObj.spell.damage && resObj.spell.damage.attackRollType && resObj.spell.damage.attackRollType.id != 0) ||
                       (resObj.spell.damage && resObj.spell.damage.condition && resObj.spell.damage.condition.id != 0) ||
                       (resObj.spell.damage && resObj.spell.damage.projectileCount != 0)) {
                        results = [];
                        vals = [];
                        sql = 'INSERT INTO adm_def_spell_damage';
                        sql += ' ("spellId", "improvementDiceId"';
                        sql += ', "attackRollTypeId", "conditionId"';
                        sql += ', "maximumDamageDiceId", "improvementLevelCount"';
                        sql += ', "projectileCount", "improvementProjectileCount")';
                        sql += ' VALUES ($1, $2, $3, $4, $5, $6, $7, $8)';
                        vals = [
                            resObj.spell.id,
                            resObj.spell.damage.improvement.dice.id,
                            resObj.spell.damage.attackRollType.id,
                            resObj.spell.damage.condition.id,
                            resObj.spell.damage.maximum.dice.id,
                            resObj.spell.damage.improvement.levelCount,
                            resObj.spell.damage.projectileCount,
                            resObj.spell.damage.improvement.projectileCount
                        ];
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
                function insertSavingThrow(resObj, callback) {
                    if (resObj.spell.needSavingThrow) {
                        sql = 'INSERT INTO adm_def_spell_saving_throw';
                        sql += ' ("spellId", "abilityScoreId", "effectId")';
                        sql += ' VALUES ($1, $2, $3)';
                        vals = [
                            resObj.spell.id, 
                            resObj.spell.savingThrow.abilityScore.id, 
                            resObj.spell.savingThrow.effect.id
                        ];
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
                function insertMechanics(resObj, callback) {
                    if (resObj.spell.mechanics && resObj.spell.mechanics.base && resObj.spell.mechanics.base.length != 0) {
                        sql = 'INSERT INTO adm_link_mechanic';
                        sql += ' ("referenceId", "targetId", "typeId", "value", "diceId", "valueObjectId")';
                        sql += ' VALUES ';
                        var first = 1;
                        var second = 2;
                        var third = 3;
                        var fourth = 4;
                        var fifth = 5;
                        var sixth = 6;
                        vals = [];
                        for (var e = 0; e < resObj.spell.mechanics.base.length; e++) {
                            if (e != 0) {
                                sql += ', ';
                            }
                            sql += ' ($' + first.toString() + ', $' + second.toString() + ', $' + third.toString() + ', $' + fourth.toString() + ', $' + fifth.toString() + ', $' + sixth.toString() + ')';
                            first = first + 6;
                            second = second + 6;
                            third = third + 6;
                            fourth = fourth + 6;
                            fifth = fifth + 6;
                            sixth = sixth + 6;
                            vals.push(resObj.spell.id);
                            vals.push(resObj.spell.mechanics.base[e].target.id);
                            vals.push(resObj.spell.mechanics.base[e].type.id);
                            vals.push(resObj.spell.mechanics.base[e].value);
                            vals.push(resObj.spell.mechanics.base[e].dice.id);
                            vals.push(resObj.spell.mechanics.base[e].valueObject.id);
                        }
                        if (resObj.spell.atHigherLevelsId && resObj.spell.atHigherLevelsId != 0) {
                            if (resObj.spell.mechanics.advancement && resObj.spell.mechanics.advancement.length != 0) {
                                for (var e = 0; e < resObj.spell.mechanics.advancement.length; e++) {
                                    sql += ', ($' + first.toString() + ', $' + second.toString() + ', $' + third.toString() + ', $' + fourth.toString() + ', $' + fifth.toString() + ', $' + sixth.toString() + ')';
                                    first = first + 6;
                                    second = second + 6;
                                    third = third + 6;
                                    fourth = fourth + 6;
                                    fifth = fifth + 6;
                                    sixth = sixth + 6;
                                    vals.push(resObj.spell.atHigherLevelsId);
                                    vals.push(resObj.spell.mechanics.advancement[e].target.id);
                                    vals.push(resObj.spell.mechanics.advancement[e].type.id);
                                    vals.push(resObj.spell.mechanics.advancement[e].value);
                                    vals.push(resObj.spell.mechanics.advancement[e].dice.id);
                                    vals.push(resObj.spell.mechanics.advancement[e].valueObject.id);
                                }
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
                function insertCharts_both(resObj, callback) {
                    if (resObj.spell.hasAnyTypeOfChart) {
                        sql = 'INSERT INTO adm_core_chart';
                        sql += ' ("title", "typeId")';
                        sql += ' VALUES ';
                        vals = [];
                        results = [];
                        var addComma = false;
                        first = 1;
                        second = 2;
                        if (resObj.spell.charts && resObj.spell.charts.length != 0) {
                            for (var e = 0; e < resObj.spell.charts.length; e++) {
                                if (addComma) {
                                    sql += ', ';
                                }
                                sql += ' ($' + first.toString() + ', $' + second.toString() + ')';
                                vals.push(resObj.spell.charts[e].title);
                                vals.push(resObj.spell.charts[e].type.id);
                                first = first + 2;
                                second = second + 2;
                                addComma = true;
                            }
                        }
                        sql += ' returning id AS "chartId", title;';
                        var query = client.query(new pg.Query(sql, vals));
                        query.on('row', function(row) {
                            results.push(row);
                        });
                        query.on('end', function() {
                            done();
                            for (var e = 0; e < results.length; e++) {
                                for (var d = 0; d < resObj.spell.charts.length; d++) {
                                    if (results[e].title == resObj.spell.charts[d].title) {
                                        resObj.spell.charts[d].id = results[e].chartId;
                                    }
                                }
                            }
                            return callback(null, resObj);
                        });
                    } else {
                        return callback(null, resObj);
                    }
                },
                function insertChartDefinitions_standard(resObj, callback) {
                    if (resObj.spell.hasStandardCharts) {
                        sql = 'INSERT INTO adm_def_chart';
                        sql += ' ("chartId", "columnCount", "rowCount")';
                        sql += ' VALUES ';
                        first = 1;
                        second = 2;
                        third = 3;
                        vals = [];
                        results = [];
                        for (var e = 0; e < resObj.spell.charts.length; e++) {
                            if (e != 0) {
                                sql += ', ';
                            }
                            sql += ' ($' + first.toString() + ', $' + second.toString() + ', $' + third.toString() + ')';
                            first = first + 3;
                            second = second + 3;
                            third = third + 3;
                            vals.push(resObj.spell.charts[e].id);
                            vals.push(resObj.spell.charts[e].columnCount);
                            vals.push(resObj.spell.charts[e].rowCount);
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
                function insertChartDescriptions_both(resObj, callback) {
                    if (resObj.spell.hasAnyTypeOfChart) {
                        var hasDescriptions = false;
                        for (var e = 0; e < resObj.spell.charts.length; e++) {
                            if (resObj.spell.charts[e].description && resObj.spell.charts[e].description.length != 0) {
                                hasDescriptions = true;
                                break;
                            }
                        }
                        var includeComma = false;
                        if (hasDescriptions) {
                            sql = 'INSERT INTO adm_core_description';
                            sql += ' ("itemId", "description", "descriptionTypeId")';
                            sql += ' VALUES ';
                            first = 1;
                            second = 2;
                            third = 3;
                            vals = [];
                            results = [];
                            for (var e = 0; e < resObj.spell.charts.length; e++) {
                                if (resObj.spell.charts[e].description && resObj.spell.charts[e].description.length != 0) {
                                    if (includeComma) {
                                        sql += ', ';
                                    }
                                    sql += ' ($' + first.toString() + ', $' + second.toString() + ', ' + third.toString() + ')';
                                    vals.push(resObj.spell.charts[e].id);
                                    vals.push(resObj.spell.charts[e].description);
                                    vals.push(itemtypes.DESCRIPTION.CHART);
                                    first = first + 3;
                                    second = second + 3;
                                    third = third + 3;
                                    includeComma = true;
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
                    } else {
                        return callback(null, resObj);
                    }
                },
                function assignExistentDiceId(resObj, callback) {
                    results = [];
                    vals = [];
                    if (resObj.spell.hasDieChart) {
                        sql = 'SELECT dice.*';
                        sql += ' FROM adm_core_dice dice';
                        var first = 1;
                        var second = 2;
                        for (var e = 0; e < resObj.spell.charts.length; e++) {
                            sql += (e == 0) ? ' WHERE' : ' OR';
                            sql += ' (dice."dieCount" = $' + first.toString();
                            sql += ' AND dice."dieType" = $' + second.toString() + ')';
                            vals.push(resObj.spell.charts[e].dice.dieCount);
                            vals.push(resObj.spell.charts[e].dice.dieType);
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
                                for (var j = 0; j < resObj.spell.charts.length; j++) {
                                    if (resObj.spell.charts[j].dice.dieCount == results[i].dieCount &&
                                       resObj.spell.charts[j].dice.dieType == results[i].dieType) {
                                        resObj.spell.charts[j].dice.id = results[i].id;
                                    }
                                }
                            }
                            return callback(null, resObj);
                        });
                    } else {
                        return callback(null, resObj);
                    }
                    
                },
                function insertChartDice_die(resObj, callback) {
                    if (resObj.spell.hasDieChart) {
                        results = [];
                        vals = [];
                        sql = 'INSERT INTO adm_def_chart_dice';
                        sql += ' ("chartId", "diceId")';
                        sql += ' VALUES ';
                        first = 1;
                        second = 2;
                        for (var e = 0; e < resObj.spell.charts.length; e++) {
                            if (e != 0) {
                                sql += ', ';
                            }
                            sql += '($' + first.toString() + ', $' + second.toString() + ')';
                            first = first + 2;
                            second = second + 2;
                            vals.push(resObj.spell.charts[e].id);
                            vals.push(resObj.spell.charts[e].dice.id);
                        }
                        var query = client.query(new pg.Query(sql, vals));
                        query.on('row', function(row) {
                            results.push(row);
                        });
                        query.on('end', function() {
                            done();
                            for (var i = 0; i < results.length; i++) {
                                for (var j = 0; j < resObj.spell.charts.length; j++) {
                                    if (results[i].title == resObj.spell.charts[j].title) {
                                        resObj.spell.charts[j].id = results[i].chartId;
                                    }
                                }
                            }
                            return callback(null, resObj);
                        });
                    } else {
                        return callback(null, resObj);
                    }
                },
                function insertChartDiceEntry_die(resObj, callback) {
                    if (resObj.spell.hasDieChart) {
                        results = [];
                        vals = [];
                        sql = 'INSERT INTO adm_def_chart_dice_entry';
                        sql += ' ("chartId", "minimum", "maximum", "description")';
                        sql += ' VALUES';
                        var first = 1;
                        var second = 2;
                        var third = 3;
                        var fourth = 4;
                        var addComma = false;
                        for (var i = 0; i < resObj.spell.charts.length; i++) {
                            for (var j = 0; j < resObj.spell.charts[i].entries.length; j++) {
                                if (addComma) {
                                    sql += ', ';
                                }
                                sql += ' ($' + first.toString() + ', $' + second.toString() + ', $' + third.toString() + ', $' + fourth.toString() + ')';
                                vals.push(resObj.spell.charts[i].id);
                                vals.push(resObj.spell.charts[i].entries[j].minimum);
                                vals.push(resObj.spell.charts[i].entries[j].maximum);
                                vals.push(resObj.spell.charts[i].entries[j].description);
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
                function insertChartColumns_standard(resObj, callback) {
                    if (resObj.spell.hasStandardCharts) {
                        vals = [];
                        results = [];
                        sql = 'INSERT INTO adm_def_chart_column';
                        sql += ' ("chartId", "columnIndex", "title")';
                        sql += ' VALUES ';
                        first = 1;
                        second = 2;
                        third = 3;
                        for (var c = 0; c < resObj.spell.charts.length; c++) {
                            for (var e = 0; e < resObj.spell.charts[c].columns.length; e ++) {
                                if (!(c == 0 && e == 0)) {
                                    sql += ', ';
                                }
                                sql += ' ($' + first.toString() + ', $' + second.toString() + ', $' + third.toString() + ')';
                                first = first + 3;
                                second = second + 3;
                                third = third + 3;
                                vals.push(resObj.spell.charts[c].id);
                                vals.push(resObj.spell.charts[c].columns[e].columnIndex);
                                vals.push(resObj.spell.charts[c].columns[e].title);
                            }
                        }
                        sql += ' returning "chartId", "columnIndex", id AS "columnId";';
                        var query = client.query(new pg.Query(sql, vals));
                        query.on('row', function(row) {
                            results.push(row);
                        });
                        query.on('end', function() {
                            done();
                            for (var r = 0; r < results.length; r++) {
                                for (var c = 0; c < resObj.spell.charts.length; c++) {
                                    for (var e = 0; e < resObj.spell.charts[c].columns.length; e++) {
                                        if (results[r].chartId == resObj.spell.charts[c].id) {
                                            if (results[r].columnIndex == resObj.spell.charts[c].columns[e].columnIndex) {
                                                resObj.spell.charts[c].columns[e].id = results[r].columnId;
                                            }
                                        }
                                    }
                                }
                            }
                            return callback(null, resObj);
                        });
                    } else {
                        return callback(null, resObj);
                    }
                },
                function insertChartRows_standard(resObj, callback) {
                    if (resObj.spell.hasStandardCharts) {
                        vals = [];
                        results = [];
                        var hasRowTitles = false;
                        for (var c = 0; c < resObj.spell.charts.length; c++) {
                            for (var r = 0; r < resObj.spell.charts[c].rows.length; r++) {
                                if (resObj.spell.charts[c].rows[r].title && resObj.spell.charts[c].rows[r].title.length != 0) {
                                    hasRowTitles = true;
                                }
                            }
                        }
                        if (hasRowTitles) {
                            sql = 'INSERT INTO adm_def_chart_row';
                            sql += ' ("chartId", "rowIndex", "title")';
                            sql += ' VALUES ';
                            first = 1;
                            second = 2;
                            third = 3;
                            var addComma = false;
                            for (var c = 0; c < resObj.spell.charts.length; c++) {
                                for (var r = 0; r < resObj.spell.charts[c].rows.length; r++) {
                                    if (resObj.spell.charts[c].rows[r].title && resObj.spell.charts[c].rows[r].title.length != 0) {
                                        if (addComma) {
                                            sql += ', ';
                                        }
                                        sql += ' ($' + first.toString() + ', $' + second.toString() + ', $' + third.toString() + ')';
                                        first = first + 3;
                                        second = second + 3;
                                        third = third + 3;
                                        vals.push(resObj.spell.charts[c].id);
                                        vals.push(resObj.spell.charts[c].rows[r].rowIndex);
                                        vals.push(resObj.spell.charts[c].rows[r].title);
                                        
                                        addComma = true;
                                    }
                                }
                            }
                            sql += ' returning "chartId", "rowIndex", id AS "rowId";';
                            var query = client.query(new pg.Query(sql, vals));
                            query.on('row', function(row) {
                                results.push(row);
                            });
                            query.on('end', function() {
                                done();
                                for (var r = 0; r < results.length; r++) {
                                    for (var c = 0; c < resObj.spell.charts.length; c++) {
                                        for (var e = 0; e < resObj.spell.charts[c].rows.length; e++) {
                                            if (results[r].chartId == resObj.spell.charts[c].id) {
                                                if (results[r].rowIndex == resObj.spell.charts[c].rows[e].rowIndex) {
                                                    resObj.spell.charts[c].rows[e].id = results[r].rowId;
                                                }
                                            }
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
                function insertChartEntries_standard(resObj, callback) {
                    if (resObj.spell.hasStandardCharts) {
                        vals = [];
                        results = [];
                        sql = 'INSERT INTO adm_def_chart_entry';
                        sql += ' ("chartId", "columnIndex", "rowIndex", "description")';
                        sql += ' VALUES ';
                        first = 1;
                        second = 2;
                        third = 3;
                        fourth = 4;
                        for (var c = 0; c < resObj.spell.charts.length; c++) {
                            for (var e = 0; e < resObj.spell.charts[c].entries.length; e++) {
                                if(!(c == 0 && e == 0)) {
                                    sql += ', ';
                                }
                                sql += ' ($' + first.toString() + ', $' + second.toString() + ', $' + third.toString() + ', $' + fourth.toString() + ')';
                                first = first + 4;
                                second = second + 4;
                                third = third + 4;
                                fourth = fourth + 4;
                                vals.push(resObj.spell.charts[c].id);
                                vals.push(resObj.spell.charts[c].entries[e].columnIndex);
                                vals.push(resObj.spell.charts[c].entries[e].rowIndex);
                                vals.push(resObj.spell.charts[c].entries[e].description);
                            }
                        }
                        sql += 'returning "chartId", "rowIndex", "columnIndex", id AS "entryId";';
                        var query = client.query(new pg.Query(sql, vals));
                        query.on('row', function(row) {
                            results.push(row);
                        });
                        query.on('end', function() {
                            done();
                            for (var r = 0; r < results.length; r++) {
                                for (var c = 0; c < resObj.spell.charts.length; c++) {
                                    for (var e = 0; e < resObj.spell.charts[c].entries.length; e++) {
                                        if (results[r].chartId == resObj.spell.charts[c].id) {
                                            if (results[r].rowIndex == resObj.spell.charts[c].entries[e].rowIndex && results[r].columnIndex == resObj.spell.charts[c].entries[e].columnIndex) {
                                                resObj.spell.charts[c].entries[e].id = results[r].entryId;
                                            }
                                        }
                                    }
                                }
                            }
                            return callback(null, resObj);
                        });
                    } else {
                        return callback(null, resObj);
                    }
                },
                function insertChartLinks_both(resObj, callback) {
                    if (resObj.spell.hasAnyTypeOfChart) {
                        vals = [];
                        results = [];
                        sql = 'INSERT INTO adm_link_chart';
                        sql += ' ("referenceId", "chartId", "orderIndex")';
                        sql += ' VALUES ';
                        first = 1;
                        second = 2;
                        third = 3;
                        addComma = false
                        for (var c = 0; c < resObj.spell.charts.length; c++) {
                            if (addComma) {
                                sql += ', ';
                            }
                            sql += '($' + first.toString() + ', $' + second.toString() + ', $' + third.toString() + ')';
                            first = first + 3;
                            second = second + 3;
                            third = third + 3;
                            vals.push(resObj.spell.id);
                            vals.push(resObj.spell.charts[c].id);
                            vals.push(resObj.spell.charts[c].orderIndex);
                            addComma = true;
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
                function insertSupplementalDescription(resObj, callback) {
                    if (resObj.spell.supplementalDescriptions && resObj.spell.supplementalDescriptions.length != 0) {
                        vals = [];
                        results = [];
                        sql = 'INSERT INTO adm_core_description';
                        sql += ' ("itemId", "description", "descriptionTypeId")';
                        sql += ' VALUES ';
                        first = 1;
                        second = 2;
                        third = 3;
                        for (var d = 0; d < resObj.spell.supplementalDescriptions.length; d++) {
                            if (d != 0) {
                                sql += ', ';
                            }
                            sql += '($' + first.toString() + ', $' + second.toString() + ', $' + third.toString() + ')';
                            first = first + 3;
                            second = second + 3;
                            third = third + 3;
                            vals.push(resObj.spell.id);
                            vals.push(resObj.spell.supplementalDescriptions[d].description);
                            vals.push(itemtypes.DESCRIPTION.SUPPLEMENTAL_DESCRIPTION);
                        }
                        sql += ' returning "description", id AS "descriptionId"';
                        var query = client.query(new pg.Query(sql, vals));
                        query.on('row', function(row) {
                            results.push(row);
                        });
                        query.on('end', function() {
                            done();
                            for (var r= 0; r < results.length; r++) {
                                for (var d = 0; d < resObj.spell.supplementalDescriptions.length; d++) {
                                    if (results[r].description == resObj.spell.supplementalDescriptions[d].description) {
                                        resObj.spell.supplementalDescriptions[d].id = results[r].descriptionId;
                                    }
                                }
                            }
                            return callback(null, resObj);
                        });
                    } else {
                        return callback(null, resObj);
                    }
                },
                function insertSupplementalDescriptionDef(resObj, callback) {
                    if (resObj.spell.supplementalDescriptions && resObj.spell.supplementalDescriptions.length != 0) {
                        vals = [];
                        results = [];
                        first = 1;
                        second = 2;
                        third = 3;
                        sql = 'INSERT INTO adm_def_supplemental_description';
                        sql += ' ("descriptionId", "title", "orderIndex")';
                        sql += ' VALUES ';
                        for (var d = 0; d < resObj.spell.supplementalDescriptions.length; d++) {
                            if (d != 0) {
                                sql += ', ';
                            }
                            sql += ' ($' + first.toString() + ', $' + second.toString() + ', $' + third.toString() + ')';
                            first = first + 3;
                            second = second + 3;
                            third = third + 3;
                            vals.push(resObj.spell.supplementalDescriptions[d].id);
                            vals.push(resObj.spell.supplementalDescriptions[d].title);
                            vals.push(resObj.spell.supplementalDescriptions[d].orderIndex);
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
    app.get('/api/adm/spells', function(req, res) {
        var results = [];
        var vals = [];
        pool.connect(function(err, client, done) {
            if (err) {
                done();
                console.error(err);
                return res.status(500).json({ success: false, data: err});
            }
            sql = 'SELECT i.id, i."itemName" AS name';
            sql += ', spell.level   ';
            sql += ', description.description   ';
            sql += ', spell."isRitual" ';
            sql += ', \'[]\' AS "supplementalDescriptions"   ';
            sql += ', higherleveldesc.description AS "atHigherLevels"   ';
            sql += ',  CASE WHEN basedmgdice.id IS NULL AND attrolltype.id IS NULL AND condition.id IS NULL THEN \'{}\' ELSE json_build_object(';
            sql += '    \'dice\', get_dice(basedmgdice.id)       ';
            sql += '    , \'type\', json_build_object(';
            sql += '        \'name\', dmgtype."itemName", \'id\', dmgtype."id"';
            sql += '    )       ';
            sql += '    , \'improvement\', json_build_object(';
            sql += '        \'dice\', get_dice(improvedmgdice.id)';
            sql += '        , \'levelCount\', dmgbase."improvementLevelCount"';
            sql += '        , \'projectileCount\', dmgbase."improvementProjectileCount"';
            sql += '    )';
            sql += '    , \'attackRollType\', json_build_object(';
            sql += '        \'id\', attrolltype."id"';
            sql += '        , \'name\', attrolltype."itemName"';
            sql += '    )';
            sql += '    , \'condition\', json_build_object(';
            sql += '        \'id\', condition."id"';
            sql += '        , \'name\', condition."itemName"';
            sql += '    )';
            sql += '    , \'maximum\', json_build_object(';
            sql += '        \'dice\', get_dice(dmgbase."maximumDamageDiceId")';
            sql += '    )';
            sql += '    , \'abilityScore\', json_build_object(';
            sql += '        \'id\', abilityscore."id"';
            sql += '        , \'name\', abilityscore."itemName"';
            sql += '    )';
            sql += '    , \'projectileCount\', dmgbase."projectileCount"';
            sql += '    , \'supplemental\', (';
            sql += '        SELECT r.damage_groups';
            sql += '        FROM (';
            sql += '            SELECT json_agg(group_row) AS damage_groups, d.id';
            sql += '            FROM adm_core_item d';
            sql += '            LEFT OUTER JOIN (';
            sql += '                SELECT suppdmg."referenceId"';
            sql += '                , json_build_object(\'id\', dmgtype.id, \'name\', dmgtype."itemName") AS "type"';
            sql += '                , json_build_object(\'id\', ability.id, \'name\', ability."itemName") AS "abilityScore"';
            sql += '                , get_dice(suppdmg."diceId") AS "dice"';
            sql += '                FROM adm_link_supplemental_damage suppdmg';
            sql += '                LEFT OUTER JOIN adm_core_item dmgtype ON dmgtype.id = suppdmg."damageTypeId"';
            sql += '                LEFT OUTER JOIN adm_core_item ability ON ability.id = suppdmg."abilityScoreModifierId"';
            sql += '            ) group_row ON (group_row."referenceId" = d.id)';
            sql += '            GROUP BY d.id';
            sql += '        ) r (damage_groups, id) WHERE id = i.id';
            sql += '    )';
            sql += ') END AS "damage" ';
            sql += ', CASE WHEN count(saveability.id) = 0 THEN \'{}\' ELSE json_build_object(';
            sql += '    \'abilityScore\', json_build_object(';
            sql += '        \'id\', saveability.id, \'name\', saveability."itemName"';
            sql += '    )';
            sql += '    , \'effect\', json_build_object(';
            sql += '        \'id\', saveeffect.id, \'name\', saveeffect."itemName"';
            sql += '    )';
            sql += ')  END  AS "savingThrow"   ';
            sql += ', json_build_object(';
            sql += '    \'id\', school.id, \'name\', school."itemName"';
            sql += ') AS school   ';
            sql += ', json_build_object(';
            sql += '    \'id\', duration.id, \'name\', duration."itemName"';
            sql += ') AS duration   ';
            sql += ', json_build_object(';
            sql += '    \'id\', range.id, \'name\', range."itemName"';
            sql += ') AS range   ';
            sql += ', json_build_object(';
            sql += '    \'id\', casting.id, \'name\', casting."itemName"';
            sql += ') AS "castingTime"   ';
            sql += ', json_agg(';
            sql += '    (';
            sql += '        SELECT x FROM (';
            sql += '            SELECT comp.id, comp."itemName" AS name, lnkcomp.description';
            sql += '        ) x';
            sql += '    )';
            sql += ') AS "components"   ';
            sql += ', json_build_object(';
            sql += '    \'id\', resource.id, \'name\', resource."itemName"';
            sql += ') AS "resource"   ';
            sql += ', json_build_object(';
            sql += '    \'base\', (';
            sql += '        SELECT r.mechanics FROM (';
            sql += '            SELECT json_agg(mechanic_row) AS mechanics,';
            sql += '            d.id FROM adm_core_item d LEFT OUTER JOIN (';
            sql += '                SELECT ml."referenceId", ml.value';
            sql += '                , ml.id';
            sql += '                , json_build_object(';
            sql += '                    \'id\', targ.id, \'name\', targ."itemName"';
            sql += '                ) AS target';
            sql += '                , json_build_object(';
            sql += '                    \'id\', typ.id, \'name\', typ."itemName"';
            sql += '                ) AS type ';
            sql += '                , get_dice(ml."diceId") AS "dice"';
            sql += '                , json_build_object(';
            sql += '                    \'id\', valobj.id, \'name\', valobj."itemName"';
            sql += '                ) AS "vaueObject"';
            sql += '                FROM adm_link_mechanic ml';
            sql += '                INNER JOIN adm_core_item ii ON ii.id = ml."referenceId"';
            sql += '                LEFT OUTER JOIN adm_core_item targ ON targ.id = ml."targetId"';
            sql += '                LEFT OUTER JOIN adm_core_item typ ON typ.id = ml."typeId"';
            sql += '                LEFT OUTER JOIN adm_core_item valobj ON valobj.id = ml."valueObjectId"';
            sql += '            ) mechanic_row ON (mechanic_row."referenceId" = d.id)';
            sql += '            GROUP BY d.id ';
            sql += '        ) r(mechanics, id) WHERE id = i.id)';
            sql += '    , \'advancement\', (';
            sql += '        SELECT r.mechanics';
            sql += '        FROM (';
            sql += '            SELECT';
            sql += '            json_agg(mechanic_row) AS mechanics';
            sql += '            , d.id ';
            sql += '            FROM adm_core_item d';
            sql += '            LEFT OUTER JOIN (';
            sql += '                SELECT ml."referenceId" AS "descriptionId", ml.value, ii."itemId" AS "referenceId"';
            sql += '                , ml.id';
            sql += '                , json_build_object(';
            sql += '                    \'id\', targ.id, \'name\', targ."itemName"';
            sql += '                ) AS target ';
            sql += '                , json_build_object(';
            sql += '                    \'id\', typ.id, \'name\', typ."itemName"';
            sql += '                ) AS type ';
            sql += '                , get_dice(ml."diceId") AS "dice"';
            sql += '                , json_build_object(';
            sql += '                    \'id\', valobj.id, \'name\', valobj."itemName"';
            sql += '                ) AS "vaueObject"';
            sql += '                FROM adm_link_mechanic ml ';
            sql += '                INNER JOIN adm_core_description ii ON ii.id = ml."referenceId"  ';
            sql += '                LEFT OUTER JOIN adm_core_item targ ON targ.id = ml."targetId"';
            sql += '                LEFT OUTER JOIN adm_core_item typ ON typ.id = ml."typeId"';
            sql += '                LEFT OUTER JOIN adm_core_item valobj ON valobj.id = ml."valueObjectId"';
            sql += '            ) mechanic_row ON (mechanic_row."referenceId" = d.id)';
            sql += '            GROUP BY d.id';
            sql += '        ) r(mechanics, id) WHERE id = i.id';
            sql += '    )';
            sql += ') AS mechanics ';
            sql += ', (';
            sql += '    SELECT construct_chart_object_arrays(i.id)';
            sql += ') AS charts ';
            sql += ', (';
            sql += '    SELECT CASE WHEN count(descriptions) = 0 THEN \'[]\' ELSE json_agg(descriptions) END ';
            sql += '    FROM (';
            sql += '        SELECT d."id", d."itemId", suppdesc.title, d.description, suppdesc."orderIndex"  ';
            sql += '        FROM adm_core_description d  ';
            sql += '        INNER JOIN adm_def_supplemental_description suppdesc ON suppdesc."descriptionId" = d.id  ';
            sql += '        WHERE d."itemId" = i.id  GROUP BY d."id", d."itemId", suppdesc.title, d.description, suppdesc."orderIndex"';
            sql += '    ) AS "descriptions"';
            sql += ')  AS "supplementalDescriptions"    ';
            sql += ' FROM adm_core_item i    ';
            sql += ' INNER JOIN adm_def_spell spell ON spell."spellId" = i.id';
            sql += ' INNER JOIN adm_core_item school ON school.id = spell."schoolId"';
            sql += ' INNER JOIN adm_core_item duration ON duration.id = spell."durationId"';
            sql += ' INNER JOIN adm_core_item range ON range.id = spell."rangeId"';
            sql += ' INNER JOIN adm_core_item casting ON casting.id = spell."castingTimeId" ';
            sql += ' LEFT OUTER JOIN adm_core_description description ON (description."itemId" = i.id AND description."descriptionTypeId" = $1)';
            sql += ' LEFT OUTER JOIN adm_link_spell_component lnkcomp ON lnkcomp."referenceId" = i.id';
            sql += ' LEFT OUTER JOIN adm_core_item comp ON comp.id = lnkcomp."componentId" ';
            sql += ' LEFT OUTER JOIN adm_core_description higherleveldesc ON (higherleveldesc."itemId" = i.id AND higherleveldesc."descriptionTypeId" = $2) ';
            sql += ' INNER JOIN adm_core_item resource ON resource.id = i."resourceId"   ';
            sql += ' LEFT OUTER JOIN adm_def_spell_saving_throw save ON save."spellId" = i.id  ';
            sql += ' LEFT OUTER JOIN adm_core_item saveability ON saveability.id = save."abilityScoreId"  ';
            sql += ' LEFT OUTER JOIN adm_def_damage dmg ON dmg."referenceId" = i.id ';
            sql += ' LEFT OUTER JOIN adm_def_spell_damage dmgbase ON dmgbase."spellId" = i.id   ';
            sql += ' LEFT OUTER JOIN adm_core_dice basedmgdice ON basedmgdice.id = dmg."diceId"';
            sql += ' LEFT OUTER JOIN adm_core_item dmgtype ON dmgtype.id = dmg."damageTypeId" ';
            sql += ' LEFT OUTER JOIN adm_core_dice improvedmgdice ON improvedmgdice.id = dmgbase."improvementDiceId" ';
            sql += ' LEFT OUTER JOIN adm_core_item attrolltype ON attrolltype.id = dmgbase."attackRollTypeId"';
            sql += ' LEFT OUTER JOIN adm_core_item condition ON condition.id = dmgbase."conditionId"'
            sql += ' LEFT OUTER JOIN adm_core_item abilityscore ON abilityscore.id = dmg."abilityScoreModifierId"';
            sql += ' LEFT OUTER JOIN adm_core_item saveeffect ON saveeffect.id = save."effectId"';
            sql += ' GROUP BY i.id, i."itemName", spell.level   ';
            sql += ', school.id, school."itemName"   ';
            sql += ', duration.id, duration."itemName"   ';
            sql += ', range.id, range."itemName"   ';
            sql += ', casting.id, casting."itemName"   ';
            sql += ', description.description   ';
            sql += ', higherleveldesc.description   ';
            sql += ', resource.id, resource."itemName"   ';
            sql += ', saveability.id, saveability."itemName"';
            sql += ', dmgtype.id, dmgtype."itemName" ';
            sql += ', basedmgdice."id", basedmgdice."dieCount", basedmgdice."dieType"   ';
            sql += ', improvedmgdice.id  ';
            sql += ', spell."isRitual" ';
            sql += ', attrolltype.id, attrolltype."itemName"';
            sql += ', condition.id, condition."itemName"';
            sql += ', abilityscore.id, abilityscore."itemName"';
            sql += ', dmgbase."maximumDamageDiceId", dmgbase."improvementLevelCount"';
            sql += ', dmgbase."projectileCount", dmgbase."improvementProjectileCount"';
            sql += ', saveeffect.id, saveeffect."itemName"';
            sql += ' ORDER BY i."itemName"';
            vals = [
                itemtypes.DESCRIPTION.GENERAL,
                itemtypes.DESCRIPTION.AT_HIGHER_LEVELS
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
                            if (results[t].charts[x].columns && results[t].charts[x].columns.length != 0) {
                                results[t].charts[x].columns = results[t].charts[x].columns.sort(function (a, b) {
                                    return a.columnIndex - b.columnIndex;
                                });
                            }
                            results[t].charts[x].entries = results[t].charts[x].entries.sort(function(a, b) {
                                return a.rowIndex - b.rowIndex || a.columnIndex - b.columnIndex;
                            });
                            if(results[t].charts[x].rows && results[t].charts[x].rows.length != 0) {
                                results[t].charts[x].rows = results[t].charts[x].rows.sort(function(a,b) {
                                    return a.rowIndex - b.rowIndex;
                                });
                            } else {
                                var compareVal = -1;
                                var newIndex = 0;
                                results[t].charts[x].rows = [];
                                for (var q = 0; q < results[t].charts[x].entries.length; q++) {
                                    if (compareVal != results[t].charts[x].entries[q].rowIndex) {
                                        compareVal = results[t].charts[x].entries[q].rowIndex;
                                        results[t].charts[x].rows.push({
                                            id: -1 * newIndex,
                                            title: '',
                                            rowIndex: newIndex
                                        })
                                        newIndex++;
                                    }
                                }
                            }
                        }
                    }
                    if (results[t].damage.dice === undefined) {
                        results[t].damage = {};
                        results[t].damage.dice = {rendered: ''};
                        results[t].damage.improvement = {dice: {rendered: ''}};
                        results[t].damage.type = {};
                    }
                    if (results[t].mechanics.base[0] == null && results[t].mechanics.advancement[0] == null) {
                        delete results[t].mechanics;
                    } else {
                        if (results[t].mechanics.base[0] == null) {
                            delete results[t].mechanics.base;
                        }
                        if (results[t].mechanics.advancement[0] == null) {
                            delete results[t].mechanics.advancement;
                        }
                    }
                    results[t].components = results[t].components.sort(function (a, b) {
                        if (a.name > b.name) return -1;
                        if (a.name < b.name) return 1;
                        return 0;
                    });
                }
                return res.json(results);
            });
        });
    });
};
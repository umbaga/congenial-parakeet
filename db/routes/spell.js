module.exports = function(app, pg, async, pool) {
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
                    sql += ' VALUES ($1, $2, 119) returning id AS "spellId";';
                    vals = [req.body.spell.name, req.body.spell.resource.id];
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
                        sql += ' VALUES ($1, $2, 122) returning id AS "atHigherLevelsId";';
                        vals = [resObj.spell.id, resObj.spell.atHigherLevels];
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
                    console.log('01');
                    if (resObj.spell.damage && resObj.spell.damage.dice.dieCount && resObj.spell.damage.dice.dieCount != 0) {
                        sql = 'with vals as ';
                        sql += ' (';
                        sql += 'select $1 :: bigint as "dieCount", $2 :: bigint as "dieType"';
                        sql += ' UNION ';
                        sql += 'select $3 :: bigint as "dieCount", $4 :: bigint as "dieType"';
                        sql += ')';
                        sql += ' insert into adm_core_dice ("dieCount", "dieType") ';
                        sql += ' select v."dieCount", v."dieType" from vals as v ';
                        sql += ' where not exists (select * from adm_core_dice as t where t."dieCount" = v."dieCount" and t."dieType" = v."dieType")';
                        vals = [
                            resObj.spell.damage.dice.dieCount, 
                            resObj.spell.damage.dice.dieType,
                            resObj.spell.damage.improvement.dice.dieCount,
                            resObj.spell.damage.improvement.dice.dieType
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
                function assignDamageIds(resObj, callback) {
                    console.log('02');
                    if (resObj.spell.damage && resObj.spell.damage.dice.dieCount && resObj.spell.damage.dice.dieCount != 0) {
                        sql = 'SELECT * FROM adm_core_dice';
                        sql += ' WHERE ("dieCount" = $1 AND "dieType" = $2)';
                        sql += ' OR ("dieCount" = $3 AND "dieType" = $4)';
                        vals = [
                            resObj.spell.damage.dice.dieCount, 
                            resObj.spell.damage.dice.dieType,
                            resObj.spell.damage.improvement.dice.dieCount,
                            resObj.spell.damage.improvement.dice.dieType
                        ];
                        var query = client.query(new pg.Query(sql, vals));
                        query.on('row', function(row) {
                            results.push(row);
                        });
                        query.on('end', function() {
                            done();
                            for (var e = 0; e < results.length; e++) {
                                if (resObj.spell.damage.dice.dieType == results[e].dieType && resObj.spell.damage.dice.dieCount == results[e].dieCount) {
                                    resObj.spell.damage.dice.id = results[e].id;
                                }
                                if (resObj.spell.damage.improvement.dice.dieType == results[e].dieType && resObj.spell.damage.improvement.dice.dieCount == results[e].dieCount) {
                                    resObj.spell.damage.improvement.dice.id = results[e].id;
                                }
                            }
                            return callback(null, resObj);
                        });
                    } else {
                        return callback(null, resObj);
                    }
                },
                function insertDamage(resObj, callback) {
                    console.log('03');
                    if (resObj.spell.damage && resObj.spell.damage.dice && resObj.spell.damage.dice.dieCount && resObj.spell.damage.dice.dieCount != 0) {
                        results = [];
                        vals = [];
                        sql = 'INSERT INTO adm_def_damage';
                        sql += ' ("referenceId", "diceId", "damageTypeId")';
                        sql += ' VALUES ($1, $2, $3)';
                        vals = [resObj.spell.id, resObj.spell.damage.dice.id, resObj.spell.damage.type.id];
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
                    console.log('04');
                    if (resObj.spell.damage && resObj.spell.damage.improvement && resObj.spell.damage.improvement.dice && resObj.spell.damage.improvement.dice.dieCount != 0) {
                        results = [];
                        vals = [];
                        sql = 'INSERT INTO adm_def_spell_damage';
                        sql += ' ("spellId", "improvementDiceId")';
                        sql += ' VALUES ($1, $2)';
                        vals = [resObj.spell.id, resObj.spell.damage.improvement.dice.id];
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
                    console.log('05');
                    if (resObj.spell.needSavingThrow) {
                        sql = 'INSERT INTO adm_def_spell_saving_throw';
                        sql += ' ("spellId", "abilityScoreId")';
                        sql += ' VALUES ($1, $2)';
                        vals = [resObj.spell.id, resObj.spell.savingThrow.abilityScore.id];
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
                    if (resObj.mechanics && resObj.mechanics.base && resObj.mechanics.base.length != 0) {
                        sql = 'INSERT INTO adm_link_mechanic';
                        sql += ' ("referenceId", "targetId", "typeId", "value")';
                        sql += ' VALUES ';
                        var first = 1;
                        var second = 2;
                        var third = 3;
                        var fourth = 4;
                        vals = [];
                        for (var e = 0; e < resObj.mechanics.base.length; e++) {
                            if (e != 0) {
                                sql += ', ';
                            }
                            sql += ' ($' + first.toString() + ', $' + second.toString() + ', $' + third.toString() + ', $' + fourth.toString() + ')';
                            first = first + 4;
                            second = second + 4;
                            third = third + 4;
                            fourth = fourth + 4;
                            vals.push(resObj.spell.id);
                            vals.push(resObj.spell.mechanics.base[e].target.id);
                            vals.push(resObj.spell.mechanics.base[e].type.id);
                            vals.push(resObj.spell.mechanics.base[e].value);
                        }
                        if (resObj.spell.atHigherLevelsId && resObj.spell.atHigherLevelsId != 0) {
                            if (resObj.mechanics.advancement && resObj.mechanics.advancement.length != 0) {
                                for (var e = 0; e < resObj.spell.mechanics.advancement.length; e++) {
                                    sql += ', ($' + first.toString() + ', $' + second.toString() + ', $' + third.toString() + ', $' + fourth.toString() + ')';
                                    first = first + 4;
                                    second = second + 4;
                                    third = third + 4;
                                    fourth = fourth + 4;
                                    vals.push(resObj.spell.atHigherLevelsId);
                                    vals.push(resObj.spell.advancement.base[e].target.id);
                                    vals.push(resObj.spell.advancement.base[e].type.id);
                                    vals.push(resObj.spell.advancement.base[e].value);
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
                function insertCharts(resObj, callback) {
                    if (resObj.spell.charts && resObj.spell.charts.standard.length != 0) {
                        sql = 'INSERT INTO adm_core_chart';
                        sql += ' ("title", "typeId")';
                        sql += ' VALUES ';
                        vals = [];
                        results = [];
                        for (var e = 0; e < resObj.spell.charts.standard.length; e++) {
                            if (e != 0) {
                                sql += ', ';
                            }
                            first = e + 1;
                            sql += ' ($' + first.toString() + ', 904)';
                            vals.push(resObj.spell.charts[e].title);
                        }
                        sql += ' returning id AS "chartId", title;';
                        var query = client.query(new pg.Query(sql, vals));
                        query.on('row', function(row) {
                            results.push(row);
                        });
                        query.on('end', function() {
                            done();
                            for (var e = 0; e < results.length; e++) {
                                for (var d = 0; d < resObj.spell.charts.standard.length; d++) {
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
                function insertChartDefinitions(resObj, callback) {
                    if (resObj.spell.charts && resObj.spell.charts.standard.length != 0) {
                        sql = 'INSERT INTO adm_def_chart';
                        sql += ' ("chartId", "columnCount", "rowCount")';
                        sql += ' VALUES ';
                        first = 1;
                        second = 2;
                        third = 3;
                        vals = [];
                        results = [];
                        for (var e = 0; e < resObj.spell.charts.standard.length; e++) {
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
                function insertChartDescriptions(resObj, callback) {
                    if (resObj.spell.charts && resObj.spell.charts.standard.length != 0) {
                        var hasDescriptions = false;
                        for (var e = 0; e < resObj.spell.charts.standard.length; e++) {
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
                            vals = [];
                            results = [];
                            for (var e = 0; e < resObj.spell.charts.standard.length; e++) {
                                if (resObj.spell.charts[e].description && resObj.spell.charts[e].description.length != 0) {
                                    if (includeComma) {
                                        sql += ', ';
                                    }
                                    sql += ' ($' + first.toString() + ', $' + second.toString() + ', 907)';
                                    vals.push(resObj.spell.charts[e].id);
                                    vals.push(resObj.spell.charts[e].description);
                                    first = first + 2;
                                    second = second + 2;
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
                function insertChartColumns(resObj, callback) {
                    if (resObj.spell.charts && resObj.spell.charts.standard.length != 0) {
                        vals = [];
                        results = [];
                        sql = 'INSERT INTO adm_def_chart_column';
                        sql += ' ("chartId", "columnIndex", "title")';
                        sql += ' VALUES ';
                        first = 1;
                        second = 2;
                        third = 3;
                        for (var c = 0; c < resObj.spell.charts.standard.length; c++) {
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
                                for (var c = 0; c < resObj.spell.charts.standard.length; c++) {
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
                function insertChartRows(resObj, callback) {
                    if (resObj.spell.charts && resObj.spell.charts.standard.length != 0) {
                        vals = [];
                        results = [];
                        var hasRowTitles = false;
                        for (var c = 0; c < resObj.spell.charts.standard.length; c++) {
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
                            for (var c = 0; c < resObj.spell.charts.standard.length; c++) {
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
                                    for (var c = 0; c < resObj.spell.charts.standard.length; c++) {
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
                function insertChartEntries(resObj, callback) {
                    if (resObj.spell.charts && resObj.spell.charts.standard.length != 0) {
                        vals = [];
                        results = [];
                        sql = 'INSERT INTO adm_def_chart_entry';
                        sql += ' ("chartId", "columnIndex", "rowIndex", "description")';
                        sql += ' VALUES ';
                        first = 1;
                        second = 2;
                        third = 3;
                        fourth = 4;
                        for (var c = 0; c < resObj.spell.charts.standard.length; c++) {
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
                                for (var c = 0; c < resObj.spell.charts.standard.length; c++) {
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
                function insertChartLinks(resObj, callback) {
                    if (resObj.spell.charts && resObj.spell.charts.standard.length != 0) {
                        vals = [];
                        results = [];
                        sql = 'INSERT INTO adm_link_chart';
                        sql += ' ("referenceId", "chartId", "orderIndex")';
                        sql += ' VALUES ';
                        first = 1;
                        second = 2;
                        third = 3;
                        for (var c = 0; c < resObj.spell.charts.standard.length; c++) {
                            if (c != 0) {
                                sql += ', ';
                            }
                            sql += '($' + first.toString() + ', $' + second.toString() + ', $' + third.toString() + ')';
                            first = first + 3;
                            second = second + 3;
                            third = third + 3;
                            vals.push(resObj.spell.id);
                            vals.push(resObj.spell.charts[c].id);
                            vals.push(resObj.spell.charts[c].orderIndex);
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
                        for (var d = 0; d < resObj.spell.supplementalDescriptions.length; d++) {
                            if (d != 0) {
                                sql += ', ';
                            }
                            sql += '($' + first.toString() + ', $' + second.toString() + ', 944)';
                            first = first + 2;
                            second = second + 2;
                            vals.push(resObj.spell.id);
                            vals.push(resObj.spell.supplementalDescriptions[d].description);
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
        pool.connect(function(err, client, done) {
            if (err) {
                done();
                console.error(err);
                return res.status(500).json({ success: false, data: err});
            }
            sql = 'SELECT i.id, i."itemName" AS name, spell.level';
            sql += '  , description.description';
            sql += '  , spell."isRitual"';
            sql += ', \'[]\' AS "supplementalDescriptions"';
            sql += '  , higherleveldesc.description AS "atHigherLevels"';
            sql += '  ,  CASE WHEN basedmgdice.id IS NULL THEN \'{}\' ELSE json_build_object(';
            sql += '      \'dice\', get_dice(basedmgdice.id)';
            sql += '      , \'type\', json_build_object(\'name\', dmgtype."itemName", \'id\', dmgtype."id")';
            sql += '      , \'improvement\', json_build_object(\'dice\', get_dice(improvedmgdice.id))';
            sql += '  ) END AS "damage"';
            sql += '  , json_build_object(\'abilityScore\', json_build_object(\'id\', saveability.id, \'name\', saveability."itemName")) AS "savingThrow"';
            sql += '  , json_build_object(\'id\', school.id, \'name\', school."itemName") AS school';
            sql += '  , json_build_object(\'id\', duration.id, \'name\', duration."itemName") AS duration';
            sql += '  , json_build_object(\'id\', range.id, \'name\', range."itemName") AS range';
            sql += '  , json_build_object(\'id\', casting.id, \'name\', casting."itemName") AS "castingTime"';
            sql += '  , json_agg((SELECT x FROM (SELECT comp.id, comp."itemName" AS name, lnkcomp.description) x)) AS "components"';
            sql += '  , json_build_object(\'id\', resource.id, \'name\', resource."itemName") AS "resource"';
            sql += '  , json_build_object(\'base\', (SELECT r.mechanics';
            sql += '     FROM (';
            sql += '         SELECT ';
            sql += '             json_agg(mechanic_row) AS mechanics,';
            sql += '         	d.id';
            sql += '         FROM adm_core_item d';
            sql += '         LEFT OUTER JOIN (';
            sql += '         	SELECT ml."referenceId", ml.value';
            sql += '             , ml.id';
            sql += '             , json_build_object(\'id\', targ.id, \'name\', targ."itemName") AS target';
            sql += '             , json_build_object(\'id\', typ.id, \'name\', typ."itemName") AS type';
            sql += '             FROM adm_link_mechanic ml';
            sql += '             INNER JOIN adm_core_item ii ON ii.id = ml."referenceId"';
            sql += '             LEFT OUTER JOIN adm_core_item targ ON targ.id = ml."targetId"';
            sql += '             LEFT OUTER JOIN adm_core_item typ ON typ.id = ml."typeId"';
            sql += '         ) mechanic_row ON (mechanic_row."referenceId" = d.id)';
            sql += '         GROUP BY d.id';
            sql += '     ) r(mechanics, id) WHERE id = i.id),';
            sql += '                     \'advancement\', (SELECT r.mechanics';
            sql += '                             FROM (';
            sql += '                                 SELECT ';
            sql += '                                     json_agg(mechanic_row) AS mechanics,';
            sql += '                                     d.id';
            sql += '                                 FROM adm_core_item d';
            sql += '                                 LEFT OUTER JOIN (';
            sql += '                                     SELECT ml."referenceId" AS "descriptionId", ml.value, ii."itemId" AS "referenceId"';
            sql += '                                    , ml.id';
            sql += '                                     , json_build_object(\'id\', targ.id, \'name\', targ."itemName") AS target';
            sql += '                                     , json_build_object(\'id\', typ.id, \'name\', typ."itemName") AS type';
            sql += '                                     FROM adm_link_mechanic ml';
            sql += '                                     INNER JOIN adm_core_description ii ON ii.id = ml."referenceId"';
            sql += '                                     LEFT OUTER JOIN adm_core_item targ ON targ.id = ml."targetId"';
            sql += '                                     LEFT OUTER JOIN adm_core_item typ ON typ.id = ml."typeId"';
            sql += '                                 ) mechanic_row ON (mechanic_row."referenceId" = d.id)';
            sql += '                                 GROUP BY d.id';
            sql += '                             ) r(mechanics, id) WHERE id = i.id)) AS mechanics';
            sql += ', (SELECT construct_chart_object_arrays(i.id)) AS charts';
            /*sql += '	, (SELECT r.charts';
            sql += '    FROM (';
            sql += '        SELECT ';
            sql += '            json_agg(chart_row) AS charts,';
            sql += '        	d.id';
            sql += '        FROM adm_core_item d';
            sql += '        INNER JOIN adm_link_chart dc ON (dc."referenceId" = d.id)';
            sql += '        INNER JOIN (';
            sql += '            SELECT  ';
            sql += '                c.id,       ';
            sql += '                c.title,';
            sql += '            	cd.description,';
            sql += '            	spellchart."orderIndex",';
            sql += '                json_agg(cm) AS entries,';
            sql += '            	(SELECT json_agg(cc) ';
            sql += '                 FROM adm_def_chart_column cc ';
            sql += '                 WHERE cc."chartId" = c.id) AS "columns",';
            sql += '            	(SELECT json_agg(cr) ';
            sql += '                 FROM adm_def_chart_row cr ';
            sql += '                 WHERE cr."chartId" = c.id) AS "rows"';
            sql += '            FROM adm_core_chart c';
            sql += '            INNER JOIN adm_link_chart spellchart ON spellchart."chartId" = c.id';
            sql += '             INNER JOIN adm_def_chart_entry cm ON (cm."chartId" = c.id) ';
            sql += '            LEFT OUTER JOIN adm_core_description cd ON cd."itemId" = c.id';
            sql += '            GROUP BY c.id, spellchart."orderIndex", cd.description';
            sql += '            ORDER BY spellchart."orderIndex"';
            sql += '        ) chart_row ON (chart_row.id = dc."chartId")';
            sql += '        GROUP BY d.id';
            sql += '    ) r(charts, id) WHERE id = i.id) AS charts';*/
            sql += ', (SELECT json_agg(descriptions) FROM (SELECT d."id", d."itemId", suppdesc.title, d.description, suppdesc."orderIndex"';
            sql += ' FROM adm_core_description d';
            sql += ' INNER JOIN adm_def_supplemental_description suppdesc ON suppdesc."descriptionId" = d.id';
            sql += ' WHERE d."itemId" = i.id';
            sql += ' GROUP BY d."id", d."itemId", suppdesc.title, d.description, suppdesc."orderIndex") AS "descriptions")';
            sql += ' AS "supplementalDescriptions"';
            sql += '   FROM adm_core_item i';
            sql += '   INNER JOIN adm_def_spell spell ON spell."spellId" = i.id';
            sql += '   INNER JOIN adm_core_item school ON school.id = spell."schoolId"';
            sql += '   INNER JOIN adm_core_item duration ON duration.id = spell."durationId"';
            sql += '   INNER JOIN adm_core_item range ON range.id = spell."rangeId"';
            sql += '   INNER JOIN adm_core_item casting ON casting.id = spell."castingTimeId"';
            sql += '   LEFT OUTER JOIN adm_core_description description ON (description."itemId" = i.id AND description."descriptionTypeId" = 171)';
            sql += '   LEFT OUTER JOIN adm_link_spell_component lnkcomp ON lnkcomp."referenceId" = i.id';
            sql += '   LEFT OUTER JOIN adm_core_item comp ON comp.id = lnkcomp."componentId"';
            sql += '   LEFT OUTER JOIN adm_core_description higherleveldesc ON (higherleveldesc."itemId" = i.id AND higherleveldesc."descriptionTypeId" = 122)';
            sql += '   INNER JOIN adm_core_item resource ON resource.id = i."resourceId"';
            sql += '   LEFT OUTER JOIN adm_def_spell_saving_throw save ON save."spellId" = i.id';
            sql += '   LEFT OUTER JOIN adm_core_item saveability ON saveability.id = save."abilityScoreId"';
            sql += '   LEFT OUTER JOIN adm_def_damage dmg ON dmg."referenceId" = i.id';
            sql += '   LEFT OUTER JOIN adm_def_spell_damage dmgbase ON dmgbase."spellId" = i.id';
            sql += '   LEFT OUTER JOIN adm_core_dice basedmgdice ON basedmgdice.id = dmg."diceId"';
            sql += '   LEFT OUTER JOIN adm_core_item dmgtype ON dmgtype.id = dmg."damageTypeId"';
            sql += '   LEFT OUTER JOIN adm_core_dice improvedmgdice ON improvedmgdice.id = dmgbase."improvementDiceId"';
            sql += '   GROUP BY i.id, i."itemName", spell.level';
            sql += '  , school.id, school."itemName"';
            sql += '  , duration.id, duration."itemName"';
            sql += '  , range.id, range."itemName"';
            sql += '  , casting.id, casting."itemName"';
            sql += '  , description.description';
            sql += '  , higherleveldesc.description';
            sql += '  , resource.id, resource."itemName"';
            sql += '  , saveability.id, saveability."itemName"';
            sql += '  , dmgtype.id, dmgtype."itemName"';
            sql += '  , basedmgdice."id", basedmgdice."dieCount", basedmgdice."dieType"';
            sql += '  , improvedmgdice.id';
            sql += '  , spell."isRitual"';
            sql += '   ORDER BY i."itemName"';
            var query = client.query(new pg.Query(sql));
            query.on('row', function(row) {
                results.push(row);
            });
            query.on('end', function() {
                done();
                for (var t = 0; t < results.length; t++) {
                    if (results[t].charts && results[t].charts.standard && results[t].charts.standard.length != 0) {
                        results[t].charts.standard = results[t].charts.standard.sort(function (a, b) {
                            return a.orderIndex - b.orderIndex;
                        });
                        for (var x = 0; x < results[t].charts.standard.length; x++) {
                            results[t].charts.standard[x].columns = results[t].charts.standard[x].columns.sort(function (a, b) {
                                return a.columnIndex - b.columnIndex;
                            });
                            results[t].charts.standard[x].entries = results[t].charts.standard[x].entries.sort(function(a, b) {
                                return a.rowIndex - b.rowIndex || a.columnIndex - b.columnIndex;
                            });
                            if(results[t].charts.standard[x].rows && results[t].charts.standard[x].rows.length != 0) {
                                results[t].charts.standard[x].rows = results[t].charts.standard[x].rows.sort(function(a,b) {
                                    return a.rowIndex - b.rowIndex;
                                });
                            } else {
                                var compareVal = -1;
                                var newIndex = 0;
                                results[t].charts.standard[x].rows = [];
                                for (var q = 0; q < results[t].charts.standard[x].entries.length; q++) {
                                    if (compareVal != results[t].charts.standard[x].entries[q].rowIndex) {
                                        compareVal = results[t].charts.standard[x].entries[q].rowIndex;
                                        results[t].charts.standard[x].rows.push({
                                            id: -1 * newIndex,
                                            title: '',
                                            rowIndex: newIndex
                                        })
                                        newIndex++;
                                    }
                                }
                            }
                        }
                    } else {
                        delete results[t].charts;
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
                }
                return res.json(results);
            });
        });
    });
};
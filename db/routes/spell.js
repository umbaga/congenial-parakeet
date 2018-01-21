module.exports = function(app, pg, async, pool, itemtypes, common) {
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
                        var resObj = [req.params.id];
                        return callback(null, resObj);
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
                        return callback(null, resObj);
                    });
                },
                function deleteSupplementalDescription(resObj, callback) {
                    common.remove.supplementalDescriptions(req.params.id, function() {
                        return callback(null, resObj);
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
                        return callback(null, resObj);
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
                        return callback(null, resObj);
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
                        return callback(null, resObj);
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
                        return callback(null, resObj);
                    });
                },
                function deleteMechanicsTable(resObj, callback) {
                    common.remove.mechanics(req.params.id, function() {
                        return callback(null, resObj);
                    });
                },
                function deleteCharts(resObj, callback) {
                    common.remove.charts(req.params.id, function() {
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
                        var resObj = req.body;
                        resObj.spell.id = results[0].spellId;
                        resObj.spell.needDamage = false;
                        if (resObj.spell.damageType && resObj.spell.damageType.id != 0) {
                            resObj.spell.needDamage = true;
                        }
                        resObj.spell.needSavingThrow = false;
                        if (resObj.spell.savingThrow && resObj.spell.savingThrow.abilityScore && resObj.spell.savingThrow.abilityScore.name && resObj.spell.savingThrow.abilityScore.name.length != 0) {
                            resObj.spell.needSavingThrow = true;
                        }
                        resObj.spell.hasAnyTypeOfChart = false;
                        resObj.spell.hasDieChart = false;
                        resObj.spell.hasStandardCharts = false;
                        resObj.spell.hasSelectionChart = false;
                        resObj.spell.needsNewItemTypeFromChart = false;
                        if (resObj.spell.charts && resObj.spell.charts.length != 0) {
                            resObj.spell.hasAnyTypeOfChart = true;
                            for (var c = 0; c < resObj.spell.charts.length; c++) {
                                if (resObj.spell.charts[c].type.id == itemtypes.CHART.STANDARD) {
                                    resObj.spell.hasStandardCharts = true;
                                }
                                if (resObj.spell.charts[c].type.id == itemtypes.CHART.DIE_ROLL) {
                                    resObj.spell.hasDieChart = true;
                                }
                                if (resObj.spell.charts[c].type.id == itemtypes.CHART.SELECTION) {
                                    resObj.spell.hasSelectionChart = true;
                                    if (resObj.spell.charts[c].selectionItemType.id <= 0) {
                                        resObj.spell.needsNewItemTypeFromChart = true;
                                    }
                                }
                            }
                        }
                        resObj.spell.needDiceCheck = false;
                        if (resObj.spell.damage && resObj.spell.damage.dice && resObj.spell.damage.dice.dieCount != 0) {
                            resObj.spell.needDiceCheck = true;
                        }
                        /*for (var m = 0; m < resObj.spell.mechanics.advancement.length; m++) {
                            if (resObj.spell.mechanics.advancement[m].dice && resObj.spell.mechanics.advancement[m].dice.dieCount != 0) {
                                resObj.spell.needDiceCheck = true;
                            }
                        }
                        for (var m = 0; m < resObj.spell.mechanics.base.length; m++) {
                            if (resObj.spell.mechanics.base[m].dice && resObj.spell.mechanics.base[m].dice.dieCount != 0) {
                                resObj.spell.needDiceCheck = true;
                            }
                        }*/
                        for (var m = 0; m < resObj.spell.mechanics.length; m++) {
                            if (resObj.spell.mechanics[m].dice && resObj.spell.mechanics[m].dice.dieCount != 0) {
                                resObj.spell.needDiceCheck = true;
                            }
                        }
                        if (resObj.spell.damage && resObj.spell.damage.supplemental && resObj.spell.damage.supplemental.length != 0) {
                            for (var s = 0; s < resObj.spell.damage.supplemental.length; s++) {
                                if (resObj.spell.damage.supplemental[s].dice && resObj.spell.damage.supplemental[s].dice.dieCount != 0) {
                                    resObj.spell.needDiceCheck = true;
                                }
                            }
                        }
                        resObj.spell.hasDamage = false;
                        resObj.spell.hasImprovementDamage = false;
                        resObj.spell.hasMaximumDamage = false;
                        resObj.spell.hasSupplementalDamage = false;
                        if (resObj.spell.damage && resObj.spell.damage.dice.dieCount && resObj.spell.damage.dice.dieCount != 0) {
                            resObj.spell.hasDamage = true;
                            if (resObj.spell.damage.improvement && resObj.spell.damage.improvement.dice.dieCount && resObj.spell.damage.improvement.dice.dieCount != 0) {
                                resObj.spell.hasImprovementDamage = true;
                            }
                            if (resObj.spell.damage && resObj.spell.damage.maximum && resObj.spell.damage.maximum.dice.dieCount && resObj.spell.damage.maximum.dice.dieCount != 0) {
                                resObj.spell.hasMaximumDamage = true;
                            }
                            if (resObj.spell.damage && resObj.spell.damage.supplemental && resObj.spell.damage.supplemental.length != 0) {
                                resObj.spell.hasSupplementalDamage = true;
                            }
                        }
                        resObj.spell.hasMechanics = false;
                        resObj.spell.hasBaseMechanics = false;
                        resObj.spell.hasAdvancementMechanics = false;
                        if (resObj.spell.mechanics && resObj.spell.mechanics.length != 0) {
                            resObj.spell.hasMechanics = true;
                        }
                        /*if (resObj.spell.mechanics && resObj.spell.mechanics.base && resObj.spell.mechanics.base.length != 0) {
                            resObj.spell.hasBaseMechanics = true;
                            if (resObj.spell.atHigherLevelsId && resObj.spell.atHigherLevelsId != 0) {
                                if (resObj.spell.mechanics.advancement && resObj.spell.mechanics.advancement.length != 0) {
                                    resObj.spell.hasAdvancementMechanics = false;
                                }
                            }
                        }*/
                        resObj.spell.hasSupplementalDescriptions = false;
                        if (resObj.spell.supplementalDescriptions && resObj.spell.supplementalDescriptions.length != 0) {
                            resObj.spell.hasSupplementalDescriptions = true;
                        }
                        return callback(null, resObj);
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
                function manageDamageDice(resObj, callback) {
                    var diceArr = [];
                    if (resObj.spell.hasDamage) {
                        diceArr.push(resObj.spell.damage.dice);
                    }
                    if (resObj.spell.hasImprovementDamage) {
                        diceArr.push(resObj.spell.damage.improvement.dice);
                    }
                    if (resObj.spell.hasMaximumDamage) {
                        diceArr.push(resObj.spell.damage.maximum.dice);
                    }
                    if (resObj.spell.hasSupplementalDamage) {
                        for (var s = 0; s < resObj.spell.damage.supplemental.length; s++) {
                            diceArr.push(resObj.spell.damage.supplemental[s].dice);
                        }
                    }
                    if (diceArr.length != 0) {
                        common.getObjects.dice(diceArr, function(results) {
                            if (resObj.spell.hasDamage) {
                                resObj.spell.damage.dice = common.datatypes.dice.getObject(results.objectArray, resObj.spell.damage.dice);
                            }
                            if (resObj.spell.hasImprovementDamage) {
                                resObj.spell.damage.improvement.dice = common.datatypes.dice.getObject(results.objectArray, resObj.spell.damage.improvement.dice);
                            }
                            if (resObj.spell.hasMaximumDamage) {
                                resObj.spell.damage.maximum.dice = common.datatypes.dice.getObject(results.objectArray, resObj.spell.damage.maximum.dice);
                            }
                            if (resObj.spell.hasSupplementalDamage) {
                                for (var s = 0; s < resObj.spell.damage.supplemental.length; s++) {
                                   resObj.spell.damage.supplemental[s].dice = common.datatypes.dice.getObject(results.objectArray, resObj.spell.damage.supplemental[s].dice); 
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
                function manageBaseMechanics(resObj, callback) {
                    //if (resObj.spell.hasBaseMechanics) {
                    if (resObj.spell.hasMechanics) {
                        common.insert.mechanics(resObj.spell.mechanics, resObj.spell.id, function(results) {
                            return callback(null, resObj);
                        });
                    } else {
                        return callback(null, resObj);
                    }
                },
                function manageAdvancementMechanics(resObj, callback) {
                    /*if (resObj.spell.hasAdvancementMechanics) {
                        common.insert.mechanics(resObj.spell.mechanics.advancement, resObj.spell.atHigherLevelsId, function(results) {
                            return callback(null, resObj);
                        });
                    } else {
                        return callback(null, resObj);
                    }*/
                    return callback(null, resObj);
                },
                function manageCharts(resObj, callback) {
                    if (resObj.spell.hasAnyTypeOfChart) {
                        common.insert.charts(resObj.spell.charts, resObj.spell.id, function(charts) {
                            resObj.spell.charts = charts;
                            return callback(null, resObj);
                        });
                    } else {
                        return callback(null, resObj);
                    }
                },
                function manageSupplementalDescriptons(resObj, callback) {
                    if (resObj.spell.hasSupplementalDescriptions) {
                        common.insert.supplementalDescriptions(resObj.spell.supplementalDescriptions, resObj.spell.id, function(suppDesc) {
                            resObj.spell.supplementalDescriptions = suppDesc;
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
            sql += ', get_base_mechanics(i.id) AS "mechanics"';
            /*sql += ', json_build_object(';
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
            sql += '                ) AS "valueObject"';
            sql += '                FROM adm_link_mechanic ml ';
            sql += '                INNER JOIN adm_core_description ii ON ii.id = ml."referenceId"  ';
            sql += '                LEFT OUTER JOIN adm_core_item targ ON targ.id = ml."targetId"';
            sql += '                LEFT OUTER JOIN adm_core_item typ ON typ.id = ml."typeId"';
            sql += '                LEFT OUTER JOIN adm_core_item valobj ON valobj.id = ml."valueObjectId"';
            sql += '            ) mechanic_row ON (mechanic_row."referenceId" = d.id)';
            sql += '            GROUP BY d.id';
            sql += '        ) r(mechanics, id) WHERE id = i.id';
            sql += '    )';
            sql += ') AS mechanics ';*/
            sql += ', (';
            sql += '    SELECT construct_chart_object_arrays(i.id)';
            sql += ') AS charts ';
            sql += ', (';
            sql += '    SELECT CASE WHEN count(descriptions) = 0 THEN \'[]\' ELSE json_agg(descriptions) END';
            sql += '    FROM (';
            sql += '        SELECT d."id", d."itemId", suppdesc.title, d.description, suppdesc."orderIndex"';
            sql += '        FROM adm_core_description d';
            sql += '        INNER JOIN adm_def_supplemental_description suppdesc ON suppdesc."descriptionId" = d.id';
            sql += '        WHERE d."itemId" = i.id';
            sql += '        GROUP BY d."id", d."itemId", suppdesc.title, d.description, suppdesc."orderIndex"';
            sql += '    ) AS "descriptions"';
            sql += ')  AS "supplementalDescriptions"';
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
                    if (results[t].damage && results[t].damage.supplemental && results[t].damage.supplemental.length != 0) {
                        if (results[t].damage.supplemental[0] == null) {
                            results[t].damage.supplemental = [];
                        }
                    }
                    if (results[t].damage && results[t].damage.abilityScore
                       && (results[t].damage.abilityScore.id == null || results[t].damage.abilityScore.name == null)) {
                        results[t].damage.abilityScore = {id: 0};
                    }
                    /*if (results[t].mechanics.base[0] == null && results[t].mechanics.advancement[0] == null) {
                        delete results[t].mechanics;
                    } else {
                        if (results[t].mechanics.base[0] == null) {
                            delete results[t].mechanics.base;
                        }
                        if (results[t].mechanics.advancement[0] == null) {
                            delete results[t].mechanics.advancement;
                        }
                    }*/
                    if (results[t].mechanics == null || results[t].mechanics == undefined) {
                        delete results[t].mechanics;
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
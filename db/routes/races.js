module.exports = function(app, pg, async, pool, itemtypes, modules) {
    app.delete('/api/adm/race/:id', function(req, res) {
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
                function deleteRaceTable(resObj, callback) {
                    sql = 'DELETE FROM adm_def_race';
                    sql += ' WHERE "raceId" = $1';
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
                function deleteRaceAbilityScoreTable(resObj, callback) {
                    sql = 'DELETE FROM adm_def_race_ability_score';
                    sql += ' WHERE "raceId" = $1';
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
                function deleteMovementAndSenseLinkTable(resObj, callback) {
                    sql = 'DELETE FROM adm_link_array_with_int_value';
                    sql += ' WHERE "referenceId" = $1';
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
                function deleteMonsterTagsLinkTable(resObj, callback) {
                    sql = 'DELETE FROM adm_link_monster_tag';
                    sql += ' WHERE "referenceId" = $1';
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
                function deleteVitalsTable(resObj, callback) {
                    sql = 'DELETE FROM adm_def_race_vitals';
                    sql += ' WHERE "raceId" = $1';
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
                function deleteProficiencyGroupItems(resObj, callback) {
                    sql = 'SELECT * FROM adm_core_item';
                    sql += ' WHERE id IN (';
                    sql += '    SELECT "itemGroupId" FROM adm_link_item_group';
                    sql += '    WHERE "referenceId" = $1';
                    sql += ')';
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
                function deleteProficiencyGroupItemLinks(resObj, callback) {
                    sql = 'DELETE FROM adm_link_item_group_assignment';
                    sql += ' WHERE "itemGroupId" IN (';
                    sql += '    SELECT "itemGroupId" FROM adm_link_item_group';
                    sql += '    WHERE "referenceId" = $1';
                    sql += ')';
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
                function deleteProficiencyGroup(resObj, callback) {
                    sql = 'DELETE FROM adm_def_item_group';
                    sql += ' WHERE "itemGroupId" IN (';
                    sql += '    SELECT "itemGroupId" FROM adm_link_item_group';
                    sql += '    WHERE "referenceId" = $1';
                    sql += ')';
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
                        var resObj = [req.params.id];
                        return callback(null, resObj);
                    });
                },
                function deleteMechanics(resObj, callback) {
                    sql = 'DELETE FROM adm_link_mechanic';
                    sql += ' WHERE "referenceId" = $1';
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
                function deleteSpellcasting(resObj, callback) {
                    sql = 'DELETE FROM adm_def_race_spellcasting';
                    sql += ' WHERE "raceId" = $1';
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
                function deleteSpellcastingSelections(resObj, callback) {
                    sql = 'DELETE FROM adm_link_spell_selection';
                    sql += ' WHERE "referenceId" = $1';
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
                        var resObj = [req.params.id];
                        return callback(null, resObj);
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
                        var resObj = [req.params.id];
                        return callback(null, resObj);
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
                        var resObj = [req.params.id];
                        return callback(null, resObj);
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
                        var resObj = [req.params.id];
                        return callback(null, resObj);
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
                        var resObj = [req.params.id];
                        return callback(null, resObj);
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
                        var resObj = [req.params.id];
                        return callback(null, resObj);
                    });
                },
                function deleteSupplementalDescriptionsLink(resObj, callback) {
                    sql = 'DELETE FROM adm_def_supplemental_description';
                    sql += ' WHERE "descriptionId" IN (';
                    sql += 'SELECT id FROM adm_core_description';
                    sql += ' WHERE "itemId" = $1';
                    sql += ')';
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
                function deleteCoreDescriptions(resObj, callback) {
                    sql = 'DELETE FROM adm_core_description';
                    sql += ' WHERE "itemId" = $1';
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
                }
            ], function(error, result) {
                if (error) {
                    console.error(error);
                }
                return res.json(result);
            });
        });
    });
    app.put('/api/adm/race/:id', function(req, res) {
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
                    results = [];
                    sql = 'UPDATE adm_core_item';
                    sql += ' SET "itemName" = $2';
                    sql += ' WHERE id = $1';
                    vals = [req.params.id, req.body.race.name];
                    var query = client.query(new pg.Query(sql, vals));
                    query.on('row', function(row) {
                        results.push(row);
                    });
                    query.on('end', function() {
                        done();
                        var resObj = req.body;
                        resObj.race.hasMovementOrSenses = false;
                        resObj.race.hasMovement = false;
                        resObj.race.hasSenses = false;
                        if ((resObj.race.movement && resObj.race.movement.length != 0)) {
                            resObj.race.hasMovementOrSenses = true;
                            resObj.race.hasMovement = true;
                        }
                        if ((resObj.race.sense && resObj.races.senses.length != 0)) {
                            resObj.race.hasMovementOrSenses = true;
                            resObj.race.hasSenses = true;
                        }
                        resObj.race.needsDice = false;
                        if (resObj.race.vitals && resObj.race.vitals.height && resObj.race.vitals.height.base != 0) {
                            resObj.race.needsDice = true;
                        }
                        return callback(null, resObj);
                    });
                },
                function insertNeededDice(resObj, callback) {
                    return callback(null, resObj);
                },
                function assignDiceNeededDice(resObj, callback) {
                    return callback(null, resObj);
                },
                function updateRaceTable(resObj, callback) {
                    results = [];
                    sql = 'UPDATE adm_def_race';
                    sql += ' SET "parentId" = $2';
                    sql += ', "sizeId" = $3';
                    sql += ', "monsterTypeId" = $4';
                    sql += ' WHERE "raceId" = $1';
                    vals = [
                        req.params.id,
                        resObj.race.parentId,
                        resObj.race.size.id,
                        resObj.race.type.id
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
                function updateRaceAbilityScoreTable(resObj, callback) {
                    results = [];
                    sql = 'UPDATE adm_def_race_ability_score';
                    sql += ' SET strength = $2';
                    sql += ', dexterity = $3';
                    sql += ', constitution = $4';
                    sql += ', intelligence = $5';
                    sql += ', wisdom = $6';
                    sql += ', charisma = $7';
                    sql += ', "selectCount" = $8';
                    sql += ', "selectModifier" = $9';
                    sql += ' WHERE "raceId" = $1';
                    vals = [
                        req.params.id,
                        resObj.race.abilityScores.strength,
                        resObj.race.abilityScores.dexterity,
                        resObj.race.abilityScores.constitution,
                        resObj.race.abilityScores.intelligence,
                        resObj.race.abilityScores.wisdom,
                        resObj.race.abilityScores.charisma,
                        resObj.race.abilityScores.selection.count,
                        resObj.race.abilityScores.selection.modifier
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
                function deleteMovementLink(resObj, callback) {
                    return callback(null, resObj);
                },
                function insertMovementLink(resObj, callback) {
                    return callback(null, resObj);
                },
                function updateMovementLink(resObj, callback) {
                    return callback(null, resObj);
                },
                function deleteMonsterTags(resObj, callback) {
                    results = [];
                    first = 2;
                    vals = [req.params.id];
                    sql = 'DELETE FROM adm_link_monster_tag';
                    if (resObj.race.tags && resObj.race.tags.length != 0) {
                        sql += ' WHERE "referenceId" = $1';
                        sql += ' AND "monsterTagId" NOT IN (';
                        for (var e = 0; e < resObj.race.tags.length; e++) {
                            if (e != 0) {
                                sql += ', ';
                            }
                            sql += '$' + first.toString();
                            first++;
                            vals.push(resObj.race.tags[e].id);
                        }
                        sql += ')';
                    } else {
                        sql += ' WHERE "referenceId" = $1';
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
                function insertMonsterTags(resObj, callback) {
                    results = [];
                    first = 2;
                    vals = [req.params.id];
                    if (resObj.race.tags && resObj.race.tags.length != 0) {
                        sql = 'with vals as (';
                        for (var e = 0; e < resObj.race.movement.length; e++) {
                            if (e != 0) {
                                sql += ' UNION ';
                            }
                            sql += 'select $1 :: bigint AS "referenceId"';
                            sql += ', $' + first.toString() + ' :: bigint AS "monsterTagId"';
                            first = first++;
                            vals.push(resObj.race.tags[e].id);
                        }
                        sql += ')';
                        sql += ' insert into adm_link_monster_tag ("referenceId", "monsterTagId")';
                        sql += ' select v."referenceId", v."monsterTagId"';
                        sql += ' from vals as v';
                        sql += ' where not exists (select * from adm_link_monster_tag as t';
                        sql += ' where t."referenceId" = v."referenceId"';
                        sql += ' and t."monsterTagId" = v."monsterTagId")';
                        sql += ' returning id';
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
                function updateVitals(resObj, callback) {
                    return callback(null, resObj);
                },
                function updateVitals(resObj, callback) {
                    return callback(null, resObj);
                }
            ], function(error, result) {
                if (error) {
                    console.error(error);
                }
                return res.json(result);
            });
        });
    });
    app.post('/api/adm/race', function(req, res) {
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
                    var first, second, third, fourth, fifth, sixth, seventh, eighth, ninth, tenth, eleventh, twelfth, thirteenth;
                    var needsComma = false;
                    vals = [];
                    results = [];
                    sql = 'INSERT INTO adm_core_item';
                    sql += ' ("itemName", "resourceId", "itemTypeId")';
                    sql += ' VALUES ($1, $2, $3) returning id AS "raceId";';
                    vals = [req.body.race.name, req.body.race.resource.id, itemtypes.TYPE.RACE];
                    var query = client.query(new pg.Query(sql, vals));
                    query.on('row', function(row) {
                        results.push(row);
                    });
                    query.on('end', function() {
                        done();
                        var resObj = req.body;
                        resObj.race.hasMovementOrSenses = false;
                        resObj.race.hasMovement = false;
                        resObj.race.hasSenses = false;
                        if ((resObj.race.movement && resObj.race.movement.length != 0)) {
                            resObj.race.hasMovementOrSenses = true;
                            resObj.race.hasMovement = true;
                        }
                        if ((resObj.race.senses && resObj.race.senses.length != 0)) {
                            resObj.race.hasMovementOrSenses = true;
                            resObj.race.hasSenses = true;
                        }
                        resObj.race.needsDice = false;
                        if (resObj.race.vitals && resObj.race.vitals.height && resObj.race.vitals.height.base != 0) {
                            resObj.race.needsDice = true;
                        }
                        resObj.race.hasProficiencies = false;
                        if (resObj.race.proficiencyGroups && resObj.race.proficiencyGroups.length != 0) {
                            resObj.race.hasProficiencies = true;
                        }
                        resObj.race.hasMechanics = false;
                        resObj.race.hasMechanicTitles = false;
                        if (resObj.race.mechanics && resObj.race.mechanics.length != 0) {
                            resObj.race.hasMechanics = true;
                            for (var e = 0; e < resObj.race.mechanics.length; e++) {
                                if (resObj.race.mechanics[e].title && resObj.race.mechanics[e].title.length != 0) {
                                    resObj.race.hasMechanicTitles = true;
                                }
                            }
                        }
                        resObj.race.hasSpellcasting = false;
                        if (resObj.race.spellcasting && resObj.race.spellcasting.abilityScore && resObj.race.spellcasting.abilityScore.id != 0) {
                            resObj.race.hasSpellcasting = true;
                        }
                        resObj.race.hasSpecialMechanicText = false;
                        if (resObj.race.mechanics && resObj.race.mechanics && resObj.race.mechanics.length != 0) {
                            for (var e = 0; e < resObj.race.mechanics.length; e++) {
                                resObj.race.mechanics[e].specialTextId = 0;
                                if (resObj.race.mechanics[e].specialText && resObj.race.mechanics[e].specialText.length != 0) {
                                    resObj.race.hasSpecialMechanicText = true;
                                }
                            }
                        }
                        resObj.race.hasNaturalWeapons = false;
                        if (resObj.race.naturalWeapons && resObj.race.naturalWeapons.length != 0) {
                            resObj.race.hasNaturalWeapons = true;
                        }
                        resObj.race.hasBreathWeapons = false;
                        resObj.race.hasBreathWeaponImprovement = false;
                        if (resObj.race.breathWeapons && resObj.race.breathWeapons.length != 0) {
                            resObj.race.hasBreathWeapons = true;
                            if (resObj.race.breathWeapons.improvement && resObj.race.breathWeapons.improvement.length != 0) {
                                resObj.race.hasBreathWeaponImprovement = true;
                            }
                        }
                        resObj.race.hasAnyTypeOfChart = false;
                        resObj.race.hasDieChart = false;
                        resObj.race.hasStandardCharts = false;
                        resObj.race.hasSelectionChart = false;
                        resObj.race.needsNewItemTypeFromChart = false;
                        if (resObj.race.charts && resObj.race.charts.length != 0) {
                            resObj.race.hasAnyTypeOfChart = true;
                            for (var c = 0; c < resObj.race.charts.length; c++) {
                                if (resObj.race.charts[c].type.id == itemtypes.CHART.STANDARD) {
                                    resObj.race.hasStandardCharts = true;
                                }
                                if (resObj.race.charts[c].type.id == itemtypes.CHART.DIE_ROLL) {
                                    resObj.race.hasDieChart = true;
                                }
                                if (resObj.race.charts[c].type.id == itemtypes.CHART.SELECTION) {
                                    resObj.race.hasSelectionChart = true;
                                    if (resObj.race.charts[c].selectionItemType.id <= 0) {
                                        resObj.race.needsNewItemTypeFromChart = true;
                                    }
                                }
                            }
                        }
                        resObj.race.id = results[0].raceId;
                        return callback(null, resObj);
                    });
                },
                function insertRaceTable(resObj, callback) {
                    //console.log("01");
                    vals = [];
                    results = [];
                    sql = 'INSERT INTO adm_def_race';
                    sql += ' ("raceId", "parentId", "sizeId", "monsterTypeId", "isVariant")';
                    sql += ' VALUES ';
                    sql += ' ($1, $2, $3, $4, $5)';
                    vals = [
                        resObj.race.id,
                        resObj.race.parent.id,
                        resObj.race.size.id,
                        resObj.race.type.id,
                        resObj.race.isVariant
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
                function insertProficiencyGroupItem(resObj, callback) {
                    //console.log("02");
                    if (resObj.race.hasProficiencies) {
                        vals = [itemtypes.TYPE.ITEM_GROUP];
                        results = [];
                        first = 2;
                        second = 3;
                        sql = 'INSERT INTO adm_core_item';
                        sql += ' ("itemTypeId", "itemName", "resourceId")';
                        sql += ' VALUES ';
                        for (var e = 0; e < resObj.race.proficiencyGroups.length; e++) {
                            if (e != 0) {
                                sql += ', ';
                            }
                            sql += ' ($1, $' + first.toString() + ', $' + second.toString() + ')';
                            first = first + 2;
                            second = second + 2;
                            var profGroupName = resObj.race.name + ' proficiency groups ' + e.toString();
                            vals.push(profGroupName);
                            vals.push(resObj.race.resource.id);
                        }
                        sql += ' returning id AS "itemGroupId";';
                        var query = client.query(new pg.Query(sql, vals));
                        query.on('row', function(row) {
                            results.push(row);
                        });
                        query.on('end', function() {
                            done();
                            for (var t = 0; t < results.length; t++) {
                                resObj.race.proficiencyGroups[t].id = results[t].itemGroupId;
                            }
                            return callback(null, resObj);
                        });
                    } else {
                        return callback(null, resObj);
                    }
                },
                function insertProficiencyGroups(resObj, callback) {
                    //console.log("03");
                    if (resObj.race.hasProficiencies) {
                        vals = [];
                        results = [];
                        sql = 'INSERT INTO adm_def_item_group';
                        sql += ' ("itemGroupId", "mechanicTypeId", "selectCount", "conditionalText")';
                        sql += ' VALUES';
                        first = 1;
                        second = 2;
                        third = 3;
                        fourth = 4;
                        for (var i = 0; i < resObj.race.proficiencyGroups.length; i++) {
                            sql += ' ($' + first.toString() + ', $' + second.toString() + ', $' + third.toString() + ', $' + fourth .toString() + ')';
                            if (i < resObj.race.proficiencyGroups.length - 1) {
                                sql += ', ';
                            }
                            vals.push(resObj.race.proficiencyGroups[i].id);
                            vals.push(resObj.race.proficiencyGroups[i].mechanic.id);
                            vals.push(resObj.race.proficiencyGroups[i].selectCount);
                            vals.push(resObj.race.proficiencyGroups[i].conditionalText)
                            first = first + 4;
                            second = second + 4;
                            third = third + 4;
                            fourth = fourth + 4;
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
                    //console.log("04");
                    if (resObj.race.hasProficiencies) {
                        vals = [];
                        results = [];
                        sql = 'INSERT INTO adm_link_item_group_assignment';
                        sql += ' ("itemGroupId", "itemId")';
                        sql += ' VALUES';
                        first = 1;
                        second = 2;
                        var addComma = false;
                        for (var i = 0; i < resObj.race.proficiencyGroups.length; i++) {
                            if (resObj.race.proficiencyGroups[i].proficiencies.length != 0) {
                                for (var j = 0; j < resObj.race.proficiencyGroups[i].proficiencies.length; j++) {
                                    if (addComma) {
                                        sql += ', ';
                                    }
                                    sql += ' ($' + first.toString() + ', $' + second.toString() + ')';
                                    vals.push(resObj.race.proficiencyGroups[i].id);
                                    vals.push(resObj.race.proficiencyGroups[i].proficiencies[j].id);
                                    first = first + 2;
                                    second = second + 2;
                                    addComma = true;
                                }
                            } else {
                                if (addComma) {
                                    sql += ', ';
                                }
                                sql += ' ($' + first.toString() + ', $' + second.toString() + ')';
                                vals.push(resObj.race.proficiencyGroups[i].id);
                                vals.push(resObj.race.proficiencyGroups[i].category.id);
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
                    //console.log("05");
                    if (resObj.race.hasProficiencies) {
                        vals = [resObj.race.id];
                        results = [];
                        sql = 'INSERT INTO adm_link_item_group';
                        sql += ' ("referenceId", "itemGroupId")';
                        sql += ' VALUES';
                        first = 2;
                        for (var e = 0; e < resObj.race.proficiencyGroups.length; e++) {
                            if (e != 0) {
                                sql += ', ';
                            }
                            sql += ' ($1, $' + first.toString() + ')';
                            vals.push(resObj.race.proficiencyGroups[e].id);
                            first++;
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
                function insertDice(resObj, callback) {
                    //console.log("06");
                    if (resObj.race.needsDice) {
                        var needUnion = false;
                        results = [];
                        vals = [];
                        first = 1;
                        second = 2;
                        third = 3;
                        fourth = 4;
                        fifth = 5;
                        sql = 'with vals as (';
                        if (resObj.race.vitals && resObj.race.vitals.height && resObj.race.vitals.height.base != 0) {
                            if(needUnion) {
                                sql += ' UNION ';
                            }
                            sql += 'select $' + first.toString() + ' :: bigint as "dieCount", $' + second.toString() + ' :: bigint as "dieType"';
                            sql += ', $' + third.toString() + ' :: bigint as "modifier", $' + fourth.toString() + ' :: bigint as "multiplie"';
                            sql += ', $' + fifth.toString() + ' :: bigint as "divisor"';
                            vals.push(resObj.race.vitals.height.dice.dieCount);
                            vals.push(resObj.race.vitals.height.dice.dieType);
                            vals.push(resObj.race.vitals.height.dice.modifier);
                            vals.push(resObj.race.vitals.height.dice.multiplier);
                            vals.push(resObj.race.vitals.height.dice.divisor);
                            needUnion = true;
                            first = first + 5;
                            second = second + 5;
                            third = third + 5;
                            fourth = fourth + 5;
                            fifth = fifth + 5;
                            
                            
                            if(needUnion) {
                                sql += ' UNION ';
                            }
                            sql += 'select $' + first.toString() + ' :: bigint as "dieCount", $' + second.toString() + ' :: bigint as "dieType"';
                            sql += ', $' + third.toString() + ' :: bigint as "modifier", $' + fourth.toString() + ' :: bigint as "multiplie"';
                            sql += ', $' + fifth.toString() + ' :: bigint as "divisor"';
                            vals.push(resObj.race.vitals.weight.dice.dieCount);
                            vals.push(resObj.race.vitals.weight.dice.dieType);
                            vals.push(resObj.race.vitals.weight.dice.modifier);
                            vals.push(resObj.race.vitals.weight.dice.multiplier);
                            vals.push(resObj.race.vitals.weight.dice.divisor);
                            needUnion = true;
                            first = first + 5;
                            second = second + 5;
                            third = third + 5;
                            fourth = fourth + 5;
                            fifth = fifth + 5;
                        }
                        if (resObj.race.hasDieChart) {
                            for (var e = 0; e < resObj.race.charts.length; e++) {
                                if (resObj.race.charts[e].type.id == itemtypes.CHART.DIE_ROLL) {
                                    if (needUnion) {
                                        sql += ' UNION ';
                                    }
                                    sql += 'select $' + first.toString() + ' :: bigint as "dieCount", $' + second.toString() + ' :: bigint as "dieType"';
                                    sql += ', $' + third.toString() + ' :: bigint as "modifier", $' + fourth.toString() + ' :: bigint as "multiplie"';
                                    sql += ', $' + fifth.toString() + ' :: bigint as "divisor"';
                                    vals.push(resObj.race.charts[e].dice.dieCount);
                                    vals.push(resObj.race.charts[e].dice.dieType);
                                    vals.push(resObj.race.charts[e].dice.modifier);
                                    vals.push(resObj.race.charts[e].dice.multiplier);
                                    vals.push(resObj.race.charts[e].dice.divisor);
                                    needUnion = true;
                                    first = first + 5;
                                    second = second + 5;
                                    third = third + 5;
                                    fourth = fourth + 5;
                                    fifth = fifth + 5;
                                }
                            }
                        }
                        if (resObj.race.hasNaturalWeapons) {
                            for (var e = 0; e < resObj.race.naturalWeapons.length; e++) {
                                if (needUnion) {
                                    sql += ' UNION ';
                                }
                                sql += 'select $' + first.toString() + ' :: bigint as "dieCount", $' + second.toString() + ' :: bigint as "dieType"';
                                sql += ', $' + third.toString() + ' :: bigint as "modifier", $' + fourth.toString() + ' :: bigint as "multiplie"';
                                sql += ', $' + fifth.toString() + ' :: bigint as "divisor"';
                                vals.push(resObj.race.naturalWeapons[e].damage.dice.dieCount);
                                vals.push(resObj.race.naturalWeapons[e].damage.dice.dieType);
                                vals.push(resObj.race.naturalWeapons[e].damage.dice.modifier);
                                vals.push(resObj.race.naturalWeapons[e].damage.dice.multiplier);
                                vals.push(resObj.race.naturalWeapons[e].damage.dice.divisor);
                                needUnion = true;
                                first = first + 5;
                                second = second + 5;
                                third = third + 5;
                                fourth = fourth + 5;
                                fifth = fifth + 5;
                            }
                        }
                        if (resObj.race.hasBreathWeapons) {
                            for (var e = 0; e < resObj.race.breathWeapons.length; e++) {
                                if (needUnion) {
                                    sql += ' UNION ';
                                }
                                sql += 'select $' + first.toString() + ' :: bigint as "dieCount", $' + second.toString() + ' :: bigint as "dieType"';
                                sql += ', $' + third.toString() + ' :: bigint as "modifier", $' + fourth.toString() + ' :: bigint as "multiplie"';
                                sql += ', $' + fifth.toString() + ' :: bigint as "divisor"';
                                vals.push(resObj.race.breathWeapons[e].damage.dice.dieCount);
                                vals.push(resObj.race.breathWeapons[e].damage.dice.dieType);
                                vals.push(resObj.race.breathWeapons[e].damage.dice.modifier);
                                vals.push(resObj.race.breathWeapons[e].damage.dice.multiplier);
                                vals.push(resObj.race.breathWeapons[e].damage.dice.divisor);
                                needUnion = true;
                                first = first + 5;
                                second = second + 5;
                                third = third + 5;
                                fourth = fourth + 5;
                                fifth = fifth + 5;
                                if (resObj.race.hasBreathWeaponImprovement) {
                                    for (var q = 0; q < resObj.race.breathWeapons[e].improvement.length; q++) {
                                        if (needUnion) {
                                            sql += ' UNION ';
                                        }
                                        sql += 'select $' + first.toString() + ' :: bigint as "dieCount", $' + second.toString() + ' :: bigint as "dieType"';
                                        sql += ', $' + third.toString() + ' :: bigint as "modifier", $' + fourth.toString() + ' :: bigint as "multiplie"';
                                        sql += ', $' + fifth.toString() + ' :: bigint as "divisor"';
                                        vals.push(resObj.race.breathWeapons[e].damage.improvement[q].dice.dieCount);
                                        vals.push(resObj.race.breathWeapons[e].damage.improvement[q].dice.dieType);
                                        vals.push(resObj.race.breathWeapons[e].damage.improvement[q].dice.modifier);
                                        vals.push(resObj.race.breathWeapons[e].damage.improvement[q].dice.multiplier);
                                        vals.push(resObj.race.breathWeapons[e].damage.improvement[q].dice.divisor);
                                        needUnion = true;
                                        first = first + 5;
                                        second = second + 5;
                                        third = third + 5;
                                        fourth = fourth + 5;
                                        fifth = fifth + 5;
                                    }
                                }
                            }
                        }
                        sql += ')';
                        sql += ' insert into adm_core_dice ("dieCount", "dieType")';
                        sql += ' select v."dieCount", v."dieType"';
                        sql += ' from vals as v';
                        sql += ' where not exists (select * from adm_core_dice as t where t."dieCount" = v."dieCount" and t."dieType" = v."dieType")';
                        sql += ' returning id AS "diceId";';
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
                function assignDiceId(resObj, callback) {
                    //console.log("07");
                    if (resObj.race.needsDice) {
                        results = [];
                        vals = [];
                        var isOr = false;
                        first = 1;
                        second = 2;
                        third = 3;
                        fourth = 4;
                        fifth = 5;
                        sql = 'SELECT dice.id, dice."dieCount", dice."dieType", dice.modifier, dice.multiplier, dice.divisor';
                        sql += ' FROM adm_core_dice dice';
                        if (resObj.race.vitals && resObj.race.vitals.height && resObj.race.vitals.height.base != 0) {
                            if (isOr) {
                                sql += ' OR ';
                            } else {
                                sql += ' WHERE ';
                            }
                            sql += '(dice."dieCount" = $' + first.toString() + ' AND dice."dieType" = $' + second.toString();
                            sql += ' AND dice.modifier = $' + third.toString() + ' AND dice.multiplier = $' + fourth.toString();
                            sql += ' AND dice.divisor = $' + fifth.toString() + ')';
                            isOr = true;
                            first = first + 5;
                            second = second + 5;
                            third = third + 5;
                            fourth = fourth + 5;
                            fifth = fifth + 5;
                            vals.push(resObj.race.vitals.height.dice.dieCount);
                            vals.push(resObj.race.vitals.height.dice.dieType);
                            vals.push(resObj.race.vitals.height.dice.modifier);
                            vals.push(resObj.race.vitals.height.dice.multiplier);
                            vals.push(resObj.race.vitals.height.dice.divisor);
                            
                            if (isOr) {
                                sql += ' OR ';
                            } else {
                                sql += ' WHERE ';
                            }
                            sql += '(dice."dieCount" = $' + first.toString() + ' AND dice."dieType" = $' + second.toString();
                            sql += ' AND dice.modifier = $' + third.toString() + ' AND dice.multiplier = $' + fourth.toString();
                            sql += ' AND dice.divisor = $' + fifth.toString() + ')';
                            isOr = true;
                            first = first + 5;
                            second = second + 5;
                            third = third + 5;
                            fourth = fourth + 5;
                            fifth = fifth + 5;
                            vals.push(resObj.race.vitals.weight.dice.dieCount);
                            vals.push(resObj.race.vitals.weight.dice.dieType);
                            vals.push(resObj.race.vitals.weight.dice.modifier);
                            vals.push(resObj.race.vitals.weight.dice.multiplier);
                            vals.push(resObj.race.vitals.weight.dice.divisor);
                        }
                        if (resObj.race.hasDieChart) {
                            for (var e = 0; e < resObj.race.charts.length; e++) {
                                if (resObj.race.charts[e].type.id == itemtypes.CHART.DIE_ROLL) {
                                    if (isOr) {
                                        sql += ' OR ';
                                    } else {
                                        sql += ' WHERE ';
                                    }
                                    sql += '(dice."dieCount" = $' + first.toString() + ' AND dice."dieType" = $' + second.toString();
                                    sql += ' AND dice.modifier = $' + third.toString() + ' AND dice.multiplier = $' + fourth.toString();
                                    sql += ' AND dice.divisor = $' + fifth.toString() + ')';
                                    isOr = true;
                                    first = first + 5;
                                    second = second + 5;
                                    third = third + 5;
                                    fourth = fourth + 5;
                                    fifth = fifth + 5;
                                    vals.push(resObj.race.charts[e].dice.dieCount);
                                    vals.push(resObj.race.charts[e].dice.dieType);
                                    vals.push(resObj.race.charts[e].dice.modifier);
                                    vals.push(resObj.race.charts[e].dice.multiplier);
                                    vals.push(resObj.race.charts[e].dice.divisor);
                                }
                            }
                        }
                        if (resObj.race.hasNaturalWeapons) {
                            for (var e = 0; e < resObj.race.naturalWeapons.length; e++) {
                                if (isOr) {
                                    sql += ' OR ';
                                } else {
                                    sql += ' WHERE ';
                                }
                                sql += '(dice."dieCount" = $' + first.toString() + ' AND dice."dieType" = $' + second.toString();
                                sql += ' AND dice.modifier = $' + third.toString() + ' AND dice.multiplier = $' + fourth.toString();
                                sql += ' AND dice.divisor = $' + fifth.toString() + ')';
                                isOr = true;
                                first = first + 5;
                                second = second + 5;
                                third = third + 5;
                                fourth = fourth + 5;
                                fifth = fifth + 5;
                                vals.push(resObj.race.naturalWeapons[e].damage.dice.dieCount);
                                vals.push(resObj.race.naturalWeapons[e].damage.dice.dieType);
                                vals.push(resObj.race.naturalWeapons[e].damage.dice.modifier);
                                vals.push(resObj.race.naturalWeapons[e].damage.dice.multiplier);
                                vals.push(resObj.race.naturalWeapons[e].damage.dice.divisor);
                            }
                        }
                        if (resObj.race.hasBreathWeapons) {
                            for (var e = 0; e < resObj.race.breathWeapons.length; e++) {
                                if (isOr) {
                                    sql += ' OR ';
                                } else {
                                    sql += ' WHERE ';
                                }
                                sql += '(dice."dieCount" = $' + first.toString() + ' AND dice."dieType" = $' + second.toString();
                                sql += ' AND dice.modifier = $' + third.toString() + ' AND dice.multiplier = $' + fourth.toString();
                                sql += ' AND dice.divisor = $' + fifth.toString() + ')';
                                isOr = true;
                                first = first + 5;
                                second = second + 5;
                                third = third + 5;
                                fourth = fourth + 5;
                                fifth = fifth + 5;
                                vals.push(resObj.race.breathWeapons[e].damage.dice.dieCount);
                                vals.push(resObj.race.breathWeapons[e].damage.dice.dieType);
                                vals.push(resObj.race.breathWeapons[e].damage.dice.modifier);
                                vals.push(resObj.race.breathWeapons[e].damage.dice.multiplier);
                                vals.push(resObj.race.breathWeapons[e].damage.dice.divisor);
                                if (resObj.race.hasBreathWeaponImprovement) {
                                    for (var q = 0; q < resObj.race.breathWeapons[e].damage.improvement.length; q++) {
                                        if (isOr) {
                                            sql += ' OR ';
                                        } else {
                                            sql += ' WHERE ';
                                        }
                                        sql += '(dice."dieCount" = $' + first.toString() + ' AND dice."dieType" = $' + second.toString();
                                        sql += ' AND dice.modifier = $' + third.toString() + ' AND dice.multiplier = $' + fourth.toString();
                                        sql += ' AND dice.divisor = $' + fifth.toString() + ')';
                                        isOr = true;
                                        first = first + 5;
                                        second = second + 5;
                                        third = third + 5;
                                        fourth = fourth + 5;
                                        fifth = fifth + 5;
                                        vals.push(resObj.race.breathWeapons[e].damage.improvement[q].dice.dieCount);
                                        vals.push(resObj.race.breathWeapons[e].damage.improvement[q].dice.dieType);
                                        vals.push(resObj.race.breathWeapons[e].damage.improvement[q].dice.modifier);
                                        vals.push(resObj.race.breathWeapons[e].damage.improvement[q].dice.multiplier);
                                        vals.push(resObj.race.breathWeapons[e].damage.improvement[q].dice.divisor);
                                    }
                                }
                            }
                        }
                        var query = client.query(new pg.Query(sql, vals));
                        query.on('row', function(row) {
                            results.push(row);
                        });
                        query.on('end', function() {
                            done();
                            if (results.length != 0) {
                                for (var e = 0; e < results.length; e++) {
                                    if (results[e].dieCount == resObj.race.vitals.height.dice.dieCount &&
                                       results[e].dieType == resObj.race.vitals.height.dice.dieType &&
                                       results[e].modifier == resObj.race.vitals.height.dice.modifier &&
                                       results[e].multiplier == resObj.race.vitals.height.dice.multiplier &&
                                       results[e].divisor == resObj.race.vitals.height.dice.divisor) {
                                        resObj.race.vitals.height.dice.id = results[e].id;
                                    }
                                    if (results[e].dieCount == resObj.race.vitals.weight.dice.dieCount &&
                                       results[e].dieType == resObj.race.vitals.weight.dice.dieType &&
                                       results[e].modifier == resObj.race.vitals.weight.dice.modifier &&
                                       results[e].multiplier == resObj.race.vitals.weight.dice.multiplier &&
                                       results[e].divisor == resObj.race.vitals.weight.dice.divisor) {
                                        resObj.race.vitals.weight.dice.id = results[e].id;
                                    }
                                    if (resObj.race.hasDieChart) {
                                        for (var w = 0; w < resObj.race.charts.length; w++) {
                                            if (resObj.race.charts[w].type.id == itemtypes.CHART.DIE_ROLL) {
                                                if (results[e].dieCount == resObj.race.charts[w].dice.dieCount &&
                                                   results[e].dieType == resObj.race.charts[w].dice.dieType &&
                                                   results[e].modifier == resObj.race.charts[w].dice.modifier &&
                                                   results[e].multiplier == resObj.race.charts[w].dice.multiplier &&
                                                   results[e].divisor == resObj.race.charts[w].dice.divisor) {
                                                    resObj.race.charts[w].dice.id = results[e].id;
                                                }
                                            }
                                        }
                                    }
                                    if (resObj.race.hasNaturalWeapons) {
                                        for (var w = 0; w < resObj.race.naturalWeapons.length; w++) {
                                            if (results[e].dieCount == resObj.race.naturalWeapons[w].damage.dice.dieCount &&
                                               results[e].dieType == resObj.race.naturalWeapons[w].damage.dice.dieType &&
                                               results[e].modifier == resObj.race.naturalWeapons[w].damage.dice.modifier &&
                                               results[e].multiplier == resObj.race.naturalWeapons[w].damage.dice.multiplier &&
                                               results[e].divisor == resObj.race.naturalWeapons[w].damage.dice.divisor) {
                                                resObj.race.naturalWeapons[w].damage.dice.id = results[e].id;
                                            }
                                        }
                                    }
                                    if (resObj.race.hasBreathWeapons) {
                                        for (var w = 0; w < resObj.race.breathWeapons.length; w++) {
                                            if (results[e].dieCount == resObj.race.breathWeapons[w].damage.dice.dieCount &&
                                               results[e].dieType == resObj.race.breathWeapons[w].damage.dice.dieType &&
                                               results[e].modifier == resObj.race.breathWeapons[w].damage.dice.modifier &&
                                               results[e].multiplier == resObj.race.breathWeapons[w].damage.dice.multiplier &&
                                               results[e].divisor == resObj.race.breathWeapons[w].damage.dice.divisor) {
                                                resObj.race.breathWeapons[w].damage.dice.id = results[e].id;
                                            }
                                            for (var q = 0; q < resObj.race.breathWeapons[w].damage.improvement.length; q++) {
                                                if (results[e].dieCount == resObj.race.breathWeapons[w].damage.improvement[q].dice.dieCount &&
                                                   results[e].dieType == resObj.race.breathWeapons[w].damage.improvement[q].dice.dieType &&
                                                   results[e].modifier == resObj.race.breathWeapons[w].damage.improvement[q].dice.modifier &&
                                                   results[e].multiplier == resObj.race.breathWeapons[w].damage.improvement[q].dice.multiplier &&
                                                   results[e].divisor == resObj.race.breathWeapons[w].damage.improvement[q].dice.divisor) {
                                                    resObj.race.breathWeapons[w].improvement[q].damage.dice.id = results[e].id;
                                                }
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
                function insertRaceAbilityScoreTable(resObj, callback) {
                    //console.log("08");
                    vals = [];
                    results = [];
                    sql = 'INSERT INTO adm_def_race_ability_score';
                    sql += ' ("raceId", "strength", "dexterity", "constitution", "intelligence", "wisdom", "charisma", "selectCount", "selectModifier")';
                    sql += ' VALUES ';
                    sql += ' ($1, $2, $3, $4, $5, $6, $7, $8, $9)';
                    vals = [
                        resObj.race.id,
                        resObj.race.abilityScores.strength,
                        resObj.race.abilityScores.dexterity,
                        resObj.race.abilityScores.constitution,
                        resObj.race.abilityScores.intelligence,
                        resObj.race.abilityScores.wisdom,
                        resObj.race.abilityScores.charisma,
                        resObj.race.abilityScores.selection.count,
                        resObj.race.abilityScores.selection.modifier
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
                function insertMovementSenseLinkTable(resObj, callback) {
                    //console.log("09");
                    if (resObj.race.hasMovementOrSenses) {
                    //if (resObj.race.movement && resObj.race.movement.length != 0) {
                        vals = [resObj.race.id];
                        results = [];
                        first = 2;
                        second = 3;
                        needsComma = false;
                        sql = 'INSERT INTO adm_link_array_with_int_value';
                        sql += ' ("referenceId", "referenceTypeId", "intValue")';
                        sql += ' VALUES ';
                        if (resObj.race.hasMovement) {
                            for (var e = 0; e < resObj.race.movement.length; e++) {
                                if (needsComma) {
                                    sql += ', ';
                                }
                                sql += ' ($1, $' + first.toString() + ', $' + second.toString() + ')';
                                first = first + 2;
                                second = second + 2;
                                needsComma = true;
                                vals.push(resObj.race.movement[e].id);
                                vals.push(resObj.race.movement[e].speed);
                            }
                        }
                        if (resObj.race.hasSenses) {
                            for (var e = 0; e < resObj.race.senses.length; e++) {
                                if (needsComma) {
                                    sql += ', ';
                                }
                                sql += ' ($1, $' + first.toString() + ', $' + second.toString() + ')';
                                first = first + 2;
                                second = second + 2;
                                needsComma = true;
                                vals.push(resObj.race.senses[e].id);
                                vals.push(resObj.race.senses[e].range);
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
                function insertMonsterTagsLinkTable(resObj, callback) {
                    //console.log("10");
                    if (resObj.race.tags && resObj.race.tags.length != 0) {
                        vals = [resObj.race.id];
                        results = [];
                        first = 2;
                        sql = 'INSERT INTO adm_link_monster_tag';
                        sql += ' ("referenceId", "monsterTagId")';
                        sql += ' VALUES ';
                        for (var e = 0; e < resObj.race.tags.length; e++) {
                            if (e != 0) {
                                sql += ', ';
                            }
                            sql += ' ($1, $' + first.toString() + ')';
                            first = first + 1;
                            vals.push(resObj.race.tags[e].id);
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
                function insertVitals(resObj, callback) {
                    //console.log("11");
                    if (resObj.race.vitals && resObj.race.vitals.height && resObj.race.vitals.height.base != 0) {
                        results = []
                        sql = 'INSERT INTO adm_def_race_vitals';
                        sql += ' ("raceId", "baseHeight", "baseWeight", "heightDiceId", "weightDiceId")';
                        sql += ' VALUES ($1, $2, $3, $4, $5)';
                        vals = [
                            resObj.race.id,
                            resObj.race.vitals.height.base,
                            resObj.race.vitals.weight.base,
                            resObj.race.vitals.height.dice.id,
                            resObj.race.vitals.weight.dice.id
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
                function insertSpecialMechanicText(resObj, callback) {
                    //console.log("12");
                    if (resObj.race.hasSpecialMechanicText) {
                        vals = [
                            itemtypes.TYPE.SPECIAL_MECHANIC,
                            resObj.race.resource.id
                        ];
                        results = [];
                        sql = 'INSERT INTO adm_core_item';
                        sql += ' ("itemTypeId", "resourceId", "itemName")';
                        sql += ' VALUES ';
                        first = 3;
                        needsComma = false;
                        for (var e = 0; e < resObj.race.mechanics.length; e++) {
                            if (resObj.race.mechanics[e].specialText && resObj.race.mechanics[e].specialText.length != 0) {
                                if (needsComma) {
                                    sql += ', ';
                                }
                                sql += ' ($1, $2, $' + first.toString() + ')';
                                first++;
                                vals.push(resObj.race.mechanics[e].specialText);
                                needsComma = true;
                            }
                        }
                        sql += ' returning id AS "specialTextId", "itemName" AS "specialText";';
                        var query = client.query(new pg.Query(sql, vals));
                        query.on('row', function(row) {
                            results.push(row);
                        });
                        query.on('end', function() {
                            done();
                            if (results && results.length != 0) {
                                for (var e = 0; e < results.length; e++) {
                                    for (var m = 0; m < resObj.race.mechanics.length; m++) {
                                        if (results[e].specialText == resObj.race.mechanics[m].specialText) {
                                            resObj.race.mechanics[m].specialTextId = results[e].specialTextId;
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
                function insertMechanicTitle(resObj, callback) {
                    //console.log("12a");
                    if (resObj.race.hasMechanicTitles) {
                        results = [];
                        vals = [];
                        sql = 'INSERT INTO adm_core_item';
                        sql += ' ("itemName", "itemTypeId", "resourceId")';
                        sql += ' VALUES ';
                        first = 1;
                        second = 2;
                        third = 3;
                        needsComma = false;
                        for (var e = 0; e < resObj.race.mechanics.length; e++) {
                            if (resObj.race.mechanics[e].title && resObj.race.mechanics[e].title.length != 0) {
                                if (needsComma) {
                                    sql += ', ';
                                }
                                sql += ' ($' + first.toString() + ', $' + second.toString() + ', $' + third.toString() + ')';
                                first = first + 3;
                                second = second + 3;
                                third = third + 3;
                                needsComma = true;
                                vals.push(resObj.race.mechanics[e].title);
                                vals.push(itemtypes.DESCRIPTION.MECHANIC_TITLE);
                                vals.push(resObj.race.resource.id);
                            }
                        }
                        sql += ' returning "itemName" AS "title", id AS "titleId"';
                        var query = client.query(new pg.Query(sql, vals));
                        query.on('row', function(row) {
                            results.push(row);
                        });
                        query.on('end', function() {
                            done();
                            for (var e = 0; e < results.length; e++) {
                                for (var m = 0; m < resObj.race.mechanics.length; m++) {
                                    if (resObj.race.mechanics[m].title && resObj.race.mechanics[m].title.length != 0) {
                                        if (resObj.race.mechanics[m].title == results[e].title) {
                                            resObj.race.mechanics[m].titleId = results[e].titleId;
                                        }
                                    } else {
                                        resObj.race.mechanics[m].titleId = 0;
                                    }
                                }
                            }
                            return callback(null, resObj);
                        });
                    } else {
                        return callback(null, resObj);
                    }
                },
                function insertMechanics(resObj, callback) {
                    //console.log("13");
                    if (resObj.race.hasMechanics) {
                        results = [];
                        vals = [resObj.race.id];
                        sql = 'INSERT INTO adm_link_mechanic';
                        sql += ' ("referenceId", "targetId", "typeId", "value", "diceId", "valueObjectId", "specialTextId", "titleId")';
                        sql += ' VALUES ';
                        first = 2;
                        second = 3;
                        third = 4;
                        fourth = 5;
                        fifth = 6;
                        sixth = 7;
                        seventh = 8;
                        for (var e = 0; e < resObj.race.mechanics.length; e++) {
                            if (e != 0) {
                                sql += ', ';
                            }
                            sql += ' ($1, $' + first.toString() + ', $' + second.toString() + ', $' + third.toString();
                            sql += ', $' + fourth.toString() + ', $' + fifth.toString() + ', $' + sixth.toString();
                            sql += ', $' + seventh.toString() + ')';
                            first = first + 7;
                            second = second + 7;
                            third = third + 7;
                            fourth = fourth + 7;
                            fifth = fifth + 7;
                            sixth = sixth + 7;
                            seventh = seventh + 7;
                            vals.push(resObj.race.mechanics[e].target.id);
                            vals.push(resObj.race.mechanics[e].type.id);
                            vals.push(resObj.race.mechanics[e].value);
                            vals.push(resObj.race.mechanics[e].dice.id);
                            vals.push(resObj.race.mechanics[e].valueObject.id);
                            vals.push(resObj.race.mechanics[e].specialTextId);
                            vals.push(resObj.race.mechanics[e].titleId);
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
                function insertSpellcasting(resObj, callback) {
                    //console.log("14");
                    if (resObj.race.hasSpellcasting) {
                        results = [];
                        vals = [resObj.race.id, resObj.race.spellcasting.abilityScore.id];
                        sql = 'INSERT INTO adm_def_race_spellcasting';
                        sql += ' ("raceId", "abilityScoreId")';
                        sql += ' VALUES ($1, $2)';
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
                function insertSpellcastingSelections(resObj, callback) {
                    //console.log("15");
                    if (resObj.race.hasSpellcasting) {
                        results = [];
                        vals = [resObj.race.id];
                        sql = 'INSERT INTO adm_link_spell_selection';
                        sql += ' ("referenceId", "selectCount", "schoolId", "characterLevel", "rechargeTypeId", "castingCount", "spellId", "selectionTypeId", "spellLevel", "spelllistId")';
                        sql += ' VALUES ';
                        first = 2;
                        second = 3;
                        third = 4;
                        fourth = 5;
                        fifth = 6;
                        sixth = 7;
                        seventh = 8;
                        eighth = 9;
                        ninth = 10;
                        for (var e = 0; e < resObj.race.spellcasting.spellSelections.length; e++) {
                            if (e != 0) {
                                sql += ', ';
                            }
                            sql += ' ($1, $' + first.toString() + ', $' + second.toString() + ', $' + third.toString() + ', $' + fourth.toString();
                            sql += ', $' + fifth.toString() + ', $' + sixth.toString() + ', $' + seventh.toString();
                            sql += ', $' + eighth.toString() + ', $' + ninth.toString() + ')';
                            vals.push(resObj.race.spellcasting.spellSelections[e].selectCount);
                            vals.push(resObj.race.spellcasting.spellSelections[e].school.id);
                            vals.push(resObj.race.spellcasting.spellSelections[e].characterLevel);
                            vals.push(resObj.race.spellcasting.spellSelections[e].rechargeType.id);
                            vals.push(resObj.race.spellcasting.spellSelections[e].castingCount);
                            vals.push(resObj.race.spellcasting.spellSelections[e].spell.id);
                            vals.push(resObj.race.spellcasting.spellSelections[e].selectionType.id);
                            vals.push(resObj.race.spellcasting.spellSelections[e].spellLevel);
                            vals.push(resObj.race.spellcasting.spellSelections[e].spelllist.id);
                            first = first + 9;
                            second = second + 9;
                            third = third + 9;
                            fourth = fourth + 9;
                            fifth = fifth + 9;
                            sixth = sixth + 9;
                            seventh = seventh + 9;
                            eighth = eighth + 9;
                            ninth = ninth + 9;
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
                    //console.log("16");
                    if (resObj.race.supplementalDescriptions && resObj.race.supplementalDescriptions.length != 0) {
                        vals = [];
                        results = [];
                        sql = 'INSERT INTO adm_core_description';
                        sql += ' ("itemId", "description", "descriptionTypeId")';
                        sql += ' VALUES ';
                        first = 1;
                        second = 2;
                        third = 3;
                        for (var d = 0; d < resObj.race.supplementalDescriptions.length; d++) {
                            if (d != 0) {
                                sql += ', ';
                            }
                            sql += '($' + first.toString() + ', $' + second.toString() + ', $' + third.toString() + ')';
                            first = first + 3;
                            second = second + 3;
                            third = third + 3;
                            vals.push(resObj.race.id);
                            vals.push(resObj.race.supplementalDescriptions[d].description);
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
                                for (var d = 0; d < resObj.race.supplementalDescriptions.length; d++) {
                                    if (results[r].description == resObj.race.supplementalDescriptions[d].description) {
                                        resObj.race.supplementalDescriptions[d].id = results[r].descriptionId;
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
                    //console.log("17");
                    if (resObj.race.supplementalDescriptions && resObj.race.supplementalDescriptions.length != 0) {
                        vals = [];
                        results = [];
                        first = 1;
                        second = 2;
                        third = 3;
                        sql = 'INSERT INTO adm_def_supplemental_description';
                        sql += ' ("descriptionId", "title", "orderIndex")';
                        sql += ' VALUES ';
                        for (var d = 0; d < resObj.race.supplementalDescriptions.length; d++) {
                            if (d != 0) {
                                sql += ', ';
                            }
                            sql += ' ($' + first.toString() + ', $' + second.toString() + ', $' + third.toString() + ')';
                            first = first + 3;
                            second = second + 3;
                            third = third + 3;
                            vals.push(resObj.race.supplementalDescriptions[d].id);
                            vals.push(resObj.race.supplementalDescriptions[d].title);
                            vals.push(resObj.race.supplementalDescriptions[d].orderIndex);
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
                function insertChartsCore(resObj, callback) {
                    //console.log("18");
                    if (resObj.race.hasAnyTypeOfChart) {
                        sql = 'INSERT INTO adm_core_chart';
                        sql += ' ("title", "typeId")';
                        sql += ' VALUES ';
                        vals = [];
                        results = [];
                        var addComma = false;
                        first = 1;
                        second = 2;
                        if (resObj.race.charts && resObj.race.charts.length != 0) {
                            for (var e = 0; e < resObj.race.charts.length; e++) {
                                if (addComma) {
                                    sql += ', ';
                                }
                                sql += ' ($' + first.toString() + ', $' + second.toString() + ')';
                                vals.push(resObj.race.charts[e].title);
                                vals.push(resObj.race.charts[e].type.id);
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
                                for (var d = 0; d < resObj.race.charts.length; d++) {
                                    if (results[e].title == resObj.race.charts[d].title) {
                                        resObj.race.charts[d].id = results[e].chartId;
                                    }
                                }
                            }
                            return callback(null, resObj);
                        });
                    } else {
                        return callback(null, resObj);
                    }
                },
                function insertChartSelectionMissingType(resObj, callback) {
                    //console.log("19");
                    if (resObj.race.hasSelectionChart && resObj.race.needsNewItemTypeFromChart) {
                        results = [];
                        vals = [];
                        addComma = false;
                        first = 1;
                        sql = 'INSERT INTO adm_core_type';
                        sql += ' ("typeName")';
                        sql += ' VALUES ';
                        for (var e = 0; e < resObj.race.charts.length; e++) {
                            if (resObj.race.charts[e].type.id == itemtypes.CHART.SELECTION) {
                                if (resObj.race.charts[e].selectionItemType.id <= 0) {
                                    if (addComma) {
                                        sql += ', ';
                                    }
                                }
                                sql += ' ($' + first.toString() + ')';
                                first++;
                                addComma = true;
                            }
                        }
                        sql += ' returning "typeName" AS "name", "id" AS "typeId"';
                        var query = client.query(new pg.Query(sql, vals));
                        query.on('row', function(row) {
                            results.push(row);
                        });
                        query.on('end', function() {
                            done();
                            for (var e = 0; e < results.length; e++) {
                                for (var f = 0; f < resObj.race.charts.length; f++) {
                                    if (resObj.race.charts[f].type.id == itemtypes.CHART.SELECTION) {
                                        if (resObj.race.charts[f].selectionItemType.name == results[e].name) {
                                            resObj.race.charts[f].selectionItemType.id = results[e].typeId;
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
                function insertChartSelectionMissingTypeItems(resObj, callback) {
                    //console.log("20");
                    if (resObj.race.hasSelectionChart && resObj.race.needsNewItemTypeFromChart) {
                        results = [];
                        vals = [];
                        sql = 'INSERT INTO adm_core_item';
                        sql += ' ("itemName", "itemTypeId", "resourceId")';
                        sql += ' VALUES ';
                        first = 1;
                        second = 2;
                        third = 3;
                        addComma = false;
                        for (var c = 0; c < resObj.race.charts.length; c++) {
                            if (resObj.race.charts[c].type.id == itemtypes.CHART.SELECTION) {
                                for (var r = 0; r < resObj.race.charts[c].rows.length; r++) {
                                    if (resObj.race.charts[c].rows[r].selectionItem && resObj.race.charts[c].rows[r].selectionItem.id && resObj.race.charts[c].rows[r].selectionItem.id == 0) {
                                        if (addComma) {
                                            sql += ', ';
                                        }
                                        sql += ' ($' + first.toString() + ', $' + second.toString() + ', $' + third.toString() + ')';
                                        vals.push(resObj.race.charts[c].rows[r].selectionItem.name);
                                        vals.push(resObj.race.charts[c].selectionItemType.id);
                                        vals.push(resObj.race.resource.id);
                                        first = first + 3;
                                        second = second + 3;
                                        third = third + 3;
                                        addComma = true;
                                    }
                                }
                            }
                        }
                        sql += ' returning "itemName", "id" AS "itemId"';
                        var query = client.query(new pg.Query(sql, vals));
                        query.on('row', function(row) {
                            results.push(row);
                        });
                        query.on('end', function() {
                            done();
                            for (var e = 0; e < results.length; e++) {
                                for (var f = 0; f < resObj.race.charts.length; f++) {
                                    if (resObj.race.charts[f].type.id == itemtypes.CHART.SELECTION) {
                                        for (var r = 0; r < resObj.race.charts[f].rows.length; r++) {
                                            if (results[e].itemName == resObj.race.charts[f].rows[r].selectionItem.name) {
                                                resObj.race.charts[f].rows[r].selectionItem.id = results[e].itemId;
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
                function insertChartDefinitions_selection(resObj, callback) {
                    //console.log("21");
                    if (resObj.race.hasSelectionChart) {
                        results = [];
                        vals = [];
                        first = 1;
                        second = 2;
                        addComma = false;
                        sql = 'INSERT INTO adm_def_chart_selection';
                        sql += ' ("chartId", "selectTypeId")';
                        sql += ' VALUES ';
                        for (var e = 0; e < resObj.race.charts.length; e++) {
                            if (resObj.race.charts[e].type.id == itemtypes.CHART.SELECTION) {
                                if (addComma) {
                                    sql += ', ';
                                }
                                sql += ' ($' + first.toString() + ', $' + second.toString() + ')';
                                first = first + 2;
                                second = second + 2;
                                vals.push(resObj.race.charts[e].id);
                                vals.push(resObj.race.charts[e].selectionItemType.id);
                                addComma = true;
                            }
                        }
                        var query = client.query(new pg.Query(sql, vals));
                        query.on('row', function(row) {
                            results.push(row);
                        });
                        query.on('end', function() {
                            done();
                            for (var e = 0; e < results.length; e++) {
                                for (var d = 0; d < resObj.race.charts.length; d++) {
                                    if (results[e].title == resObj.race.charts[d].title) {
                                        resObj.race.charts[d].id = results[e].chartId;
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
                    //console.log("22");
                    if (resObj.race.hasStandardCharts) {
                        sql = 'INSERT INTO adm_def_chart';
                        sql += ' ("chartId", "columnCount", "rowCount")';
                        sql += ' VALUES ';
                        first = 1;
                        second = 2;
                        third = 3;
                        vals = [];
                        results = [];
                        for (var e = 0; e < resObj.race.charts.length; e++) {
                            if (e != 0) {
                                sql += ', ';
                            }
                            sql += ' ($' + first.toString() + ', $' + second.toString() + ', $' + third.toString() + ')';
                            first = first + 3;
                            second = second + 3;
                            third = third + 3;
                            vals.push(resObj.race.charts[e].id);
                            vals.push(resObj.race.charts[e].columnCount);
                            vals.push(resObj.race.charts[e].rowCount);
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
                    //console.log("23");
                    if (resObj.race.hasAnyTypeOfChart) {
                        var hasDescriptions = false;
                        for (var e = 0; e < resObj.race.charts.length; e++) {
                            if (resObj.race.charts[e].description && resObj.race.charts[e].description.length != 0) {
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
                            for (var e = 0; e < resObj.race.charts.length; e++) {
                                if (resObj.race.charts[e].description && resObj.race.charts[e].description.length != 0) {
                                    if (includeComma) {
                                        sql += ', ';
                                    }
                                    sql += ' ($' + first.toString() + ', $' + second.toString() + ', ' + third.toString() + ')';
                                    vals.push(resObj.race.charts[e].id);
                                    vals.push(resObj.race.charts[e].description);
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
                function insertChartDice_die(resObj, callback) {
                    //console.log("24");
                    if (resObj.race.hasDieChart) {
                        results = [];
                        vals = [];
                        sql = 'INSERT INTO adm_def_chart_dice';
                        sql += ' ("chartId", "diceId")';
                        sql += ' VALUES ';
                        first = 1;
                        second = 2;
                        for (var e = 0; e < resObj.race.charts.length; e++) {
                            if (resObj.race.charts[e].type.id == itemtypes.CHART.DIE_ROLL) {
                                if (e != 0) {
                                    sql += ', ';
                                }
                                sql += '($' + first.toString() + ', $' + second.toString() + ')';
                                first = first + 2;
                                second = second + 2;
                                vals.push(resObj.race.charts[e].id);
                                vals.push(resObj.race.charts[e].dice.id);
                            }
                        }
                        var query = client.query(new pg.Query(sql, vals));
                        query.on('row', function(row) {
                            results.push(row);
                        });
                        query.on('end', function() {
                            done();
                            for (var i = 0; i < results.length; i++) {
                                for (var j = 0; j < resObj.race.charts.length; j++) {
                                    if (results[i].title == resObj.race.charts[j].title) {
                                        resObj.race.charts[j].id = results[i].chartId;
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
                    //console.log("25");
                    if (resObj.race.hasDieChart) {
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
                        for (var i = 0; i < resObj.race.charts.length; i++) {
                            if (resObj.race.charts[i].type.id == itemtypes.CHART.DIE_ROLL) {
                                for (var j = 0; j < resObj.race.charts[i].entries.length; j++) {
                                    if (addComma) {
                                        sql += ', ';
                                    }
                                    sql += ' ($' + first.toString() + ', $' + second.toString() + ', $' + third.toString() + ', $' + fourth.toString() + ')';
                                    vals.push(resObj.race.charts[i].id);
                                    vals.push(resObj.race.charts[i].entries[j].minimum);
                                    vals.push(resObj.race.charts[i].entries[j].maximum);
                                    vals.push(resObj.race.charts[i].entries[j].description);
                                    first = first + 4;
                                    second = second + 4;
                                    third = third + 4;
                                    fourth = fourth + 4;
                                    addComma = true;
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
                function insertChartColumns_standard(resObj, callback) {
                    //console.log("26");
                    if (resObj.race.hasStandardCharts || resObj.race.hasSelectionChart) {
                        vals = [];
                        results = [];
                        sql = 'INSERT INTO adm_def_chart_column';
                        sql += ' ("chartId", "columnIndex", "title", "selectionItemId")';
                        sql += ' VALUES ';
                        first = 1;
                        second = 2;
                        third = 3;
                        fourth = 4;
                        for (var c = 0; c < resObj.race.charts.length; c++) {
                            for (var e = 0; e < resObj.race.charts[c].columns.length; e ++) {
                                if (!(c == 0 && e == 0)) {
                                    sql += ', ';
                                }
                                sql += ' ($' + first.toString() + ', $' + second.toString() + ', $' + third.toString() + ', $' + fourth.toString() + ')';
                                first = first + 4;
                                second = second + 4;
                                third = third + 4;
                                fourth = fourth + 4;
                                vals.push(resObj.race.charts[c].id);
                                vals.push(resObj.race.charts[c].columns[e].orderIndex);
                                vals.push(resObj.race.charts[c].columns[e].title);
                                vals.push(resObj.race.charts[c].columns[e].selectionItemType.id);
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
                                for (var c = 0; c < resObj.race.charts.length; c++) {
                                    for (var e = 0; e < resObj.race.charts[c].columns.length; e++) {
                                        if (results[r].chartId == resObj.race.charts[c].id) {
                                            if (results[r].columnIndex == resObj.race.charts[c].columns[e].columnIndex) {
                                                resObj.race.charts[c].columns[e].id = results[r].columnId;
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
                    //console.log("27");
                    if (resObj.race.hasStandardCharts || resObj.race.hasSelectionChart) {
                        vals = [];
                        results = [];
                        var hasRowTitles = false;
                        for (var c = 0; c < resObj.race.charts.length; c++) {
                            for (var r = 0; r < resObj.race.charts[c].rows.length; r++) {
                                if (resObj.race.charts[c].rows[r].title && resObj.race.charts[c].rows[r].title.length != 0) {
                                    hasRowTitles = true;
                                } else if (resObj.race.charts[c].rows[r].selectionItem 
                                           && resObj.race.charts[c].rows[r].selectionItem.id 
                                           && resObj.race.charts[c].rows[r].selectionItem.id != 0) {
                                    hasRowTitles = true;
                                }
                            }
                        }
                        if (hasRowTitles) {
                            sql = 'INSERT INTO adm_def_chart_row';
                            sql += ' ("chartId", "rowIndex", "title", "selectionItemId")';
                            sql += ' VALUES ';
                            first = 1;
                            second = 2;
                            third = 3;
                            fourth = 4;
                            var addComma = false;
                            for (var c = 0; c < resObj.race.charts.length; c++) {
                                for (var r = 0; r < resObj.race.charts[c].rows.length; r++) {
                                    if ((resObj.race.charts[c].rows[r].title 
                                         && resObj.race.charts[c].rows[r].title.length != 0) 
                                        || (resObj.race.charts[c].rows[r].selectionItem 
                                            && resObj.race.charts[c].rows[r].selectionItem.id 
                                            && resObj.race.charts[c].rows[r].selectionItem.id != 0)) {
                                        if (addComma) {
                                            sql += ', ';
                                        }
                                        sql += ' ($' + first.toString() + ', $' + second.toString() + ', $' + third.toString() + ', $' + fourth.toString() + ')';
                                        first = first + 4;
                                        second = second + 4;
                                        third = third + 4;
                                        fourth = fourth + 4;
                                        vals.push(resObj.race.charts[c].id);
                                        vals.push(resObj.race.charts[c].rows[r].orderIndex);
                                        if (resObj.race.charts[c].rows[r].title && resObj.race.charts[c].rows[r].title.length != 0) {
                                            vals.push(resObj.race.charts[c].rows[r].title);
                                        } else {
                                            vals.push(resObj.race.charts[c].rows[r].selectionItem.name);
                                        }
                                        vals.push(resObj.race.charts[c].rows[r].selectionItem.id);
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
                                    for (var c = 0; c < resObj.race.charts.length; c++) {
                                        for (var e = 0; e < resObj.race.charts[c].rows.length; e++) {
                                            if (results[r].chartId == resObj.race.charts[c].id) {
                                                if (results[r].orderIndex == resObj.race.charts[c].rows[e].orderIndex) {
                                                    resObj.race.charts[c].rows[r].id = results[r].rowId;
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
                    //console.log("28");
                    if (resObj.race.hasStandardCharts || resObj.race.hasSelectionChart) {
                        vals = [];
                        results = [];
                        sql = 'INSERT INTO adm_def_chart_entry';
                        sql += ' ("chartId", "columnIndex", "rowIndex", "description", "selectionItemId")';
                        sql += ' VALUES ';
                        first = 1;
                        second = 2;
                        third = 3;
                        fourth = 4;
                        fifth = 5;
                        addComma = false;
                        for (var c = 0; c < resObj.race.charts.length; c++) {
                            for (var e = 0; e < resObj.race.charts[c].entries.length; e++) {
                                if (resObj.race.charts[c].type.id == itemtypes.CHART.STANDARD ||
                                   resObj.race.charts[c].type.id == itemtypes.CHART.SELECTION) {
                                    if(addComma) {
                                        sql += ', ';
                                    }
                                    sql += ' ($' + first.toString() + ', $' + second.toString() + ', $' + third.toString();
                                    sql += ', $' + fourth.toString() + ', $' + fifth.toString() + ')';
                                    first = first + 5;
                                    second = second + 5;
                                    third = third + 5;
                                    fourth = fourth + 5;
                                    fifth = fifth + 5;
                                    addComma = true;
                                    vals.push(resObj.race.charts[c].id);
                                    vals.push(resObj.race.charts[c].entries[e].columnIndex);
                                    vals.push(resObj.race.charts[c].entries[e].rowIndex);
                                    vals.push(resObj.race.charts[c].entries[e].description);
                                    vals.push(resObj.race.charts[c].entries[e].selectionItem.id);
                                }
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
                                for (var c = 0; c < resObj.race.charts.length; c++) {
                                    for (var e = 0; e < resObj.race.charts[c].entries.length; e++) {
                                        if (resObj.race.charts[c].type.id == itemtypes.CHART.STANDARD ||
                                           resObj.race.charts[c].type.id == itemtypes.CHART.SELECTION) {
                                            if (results[r].chartId == resObj.race.charts[c].id) {
                                                if (results[r].orderIndex == resObj.race.charts[c].entries[e].orderIndex && results[r].columnIndex == resObj.race.charts[c].entries[e].orderIndex) {
                                                    resObj.race.charts[c].entries[e].id = results[r].entryId;
                                                }
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
                    //console.log("29");
                    if (resObj.race.hasAnyTypeOfChart) {
                        vals = [];
                        results = [];
                        sql = 'INSERT INTO adm_link_chart';
                        sql += ' ("referenceId", "chartId", "orderIndex")';
                        sql += ' VALUES ';
                        first = 1;
                        second = 2;
                        third = 3;
                        addComma = false
                        for (var c = 0; c < resObj.race.charts.length; c++) {
                            if (addComma) {
                                sql += ', ';
                            }
                            sql += '($' + first.toString() + ', $' + second.toString() + ', $' + third.toString() + ')';
                            first = first + 3;
                            second = second + 3;
                            third = third + 3;
                            vals.push(resObj.race.id);
                            vals.push(resObj.race.charts[c].id);
                            vals.push(resObj.race.charts[c].orderIndex);
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
                function insertNaturalWeapons(resObj, callback){
                    //console.log("30");
                    if (resObj.race.hasNaturalWeapons) {
                        vals = [resObj.race.id];
                        results = [];
                        first = 2;
                        second = 3;
                        third = 4;
                        fourth = 5;
                        fifth = 6;
                        sixth = 7;
                        addComma = false;
                        sql = 'INSERT INTO adm_link_natural_weapon';
                        sql += ' ("referenceId", "naturalWeaponTypeId", "damageTypeId", "damageDiceId", "damageAbilityScoreId", "hitAbilityScoreId", "attackCount")';
                        sql += ' VALUES ';
                        for (var e = 0; e < resObj.race.naturalWeapons.length; e++) {
                            if (addComma) {
                                sql += ', ';
                            }
                            sql += ' ($1, $' + first.toString() + ', $' + second.toString() + ', $' + third.toString();
                            sql += ', $' + fourth.toString() + ', $' + fifth.toString() + ', $' + sixth.toString() + ')';
                            addComma = true;
                            first = first + 6;
                            second = second + 6;
                            third = third + 6;
                            fourth = fourth + 6;
                            fifth = fifth + 6;
                            sixth = sixth + 6;
                            vals.push(resObj.race.naturalWeapons[e].type.id);
                            vals.push(resObj.race.naturalWeapons[e].damage.type.id);
                            vals.push(resObj.race.naturalWeapons[e].damage.dice.id);
                            vals.push(resObj.race.naturalWeapons[e].damage.abilityScore.id);
                            vals.push(resObj.race.naturalWeapons[e].attack.abilityScore.id);
                            vals.push(resObj.race.naturalWeapons[e].attack.count);
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
                function insertBreathWeapon(resObj, callback) {
                    //console.log("31");
                    if (resObj.race.hasBreathWeapons) {
                        vals = [resObj.race.id];
                        results = [];
                        first = 2;
                        second = 3;
                        third = 4;
                        fourth = 5;
                        fifth = 6;
                        sixth = 7;
                        seventh = 8;
                        eighth = 9;
                        ninth = 10;
                        tenth = 11;
                        eleventh = 12;
                        twelfth = 13;
                        addComma = false;
                        sql = 'INSERT INTO adm_link_breath_weapon';
                        sql += ' ("referenceId", "damageTypeId", "baseDamageDiceId", "range", "areaOfEffectId", "saveDCAbilityScoreId", "saveAbilityScoreId"';
                        sql += ', "orderIndex", "baseSaveDC", "saveDCProficiencyBonus", "chargeCount", "rechargeTypeId", "savingThrowEffectId")';
                        sql += ' VALUES ';
                        for (var e = 0; e < resObj.race.breathWeapons.length; e++) {
                            if (addComma) {
                                sql += ', ';
                            }
                            sql += ' ($1, $' + first.toString() + ', $' + second.toString() + ', $' + third.toString();
                            sql += ', $' + fourth.toString() + ', $' + fifth.toString() + ', $' + sixth.toString();
                            sql += ', $' + seventh.toString() + ', $' + eighth.toString() + ', $' + ninth.toString();
                            sql += ', $' + tenth.toString() + ', $' + eleventh.toString() + ', $' + twelfth.toString() + ')';
                            addComma = true;
                            first = first + 12;
                            second = second + 12;
                            third = third + 12;
                            fourth = fourth + 12;
                            fifth = fifth + 12;
                            sixth = sixth + 12;
                            seventh = seventh + 12;
                            eighth = eighth + 12;
                            ninth = ninth + 12;
                            tenth = tenth + 12;
                            eleventh = eleventh + 12;
                            twelfth = twelfth + 12;
                            vals.push(resObj.race.breathWeapons[e].damage.type.id);
                            vals.push(resObj.race.breathWeapons[e].damage.dice.id);
                            vals.push(resObj.race.breathWeapons[e].range);
                            vals.push(resObj.race.breathWeapons[e].areaOfEffect.shape.id);
                            vals.push(resObj.race.breathWeapons[e].savingThrow.dc.abilityScore.id);
                            vals.push(resObj.race.breathWeapons[e].savingThrow.abilityScore.id);
                            vals.push(e);
                            vals.push(resObj.race.breathWeapons[e].savingThrow.dc.base);
                            vals.push(resObj.race.breathWeapons[e].savingThrow.dc.applyProficiencyBonus);
                            vals.push(resObj.race.breathWeapons[e].charges.count);
                            vals.push(resObj.race.breathWeapons[e].charges.rechargeType.id);
                            vals.push(resObj.race.breathWeapons[e].savingThrow.effect.id);
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
                function insertBreathWeaponChargesImprovement(resObj, callback) {
                    //console.log("32");
                    if (resObj.race.hasBreathWeapons && resObj.race.breathWeapons && resObj.race.breathWeapons.charges && resObj.race.breathWeapons.charges.length != 0) {
                        vals = [resObj.race.id];
                        results = [];
                        first = 2;
                        second = 3;
                        third = 4;
                        addComma = false;
                        sql = 'INSERT INTO adm_link_breath_weapon_charges';
                        sql += ' ("referenceId", "orderIndex", "characterLevel", "chargeCount")';
                        sql += ' VALUES ';
                        for (var e = 0; e < resObj.race.breathWeapons.length; e++) {
                            for (var w = 0; w < refObj.race.breathWeapons.charges.improvement.length; w++) {
                                if (addComma) {
                                    sql += ', ';
                                }
                                sql += ' ($1, $' + first.toString() + ', $' + second.toString() + ', $' + third.toString() + ')';
                                addComma = true;
                                first = first + 3;
                                second = second + 3;
                                third = third + 3;
                                vals.push(e);
                                vals.push(resObj.race.breathWeapons[e].charges.improvement[w].characterLevel);
                                vals.push(resObj.race.breathWeapons[e].charges.improvement[w].count);
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
                function insertBreathWeaponDamageImprovement(resObj, callback) {
                    //console.log("33");
                    if (resObj.race.hasBreathWeapons && resObj.race.breathWeapons && resObj.race.breathWeapons.damage && resObj.race.breathWeapons.damage.length != 0) {
                        vals = [resObj.race.id];
                        results = [];
                        first = 2;
                        second = 3;
                        third = 4;
                        addComma = false;
                        sql = 'INSERT INTO adm_link_breath_weapon_charges';
                        sql += ' ("referenceId", "orderIndex", "characterLevel", "damageDiceId")';
                        sql += ' VALUES ';
                        for (var e = 0; e < resObj.race.breathWeapons.length; e++) {
                            for (var w = 0; w < refObj.race.breathWeapons.damage.improvement.length; w++) {
                                if (addComma) {
                                    sql += ', ';
                                }
                                sql += ' ($1, $' + first.toString() + ', $' + second.toString() + ', $' + third.toString() + ')';
                                addComma = true;
                                first = first + 3;
                                second = second + 3;
                                third = third + 3;
                                vals.push(e);
                                vals.push(resObj.race.breathWeapons[e].damage.improvement[w].characterLevel);
                                vals.push(resObj.race.breathWeapons[e].damage.improvement[w].damageDiceId);
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
                }
            ], function(error, result) {
                if (error) {
                    console.error(error);
                }
                return res.json(result);
            });
        });
    });
    app.get('/api/adm/races', function(req, res) {
        var results = [];
        var vals = [];
        pool.connect(function(err, client, done) {
            if (err) {
                done();
                console.error(err);
                return res.status(500).json({ success: false, data: err});
            }
            sql = 'SELECT i.id, i."itemName" as name';
            sql += ', get_item(race."parentId") AS "parent"';
            sql += ', get_monster_tags(i.id) AS "tags"';
            sql += ', get_item(i."resourceId") AS "resource"';
            sql += ', get_item(race."sizeId") AS "size"';
            sql += ', get_item(race."monsterTypeId") AS "type"';
            sql += ', get_monster_tags(i.id) AS "tags"';
            sql += ', get_array_with_int_value(i.id, $2, \'speed\') AS "movement"';
            sql += ', get_array_with_int_value(i.id, $3, \'range\') AS "senses"';
            sql += ', json_build_object(';
            sql += '	\'strength\', ability.strength';
            sql += '    , \'dexterity\', ability.dexterity';
            sql += '    , \'constitution\', ability.constitution';
            sql += '    , \'wisdom\', ability.wisdom';
            sql += '    , \'intelligence\', ability.intelligence';
            sql += '    , \'charisma\', ability.charisma';
            sql += '    , \'selection\', json_build_object(';
            sql += '        \'count\', ability."selectCount"';
            sql += '        , \'modifier\', ability."selectModifier"';
            sql += '    )';
            sql += ') AS "abilityScores"';
            sql += ', get_race_vitals(i.id) AS "vitals"';
            sql += ', get_proficiency_groups(i.id) AS "proficiencyGroups"';
            sql += ', get_base_mechanics(i.id) AS "mechanics"';
            sql += ', get_race_spellcasting(i.id) AS "spellcasting"';
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
            sql += ', get_natural_weapons(i.id) AS "naturalWeapons"';
            sql += ', get_breath_weapons(i.id) AS "breathWeapons"';
            sql += ', get_subrace_variant(i.id, false) AS "subraces"';
            sql += ', get_subrace_variant(i.id, true) AS "variants"';
            sql += ', race."isVariant"';
            sql += ' FROM adm_core_item i';
            sql += ' INNER JOIN adm_def_race race ON race."raceId" = i.id';
            sql += ' LEFT OUTER JOIN adm_def_race_ability_score ability ON ability."raceId" = i.id';
            sql += ' WHERE i."itemTypeId" = $1';
            sql += ' GROUP BY i.id, i."itemName"';
            sql += ', race."sizeId", race."monsterTypeId", race."parentId", race."isVariant"';
            sql += ', ability.strength, ability.dexterity, ability.constitution, ability.wisdom, ability.intelligence, ability.charisma';
            sql += ', ability."selectCount", ability."selectModifier"';
            sql += ' ORDER BY i."itemName"';
            vals = [
                itemtypes.TYPE.RACE,
                itemtypes.TYPE.MOVEMENT_TYPE,
                itemtypes.TYPE.ADVANCED_SENSE
            ];
            var query = client.query(new pg.Query(sql, vals));
            query.on('row', function(row) {
                results.push(row);
            });
            query.on('end', function() {
                done();
                for (var q = 0; q < results.length; q++) {
                    if (results[q].vitals == null) {
                        results[q].vitals = {
                            height: {
                                base: 0,
                                dice: {id: 0, dieCount: 0, dieType: 0, rendered: '', modifier: 0, multiplier: 1, divisor: 0}
                            },
                            weight: {
                                base: 0,
                                dice: {id: 0, dieCount: 0, dieType: 0, rendered: '', modifier: 0, multiplier: 1, divisor: 0}
                            }
                        };
                    }
                    if (results[q].proficiencyGroups == null) {
                        results[q].proficiencyGroups = [];
                    }
                    if (results[q].charts == null) {
                        results[q].charts = [];
                    }
                    if (results[q].supplementalDescriptions == null) {
                        reults[q].supplementalDescriptions = [];
                    }
                    if (results[q].parent == null) {
                        results[q].parent = {id: 0};
                    }
                    if (results[q].spellcasting.spellSelections.length == 1) {
                        var clearSpellSelections = true;
                        for (var e = 0; e < results[q].spellcasting.spellSelections[e].length; e++) {
                            if (results[q].spellcasting.spellSelections[e].castingCount != null) {
                                clearSpellSelections = false;
                            }
                            if (results[q].spellcasting.spellSelections[e].characterLevel != null) {
                                clearSpellSelections = false;
                            }
                            if (results[q].spellcasting.spellSelections[e].rechargeType != null) {
                                clearSpellSelections = false;
                            }
                            if (results[q].spellcasting.spellSelections[e].school != null) {
                                clearSpellSelections = false;
                            }
                            if (results[q].spellcasting.spellSelections[e].selectionCount != null) {
                                clearSpellSelections = false;
                            }
                            if (results[q].spellcasting.spellSelections[e].selectionType != null) {
                                clearSpellSelections = false;
                            }
                            if (results[q].spellcasting.spellSelections[e].spell != null) {
                                clearSpellSelections = false;
                            }
                            if (results[q].spellcasting.spellSelections[e].spellLevel != null) {
                                clearSpellSelections = false;
                            }
                            if (results[q].spellcasting.spellSelections[e].spelllist != null) {
                                clearSpellSelections = false;
                            }
                        }
                        if (clearSpellSelections) {
                            results[q].spellcasting.spellSelections = [];
                        }
                        if (results[q].spellcasting.abilityScore && results[q].spellcasting.abilityScore.name == null) {
                            results[q].spellcasting.abilityScore = {};
                        }
                        if (results[q].mechanics && results[q].mechanics && results[q].mechanics.length != 0) {
                            if (results[q].mechanics[0] == null) {
                                results[q].mechanics = [];
                            }
                        }
                        if (results[q].senses == null) {
                            results[q].senses = [];
                        }
                        if (results[q].naturalWeapons && results[q].naturalWeapons.length != 0) {
                            if (results[q].naturalWeapons[0] == null) {
                                results[q].naturalWeapons = [];
                            }
                        }
                        if (results[q].breathWeapons && results[q].breathWeapons.length != 0) {
                            if (results[q].breathWeapons[0] == null) {
                                results[q].breathWeapons = [];
                            }
                        }
                        if (results[q].subraces == null || (results[q].subraces && results[q].subraces.length != 0 && results[q].subraces[0] == null)) {
                            delete results[q].subraces;
                        }
                        if (results[q].variants == null || (results[q].variants && results[q].variants.length != 0 && results[q].variants[0] == null)) {
                            delete results[q].variants;
                        }
                    }
                }
                return res.json(results);
            });
        });
    });
};
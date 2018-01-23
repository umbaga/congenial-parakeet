module.exports = function(app, pg, async, pool, itemtypes, common) {
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
                    vals = resObj;
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
                    vals = resObj;
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
                    vals = resObj;
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
                    vals = resObj;
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
                    vals = resObj;
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
                function deleteBreathWeapons(resObj, callback) {
                    common.remove.breathWeapons(req.params.id, function() {
                        return callback(null, resObj);
                    });
                },
                function deleteNaturalWeapons(resObj, callback) {
                    common.remove.naturalWeapons(req.params.id, function() {
                        return callback(null, resObj);
                    });
                },
                function deleteProficiencyGroups(resObj, callback) {
                    common.remove.proficiencyGroups(req.params.id, function() {
                        return callback(null, resObj);
                    });
                },
                function deleteMechanics(resObj, callback) {
                    common.remove.mechanics(req.params.id, function() {
                        return callback(null, resObj);
                    });
                },
                function deleteSpellcasting(resObj, callback) {
                    common.remove.mechanics(req.params.id, function() {
                        return callback(null, resObj);
                    });
                },
                function deleteCharts(resObj, callback) {
                    common.remove.charts(req.params.id, function() {
                        return callback(null, resObj);
                    });
                },
                function deleteSupplementalDescriptions(resObj, callback) {
                    common.remove.supplementalDescriptions(req.params.id, function() {
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
                    var addComma, parameterArray;
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
                        resObj.race.id = results[0].raceId;
                        return callback(null, resObj);
                    });
                },
                function insertDescription(resObj, callback) {
                    results = [];
                    vals = [];
                    if (resObj.race.description && resObj.race.description.length != 0) {
                        sql = 'INSERT INTO adm_core_description';
                        sql += '("itemId", "description", "descriptionTypeId")';
                        sql += ' VALUES ($1, $2, $3)';
                        vals = [resObj.race.id, resObj.race.description, itemtypes.DESCRIPTION.GENERAL];
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
                function insertRaceDefTable(resObj, callback) {
                    //console.log('race-00');
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
                function insertAbilityScoreTable(resObj, callback) {
                    //console.log('race-01');
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
                function insertSensesAndMovement(resObj, callback) {
                    //console.log('race-02');
                    if ((resObj.race.movement && resObj.race.movement.length != 0) || (resObj.race.senses && resObj.race.senses.length != 0)) {
                        vals = [];
                        results = [];
                        addComma = false;
                        sql = 'INSERT INTO adm_link_array_with_int_value';
                        sql += ' ("referenceId", "referenceTypeId", "intValue")';
                        sql += ' VALUES ';
                        parameterArray = common.parameterArray.resetValues(3);
                        if (resObj.race.movement && resObj.race.movement.length != 0) {
                            for (var e = 0; e < resObj.race.movement.length; e++) {
                                if (addComma) {
                                    sql += ', ';
                                }
                                sql += common.parameterArray.sql(parameterArray);
                                vals.push(resObj.race.id);
                                vals.push(resObj.race.movement[e].id);
                                vals.push(resObj.race.movement[e].speed);
                                parameterArray = common.parameterArray.incrementValues(parameterArray);
                                addComma = true;
                            }
                        }
                        if (resObj.race.senses && resObj.race.senses.length != 0) {
                            for (var e = 0; e < resObj.race.senses.length; e++) {
                                if (addComma) {
                                    sql += ', ';
                                }
                                sql += common.parameterArray.sql(parameterArray);
                                vals.push(resObj.race.id);
                                vals.push(resObj.race.senses[e].id);
                                vals.push(resObj.race.senses[e].range);
                                parameterArray = common.parameterArray.incrementValues(parameterArray);
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
                function insertMonsterTags(resObj, callback) {
                    //console.log('race-03');
                    if (resObj.race.tags && resObj.race.tags.length != 0) {
                        vals = [];
                        results = [];
                        addComma = false;
                        sql = 'INSERT INTO adm_link_monster_tag';
                        sql += ' ("referenceId", "monsterTagId")';
                        sql += ' VALUES ';
                        parameterArray = common.parameterArray.resetValues(2);
                        for (var e = 0; e < resObj.race.tags.length; e++) {
                            if (addComma) {
                                sql += ', ';
                            }
                            sql += common.parameterArray.sql(parameterArray);
                            vals.push(resObj.race.id);
                            vals.push(resObj.race.tags[e].id);
                            parameterArray = common.parameterArray.incrementValues(parameterArray);
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
                function manageDice(resObj, callback) {
                    //console.log('race-04');
                    var diceArr = [];
                    if (resObj.race.vitals && resObj.race.vitals.height && resObj.race.vitals.weight && resObj.race.vitals.height.base != 0 && resObj.race.vitals.weight.base != 0) {
                        diceArr.push(resObj.race.vitals.height.dice);
                        diceArr.push(resObj.race.vitals.weight.dice);
                    }
                    if (diceArr.length != 0) {
                        common.getObjects.dice(diceArr, function(dice) {
                            resObj.race.vitals.height.dice.id = common.datatypes.dice.getId(dice, resObj.race.vitals.height.dice);
                            resObj.race.vitals.weight.dice.id = common.datatypes.dice.getId(dice, resObj.race.vitals.weight.dice);
                            return callback(null, resObj);
                        });
                    } else {
                        return callback(null, resObj);
                    }
                },
                function insertVitals(resObj, callback) {
                    //console.log('race-05');
                    if (resObj.race.vitals && resObj.race.vitals.height && resObj.race.vitals.weight && resObj.race.vitals.height.base != 0 && resObj.race.vitals.weight.base != 0) {
                        results = [];
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
                function manageProficiencyGroups(resObj, callback) {
                    //console.log('race-06');
                    if (resObj.race.proficiencyGroups && resObj.race.proficiencyGroups.length != 0) {
                        common.insert.proficiencyGroups(resObj.race.proficiencyGroups, resObj.race.id, function(results) {
                            resObj.race.proficiencyGroups = results;
                            return callback(null, resObj);
                        });
                    } else {
                        return callback(null, resObj);
                    }
                },
                function manageMechanics(resObj, callback) {
                    //console.log('race-07');
                    if (resObj.race.mechanics && resObj.race.mechanics.length != 0) {
                        common.insert.mechanics(resObj.race.mechanics, resObj.race.id, function(results) {
                            resObj.race.mechanics = results;
                            return callback(null, resObj);
                        });
                    } else {
                        return callback(null, resObj);
                    }
                },
                function manageCharts(resObj, callback) {
                    //console.log('race-08');
                    if (resObj.race.charts && resObj.race.charts.length != 0) {
                        common.insert.charts(resObj.race.charts, resObj.race.id, function(results) {
                            resObj.race.charts = results;
                            return callback(null, resObj);
                        });
                    } else {
                        return callback(null, resObj);
                    }
                },
                function manageSupplementalDescriptions(resObj, callback) {
                    //console.log('race-09');
                    if (resObj.race.supplementalDescriptions && resObj.race.supplementalDescriptions.length != 0) {
                        common.insert.supplementalDescriptions(resObj.race.supplementalDescriptions, resObj.race.id, function(results) {
                            resObj.race.supplementalDescriptions = results;
                            return callback(null, resObj);
                        });
                    } else {
                        return callback(null, resObj);
                    }
                },
                function manageSpellcasting(resObj, callback) {
                    //console.log('race-10');
                    if (resObj.race.spellcasting && resObj.race.spellcasting.abilityScore && resObj.race.spellcasting.abilityScore.id != 0 && resObj.race.spellcasting.spellSelections && resObj.race.spellcasting.spellSelections.length != 0) {
                        common.insert.spellcasting(resObj.race.spellcasting, resObj.race.id, function(results) {
                            resObj.race.spellcasting = results;
                            return callback(null, resObj);
                        });
                    } else {
                        return callback(null, resObj);
                    }
                },
                function manageNaturalWeapons(resObj, callback) {
                    //console.log('race-11');
                    if (resObj.race.naturalWeapons && resObj.race.naturalWeapons.length != 0) {
                        common.insert.naturalWeapons(resObj.race.naturalWeapons, resObj.race.id, function(results) {
                            resObj.race.naturalWeapons = results;
                            return callback(null, resObj);
                        });
                    } else {
                        return callback(null, resObj);
                    }
                },
                function manageBreathWeapons(resObj, callback) {
                    //console.log('race-12');
                    if (resObj.race.breathWeapons && resObj.race.breathWeapons.length != 0) {
                        common.insert.breathWeapons(resObj.race.breathWeapons, resObj.race.id, function(results) {
                            resObj.race.breathWeapons = results;
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
            sql += ', get_spellcasting(i.id) AS "spellcasting"';
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
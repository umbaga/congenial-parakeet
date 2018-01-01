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
                        var tmp = [req.params.id];
                        return callback(null, tmp);
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
                        var tmp = [req.params.id];
                        return callback(null, tmp);
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
                        var tmp = [req.params.id];
                        return callback(null, tmp);
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
                        var tmp = [req.params.id];
                        return callback(null, tmp);
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
                        var tmp = [req.params.id];
                        return callback(null, tmp);
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
                        var tmp = [req.params.id];
                        return callback(null, tmp);
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
                        var tmp = [req.params.id];
                        return callback(null, tmp);
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
                        var tmp = [req.params.id];
                        return callback(null, tmp);
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
                        var tmp = [req.params.id];
                        return callback(null, tmp);
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
                        var tmp = [req.params.id];
                        return callback(null, tmp);
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
                        var tmp = [req.params.id];
                        return callback(null, tmp);
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
                        var tmp = req.body;
                        tmp.race.hasMovementOrSenses = false;
                        tmp.race.hasMovement = false;
                        tmp.race.hasSenses = false;
                        if ((tmp.race.movement && tmp.race.movement.length != 0)) {
                            tmp.race.hasMovementOrSenses = true;
                            tmp.race.hasMovement = true;
                        }
                        if ((tmp.race.sense && tmp.races.senses.length != 0)) {
                            tmp.race.hasMovementOrSenses = true;
                            tmp.race.hasSenses = true;
                        }
                        tmp.race.needsDice = false;
                        if (tmp.race.vitals && tmp.race.vitals.height && tmp.race.vitals.height.base != 0) {
                            tmp.race.needsDice = true;
                        }
                        return callback(null, tmp);
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
                    var first, second, third, fourth, fifth, sixth, seventh, eighth, ninth;
                    var needsComma = false;
                    vals = [];
                    results = [];
                    sql = 'INSERT INTO adm_core_item';
                    sql += ' ("itemName", "resourceId", "itemTypeId")';
                    sql += ' VALUES ($1, $2, $3) returning id AS "raceId";';
                    vals = [req.body.race.name, req.body.race.resource.id, itemtypes.TYPE.RACE];
                    var query = client.query(new pg.Query(sql, vals));
                    console.log(query);
                    query.on('row', function(row) {
                        results.push(row);
                    });
                    query.on('end', function() {
                        done();
                        var tmp = req.body;
                        tmp.race.hasMovementOrSenses = false;
                        tmp.race.hasMovement = false;
                        tmp.race.hasSenses = false;
                        if ((tmp.race.movement && tmp.race.movement.length != 0)) {
                            tmp.race.hasMovementOrSenses = true;
                            tmp.race.hasMovement = true;
                        }
                        if ((tmp.race.sense && tmp.races.senses.length != 0)) {
                            tmp.race.hasMovementOrSenses = true;
                            tmp.race.hasSenses = true;
                        }
                        tmp.race.needsDice = false;
                        if (tmp.race.vitals && tmp.race.vitals.height && tmp.race.vitals.height.base != 0) {
                            tmp.race.needsDice = true;
                        }
                        tmp.race.hasProficiencies = false;
                        if (tmp.race.proficiencyGroups && tmp.race.proficiencyGroups.length != 0) {
                            tmp.race.hasProficiencies = true;
                        }
                        tmp.race.hasMechanics = false;
                        if (tmp.race.mechanics && tmp.race.mechanics.base && tmp.race.mechanics.base.length != 0) {
                            tmp.race.hasMechanics = true;
                        }
                        tmp.race.hasSpellcasting = false;
                        if (tmp.race.spellcasting && tmp.race.spellcasting.abilityScore && tmp.race.spellcasting.abilityScore.id != 0) {
                            tmp.race.hasSpellcasting = true;
                        }
                        tmp.race.hasSpecialMechanicText = false;
                        if (tmp.race.mechanics && tmp.race.mechanics.base && tmp.race.mechanics.base.length != 0) {
                            for (var e = 0; e < tmp.race.mechanics.base.length; e++) {
                                tmp.race.mechanics.base[e].specialTextId = 0;
                                if (tmp.race.mechanics.base[e].specialText && tmp.race.mechanics.base[e].specialText.length != 0) {
                                    tmp.race.hasSpecialMechanicText = true;
                                }
                            }
                        }
                        tmp.race.id = results[0].raceId;
                        return callback(null, tmp);
                    });
                },
                function insertRaceTable(resObj, callback) {
                    vals = [];
                    results = [];
                    sql = 'INSERT INTO adm_def_race';
                    sql += ' ("raceId", "parentId", "sizeId", "monsterTypeId")';
                    sql += ' VALUES ';
                    sql += ' ($1, $2, $3, $4)';
                    vals = [
                        resObj.race.id,
                        resObj.race.parent.id,
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
                function insertProficiencyGroupItem(resObj, callback) {
                    console.log('prof group item');
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
                    console.log('prof group');
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
                    console.log('prof');
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
                    console.log('prof group link');
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
                        console.log(sql);
                        console.log(vals);
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
                    console.log('insert dice');
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
                    console.log('assign dice');
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
                                }
                            }
                            return callback(null, resObj);
                        });
                    } else {
                        return callback(null, resObj);
                    }
                },
                function insertRaceAbilityScoreTable(resObj, callback) {
                    console.log('ability score');
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
                    console.log('movement/sense link');
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
                    console.log('monster tags link');
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
                    console.log('vitals');
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
                        for (var e = 0; e < resObj.race.mechanics.base.length; e++) {
                            if (resObj.race.mechanics.base[e].specialText && resObj.race.mechanics.base[e].specialText.length != 0) {
                                if (needsComma) {
                                    sql += ', ';
                                }
                                sql += ' ($1, $2, $' + first.toString() + ')';
                                first++;
                                vals.push(resObj.race.mechanics.base[e].specialText);
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
                                    for (var m = 0; m < resObj.race.mechanics.base.length; m++) {
                                        if (results[e].specialText == resObj.race.mechanics.base[m].specialText) {
                                            resObj.race.mechanics.base[m].specialTextId = results[e].specialTextId;
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
                function insertMechanics(resObj, callback) {
                    console.log('mechanics');
                    if (resObj.race.hasMechanics) {
                        results = [];
                        vals = [resObj.race.id];
                        sql = 'INSERT INTO adm_link_mechanic';
                        sql += ' ("referenceId", "targetId", "typeId", "value", "diceId", "valueObjectId", "specialTextId")';
                        sql += ' VALUES ';
                        first = 2;
                        second = 3;
                        third = 4;
                        fourth = 5;
                        fifth = 6;
                        sixth = 7;
                        for (var e = 0; e < resObj.race.mechanics.base.length; e++) {
                            if (e != 0) {
                                sql += ', ';
                            }
                            sql += ' ($1, $' + first.toString() + ', $' + second.toString() + ', $' + third.toString();
                            sql += ', $' + fourth.toString() + ', $' + fifth.toString() + ', $' + sixth.toString() + ')';
                            first = first + 6;
                            second = second + 6;
                            third = third + 6;
                            fourth = fourth + 6;
                            fifth = fifth + 6;
                            sixth = sixth + 6;
                            vals.push(resObj.race.mechanics.base[e].target.id);
                            vals.push(resObj.race.mechanics.base[e].type.id);
                            vals.push(resObj.race.mechanics.base[e].value);
                            vals.push(resObj.race.mechanics.base[e].dice.id);
                            vals.push(resObj.race.mechanics.base[e].valueObject.id);
                            vals.push(resObj.race.mechanics.base[e].specialTextId)
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
                    console.log('spellcasting');
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
                    console.log('spell selections');
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
                    console.log('supplemental description - 1');
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
                    console.log('supplemental description - 2');
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
                            console.log('done');
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
            sql += ', json_build_object(';
            sql += '    \'base\', get_base_mechanics(i.id)';
            sql += ') AS "mechanics"';
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
            sql += ' FROM adm_core_item i';
            sql += ' INNER JOIN adm_def_race race ON race."raceId" = i.id';
            sql += ' LEFT OUTER JOIN adm_def_race_ability_score ability ON ability."raceId" = i.id';
            sql += ' WHERE i."itemTypeId" = $1';
            sql += ' GROUP BY i.id, i."itemName"';
            sql += ', race."sizeId", race."monsterTypeId", race."parentId"';
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
                        if (results[q].mechanics && results[q].mechanics.base && results[q].mechanics.base.length != 0) {
                            if (results[q].mechanics.base[0] == null) {
                                results[q].mechanics.base = [];
                            }
                        }
                        if (results[q].senses == null) {
                            results[q].senses = [];
                        }
                    }
                }
                return res.json(results);
            });
        });
    });
};
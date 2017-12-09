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
                    sql += ' WHERE "spellListId" = $1';
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
                function deleteMovementLinkTable(resObj, callback) {
                    sql = 'DELETE FROM adm_link_movement';
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
                        return callback(null, tmp);
                    });
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
                    results = [];
                    first = 2;
                    vals = [req.params.id];
                    sql = 'DELETE FROM adm_link_movement';
                    if (resObj.race.movement && resObj.race.movement.length != 0) {
                        sql += ' WHERE "referenceId" = $1';
                        sql += ' AND "movementTypeId NOT IN (';
                        for (var e = 0; e < resObj.race.movement.length; e++) {
                            sql += '$' + first.toString();
                            vals.push(resObj.race.movement[e].id);
                            first = first + 1;
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
                function insertMovementLink(resObj, callback) {
                    results = [];
                    first = 2;
                    second = 3;
                    vals = [req.params.id];
                    if (resObj.race.movement && resObj.race.movement.length != 0) {
                        sql = 'with vals as (';
                        for (var e = 0; e < resObj.race.movement.length; e++) {
                            if (e != 0) {
                                sql += ' UNION ';
                            }
                            sql += 'select $1 :: bigint AS "referenceId"';
                            sql += ', $' + first.toString() + ' :: bigint AS "movementTypeId"';
                            sql += ', $' + second.toString() + ' :: smallint AS "speed"';
                            first = first + 2;
                            second = second + 2;
                            vals.push(resObj.race.movement[e].id);
                            vals.push(resObj.race.movement[e].speed);
                        }
                        sql += ')';
                        sql += ' insert into adm_link_movement ("referenceId", "movementTypeId", "speed")';
                        sql += ' select v."referenceId", v."movementTypeId", v."speed"';
                        sql += ' from vals as v';
                        sql += ' where not exists (select * from adm_link_movement as t';
                        sql += ' where t."referenceId" = v."referenceId"';
                        sql += ' and t."movementTypeId" = v."movementTypeId")';
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
                function updateMovementLink(resObj, callback) {
                    results = [];
                    first = 2;
                    second = 3;
                    vals = [req.params.id];
                    if (resObj.race.movement && resObj.race.movement.length != 0) {
                        sql = 'UPDATE adm_link_movement as m';
                        sql += ' SET "speed" = c."speed"';
                        sql += ' FROM (VALUES';
                        for (var e = 0; e < resObj.race.movement.length; c++) {
                            if (e != 0) {
                                sql += ', ';
                            }
                            sql += '($1, $' + first.toString() + ', $' + second.toString() + ')';
                            first = first + 2;
                            second = second + 2;
                            vals.push(resObj.race.movement.id);
                            vals.push(resObj.race.movement.speed);
                        }
                        sql += ') as c("referenceId", "movementTypeId", "speed")';
                        sql += ' WHERE c."referenceId" = t."referenceId"';
                        sql += ' AND c."movementTypeId" = t."movementTypeId"';
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
                    var first, second, third, fourth, fifth, sixth;
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
                        var tmp = req.body;
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
                function insertRaceAbilityScoreTable(resObj, callback) {
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
                function insertMovementLinkTable(resObj, callback) {
                    if (resObj.race.movement && resObj.race.movement.length != 0) {
                        vals = [resObj.race.id];
                        results = [];
                        first = 2;
                        second = 3;
                        sql = 'INSERT INTO adm_link_movement';
                        sql += ' ("referenceId", "movementTypeId", "speed")';
                        sql += ' VALUES ';
                        for (var e = 0; e < resObj.race.movement.length; e++) {
                            if (e != 0) {
                                sql += ', ';
                            }
                            sql += ' ($1, $' + first.toString() + ', $' + second.toString() + ')';
                            first = first + 2;
                            second = second + 2;
                            vals.push(resObj.race.movement.id);
                            vals.push(resObj.race.movement.speed);
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
                            vals.push(resObj.race.tags.id);
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
            sql += ', race."parentId"';
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
                return res.json(results);
            });
        });
    });
};
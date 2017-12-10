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
                        if (tmp.race.vitals && tmp.race.vital.height && tmp.race.vital.height.base != 0) {
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
                    var first, second, third, fourth, fifth, sixth;
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
                        if (tmp.race.vitals && tmp.race.vital.height && tmp.race.vital.height.base != 0) {
                            tmp.race.needsDice = true;
                        }
                        tmp.race.id = results[0].raceId;
                        return callback(null, tmp);
                    });
                },
                function insertDice(resObj, callback) {
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
                        if (resObj.weapon.needsAltDamage) {
                            vals.push(resObj.weapon.damage.versatile.dice.dieCount);
                            vals.push(resObj.weapon.damage.versatile.dice.dieType);
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
                function assignDiceId(resObj, callback) {
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
                function insertMovementSenseLinkTable(resObj, callback) {
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
                                vals.push(resObj.race.movement.id);
                                vals.push(resObj.race.movement.speed);
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
                                vals.push(resObj.race.senses.id);
                                vals.push(resObj.race.senses.range);
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
                },
                function insertVitals(resObj, callback) {
                    if (resObj.race.vitals && resObj.race.vitals.height && resObj.race.vitals.height.base != 0) {
                        results = []
                        sql = 'INSERT INTO adm_def_race_vitals';
                        sql += ' ("raceId", "baseHeight", "baseWeight", "heightDiceId", "weightDiceId")';
                        sql += ' VALUES ($1, $2, $3, $4, $5)';
                        vals = [
                            resObj.race.id,
                            resObj.race.height.base,
                            resObj.race.weight.base,
                            resObj.race.height.dice.id,
                            resObj.race.weight.dice.id
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
            sql += ', get_race_vitals(i.id) AS "vitals"';
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
                console.log(results.length);
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
                }
                return res.json(results);
            });
        });
    });
};
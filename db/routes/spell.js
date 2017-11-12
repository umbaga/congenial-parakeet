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
                function deleteDamage(resObj, callback) {
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
                    results = [];
                    vals = [];
                    sql = 'INSERT INTO adm_core_description';
                    sql += ' ("itemId", "description", "descriptionTypeId")';
                    sql += ' VALUES ($1, $2, 122)';
                    vals = [resObj.spell.id, resObj.spell.atHigherLevels];
                    var query = client.query(new pg.Query(sql, vals));
                    query.on('row', function(row) {
                        results.push(row);
                    });
                    query.on('end', function() {
                        done();
                        return callback(null, resObj);
                    });
                },
                function insertSpellTable(resObj, callback) {
                    results = [];
                    vals = [];
                    sql = 'INSERT INTO adm_def_spell';
                    sql += ' ("spellId", "level", "schoolId", "durationId", "rangeId", "castingTimeId", "isRitual")';
                    sql += ' VALUES ($1, $2, $3, $4, $5, $6)';
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
                    if (resObj.spell.damage && resObj.spell.damage.dieCount && resObj.spell.damage.dieCount != 0) {
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
                            resObj.spell.damage.dieCount, 
                            resObj.spell.damage.dieType,
                            resObj.spell.damageImprovement.dieCount,
                            resObj.spell.damageImprovement.dieType
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
                    if (resObj.spell.damage && resObj.spell.damage.dieCount && resObj.spell.damage.dieCount != 0) {
                        sql = 'SELECT * FROM adm_core_dice';
                        sql += ' WHERE ("dieCount" = $1 AND "dieType" = $2)';
                        sql += ' OR ("dieCount" = $3 AND "dieType" = $4)';
                        vals = [
                            resObj.spell.damage.dieCount, 
                            resObj.spell.damage.dieType,
                            resObj.spell.damageImprovement.dieCount,
                            resObj.spell.damageImprovement.dieType
                        ];
                        var query = client.query(new pg.Query(sql, vals));
                        query.on('row', function(row) {
                            results.push(row);
                        });
                        query.on('end', function() {
                            done();
                            for (var e = 0; e < results.length; e++) {
                                if (resObj.spell.damage.dieType == results[e].dieType && resObj.spell.damage.dieCount == results[e].dieCount) {
                                    resObj.spell.damage.id = results[e].id;
                                } else if (resObj.spell.damageImprovement.dieType == results[e].dieType && resObj.spell.damageImprovement.dieCount == results[e].dieCount) {
                                    resObj.spell.damageImprovement.id = results[e].id;
                                }
                            }
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
                    if (resObj.spell.damage && resObj.spell.damage.improvement && resObj.spell.damage.improvement.dice && resObj.spell.damage.dieCount != 0) {
                        results = [];
                        vals = [];
                        sql = 'INSERT INTO adm_def_spell_damage';
                        sql += ' ("spellId", "improvementDiceId")';
                        sql += ' VALUES ($1, $2, $3)';
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
                    if (results[t].damage.dice === undefined) {
                        console.log(results[t].damage);
                        results[t].damage = {};
                        results[t].damage.dice = {rendered: ''};
                        results[t].damage.improvement = {dice: {rendered: ''}};
                        results[t].damage.type = {};
                    }
                }
                return res.json(results);
            });
        });
    });
};
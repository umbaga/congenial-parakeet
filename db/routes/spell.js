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
                    sql += ' ("spellId", "level", "schoolId", "durationId", "rangeId", "castingTimeId")';
                    sql += ' VALUES ($1, $2, $3, $4, $5, $6)';
                    vals = [resObj.spell.id, resObj.spell.level, resObj.spell.school.id, resObj.spell.duration.id, resObj.spell.range.id, resObj.spell.castingTime.id];
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
            sql += ', description.description';
            sql += ', higherleveldesc.description AS "atHigherLevels"';
            sql += ', json_build_object(\'id\', school.id, \'name\', school."itemName") AS school';
            sql += ', json_build_object(\'id\', duration.id, \'name\', duration."itemName") AS duration';
            sql += ', json_build_object(\'id\', range.id, \'name\', range."itemName") AS range';
            sql += ', json_build_object(\'id\', casting.id, \'name\', casting."itemName") AS "castingTime"';
            sql += ', json_agg((SELECT x FROM (SELECT comp.id, comp."itemName" AS name, lnkcomp.description) x)) AS "components"';
            sql += ', json_build_object(\'id\', resource.id, \'name\', resource."itemName") AS "resource"';
            sql += ' FROM adm_core_item i';
            sql += ' INNER JOIN adm_def_spell spell ON spell."spellId" = i.id';
            sql += ' INNER JOIN adm_core_item school ON school.id = spell."schoolId"';
            sql += ' INNER JOIN adm_core_item duration ON duration.id = spell."durationId"';
            sql += ' INNER JOIN adm_core_item range ON range.id = spell."rangeId"';
            sql += ' INNER JOIN adm_core_item casting ON casting.id = spell."castingTimeId"';
            sql += ' INNER JOIN adm_core_description description ON (description."itemId" = i.id AND description."descriptionTypeId" = 171)'
            sql += ' LEFT OUTER JOIN adm_link_spell_component lnkcomp ON lnkcomp."referenceId" = i.id';
            sql += ' LEFT OUTER JOIN adm_core_item comp ON comp.id = lnkcomp."componentId"';
            sql += ' LEFT OUTER JOIN adm_core_description higherleveldesc ON (higherleveldesc."itemId" = i.id AND higherleveldesc."descriptionTypeId" = 122)';
            sql += ' INNER JOIN adm_core_item resource ON resource.id = i."resourceId"';
            sql += ' GROUP BY i.id, i."itemName", spell.level';
            sql += ', school.id, school."itemName"';
            sql += ', duration.id, duration."itemName"';
            sql += ', range.id, range."itemName"';
            sql += ', casting.id, casting."itemName"';
            sql += ', description.description';
            sql += ', higherleveldesc.description';
            sql += ', resource.id, resource."itemName"';
            sql += ' ORDER BY i."itemName"';
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
module.exports = function(app, pg, async, pool, itemtypes, common) {
    app.delete('/api/adm/spelllist/:id', function(req, res) {
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
                function delete_(resObj, callback) {
                    sql = 'DELETE FROM adm_link_spell_list';
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
                }
            ], function(error, result) {
                if (error) {
                    console.error(error);
                }
                return res.json(result);
            });
        });
    });
    app.put('/api/adm/spelllist/:id', function(req, res) {
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
                    vals = [req.params.id, req.body.spelllist.name];
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
                function deleteUnneededLinkTable(resObj, callback) {
                    vals = [req.params.id];
                    sql = 'DELETE FROM adm_link_spell_list';
                    sql += ' WHERE "spellListId" = $1 AND "spellId" NOT IN (';
                    var first = 2;
                    for (var q = 0; q < resObj.spelllist.spells.length; q++) {
                        if (q != 0) {
                            sql += ', ';
                        }
                        sql += '$' + first.toString();
                        vals.push(resObj.spelllist.spells[q].id);
                        first = first + 1;
                    }
                    sql += ')';
                    var query = client.query(new pg.Query(sql, vals));
                    query.on('row', function(row) {
                        results.push(row);
                    });
                    query.on('end', function() {
                        done();
                        return callback(null, resObj);
                    });
                },
                function insertNewLinkTable(resObj, callback) {
                    vals = [req.params.id];
                    sql = 'with vals as ';
                    sql += ' (';
                    var first = 2;
                    for (var q = 0; q < resObj.spelllist.spells.length; q++) {
                        if (q != 0) {
                            sql += ' UNION ';
                        }
                        sql += 'select $1 :: bigint as "spellId", $' + first.toString() +' :: bigint as "spellListId"';
                        first = first + 1;
                        vals.push(resObj.spelllist.spells[q].id);
                    }
                    sql += ')';
                    sql += ' insert into adm_link_spell_list ("spellListId", "spellId") ';
                    sql += ' select v."spellId", v."spellListId" from vals as v ';
                    sql += ' where not exists (';
                    sql += ' select * from adm_link_spell_list as t ';
                    sql += ' where t."spellId" = v."spellId" ';
                    sql += ' and t."spellListId" = v."spellListId"';
                    sql += ')';
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
    app.post('/api/adm/spelllist', function(req, res) {
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
                    vals = [];
                    results = [];
                    sql = 'INSERT INTO adm_core_item';
                    sql += ' ("itemName", "resourceId", "itemTypeId")';
                    sql += ' VALUES ($1, $2, $3) returning id AS "spellListId";';
                    vals = [req.body.spelllist.name, req.body.spelllist.resource.id, itemtypes.TYPE.SPELL_LIST];
                    var query = client.query(new pg.Query(sql, vals));
                    query.on('row', function(row) {
                        results.push(row);
                    });
                    query.on('end', function() {
                        done();
                        var tmp = req.body;
                        tmp.spelllist.id = results[0].spellListId;
                        return callback(null, tmp);
                    });
                },
                function insertLinkTable(resObj, callback) {
                    vals = [];
                    results = [];
                    sql = 'INSERT INTO adm_link_spell_list';
                    sql += ' ("spellListId", "spellId")';
                    sql += ' VALUES ';
                    var first = 1;
                    var second = 2;
                    for (var d = 0; d < resObj.spelllist.spells.length; d++) {
                        if (d != 0) {
                            sql += ', ';
                        }
                        sql += ' ($' + first.toString() + ', $' + second.toString() + ')';
                        first = first + 2;
                        second = second + 2;
                        vals.push(resObj.spelllist.id);
                        vals.push(resObj.spelllist.spells[d].id);
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
    app.get('/api/adm/spelllists', function(req, res) {
        var results = [];
        var vals = [];
        pool.connect(function(err, client, done) {
            if (err) {
                done();
                console.error(err);
                return res.status(500).json({ success: false, data: err});
            }
            sql = 'SELECT i.id, i."itemName" as name';
            sql += ', json_build_object(';
            sql += '    \'id\', resource.id, \'name\', resource."itemName"';
            sql += ') AS "resource"   ';
            sql += ', (';
            sql += '    SELECT CASE WHEN count(spells) = 0 THEN \'[]\' ELSE json_agg(spells) END ';
            sql += '    FROM (';
            sql += '        SELECT spellitem."id", spellitem."itemName" AS name, spell.level';
            sql += '        FROM adm_core_item spellitem';
            sql += '        INNER JOIN adm_link_spell_list spelllink ON spelllink."spellId" = spellitem.id';
            sql += '        INNER JOIN adm_def_spell spell ON spell."spellId" = spellitem.id';
            sql += '        WHERE spelllink."spellListId" = i.id';
            sql += '        GROUP BY spellitem."id", spellitem."itemName", spell.level';
            sql += '        ORDER BY spellitem."itemName"';
            sql += '    ) AS "spells"';
            sql += ')  AS "spells"';
            sql += ' FROM adm_core_item i';
            sql += ' INNER JOIN adm_core_item resource ON resource.id = i."resourceId"';
            sql += ' WHERE i."itemTypeId" = $1';
            sql += ' ORDER BY i."itemName"';
            vals = [
                itemtypes.TYPE.SPELL_LIST
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
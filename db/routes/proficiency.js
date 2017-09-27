module.exports = function(app, pg, async, pool) {
    app.delete('/api/adm/proficiency/:id', function(req, res) {
        var results = [];
        pool.connect(function(err, client, done) {
            if (err) {
                done();
                console.error(err);
                return res.status(500).json({ success: false, data: err});
            }
            async.waterfall([
                function init(callback) {
                    callback(null, req);
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
                function deleteProficiencyTable(resObj, callback) {
                    sql = 'DELETE FROM adm_def_proficiency';
                    sql += ' WHERE "proficiencyId" = $1';
                    vals = [req.params.id];
                    var query = client.query(new pg.Query(sql, vals));
                    var results = [];
                    query.on('row', function(row) {
                        results.push(row);
                    });
                        query.on('end', function() {
                        done();
                        return callback(null, resObj);
                    });
                },
                function deleteProficiencyLanguageTable(resObj, callback) {
                    sql = 'DELETE FROM adm_def_proficiency_language';
                    sql += ' WHERE "proficiencyId" = $1';
                    vals = [req.params.id];
                    var query = client.query(new pg.Query(sql, vals));
                    var results = [];
                    query.on('row', function(row) {
                        results.push(row);
                    });
                        query.on('end', function() {
                        done();
                        return callback(null, resObj);
                    });
                },
                function deleteProficiencyAbilityScoreTable(resObj, callback) {
                    sql = 'DELETE FROM adm_def_proficiency_ability_score';
                    sql += ' WHERE "proficiencyId" = $1';
                    vals = [req.params.id];
                    var query = client.query(new pg.Query(sql, vals));
                    var results = [];
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
    app.put('/api/adm/proficiency/:id', function(req, res) {
        var results = [];
        pool.connect(function(err, client, done) {
            if (err) {
                done();
                console.error(err);
                return res.status(500).json({ success: false, data: err});
            }
            async.waterfall([
                function init(callback) {
                    callback(null, req);
                },
                function updateItemTable(req, callback) {
                    sql = 'UPDATE adm_core_item';
                    sql += ' SET "itemName" = $1';
                    sql += ' WHERE id = $2'
                    vals = [req.body.proficiency.name, req.params.id];
                    var query = client.query(new pg.Query(sql, vals));
                    query.on('row', function(row) {
                        results.push(row);
                    });
                    query.on('end', function() {
                        done();
                        var tmp = req.body;
                        tmp.proficiency.needsAbilityScore = false;
                        if (tmp.proficiency.abilityScore && tmp.proficiency.abilityScore.id != 0) {
                            tmp.proficiency.needsAbilityScore = true;
                        }
                        tmp.proficiency.needsLanguage = false;
                        if (tmp.proficiency.language && tmp.proficiency.language.script && tmp.proficiency.language.script.id != 0) {
                        tmp.proficiency.needsLanguage = true;
                        }
                        return callback(null, tmp);
                    });
                },
                function updateProficiencyTable(resObj, callback) {
                    sql = 'UPDATE adm_def_proficiency';
                    sql += ' SET "categoryId" = $1';
                    sql += ' WHERE "proficiencyId" = $2';
                    vals = [resObj.proficiency.category.id, req.params.id];
                    var query = client.query(new pg.Query(sql, vals));
                    var results = [];
                    query.on('row', function(row) {
                        results.push(row);
                    });
                        query.on('end', function() {
                        done();
                        return callback(null, resObj);
                    });
                },
                function checkForAbilityScore(resObj, callback) {
                    sql = 'SELECT * FROM adm_def_proficiency_ability_score';
                    sql += ' WHERE "proficiencyId" = $1';
                    vals = [resObj.proficiency.id];
                    var query = client.query(new pg.Query(sql, vals));
                    var results = [];
                    query.on('row', function(row) {
                        results.push(row);
                    });
                        query.on('end', function() {
                        done();
                        if(results.length == 0) {
                            return callback(null, resObj, false);
                        } else {
                            return callback(null, resObj, true);
                        }
                    });
                },
                function updateProficiencyAbilityScoreTable(resObj, hasAbilityScore, callback) {
                    if (resObj.proficiency.needsAbilityScore && hasAbilityScore) {
                        //UPDATE
                        sql = 'UPDATE adm_def_proficiency_ability_score';
                        sql += ' SET "abilityScoreId" = $1';
                        sql += ' WHERE "proficiencyId" = $2';
                        vals = [resObj.proficiency.abilityScore.id, resObj.proficiency.id];
                    } else if (resObj.proficiency.needsAbilityScore && !hasAbilityScore) {
                        sql = 'INSERT INTO adm_def_proficiency_ability_score';
                        sql += ' ("abilityScoreId", "proficiencyId")';
                        sql += ' VALUES ($1, $2)';
                        vals = [resObj.proficiency.abilityScore.id, resObj.proficiency.id];
                        //INSERT
                    } else if (!resObj.proficiency.needsAbilityScore && hasAbilityScore) {
                        //DELETE
                        sql = 'DELETE FROM adm_def_proficiency_ability_score';
                        sql += ' WHERE "proficiencyId" = $1';
                        vals = [resObj.proficiency.id];
                    } else {
                        //IGNORE
                        return callback(null, resObj);
                    }
                    var query = client.query(new pg.Query(sql, vals));
                    var results = [];
                    query.on('row', function(row) {
                        results.push(row);
                    });
                        query.on('end', function() {
                        done();
                        return callback(null, resObj);
                    });
                },
                function checkForLanguage(resObj, callback) {
                    sql = 'SELECT * FROM adm_def_proficiency_language';
                    sql += ' WHERE "proficiencyId" = $1';
                    vals = [resObj.proficiency.id];
                    var query = client.query(new pg.Query(sql, vals));
                    var results = [];
                    query.on('row', function(row) {
                        results.push(row);
                    });
                        query.on('end', function() {
                        done();
                        if(results.length == 0) {
                            return callback(null, resObj, false);
                        } else {
                            return callback(null, resObj, true);
                        }
                    });
                },
                function updateProficiencyLanguageTable(resObj, hasLanguage, callback) {
                    if (resObj.proficiency.needsLanguage && hasLanguage) {
                        //UPDATE
                        sql = 'UPDATE adm_def_proficiency_language';
                        sql += ' SET "scriptId" = $1';
                        sql += ', "languageTypeId" = $2'
                        sql += ' WHERE "proficiencyId" = $3';
                        vals = [resObj.proficiency.language.script.id, resObj.proficiency.language.rarity.id, resObj.proficiency.id];
                    } else if (resObj.proficiency.needsLanguage && !hasLanguage) {
                        sql = 'INSERT INTO adm_def_proficiency_language';
                        sql += ' ("scriptId", "languageTypeId", "proficiencyId")';
                        sql += ' VALUES ($1, $2, $3)';
                        vals = [resObj.proficiency.language.script.id, resObj.proficiency.language.rarity.id, resObj.proficiency.id];
                        //INSERT
                    } else if (!resObj.proficiency.needsLanguage && hasLanguage) {
                        //DELETE
                        sql = 'DELETE FROM adm_def_proficiency_language';
                        sql += ' WHERE "proficiencyId" = $1';
                        vals = [resObj.proficiency.id];
                    } else {
                        //IGNORE
                        return callback(null, resObj);
                    }
                    var query = client.query(new pg.Query(sql, vals));
                    var results = [];
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
    app.post('/api/adm/proficiency', function(req, res) {
        var results = [];
        pool.connect(function(err, client, done) {
            if (err) {
                done();
                console.error(err);
                return res.status(500).json({ success: false, data: err});
            }
            async.waterfall([
                function init(callback) {
                    callback(null, req);
                },
                function insertItemTable(req, callback) {
                    var itemTypeId = 0;
                    switch (req.body.proficiency.category.id) {
                        case 236://weapon
                            itemTypeId = 82;
                            break;
                        case 235://armmor
                            itemTypeId = 84;
                            break;
                        case 237://skill
                            itemTypeId = 92;
                            break;
                        case 239://language
                            itemTypeId = 93;
                            break;
                        case 240://saving throw
                            itemTypeId = 94;
                            break;
                        case 541://vehicle
                            itemTypeId = 110;
                            break;
                    }
                    sql = 'INSERT INTO adm_core_item';
                    sql += ' ("itemName", "itemTypeId")';
                    sql += ' VALUES ($1, $2) returning id AS "proficiencyId";';
                    vals = [req.body.proficiency.name, itemTypeId];
                    var query = client.query(new pg.Query(sql, vals));
                    query.on('row', function(row) {
                        results.push(row);
                    });
                    query.on('end', function() {
                        done();
                        var tmp = req.body;
                        tmp.proficiency.needsLanguage = false;
                        if (tmp.proficiency.language && tmp.proficiency.language.script && tmp.proficiency.language.script.id != 0) {
                            tmp.proficiency.needsLanguage = true;
                        }
                        tmp.proficiency.needsAbilityScore = false;
                        if (tmp.proficiency.abilityScore && tmp.proficiency.abilityScore.id != 0) {
                            tmp.proficiency.needsAbilityScore = true;
                        }
                        tmp.proficiency.id = results[0].proficiencyId;
                        return callback(null, tmp);
                    });
                },
                function insertProficiencyTable(resObj, callback) {
                    sql = 'INSERT INTO adm_def_proficiency';
                    sql += ' ("proficiencyId", "categoryId")';
                    sql += ' VALUES ($1, $2);';
                    vals = [resObj.proficiency.id, resObj.proficiency.category.id];
                    var query = client.query(new pg.Query(sql, vals));
                    var results = [];
                    query.on('row', function(row) {
                        results.push(row);
                    });
                    query.on('end', function() {
                        done();
                        return callback(null, resObj);
                    });
                },
                function insertProficiencyAbilityScoreTable(resObj, callback) {
                    if(resObj.needsAbilityScore) {
                        sql = 'INSERT INTO adm_def_proficiency_ability_score';
                        sql += ' ("proficiencyId", "abilityScoreId")';
                        sql += ' VALUES ($1, $2);';
                        vals = [resObj.proficiency.id, resObj.proficiency.abilityScore.id];
                        var query = client.query(new pg.Query(sql, vals));
                        var results = [];
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
                function insertProficiencyLanguageTable(resObj, callback) {
                    if(resObj.needsLanguage) {
                        sql = 'INSERT INTO adm_def_proficiency_language';
                        sql += ' ("proficiencyId", "scriptId", "languageTypeId")';
                        sql += ' VALUES ($1, $2, $3);';
                        vals = [resObj.proficiency.id, resObj.proficiency.language.script.id, resObj.proficiency.language.rarity.id];
                        var query = client.query(new pg.Query(sql, vals));
                        var results = [];
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
    app.get('/api/adm/proficiencies', function(req, res) {
        var results = [];
        pool.connect(function(err, client, done) {
            if (err) {
                done();
                console.error(err);
                return res.status(500).json({ success: false, data: err});
            }
            sql = 'SELECT i.id, i."itemName" as name';
            sql += ' , json_build_object(\'name\', cat."itemName", \'id\', cat."id", \'isTool\', CASE WHEN cat."id" IN (238, 241, 242, 243, 541) THEN true ELSE false END) AS "category"';
            sql += ' , CASE WHEN ability.id IS NULL THEN \'{}\' ';
            sql += ' ELSE json_build_object(\'name\', ability."itemName", \'id\', ability."id") END AS "abilityScore"';
            sql += ' , CASE WHEN script."id" IS NULL THEN \'{}\' ';
            sql += ' ELSE json_build_object(\'script\', json_build_object(\'name\', script."itemName", \'id\', script.id), ';
            sql += '                        \'rarity\', json_build_object(\'name\', langtype."itemName", \'id\', langtype.id)) END AS "language"';
            sql += ' FROM adm_core_item i';
            sql += ' INNER JOIN adm_def_proficiency prof ON prof."proficiencyId" = i.id';
            sql += ' INNER JOIN adm_core_item cat ON cat.id = prof."categoryId"';
            sql += ' LEFT OUTER JOIN adm_def_proficiency_ability_score profability ON profability."proficiencyId" = i.id';
            sql += ' LEFT OUTER JOIN adm_core_item ability ON ability.id = profability."abilityScoreId"';
            sql += ' LEFT OUTER JOIN adm_def_proficiency_language proflang ON proflang."proficiencyId" = i.id';
            sql += ' LEFT OUTER JOIN adm_core_item script ON script.id = proflang."scriptId"';
            sql += ' LEFT OUTER JOIN adm_core_item langtype ON langtype.id = proflang."languageTypeId"';
            sql += ' ORDER BY cat."itemName", i."itemName"';
            var query = client.query(new pg.Query(sql));
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
module.exports = function(app, pg, async, pool, itemtypes, common) {
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
                },
                function deleteDescription(resObj, callback) {
                    sql = 'DELETE FROM adm_core_description';
                    sql += ' WHERE "itemId" = $1';
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
                    sql += ', "resourceId" = $2';
                    sql += ' WHERE id = $3';
                    vals = [req.body.proficiency.name, req.body.proficiency.resource.id, req.params.id];
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
                        tmp.proficiency.needsDescription = false;
                        if(tmp.proficiency.description) {
                            tmp.proficiency.needsDescription = true;
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
                        sql += ', "rarityId" = $2'
                        sql += ' WHERE "proficiencyId" = $3';
                        vals = [resObj.proficiency.language.script.id, resObj.proficiency.language.rarity.id, resObj.proficiency.id];
                    } else if (resObj.proficiency.needsLanguage && !hasLanguage) {
                        sql = 'INSERT INTO adm_def_proficiency_language';
                        sql += ' ("scriptId", "rarityId", "proficiencyId")';
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
                },
                function checkForDescription(resObj, callback) {
                    sql = 'SELECT * FROM adm_core_description WHERE "itemId" = $1';
                    vals = [req.params.id];
                    var query = client.query(new pg.Query(sql, vals));
                    var results = [];
                    query.on('row', function(row) {
                        results.push(row);
                    });
                    query.on('end', function() {
                        done();
                        var descriptionExists = false;
                        if (results.length > 0) {
                            descriptionExists = true;
                        }
                        return callback(null, resObj, descriptionExists);
                    });
                },
                function addEditDescription(resObj, descriptionExists, callback) {
                    sql = '';
                    if (resObj.proficiency.needsDescription && descriptionExists) {
                        //update
                        sql = 'UPDATE adm_core_description';
                        sql += ' SET "description" = $1';
                        sql += ' WHERE "itemId" = $2';
                        vals = [resObj.proficiency.description, resObj.proficiency.id];
                    } else if (resObj.proficiency.needsDescription && !descriptionExists) {
                        //insert
                        sql = 'INSERT INTO adm_core_description';
                        sql += ' ("itemId", "description")';
                        sql += ' VALUES ($1, $2)';
                        vals = [resObj.proficiency.id, resObj.proficiency.ammunition.id];
                    } else {
                        //delete
                        sql = 'DELETE FROM adm_core_description';
                        sql += ' WHERE "itemId" = $1';
                        vals = [resObj.proficiency.id];
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
                        case itemtypes.PROFICIENCY_CATEGORY.ARMOR:
                            itemTypeId = itemtypes.TYPE.ARMOR_PROFICIENCY;
                            break;
                        case itemtypes.PROFICIENCY_CATEGORY.WEAPON:
                            itemTypeId = itemtypes.TYPE.WEAPON_PROFICIENCY;
                            break;
                        case itemtypes.PROFICIENCY_CATEGORY.SKILL:
                            itemTypeId = itemtypes.TYPE.SKILL;
                            break;
                        case itemtypes.PROFICIENCY_CATEGORY.LANGUAGE:
                            itemTypeId = itemtypes.TYPE.LANGUAGE;
                            break;
                        case itemtypes.PROFICIENCY_CATEGORY.VEHICLE:
                            itemTypeId = itemtypes.TYPE.VEHICLE;
                            break;
                    }
                    sql = 'INSERT INTO adm_core_item';
                    sql += ' ("itemName", "resourceId", "itemTypeId")';
                    sql += ' VALUES ($1, $2, $3) returning id AS "proficiencyId";';
                    vals = [req.body.proficiency.name, req.body.proficiency.resource.id, itemTypeId];
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
                    if(resObj.proficiency.needsAbilityScore) {
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
                    if(resObj.proficiency.needsLanguage) {
                        sql = 'INSERT INTO adm_def_proficiency_language';
                        sql += ' ("proficiencyId", "scriptId", "rarityId")';
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
                },
                function insertDescription(resObj, callback) {
                    if (resObj.proficiency.description) {
                        sql = 'INSERT INTO adm_core_description';
                        sql += ' ("itemId", "description")';
                        sql += ' VALUES ($1, $2)';
                        vals = [resObj.proficiency.id, resObj.proficiency.description];
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
            sql += ', description.description ';
            sql += ', json_build_object(';
            sql += '    \'name\', cat."itemName"';
            sql += '    , \'id\', cat."id"';
            sql += '    , \'isTool\', CASE WHEN cat."id" IN ($1, $2, $3, $4, $5) THEN true ELSE false END';
            sql += ') AS "category"';
            sql += ', CASE WHEN ability.id IS NULL THEN \'{}\' ELSE json_build_object(';
            sql += '    \'name\', ability."itemName"';
            sql += '    , \'id\', ability."id"';
            sql += ') END AS "abilityScore"';
            sql += ', CASE WHEN script."id" IS NULL THEN \'{}\' ELSE json_build_object(';
            sql += '    \'script\', json_build_object(';
            sql += '        \'name\', script."itemName", \'id\', script.id';
            sql += '    ), \'rarity\', json_build_object(';
            sql += '        \'name\', langtype."itemName", \'id\', langtype.id';
            sql += '    )';
            sql += ') END AS "language", json_build_object(';
            sql += '    \'name\', rsrc."itemName", \'id\', rsrc."id"';
            sql += ') AS "resource" ';
            sql += ' FROM adm_core_item i';
            sql += ' INNER JOIN adm_def_proficiency prof ON prof."proficiencyId" = i.id';
            sql += ' INNER JOIN adm_core_item cat ON cat.id = prof."categoryId"';
            sql += ' LEFT OUTER JOIN adm_def_proficiency_ability_score profability ON profability."proficiencyId" = i.id';
            sql += ' LEFT OUTER JOIN adm_core_item ability ON ability.id = profability."abilityScoreId"';
            sql += ' LEFT OUTER JOIN adm_def_proficiency_language proflang ON proflang."proficiencyId" = i.id';
            sql += ' LEFT OUTER JOIN adm_core_item script ON script.id = proflang."scriptId"';
            sql += ' LEFT OUTER JOIN adm_core_item langtype ON langtype.id = proflang."rarityId"';
            sql += ' LEFT OUTER JOIN adm_core_description description ON description."itemId" = i.id';
            sql += ' INNER JOIN adm_core_item rsrc ON rsrc.id = i."resourceId"';
            sql += ' ORDER BY cat."itemName", i."itemName"';
            vals = [
                itemtypes.PROFICIENCY_CATEGORY.ARTISANS_TOOL, 
                itemtypes.PROFICIENCY_CATEGORY.GAMING_SET, 
                itemtypes.PROFICIENCY_CATEGORY.MUSICAL_INSTRUMENT, 
                itemtypes.PROFICIENCY_CATEGORY.TOOL, 
                itemtypes.PROFICIENCY_CATEGORY.VEHICLE
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
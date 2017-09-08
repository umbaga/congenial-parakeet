
module.exports = function(app, pg, async, pool) {
    app.delete('/api/adm/equipment/armor/:id', function(req, res) {
        /*var results = [];
        pool.connect(function(err, client, done) {
            if(err) {
                done();
                console.error(err);
                return res.status(500).json({ success: false, data: err});
            }
            sql = 'select * from delete_weapon($1);';
            vals = [req.params.id];
            var query = client.query(new pg.Query(sql, vals));
            query.on('row', function(row) {
                results.push(row);
            });
            query.on('end', function() {
                done();
                var resObj = req.params.id;
                return res.json([resObj]);
            });
        });*/
    });
    app.put('/api/adm/equipment/armor/:id', function(req, res) {
        /*var results = [];
        pool.connect(function(err, client, done) {
            if(err) {
                done();
                console.error(err);
                return res.status(500).json({ success: false, data: err});
            }
            async.waterfall([
                function init(cb) {
                    cb(null, req);
                },
                function first_function(req, callback) {
                    sql = 'UPDATE adm_item';
                    sql += ' SET "itemName" = $1';
                    sql += ' WHERE id = $2'
                    vals = [req.body.weapon.name, req.params.id];
                    var query = client.query(new pg.Query(sql, vals));
                    query.on('row', function(row) {
                        results.push(row);
                    });
                    query.on('end', function() {
                        done();
                        var tmp = req.body;
                        tmp.weapon.needsAltDamage = false;
                        tmp.weapon.needsRange = false;
                        tmp.weapon.needsSpecial = false;
                        for(var j = 0; j < tmp.weapon.weaponProperties.length; j++) {
                            if(tmp.weapon.weaponProperties[j].requireRange) {
                                tmp.weapon.needsRange = true;
                            }
                            if(tmp.weapon.weaponProperties[j].requireDamage) {
                                tmp.weapon.needsAltDamage = true;
                            }
                            if(tmp.weapon.weaponProperties[j].requireDescription) {
                                tmp.weapon.needsSpecial = true;
                            }
                        }
                        return callback(null, tmp);
                    });
                },
                function last_function(resObj, altDamageExists, callback) {
                    sql = '';
                    vals = [];
                    if(resObj.weapon.needsAltDamage && altDamageExists) {
                        sql = 'UPDATE adm_def_equipment_weapon_alt_damage'
                        sql += ' SET "damageDiceId" = $1';
                        sql += ' WHERE "weaponId" = $2';
                        vals = [resObj.weapon.versatileDamage.id, resObj.weapon.id];
                    } else if(resObj.weapon.needsAltDamage && !altDamageExists) {
                        sql = 'INSERT INTO adm_def_equipment_weapon_alt_damage';
                        sql += ' ("damageDiceId", "weaponId")';
                        sql += ' VALUES ($1, $2)';
                        vals = [resObj.weapon.versatileDamage.id, resObj.weapon.id];
                    } else {
                        sql = 'DELETE FROM adm_def_equipment_weapon_alt_damage';
                        sql += ' WHERE "weaponId" = $1';
                        vals = [resObj.weapon.id];
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
        });*/
    });
    app.post('/api/adm/equipment/armor', function(req, res) {
        /*var results = [];
        pool.connect(function(err, client, done) {
            if(err) {
                done();
                console.error(err);
                return res.status(500).json({ success: false, data: err});
            }
            async.waterfall([
                function init(cb) {
                    cb(null, req);
                },
                function insertItem(req, callback) {
                    sql = 'INSERT INTO adm_item';
                    sql += ' ("itemName", "itemTypeId")';
                    sql += ' VALUES ($1, 85) returning id AS "equipmentId";';
                    vals = [req.body.weapon.name];
                    var query = client.query(new pg.Query(sql, vals));
                    query.on('row', function(row) {
                        results.push(row);
                    });
                    query.on('end', function() {
                        done();
                        var tmp = req.body;
                        tmp.weapon.id = results[0].equipmentId;
                        tmp.weapon.needsAltDamage = false;
                        tmp.weapon.needsRange = false;
                        tmp.weapon.needsSpecial = false;
                        if(tmp.weapon.specialDescription && tmp.weapon.specialDescription.length != 0) {
                            tmp.weapon.needsSpecial = true;
                        }
                        if(tmp.weapon.range.normal) {
                            tmp.weapon.needsRange = true;
                        }
                        if(tmp.weapon.versatileDamage.dieCount) {
                            tmp.weapon.needsAltDamage = true;
                        }
                        return callback(null, tmp);
                    });
                },
                function insertVersatileDiceWeapon(resObj, callback) {
                    if(resObj.weapon.needsAltDamage) {
                        sql = 'INSERT INTO adm_def_equipment_weapon_alt_damage ("weaponId", "damageDiceId")';
                        sql += ' VALUES ($1, $2);';
                        vals = [resObj.weapon.id, resObj.weapon.versatileDamage.id];
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
        });*/
    });
    app.get('/api/adm/equipment/armors', function(req, res) {
        var results = [];
        pool.connect(function(err, client, done) {
            if(err) {
                done();
                console.error(err);
                return res.status(500).json({ success: false, data: err});
            }
            
            sql = 'SELECT i."itemName" AS name, i.id, eq.cost, eq.weight, arm."stealthDisadvantage", arm."minimumStrength"';
            sql += ',json_build_object(\'baseArmorClass\', arm."baseArmorClass", \'applyDexModifier\', arm."applyDexModifier", \'hasMaxDexModifier\', arm."hasMaxDexModifier", \'maxDexModifier\', arm."maxDexModifier", \'isCumulative\', arm."isCumulative") AS "armorClass"';
            sql += ', json_build_object(\'name\', armprof."itemName", \'id\', armprof."id") AS "proficiency"';
            sql += ' FROM adm_item i';
            sql += ' INNER JOIN adm_def_equipment eq ON eq."equipmentId" = i.id';
            sql += ' INNER JOIN adm_def_equipment_armor arm ON arm."equipmentId" = i.id';
            sql += ' INNER JOIN adm_item armprof ON armprof.id = arm."proficiencyId"';
            sql += ' ORDER BY arm."baseArmorClass"';
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
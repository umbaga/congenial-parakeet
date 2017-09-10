
module.exports = function(app, pg, async, pool) {
    app.delete('/api/adm/equipment/weapon/:id', function(req, res) {
        var results = [];
        pool.connect(function(err, client, done) {
            if (err) {
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
        });
    });
    app.put('/api/adm/equipment/weapon/:id', function(req, res) {
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
                        for (var j = 0; j < tmp.weapon.weaponProperties.length; j++) {
                            if (tmp.weapon.weaponProperties[j].requireRange) {
                                tmp.weapon.needsRange = true;
                            }
                            if (tmp.weapon.weaponProperties[j].requireDamage) {
                                tmp.weapon.needsAltDamage = true;
                            }
                            if (tmp.weapon.weaponProperties[j].requireDescription) {
                                tmp.weapon.needsSpecial = true;
                            }
                        }
                        return callback(null, tmp);
                    });
                },
                function updateEquipmentTable(resObj, callback) {
                    sql = 'UPDATE adm_def_equipment';
                    sql += ' SET weight = $1';
                    sql += ', cost = $2';
                    sql += ' WHERE "equipmentId" = $3';
                    vals = [resObj.weapon.weight, resObj.weapon.cost, req.params.id];
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
                function conditionalInsertDamageDice(resObj, callback) {
                    sql = 'with vals as (';
                    sql += 'select $1 :: bigint as "dieCount", $2 :: bigint as "dieType"';
                    sql += ')';
                    sql += ' insert into adm_core_dice ("dieCount", "dieType")';
                    sql += ' select v."dieCount", v."dieType"';
                    sql += ' from vals as v';
                    sql += ' where not exists (select * from adm_core_dice as t where t."dieCount" = v."dieCount" and t."dieType" = v."dieType")';
                    sql += ' returning id AS "diceId";';
                    vals = [resObj.weapon.damage.dieCount, resObj.weapon.damage.dieType];
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
                function getDamageDiceId(resObj, callback) {
                    sql = 'SELECT id';
                    sql += ' FROM adm_core_dice';
                    sql += ' WHERE "dieCount" = $1';
                    sql += ' AND "dieType" = $2';
                    vals = [resObj.weapon.damage.dieCount, resObj.weapon.damage.dieType];
                    var query = client.query(new pg.Query(sql, vals));
                    var results = [];
                    query.on('row', function(row) {
                        results.push(row);
                    });
                    query.on('end', function() {
                        done();
                        resObj.weapon.damage.id = parseInt(results[0].id);
                        return callback(null, resObj);
                    });
                },
                function updateWeaponTable(resObj, callback) {
                    sql = 'UPDATE adm_def_equipment_weapon';
                    sql += ' SET "damageDiceId" = $1';
                    sql += ', "damageTypeId" = $2';
                    sql += ', "proficiencyId" = $3';
                    sql += ', "categoryId" = $4';
                    sql += ' WHERE "equipmentId" = $5';
                    vals = [resObj.weapon.damage.id, resObj.weapon.damageType.id, resObj.weapon.proficiency.id, resObj.weapon.category.id, req.params.id];
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
                function deleteUnneededProperties(resObj, callback) {
                    sql = 'DELETE FROM adm_link_weapon_property';
                    sql += ' WHERE "weaponId" = $1';
                    if (resObj.weapon.weaponProperties.length != 0) {
                        sql += ' AND "propertyId" NOT IN (';
                    }
                    vals = [req.params.id];
                    for (var k = 0; k < resObj.weapon.weaponProperties.length; k++) {
                        var newParam = k + 2;
                        sql += '$' + newParam.toString();
                        if (k < resObj.weapon.weaponProperties.length - 1) {
                            sql += ',';
                        }
                        vals.push(resObj.weapon.weaponProperties[k].id);
                    }
                    if (resObj.weapon.weaponProperties.length != 0) {
                        sql += ');';
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
                function checkNeededProperties(resObj, callback) {
                    var theseIdsExist = [];
                    sql = 'SELECT * FROM adm_link_weapon_property';
                    sql += ' WHERE "weaponId" = $1';
                    if (resObj.weapon.weaponProperties.length != 0) {
                        sql += ' AND "propertyId" IN (';
                    }
                    vals = [req.params.id];
                    for (var p = 0; p < resObj.weapon.weaponProperties.length; p++) {
                        var newParam = p + 2;
                        sql += '$' + newParam.toString();
                        if (p < resObj.weapon.weaponProperties.length - 1) {
                            sql += ',';
                        }
                        vals.push(resObj.weapon.weaponProperties[p].id);
                    }
                    if (resObj.weapon.weaponProperties.length != 0) {
                        sql += ');';
                    }
                    var query = client.query(new pg.Query(sql, vals));
                    var results = [];
                    query.on('row', function(row) {
                        results.push(row);
                    });
                    query.on('end', function() {
                        done();
                        for (var w = 0; w < results.length; w++) {
                            theseIdsExist.push(parseInt(results[w].propertyId));
                        }
                        return callback(null, resObj, theseIdsExist);
                    });
                },
                function addNeededProperties(resObj, theseIdsExist, callback) {
                    if (resObj.weapon.weaponProperties.length != 0) {
                        sql = 'INSERT INTO adm_link_weapon_property';
                        sql += ' ("weaponId", "propertyId")';
                        sql += ' VALUES ';
                        var firstParam = 1;
                        var secondParam = 2;
                        var paramSql = '';
                        vals = [];
                        for (var g = 0; g < resObj.weapon.weaponProperties.length; g++) {
                            //cycle through assigned
                            var assignThis = true;
                            for (var f = 0; f < theseIdsExist.length; f++) {
                                if (resObj.weapon.weaponProperties[g].id == theseIdsExist[f]) {
                                    assignThis = false;
                                }
                            }
                            if (assignThis) {
                                paramSql += '($' + firstParam.toString() + ', $' + secondParam.toString() + '),';
                                firstParam = firstParam + 2;
                                secondParam = secondParam + 2;
                                vals.push(resObj.weapon.id, resObj.weapon.weaponProperties[g].id);
                            }
                        }
                        paramSql = paramSql.replace(/,\s*$/, "");
                        sql += paramSql;
                        if (paramSql.length != 0) {
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
                    } else {
                        return callback(null, resObj);
                    }
                },
                function checkForSpecial(resObj, callback) {
                    sql = 'SELECT * FROM adm_def_equipment_weapon_special WHERE "weaponId" = $1';
                    vals = [req.params.id];
                    var query = client.query(new pg.Query(sql, vals));
                    var results = [];
                    query.on('row', function(row) {
                        results.push(row);
                    });
                    query.on('end', function() {
                        done();
                        var specialExists = false;
                        if (results.length > 0) {
                            specialExists = true;
                        }
                        return callback(null, resObj, specialExists);
                    });
                },
                function addEditSpecial(resObj, specialExists, callback) {
                    sql = '';
                    if (resObj.weapon.needsSpecial && specialExists) {
                        //update
                        sql = 'UPDATE adm_def_equipment_weapon_special';
                        sql += ' SET "specialDescription" = $1';
                        sql += ' WHERE "weaponId" = $2';
                        vals = [resObj.weapon.specialDescription, resObj.weapon.id];
                    } else if (resObj.weapon.needsSpecial && !specialExists) {
                        //insert
                        sql = 'INSERT INTO adm_def_equipment_weapon_special';
                        sql += ' ("specialDescription", "weaponId")';
                        sql += ' VALUES ($1, $2)';
                        vals = [resObj.weapon.specialDescription, resObj.weapon.id];
                    } else {
                        //delete
                        sql = 'DELETE FROM adm_def_equipment_weapon_special';
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
                },
                function checkForRange(resObj, callback) {
                    sql = 'SELECT * FROM adm_def_equipment_weapon_range WHERE "weaponId" = $1';
                    vals = [resObj.weapon.id];
                    var query = client.query(new pg.Query(sql, vals));
                    var results = [];
                    query.on('row', function(row) {
                        results.push(row);
                    });
                    query.on('end', function() {
                        done();
                        var rangeExists = false;
                        if (results.length > 0) {
                            rangeExists = true;
                        }
                        return callback(null, resObj, rangeExists);
                    });
                },
                function addEditRange(resObj, rangeExists, callback) {
                    sql = '';
                    vals = [];
                    if (resObj.weapon.needsRange && rangeExists) {
                        //update
                        sql = 'UPDATE adm_def_equipment_weapon_range';
                        sql += ' SET "normalRange" = $1';
                        sql += ', "maximumRange" = $2';
                        sql += ' WHERE "weaponId" = $3';
                        vals = [resObj.weapon.range.normal, resObj.weapon.range.maximum, req.params.id];
                    } else if (resObj.weapon.needsRange && !rangeExists) {
                        //insert
                        sql = 'INSERT INTO adm_def_equipment_weapon_range';
                        sql += ' ("normalRange", "maximumRange", "weaponId")';
                        sql += ' VALUES ($1, $2, $3)';
                        vals = [resObj.weapon.range.normal, resObj.weapon.range.maximum, req.params.id];
                    } else {
                        //delete
                        sql = 'DELETE FROM adm_def_equipment_weapon_range';
                        sql += ' WHERE "weaponId" = $1';
                        vals = [req.params.id];
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
                function conditionalInsertVersatileDamageDice(resObj, callback) {
                    if (resObj.weapon.needsAltDamage) {
                        sql = 'with vals as (';
                        sql += 'select $1 :: bigint as "dieCount", $2 :: bigint as "dieType"';
                        sql += ')';
                        sql += ' insert into adm_core_dice ("dieCount", "dieType")';
                        sql += ' select v."dieCount", v."dieType"';
                        sql += ' from vals as v';
                        sql += ' where not exists (select * from adm_core_dice as t where t."dieCount" = v."dieCount" and t."dieType" = v."dieType")';
                        sql += ' returning id AS "diceId";';
                        vals = [resObj.weapon.versatileDamage.dieCount, resObj.weapon.versatileDamage.dieType];
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
                function getVersatileDamageDiceId(resObj, callback) {
                    if (resObj.weapon.needsAltDamage) {
                        sql = 'SELECT * FROM adm_core_dice';
                        sql += ' WHERE "dieCount" = $1';
                        sql += ' AND "dieType" = $2';
                        vals = [resObj.weapon.versatileDamage.dieCount, resObj.weapon.versatileDamage.dieType];
                        var query = client.query(new pg.Query(sql, vals));
                        var results = [];
                        query.on('row', function(row) {
                            results.push(row);
                        });
                        query.on('end', function() {
                            done();
                            resObj.weapon.versatileDamage.id = parseInt(results[0].id);
                            return callback(null, resObj);
                        });
                    } else {
                        return callback(null, resObj);
                    }
                },
                function checkForVersatileDamage(resObj, callback) {
                    sql = 'SELECT * FROM adm_def_equipment_weapon_alt_damage';
                    sql += ' WHERE "weaponId" = $1';
                    vals = [resObj.weapon.id];
                    var query = client.query(new pg.Query(sql, vals));
                    var results = [];
                    query.on('row', function(row) {
                        results.push(row);
                    });
                    query.on('end', function() {
                        done();
                        var altDamageExists = false;
                        if (results.length > 0) {
                            altDamageExists = true;
                        }
                        return callback(null, resObj, altDamageExists);
                    });
                },
                function addEditVersatileDamage(resObj, altDamageExists, callback) {
                    sql = '';
                    vals = [];
                    if (resObj.weapon.needsAltDamage && altDamageExists) {
                        sql = 'UPDATE adm_def_equipment_weapon_alt_damage'
                        sql += ' SET "damageDiceId" = $1';
                        sql += ' WHERE "weaponId" = $2';
                        vals = [resObj.weapon.versatileDamage.id, resObj.weapon.id];
                    } else if (resObj.weapon.needsAltDamage && !altDamageExists) {
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
        });
    });
    app.post('/api/adm/equipment/weapon', function(req, res) {
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
                        if (tmp.weapon.specialDescription && tmp.weapon.specialDescription.length != 0) {
                            tmp.weapon.needsSpecial = true;
                        }
                        if (tmp.weapon.range.normal) {
                            tmp.weapon.needsRange = true;
                        }
                        if (tmp.weapon.versatileDamage.dieCount) {
                            tmp.weapon.needsAltDamage = true;
                        }
                        return callback(null, tmp);
                    });
                },
                function insertDice(resObj, callback) {
                    sql = 'with vals as (';
                    sql += 'select $1 :: bigint as "dieCount", $2 :: bigint as "dieType"';
                    sql += ')';
                    sql += ' insert into adm_core_dice ("dieCount", "dieType")';
                    sql += ' select v."dieCount", v."dieType"';
                    sql += ' from vals as v';
                    sql += ' where not exists (select * from adm_core_dice as t where t."dieCount" = v."dieCount" and t."dieType" = v."dieType")';
                    sql += ' returning id AS "diceId";';
                    vals = [resObj.weapon.damage.dieCount, resObj.weapon.damage.dieType];
                    var query = client.query(new pg.Query(sql, vals));
                    var results = [];
                    query.on('row', function(row) {
                        results.push(row);
                    });
                    query.on('end', function() {
                        done();
                        var skipNext = false;
                        if (results.length != 0){
                            resObj.weapon.damage.id = parseInt(results[0].diceId);
                            skipNext = true;
                        }
                        return callback(null, resObj, skipNext);
                    });
                },
                function selectDice(resObj, skipThis, callback) {
                    if (skipThis) {
                        return callback(null, resObj);
                    } else {
                        sql = 'SELECT id AS "diceId" FROM adm_core_dice  WHERE "dieCount" = $1 AND "dieType" = $2';
                        vals = [resObj.weapon.damage.dieCount, resObj.weapon.damage.dieType];
                        var query = client.query(new pg.Query(sql, vals));
                        var results = [];
                        query.on('row', function(row) {
                            results.push(row);
                        });
                        query.on('end', function() {
                            done();
                            resObj.weapon.damage.id = parseInt(results[0].diceId);
                            return callback(null, resObj);
                        });
                    }
                },
                function insertEquipment(resObj, callback) {
                    sql = 'INSERT INTO adm_def_equipment';
                    sql += ' ("equipmentId", "weight", "cost", "categoryId")';
                    sql += ' VALUES ($1, $2, $3, 97);';
                    vals = [resObj.weapon.id, resObj.weapon.weight, resObj.weapon.cost];
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
                function insertWeapon(resObj, callback) {
                    sql = 'INSERT INTO adm_def_equipment_weapon';
                    sql += ' ("equipmentId", "damageDiceId", "damageTypeId", "proficiencyId", "categoryId")';
                    sql += ' VALUES ($1, $2, $3, $4, $5)';
                    vals = [resObj.weapon.id, resObj.weapon.damage.id, resObj.weapon.damageType.id, resObj.weapon.proficiency.id, resObj.weapon.category.id];
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
                function insertProperties(resObj, callback) {
                    if (resObj.weapon.weaponProperties.length != 0) {
                        sql = 'INSERT INTO adm_link_weapon_property';
                        sql += ' ("weaponId", "propertyId")';
                        sql += ' VALUES ';
                        vals = [];
                        for (var t = 0; t < resObj.weapon.weaponProperties.length; t++) {
                            var first = (t * 2) + 1;
                            var second = first + 1;
                            sql += '($' + first.toString() + ', $' + second.toString() + ')';
                            if (t < resObj.weapon.weaponProperties.length - 1) {
                                sql += ', ';
                            } else {
                                sql += ';';
                            }
                            vals.push(resObj.weapon.id);
                            vals.push(resObj.weapon.weaponProperties[t].id);
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
                    } else {
                        return callback(null, resObj);
                    }
                },
                function insertRange(resObj, callback) {
                    if (resObj.weapon.needsRange) {
                        sql = 'INSERT INTO adm_def_equipment_weapon_range';
                        sql += ' ("weaponId", "normalRange", "maximumRange")';
                        sql += ' VALUES ($1, $2, $3)';
                        vals = [resObj.weapon.id, resObj.weapon.range.normal, resObj.weapon.range.maximum];
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
                    if (resObj.weapon.needsSpecial) {
                        sql = 'INSERT INTO adm_def_equipment_weapon_special';
                        sql += ' ("weaponId", "specialDescription")';
                        sql += ' VALUES ($1, $2);';
                        vals = [resObj.weapon.id, resObj.weapon.specialDescription];
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
                function insertVersatileDice(resObj, callback) {
                    if (resObj.weapon.needsAltDamage) {
                        sql = 'with vals as (';
                        sql += 'select $1 :: bigint as "dieCount", $2 :: bigint as "dieType"';
                        sql += ')';
                        sql += ' insert into adm_core_dice ("dieCount", "dieType")';
                        sql += ' select v."dieCount", v."dieType"';
                        sql += ' from vals as v';
                        sql += ' where not exists (select * from adm_core_dice as t where t."dieCount" = v."dieCount" and t."dieType" = v."dieType")';
                        sql += ' returning id AS "diceId";';
                        vals = [resObj.weapon.versatileDamage.dieCount, resObj.weapon.versatileDamage.dieType];
                        var query = client.query(new pg.Query(sql, vals));
                        var results = [];
                        query.on('row', function(row) {
                            results.push(row);
                        });
                        query.on('end', function() {
                            done();
                            var skipNext = false;
                            if (results.length != 0){
                                resObj.weapon.versatileDamage.id = parseInt(results[0].diceId);
                                skipNext = true;
                            }
                            return callback(null, resObj, skipNext);
                        });
                    } else {
                        return callback(null, resObj, true);
                    }
                },
                function selectVersatileDice(resObj, skipThis, callback) {
                    if (resObj.weapon.needsAltDamage) {
                        if (skipThis) {
                            return callback(null, resObj);
                        } else {
                            sql = 'SELECT id AS "diceId"';
                            sql += ' FROM adm_core_dice';
                            sql += ' WHERE "dieCount = $1';
                            sql += ' AND "dieType" = $2';
                            vals = [resObj.weapon.versatileDamage.dieCount, resObj.weapon.versatileDamage.dieType];
                            var query = client.query(new pg.Query(sql, vals));
                            var results = [];
                            query.on('row', function(row) {
                                results.push(row);
                            });
                            query.on('end', function() {
                                done();
                                resObj.weapon.damage.id = parseInt(results[0].diceId);
                                return callback(null, resObj);
                            });
                        }
                    } else {
                        return callback(null, resObj);
                    }
                },
                function insertVersatileDiceWeapon(resObj, callback) {
                    if (resObj.weapon.needsAltDamage) {
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
        });
    });
    app.get('/api/adm/equipment/weapons', function(req, res) {
        var results = [];
        pool.connect(function(err, client, done) {
            if (err) {
                done();
                console.error(err);
                return res.status(500).json({ success: false, data: err});
            }
            
            sql = 'SELECT i.id, i."itemName" as name';
            sql += ', eq.cost, eq.weight';
            sql += ', special."specialDescription"';
            sql += ', json_build_object(\'id\', dice.id ,\'dieCount\', dice."dieCount", \'dieType\', dice."dieType", \'rendered\', concat_ws(\'d\', dice."dieCount"::text, dice."dieType"::text)) AS "damage"';
            sql += ', json_build_object(\'name\', dmgtype."itemName", \'id\', dmgtype."id") AS "damageType"';
            sql += ', json_build_object(\'name\', wpnprof."itemName", \'id\', wpnprof."id") AS "proficiency"';
            sql += ', json_build_object(\'name\', wpncat."itemName", \'id\', wpncat."id") AS "category"';
            sql += ', json_build_object(\'name\', rsrc."itemName", \'id\', rsrc."id") AS "resource"';
            //sql += ', json_build_object(\'name\', rsrc."itemName", \'id\', rsrc."id") AS "resource"';
            sql += ', case ';
            sql += '	when count(wpnprop) = 0 ';
            sql += '    	then \'[]\' ';
            sql += '    else ';
            sql += '    	json_agg((';
            sql += '            SELECT x FROM (';
            sql += '                SELECT propitem.id, propitem."itemName" as "name", ';
            sql += '                	wpnprop."requireRange", wpnprop."requireDamage", wpnprop."requireDescription"';
            sql += '            ) x)) ';
            sql += '	end AS "weaponProperties"';
            sql += '                	, case ';
            sql += '                		when count(altDice) = 0 ';
            sql += '                			then \'{}\' ';
            sql += '                		else json_build_object(\'id\', altdice.id, \'dieCount\', altdice."dieCount", \'dieType\', altdice."dieType", \'rendered\', concat_ws(\'d\', altdice."dieCount"::text, altdice."dieType"::text)) ';
            sql += '                		end AS "versatileDamage"';
            sql += '                	, case ';
            sql += '                		when count(wpnrng) = 0 ';
            sql += '                			then \'{}\' ';
            sql += '                		else json_build_object(\'normal\', wpnrng."normalRange", \'maximum\', wpnrng."maximumRange") ';
            sql += '                		end AS "range"';
            sql += ' FROM adm_item i';
            sql += ' 	INNER JOIN adm_def_equipment eq ';
            sql += ' 		ON eq."equipmentId" = i.id';
            sql += ' 	INNER JOIN adm_def_equipment_weapon wpn ';
            sql += ' 		ON wpn."equipmentId" = i.id';
            sql += ' 	INNER JOIN adm_item dmgtype ';
            sql += ' 		ON dmgtype.id = wpn."damageTypeId"';
            sql += ' 	INNER JOIN adm_item wpnprof ';
            sql += ' 		ON wpnprof.id = wpn."proficiencyId"';
            sql += ' 	INNER JOIN adm_item wpncat ';
            sql += ' 		ON wpncat.id = wpn."categoryId"';
            sql += ' 	INNER JOIN adm_core_dice dice ';
            sql += ' 		ON dice.id = wpn."damageDiceId"';
            sql += '    INNER JOIN adm_item rsrc ON rsrc.id = i."resourceId"';
            sql += ' 	LEFT OUTER JOIN adm_link_weapon_property lnk ';
            sql += ' 		ON lnk."weaponId" = wpn."equipmentId"';
            sql += ' 	LEFT OUTER JOIN adm_def_weapon_property wpnprop ';
            sql += ' 		ON wpnprop."weaponPropertyId" = lnk."propertyId"';
            sql += ' 	LEFT OUTER JOIN adm_item propitem ';
            sql += ' 		ON propitem.id = wpnprop."weaponPropertyId"';
            sql += ' 	LEFT OUTER JOIN adm_def_equipment_weapon_alt_damage altdmg ';
            sql += ' 		ON altdmg."weaponId" = i."id"';
            sql += ' 	LEFT OUTER JOIN adm_core_dice altdice ';
            sql += ' 		ON altdice.id = altdmg."damageDiceId"';
            sql += ' 	LEFT OUTER JOIN adm_def_equipment_weapon_range wpnrng ';
            sql += ' 		ON wpnrng."weaponId" = i.id';
            sql += ' 	LEFT OUTER JOIN adm_def_equipment_weapon_special special ';
            sql += ' 		ON special."weaponId" = i.id';
            sql += ' GROUP BY i.id, eq.cost, eq.weight';
            sql += ' , special."specialDescription"';
            sql += ' , dice.id, dice."dieCount", dice."dieType"';
            sql += ' , dmgtype.id, dmgtype."itemName"';
            sql += ' , wpnprof.id, wpnprof."itemName"';
            sql += ' , wpncat.id, wpncat."itemName"';
            sql += ' , altdice.id, altdice."dieCount", altdice."dieType"';
            sql += ' , wpnrng."normalRange", wpnrng."maximumRange"';
            sql += ' , rsrc.id, rsrc."itemName"';
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
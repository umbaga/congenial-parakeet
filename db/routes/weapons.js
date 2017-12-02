module.exports = function(app, pg, async, pool, itemtypes, modules) {
    app.delete('/api/adm/equipment/weapon/:id', function(req, res) {
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
                function deleteEquipmentTable(resObj, callback) {
                    sql = 'DELETE FROM adm_def_equipment';
                    sql += ' WHERE "equipmentId" = $1';
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
                function deleteWeaponTable(resObj, callback) {
                    sql = 'DELETE FROM adm_def_equipment_weapon';
                    sql += ' WHERE "equipmentId" = $1';
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
                function deleteWeaponPropertiesTable(resObj, callback) {
                    sql = 'DELETE FROM adm_link_weapon_property';
                    sql += ' WHERE "referenceId" = $1';
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
                function deleteRangeTable(resObj, callback) {
                    sql = 'DELETE FROM adm_def_equipment_weapon_range';
                    sql += ' WHERE "equipmentId" = $1';
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
                function deleteDescriptionTable(resObj, callback) {
                    sql = 'DELETE FROM adm_def_equipment_weapon_special';
                    sql += ' WHERE "equipmentId" = $1';
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
                function deleteAltDamageTypeTable(resObj, callback) {
                    sql = 'DELETE FROM adm_def_equipment_weapon_alt_damage';
                    sql += ' WHERE "equipmentId" = $1';
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
                function deleteAmmunitionTypeTable(resObj, callback) {
                    sql = 'DELETE FROM adm_def_equipment_weapon_ammunition';
                    sql += ' WHERE "equipmentId" = $1';
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
                function deleteDamageTable(resObj, callback) {
                    sql = 'DELETE FROM adm_def_damage';
                    sql += ' WHERE "referenceId" = $1';
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
                    sql = 'UPDATE adm_core_item';
                    sql += ' SET "itemName" = $1';
                    sql += ', "resourceId" = $2';
                    sql += ' WHERE id = $3';
                    vals = [req.body.weapon.name, req.body.weapon.resource.id, req.params.id];
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
                        tmp.weapon.needsDescription = false;
                        if(tmp.weapon.description) {
                            tmp.weapon.needsDescription = true;
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
                    if (resObj.weapon.needsAltDamage) {
                        sql += ' UNION select $3 :: bigint as "dieCount", $4 :: bigint as "dieType"';
                    }
                    sql += ')';
                    sql += ' insert into adm_core_dice ("dieCount", "dieType")';
                    sql += ' select v."dieCount", v."dieType"';
                    sql += ' from vals as v';
                    sql += ' where not exists (select * from adm_core_dice as t where t."dieCount" = v."dieCount" and t."dieType" = v."dieType")';
                    sql += ' returning id AS "diceId";';
                    vals = [resObj.weapon.damage.dice.dieCount, resObj.weapon.damage.dice.dieType];
                    if (resObj.weapon.needsAltDamage) {
                        vals.push(resObj.weapon.damage.versatile.dice.dieCount);
                        vals.push(resObj.weapon.damage.versatile.dice.dieType);
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
                function getDamageDiceId(resObj, callback) {
                    sql = 'SELECT *';
                    sql += ' FROM adm_core_dice';
                    sql += ' WHERE ("dieCount" = $1 AND "dieType" = $2)';
                    vals = [resObj.weapon.damage.dice.dieCount, resObj.weapon.damage.dice.dieType];
                    if (resObj.weapon.needsAltDamage) {
                        sql += ' OR ("dieCount" = $3 AND "dieType" = $4)';
                        vals.push(resObj.weapon.damage.versatile.dice.dieCount);
                        vals.push(resObj.weapon.damage.versatile.dice.dieType);
                    }
                    var query = client.query(new pg.Query(sql, vals));
                    var results = [];
                    query.on('row', function(row) {
                        results.push(row);
                    });
                    query.on('end', function() {
                        done();
                        for (var e = 0; e < results.length; e++) {
                            if (results[e].dieCount == resObj.weapon.damage.dice.dieCount && results[e].dieType == resObj.weapon.damage.dice.dieType) {
                                resObj.weapon.damage.dice.id = results[e].id;
                            }
                            if (resObj.weapon.needsAltDamage) {
                                if (results[e].dieCount == resObj.weapon.damage.versatile.dice.dieCount && results[e].dieType == resObj.weapon.damage.versatile.dice.dieType) {
                                    resObj.weapon.damage.versatile.dice.id = results[e].id;
                                }
                            }
                        }
                        return callback(null, resObj);
                    });
                },
                function updateWeaponTable(resObj, callback) {
                    sql = 'UPDATE adm_def_equipment_weapon';
                    sql += ' SET "proficiencyId" = $2';
                    sql += ', "categoryId" = $3';
                    sql += ' WHERE "equipmentId" = $1';
                    vals = [req.params.id, resObj.weapon.proficiency.id, resObj.weapon.category.id];
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
                function updateDamageTable(resObj, callback) {
                    sql = 'UPDATE adm_def_damage';
                    sql += ' SET "diceId" = $2';
                    sql += ', "damageTypeId" = $3';
                    sql += ' WHERE "referenceId" = $1';
                    vals = [req.params.id, resObj.weapon.damage.dice.id, resObj.weapon.damage.type.id];
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
                    sql += ' WHERE "referenceId" = $1';
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
                    sql += ' WHERE "referenceId" = $1';
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
                        sql += ' ("referenceId", "propertyId")';
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
                    sql = 'SELECT * FROM adm_def_equipment_weapon_special WHERE "equipmentId" = $1';
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
                        sql += ' WHERE "equipmentId" = $2';
                        vals = [resObj.weapon.specialDescription, resObj.weapon.id];
                    } else if (resObj.weapon.needsSpecial && !specialExists) {
                        //insert
                        sql = 'INSERT INTO adm_def_equipment_weapon_special';
                        sql += ' ("specialDescription", "equipmentId")';
                        sql += ' VALUES ($1, $2)';
                        vals = [resObj.weapon.specialDescription, resObj.weapon.id];
                    } else {
                        //delete
                        sql = 'DELETE FROM adm_def_equipment_weapon_special';
                        sql += ' WHERE "equipmentId" = $1';
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
                    sql = 'SELECT * FROM adm_def_equipment_weapon_range WHERE "equipmentId" = $1';
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
                        sql += ' WHERE "equipmentId" = $3';
                        vals = [resObj.weapon.range.normal, resObj.weapon.range.maximum, req.params.id];
                    } else if (resObj.weapon.needsRange && !rangeExists) {
                        //insert
                        sql = 'INSERT INTO adm_def_equipment_weapon_range';
                        sql += ' ("normalRange", "maximumRange", "equipmentId")';
                        sql += ' VALUES ($1, $2, $3)';
                        vals = [resObj.weapon.range.normal, resObj.weapon.range.maximum, req.params.id];
                    } else {
                        //delete
                        sql = 'DELETE FROM adm_def_equipment_weapon_range';
                        sql += ' WHERE "equipmentId" = $1';
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
                function checkForVersatileDamage(resObj, callback) {
                    sql = 'SELECT * FROM adm_def_equipment_weapon_alt_damage';
                    sql += ' WHERE "equipmentId" = $1';
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
                        sql += ' WHERE "equipmentId" = $2';
                        vals = [resObj.weapon.damage.versatile.dice.id, resObj.weapon.id];
                    } else if (resObj.weapon.needsAltDamage && !altDamageExists) {
                        sql = 'INSERT INTO adm_def_equipment_weapon_alt_damage';
                        sql += ' ("damageDiceId", "equipmentId")';
                        sql += ' VALUES ($1, $2)';
                        vals = [resObj.weapon.damage.versatile.dice.id, resObj.weapon.id];
                    } else {
                        sql = 'DELETE FROM adm_def_equipment_weapon_alt_damage';
                        sql += ' WHERE "equipmentId" = $1';
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
                function checkForAmmunition(resObj, callback) {
                    sql = 'SELECT * FROM adm_def_equipment_weapon_ammunition WHERE "equipmentId" = $1';
                    vals = [req.params.id];
                    var query = client.query(new pg.Query(sql, vals));
                    var results = [];
                    query.on('row', function(row) {
                        results.push(row);
                    });
                    query.on('end', function() {
                        done();
                        var ammunitionExists = false;
                        if (results.length > 0) {
                            ammunitionExists = true;
                        }
                        return callback(null, resObj, ammunitionExists);
                    });
                },
                function addEditAmmunition(resObj, ammunitionExists, callback) {
                    sql = '';
                    if (resObj.weapon.needsAmmunitionType && ammunitionExists) {
                        //update
                        sql = 'UPDATE adm_def_equipment_weapon_ammunition';
                        sql += ' SET "ammunitionTypeId" = $1';
                        sql += ' WHERE "equipmentId" = $2';
                        vals = [resObj.weapon.ammunition.id, resObj.weapon.id];
                    } else if (resObj.weapon.needsAmmunitionType && !ammunitionExists) {
                        //insert
                        sql = 'INSERT INTO adm_def_equipment_weapon_ammunition';
                        sql += ' ("equipmentId", "ammunitionTypeId")';
                        sql += ' VALUES ($1, $2)';
                        vals = [resObj.weapon.id, resObj.weapon.ammunition.id];
                    } else {
                        //delete
                        sql = 'DELETE FROM adm_def_equipment_weapon_ammunition';
                        sql += ' WHERE "equipmentId" = $1';
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
                    if (resObj.weapon.needsDescription && descriptionExists) {
                        //update
                        sql = 'UPDATE adm_core_description';
                        sql += ' SET "description" = $1';
                        sql += ' WHERE "itemId" = $2';
                        vals = [resObj.weapon.description, resObj.weapon.id];
                    } else if (resObj.weapon.needsDescription && !descriptionExists) {
                        //insert
                        sql = 'INSERT INTO adm_core_description';
                        sql += ' ("itemId", "description")';
                        sql += ' VALUES ($1, $2)';
                        vals = [resObj.weapon.id, resObj.weapon.ammunition.id];
                    } else {
                        //delete
                        sql = 'DELETE FROM adm_core_description';
                        sql += ' WHERE "itemId" = $1';
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
                    sql = 'INSERT INTO adm_core_item';
                    sql += ' ("itemName", "resourceId", "itemTypeId")';
                    sql += ' VALUES ($1, $2, $3) returning id AS "equipmentId";';
                    vals = [req.body.weapon.name, req.body.weapon.resource.id, itemtypes.TYPE.WEAPON];
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
                        tmp.weapon.needsAmmunition = false;
                        if (tmp.weapon.specialDescription && tmp.weapon.specialDescription.length != 0) {
                            tmp.weapon.needsSpecial = true;
                        }
                        if (tmp.weapon.range.normal) {
                            tmp.weapon.needsRange = true;
                        }
                        if (tmp.weapon.damage.versatile && tmp.weapon.damage.versatile.dice && tmp.weapon.damage.versatile.dice.dieCount) {
                            tmp.weapon.needsAltDamage = true;
                        }
                        if (tmp.weapon.ammunition && tmp.weapon.ammunition.id) {
                            tmp.weapon.needsAmmunition = true;
                        }
                        return callback(null, tmp);
                    });
                },
                function insertDice(resObj, callback) {
                    sql = 'with vals as (';
                    sql += 'select $1 :: bigint as "dieCount", $2 :: bigint as "dieType"';
                    if (resObj.weapon.needsAltDamage) {
                        sql += ' UNION select $3 :: bigint as "dieCount", $4 :: bigint as "dieType"';
                    }
                    sql += ')';
                    sql += ' insert into adm_core_dice ("dieCount", "dieType")';
                    sql += ' select v."dieCount", v."dieType"';
                    sql += ' from vals as v';
                    sql += ' where not exists (select * from adm_core_dice as t where t."dieCount" = v."dieCount" and t."dieType" = v."dieType")';
                    sql += ' returning id AS "diceId";';
                    vals = [resObj.weapon.damage.dice.dieCount, resObj.weapon.damage.dice.dieType];
                    if (resObj.weapon.needsAltDamage) {
                        vals.push(resObj.weapon.damage.versatile.dice.dieCount);
                        vals.push(resObj.weapon.damage.versatile.dice.dieType);
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
                function selectDice(resObj, callback) {
                    sql = 'SELECT * FROM adm_core_dice';
                    sql += ' WHERE ("dieCount" = $1 AND "dieType" = $2)';
                    vals = [resObj.weapon.damage.dice.dieCount, resObj.weapon.damage.dice.dieType];
                    if (resObj.weapon.needsAltDamage) {
                        sql += ' OR ("dieCount" = $3 AND "dieType" = $4)';
                        vals.push(resObj.weapon.damage.versatile.dice.dieCount);
                        vals.push(resObj.weapon.damage.versatile.dice.dieType);
                    }
                    var query = client.query(new pg.Query(sql, vals));
                    var results = [];
                    query.on('row', function(row) {
                        results.push(row);
                    });
                    query.on('end', function() {
                        done();
                        for (var e = 0; e < results.length; e++) {
                            if (results[e].dieCount == resObj.weapon.damage.dice.dieCount && results[e].dieType == resObj.weapon.damage.dice.dieType) {
                                resObj.weapon.damage.dice.id = results[e].id;
                            }
                            if (resObj.weapon.needsAltDamage) {
                                if (results[e].dieCount == resObj.weapon.damage.versatile.dice.dieCount && results[e].dieType == resObj.weapon.damage.versatile.dice.dieType) {
                                    resObj.weapon.damage.versatile.dice.id = results[e].id;
                                }
                            }
                        }
                        return callback(null, resObj);
                    });
                },
                function insertEquipment(resObj, callback) {
                    sql = 'INSERT INTO adm_def_equipment';
                    sql += ' ("equipmentId", "weight", "cost", "categoryId")';
                    sql += ' VALUES ($1, $2, $3, $4);';
                    vals = [resObj.weapon.id, resObj.weapon.weight, resObj.weapon.cost, itemtypes.EQUIPMENT_CATEGORY.WEAPON];
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
                    sql += ' ("equipmentId", "proficiencyId", "categoryId")';
                    sql += ' VALUES ($1, $2, $3)';
                    vals = [resObj.weapon.id, resObj.weapon.proficiency.id, resObj.weapon.category.id];
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
                function insertDamage(resObj, callback) {
                    sql = 'INSERT INTO adm_def_damage';
                    sql += ' ("referenceId", "diceId", "damageTypeId")';
                    sql += ' VALUES ($1, $2, $3)';
                    vals = [resObj.weapon.id, resObj.weapon.damage.dice.id, resObj.weapon.damage.type.id];
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
                        sql += ' ("referenceId", "propertyId")';
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
                        sql += ' ("equipmentId", "normalRange", "maximumRange")';
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
                        sql += ' ("equipmentId", "specialDescription")';
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
                function insertVersatileDiceWeapon(resObj, callback) {
                    if (resObj.weapon.needsAltDamage) {
                        sql = 'INSERT INTO adm_def_equipment_weapon_alt_damage ("equipmentId", "damageDiceId")';
                        sql += ' VALUES ($1, $2);';
                        vals = [resObj.weapon.id, resObj.weapon.damage.versatile.dice.id];
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
                function insertAmmunition(resObj, callback) {
                    if (resObj.weapon.needsAmmunition) {
                        sql = 'INSERT INTO adm_def_equipment_weapon_ammunition ("equipmentId", "ammunitionTypeId")';
                        sql += ' VALUES ($1, $2);';
                        vals = [resObj.weapon.id, resObj.weapon.ammunition.id];
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
                function insertProficiency(resObj, callback) {
                    if (resObj.weapon.needsAltDamage) {
                        sql = 'INSERT INTO adm_def_proficiency ("proficiencyId", "categoryId")';
                        sql += ' VALUES ($1, $2);';
                        vals = [resObj.weapon.id, itemtypes.PROFICIENCY_CATEGORY.SPECIFIC_WEAPON];
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
                    if (resObj.weapon.description) {
                        sql = 'INSERT INTO adm_core_description';
                        sql += ' ("itemId", "description")';
                        sql += ' VALUES ($1, $2)';
                        vals = [resObj.weapon.id, resObj.weapon.description];
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
            sql += ', description.description';
            sql += ', special."specialDescription"';
            sql += ', json_build_object(';
            sql += '    \'versatile\', case when count(altDice) = 0 then \'{}\' else json_build_object(\'dice\', get_dice(altdice.id)) end ';
            sql += '    , \'dice\', get_dice(dice.id)';
            sql += '    , \'type\', json_build_object(\'name\', dmgtype."itemName", \'id\', dmgtype."id")';
            sql += ') AS "damage"';
            sql += ', json_build_object(\'name\', wpnprof."itemName", \'id\', wpnprof."id") AS "proficiency"';
            sql += ', json_build_object(\'name\', wpncat."itemName", \'id\', wpncat."id") AS "category"';
            sql += ', json_build_object(\'name\', rsrc."itemName", \'id\', rsrc."id") AS "resource"';
            sql += ', case  when count(wpnprop) = 0 then \'[]\' else json_agg(';
            sql += '    (';
            sql += '        SELECT x FROM (';
            sql += '            SELECT propitem.id, propitem."itemName" as "name"';
            sql += '            , wpnprop."requireRange", wpnprop."requireDamage", wpnprop."requireDescription", wpnprop."requireAmmunition"';
            sql += '        ) x';
            sql += '    )';
            sql += ') end AS "weaponProperties"';
            sql += ', case when count(wpnrng) = 0 then \'{}\' else json_build_object(';
            sql += '    \'normal\', wpnrng."normalRange", \'maximum\', wpnrng."maximumRange"';
            sql += ') end AS "range" ';
            sql += ', case when count(ammo) = 0 then \'{}\' else json_build_object(';
            sql += '    \'id\', ammo."id", \'name\', ammo."itemName"';
            sql += ') end AS "ammunition" ';
            sql += ' FROM adm_core_item i';
            sql += ' INNER JOIN adm_def_equipment eq ON eq."equipmentId" = i.id';
            sql += ' INNER JOIN adm_def_equipment_weapon wpn ON wpn."equipmentId" = i.id';
            sql += ' INNER JOIN adm_def_damage dmg ON dmg."referenceId" = i.id';
            sql += ' INNER JOIN adm_core_item dmgtype ON dmgtype.id = dmg."damageTypeId"';
            sql += ' INNER JOIN adm_core_item wpnprof ON wpnprof.id = wpn."proficiencyId"';
            sql += ' INNER JOIN adm_core_item wpncat ON wpncat.id = wpn."categoryId"';
            sql += ' INNER JOIN adm_core_dice dice ON dice.id = dmg."diceId"';
            sql += ' INNER JOIN adm_core_item rsrc ON rsrc.id = i."resourceId"';
            sql += ' LEFT OUTER JOIN adm_link_weapon_property lnk ON lnk."referenceId" = wpn."equipmentId"';
            sql += ' LEFT OUTER JOIN adm_def_weapon_property wpnprop ON wpnprop."weaponPropertyId" = lnk."propertyId"';
            sql += ' LEFT OUTER JOIN adm_core_item propitem ON propitem.id = wpnprop."weaponPropertyId"';
            sql += ' LEFT OUTER JOIN adm_def_equipment_weapon_alt_damage altdmg ON altdmg."equipmentId" = i."id"';
            sql += ' LEFT OUTER JOIN adm_core_dice altdice ON altdice.id = altdmg."damageDiceId"';
            sql += ' LEFT OUTER JOIN adm_def_equipment_weapon_range wpnrng ON wpnrng."equipmentId" = i.id';
            sql += ' LEFT OUTER JOIN adm_def_equipment_weapon_special special ON special."equipmentId" = i.id';
            sql += ' LEFT OUTER JOIN adm_def_equipment_weapon_ammunition ammolink ON ammolink."equipmentId" = i."id"';
            sql += ' LEFT OUTER JOIN adm_core_item ammo ON ammo.id = ammolink."ammunitionTypeId"';
            sql += ' LEFT OUTER JOIN adm_core_description description ON description."itemId" = i.id';
            sql += ' GROUP BY i.id, eq.cost, eq.weight';
            sql += ', special."specialDescription"';
            sql += ', dice.id, dice."dieCount", dice."dieType"';
            sql += ', dmgtype.id, dmgtype."itemName"';
            sql += ', wpnprof.id, wpnprof."itemName" ';
            sql += ', wpncat.id, wpncat."itemName"';
            sql += ', altdice.id, altdice."dieCount", altdice."dieType"';
            sql += ', wpnrng."normalRange", wpnrng."maximumRange"';
            sql += ', rsrc.id, rsrc."itemName" ';
            sql += ', ammo.id, ammo."itemName" ';
            sql += ', description.description';
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
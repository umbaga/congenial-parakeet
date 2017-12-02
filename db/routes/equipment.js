module.exports = function(app, pg, async, pool, itemtypes, modules) {
    app.delete('/api/adm/equipment/:id', function(req, res) {
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
                function deleteUnitCountTable(resObj, callback) {
                    sql = 'DELETE FROM adm_def_equipment_count_unit';
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
                    sql = 'DELETE FROM adm_def_equipment_ammunition';
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
                },
                function deleteImprovisedWeapon(resObj, callback) {
                    sql = 'DELETE FROM adm_def_equipment_improvised_weapon';
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
    app.put('/api/adm/equipment/:id', function(req, res) {
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
                    vals = [req.body.equipment.name, req.body.equipment.resource.id, req.params.id];
                    var query = client.query(new pg.Query(sql, vals));
                    query.on('row', function(row) {
                        results.push(row);
                    });
                    query.on('end', function() {
                        done();
                        var tmp = req.body;
                        tmp.equipment.needsCountUnit = false;
                        if (tmp.equipment.count || tmp.equipment.unit) {
                            tmp.equipment.needsCountUnit = true;
                        }
                        tmp.equipment.needsAmmunitionType = false;
                        if (tmp.equipment.category.id == 171) {
                            tmp.equipment.needsAmmunitionType = true;
                        }
                        tmp.equipment.needsDescription = false;
                        if(tmp.equipment.description) {
                            tmp.equipment.needsDescription = true;
                        }
                        tmp.equipment.needsImprovisedWeapon = false;
                        if (tmp.equipment.improvisedWeapon) {
                            tmp.equipment.needsImprovisedWeapon = true;
                        }
                        return callback(null, tmp);
                    });
                },
                function updateEquipmentTable(resObj, callback) {
                    sql = 'UPDATE adm_def_equipment';
                    sql += ' SET weight = $1';
                    sql += ', cost = $2';
                    sql += ', "categoryId" = $3';
                    sql += ' WHERE "equipmentId" = $4';
                    vals = [resObj.equipment.weight, resObj.equipment.cost, resObj.equipment.category.id, req.params.id];
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
                function checkForCountUnit(resObj, callback) {
                    sql = 'SELECT * FROM adm_def_equipment_count_unit WHERE "equipmentId" = $1';
                    vals = [req.params.id];
                    var query = client.query(new pg.Query(sql, vals));
                    var results = [];
                    query.on('row', function(row) {
                        results.push(row);
                    });
                    query.on('end', function() {
                        done();
                        var countUnitExists = false;
                        if (results.length > 0) {
                            countUnitExists = true;
                        }
                        return callback(null, resObj, countUnitExists);
                    });
                },
                function addEditCountUnit(resObj, countUnitExists, callback) {
                    sql = '';
                    if (resObj.equipment.needsCountUnit && countUnitExists) {
                        //update
                        sql = 'UPDATE adm_def_equipment_count_unit';
                        sql += ' SET "itemCount" = $1';
                        sql += ' WHERE "unitName" = $2';
                        vals = [resObj.equipment.count, resObj.equipment.unit];
                    } else if (resObj.equipment.needsSpecial && !countUnitExists) {
                        //insert
                        sql = 'INSERT INTO adm_def_equipment_count_unit';
                        sql += ' ("specialDescription", "equipmentId", "equipmentId")';
                        sql += ' VALUES ($1, $2)';
                        vals = [resObj.equipment.count, resObj.equipment.unit, resObj.equipment.id];
                    } else {
                        //delete
                        sql = 'DELETE FROM adm_def_equipment_count_unit';
                        sql += ' WHERE "equipmentId" = $1';
                        vals = [resObj.equipment.id];
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
                    sql = 'SELECT * FROM adm_def_equipment_ammunition WHERE "equipmentId" = $1';
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
                    if (resObj.equipment.needsAmmunitionType && ammunitionExists) {
                        //update
                        sql = 'UPDATE adm_def_equipment_ammunition';
                        sql += ' SET "ammunitionTypeId" = $1';
                        sql += ' WHERE "equipmentId" = $2';
                        vals = [resObj.equipment.ammunition.id, resObj.equipment.id];
                    } else if (resObj.equipment.needsAmmunitionType && !ammunitionExists) {
                        //insert
                        sql = 'INSERT INTO adm_def_equipment_ammunition';
                        sql += ' ("equipmentId", "ammunitionTypeId")';
                        sql += ' VALUES ($1, $2)';
                        vals = [resObj.equipment.id, resObj.equipment.ammunition.id];
                    } else {
                        //delete
                        sql = 'DELETE FROM adm_def_equipment_ammunition';
                        sql += ' WHERE "equipmentId" = $1';
                        vals = [resObj.equipment.id];
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
                    if (resObj.equipment.needsDescription && descriptionExists) {
                        //update
                        sql = 'UPDATE adm_core_description';
                        sql += ' SET "description" = $1';
                        sql += ' WHERE "itemId" = $2';
                        vals = [resObj.equipment.description, resObj.equipment.id];
                    } else if (resObj.equipment.needsDescription && !descriptionExists) {
                        //insert
                        sql = 'INSERT INTO adm_core_description';
                        sql += ' ("itemId", "description")';
                        sql += ' VALUES ($1, $2)';
                        vals = [resObj.equipment.id, resObj.equipment.ammunition.id];
                    } else {
                        //delete
                        sql = 'DELETE FROM adm_core_description';
                        sql += ' WHERE "itemId" = $1';
                        vals = [resObj.equipment.id];
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
                    if (resObj.equipment.needsImprovisedWeapon) {
                        sql = 'SELECT id';
                        sql += ' FROM adm_core_dice';
                        sql += ' WHERE "dieCount" = $1';
                        sql += ' AND "dieType" = $2';
                        vals = [resObj.equipment.improvisedWeapon.damage.dieCount, resObj.equipment.improvisedWeapon.damage.dieType];
                        var query = client.query(new pg.Query(sql, vals));
                        var results = [];
                        query.on('row', function(row) {
                            results.push(row);
                        });
                        query.on('end', function() {
                            done();
                            resObj.equipment.improvisedWeapon.damage.id = parseInt(results[0].id);
                            return callback(null, resObj);
                        });
                    } else {
                        return callback(null, resObj);
                    }
                },
                function checkForImprovisedWeapon(resObj, callback) {
                    if (resObj.equipment.needsImprovisedWeapon) {
                        sql = 'SELECT * FROM adm_def_equipment_improvised_weapon';
                        sql += ' WHERE "equipmentId" = $1';
                        vals = [resObj.equipment.id];
                        var query = client.query(new pg.Query(sql, vals));
                        var results = [];
                        query.on('row', function(row) {
                            results.push(row);
                        });
                        query.on('end', function() {
                            done();
                            //resObj.equipment.improvisedWeapon.damage.id = parseInt(results[0].id);
                            var hasImprovisedWeapon = results.length != 0;
                            return callback(null, resObj, hasImprovisedWeapon);
                        });
                    } else {
                        return callback(null, resObj, false);
                    }
                },
                function writeImprovisedWeapon(resObj, hasImprovisedWeapon, callback) {
                    if (resObj.equipment.needsImprovisedWeapon && hasImprovisedWeapon) {
                        sql = 'UPDATE adm_def_equipment_improvised_weapon';
                        sql += ' SET "damageDiceId" = $2';
                        sql += ', "damageTypeId" = $4';
                        sql += ', "range" = $3';
                        sql += ' WHERE "equipmentId" = $1';
                        vals = [
                            resObj.equipment.id, 
                            resObj.equipment.improvisedWeapon.damage.id, 
                            resObj.equipment.improvisedWeapon.damageType.id, 
                            resObj.equipment.improvisedWeapon.range
                        ];
                    } else if (resObj.equipment.needsImprovisedWeapon && !hasImprovisedWeapon) {
                        sql = 'INSERT INTO adm_def_equipment_improvised_weapon';
                        sql += ' ("equipmentId", "damageDiceId", "damageTypeId", "range")'
                        vals = [
                            resObj.equipment.id, 
                            resObj.equipment.improvisedWeapon.damage.id, 
                            resObj.equipment.improvisedWeapon.damageType.id, 
                            resObj.equipment.improvisedWeapon.range
                        ];
                    } else {
                        sql = 'DELETE FROM adm_def_equipment_improvised_weapon';
                        sql += ' WHERE "equipmentId" = $1';
                        vals = [resObj.equipment.id];
                        //return callback(null, resObj);
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
    app.post('/api/adm/equipment', function(req, res) {
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
                    sql = 'INSERT INTO adm_core_item';
                    sql += ' ("itemName", "resourceId", "itemTypeId")';
                    sql += ' VALUES ($1, $2, $3) returning id AS "equipmentId";';
                    vals = [req.body.equipment.name, req.body.equipment.resource.id, itemtypes.TYPE.EQUIPMENT];
                    var query = client.query(new pg.Query(sql, vals));
                    query.on('row', function(row) {
                        results.push(row);
                    });
                    query.on('end', function() {
                        done();
                        var tmp = req.body;
                        tmp.equipment.needsCountUnit = false;
                        if (tmp.equipment.count || tmp.equipment.unit) {
                            tmp.equipment.needsCountUnit = true;
                        }
                        tmp.equipment.needsAmmunitionType = false;
                        if (tmp.equipment.category.id == 171) {
                            tmp.equipment.needsAmmunitionType = true;
                        }
                        tmp.equipment.needsImprovisedWeapon = false;
                        if (tmp.equipment.improvisedWeapon) {
                            tmp.equipment.needsImprovisedWeapon = true;
                        }
                        tmp.equipment.needsImprovisedWeapon = false;
                        if (tmp.equipment.improvisedWeapon) {
                            tmp.equipment.needsImprovisedWeapon = true;
                        }
                        tmp.equipment.id = results[0].equipmentId;
                        return callback(null, tmp);
                    });
                },
                function insertEquipmentTable(resObj, callback) {
                    sql = 'INSERT INTO adm_def_equipment';
                    sql += ' ("equipmentId", "weight", "cost", "categoryId")';
                    sql += ' VALUES ($1, $2, $3, $4);';
                    vals = [resObj.equipment.id, resObj.equipment.weight, resObj.equipment.cost, resObj.equipment.category.id];
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
                function insertCountUnitTable(resObj, callback) {
                    if (resObj.equipment.needsCountUnit) {
                        sql = 'INSERT INTO adm_def_equipment_count_unit';
                        sql += ' ("equipmentId", "itemCount", "unitName")';
                        sql += ' VALUES ($1, $2, $3);';
                        vals = [resObj.equipment.id, resObj.equipment.count, resObj.equipment.unit];
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
                function insertAmmunitionTypeTable(resObj, callback) {
                    if (resObj.equipment.needsAmmunitionType) {
                        sql = 'INSERT INTO adm_def_equipment_ammunition';
                        sql += ' ("equipmentId", "ammunitionTypeId")';
                        sql += ' VALUES ($1, $2);';
                        vals = [resObj.equipment.id, resObj.equipment.ammunition.id];
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
                function getProficiencyInfoFromMapTable(resObj, callback) {
                    sql = 'SELECT * FROM adm_map_proficiency_equipment_category';
                    sql += ' WHERE "equipmentCategoryId" = $1';
                    vals = [resObj.equipment.category.id];
                    var query = client.query(new pg.Query(sql, vals));
                    var results = [];
                    query.on('row', function(row) {
                        results.push(row);
                    });
                    query.on('end', function() {
                        done();
                        if(results.length == 0) {
                            return callback(null, resObj, 0);
                        } else {
                            return callback(null, resObj, results[0].proficiencyCategoryId);
                        }
                    });
                },
                function insertProficiencyTable(resObj, proficiencyCategoryId, callback) {
                    if(proficiencyCategoryId != 0) {
                        sql = 'INSERT INTO adm_def_proficiency';
                        sql += ' ("proficiencyId", "categoryId")';
                        sql += ' VALUES ($1, $2)';
                        var query = client.query(new pg.Query(sql, vals));
                        var results = [resObj.equipment.id, proficiencyCategoryId];
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
                    if (resObj.equipment.description) {
                        sql = 'INSERT INTO adm_core_description';
                        sql += ' ("itemId", "description")';
                        sql += ' VALUES ($1, $2)';
                        vals = [resObj.equipment.id, resObj.equipment.description];
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
                function insertDice(resObj, callback) {
                    if (resObj.equipment.needsImprovisedWeapon) {
                        sql = 'with vals as (';
                        sql += 'select $1 :: bigint as "dieCount", $2 :: bigint as "dieType"';
                        sql += ')';
                        sql += ' insert into adm_core_dice ("dieCount", "dieType")';
                        sql += ' select v."dieCount", v."dieType"';
                        sql += ' from vals as v';
                        sql += ' where not exists (select * from adm_core_dice as t where t."dieCount" = v."dieCount" and t."dieType" = v."dieType")';
                        sql += ' returning id AS "diceId";';
                        vals = [resObj.equipment.improvisedWeapon.damage.dieCount, resObj.equipment.improvisedWeapon.damage.dieType];
                        var query = client.query(new pg.Query(sql, vals));
                        var results = [];
                        query.on('row', function(row) {
                            results.push(row);
                        });
                        query.on('end', function() {
                            done();
                            var skipNext = false;
                            if (results.length != 0){
                                resObj.equipment.improvisedWeapon.damage.id = parseInt(results[0].diceId);
                                skipNext = true;
                            }
                            return callback(null, resObj, skipNext);
                        });
                    } else {
                        return callback(null, resObj, true);
                    }
                },
                function selectDice(resObj, skipThis, callback) {
                    if (skipThis) {
                        return callback(null, resObj);
                    } else {
                        sql = 'SELECT id AS "diceId" FROM adm_core_dice  WHERE "dieCount" = $1 AND "dieType" = $2';
                        vals = [resObj.equipment.improvisedWeapon.damage.dieCount, resObj.equipment.improvisedWeapon.damage.dieType];
                        var query = client.query(new pg.Query(sql, vals));
                        var results = [];
                        query.on('row', function(row) {
                            results.push(row);
                        });
                        query.on('end', function() {
                            done();
                            resObj.equipment.improvisedWeapon.damage.id = parseInt(results[0].diceId);
                            return callback(null, resObj);
                        });
                    }
                },
                function insertImprovisedWeaponTable(resObj, callback) {
                    if (resObj.equipment.needsImprovisedWeapon) {
                        sql = 'INSERT INTO adm_def_equipment_improvised_weapon';
                        sql += ' ("equipmentId", "damageDiceId", "damageTypeId", "range")';
                        sql += ' VALUES ($1, $2, $3, $4);';
                        vals = [resObj.equipment.id, resObj.equipment.improvisedWeapon.damage.id, resObj.equipment.improvisedWeapon.damageType.id, resObj.equipment.improvisedWeapon.range];
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
    app.get('/api/adm/equipments', function(req, res) {
        var results = [];
        var vals = []
        pool.connect(function(err, client, done) {
            if (err) {
                done();
                console.error(err);
                return res.status(500).json({ success: false, data: err});
            }
            console.log('equipment');
            sql = 'SELECT i."itemName" AS name, i.id';
            sql += ' , equip.cost, equip.weight';
            sql += ' , description.description';
            sql += ' , json_build_object(\'name\', cat."itemName", \'id\', cat."id") AS "category"';
            sql += ' , json_build_object(\'name\', rsrc."itemName", \'id\', rsrc."id") AS "resource"';
            sql += ' , case when cntunit."itemCount" IS NULL then 1 else cntunit."itemCount" end AS "count"';
            sql += ' , case when cntunit."unitName" IS NULL then \'\' else cntunit."unitName" end AS "unit"';
            sql += '                 	, case ';
            sql += '                 		when count(ammo) = 0 ';
            sql += '                 			then \'{}\' ';
            sql += '                 		else json_build_object(\'id\', ammo."id", \'name\', ammo."itemName") ';
            sql += '                 		end AS "ammunition"';
            sql += ' , case when impweap."range" IS NULL then \'{}\'';
            sql += ' 	else';
            sql += '     json_build_object(';
            sql += '         \'damage\', json_build_object(\'dieCount\', dmgdice."dieCount", ';
            sql += '                                     \'dieType\', dmgdice."dieType",';
            sql += '                                    \'rendered\', concat_ws(\'d\', dmgdice."dieCount"::text, dmgdice."dieType"::text)),';
            sql += '         \'damageType\', json_build_object(\'id\', impweap."damageTypeId", \'name\', dmgtype."itemName"),';
            sql += '         \'range\', impweap.range';
            sql += '     )';
            sql += '     end AS "improvisedWeapon"';
            sql += '  FROM adm_core_item i';
            sql += '  INNER JOIN adm_def_equipment equip ON equip."equipmentId" = i.id';
            sql += '  INNER JOIN adm_core_item cat ON cat.id = equip."categoryId"';
            sql += '  INNER JOIN adm_core_item rsrc ON rsrc.id = i."resourceId"';
            sql += '  LEFT OUTER JOIN adm_def_equipment_count_unit cntunit ON cntunit."equipmentId" = i.id';
            sql += '  LEFT OUTER JOIN adm_def_equipment_ammunition ammolink ON ammolink."equipmentId" = i."id"';
            sql += '  LEFT OUTER JOIN adm_core_item ammo ON ammo.id = ammolink."ammunitionTypeId"';
            sql += '  LEFT OUTER JOIN adm_core_description description ON description."itemId" = i.id';
            sql += '  LEFT OUTER JOIN adm_def_equipment_improvised_weapon impweap ON impweap."equipmentId" = i.id';
            sql += '  LEFT OUTER JOIN adm_core_item dmgtype ON dmgtype.id = impweap."damageTypeId"';
            sql += '  LEFT OUTER JOIN adm_core_dice dmgdice ON dmgdice.id = impweap."damageDiceId"';
            sql += '  WHERE equip."categoryId" NOT IN ($1, $2, $3)';
            sql += '  GROUP BY i.id, equip.cost, equip.weight';
            sql += ' , cat.id, cat."itemName"';
            sql += ' , rsrc.id, rsrc."itemName"';
            sql += '  , ammo.id, ammo."itemName"';
            sql += '  , cntunit."itemCount", cntunit."unitName"';
            sql += ' , description.description';
            sql += ' , impweap."range", dmgdice."dieCount", dmgdice."dieType"';
            sql += ' , impweap."damageTypeId", dmgtype."itemName", impweap.range';
            sql += '  ORDER BY i."itemName"';
            vals = [itemtypes.EQUIPMENT_CATEGORY.ARMOR, itemtypes.EQUIPMENT_CATEGORY.EQUIPMENT_PACK, itemtypes.EQUIPMENT_CATEGORY.WEAPON];
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
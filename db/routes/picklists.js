module.exports = function(app, pg, async, pool, itemtypes, modules) {
    app.get('/api/adm/picklist/weaponproperties', function(req, res) {
        var results = [];
        pool.connect(function(err, client, done) {
            if (err) {
                done();
                console.error(err);
                return res.status(500).json({ success: false, data: err});
            }
            sql = 'SELECT i.id, i."itemName" as name';
            sql += ', wp."requireRange", wp."requireDamage", wp."requireDescription"';
            sql += 'FROM adm_core_item i';
            sql += 'INNER JOIN adm_def_weapon_property wp ON wp."weaponPropertyId"  = i.id';
            sql += 'WHERE i."itemTypeId" = 86';
            sql += 'ORDER BY i."itemName"';
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
    app.get('/api/adm/picklist/weaponproficiencies', function(req, res) {
        var results = [];
        pool.connect(function(err, client, done) {
            if (err) {
                done();
                console.error(err);
                return res.status(500).json({ success: false, data: err});
            }
            sql = 'SELECT i.id, i."itemName" as name';
            sql += 'FROM adm_core_item i';
            sql += 'WHERE i."itemTypeId" = 82';
            sql += 'ORDER BY i."itemName"';
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
    app.get('/api/adm/picklist/weaponcategories', function(req, res) {
        var results = [];
        pool.connect(function(err, client, done) {
            if (err) {
                done();
                console.error(err);
                return res.status(500).json({ success: false, data: err});
            }
            sql = 'SELECT i.id, i."itemName" as name';
            sql += 'FROM adm_core_item i';
            sql += 'WHERE i."itemTypeId" = 83';
            sql += 'ORDER BY i."itemName"';
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
    app.get('/api/adm/picklist/armorproficiencies', function(req, res) {
        var results = [];
        pool.connect(function(err, client, done) {
            if (err) {
                done();
                console.error(err);
                return res.status(500).json({ success: false, data: err});
            }
            sql = 'SELECT i.id, i."itemName" as name';
            sql += 'FROM adm_core_item i';
            sql += 'WHERE i."itemTypeId" = 84';
            sql += 'ORDER BY i."itemName"';
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
    app.get('/api/adm/picklist/damagetypes', function(req, res) {
        var results = [];
        pool.connect(function(err, client, done) {
            if (err) {
                done();
                console.error(err);
                return res.status(500).json({ success: false, data: err});
            }
            sql = 'SELECT i.id, i."itemName" as name';
            sql += ', dt."isWeaponDamageType"';
            sql += 'FROM adm_core_item i';
            sql += ' INNER JOIN adm_def_damage_type dt ON dt."damageTypeId" = i.id';
            sql += 'WHERE i."itemTypeId" = 81';
            sql += 'ORDER BY i."itemName"';
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
    app.get('/api/adm/picklists/all', function(req, res) {
        var results = [];
        pool.connect(function(err, client, done) {
            if (err) {
                done();
                console.error(err);
                return res.status(500).json({ success: false, data: err});
            }
            sql = 'SELECT t.id, t."typeName" as name, t."isPicklist"';
            sql += ', json_agg((SELECT x FROM (SELECT ';
            sql += 'CASE WHEN i."itemName" IS NOT NULL THEN i."itemName" ELSE typ."typeName" END AS "name"';
            sql += ', CASE WHEN i."itemName" IS NOT NULL THEN i.id ELSE typ.id END AS id';
            sql += ', wpnProp."requireRange"';
            sql += ', wpnProp."requireDamage"';
            sql += ', wpnProp."requireAmmunition"';
            sql += ', wpnProp."requireDescription"';
            sql += ', profcat."isEquipmentBased"';
            sql += ', profcat."parentId"';
            sql += ', profcat."requireAbilityScore"';
            sql += ', dmgtype."isWeapon"';
            sql += ', profcat."requireLanguageInfo"';
            sql += ', description.description';
            sql += ', spcomp."requireDescription"';
            sql += ', itemorder."orderIndex"';
            sql += ', ability."isPrimary"';
            sql += ') x ORDER BY i."itemName")) AS items';
            sql += ' FROM adm_core_type t';
            sql += ' LEFT OUTER JOIN adm_core_item i ON i."itemTypeId" = t.id';
            sql += ' LEFT OUTER JOIN adm_def_weapon_property wpnprop ON wpnprop."weaponPropertyId" = i.id';
            sql += ' LEFT OUTER JOIN adm_def_proficiency_category profcat ON profcat."proficiencyCategoryId" = i.id';
            sql += ' LEFT OUTER JOIN adm_def_damage_type dmgtype ON dmgtype."damageTypeId" = i.id';
            sql += ' LEFT OUTER JOIN adm_core_description description ON description."itemId" = i.id AND description."descriptionTypeId" = 171';
            sql += ' LEFT OUTER JOIN adm_def_spell_component spcomp ON spcomp."spellComponentId" = i.id';
            sql += ' LEFT OUTER JOIN adm_link_type_picklist lnk ON lnk."picklistId" = t.id';
            sql += ' LEFT OUTER JOIN adm_core_type typ ON typ.id = lnk."typeId"';
            sql += ' LEFT OUTER JOIN adm_def_picklist_item itemorder ON itemorder."picklistItemId" = i.id';
            sql += ' LEFT OUTER JOIN adm_def_ability_score ability ON ability."abilityScoreId" = i.id';
            sql += ' WHERE (t."isPicklist" = true) OR (t."isChart" = false AND t."isDescription" = false) OR (t."isTypePicklist" = true)';
            sql += ' GROUP BY t.id';
            sql += ' ORDER BY t."typeName"';
            var query = client.query(new pg.Query(sql));
            query.on('row', function(row) {
                //this loop removes null values properties of item objects
                for (var x = 0; x < row.items.length; x++) {
                    var tmp = row.items[x];
                    for (var key in row.items[x]) {
                        if(row.items[x].hasOwnProperty(key)) {
                            if(row.items[x][key] === null) {
                                delete row.items[x][key];
                            }
                        }
                    }
                }
                row.items = row.items.sort(function(a, b) {
                    if (a.orderIndex != undefined) {
                        if (a.orderIndex == b.orderIndex) {
                            if (a.name < b.name) return -1;
                            if (a.name > b.name) return 1;
                        } else {
                            return a.orderIndex - b.orderIndex;
                        }
                    } else {
                        if (a.name < b.name) return -1;
                        if (a.name > b.name) return 1;
                    }
                    return 0;
                });
                results.push(row);
            });
            query.on('end', function() {
                done();
                for (var r = 0; r < results.length; r++) {
                    if (results[r].id == 72) {
                        results[r].items = results[r].items.sort(function (a, b) {
                            if (a.name < b.name) return 1;
                            if (a.name > b.name) return -1;
                            return 0;
                        });
                    }
                }
                return res.json(results);
            });
        });
    });
    app.post('/api/adm/picklist/item', function(req, res) {
        var results = [];
        pool.connect(function(err, client, done) {
            if (err) {
                done();
                console.error(err);
                return res.status(500).json({ success: false, data: err });
            }
            async.waterfall([
                function init(callback) {
                    callback(null, req);
                },
                function insertItem (req, callback) {
                    sql = 'INSERT INTO adm_core_item';
                    sql += ' ("itemName", "itemTypeId")';
                    sql += ' VALUES ($1, $2) RETURNING id;';
                    vals = [req.body.picklistItem.name, req.body.picklistItem.picklistId];
                    var query = client.query(new pg.Query(sql, vals));
                    query.on('row', function(row) {
                        results.push(row);
                    });
                    query.on('end', function() {
                        done();
                        var resObj = req.body;
                        resObj.picklistItem.id = parseInt(results[0].id);
                        return callback(null, resObj);//res.json(resObj);
                    });
                }/*,
                function insertPicklistItemDef(resObj, callback) {
                    sql = 'INSERT INTO adm_def_picklist_item';
                    sql += ' ("picklistItemId")';
                    sql += ' VALUES ($1)';
                    vals = [resObj.picklistItem.id];
                    var query = client.query(new pg.Query(sql, vals));
                    var results = [];
                    query.on('row', function(row) {
                        results.push(row);
                    });
                        query.on('end', function() {
                        done();
                        return callback(null, resObj);
                    });
                }*/
            ], function(error, result) {
                if (error) {
                    console.error(error);
                }
                return res.json(result);
            });
        });
    });
    app.delete('/api/adm/picklist/item/:id', function(req, res) {
        var results = [];
        pool.connect(function(err, client, done) {
            if (err) {
                done();
                console.error(err);
                return res.status(500).json({ success: false, data: err});
            }
            sql = 'DELETE FROM adm_core_item';
            sql += ' WHERE id = $1';
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
};
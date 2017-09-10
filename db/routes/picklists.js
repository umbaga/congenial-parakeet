module.exports = function(app, pg, async, pool) {
    app.get('/api/adm/picklist/weaponproperties', function(req, res) {
        var results = [];
        pool.connect(function(err, client, done) {
            if(err) {
                done();
                console.error(err);
                return res.status(500).json({ success: false, data: err});
            }
            sql = 'SELECT i.id, i."itemName" as name';
            sql += ', wp."requireRange", wp."requireDamage", wp."requireDescription"';
            sql += 'FROM adm_item i';
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
            if(err) {
                done();
                console.error(err);
                return res.status(500).json({ success: false, data: err});
            }
            sql = 'SELECT i.id, i."itemName" as name';
            sql += 'FROM adm_item i';
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
            if(err) {
                done();
                console.error(err);
                return res.status(500).json({ success: false, data: err});
            }
            sql = 'SELECT i.id, i."itemName" as name';
            sql += 'FROM adm_item i';
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
            if(err) {
                done();
                console.error(err);
                return res.status(500).json({ success: false, data: err});
            }
            sql = 'SELECT i.id, i."itemName" as name';
            sql += 'FROM adm_item i';
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
            if(err) {
                done();
                console.error(err);
                return res.status(500).json({ success: false, data: err});
            }
            sql = 'SELECT i.id, i."itemName" as name';
            sql += ', dt."isWeaponDamageType"';
            sql += 'FROM adm_item i';
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
            if(err) {
                done();
                console.error(err);
                return res.status(500).json({ success: false, data: err});
            }
            sql = 'SELECT t.id, t."typeName" as name, t."isPicklist"';
            sql += ', json_agg((SELECT x FROM (SELECT i."itemName" AS "name", i."id", i."orderIndex", i."defaultSelected"';
            sql += ', wpnProp."requireRange"';
            sql += ', wpnProp."requireDamage"';
            sql += ', wpnProp."requireDescription") x ORDER BY i."orderIndex")) AS items';
            sql += ' FROM adm_type t';
            sql += ' LEFT OUTER JOIN v_adm_item_type i ON i."itemTypeId" = t.id';
            sql += ' LEFT OUTER JOIN adm_def_weapon_property wpnprop ON wpnprop."weaponPropertyId" = i.id';
            sql += ' WHERE t."isPicklist" = true';
            sql += ' GROUP BY t.id';
            sql += ' ORDER BY t."typeName"';
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
    app.post('/api/adm/picklist/item', function(req, res) {
        var results = [];
        pool.connect(function(err, client, done) {
            if(err) {
                done();
                console.error(err);
                return res.status(500).json({ success: false, data: err });
            }
            sql = 'INSERT INTO adm_item';
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
                return res.json(resObj);
            });
        });
    });
    app.delete('/api/adm/picklist/item/:id', function(req, res) {
        var results = [];
        pool.connect(function(err, client, done) {
            if(err) {
                done();
                console.error(err);
                return res.status(500).json({ success: false, data: err});
            }
            sql = 'DELETE FROM adm_item';
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
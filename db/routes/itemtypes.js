module.exports = function(app, pg, async, pool, itemtypes, modules) {
    app.delete('/api/adm/itemtype/:id', function(req, res) {
        var results = [];
        pool.connect(function(err, client, done) {
            if (err) {
                done();
                console.error(err);
                return res.status(500).json({ success: false, data: err});
            }
            sql = 'DELETE FROM adm_core_type';
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
    app.put('/api/adm/itemtype/:id', function(req, res) {
        var results = [];
        pool.connect(function(err, client, done) {
            if (err) {
                done();
                console.error(err);
                return res.status(500).json({ success: false, data: err});
            }
            sql = 'UPDATE adm_core_type';
            sql += ' SET "typeName" = $2';
            sql += ', "isPicklist" = $3';
            sql += ', "isDescription" = $4';
            sql += ', "isChart" = $5';
            sql += ' WHERE id = $1';
            vals = [req.params.id, req.body.itemtype.name, req.body.itemtype.isPicklist, req.body.itemtype.isDescription, req.body.itemtype.isChart];
            var query = client.query(new pg.Query(sql, vals));
            query.on('row', function(row) {
                results.push(row);
            });
            query.on('end', function() {
                done();
                var resObj = req.body;
                return res.json(resObj);
            });
        });
    });
    app.post('/api/adm/itemtype', function(req, res){
        var results = [];
        pool.connect(function(err, client, done) {
            if (err) {
                done();
                console.error(err);
                return res.status(500).json({ success: false, data: err});
            }
            sql = 'INSERT INTO adm_core_type';
            sql += '("typeName", "isPicklist", "isDescription", "isChart")';
            sql += 'VALUES ($1, $2, $3, $4) RETURNING id;';
            vals = [req.body.itemtype.name, req.body.itemtype.isPicklist, req.body.itemtype.isDescription, req.body.itemtype.isChart];
            var query = client.query(new pg.Query(sql, vals));
            query.on('row', function(row) {
                results.push(row);
            });
            query.on('end', function() {
                done();
                var resObj = req.body;
                resObj.itemtype.id = parseInt(results[0].id);
                return res.json(resObj);
            });
        });
    });
    app.get('/api/adm/itemtypes', function(req, res) {
        var results = [];
        pool.connect(function(err, client, done) {
            if (err) {
                done();
                console.error(err);
                return res.status(500).json({ success: false, data: err});
            }
            sql = 'SELECT adm_core_type."id"';
            sql += ', adm_core_type."typeName" AS "name"';
            sql += ', adm_core_type."isPicklist"';
            sql += ', adm_core_type."isDescription"';
            sql += ', adm_core_type."isChart"';
            sql += ' FROM adm_core_type';
            sql += ' ORDER BY "typeName"';
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
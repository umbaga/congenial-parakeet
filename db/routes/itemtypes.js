module.exports = function(app, pg, async, pool) {
    app.get('/api/adm/itemtypes', function(req, res) {
        var results = [];
        pool.connect(function(err, client, done) {
            if(err) {
                done();
                console.error(err);
                return res.status(500).json({ success: false, data: err});
            }
            sql = 'SELECT adm_type."id", adm_type."typeName" AS "name", adm_type."isPicklist"';
            sql += ' FROM adm_type';
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
    app.post('/api/adm/itemtype', function(req, res){
        var results = [];
        pool.connect(function(err, client, done) {
            if(err) {
                done();
                console.error(err);
                return res.status(500).json({ success: false, data: err});
            }
            sql = 'INSERT INTO adm_type';
            sql += '("typeName", "isPicklist")';
            sql += 'VALUES ($1, $2) RETURNING id;';
            vals = [req.body.itemtype.name, req.body.itemtype.isPicklist];
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
    app.put('/api/adm/itemtype/:id', function(req, res) {
        var results = [];
        pool.connect(function(err, client, done) {
            if(err) {
                done();
                console.error(err);
                return res.status(500).json({ success: false, data: err});
            }
            sql = 'UPDATE adm_type';
            sql += ' SET "typeName" = $1';
            sql += ', "isPicklist" = $2'
            sql += ' WHERE id = $3';
            vals = [req.body.itemtype.name, req.body.itemtype.isPicklist, req.params.id];
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
    app.delete('/api/adm/itemtype/:id', function(req, res) {
        var results = [];
        pool.connect(function(err, client, done) {
            if(err) {
                done();
                console.error(err);
                return res.status(500).json({ success: false, data: err});
            }
            sql = 'DELETE FROM adm_type';
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
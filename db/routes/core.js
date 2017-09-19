module.exports = function(app, pg, async, pool) {
    app.get('/api/adm/core/dierolls', function(req, res) {
        var results = [];
        pool.connect(function(err, client, done) {
            if (err) {
                done();
                console.error(err);
                return res.status(500).json({ success: false, data: err});
            }
            sql = 'SELECT dice.id, dice."dieCount", dice."dieType"';
            sql += ' FROM adm_core_dice dice';
            sql += ' ORDER BY dice."dieCount", dice."dieType"';
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
    app.post('/api/adm/core/dieroll', function(req, res){
        var results = [];
        pool.connect(function(err, client, done) {
            if (err) {
                done();
                console.error(err);
                return res.status(500).json({ success: false, data: err});
            }
            sql = 'INSERT INTO adm_core_dice';
            sql += '("dieCount", "dieType")';
            sql += 'VALUES ($1, $2) RETURNING id;';
            vals = [req.body.dieRoll.dieCount, req.body.dieRoll.dieType];
            var query = client.query(new pg.Query(sql, vals));
            query.on('row', function(row) {
                results.push(row);
            });
            query.on('end', function() {
                done();
                var resObj = req.body;
                resObj.dieroll.id = parseInt(results[0].id);
                return res.json(resObj);
            });
        });
    });
};
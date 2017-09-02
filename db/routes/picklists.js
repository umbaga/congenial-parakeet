module.exports = function(app, pg, async, pool) {
    app.get('/api/adm/picklists/all', function(req, res) {
        var results = [];
        pool.connect(function(err, client, done) {
            if(err) {
                done();
                console.log(err);
                return res.status(500).json({ success: false, data: err});
            }
            sql = 'SELECT t.id, t."typeName" as name, t."isPicklist"';
            sql += ', json_agg(i."itemName") AS "itemName", json_agg(i."id") AS "itemId"';
            sql += ' FROM adm_type t';
            sql += ' LEFT OUTER JOIN v_adm_item_type i ON i."itemTypeId" = t.id';
            sql += ' WHERE t."isPicklist" = true';
            sql += ' GROUP BY t.id';
            sql += ' ORDER BY t."typeName"';
            var query = client.query(new pg.Query(sql));
            query.on('row', function(row) {
                var items = [];
                for(var q = 0; q < row.itemName.length; q++) {
                    var newItem = {};
                    newItem.id = row.itemId[q];
                    newItem.name = row.itemName[q];
                    items.push(newItem);
                }
                row.items = items;
                delete row.itemName;
                delete row.itemId;
                results.push(row);
            });
            query.on('end', function() {
                done();
                return res.json(results);
            });
        });
    });
};
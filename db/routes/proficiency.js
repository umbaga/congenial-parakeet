module.exports = function(app, pg, async, pool) {
    app.get('/api/adm/proficiencies', function(req, res) {
        var results = [];
        pool.connect(function(err, client, done) {
            if (err) {
                done();
                console.error(err);
                return res.status(500).json({ success: false, data: err});
            }
            sql = 'SELECT i.id, i."itemName" as name';
            sql += ' , json_build_object(\'name\', cat."itemName", \'id\', cat."id", \'isTool\', CASE WHEN cat."id" IN (238, 241, 242, 243, 541) THEN true ELSE false END) AS "category"';
            sql += ' , CASE WHEN ability.id IS NULL THEN \'{}\' ';
            sql += ' ELSE json_build_object(\'name\', ability."itemName", \'id\', ability."id") END AS "abilityScore"';
            sql += ' , CASE WHEN script."id" IS NULL THEN \'{}\' ';
            sql += ' ELSE json_build_object(\'script\', json_build_object(\'name\', script."itemName", \'id\', script.id), ';
            sql += '                        \'type\', json_build_object(\'name\', langtype."itemName", \'id\', langtype.id)) END AS "language"';
            sql += ' FROM adm_core_item i';
            sql += ' INNER JOIN adm_def_proficiency prof ON prof."proficiencyId" = i.id';
            sql += ' INNER JOIN adm_core_item cat ON cat.id = prof."categoryId"';
            sql += ' LEFT OUTER JOIN adm_def_proficiency_ability_score profability ON profability."proficiencyId" = i.id';
            sql += ' LEFT OUTER JOIN adm_core_item ability ON ability.id = profability."abilityScoreId"';
            sql += ' LEFT OUTER JOIN adm_def_proficiency_language proflang ON proflang."proficiencyId" = i.id';
            sql += ' LEFT OUTER JOIN adm_core_item script ON script.id = proflang."scriptId"';
            sql += ' LEFT OUTER JOIN adm_core_item langtype ON langtype.id = proflang."languageTypeId"';
            sql += ' ORDER BY cat."itemName", i."itemName"';
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
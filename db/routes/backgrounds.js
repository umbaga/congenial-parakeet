module.exports = function(app, pg, async, pool) {
    app.delete('/api/adm/background/:id', function(req, res) {
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
                function deleteBackgroundTable(resObj, callback) {
                    sql = 'DELETE FROM adm_def_background';
                    sql += ' WHERE "backgroundId" = $1';
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
    app.put('/api/adm/background/:id', function(req, res) {
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
                    sql += ' WHERE id = $2'
                    vals = [req.body.background.name, req.params.id];
                    var query = client.query(new pg.Query(sql, vals));
                    query.on('row', function(row) {
                        results.push(row);
                    });
                    query.on('end', function() {
                        done();
                        var tmp = req.body;
                        return callback(null, tmp);
                    });
                },
                function updateBackgroundTable(resObj, callback) {
                    sql = 'UPDATE adm_def_background';
                    //sql += ' SET weight = $1';
                    //sql += ', cost = $2';
                    sql += ' WHERE "backgroundId" = $1';
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
    app.post('/api/adm/background', function(req, res) {
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
                    sql += ' ("itemName", "itemTypeId")';
                    sql += ' VALUES ($1, 98) returning id AS "backgroundId";';
                    vals = [req.body.background.name];
                    var query = client.query(new pg.Query(sql, vals));
                    query.on('row', function(row) {
                        results.push(row);
                    });
                    query.on('end', function() {
                        done();
                        var tmp = req.body;
                        tmp.background.id = results[0].backgroundId;
                        return callback(null, tmp);
                    });
                },
                function insertBackgroundFeatureItem(resObj, callback) {
                    sql = 'INSERT INTO adm_core_item';
                    sql += ' ("itemName", "itemTypeId")';
                    sql += ' VALUES ($1, 113) returning id AS "featureId";';
                    vals = [resObj.background.id, resObj.background.feature.id, resObj.background.startingGold];
                    var query = client.query(new pg.Query(sql, vals));
                    var results = [];
                    query.on('row', function(row) {
                        results.push(row);
                    });
                    query.on('end', function() {
                        done();
                        resObj.background.feature.id = parseInt(results[0].featureId);
                        return callback(null, resObj);
                    });
                },
                function insertBackgroundFeature(resObj, callback) {
                    sql = 'INSERT INTO adm_def_feature';
                    sql += ' ("backgroundId", "featureId", "startingGold")';
                    sql += ' VALUES ($1, $2, $3) returning id AS "featureId";';
                    vals = [resObj.background.id, resObj.background.feature.id, resObj.background.startingGold];
                    var query = client.query(new pg.Query(sql, vals));
                    var results = [];
                    query.on('row', function(row) {
                        results.push(row);
                    });
                    query.on('end', function() {
                        done();
                        resObj.background.feature.id = parseInt(results[0].featureId);
                        return callback(null, resObj);
                    });
                },
                function insertBackground(resObj, callback) {
                    sql = 'INSERT INTO adm_def_background';
                    sql += ' ("backgroundId", "featureId", "startingGold")';
                    sql += ' VALUES ($1, $2, $3);';
                    vals = [resObj.background.id, resObj.background.feature.id, resObj.background.startingGold];
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
    app.get('/api/adm/backgrounds', function(req, res) {
        var results = [];
        pool.connect(function(err, client, done) {
            if (err) {
                done();
                console.error(err);
                return res.status(500).json({ success: false, data: err});
            }
            sql = 'SELECT i.id, i."itemName" as name';
            sql += ' , bg."startingGold"';
            sql += ' , description.description';
            sql += ' , json_build_object(\'name\', rsrc."itemName", \'id\', rsrc."id") AS "resource"';
            sql += ' , json_build_object(';
            sql += '  	\'name\', feature."itemName", ';
            sql += '  	\'id\', feature."id",';
            sql += '  	\'description\', featuredesc.description';
            sql += '  ) AS "feature"';
            sql += ' , case ';
            sql += '  when count(eq) = 0 ';
            sql += '  then \'[]\' ';
            sql += '  else ';
            sql += '  	json_agg((';
            sql += '  		SELECT x FROM (';
            sql += '  			SELECT eqi.id, eq.cost, eq.weight, eqi."itemName" as "name", bglnkeq."assignedCount"';
            sql += '    				, case when cntunit."itemCount" IS NULL then 1 else cntunit."itemCount" end AS "count"';
            sql += '    				, case when cntunit."unitName" IS NULL then \'\' else cntunit."unitName" end AS "unit") x)) end AS "assignedEquipment"';
            sql += '  ';
            sql += ' , (SELECT r.charts';
            sql += '  FROM (';
            sql += '      SELECT ';
            sql += '          json_agg(chart_row) AS charts,';
            sql += '      	d.id';
            sql += '      FROM adm_core_item d';
            sql += '      INNER JOIN adm_link_chart dc ON (dc."referenceId" = d.id)';
            sql += '      INNER JOIN (';
            sql += '          SELECT  ';
            sql += '              c.id,       ';
            sql += '              c.title,';
            sql += '          	cd.description,';
            sql += '          	bgcht."orderIndex",';
            sql += '              json_agg(cm) AS entries';
            sql += '              , json_build_object(';
            sql += '                  \'dieCount\', dice."dieCount", ';
            sql += '                  \'dieType\', dice."dieType",';
            sql += '                  \'rendered\', CASE WHEN dice."dieType" = 1 ';
            sql += '                  THEN dice."dieCount"::text';
            sql += '                  ELSE dice."dieCount"::text || \'d\' || dice."dieType"::text';
            sql += '                  END';
            sql += '              ) AS "dieRoll"';
            sql += '          FROM adm_core_chart c';
            sql += '          INNER JOIN adm_link_chart bgcht ON bgcht."chartId" = c.id';
            sql += '          INNER JOIN adm_def_chart_entry cm ON (cm."chartId" = c.id) ';
            sql += '          INNER JOIN adm_core_dice dice ON dice.id = c."diceId"';
            sql += '          LEFT OUTER JOIN adm_core_description cd ON cd."itemId" = c.id';
            sql += '          GROUP BY c.id, dice."dieType", dice."dieCount", bgcht."orderIndex", cd.description';
            sql += '          ORDER BY bgcht."orderIndex"';
            sql += '      ) chart_row ON (chart_row.id = dc."chartId")';
            sql += '      GROUP BY d.id';
            sql += '  ) r(charts, id) WHERE id = i.id) AS charts';
            sql += ' , (SELECT r.variants';
            sql += '  FROM (';
            sql += '      SELECT ';
            sql += '          json_agg(variant_row) AS variants,';
            sql += '      	dc."backgroundId" AS id';
            sql += '      FROM adm_core_item d';
            sql += '      INNER JOIN adm_def_background_variant dc ON (dc."backgroundId" = d.id)';
            sql += '      INNER JOIN (';
            sql += '          SELECT  ';
            sql += '              c.id,       ';
            sql += '              c."itemName" as name';
            sql += '              , json_build_object(';
            sql += '                  \'id\', feature."id", ';
            sql += '                  \'name\', feature."itemName",';
            sql += '                  \'description\', featuredesc.description';
            sql += '              ) AS "feature"';
          	sql += '              , json_build_object(';
            sql += '                  	\'id\', varres."id",';
            sql += '                  	\'name\', varres."itemName"';
            sql += '                  ) AS "resource"';
            sql += '          FROM adm_core_item c';
            sql += '          INNER JOIN adm_def_background_variant bgcht ON bgcht."variantBackgroundId" = c.id';
            sql += '          INNER JOIN adm_core_item feature ON (feature."id" = bgcht."featureId") ';
            sql += '          INNER JOIN adm_core_description featuredesc ON featuredesc."itemId" = bgcht."featureId"';
            sql += '          INNER JOIN adm_core_item varres ON varres.id = c."resourceId"';
            sql += '          GROUP BY c.id, feature."id", feature."itemName", featuredesc.description, varres."id"';
            sql += '      ) variant_row ON (variant_row.id = dc."variantBackgroundId")';
            sql += '      GROUP BY dc."backgroundId"';
            sql += '  ) r(variants, id) WHERE id = i.id) AS variants';
            sql += '  , (SELECT r.proficiencies';
            sql += '  	FROM (';
            sql += '  		SELECT ';
            sql += '  			json_agg(proficiency_row) AS proficiencies,';
            sql += '  			d.id';
            sql += '  		FROM adm_core_item d';
            sql += '  		INNER JOIN adm_link_proficiency_group dc ON (dc."referenceId" = d.id)';
            sql += '  		INNER JOIN (';
            sql += '  			SELECT  ';
            sql += '  				c.id,       ';
            sql += '  				c."itemName" AS name,';
            sql += '                 json_build_object(';
            sql += '                                 \'id\', CASE WHEN profcat.id IS NULL THEN catcat.id ELSE profcat.id END,';
            sql += '                                 \'name\', CASE WHEN profcat."itemName" IS NULL THEN catcat."itemName" ELSE profcat."itemName" END,';
            sql += '                                \'parentId\', CASE WHEN profcat."itemName" IS NULL THEN catcatdef."parentId" ELSE profcatdef."parentId" END,';
            sql += '                     			\'isTool\', CASE WHEN profcat."itemName" IS NULL THEN';
            sql += '                     				CASE WHEN catcatdef."parentId"::int <> 0 THEN true ELSE false END';
            sql += '                     			ELSE';
            sql += '                     				CASE WHEN profcatdef."parentId"::int <> 0 THEN true ELSE false END';
            sql += '                     			END';
            sql += '                             ) AS category,';
            sql += '  				pgrp."selectCount",';
            sql += '  				json_agg(json_build_object(';
            sql += '  		                \'id\', prof."id", ';
            sql += '  		                \'name\', prof."itemName"';
            sql += '  		            )) AS proficiencies';
            sql += '  		            , json_build_object(';
            sql += '  		                \'id\', mech."id", ';
            sql += '  		                \'name\', mech."itemName"';
            sql += '  		            ) AS "mechanic"';
            sql += '  			FROM adm_core_item c';
            sql += '  			INNER JOIN adm_link_proficiency_group bgcht ON bgcht."proficiencyGroupId" = c.id';
            sql += '  			INNER JOIN adm_def_proficiency_group pgrp ON pgrp."proficiencyGroupId" = bgcht."proficiencyGroupId"';
            sql += '  			INNER JOIN adm_core_item mech ON mech.id = pgrp."mechanicTypeId"';
            sql += '  			INNER JOIN adm_link_proficiency_group_assignment cm ON (cm."proficiencyGroupId" = c.id)';
            sql += '  			INNER JOIN adm_core_item prof ON (prof.id = cm."proficiencyId")';
            sql += '  			LEFT OUTER JOIN adm_def_proficiency profdef ON profdef."proficiencyId" = prof.id AND mech.id IN (556, 554)';
            sql += '  			LEFT OUTER JOIN adm_core_item profcat ON profcat.id = profdef."categoryId"';
            sql += '             LEFT OUTER JOIN adm_def_proficiency_category profcatdef ON profcatdef."proficiencyCategoryId" = profcat.id';
            sql += '             LEFT OUTER JOIN adm_core_item catcat ON catcat.id = cm."proficiencyId" AND mech."id" = 555';
            sql += '             LEFT OUTER JOIN adm_def_proficiency_category catcatdef ON catcatdef."proficiencyCategoryId" = catcat.id';
            sql += '  			GROUP BY c.id, mech.id, pgrp."selectCount", profcat.id, profcat."itemName", catcat.id, catcat."itemName", profcatdef."parentId", catcatdef."parentId"';
            sql += '  	) proficiency_row ON (proficiency_row.id = dc."proficiencyGroupId")';
            sql += '  	GROUP BY d.id';
            sql += '  ) r(proficiencies, id) WHERE id = i.id) AS "proficiencyGroups"';
            sql += '  FROM adm_core_item i';
            sql += '  INNER JOIN adm_def_background bg ON bg."backgroundId" = i.id';
            sql += '  INNER JOIN adm_core_item feature ON feature.id = bg."featureId"';
            sql += '  INNER JOIN adm_core_description featuredesc ON featuredesc."itemId" = bg."featureId"';
            sql += '   LEFT OUTER JOIN adm_link_equipment bglnkeq ON bglnkeq."referenceId" = i.id';
            sql += '   LEFT OUTER JOIN adm_core_item eqi ON eqi.id = bglnkeq."equipmentId"';
            sql += '   LEFT OUTER JOIN adm_def_equipment eq ON eq."equipmentId" = eqi.id';
            sql += '   LEFT OUTER JOIN adm_def_equipment_count_unit cntunit ON cntunit."equipmentId" = eqi.id';
            sql += '   LEFT OUTER JOIN adm_core_description description ON description."itemId" = i.id';
            sql += '  INNER JOIN adm_core_item rsrc ON rsrc.id = i."resourceId"';
            sql += '   GROUP BY i."itemName", i.id';
            sql += ' , rsrc.id, rsrc."itemName"';
            sql += ' , bg."startingGold"';
            sql += ' , feature."itemName", feature."id", featuredesc.description';
            sql += ' , description.description';
            sql += '  ORDER BY i."itemName"';
            var query = client.query(new pg.Query(sql));
            query.on('row', function(row) {
                results.push(row);
            });
            query.on('end', function() {
                done();
                for (var t = 0; t < results.length; t++) {
                    results[t].charts = results[t].charts.sort(function (a, b) {
                        return a.orderIndex - b.orderIndex;
                    })
                    for (var x = 0; x < results[t].charts.length; x++) {
                        results[t].charts[x].entries = results[t].charts[x].entries.sort(function (a, b) {
                            return a.minimum - b.minimum;
                        });
                    }
                }
                return res.json(results);
            });
        });
    });
};
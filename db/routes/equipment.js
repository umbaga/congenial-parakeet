module.exports = function(app, pg, async, pool) {
    app.get('/api/adm/equipment/weapons', function(req, res) {
        var results = [];
        pool.connect(function(err, client, done) {
            if(err) {
                done();
                console.log(err);
                return res.status(500).json({ success: false, data: err});
            }
            sql = 'SELECT i.id, i."itemName" as name, round(eq.cost, 3) AS cost, round(eq.weight, 3) AS weight, special."specialDescription"';
            //sql += ', eq."weightDouble"';
            sql += ', json_build_object(\'dieCount\', dice."dieCount", \'dieType\', dice."dieType") AS "damage"';
            sql += ', json_build_object(\'name\', dmgtype."itemName", \'id\', dmgtype."id") AS "damageType"';
            sql += ', json_build_object(\'name\', wpnprof."itemName", \'id\', wpnprof."id") AS "weaponProficiency"';
            sql += ', json_build_object(\'name\', wpncat."itemName", \'id\', wpncat."id") AS "weaponCategory"';
            sql += ', case ';
            sql += '	when count(wpnprop) = 0 ';
            sql += '    	then \'[]\' ';
            sql += '    else ';
            sql += '    	json_agg((';
            sql += '            SELECT x FROM (';
            sql += '                SELECT propitem.id, propitem."itemName" as "name", ';
            sql += '                	wpnprop."requireRange", wpnprop."requireDamage", wpnprop."requireDescription"';
            sql += '            ) x)) ';
            sql += '	end AS "weaponProperties"';
            sql += '                	, case ';
            sql += '                		when count(altDice) = 0 ';
            sql += '                			then \'{}\' ';
            sql += '                		else json_build_object(\'dieCount\', altdice."dieCount", \'dieType\', altdice."dieType") ';
            sql += '                		end AS "versatileDamage"';
            sql += '                	, case ';
            sql += '                		when count(wpnrng) = 0 ';
            sql += '                			then \'{}\' ';
            sql += '                		else json_build_object(\'normal\', wpnrng."normalRange", \'maximum\', wpnrng."maximumRange") ';
            sql += '                		end AS "range"';
            /*sql += '					, case ';
            sql += '                		when count(special) = 0  ';
            sql += '                			then \'{}\' ';
            sql += '                		else json_build_object(\'special\', special."specialDescription") ';
            sql += '                		end AS "specialDescription"';*/
            sql += ' FROM adm_item i';
            sql += ' 	INNER JOIN adm_def_equipment eq ';
            sql += ' 		ON eq."equipmentId" = i.id';
            sql += ' 	INNER JOIN adm_def_equipment_weapon wpn ';
            sql += ' 		ON wpn."equipmentId" = i.id';
            sql += ' 	INNER JOIN adm_item dmgtype ';
            sql += ' 		ON dmgtype.id = wpn."damageTypeId"';
            sql += ' 	INNER JOIN adm_item wpnprof ';
            sql += ' 		ON wpnprof.id = wpn."weaponProficiencyId"';
            sql += ' 	INNER JOIN adm_item wpncat ';
            sql += ' 		ON wpncat.id = wpn."weaponCategoryId"';
            sql += ' 	INNER JOIN adm_core_dice dice ';
            sql += ' 		ON dice.id = wpn."damageDiceId"';
            sql += ' 	LEFT OUTER JOIN adm_link_weapon_property lnk ';
            sql += ' 		ON lnk."weaponId" = wpn."equipmentId"';
            sql += ' 	LEFT OUTER JOIN adm_def_weapon_property wpnprop ';
            sql += ' 		ON wpnprop."weaponPropertyId" = lnk."propertyId"';
            sql += ' 	LEFT OUTER JOIN adm_item propitem ';
            sql += ' 		ON propitem.id = wpnprop."weaponPropertyId"';
            sql += ' 	LEFT OUTER JOIN adm_def_equipment_weapon_alt_damage altdmg ';
            sql += ' 		ON altdmg."weaponId" = i."id"';
            sql += ' 	LEFT OUTER JOIN adm_core_dice altdice ';
            sql += ' 		ON altdice.id = altdmg."damageDiceId"';
            sql += ' 	LEFT OUTER JOIN adm_def_equipment_weapon_range wpnrng ';
            sql += ' 		ON wpnrng."weaponId" = i.id';
            sql += ' 	LEFT OUTER JOIN adm_def_equipment_weapon_special special ';
            sql += ' 		ON special."weaponId" = i.id';
            sql += ' GROUP BY i.id, eq.cost, eq.weight';
            sql += ' , special."specialDescription"';
            sql += ' , dice."dieCount", dice."dieType"';
            sql += ' , dmgtype.id, dmgtype."itemName"';
            sql += ' , wpnprof.id, wpnprof."itemName"';
            sql += ' , wpncat.id, wpncat."itemName"';
            sql += ' , altdice."dieCount", altdice."dieType"';
            sql += ' , wpnrng."normalRange", wpnrng."maximumRange"';
            //sql += ', eq."weightDouble"';
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
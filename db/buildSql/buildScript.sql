--
-- PostgreSQL database dump
--

-- Dumped from database version 9.6.0
-- Dumped by pg_dump version 10.0

-- Started on 2017-12-09 15:44:59

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 1 (class 3079 OID 12387)
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- TOC entry 2556 (class 0 OID 0)
-- Dependencies: 1
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET search_path = public, pg_catalog;

--
-- TOC entry 255 (class 1255 OID 65818)
-- Name: construct_chart_object_arrays(bigint); Type: FUNCTION; Schema: public; Owner: postgres
--

CREATE FUNCTION construct_chart_object_arrays("referenceId" bigint DEFAULT 0) RETURNS json
    LANGUAGE sql
    AS $_$(SELECT r.charts
  FROM (
      SELECT 
          json_agg(chart_row) AS charts,
      	d.id
      FROM adm_core_item d
      INNER JOIN adm_link_chart dc ON (dc."referenceId" = d.id)
      INNER JOIN (
          SELECT  
                c.id,
                c.title,
                cd.description,
                spellchart."orderIndex",
                CASE WHEN cm."chartId" IS NULL THEN json_agg(dcm) ELSE json_agg(cm) END AS entries,
                (SELECT json_agg(cc) 
                    FROM adm_def_chart_column cc 
                    WHERE cc."chartId" = c.id) AS "columns",
                (SELECT json_agg(cr) 
                    FROM adm_def_chart_row cr 
                    WHERE cr."chartId" = c.id) AS "rows"
                , CASE WHEN dice."dieCount" IS NOT NULL THEN json_build_object(
                    'dieCount', dice."dieCount", 
                    'dieType', dice."dieType",
                    'rendered', CASE WHEN dice."dieType" = 1 
                    THEN dice."dieCount"::text
                    ELSE dice."dieCount"::text || 'd' || dice."dieType"::text
                    END
                ) ELSE '{}' END AS "dice",
          json_build_object('id', typ.id, 'name', typ."typeName") AS "type"
          FROM adm_core_chart c
          LEFT OUTER JOIN adm_link_chart spellchart ON spellchart."chartId" = c.id
          LEFT OUTER JOIN adm_def_chart_entry cm ON (cm."chartId" = c.id) 
          LEFT OUTER JOIN adm_core_description cd ON cd."itemId" = c.id
          LEFT OUTER JOIN adm_def_chart_dice_entry dcm ON (dcm."chartId" = c.id) 
            LEFT OUTER JOIN adm_def_chart_dice chdice ON chdice."chartId" = c.id
            LEFT OUTER JOIN adm_core_dice dice ON dice.id = chdice."diceId"
          INNER JOIN adm_core_type typ ON typ.id = c."typeId"
          GROUP BY c.id, spellchart."orderIndex", cd.description, cm."chartId", dice."dieCount", dice."dieType", typ.id, typ."typeName"
          ORDER BY spellchart."orderIndex"
      ) chart_row ON (chart_row.id = dc."chartId")
      GROUP BY d.id
  ) r(charts, id) WHERE id = $1)$_$;


ALTER FUNCTION public.construct_chart_object_arrays("referenceId" bigint) OWNER TO postgres;

--
-- TOC entry 260 (class 1255 OID 106824)
-- Name: get_array_with_int_value(bigint, bigint, character varying); Type: FUNCTION; Schema: public; Owner: postgres
--

CREATE FUNCTION get_array_with_int_value("itemId" bigint DEFAULT 0, "itemTypeId" bigint DEFAULT 0, "propertyName" character varying DEFAULT ''::character varying) RETURNS json
    LANGUAGE sql
    AS $_$SELECT case  when count(mvt) = 0 then '[]' else json_agg(
    (
		SELECT json_build_object('id', mvt."id", 'name', mvt."itemName", $3, lnk."intValue")
    )
) end AS "tags"
 FROM adm_core_item i
 LEFT OUTER JOIN adm_link_array_with_int_value lnk ON lnk."referenceId" = i.id
 LEFT OUTER JOIN adm_core_item mvt ON mvt.id = lnk."movementTypeId"
 WHERE i.id = $1 AND mvt."itemTypeId" = $2
 GROUP BY i.id, i."itemName"
$_$;


ALTER FUNCTION public.get_array_with_int_value("itemId" bigint, "itemTypeId" bigint, "propertyName" character varying) OWNER TO postgres;

--
-- TOC entry 242 (class 1255 OID 90402)
-- Name: get_damage(bigint); Type: FUNCTION; Schema: public; Owner: postgres
--

CREATE FUNCTION get_damage("damageId" bigint DEFAULT 0) RETURNS json
    LANGUAGE sql
    AS $$
SELECT json_build_object('id', "diceId")
FROM adm_def_damage
$$;


ALTER FUNCTION public.get_damage("damageId" bigint) OWNER TO postgres;

--
-- TOC entry 256 (class 1255 OID 33078)
-- Name: get_dice(bigint); Type: FUNCTION; Schema: public; Owner: postgres
--

CREATE FUNCTION get_dice(dice_id bigint DEFAULT 0) RETURNS json
    LANGUAGE sql
    AS $_$SELECT json_build_object(
  'id', dice.id,
  'dieCount', dice."dieCount",
  'dieType', dice."dieType",
  'modifier', dice.modifier,
  'multiplier', dice.multiplier,
  'divisor', dice.divisor,
  'rendered', 
    CASE WHEN dice."dieType" = 0 THEN
    	dice."dieType"::text
    WHEN dice."dieType" = 1 THEN
    	dice."dieCount"::text
    ELSE
        CASE WHEN dice.multiplier = 1 AND dice.modifier = 0 AND dice.divisor = 1 THEN
            concat_ws('d', dice."dieCount"::text, dice."dieType"::text)
        WHEN dice.multiplier != 1 AND dice.modifier = 0 AND dice.divisor = 1 THEN
            concat_ws('x', concat_ws('d', dice."dieCount"::text, dice."dieType"::text), dice.multiplier::text)
        WHEN dice.multiplier = 1 AND dice.modifier = 0 AND dice.divisor != 1 THEN
            concat_ws('/', concat_ws('d', dice."dieCount"::text, dice."dieType"::text), dice.multiplier::text)
        WHEN dice.multiplier = 1 AND dice.modifier > 0 AND dice.divisor = 1 THEN
            concat_ws('+', concat_ws('d', dice."dieCount"::text, dice."dieType"::text), dice.multiplier::text)
        WHEN dice.multiplier = 1 AND dice.modifier < 0 AND dice.divisor = 1 THEN
            concat_ws('-', concat_ws('d', dice."dieCount"::text, dice."dieType"::text), dice.multiplier::text)
        ELSE
            null
        END
    END
)
FROM adm_core_dice dice
WHERE dice.id = $1
$_$;


ALTER FUNCTION public.get_dice(dice_id bigint) OWNER TO postgres;

--
-- TOC entry 257 (class 1255 OID 98641)
-- Name: get_item(bigint); Type: FUNCTION; Schema: public; Owner: postgres
--

CREATE FUNCTION get_item("itemId" bigint DEFAULT 0) RETURNS json
    LANGUAGE sql
    AS $_$
SELECT json_build_object('id', i.id, 'name', i."itemName")
FROM adm_core_item i
WHERE i.id = $1
$_$;


ALTER FUNCTION public.get_item("itemId" bigint) OWNER TO postgres;

--
-- TOC entry 258 (class 1255 OID 98647)
-- Name: get_monster_tags(bigint); Type: FUNCTION; Schema: public; Owner: postgres
--

CREATE FUNCTION get_monster_tags("referenceId" bigint DEFAULT 0) RETURNS json
    LANGUAGE sql
    AS $_$SELECT case  when count(tag) = 0 then '[]' else json_agg(
    (
		SELECT json_build_object('id', tag."id", 'name', tag."itemName")
    )
) end AS "tags"
 FROM adm_core_item i
 LEFT OUTER JOIN adm_link_monster_tag lnk ON lnk."referenceId" = i.id
 LEFT OUTER JOIN adm_core_item tag ON tag.id = lnk."monsterTagId"
 WHERE i.id = $1
 GROUP BY i.id, i."itemName"$_$;


ALTER FUNCTION public.get_monster_tags("referenceId" bigint) OWNER TO postgres;

--
-- TOC entry 259 (class 1255 OID 98649)
-- Name: get_movement_types(bigint); Type: FUNCTION; Schema: public; Owner: postgres
--

CREATE FUNCTION get_movement_types("movementTypeId" bigint DEFAULT 0) RETURNS json
    LANGUAGE sql
    AS $_$SELECT case  when count(mvt) = 0 then '[]' else json_agg(
    (
		SELECT json_build_object('id', mvt."id", 'name', mvt."itemName", 'speed', lnk."speed")
    )
) end AS "tags"
 FROM adm_core_item i
 LEFT OUTER JOIN adm_link_movement lnk ON lnk."referenceId" = i.id
 LEFT OUTER JOIN adm_core_item mvt ON mvt.id = lnk."movementTypeId"
 WHERE i.id = $1
 GROUP BY i.id, i."itemName"$_$;


ALTER FUNCTION public.get_movement_types("movementTypeId" bigint) OWNER TO postgres;

--
-- TOC entry 185 (class 1259 OID 16400)
-- Name: adm_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE adm_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE adm_seq OWNER TO postgres;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- TOC entry 209 (class 1259 OID 16561)
-- Name: adm_core_chart; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE adm_core_chart (
    id bigint DEFAULT nextval('adm_seq'::regclass) NOT NULL,
    title character varying NOT NULL,
    "typeId" bigint DEFAULT 806 NOT NULL
);


ALTER TABLE adm_core_chart OWNER TO postgres;

--
-- TOC entry 191 (class 1259 OID 16446)
-- Name: adm_core_description; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE adm_core_description (
    id bigint DEFAULT nextval('adm_seq'::regclass) NOT NULL,
    "itemId" bigint NOT NULL,
    "descriptionTypeId" bigint DEFAULT 171 NOT NULL,
    description text NOT NULL
);


ALTER TABLE adm_core_description OWNER TO postgres;

--
-- TOC entry 188 (class 1259 OID 16422)
-- Name: adm_core_dice; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE adm_core_dice (
    id bigint DEFAULT nextval('adm_seq'::regclass) NOT NULL,
    "dieCount" smallint NOT NULL,
    "dieType" smallint NOT NULL,
    multiplier smallint DEFAULT 1 NOT NULL,
    modifier smallint DEFAULT 0 NOT NULL,
    divisor smallint DEFAULT 1 NOT NULL
);


ALTER TABLE adm_core_dice OWNER TO postgres;

--
-- TOC entry 187 (class 1259 OID 16413)
-- Name: adm_core_item; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE adm_core_item (
    id bigint DEFAULT nextval('adm_seq'::regclass) NOT NULL,
    "itemName" character varying NOT NULL,
    "itemTypeId" bigint NOT NULL,
    "resourceId" bigint DEFAULT 2 NOT NULL
);


ALTER TABLE adm_core_item OWNER TO postgres;

--
-- TOC entry 186 (class 1259 OID 16402)
-- Name: adm_core_type; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE adm_core_type (
    id bigint DEFAULT nextval('adm_seq'::regclass) NOT NULL,
    "typeName" character varying NOT NULL,
    "isPicklist" boolean DEFAULT false NOT NULL,
    "isDescription" boolean DEFAULT false NOT NULL,
    "isChart" boolean DEFAULT false NOT NULL,
    "isTypePicklist" boolean DEFAULT false NOT NULL
);


ALTER TABLE adm_core_type OWNER TO postgres;

--
-- TOC entry 208 (class 1259 OID 16555)
-- Name: adm_def_background; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE adm_def_background (
    "backgroundId" bigint NOT NULL,
    "startingGold" smallint DEFAULT 0 NOT NULL,
    "featureId" bigint NOT NULL
);


ALTER TABLE adm_def_background OWNER TO postgres;

--
-- TOC entry 227 (class 1259 OID 41247)
-- Name: adm_def_chart; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE adm_def_chart (
    "chartId" bigint NOT NULL,
    "columnCount" smallint NOT NULL,
    "rowCount" smallint NOT NULL
);


ALTER TABLE adm_def_chart OWNER TO postgres;

--
-- TOC entry 195 (class 1259 OID 16479)
-- Name: adm_link_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE adm_link_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE adm_link_seq OWNER TO postgres;

--
-- TOC entry 228 (class 1259 OID 49426)
-- Name: adm_def_chart_column; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE adm_def_chart_column (
    id bigint DEFAULT nextval('adm_link_seq'::regclass) NOT NULL,
    "chartId" bigint NOT NULL,
    "columnIndex" smallint NOT NULL,
    title character varying NOT NULL
);


ALTER TABLE adm_def_chart_column OWNER TO postgres;

--
-- TOC entry 226 (class 1259 OID 41234)
-- Name: adm_def_chart_dice; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE adm_def_chart_dice (
    "chartId" bigint NOT NULL,
    "diceId" bigint NOT NULL
);


ALTER TABLE adm_def_chart_dice OWNER TO postgres;

--
-- TOC entry 210 (class 1259 OID 16570)
-- Name: adm_def_chart_dice_entry; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE adm_def_chart_dice_entry (
    id bigint DEFAULT nextval('adm_link_seq'::regclass) NOT NULL,
    "chartId" bigint NOT NULL,
    minimum smallint NOT NULL,
    maximum smallint NOT NULL,
    description character varying NOT NULL
);


ALTER TABLE adm_def_chart_dice_entry OWNER TO postgres;

--
-- TOC entry 230 (class 1259 OID 49444)
-- Name: adm_def_chart_entry; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE adm_def_chart_entry (
    id bigint DEFAULT nextval('adm_link_seq'::regclass) NOT NULL,
    "chartId" bigint NOT NULL,
    "columnIndex" smallint NOT NULL,
    "rowIndex" smallint NOT NULL,
    description character varying NOT NULL
);


ALTER TABLE adm_def_chart_entry OWNER TO postgres;

--
-- TOC entry 229 (class 1259 OID 49435)
-- Name: adm_def_chart_row; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE adm_def_chart_row (
    id bigint DEFAULT nextval('adm_link_seq'::regclass) NOT NULL,
    "chartId" bigint NOT NULL,
    "rowIndex" smallint NOT NULL,
    title character varying NOT NULL
);


ALTER TABLE adm_def_chart_row OWNER TO postgres;

--
-- TOC entry 233 (class 1259 OID 90429)
-- Name: adm_def_damage; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE adm_def_damage (
    id bigint DEFAULT nextval('adm_link_seq'::regclass) NOT NULL,
    "referenceId" bigint NOT NULL,
    "diceId" bigint NOT NULL,
    "damageTypeId" bigint NOT NULL,
    "abilityScoreModifierId" bigint DEFAULT 0 NOT NULL
);


ALTER TABLE adm_def_damage OWNER TO postgres;

--
-- TOC entry 217 (class 1259 OID 16629)
-- Name: adm_def_damage_type; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE adm_def_damage_type (
    "damageTypeId" bigint NOT NULL,
    "isWeapon" boolean DEFAULT false NOT NULL
);


ALTER TABLE adm_def_damage_type OWNER TO postgres;

--
-- TOC entry 192 (class 1259 OID 16455)
-- Name: adm_def_equipment; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE adm_def_equipment (
    "equipmentId" bigint NOT NULL,
    "categoryId" bigint NOT NULL,
    cost numeric DEFAULT 0 NOT NULL,
    weight numeric DEFAULT 0 NOT NULL
);


ALTER TABLE adm_def_equipment OWNER TO postgres;

--
-- TOC entry 194 (class 1259 OID 16474)
-- Name: adm_def_equipment_ammunition; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE adm_def_equipment_ammunition (
    "equipmentId" bigint NOT NULL,
    "ammunitionTypeId" bigint NOT NULL
);


ALTER TABLE adm_def_equipment_ammunition OWNER TO postgres;

--
-- TOC entry 198 (class 1259 OID 16493)
-- Name: adm_def_equipment_armor; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE adm_def_equipment_armor (
    "equipmentId" bigint NOT NULL,
    "proficiencyId" bigint NOT NULL,
    "baseArmorClass" smallint NOT NULL,
    "applyDexModifier" boolean DEFAULT false NOT NULL,
    "hasMaxDexModifier" boolean DEFAULT false NOT NULL,
    "maxDexModifier" smallint DEFAULT 2 NOT NULL,
    "minimumStrength" smallint DEFAULT 0 NOT NULL,
    "stealthDisadvantage" boolean DEFAULT false NOT NULL,
    "isCumulative" boolean DEFAULT false NOT NULL
);


ALTER TABLE adm_def_equipment_armor OWNER TO postgres;

--
-- TOC entry 193 (class 1259 OID 16465)
-- Name: adm_def_equipment_count_unit; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE adm_def_equipment_count_unit (
    "equipmentId" bigint NOT NULL,
    "itemCount" smallint DEFAULT 1 NOT NULL,
    "unitName" character varying
);


ALTER TABLE adm_def_equipment_count_unit OWNER TO postgres;

--
-- TOC entry 218 (class 1259 OID 16636)
-- Name: adm_def_equipment_improvised_weapon; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE adm_def_equipment_improvised_weapon (
    "equipmentId" bigint NOT NULL,
    "damageDiceId" bigint NOT NULL,
    "damageTypeId" bigint NOT NULL,
    range smallint DEFAULT 0 NOT NULL
);


ALTER TABLE adm_def_equipment_improvised_weapon OWNER TO postgres;

--
-- TOC entry 199 (class 1259 OID 16504)
-- Name: adm_def_equipment_weapon; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE adm_def_equipment_weapon (
    "equipmentId" bigint NOT NULL,
    "_damageDiceId" bigint,
    "_damageTypeId" bigint,
    "proficiencyId" bigint NOT NULL,
    "categoryId" bigint NOT NULL
);


ALTER TABLE adm_def_equipment_weapon OWNER TO postgres;

--
-- TOC entry 203 (class 1259 OID 16528)
-- Name: adm_def_equipment_weapon_alt_damage; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE adm_def_equipment_weapon_alt_damage (
    "equipmentId" bigint NOT NULL,
    "damageDiceId" bigint NOT NULL
);


ALTER TABLE adm_def_equipment_weapon_alt_damage OWNER TO postgres;

--
-- TOC entry 204 (class 1259 OID 16533)
-- Name: adm_def_equipment_weapon_ammunition; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE adm_def_equipment_weapon_ammunition (
    "equipmentId" bigint NOT NULL,
    "ammunitionTypeId" bigint NOT NULL
);


ALTER TABLE adm_def_equipment_weapon_ammunition OWNER TO postgres;

--
-- TOC entry 201 (class 1259 OID 16515)
-- Name: adm_def_equipment_weapon_range; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE adm_def_equipment_weapon_range (
    "equipmentId" bigint NOT NULL,
    "normalRange" smallint NOT NULL,
    "maximumRange" smallint NOT NULL
);


ALTER TABLE adm_def_equipment_weapon_range OWNER TO postgres;

--
-- TOC entry 202 (class 1259 OID 16520)
-- Name: adm_def_equipment_weapon_special; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE adm_def_equipment_weapon_special (
    "equipmentId" bigint NOT NULL,
    "specialDescription" text NOT NULL
);


ALTER TABLE adm_def_equipment_weapon_special OWNER TO postgres;

--
-- TOC entry 215 (class 1259 OID 16602)
-- Name: adm_def_item_group; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE adm_def_item_group (
    "itemGroupId" bigint NOT NULL,
    "mechanicTypeId" bigint NOT NULL,
    "selectCount" smallint DEFAULT 1 NOT NULL
);


ALTER TABLE adm_def_item_group OWNER TO postgres;

--
-- TOC entry 236 (class 1259 OID 98618)
-- Name: adm_def_picklist_item; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE adm_def_picklist_item (
    "picklistItemId" bigint NOT NULL,
    "orderIndex" smallint NOT NULL
);


ALTER TABLE adm_def_picklist_item OWNER TO postgres;

--
-- TOC entry 197 (class 1259 OID 16488)
-- Name: adm_def_proficiency; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE adm_def_proficiency (
    "proficiencyId" bigint NOT NULL,
    "categoryId" bigint NOT NULL
);


ALTER TABLE adm_def_proficiency OWNER TO postgres;

--
-- TOC entry 207 (class 1259 OID 16550)
-- Name: adm_def_proficiency_ability_score; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE adm_def_proficiency_ability_score (
    "proficiencyId" bigint NOT NULL,
    "abilityScoreId" bigint NOT NULL
);


ALTER TABLE adm_def_proficiency_ability_score OWNER TO postgres;

--
-- TOC entry 190 (class 1259 OID 16437)
-- Name: adm_def_proficiency_category; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE adm_def_proficiency_category (
    "proficiencyCategoryId" bigint NOT NULL,
    "parentId" bigint DEFAULT 0 NOT NULL,
    "isEquipmentBased" boolean DEFAULT false NOT NULL,
    "requireAbilityScore" boolean DEFAULT false NOT NULL,
    "requireLanguageInfo" boolean DEFAULT false NOT NULL
);


ALTER TABLE adm_def_proficiency_category OWNER TO postgres;

--
-- TOC entry 206 (class 1259 OID 16545)
-- Name: adm_def_proficiency_language; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE adm_def_proficiency_language (
    "proficiencyId" bigint NOT NULL,
    "scriptId" bigint NOT NULL,
    "rarityId" bigint NOT NULL
);


ALTER TABLE adm_def_proficiency_language OWNER TO postgres;

--
-- TOC entry 237 (class 1259 OID 98623)
-- Name: adm_def_race; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE adm_def_race (
    "raceId" bigint NOT NULL,
    "parentId" bigint DEFAULT 0 NOT NULL,
    "sizeId" bigint NOT NULL,
    "monsterTypeId" bigint NOT NULL
);


ALTER TABLE adm_def_race OWNER TO postgres;

--
-- TOC entry 240 (class 1259 OID 98652)
-- Name: adm_def_race_ability_score; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE adm_def_race_ability_score (
    "raceId" bigint NOT NULL,
    strength smallint DEFAULT 0 NOT NULL,
    dexterity smallint DEFAULT 0 NOT NULL,
    constitution smallint DEFAULT 0 NOT NULL,
    intelligence smallint DEFAULT 0 NOT NULL,
    wisdom smallint DEFAULT 0 NOT NULL,
    charisma smallint DEFAULT 0 NOT NULL,
    "selectCount" smallint DEFAULT 0 NOT NULL,
    "selectModifier" smallint DEFAULT 0 NOT NULL
);


ALTER TABLE adm_def_race_ability_score OWNER TO postgres;

--
-- TOC entry 212 (class 1259 OID 16585)
-- Name: adm_def_spell; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE adm_def_spell (
    "spellId" bigint NOT NULL,
    level smallint NOT NULL,
    "schoolId" bigint NOT NULL,
    "durationId" bigint NOT NULL,
    "rangeId" bigint NOT NULL,
    "castingTimeId" bigint NOT NULL,
    "isRitual" boolean DEFAULT false NOT NULL
);


ALTER TABLE adm_def_spell OWNER TO postgres;

--
-- TOC entry 219 (class 1259 OID 16643)
-- Name: adm_def_spell_component; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE adm_def_spell_component (
    "spellComponentId" bigint NOT NULL,
    "requireDescription" boolean DEFAULT false NOT NULL
);


ALTER TABLE adm_def_spell_component OWNER TO postgres;

--
-- TOC entry 222 (class 1259 OID 24856)
-- Name: adm_def_spell_damage; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE adm_def_spell_damage (
    "spellId" bigint NOT NULL,
    "improvementDiceId" bigint DEFAULT 0 NOT NULL,
    "attackRollTypeId" bigint DEFAULT 0 NOT NULL,
    "conditionId" bigint DEFAULT 0 NOT NULL,
    "maximumDamageDiceId" bigint DEFAULT 0 NOT NULL,
    "improvementLevelCount" smallint DEFAULT 1 NOT NULL,
    "projectileCount" smallint DEFAULT 0 NOT NULL,
    "improvementProjectileCount" smallint DEFAULT 0 NOT NULL
);


ALTER TABLE adm_def_spell_damage OWNER TO postgres;

--
-- TOC entry 223 (class 1259 OID 24867)
-- Name: adm_def_spell_saving_throw; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE adm_def_spell_saving_throw (
    "spellId" bigint NOT NULL,
    "abilityScoreId" bigint NOT NULL,
    "effectId" bigint DEFAULT 0
);


ALTER TABLE adm_def_spell_saving_throw OWNER TO postgres;

--
-- TOC entry 231 (class 1259 OID 57618)
-- Name: adm_def_supplemental_description; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE adm_def_supplemental_description (
    "descriptionId" bigint NOT NULL,
    title character varying NOT NULL,
    "orderIndex" smallint NOT NULL
);


ALTER TABLE adm_def_supplemental_description OWNER TO postgres;

--
-- TOC entry 189 (class 1259 OID 16428)
-- Name: adm_def_weapon_property; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE adm_def_weapon_property (
    "weaponPropertyId" bigint NOT NULL,
    "requireAmmunition" boolean DEFAULT false NOT NULL,
    "requireDamage" boolean DEFAULT false NOT NULL,
    "requireDescription" boolean DEFAULT false NOT NULL,
    "requireRange" boolean DEFAULT false NOT NULL
);


ALTER TABLE adm_def_weapon_property OWNER TO postgres;

--
-- TOC entry 241 (class 1259 OID 98663)
-- Name: adm_link_ability_score_select; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE adm_link_ability_score_select (
    id bigint DEFAULT nextval('adm_link_seq'::regclass) NOT NULL,
    "referenceId" bigint NOT NULL,
    "selectCount" smallint DEFAULT 1 NOT NULL,
    "selectValue" smallint DEFAULT 1 NOT NULL
);


ALTER TABLE adm_link_ability_score_select OWNER TO postgres;

--
-- TOC entry 239 (class 1259 OID 98635)
-- Name: adm_link_array_with_int_value; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE adm_link_array_with_int_value (
    id bigint DEFAULT nextval('adm_link_seq'::regclass) NOT NULL,
    "referenceId" bigint NOT NULL,
    "movementTypeId" bigint NOT NULL,
    "intValue" smallint NOT NULL
);


ALTER TABLE adm_link_array_with_int_value OWNER TO postgres;

--
-- TOC entry 211 (class 1259 OID 16579)
-- Name: adm_link_chart; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE adm_link_chart (
    id bigint DEFAULT nextval('adm_seq'::regclass) NOT NULL,
    "referenceId" bigint NOT NULL,
    "chartId" bigint NOT NULL,
    "orderIndex" smallint NOT NULL
);


ALTER TABLE adm_link_chart OWNER TO postgres;

--
-- TOC entry 205 (class 1259 OID 16538)
-- Name: adm_link_equipment; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE adm_link_equipment (
    id bigint DEFAULT nextval('adm_link_seq'::regclass) NOT NULL,
    "referenceId" bigint NOT NULL,
    "equipmentId" bigint NOT NULL,
    "assignedCount" smallint DEFAULT 1 NOT NULL
);


ALTER TABLE adm_link_equipment OWNER TO postgres;

--
-- TOC entry 213 (class 1259 OID 16590)
-- Name: adm_link_item_group; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE adm_link_item_group (
    id bigint DEFAULT nextval('adm_link_seq'::regclass) NOT NULL,
    "referenceId" bigint NOT NULL,
    "itemGroupId" bigint NOT NULL
);


ALTER TABLE adm_link_item_group OWNER TO postgres;

--
-- TOC entry 214 (class 1259 OID 16596)
-- Name: adm_link_item_group_assignment; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE adm_link_item_group_assignment (
    id bigint DEFAULT nextval('adm_link_seq'::regclass) NOT NULL,
    "itemGroupId" bigint NOT NULL,
    "itemId" bigint NOT NULL
);


ALTER TABLE adm_link_item_group_assignment OWNER TO postgres;

--
-- TOC entry 225 (class 1259 OID 33072)
-- Name: adm_link_mechanic; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE adm_link_mechanic (
    id bigint DEFAULT nextval('adm_link_seq'::regclass) NOT NULL,
    "referenceId" bigint NOT NULL,
    "targetId" bigint NOT NULL,
    "typeId" bigint NOT NULL,
    value smallint NOT NULL,
    "diceId" bigint DEFAULT 0 NOT NULL,
    "valueObjectId" bigint DEFAULT 0 NOT NULL
);


ALTER TABLE adm_link_mechanic OWNER TO postgres;

--
-- TOC entry 238 (class 1259 OID 98629)
-- Name: adm_link_monster_tag; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE adm_link_monster_tag (
    id bigint DEFAULT nextval('adm_link_seq'::regclass) NOT NULL,
    "referenceId" bigint NOT NULL,
    "monsterTagId" bigint NOT NULL
);


ALTER TABLE adm_link_monster_tag OWNER TO postgres;

--
-- TOC entry 216 (class 1259 OID 16617)
-- Name: adm_link_spell_component; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE adm_link_spell_component (
    id bigint DEFAULT nextval('adm_link_seq'::regclass) NOT NULL,
    "referenceId" bigint NOT NULL,
    "componentId" bigint NOT NULL,
    description character varying
);


ALTER TABLE adm_link_spell_component OWNER TO postgres;

--
-- TOC entry 235 (class 1259 OID 98612)
-- Name: adm_link_spell_list; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE adm_link_spell_list (
    id bigint DEFAULT nextval('adm_link_seq'::regclass) NOT NULL,
    "spellListId" bigint NOT NULL,
    "spellId" bigint NOT NULL
);


ALTER TABLE adm_link_spell_list OWNER TO postgres;

--
-- TOC entry 234 (class 1259 OID 90435)
-- Name: adm_link_supplemental_damage; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE adm_link_supplemental_damage (
    id bigint DEFAULT nextval('adm_link_seq'::regclass) NOT NULL,
    "referenceId" bigint NOT NULL,
    "diceId" bigint NOT NULL,
    "damageTypeId" bigint NOT NULL,
    "abilityScoreModifierId" bigint DEFAULT 0 NOT NULL
);


ALTER TABLE adm_link_supplemental_damage OWNER TO postgres;

--
-- TOC entry 232 (class 1259 OID 74023)
-- Name: adm_link_type_picklist; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE adm_link_type_picklist (
    id bigint DEFAULT nextval('adm_link_seq'::regclass) NOT NULL,
    "picklistId" bigint NOT NULL,
    "typeId" bigint NOT NULL
);


ALTER TABLE adm_link_type_picklist OWNER TO postgres;

--
-- TOC entry 200 (class 1259 OID 16509)
-- Name: adm_link_weapon_property; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE adm_link_weapon_property (
    id bigint DEFAULT nextval('adm_link_seq'::regclass) NOT NULL,
    "referenceId" bigint NOT NULL,
    "propertyId" bigint NOT NULL
);


ALTER TABLE adm_link_weapon_property OWNER TO postgres;

--
-- TOC entry 196 (class 1259 OID 16482)
-- Name: adm_map_proficiency_equipment_category; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE adm_map_proficiency_equipment_category (
    id bigint DEFAULT nextval('adm_link_seq'::regclass) NOT NULL,
    "proficiencyCategoryId" bigint NOT NULL,
    "equipmentCategoryId" bigint NOT NULL
);


ALTER TABLE adm_map_proficiency_equipment_category OWNER TO postgres;

--
-- TOC entry 221 (class 1259 OID 16665)
-- Name: adm_map_spellcasting_focus_equipment_category; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE adm_map_spellcasting_focus_equipment_category (
    id bigint DEFAULT nextval('adm_link_seq'::regclass) NOT NULL,
    "spellcastingFocusId" bigint NOT NULL,
    "equipmentCategoryId" bigint NOT NULL
);


ALTER TABLE adm_map_spellcasting_focus_equipment_category OWNER TO postgres;

--
-- TOC entry 224 (class 1259 OID 33067)
-- Name: x_adm_def_damage; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE x_adm_def_damage (
    "referenceId" bigint NOT NULL,
    "diceId" bigint NOT NULL,
    "damageTypeId" bigint NOT NULL
);


ALTER TABLE x_adm_def_damage OWNER TO postgres;

--
-- TOC entry 220 (class 1259 OID 16656)
-- Name: x_adm_link_spell_component; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE x_adm_link_spell_component (
    id bigint DEFAULT nextval('adm_link_seq'::regclass) NOT NULL,
    "referenceId" bigint NOT NULL,
    "componentId" bigint NOT NULL,
    description character varying
);


ALTER TABLE x_adm_link_spell_component OWNER TO postgres;

--
-- TOC entry 2368 (class 2606 OID 16569)
-- Name: adm_core_chart adm_core_chart_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY adm_core_chart
    ADD CONSTRAINT adm_core_chart_pkey PRIMARY KEY (id);


--
-- TOC entry 2334 (class 2606 OID 16454)
-- Name: adm_core_description adm_core_description_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY adm_core_description
    ADD CONSTRAINT adm_core_description_pkey PRIMARY KEY (id);


--
-- TOC entry 2328 (class 2606 OID 16427)
-- Name: adm_core_dice adm_core_dice_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY adm_core_dice
    ADD CONSTRAINT adm_core_dice_pkey PRIMARY KEY (id);


--
-- TOC entry 2326 (class 2606 OID 16421)
-- Name: adm_core_item adm_core_item_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY adm_core_item
    ADD CONSTRAINT adm_core_item_pkey PRIMARY KEY (id);


--
-- TOC entry 2324 (class 2606 OID 16412)
-- Name: adm_core_type adm_core_type_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY adm_core_type
    ADD CONSTRAINT adm_core_type_pkey PRIMARY KEY (id);


--
-- TOC entry 2366 (class 2606 OID 16560)
-- Name: adm_def_background adm_def_background_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY adm_def_background
    ADD CONSTRAINT adm_def_background_pkey PRIMARY KEY ("backgroundId");


--
-- TOC entry 2406 (class 2606 OID 49434)
-- Name: adm_def_chart_column adm_def_chart_column_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY adm_def_chart_column
    ADD CONSTRAINT adm_def_chart_column_pkey PRIMARY KEY (id);


--
-- TOC entry 2402 (class 2606 OID 41238)
-- Name: adm_def_chart_dice adm_def_chart_dice_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY adm_def_chart_dice
    ADD CONSTRAINT adm_def_chart_dice_pkey PRIMARY KEY ("chartId");


--
-- TOC entry 2370 (class 2606 OID 16578)
-- Name: adm_def_chart_dice_entry adm_def_chart_entry_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY adm_def_chart_dice_entry
    ADD CONSTRAINT adm_def_chart_entry_pkey PRIMARY KEY (id);


--
-- TOC entry 2410 (class 2606 OID 49452)
-- Name: adm_def_chart_entry adm_def_chart_entry_pkey1; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY adm_def_chart_entry
    ADD CONSTRAINT adm_def_chart_entry_pkey1 PRIMARY KEY (id);


--
-- TOC entry 2404 (class 2606 OID 41251)
-- Name: adm_def_chart adm_def_chart_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY adm_def_chart
    ADD CONSTRAINT adm_def_chart_pkey PRIMARY KEY ("chartId");


--
-- TOC entry 2408 (class 2606 OID 49443)
-- Name: adm_def_chart_row adm_def_chart_row_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY adm_def_chart_row
    ADD CONSTRAINT adm_def_chart_row_pkey PRIMARY KEY (id);


--
-- TOC entry 2398 (class 2606 OID 33071)
-- Name: x_adm_def_damage adm_def_damage_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY x_adm_def_damage
    ADD CONSTRAINT adm_def_damage_pkey PRIMARY KEY ("referenceId");


--
-- TOC entry 2416 (class 2606 OID 90434)
-- Name: adm_def_damage adm_def_damage_pkey1; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY adm_def_damage
    ADD CONSTRAINT adm_def_damage_pkey1 PRIMARY KEY (id);


--
-- TOC entry 2384 (class 2606 OID 16634)
-- Name: adm_def_damage_type adm_def_damage_type_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY adm_def_damage_type
    ADD CONSTRAINT adm_def_damage_type_pkey PRIMARY KEY ("damageTypeId");


--
-- TOC entry 2340 (class 2606 OID 16478)
-- Name: adm_def_equipment_ammunition adm_def_equipment_ammunition_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY adm_def_equipment_ammunition
    ADD CONSTRAINT adm_def_equipment_ammunition_pkey PRIMARY KEY ("equipmentId");


--
-- TOC entry 2346 (class 2606 OID 16503)
-- Name: adm_def_equipment_armor adm_def_equipment_armor_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY adm_def_equipment_armor
    ADD CONSTRAINT adm_def_equipment_armor_pkey PRIMARY KEY ("equipmentId");


--
-- TOC entry 2338 (class 2606 OID 16473)
-- Name: adm_def_equipment_count_unit adm_def_equipment_count_unit_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY adm_def_equipment_count_unit
    ADD CONSTRAINT adm_def_equipment_count_unit_pkey PRIMARY KEY ("equipmentId");


--
-- TOC entry 2386 (class 2606 OID 16641)
-- Name: adm_def_equipment_improvised_weapon adm_def_equipment_improvised_weapon_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY adm_def_equipment_improvised_weapon
    ADD CONSTRAINT adm_def_equipment_improvised_weapon_pkey PRIMARY KEY ("equipmentId");


--
-- TOC entry 2336 (class 2606 OID 16464)
-- Name: adm_def_equipment adm_def_equipment_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY adm_def_equipment
    ADD CONSTRAINT adm_def_equipment_pkey PRIMARY KEY ("equipmentId");


--
-- TOC entry 2356 (class 2606 OID 16532)
-- Name: adm_def_equipment_weapon_alt_damage adm_def_equipment_weapon_alt_damage_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY adm_def_equipment_weapon_alt_damage
    ADD CONSTRAINT adm_def_equipment_weapon_alt_damage_pkey PRIMARY KEY ("equipmentId");


--
-- TOC entry 2358 (class 2606 OID 16537)
-- Name: adm_def_equipment_weapon_ammunition adm_def_equipment_weapon_ammunition_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY adm_def_equipment_weapon_ammunition
    ADD CONSTRAINT adm_def_equipment_weapon_ammunition_pkey PRIMARY KEY ("equipmentId");


--
-- TOC entry 2348 (class 2606 OID 16508)
-- Name: adm_def_equipment_weapon adm_def_equipment_weapon_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY adm_def_equipment_weapon
    ADD CONSTRAINT adm_def_equipment_weapon_pkey PRIMARY KEY ("equipmentId");


--
-- TOC entry 2352 (class 2606 OID 16519)
-- Name: adm_def_equipment_weapon_range adm_def_equipment_weapon_range_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY adm_def_equipment_weapon_range
    ADD CONSTRAINT adm_def_equipment_weapon_range_pkey PRIMARY KEY ("equipmentId");


--
-- TOC entry 2354 (class 2606 OID 16527)
-- Name: adm_def_equipment_weapon_special adm_def_equipment_weapon_special_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY adm_def_equipment_weapon_special
    ADD CONSTRAINT adm_def_equipment_weapon_special_pkey PRIMARY KEY ("equipmentId");


--
-- TOC entry 2380 (class 2606 OID 16607)
-- Name: adm_def_item_group adm_def_item_group_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY adm_def_item_group
    ADD CONSTRAINT adm_def_item_group_pkey PRIMARY KEY ("itemGroupId");


--
-- TOC entry 2422 (class 2606 OID 98622)
-- Name: adm_def_picklist_item adm_def_picklist_item_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY adm_def_picklist_item
    ADD CONSTRAINT adm_def_picklist_item_pkey PRIMARY KEY ("picklistItemId");


--
-- TOC entry 2364 (class 2606 OID 16554)
-- Name: adm_def_proficiency_ability_score adm_def_proficiency_ability_score_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY adm_def_proficiency_ability_score
    ADD CONSTRAINT adm_def_proficiency_ability_score_pkey PRIMARY KEY ("proficiencyId");


--
-- TOC entry 2332 (class 2606 OID 16445)
-- Name: adm_def_proficiency_category adm_def_proficiency_category_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY adm_def_proficiency_category
    ADD CONSTRAINT adm_def_proficiency_category_pkey PRIMARY KEY ("proficiencyCategoryId");


--
-- TOC entry 2362 (class 2606 OID 16549)
-- Name: adm_def_proficiency_language adm_def_proficiency_language_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY adm_def_proficiency_language
    ADD CONSTRAINT adm_def_proficiency_language_pkey PRIMARY KEY ("proficiencyId");


--
-- TOC entry 2344 (class 2606 OID 16492)
-- Name: adm_def_proficiency adm_def_proficiency_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY adm_def_proficiency
    ADD CONSTRAINT adm_def_proficiency_pkey PRIMARY KEY ("proficiencyId");


--
-- TOC entry 2430 (class 2606 OID 98662)
-- Name: adm_def_race_ability_score adm_def_race_ability_score_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY adm_def_race_ability_score
    ADD CONSTRAINT adm_def_race_ability_score_pkey PRIMARY KEY ("raceId");


--
-- TOC entry 2424 (class 2606 OID 98628)
-- Name: adm_def_race adm_def_race_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY adm_def_race
    ADD CONSTRAINT adm_def_race_pkey PRIMARY KEY ("raceId");


--
-- TOC entry 2388 (class 2606 OID 16648)
-- Name: adm_def_spell_component adm_def_spell_component_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY adm_def_spell_component
    ADD CONSTRAINT adm_def_spell_component_pkey PRIMARY KEY ("spellComponentId");


--
-- TOC entry 2394 (class 2606 OID 24860)
-- Name: adm_def_spell_damage adm_def_spell_damage_base_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY adm_def_spell_damage
    ADD CONSTRAINT adm_def_spell_damage_base_pkey PRIMARY KEY ("spellId");


--
-- TOC entry 2374 (class 2606 OID 16589)
-- Name: adm_def_spell adm_def_spell_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY adm_def_spell
    ADD CONSTRAINT adm_def_spell_pkey PRIMARY KEY ("spellId");


--
-- TOC entry 2396 (class 2606 OID 24871)
-- Name: adm_def_spell_saving_throw adm_def_spell_saving_throw_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY adm_def_spell_saving_throw
    ADD CONSTRAINT adm_def_spell_saving_throw_pkey PRIMARY KEY ("spellId");


--
-- TOC entry 2412 (class 2606 OID 57625)
-- Name: adm_def_supplemental_description adm_def_supplemental_description_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY adm_def_supplemental_description
    ADD CONSTRAINT adm_def_supplemental_description_pkey PRIMARY KEY ("descriptionId");


--
-- TOC entry 2330 (class 2606 OID 16436)
-- Name: adm_def_weapon_property adm_def_weapon_property_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY adm_def_weapon_property
    ADD CONSTRAINT adm_def_weapon_property_pkey PRIMARY KEY ("weaponPropertyId");


--
-- TOC entry 2432 (class 2606 OID 98670)
-- Name: adm_link_ability_score_select adm_link_ability_score_select_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY adm_link_ability_score_select
    ADD CONSTRAINT adm_link_ability_score_select_pkey PRIMARY KEY (id);


--
-- TOC entry 2372 (class 2606 OID 16584)
-- Name: adm_link_chart adm_link_chart_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY adm_link_chart
    ADD CONSTRAINT adm_link_chart_pkey PRIMARY KEY (id);


--
-- TOC entry 2360 (class 2606 OID 16544)
-- Name: adm_link_equipment adm_link_equipment_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY adm_link_equipment
    ADD CONSTRAINT adm_link_equipment_pkey PRIMARY KEY (id);


--
-- TOC entry 2378 (class 2606 OID 16601)
-- Name: adm_link_item_group_assignment adm_link_item_group_assignment_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY adm_link_item_group_assignment
    ADD CONSTRAINT adm_link_item_group_assignment_pkey PRIMARY KEY (id);


--
-- TOC entry 2376 (class 2606 OID 16595)
-- Name: adm_link_item_group adm_link_item_group_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY adm_link_item_group
    ADD CONSTRAINT adm_link_item_group_pkey PRIMARY KEY (id);


--
-- TOC entry 2400 (class 2606 OID 33077)
-- Name: adm_link_mechanic adm_link_mechanic_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY adm_link_mechanic
    ADD CONSTRAINT adm_link_mechanic_pkey PRIMARY KEY (id);


--
-- TOC entry 2426 (class 2606 OID 98634)
-- Name: adm_link_monster_tag adm_link_moster_tag_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY adm_link_monster_tag
    ADD CONSTRAINT adm_link_moster_tag_pkey PRIMARY KEY (id);


--
-- TOC entry 2428 (class 2606 OID 98640)
-- Name: adm_link_array_with_int_value adm_link_movement_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY adm_link_array_with_int_value
    ADD CONSTRAINT adm_link_movement_pkey PRIMARY KEY (id);


--
-- TOC entry 2382 (class 2606 OID 16625)
-- Name: adm_link_spell_component adm_link_spell_component_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY adm_link_spell_component
    ADD CONSTRAINT adm_link_spell_component_pkey PRIMARY KEY (id);


--
-- TOC entry 2420 (class 2606 OID 98617)
-- Name: adm_link_spell_list adm_link_spell_list_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY adm_link_spell_list
    ADD CONSTRAINT adm_link_spell_list_pkey PRIMARY KEY (id);


--
-- TOC entry 2418 (class 2606 OID 90441)
-- Name: adm_link_supplemental_damage adm_link_supplemental_damage_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY adm_link_supplemental_damage
    ADD CONSTRAINT adm_link_supplemental_damage_pkey PRIMARY KEY (id);


--
-- TOC entry 2414 (class 2606 OID 74028)
-- Name: adm_link_type_picklist adm_link_type_picklist_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY adm_link_type_picklist
    ADD CONSTRAINT adm_link_type_picklist_pkey PRIMARY KEY (id);


--
-- TOC entry 2350 (class 2606 OID 16514)
-- Name: adm_link_weapon_property adm_link_weapon_property_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY adm_link_weapon_property
    ADD CONSTRAINT adm_link_weapon_property_pkey PRIMARY KEY (id);


--
-- TOC entry 2342 (class 2606 OID 16487)
-- Name: adm_map_proficiency_equipment_category adm_map_proficiency_equipment_category_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY adm_map_proficiency_equipment_category
    ADD CONSTRAINT adm_map_proficiency_equipment_category_pkey PRIMARY KEY (id);


--
-- TOC entry 2392 (class 2606 OID 16670)
-- Name: adm_map_spellcasting_focus_equipment_category adm_map_spellcasting_focus_equipment_category_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY adm_map_spellcasting_focus_equipment_category
    ADD CONSTRAINT adm_map_spellcasting_focus_equipment_category_pkey PRIMARY KEY (id);


--
-- TOC entry 2390 (class 2606 OID 16664)
-- Name: x_adm_link_spell_component x_adm_link_spell_component_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY x_adm_link_spell_component
    ADD CONSTRAINT x_adm_link_spell_component_pkey PRIMARY KEY (id);


-- Completed on 2017-12-09 15:45:00

--
-- PostgreSQL database dump complete
--


-- Table: public.adm_core_chart

-- DROP TABLE public.adm_core_chart;

CREATE TABLE public.adm_core_chart
(
    id bigint NOT NULL DEFAULT nextval('adm_seq'::regclass),
    "diceId" bigint NOT NULL,
    title character varying COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT adm_core_chart_pkey PRIMARY KEY (id)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.adm_core_chart
    OWNER to postgres;
    
-- Table: public.adm_core_description

-- DROP TABLE public.adm_core_description;

CREATE TABLE public.adm_core_description
(
    id bigint NOT NULL DEFAULT nextval('adm_seq'::regclass),
    "itemId" bigint NOT NULL,
    "descriptionTypeId" bigint NOT NULL DEFAULT 171,
    description text COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT adm_core_description_pkey PRIMARY KEY (id)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.adm_core_description
    OWNER to postgres;

-- Table: public.adm_core_dice

-- DROP TABLE public.adm_core_dice;

CREATE TABLE public.adm_core_dice
(
    id bigint NOT NULL DEFAULT nextval('adm_seq'::regclass),
    "dieCount" smallint NOT NULL,
    "dieType" smallint NOT NULL,
    multiplier smallint NOT NULL DEFAULT 1,
    modifier smallint NOT NULL DEFAULT 0,
    divisor smallint NOT NULL DEFAULT 1,
    CONSTRAINT adm_core_dice_pkey PRIMARY KEY (id)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.adm_core_dice
    OWNER to postgres;

-- Table: public.adm_core_item

-- DROP TABLE public.adm_core_item;

CREATE TABLE public.adm_core_item
(
    id bigint NOT NULL DEFAULT nextval('adm_seq'::regclass),
    "itemName" character varying COLLATE pg_catalog."default" NOT NULL,
    "itemTypeId" bigint NOT NULL,
    "resourceId" bigint NOT NULL DEFAULT 2,
    CONSTRAINT adm_core_item_pkey PRIMARY KEY (id)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.adm_core_item
    OWNER to postgres;
    
-- Table: public.adm_core_type

-- DROP TABLE public.adm_core_type;

CREATE TABLE public.adm_core_type
(
    id bigint NOT NULL DEFAULT nextval('adm_seq'::regclass),
    "typeName" character varying COLLATE pg_catalog."default" NOT NULL,
    "isPicklist" boolean NOT NULL DEFAULT false,
    "isDescription" boolean NOT NULL DEFAULT false,
    "isChart" boolean NOT NULL DEFAULT false,
    CONSTRAINT adm_core_type_pkey PRIMARY KEY (id)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.adm_core_type
    OWNER to postgres;
    
-- Table: public.adm_def_background

-- DROP TABLE public.adm_def_background;

CREATE TABLE public.adm_def_background
(
    "backgroundId" bigint NOT NULL,
    "startingGold" smallint NOT NULL DEFAULT 0,
    "featureId" bigint NOT NULL,
    CONSTRAINT adm_def_background_pkey PRIMARY KEY ("backgroundId")
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.adm_def_background
    OWNER to postgres;

-- Table: public.adm_def_chart_entry

-- DROP TABLE public.adm_def_chart_entry;

CREATE TABLE public.adm_def_chart_entry
(
    id bigint NOT NULL DEFAULT nextval('adm_link_seq'::regclass),
    "chartId" bigint NOT NULL,
    minimum smallint NOT NULL,
    maximum smallint NOT NULL,
    description character varying COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT adm_def_chart_entry_pkey PRIMARY KEY (id)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.adm_def_chart_entry
    OWNER to postgres;
    
-- Table: public.adm_def_damage

-- DROP TABLE public.adm_def_damage;

CREATE TABLE public.adm_def_damage
(
    "referenceId" bigint NOT NULL,
    "diceId" bigint NOT NULL,
    "damageTypeId" bigint NOT NULL,
    CONSTRAINT adm_def_damage_pkey PRIMARY KEY ("referenceId")
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.adm_def_damage
    OWNER to postgres;
    
-- Table: public.adm_def_damage_type

-- DROP TABLE public.adm_def_damage_type;

CREATE TABLE public.adm_def_damage_type
(
    "damageTypeId" bigint NOT NULL,
    "isWeapon" boolean NOT NULL DEFAULT false,
    CONSTRAINT adm_def_damage_type_pkey PRIMARY KEY ("damageTypeId")
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.adm_def_damage_type
    OWNER to postgres;
    
-- Table: public.adm_def_equipment

-- DROP TABLE public.adm_def_equipment;

CREATE TABLE public.adm_def_equipment
(
    "equipmentId" bigint NOT NULL,
    "categoryId" bigint NOT NULL,
    cost numeric NOT NULL DEFAULT 0,
    weight numeric NOT NULL DEFAULT 0,
    CONSTRAINT adm_def_equipment_pkey PRIMARY KEY ("equipmentId")
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.adm_def_equipment
    OWNER to postgres;
    
-- Table: public.adm_def_equipment_ammunition

-- DROP TABLE public.adm_def_equipment_ammunition;

CREATE TABLE public.adm_def_equipment_ammunition
(
    "equipmentId" bigint NOT NULL,
    "ammunitionTypeId" bigint NOT NULL,
    CONSTRAINT adm_def_equipment_ammunition_pkey PRIMARY KEY ("equipmentId")
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.adm_def_equipment_ammunition
    OWNER to postgres;
    
-- Table: public.adm_def_equipment_armor

-- DROP TABLE public.adm_def_equipment_armor;

CREATE TABLE public.adm_def_equipment_armor
(
    "equipmentId" bigint NOT NULL,
    "proficiencyId" bigint NOT NULL,
    "baseArmorClass" smallint NOT NULL,
    "applyDexModifier" boolean NOT NULL DEFAULT false,
    "hasMaxDexModifier" boolean NOT NULL DEFAULT false,
    "maxDexModifier" smallint NOT NULL DEFAULT 2,
    "minimumStrength" smallint NOT NULL DEFAULT 0,
    "stealthDisadvantage" boolean NOT NULL DEFAULT false,
    "isCumulative" boolean NOT NULL DEFAULT false,
    CONSTRAINT adm_def_equipment_armor_pkey PRIMARY KEY ("equipmentId")
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.adm_def_equipment_armor
    OWNER to postgres;
    
-- Table: public.adm_def_equipment_count_unit

-- DROP TABLE public.adm_def_equipment_count_unit;

CREATE TABLE public.adm_def_equipment_count_unit
(
    "equipmentId" bigint NOT NULL,
    "itemCount" smallint NOT NULL DEFAULT 1,
    "unitName" character varying COLLATE pg_catalog."default",
    CONSTRAINT adm_def_equipment_count_unit_pkey PRIMARY KEY ("equipmentId")
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.adm_def_equipment_count_unit
    OWNER to postgres;
    
-- Table: public.adm_def_equipment_improvised_weapon

-- DROP TABLE public.adm_def_equipment_improvised_weapon;

CREATE TABLE public.adm_def_equipment_improvised_weapon
(
    "equipmentId" bigint NOT NULL,
    "damageDiceId" bigint NOT NULL,
    "damageTypeId" bigint NOT NULL,
    range smallint NOT NULL DEFAULT 0,
    CONSTRAINT adm_def_equipment_improvised_weapon_pkey PRIMARY KEY ("equipmentId")
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.adm_def_equipment_improvised_weapon
    OWNER to postgres;
    
-- Table: public.adm_def_equipment_weapon

-- DROP TABLE public.adm_def_equipment_weapon;

CREATE TABLE public.adm_def_equipment_weapon
(
    "equipmentId" bigint NOT NULL,
    "_damageDiceId" bigint,
    "_damageTypeId" bigint,
    "proficiencyId" bigint NOT NULL,
    "categoryId" bigint NOT NULL,
    CONSTRAINT adm_def_equipment_weapon_pkey PRIMARY KEY ("equipmentId")
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.adm_def_equipment_weapon
    OWNER to postgres;
    
-- Table: public.adm_def_equipment_weapon_alt_damage

-- DROP TABLE public.adm_def_equipment_weapon_alt_damage;

CREATE TABLE public.adm_def_equipment_weapon_alt_damage
(
    "equipmentId" bigint NOT NULL,
    "damageDiceId" bigint NOT NULL,
    CONSTRAINT adm_def_equipment_weapon_alt_damage_pkey PRIMARY KEY ("equipmentId")
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.adm_def_equipment_weapon_alt_damage
    OWNER to postgres;
    
-- Table: public.adm_def_equipment_weapon_ammunition

-- DROP TABLE public.adm_def_equipment_weapon_ammunition;

CREATE TABLE public.adm_def_equipment_weapon_ammunition
(
    "equipmentId" bigint NOT NULL,
    "ammunitionTypeId" bigint NOT NULL,
    CONSTRAINT adm_def_equipment_weapon_ammunition_pkey PRIMARY KEY ("equipmentId")
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.adm_def_equipment_weapon_ammunition
    OWNER to postgres;
    
-- Table: public.adm_def_equipment_weapon_range

-- DROP TABLE public.adm_def_equipment_weapon_range;

CREATE TABLE public.adm_def_equipment_weapon_range
(
    "equipmentId" bigint NOT NULL,
    "normalRange" smallint NOT NULL,
    "maximumRange" smallint NOT NULL,
    CONSTRAINT adm_def_equipment_weapon_range_pkey PRIMARY KEY ("equipmentId")
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.adm_def_equipment_weapon_range
    OWNER to postgres;
    
-- Table: public.adm_def_equipment_weapon_special

-- DROP TABLE public.adm_def_equipment_weapon_special;

CREATE TABLE public.adm_def_equipment_weapon_special
(
    "equipmentId" bigint NOT NULL,
    "specialDescription" text COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT adm_def_equipment_weapon_special_pkey PRIMARY KEY ("equipmentId")
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.adm_def_equipment_weapon_special
    OWNER to postgres;
    
-- Table: public.adm_def_item_group

-- DROP TABLE public.adm_def_item_group;

CREATE TABLE public.adm_def_item_group
(
    "itemGroupId" bigint NOT NULL,
    "mechanicTypeId" bigint NOT NULL,
    "selectCount" smallint NOT NULL DEFAULT 1,
    CONSTRAINT adm_def_item_group_pkey PRIMARY KEY ("itemGroupId")
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.adm_def_item_group
    OWNER to postgres;
    
-- Table: public.adm_def_proficiency

-- DROP TABLE public.adm_def_proficiency;

CREATE TABLE public.adm_def_proficiency
(
    "proficiencyId" bigint NOT NULL,
    "categoryId" bigint NOT NULL,
    CONSTRAINT adm_def_proficiency_pkey PRIMARY KEY ("proficiencyId")
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.adm_def_proficiency
    OWNER to postgres;
    
-- Table: public.adm_def_proficiency_ability_score

-- DROP TABLE public.adm_def_proficiency_ability_score;

CREATE TABLE public.adm_def_proficiency_ability_score
(
    "proficiencyId" bigint NOT NULL,
    "abilityScoreId" bigint NOT NULL,
    CONSTRAINT adm_def_proficiency_ability_score_pkey PRIMARY KEY ("proficiencyId")
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.adm_def_proficiency_ability_score
    OWNER to postgres;
    
-- Table: public.adm_def_proficiency_category

-- DROP TABLE public.adm_def_proficiency_category;

CREATE TABLE public.adm_def_proficiency_category
(
    "proficiencyCategoryId" bigint NOT NULL,
    "parentId" bigint NOT NULL DEFAULT 0,
    "isEquipmentBased" boolean NOT NULL DEFAULT false,
    "requireAbilityScore" boolean NOT NULL DEFAULT false,
    "requireLanguageInfo" boolean NOT NULL DEFAULT false,
    CONSTRAINT adm_def_proficiency_category_pkey PRIMARY KEY ("proficiencyCategoryId")
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.adm_def_proficiency_category
    OWNER to postgres;
    
-- Table: public.adm_def_proficiency_language

-- DROP TABLE public.adm_def_proficiency_language;

CREATE TABLE public.adm_def_proficiency_language
(
    "proficiencyId" bigint NOT NULL,
    "scriptId" bigint NOT NULL,
    "rarityId" bigint NOT NULL,
    CONSTRAINT adm_def_proficiency_language_pkey PRIMARY KEY ("proficiencyId")
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.adm_def_proficiency_language
    OWNER to postgres;
    
-- Table: public.adm_def_spell

-- DROP TABLE public.adm_def_spell;

CREATE TABLE public.adm_def_spell
(
    "spellId" bigint NOT NULL,
    level smallint NOT NULL,
    "schoolId" bigint NOT NULL,
    "durationId" bigint NOT NULL,
    "rangeId" bigint NOT NULL,
    "castingTimeId" bigint NOT NULL,
    "isRitual" boolean NOT NULL DEFAULT false,
    CONSTRAINT adm_def_spell_pkey PRIMARY KEY ("spellId")
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.adm_def_spell
    OWNER to postgres;
    
-- Table: public.adm_def_spell_component

-- DROP TABLE public.adm_def_spell_component;

CREATE TABLE public.adm_def_spell_component
(
    "spellComponentId" bigint NOT NULL,
    "requireDescription" boolean NOT NULL DEFAULT false,
    CONSTRAINT adm_def_spell_component_pkey PRIMARY KEY ("spellComponentId")
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.adm_def_spell_component
    OWNER to postgres;
    
-- Table: public.adm_def_spell_damage

-- DROP TABLE public.adm_def_spell_damage;

CREATE TABLE public.adm_def_spell_damage
(
    "spellId" bigint NOT NULL,
    "_diceId" bigint NOT NULL,
    "_damageTypeId" bigint NOT NULL,
    "improvementDiceId" bigint NOT NULL DEFAULT 0,
    CONSTRAINT adm_def_spell_damage_base_pkey PRIMARY KEY ("spellId")
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.adm_def_spell_damage
    OWNER to postgres;
    
-- Table: public.adm_def_spell_saving_throw

-- DROP TABLE public.adm_def_spell_saving_throw;

CREATE TABLE public.adm_def_spell_saving_throw
(
    "spellId" bigint NOT NULL,
    "abilityScoreId" bigint NOT NULL,
    CONSTRAINT adm_def_spell_saving_throw_pkey PRIMARY KEY ("spellId")
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.adm_def_spell_saving_throw
    OWNER to postgres;
    
-- Table: public.adm_def_weapon_property

-- DROP TABLE public.adm_def_weapon_property;

CREATE TABLE public.adm_def_weapon_property
(
    "weaponPropertyId" bigint NOT NULL,
    "requireAmmunition" boolean NOT NULL DEFAULT false,
    "requireDamage" boolean NOT NULL DEFAULT false,
    "requireDescription" boolean NOT NULL DEFAULT false,
    "requireRange" boolean NOT NULL DEFAULT false,
    CONSTRAINT adm_def_weapon_property_pkey PRIMARY KEY ("weaponPropertyId")
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.adm_def_weapon_property
    OWNER to postgres;
    
-- Table: public.adm_link_chart

-- DROP TABLE public.adm_link_chart;

CREATE TABLE public.adm_link_chart
(
    id bigint NOT NULL DEFAULT nextval('adm_seq'::regclass),
    "referenceId" bigint NOT NULL,
    "chartId" bigint NOT NULL,
    "orderIndex" smallint NOT NULL,
    CONSTRAINT adm_link_chart_pkey PRIMARY KEY (id)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.adm_link_chart
    OWNER to postgres;
    
-- Table: public.adm_link_equipment

-- DROP TABLE public.adm_link_equipment;

CREATE TABLE public.adm_link_equipment
(
    id bigint NOT NULL DEFAULT nextval('adm_link_seq'::regclass),
    "referenceId" bigint NOT NULL,
    "equipmentId" bigint NOT NULL,
    "assignedCount" smallint NOT NULL DEFAULT 1,
    CONSTRAINT adm_link_equipment_pkey PRIMARY KEY (id)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.adm_link_equipment
    OWNER to postgres;
    
-- Table: public.adm_link_item_group

-- DROP TABLE public.adm_link_item_group;

CREATE TABLE public.adm_link_item_group
(
    id bigint NOT NULL DEFAULT nextval('adm_link_seq'::regclass),
    "referenceId" bigint NOT NULL,
    "itemGroupId" bigint NOT NULL,
    CONSTRAINT adm_link_item_group_pkey PRIMARY KEY (id)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.adm_link_item_group
    OWNER to postgres;
    
-- Table: public.adm_link_item_group_assignment

-- DROP TABLE public.adm_link_item_group_assignment;

CREATE TABLE public.adm_link_item_group_assignment
(
    id bigint NOT NULL DEFAULT nextval('adm_link_seq'::regclass),
    "itemGroupId" bigint NOT NULL,
    "itemId" bigint NOT NULL,
    CONSTRAINT adm_link_item_group_assignment_pkey PRIMARY KEY (id)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.adm_link_item_group_assignment
    OWNER to postgres;
    
-- Table: public.adm_link_mechanic

-- DROP TABLE public.adm_link_mechanic;

CREATE TABLE public.adm_link_mechanic
(
    id bigint NOT NULL DEFAULT nextval('adm_link_seq'::regclass),
    "referenceId" bigint NOT NULL,
    "targetId" bigint NOT NULL,
    "typeId" bigint NOT NULL,
    value smallint NOT NULL,
    CONSTRAINT adm_link_mechanic_pkey PRIMARY KEY (id)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.adm_link_mechanic
    OWNER to postgres;
    
-- Table: public.adm_link_spell_component

-- DROP TABLE public.adm_link_spell_component;

CREATE TABLE public.adm_link_spell_component
(
    id bigint NOT NULL DEFAULT nextval('adm_link_seq'::regclass),
    "referenceId" bigint NOT NULL,
    "componentId" bigint NOT NULL,
    description character varying COLLATE pg_catalog."default",
    CONSTRAINT adm_link_spell_component_pkey PRIMARY KEY (id)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.adm_link_spell_component
    OWNER to postgres;
    
-- Table: public.adm_link_weapon_property

-- DROP TABLE public.adm_link_weapon_property;

CREATE TABLE public.adm_link_weapon_property
(
    id bigint NOT NULL DEFAULT nextval('adm_link_seq'::regclass),
    "referenceId" bigint NOT NULL,
    "propertyId" bigint NOT NULL,
    CONSTRAINT adm_link_weapon_property_pkey PRIMARY KEY (id)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.adm_link_weapon_property
    OWNER to postgres;
    
-- Table: public.adm_map_proficiency_equipment_category

-- DROP TABLE public.adm_map_proficiency_equipment_category;

CREATE TABLE public.adm_map_proficiency_equipment_category
(
    id bigint NOT NULL DEFAULT nextval('adm_link_seq'::regclass),
    "proficiencyCategoryId" bigint NOT NULL,
    "equipmentCategoryId" bigint NOT NULL,
    CONSTRAINT adm_map_proficiency_equipment_category_pkey PRIMARY KEY (id)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.adm_map_proficiency_equipment_category
    OWNER to postgres;
    
-- Table: public.adm_map_spellcasting_focus_equipment_category

-- DROP TABLE public.adm_map_spellcasting_focus_equipment_category;

CREATE TABLE public.adm_map_spellcasting_focus_equipment_category
(
    id bigint NOT NULL DEFAULT nextval('adm_link_seq'::regclass),
    "spellcastingFocusId" bigint NOT NULL,
    "equipmentCategoryId" bigint NOT NULL,
    CONSTRAINT adm_map_spellcasting_focus_equipment_category_pkey PRIMARY KEY (id)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.adm_map_spellcasting_focus_equipment_category
    OWNER to postgres;
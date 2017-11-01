export const TYPES = {
    ABILITY_SCORE: 24,
    AMMUNITION_TYPE: 67,
    ARMOR: 456,
    ARMOR_PROFICIENCY: 20,
    DAMAGE_TYPE: 6,
    EQUIPMENT: 49,
    EQUIPMENT_CATEGORY: 50,
    LANGUAGE_RARITY: 68,
    LANGUAGE_SCRIPT: 69,
    PROFICIENCY_CATEGORY: 65,
    RESOURCE: 1,
    SCHOOL_OF_MAGIC: 70,
    SELECTION_MECHANIC: 66,
    SPELL_CASTING_TIME: 71,
    SPELL_COMPONENT: 72,
    SPELL_DURATION: 73,
    SPELL_RANGE: 74,
    WEAPON: 455,
    WEAPON_CATEGORY: 22,
    WEAPON_PROFICIENCY: 21,
    WEAPON_PROPERTY: 23
};

export const ARMOR_PROFICIENCY = {
    HEAVY: 33,
    LIGHT: 31,
    MEDIUM: 32,
    SHIELD: 34
};

export const EQUIPMENT_CATEGORY = {
    AMMUNITION: 57,
    ARCANE_FOCUS: 58,
    ARTISANS_TOOL: 62,
    GENERAL: 56,
    DRUIDIC_FOCUS: 59,
    GAMING_SET: 63,
    HOLY_SYMBOL: 60,
    MINOR_ITEM: 114,
    MUSICAL_INSTRUMENT: 64,
    TOOL: 61
};

export const PROFICIENCY_CATEGORY = {
    ARMOR: 92,
    ARTISAN_TOOL: 93,
    GAMING_SET: 94,
    LANGUAGE: 95,
    MUSICAL_INSTRUMENT: 96,
    SAVING_THROW: 97,
    SKILL: 98,
    TOOL: 99,
    VEHICLE: 100,
    WEAPON: 101,
    WEAPON_SPECIFIC: 102
};

PROFICIENCY_CATEGORY.ALL = {
    TOOL: [
        PROFICIENCY_CATEGORY.ARTISAN_TOOL,
        PROFICIENCY_CATEGORY.GAMING_SET,
        PROFICIENCY_CATEGORY.MUSICAL_INSTRUMENT,
        PROFICIENCY_CATEGORY.TOOL,
        PROFICIENCY_CATEGORY.VEHICLE
        
    ],
    WEAPON: [
        PROFICIENCY_CATEGORY.WEAPON,
        PROFICIENCY_CATEGORY.WEAPON_SPECIFIC
    ]
};

export const SELECTION_MECHANIC = {
    ASSIGNMENT: 79,
    SELECT_FROM: {
        CATEGORY: 80,
        LIST: 81
    }
};

export const SPELL_COMPONENT = {
    MATERIAL: 103,
    SOMATIC: 105,
    VERBAL: 104
};

export const WEAPON_CATEGORY = {
    MELEE: 35,
    RANGED: 36
};

export const WEAPON_PROFICIENCY = {
    IMPROVISED: 199,
    MARTIAL: 37,
    SIMPLE: 38
};
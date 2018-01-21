import * as exampleObjects from './exampleObjects';

const _ID_NAME_OBJECT = {id: 0, name: ''};
const _ID_NAME_DESC_OBJECT = {id: 0, name: '', description: ''};

const _DICE = {id: 0, dieCount: 0, dieType: 0, rendered: '', modifier: 0, multiplier: 1, divisor: 0};
const _FEATURE = _ID_NAME_DESC_OBJECT;
const _PROFICIENCY = _ID_NAME_OBJECT;
const _RESOURCE = {id: 2, name: 'Player\'s Handbook'};

export const examples = exampleObjects;

export const ARMOR = {
    id: 0,
    name: '',
    applyDexModifier: false,
    baseArmorClass: 10,
    cost: '0',
    description: '',
    hasMaxDexModifier: false,
    isCumulative: false,
    maxDexModifier: 0,
    minimumStrength: 0,
    proficiency: _PROFICIENCY,
    resource: _RESOURCE,
    stealthDisadvantage: false,
    weight: '0'
};
export const BACKGROUND = {
    id: 0,
    name: '',
    assignedEquipment: [],
    charts: [],
    description: '',
    feature: _FEATURE,
    proficiencyGroups: [],
    resource: _RESOURCE,
    startingGold: '0',
    suggestedCharacteristics: '',
    variants: []
};
export const BACKGROUND_VARIANT = {
    id: 0,
    name: '',
    feature: _FEATURE,
    resource: _RESOURCE
};
export const BREATH_WEAPON = {
    areaOfEffect: {
        shape: _ID_NAME_OBJECT
    },
    charges: {
        count: 1,
        improvement: [],
        rechargeType: _ID_NAME_OBJECT
    },
    damage: {
        dice: _DICE,
        improvement: [],
        type: _ID_NAME_OBJECT
    },
    range: 0,
    savingThrow: {
        abilityScore: _ID_NAME_OBJECT,
        dc: {
            abilityScore: _ID_NAME_OBJECT,
            applyProficiencyBonus: true,
            base: 8
        },
        effect: _ID_NAME_OBJECT
    }
};
export const IMPROVEMENT = {
    characterLevel: 0,
    count: 1,
    dice: _DICE
};
export const CHART = {
    id: -1,
    title: '',
    description: '',
    dice: _DICE,
    columnCount: 1,
    rowCount: 0,
    columns: [
        {
            id: 0,
            title: '',
            orderIndex: 0,
            selectionItemType: _ID_NAME_OBJECT,
            selectionItemDataType: {id: 1, name: ''}
        }
    ],
    rows: [],
    entries: [],
    orderIndex: -1,
    isCreateNewItemType: false,
    selectionItemType: _ID_NAME_OBJECT,
    type: _ID_NAME_OBJECT
};
export const CHART_COLUMN = {
    id: 0,
    title: '',
    orderIndex: -1,
    selectionItemDataType: {id: 1, name: ''},
    selectionItemType: _ID_NAME_OBJECT
};
export const CHART_ROW = {
    id: 0,
    title: '',
    orderIndex: -1,
    selectionItem: _ID_NAME_OBJECT
};
export const CHART_ENTRY = {
    id: 0,
    columnIndex: -1,
    rowIndex: -1,
    description: '',
    minimum: 0,
    maximum: 0,
    selectionItem: _ID_NAME_OBJECT
};
export const CHART_TYPE = _ID_NAME_OBJECT;
export const DAMAGE = {
    dice: _DICE,
    type: _ID_NAME_OBJECT
};
export const DICE = _DICE;
export const EQUIPMENT = {
    id: 0,
    name: '',
    ammunition: {
        id: 0,
        name: ''
    },
    category: {
        id: 0,
        name: ''
    },
    cost: '0',
    count: 1,
    description: '',
    improvisedWeapon: {
        damage: {id: 0, dieCount: 0, dieType: 0, rendered: ''},
        damageType: _ID_NAME_OBJECT,
        range: 0
    },
    resource: _RESOURCE,
    unit: '',
    weight: '0'
};
export const EQUIPMENT_PACK = {
    id: 0,
    name: '',
    assignedEquipment: [],
    category: {
        id: 0,
        name: ''
    },
    cost: '0',
    resource: _RESOURCE,
    weight: '0'
};
export const EQUIPMENT_PACK_ASSIGNED_EQUIPMENT = {
    id: 0,
    name: '',
    assignedCount: 0,
    category: {
        id: 0,
        name: ''
    },
    cost: '0',
    count: 0,
    resource: _RESOURCE,
    unit: '',
    weight: '0'
};
export const FEAT = {
    id: 0,
    name: '',
    description: '',
    mechanics: [],
    prerequisites: [],
    proficiencyGroups: [],
    resource: _RESOURCE
};
export const FEATURE = {
    id: 0,
    name: '',
    description: ''
};
export const ITEMTYPE = {
    id: 0,
    name: '',
    isDescription: false,
    isPicklist: false,
    isChart: false
};
export const MECHANIC = {
    id: 0,
    assignmentType: {id: 1},
    dice: _DICE,
    maximumValue: 0,
    specialText: '',
    target: _ID_NAME_OBJECT,
    targetGroup: {
        selectCount: 0,
        itemType: _ID_NAME_OBJECT,
        items: []
    },
    title: '',
    titleId: 0,
    type: _ID_NAME_OBJECT,
    value: 0,
    valueObject: _ID_NAME_OBJECT
};
export const NATURAL_WEAPON = {
    attack: {
        abilityScore: _ID_NAME_OBJECT,
        count: 1
    },
    damage: {
        abilityScore: _ID_NAME_OBJECT,
        dice: _DICE,
        type: _ID_NAME_OBJECT
    },
    type: _ID_NAME_OBJECT
};
export const PICKLIST = {id: 0, name: '', items: []};
export const PICKLISTITEM = {id: 0, name: '', picklistId: 0, defaultSelected: false};
export const PROFICIENCY = {
    id: 0,
    name: '',
    category: {
        id: 0,
        name: ''
    },
    abilityScore: {
        id: 0,
        name: ''
    },
    language: {
        rarity: {
            id: 0,
            name: ''
        },
        script: {
            id: 0,
            name: ''
        }
    },
    resource: _RESOURCE
};
export const PROFICIENCY_GROUP = {
    id: 0,
    name: '',
    category: {
        id: 0,
        name: '',
        parentId: 0
    },
    conditionalText: '',
    mechanic: {
        id: 0,
        name: ''
    },
    proficiencies: [],
    selectCount: 1
};
export const RACE = {
    id: 0,
    name: '',
    abilityScores: {
        strength: 0,
        dexterity: 0,
        constitution: 0,
        intelligence: 0,
        wisdom: 0,
        charisma: 0,
        selection: {
            count: 0,
            modifier: 0
        }
    },
    breathWeapons: [],
    charts: [],
    descriptions: [],
    isVariant: false,
    mechanics: [],
    //mechanics: {base: []},
    movement: [
        {id: 2275, name: 'Walking', speed: 30}
    ],
    naturalWeapons: [],
    parent: {id: 0},
    proficiencyGroups: [],
    resource: _RESOURCE,
    senses: [],
    size: {id: 2270, name: 'Medium'},
    spellcasting: {
        abilityScore: _ID_NAME_OBJECT,
        spellSelections: []
    },
    supplementalDescriptions: [],
    tags: [],
    type: {id: 2263, name: 'Humanoid'},
    vitals: {
        height: {
            base: 0,
            dice: _DICE
        },
        weight: {
            base: 0,
            dice: _DICE
        }
    }
};
export const SCHOOL_OF_MAGIC = _ID_NAME_OBJECT;
export const SPELL = {
    id: 0,
    name: '',
    atHigherLevels: '',
    description: '',
    castingTime: _ID_NAME_OBJECT,
    charts: [],
    components: [],
    damage: {
        dice: _DICE,
        type: _ID_NAME_OBJECT,
        attackRollType: _ID_NAME_OBJECT,
        condition: _ID_NAME_OBJECT,
        improvement: {
            dice: _DICE,
            levelCount: 0,
            projectileCount: 0
        },
        supplemental: [],
        applyAbilityScoreModifier: false,
        abilityScore: _ID_NAME_OBJECT,
        maximum: {dice: _DICE},
        projectileCount: 0
    },
    duration: _ID_NAME_OBJECT,
    isRitual: false,
    level: 0,
    mechanics: [],
//    mechanics: {
//        advancement: [],
//        base: []
//    },
    range: _ID_NAME_OBJECT,
    resource: _RESOURCE,
    savingThrow: {
        abilityScore: _ID_NAME_OBJECT,
        effect: _ID_NAME_OBJECT
    },
    school: _ID_NAME_OBJECT,
    supplementalDescriptions: []
};
export const SPELL_CASTING_TIME = _ID_NAME_OBJECT;
export const SPELL_COMPONENT = _ID_NAME_OBJECT;
export const SPELL_DURATION = _ID_NAME_OBJECT;
export const SPELL_LIST = {
    id: 0,
    name: '',
    resource: _RESOURCE,
    spells: []
};
export const SPELL_RANGE = _ID_NAME_OBJECT;
export const SPELL_SELECTION = {
    castingCount: 1,
    characterLevel: 1,
    rechargeType: _ID_NAME_OBJECT,
    school: _ID_NAME_OBJECT,
    selectCount: 1,
    selectionType: _ID_NAME_OBJECT,
    spell: _ID_NAME_OBJECT,
    spellLevel: 0,
    spelllist: _ID_NAME_OBJECT
};
export const SUPPLEMENTAL_DESCRIPTION = {
    id: 0,
    title: '',
    description: '',
    orderIndex: 0
};
export const TYPE = _ID_NAME_OBJECT;
export const WEAPON = {
    id: 0,
    name: '',
    ammunition: _ID_NAME_OBJECT,
    cost: '0',
    damage: {
        dice: _DICE,
        type: {
            id: 0,
            name: ''
        },
        versatile: {
            dice: {}
        }
    },
    range: {},
    requireRange: false,
    requireSpecialDescription: false,
    requireVersatileDamage: false,
    resource: _RESOURCE,
    specialDescription: '',
    category: _ID_NAME_OBJECT,
    proficiency: _ID_NAME_OBJECT,
    weaponProperties: [],
    weight: ''
};
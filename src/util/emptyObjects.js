export const ARMOR = {
    id: 0,
    name: '',
    applyDexModifier: false,
    baseArmorClass: 10,
    cost: '0',
    hasMaxDexModifier: false,
    isCumulative: false,
    maxDexModifier: 0,
    minimumStrength: 0,
    proficiency: {id: 0, name: ''},
    resource: {
        id: 0,
        name: ''
    },
    stealthDisadvantage: false,
    weight: '0'
};
export const BACKGROUND = {
    id: 0,
    name: '',
    assignedEquipment: [],
    charts: {die: [], standard: []},
    feature: {
        id: 0,
        name: '',
        description: ''
    },
    proficiencyGroups: [],
    resource: {
        id: 0,
        name: ''
    },
    startingGold: '0',
    variants: []
};
export const BACKGROUND_VARIANT = {
    id: 0,
    name: '',
    feature: {
        id: 0,
        name: '',
        description: ''
    },
    resource: {
        id: 0,
        name: ''
    }
};
export const CHART = {
    id: -1,
    title: '',
    description: '',
    dice: {dieCount: 0, dieType: 0, rendered: ''},
    columnCount: 0,
    rowCount: 0,
    columns: [],
    rows: [],
    entries: [],
    orderIndex: -1,
    type: {id: 0, name: ''}
};
export const CHART_COLUMN = {
    id: 0,
    title: '',
    orderIndex: -1
};
export const CHART_ROW = {
    id: 0,
    title: '',
    orderIndex: -1
};
export const CHART_ENTRY = {
    id: 0,
    columnIndex: -1,
    rowIndex: -1,
    description: '',
    minimum: 0,
    maximum: 0
};
export const CHART_TYPE = {id: 0, name: ''};
export const DAMAGE = {
    dice: {id: 0, dieCount: 0, dieType: 0, rendered: '', modifier: 0, multiplier: 1, divisor: 1},
    type: {id: 0, name: ''}
};
export const DICE = {id: 0, dieCount: 0, dieType: 0, rendered: '', modifier: 0, multiplier: 1, divisor: 0};
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
    improvisedWeapon: {
        damage: {id: 0, dieCount: 0, dieType: 0, rendered: ''},
        damageType: {id: 0, name: ''},
        range: 0
    },
    resource: {
        id: 0,
        name: ''
    },
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
    resource: {
        id: 0,
        name: ''
    },
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
    resource: {
        id: 0,
        name: ''
    },
    unit: '',
    weight: '0'
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
    dice: {id: 0, dieCount: 0, dieType: 0, rendered: '', modifier: 0, multiplier: 1, divisor: 0},
    target: {id: 0, name: ''},
    type: {id: 0, name: ''},
    value: 0,
    valueObject: {id: 0, name: ''}
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
    resource: {
        id: 0,
        name: ''
    }
};
export const PROFICIENCY_GROUP = {
    id: 0,
    name: '',
    category: {
        id: 0,
        name: '',
        parentId: 0
    },
    mechanic: {
        id: 0,
        name: ''
    },
    proficiencies: [],
    selectCount: 1
};
export const SCHOOL_OF_MAGIC = {id: 0, name: ''};
export const SPELL = {
    id: 0,
    name: '',
    atHigherLevels: '',
    description: '',
    castingTime: {id: 0, name: ''},
    charts: [],
    components: [],
    damage: {
        dice: {id: 0, dieCount: 0, dieType: 0, rendered: '', modifier: 0, multiplier: 1, divisor: 1},
        type: {id: 0, name: ''},
        attackRollType: {id: 0, name: ''},
        condition: {id: 0, name: ''},
        improvement: {
            dice: {id: 0, dieCount: 0, dieType: 0, rendered: '', modifier: 0, multiplier: 1, divisor: 1},
            levelCount: 0,
            projectileCount: 0
        },
        supplemental: [],
        applyAbilityScoreModifier: false,
        abilityScore: {id: 0, name: ''},
        maximum: {dice: {id: 0, dieCount: 0, dieType: 0, rendered: '', modifier: 0, multiplier: 1, divisor: 1}},
        projectileCount: 0
    },
    duration: {id: 0, name: ''},
    isRitual: false,
    level: 0,
    mechanics: {
        advancement: [],
        base: []
    },
    range: {id: 0, name: ''},
    resource: {id: 2, name: 'Player\'s Handbook'},
    savingThrow: {
        abilityScore: {id: 0, name: ''},
        effect: {id: 0, name: ''}
    },
    school: {id: 0, name: ''},
    supplementalDescriptions: []
};
export const SPELL_CASTING_TIME = {id: 0, name: ''};
export const SPELL_COMPONENT = {id: 0, name: ''};
export const SPELL_DURATION = {id: 0, name: ''};
export const SPELL_RANGE = {id: 0, name: ''};
export const SUPPLEMENTAL_DESCRIPTION = {id: 0, title: '', description: ''};
export const TYPE = {id: 0, name: ''};
export const WEAPON = {
    id: 0,
    name: '',
    ammunition: {id: 0, name: ''},
    cost: '0',
    damage: {
        dice: {
            dieCount: 0,
            dieType: 0,
            rendered: ''
        },
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
    resource: {
        id: 0,
        name: ''
    },
    specialDescription: '',
    category: {id: 0, name: ''},
    proficiency: {id: 0, name: ''},
    weaponProperties: [],
    weight: ''
};
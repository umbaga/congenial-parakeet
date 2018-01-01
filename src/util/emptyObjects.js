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
    charts: [],
    description: '',
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
    suggestedCharacteristics: '',
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
export const BREATH_WEAPON = {
    areaOfEffect: {
        shape: {id: 0, name: ''}
    },
    charges: {
        count: 1,
        improvement: [],
        rechargeType: {id: 0, name: ''}
    },
    damage: {
        dice: {dieCount: 0, dieType: 0, rendered: '', modifier: 0, multiplier: 1, divisor: 0},
        improvement: [],
        type: {id: 0, name: ''}
    },
    savingThrow: {
        abilityScore: {id: 0, name: ''},
        dc: {
            abilityScore: {id: 0, name: ''},
            applyProficiencyBonus: true,
            base: 8
        }
    }
};
export const BREATH_WEAPON_DAMAGE_IMPROVEMENT = {
    characterLevel: 0,
    count: 1
};
export const BREATH_WEAPON_CHARGES_IMPROVEMENT = {
    characterLevel: 0,
    dice: {dieCount: 0, dieType: 0, rendered: '', modifier: 0, multiplier: 1, divisor: 0}
};
export const CHART = {
    id: -1,
    title: '',
    description: '',
    dice: {dieCount: 0, dieType: 0, rendered: '', modifier: 0, multiplier: 1, divisor: 0},
    columnCount: 1,
    rowCount: 0,
    columns: [
        {
            id: 0,
            title: '',
            orderIndex: 0,
            selectionItemType: {id: 0, name: ''},
            selectionItemDataType: {id: 1, name: ''}
        }
    ],
    rows: [],
    entries: [],
    orderIndex: -1,
    isCreateNewItemType: false,
    selectionItemType: {id: 0, name: ''},
    type: {id: 0, name: ''}
};
export const CHART_COLUMN = {
    id: 0,
    title: '',
    orderIndex: -1,
    selectionItemDataType: {id: 1, name: ''},
    selectionItemType: {id: 0, name: ''}
};
export const CHART_ROW = {
    id: 0,
    title: '',
    orderIndex: -1,
    selectionItem: {id: 0, name: ''}
};
export const CHART_ENTRY = {
    id: 0,
    columnIndex: -1,
    rowIndex: -1,
    description: '',
    minimum: 0,
    maximum: 0,
    selectionItem: {id: 0, name: ''}
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
    description: '',
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
    specialText: '',
    target: {id: 0, name: ''},
    type: {id: 0, name: ''},
    value: 0,
    valueObject: {id: 0, name: ''}
};
export const NATURAL_WEAPON = {
    attack: {
        abilityScore: {id: 0, name: ''},
        count: 1
    },
    damage: {
        abilityScore: {id: 0, name: ''},
        dice: {dieCount: 0, dieType: 0, rendered: '', modifier: 0, multiplier: 1, divisor: 0},
        type: {id: 0, name: ''}
    },
    type: {id: 0, name: ''}
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
    mechanics: {
        base: []
    },
    movement: [
        {id: 2275, name: 'Walking', speed: 30}
    ],
    naturalWeapons: [],
    parent: {id: 0},
    proficiencyGroups: [],
    resource: {id: 2, name: 'Player\'s Handbook'},
    senses: [],
    size: {id: 2270, name: 'Medium'},
    spellcasting: {
        abilityScore: {id: 0, name: ''},
        spellSelections: []
    },
    supplementalDescriptions: [],
    tags: [],
    type: {id: 2263, name: 'Humanoid'},
    vitals: {
        height: {
            base: 0,
            dice: {id: 0, dieCount: 0, dieType: 0, rendered: '', modifier: 0, multiplier: 1, divisor: 0}
        },
        weight: {
            base: 0,
            dice: {id: 0, dieCount: 0, dieType: 0, rendered: '', modifier: 0, multiplier: 1, divisor: 0}
        }
    }
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
export const SPELL_LIST = {
    id: 0,
    name: '',
    resource: {id: 2, name: 'Player\'s Handbook'},
    spells: []
};
export const SPELL_RANGE = {id: 0, name: ''};
export const SPELL_SELECTION = {
    castingCount: 1,
    characterLevel: 1,
    rechargeType: {id: 0, name: ''},
    school: {id: 0, name: ''},
    selectCount: 1,
    selectionType: {id: 0, name: ''},
    spell: {id: 0, name: ''},
    spellLevel: 0,
    spelllist: {id: 0, name: ''}
};
export const SUPPLEMENTAL_DESCRIPTION = {
    id: 0,
    title: '',
    description: '',
    orderIndex: 0
};
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
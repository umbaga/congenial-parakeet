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
export const EQUIPMENT = {
    id: 0,
    name: '',
    category: {
        id: 0,
        name: ''
    },
    cost: '0',
    count: 1,
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
export const ITEMTYPE = {id: 0, name: '', isPicklist: false};
export const PICKLIST = {id: 0, name: '', items: []};
export const PICKLISTITEM = {id: 0, name: '', picklistId: 0, defaultSelected: false};
export const WEAPON = {
    id: 0,
    name: '',
    cost: '0',
    damage: {dieCount: 0, dieType: 0, rendered: ''},
    damageType: {id: 0, name: ''},
    range: {},
    requireRange: false,
    requireSpecialDescription: false,
    requireVersatileDamage: false,
    resource: {
        id: 0,
        name: ''
    },
    specialDescription: '',
    versatileDamage: {},
    category: {id: 0, name: ''},
    proficiency: {id: 0, name: ''},
    weaponProperties: [],
    weight: ''
};
export const ITEMTYPE = {id: 0, name: '', isPicklist: false};
export const PICKLIST = {id: 0, name: '', items: []};
export const PICKLISTITEM = {id: 0, name: '', picklistId: 0};
export const WEAPON = {
    id: 0, 
    name: '', 
    cost: "0",
    damage: {dieCount: 0, dieType: 0, rendered: ''},
    damageType: {id: 0, name: ''},
    range: {},
    requireRange: false,
    requireSpecialDescription: false,
    requireVersatileDamage: false,
    specialDescription: '',
    versatileDamage: {},
    weaponCategory: {id: 0, name: ''},
    weaponProficiency: {id: 0, name: ''},
    weaponProperties: [],
    weight: "0"};
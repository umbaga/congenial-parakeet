import util from './util';

export function getPicklistItems (picklistArray, picklistId) {
    let retVal = [];
    let tmp = picklistArray.filter((picklist) => picklist.id == picklistId);
    if (tmp && tmp.length != 0) {
        retVal = tmp[0].items;
    }
    return retVal;
}

export function filterPicklistByAssigned (picklist, assigned) {
    return picklist.filter((picklistItem) => {
        for (let d = 0; d < assigned.length; d++) {
            if (assigned[d].id == picklistItem.id) {
                return false;
            }
        }
        return true;
    });
}

export function getPicklistItem(allPicklists, picklistItemId) {
    for (let y = 0; y < allPicklists.length; y++) {
        for (let z = 0; z < allPicklists[y].items.length; z++) {
            if (allPicklists[y].items[z]) {
                if (allPicklists[y].items[z].id == picklistItemId) {
                    return allPicklists[y].items[z];
                }
            }
        }
    }
    return null;
}

export function getPicklistItemFromSinglePicklist(picklist, picklistItemId) {
    for (let a = 0; a < picklist.length; a++) {
        if (picklist[a].id == picklistItemId) {
            return picklist[a];
        }
    }
    return null;
}

export function getDefaultSelectedItem (picklist) {
    for (let i = 0; i < picklist.length; i++) {
        if (picklist[i].defaultSelected) {
            return picklist[i];
        }
    }
    return Object.assign({}, util.objectModel.PICKLISTITEM);
}

export function getIndexById(arr, id) {
    let retVal = -1;
    for (let d = 0; d < arr.length; d++) {
        if (arr[d].id == id) {
            retVal = d;
            break;
        }
    }
    return retVal;
}
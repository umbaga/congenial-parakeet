import * as vulgarFractions from './vulgarFractions';

let array = {};
array.commaDelimitedList = function(val) {
    let retVal = '';
    if(val) {
        for(let q = 0; q < val.length; q++) {
            retVal += val[q].name;
            if (q < val.length - 1) {
                retVal += ', ';
            }
        }
    }
    return retVal;
};

let bool = {};
bool.asCheckBlank = function(val) {
    if(val) {
        return '\u2713';
    }
    return '';
};
bool.asCheckX = function(val) {
    if(val) {
        return '\u2713';
    }
    return '\u2717';
};
bool.asYesNo = function(val) {
    if(val) {
        return 'Yes';
    }
    return 'No';
};
bool.asTrueFalse = function(val) {
    if(val) {
        return 'True';
    }
    return 'False';
};

let string = {};

let number = {};
number.coin = function(val) {
    return val;
};
number.weight = function(val) {
    return val;
};

export {bool, string, number, array};
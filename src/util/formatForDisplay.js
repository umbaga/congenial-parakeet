import util from './util';

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
array.weaponProperties = function(obj) {
    let retVal = util.unicode.punctuation.longDash;
    if(obj) {
        if(obj.weaponProperties && obj.weaponProperties.length > 0) {
            retVal = '';
            for (let x = 0; x < obj.weaponProperties.length; x++) {
                retVal += obj.weaponProperties[x].name;
                if(obj.weaponProperties[x].requireDamage) {
                    retVal += ' (' + util.format.forDisplay.string.dieRoll(obj.versatileDamage) + ')';
                }
                if(obj.weaponProperties[x].requireRange) {
                    retVal += ' (range ' + obj.range.normal + '/' + obj.range.maximum + ')';
                }
                retVal += x < obj.weaponProperties.length-1 ? ', ' : '';
            }
        }
    }
    return retVal;
};

let bool = {};
bool.asCheckBlank = function(val) {
    if(val) {
        return util.unicode.punctuation.checkMark;
    }
    return '';
};
bool.hasDisadvantage = function(val) {
    if(val) {
        return 'Disadvantage';
    }
    return util.unicode.punctuation.longDash;
};
bool.asCheckX = function(val) {
    if(val) {
        return util.unicode.punctuation.checkMark;
    }
    return util.unicode.punctuation.xMark;
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
string.dieRoll = function(val) {
    let retVal = '';
    if(val) {
        if(val.dieCount == 0 || val.dieType == 0) {
            retVal = '-';
        } else if (val.dieType == 1) {
            retVal = val.dieCount.toString();
        } else {
            retVal = val.dieCount.toString() + 'd' + val.dieType.toString();
        }
    }
    return retVal.toString();
};

let number = {};
number.addCommas = function(val) {
    let retVal = '';
    if(val) {
        let commaRefIndex = 0;
        for(let i = val.toString().length - 1; i >= 0; i--) {
            if(commaRefIndex % 3 == 0 && commaRefIndex != 0) {
                retVal = ',' + retVal;
            }
            retVal = val.toString().charAt(i) + retVal;
            commaRefIndex++;
        }
    }
    return retVal;
};
number.coin = function(val) {
    let retVal = '';
    if(val) {
        let goldVal = Math.floor(val);
        let silverVal = Math.floor((val - goldVal) * 10);
        let copperVal = Math.round((val - goldVal - (silverVal / 10)) * 100);
        if(goldVal != 0) {
            retVal += util.format.forDisplay.number.addCommas(goldVal) + ' gp ';
        }
        if(silverVal != 0) {
            retVal += silverVal + ' sp ';
        }
        if(copperVal != 0) {
            retVal += copperVal + ' cp ';
        }
    }
    return retVal;
};
number.abilityScoreMinimum = function(val, ability) {
    if(val == 0) {
        return util.unicode.punctuation.longDash;
    } else {
        return ability + ' ' + val.toString();
    }
};
number.weight = function(val) {
    let retVal = '';
    if(val) {
        retVal = util.unicode.vulgarFractions.calculateFractionalValue(val) + ' lbs.';
    }
    return retVal;
};

let obj = {};
obj.armorClass = function(val) {
    let retVal = '';
    if(val.isCumulative) {
        retVal += '+';
    }
    retVal += val.baseArmorClass.toString();
    if(val.applyDexModifier) {
        retVal += ' + Dex Modifier';
        if(val.hasMaxDexModifier) {
            retVal += ' (max ' + val.maxDexModifier.toString() + ')';
        }
    }
    return retVal;
};
export {bool, string, number, array, obj};
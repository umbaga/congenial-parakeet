import * as objectModel from './emptyObjects';
import * as forDisplay from './formatForDisplay';
import * as forDb from './formatForDb';
import * as dataTypes from './dataTypes';
import * as picklistInfo from './picklistInfo';
import * as itemTypeDefinition from './itemTypeDefinition';
import unicode from './unicode';
import * as common from './commonFunctions';

let util = {};
util.objectModel = objectModel;
let format = {};
format.forDisplay = forDisplay;
format.forDb = forDb;
util.format = format;
util.dataTypes = dataTypes;
util.picklistInfo = picklistInfo;
util.unicode = unicode;
util.common = common;
util.itemTypes = itemTypeDefinition;

export default util;
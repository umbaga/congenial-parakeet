import * as objectModel from './emptyObjects';
import * as forDisplay from './formatForDisplay';
import * as forDb from './formatForDb';

let util = {};
util.objectModel = objectModel;
let format = {};
format.forDisplay = forDisplay;
format.forDb = forDb;
util.format = format;

export default util;
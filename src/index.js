/*eslint-disable import/default */
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import './styles/my-css.css';
import {loadArmors} from './actions/admin/armorActions';
import {loadDierolls} from './actions/admin/dierollActions';
import {loadEquipments} from './actions/admin/equipmentActions';
import {loadItemtypes} from './actions/admin/itemtypeActions';
import {loadPacks} from './actions/admin/packActions';
import {loadPicklists} from './actions/admin/picklistActions';
import {loadProficiencies} from './actions/admin/proficiencyActions';
import {loadWeapons} from './actions/admin/weaponActions';

const store = configureStore();

store.dispatch(loadArmors());
store.dispatch(loadDierolls());
store.dispatch(loadEquipments());
store.dispatch(loadItemtypes());
store.dispatch(loadPacks());
store.dispatch(loadPicklists());
store.dispatch(loadProficiencies());
store.dispatch(loadWeapons());

render(
       <Provider store={store}>
           <Router history={browserHistory} routes={routes} />
       </Provider>,
       document.getElementById('app')
);
/*eslint-disable import/default */
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import {loadItemtypes} from './actions/admin/itemtypeActions';
import {loadPicklists} from './actions/admin/picklistActions';
import './styles/my-css.css';
import {loadDierolls} from './actions/admin/dierollActions';
import {loadWeapons} from './actions/admin/weaponActions';

const store = configureStore();

store.dispatch(loadDierolls());
store.dispatch(loadItemtypes());
store.dispatch(loadPicklists());
store.dispatch(loadWeapons());

render(
       <Provider store={store}>
           <Router history={browserHistory} routes={routes} />
       </Provider>,
       document.getElementById('app')
);
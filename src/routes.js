import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';

import AdminHomePage from './components/admin/home/adminHomePage';
import ItemtypesPage from './components/admin/itemtypes/ItemtypesPage';
import ItemtypePage from './components/admin/itemtypes/ItemtypePage';
import NewItemtypePage from './components/admin/itemtypes/NewItemtypePage';
import ItemtypeEntry from './components/admin/itemtypes/ItemtypeEntry';

import PicklistsPage from './components/admin/picklist/PicklistsPage';

import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import LogInPage from './components/LogInPage';
import auth from './auth/authenticator';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={AdminHomePage} />
        <Route path="/Home" component={AdminHomePage} />
        <Route path="/admin/itemtypes" component={ItemtypesPage}>
            <Route path="/old/admin/itemtypes/new" component={NewItemtypePage} />
            <Route path="/old/admin/itemtype/:id" component={ItemtypePage} />
            <Route path="/admin/itemtype/:id" component={ItemtypeEntry} />
        </Route>
        <Route path="/admin/Picklists" component={PicklistsPage} />
        <Route path="/login" component={LogInPage} />
        <Route path="/about" component={AboutPage} />
    </Route>
);

function requireAuth(nextState, replace) {
    if (!auth.loggedIn()) {
        replace({
            pathname: '/login',
            state: { nextPathname: nextState.location.pathname }
        });
    }
}

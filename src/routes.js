import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';

import AdminHomePage from './components/admin/home/adminHomePage';
import ItemtypeListPage from './components/admin/itemtypes/ItemtypeListPage';
import testbed from './components/admin/_testbed/testbed';

import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import LogInPage from './components/LogInPage';
import auth from './auth/authenticator';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={AdminHomePage} />
        <Route path="/Home" component={AdminHomePage} />
        <Route path="/admin/itemtypes" component={ItemtypeListPage} />
        <Route path="/admin/testbed" component={testbed} />
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

import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';

import AdminHomePage from './components/admin/home/adminHomePage';
import testbed from './components/admin/_testbed/testbed';

import ArmorListPage from './components/admin/equipment/armor/ArmorListPage';
import BackgroundListPage from './components/admin/background/BackgroundListPage';
import EquipmentListPage from './components/admin/equipment/EquipmentListPage';
import ItemtypeListPage from './components/admin/itemtypes/ItemtypeListPage';
import PackListPage from './components/admin/equipment/pack/PackListPage';
import PicklistListPage from './components/admin/picklists/PicklistListPage';
import ProficiencyListPage from './components/admin/proficiencies/ProficiencyListPage';
import WeaponListPage from './components/admin/equipment/weapon/WeaponListPage';

import AboutPage from './components/about/AboutPage';
import LogInPage from './components/LogInPage';
//import auth from './auth/authenticator';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={AdminHomePage} />
        <Route path="/Home" component={AdminHomePage} />
        <Route path="/admin/testbed" component={testbed} />
        <Route path="/admin/backgrounds" component={BackgroundListPage} />
        <Route path="/admin/equipment" component={EquipmentListPage} />
        <Route path="/admin/equipment/armors" component={ArmorListPage} />
        <Route path="/admin/equipment/packs" component={PackListPage} />
        <Route path="/admin/equipment/weapons" component={WeaponListPage} />
        <Route path="/admin/itemtypes" component={ItemtypeListPage} />
        <Route path="/admin/picklists" component={PicklistListPage} />
        <Route path="/admin/proficiencies" component={ProficiencyListPage} />
        <Route path="/login" component={LogInPage} />
        <Route path="/about" component={AboutPage} />
    </Route>
);

/*function requireAuth(nextState, replace) {
    if (!auth.loggedIn()) {
        replace({
            pathname: '/login',
            state: { nextPathname: nextState.location.pathname }
        });
    }
}*/

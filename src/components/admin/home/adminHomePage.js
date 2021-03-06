import React from 'react';
import {Link} from 'react-router';

class AdminHomePage extends React.Component {
    render() {
        return (
            <div className="jumbotron">
                <h1>Admin</h1>
                <p>Admin Categories Here:</p>
                <ul>
                    <li><Link to="admin/testbed">TESTBED</Link></li>
                    <li><Link to="admin/Itemtypes">Types</Link></li>
                    <li><Link to="admin/Picklists">Picklists</Link></li>
                    <li><Link to="admin/equipment/weapons">Weapons</Link></li>
                    <li><Link to="admin/equipment/armors">Armors</Link></li>
                    <li><Link to="admin/equipment">Equipment</Link></li>
                    <li><Link to="admin/equipment/packs">Equipment Packs</Link></li>
                    <li><Link to="admin/proficiencies">Proficiencies</Link></li>
                    <li><Link to="admin/backgrounds">Backgrounds</Link></li>
                    <li><Link to="admin/spells">Spells</Link></li>
                    <li><Link to="admin/spelllists">Spell Lists</Link></li>
                    <li><Link to="admin/races">Races</Link></li>
                    <li><Link to="admin/feats">Feats</Link></li>
                </ul>
            </div>
        );
    }
}

export default AdminHomePage;
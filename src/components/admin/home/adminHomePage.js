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
                </ul>
            </div>
        );
    }
}

export default AdminHomePage;
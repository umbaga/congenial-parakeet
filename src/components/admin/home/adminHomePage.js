import React from 'react';
import {Link} from 'react-router';

class AdminHomePage extends React.Component {
    render() {
        return (
            <div className="jumbotron">
                <h1>Admin-----</h1>
                <p>Admin Categories Here:bvx--xcfgg</p>
                <ul>
                    <li><Link to="admin/Itemtypes">Types</Link></li>
                    <li><Link to="admin/Picklists">Picklists</Link></li>
                </ul>
            </div>
        );
    }
}

export default AdminHomePage;
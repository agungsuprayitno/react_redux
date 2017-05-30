import React from 'react';
import {Icon, Row} from 'react-materialize';
import Logo from '../panel/Logo.jsx';
import ImageProfile from '../panel/ImageProfile.jsx';
 // import LinkNavigation  from '../navigation/LinkNavigation.jsx';
 // import { DropDownNavigation} from './DropDownNavigation.jsx';

class Side extends React.Component {

    render() {
        return (
        <Row>
            <ul className="side-nav fixed">
                <Logo/>
                <ImageProfile/>
                <li className="bold">
                    <a href="/home" className="waves-effect waves-orange">
                        <Icon>dashboard</Icon>
                        Home
                    </a>
                </li>
                <li className="bold">
                    <a href="/users" className="waves-effect waves-orange">
                        <Icon>perm_identity</Icon>
                        User
                    </a>
                </li>
                <li className="bold">
                    <a href="/branch" className="waves-effect waves-orange">
                        <Icon>business</Icon>
                        Branch
                    </a>
                </li>
                <li className="bold">
                    <a href="/invoice" className="waves-effect waves-orange">
                        <Icon>description</Icon>
                        Invoice
                    </a>
                </li>
                <li className="bold">
                    <a href="/approval" className="waves-effect waves-orange">
                        <Icon>supervisor_account</Icon>
                        Approval
                    </a>
                </li>
                <li className="bold">
                    <a href="/import_order" className="waves-effect waves-orange">
                        <Icon>backup</Icon>
                        Import Order
                    </a>
                </li>
                <li className="bold">
                    <a href="/approval" className="waves-effect waves-orange">
                        <Icon>library_books</Icon>
                        Dropdown
                    </a>
                </li>
            </ul>
        </Row>
        );
    }

}

export default Side;


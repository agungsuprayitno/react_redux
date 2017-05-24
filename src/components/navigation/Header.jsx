import React from 'react';

import { Row, Icon } from 'react-materialize';

class Header extends React.Component {

    constructor(props){
        super(props)
        this.logout = this.logout.bind(this)
    }

    logout(){
        localStorage.removeItem('token')
        window.location.href = "/"
    }

    render() {
        return (
            <Row>
                <nav>
                    <div className="nav-wrapper amber darken-2">
                        <ul className="right hide-on-med-and-down">
                            <li><a href="#" onClick={this.logout}><Icon>power_settings_new</Icon></a></li>
                        </ul>
                    </div>
                </nav>
            </Row>
        );
    }

}

export default Header;
import React from 'react';
import { Icon } from 'react-materialize';

class LinkNavigation extends React.Component {
    render() {
        let badge = null;

        return (
            <li className="bold">
                <a href={ this.props.url } className="waves-effect waves-orange">
                    <Icon>{ this.props.icon }</Icon>
                    { this.props.label }
                    { badge }
                </a>
            </li>
        );
    }
}

export default LinkNavigation;
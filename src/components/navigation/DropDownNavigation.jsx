import React from 'react';

import { LinkNavigation } from './LinkNavigation.jsx';
import { Icon } from 'react-materialize';

class DropDownNavigation extends React.Component {

    render() {
        var children = [];
        for (var i = 0; i < this.props.list.length; i++) {
            children.push(<LinkNavigation url={this.props.list[i].url} icon={this.props.list[i].icon} label={this.props.list[i].label}/>)
        }
        return (
            <li>
                <ul className="collapsible collapsible-accordion">
                    <li className="bold">
                        <a className="collapsible-header waves-effect waves-orange">
                            <Icon>{ this.props.icon }</Icon>
                            { this.props.label }
                            <b className="caret"></b>
                        </a>
                        <div className="collapsible-body">
                            <ul>
                                { children }
                            </ul>
                        </div>
                    </li>
                </ul>
            </li>
        );
    }

}

export default DropDownNavigation;